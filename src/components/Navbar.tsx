import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export type ActivePage = 'home' | 'about' | 'contact';

interface NavbarProps {
  currentPage: ActivePage;
  onNavigate: (page: ActivePage, sectionId?: string) => void;
  onStartProject: () => void;
}

const HOME_SECTION_LINKS = [
  { label: 'Capabilities', sectionId: 'capabilities' },
  { label: 'Portfolio', sectionId: 'umbrella' },
  { label: 'Work', sectionId: 'work' },
];

export function Navbar({ currentPage, onNavigate, onStartProject }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNavClick = (page: ActivePage, sectionId?: string) => {
    setMobileOpen(false);
    onNavigate(page, sectionId);
  };

  const handleMobileCta = () => {
    setMobileOpen(false);
    onStartProject();
  };

  return (
    <header className="sticky top-0 z-40 border-b border-neutral-200/90 bg-[#FAFAFA]/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between gap-8 px-6 lg:px-8">
        {/* Zone 1: Single-element Brand Wordmark */}
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('home', 'top');
          }}
          className="font-display text-lg font-semibold tracking-tight text-[#0E1116] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1D4ED8]"
        >
          LyfexDigital®
        </a>

        {/* Zone 2: 5 concise single-line text links */}
        <nav
          aria-label="Primary navigation"
          className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-600"
        >
          {HOME_SECTION_LINKS.map((link) => (
            <a
              key={link.sectionId}
              href={`#${link.sectionId}`}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('home', link.sectionId);
              }}
              className="relative py-1 whitespace-nowrap shrink-0 transition-colors duration-150 hover:text-[#0E1116] after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-[#0E1116] after:transition-[width] after:duration-200 hover:after:w-full focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1D4ED8]"
            >
              {link.label}
            </a>
          ))}

          <a
            href="#about"
            aria-current={currentPage === 'about' ? 'page' : undefined}
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('about');
            }}
            className={`relative py-1 whitespace-nowrap shrink-0 transition-colors duration-150 after:absolute after:bottom-0 after:left-0 after:h-px after:bg-[#0E1116] after:transition-[width] after:duration-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1D4ED8] ${
              currentPage === 'about'
                ? 'text-[#0E1116] after:w-full'
                : 'hover:text-[#0E1116] after:w-0 hover:after:w-full'
            }`}
          >
            About
          </a>

          <a
            href="#contact"
            aria-current={currentPage === 'contact' ? 'page' : undefined}
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('contact');
            }}
            className={`relative py-1 whitespace-nowrap shrink-0 transition-colors duration-150 after:absolute after:bottom-0 after:left-0 after:h-px after:bg-[#0E1116] after:transition-[width] after:duration-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1D4ED8] ${
              currentPage === 'contact'
                ? 'text-[#0E1116] after:w-full'
                : 'hover:text-[#0E1116] after:w-0 hover:after:w-full'
            }`}
          >
            Contact
          </a>
        </nav>

        {/* Zone 3: 1 Primary Action (Desktop) + Mobile Menu Trigger */}
        <div className="flex items-center shrink-0">
          <button
            type="button"
            onClick={onStartProject}
            className="hidden md:inline-flex min-h-[40px] items-center justify-center rounded-md bg-[#1D4ED8] px-4 py-2 text-sm font-medium text-white whitespace-nowrap shrink-0 transition-colors duration-150 hover:bg-[#1E40AF] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D4ED8] cursor-pointer"
          >
            Start a Project
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="inline-flex h-11 w-11 items-center justify-center rounded-md text-[#0E1116] transition-colors duration-150 hover:bg-neutral-200/60 md:hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D4ED8] cursor-pointer"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-neutral-200 bg-[#FAFAFA] px-6 py-5 md:hidden"
        >
          <nav aria-label="Mobile navigation" className="flex flex-col gap-1">
            {HOME_SECTION_LINKS.map((link) => (
              <a
                key={link.sectionId}
                href={`#${link.sectionId}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('home', link.sectionId);
                }}
                className="flex min-h-[44px] items-center text-base font-medium text-neutral-700 transition-colors hover:text-[#0E1116]"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#about"
              aria-current={currentPage === 'about' ? 'page' : undefined}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('about');
              }}
              className={`flex min-h-[44px] items-center text-base font-medium transition-colors ${
                currentPage === 'about'
                  ? 'text-[#1D4ED8]'
                  : 'text-neutral-700 hover:text-[#0E1116]'
              }`}
            >
              About
            </a>
            <a
              href="#contact"
              aria-current={currentPage === 'contact' ? 'page' : undefined}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('contact');
              }}
              className={`flex min-h-[44px] items-center text-base font-medium transition-colors ${
                currentPage === 'contact'
                  ? 'text-[#1D4ED8]'
                  : 'text-neutral-700 hover:text-[#0E1116]'
              }`}
            >
              Contact
            </a>
            <div className="pt-3">
              <button
                type="button"
                onClick={handleMobileCta}
                className="flex min-h-[44px] w-full items-center justify-center rounded-md bg-[#1D4ED8] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#1E40AF] cursor-pointer"
              >
                Start a Project
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
