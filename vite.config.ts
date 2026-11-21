import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  let resolvedOutDir = 'dist';

  return {
    base: './',
    plugins: [
      react(),
      tailwindcss(),
      // Copies src/assets into dist/ so root-relative URLs like
      // "/src/assets/images/..." (e.g. generate_image output) still resolve
      // in production builds. Do not remove.
      {
        name: 'copy-unbundled-src-assets',
        apply: 'build',
        configResolved(config) {
          resolvedOutDir = config.build.outDir;
        },
        closeBundle(error?: Error): void {
          if (error) {
            return;
          }
          const outDirPath = path.resolve(__dirname, resolvedOutDir);
          const srcAssets = path.resolve(__dirname, 'src/assets');
          const outAssets = path.resolve(outDirPath, 'src/assets');
          if (fs.existsSync(outDirPath) && fs.existsSync(srcAssets)) {
            fs.cpSync(srcAssets, outAssets, {recursive: true, force: true});
          }
          // Emit 404.html copy of index.html for GitHub Pages direct-route fallback.
          const indexHtml = path.resolve(outDirPath, 'index.html');
          const notFoundHtml = path.resolve(outDirPath, '404.html');
          if (fs.existsSync(indexHtml)) {
            fs.copyFileSync(indexHtml, notFoundHtml);
          }
        },
      },
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
