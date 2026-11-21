import { useState } from 'react';
import { Layers } from 'lucide-react';

interface ResilientImageProps {
  src: string;
  alt: string;
  fallbackTitle: string;
  className?: string;
  priority?: boolean;
}

export function ResilientImage({
  src,
  alt,
  fallbackTitle,
  className = '',
  priority = false,
}: ResilientImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-neutral-100 via-neutral-200/70 to-neutral-100 p-8 text-center text-neutral-600 ${className}`}
      >
        <Layers className="h-7 w-7 text-neutral-400" strokeWidth={1.5} aria-hidden="true" />
        <span className="font-display text-sm font-medium tracking-tight text-neutral-700">
          {fallbackTitle}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      loading={priority ? 'eager' : 'lazy'}
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
