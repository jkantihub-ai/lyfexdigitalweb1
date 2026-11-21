import { useEffect } from 'react';
import { X } from 'lucide-react';
import type { JournalArticle, LegalDocument } from '../data/siteContent';

interface JournalModalProps {
  article: JournalArticle | null;
  legalDoc: LegalDocument | null;
  onClose: () => void;
}

export function JournalModal({ article, legalDoc, onClose }: JournalModalProps) {
  const isOpen = Boolean(article || legalDoc);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#0E1116]/60 p-4 backdrop-blur-[2px] sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="reader-modal-title"
      onClick={onClose}
    >
      <div
        className="relative max-h-[88vh] w-full max-w-2xl overflow-y-auto rounded-lg border border-neutral-200 bg-white shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 z-10 flex items-center justify-between gap-4 border-b border-neutral-200 bg-white/95 px-6 py-4 backdrop-blur-sm sm:px-8">
          {article ? (
            <div className="flex flex-wrap items-center gap-2 text-xs text-neutral-500">
              <span>{article.topic}</span>
              <span aria-hidden="true">·</span>
              <span>{article.date}</span>
              <span aria-hidden="true">·</span>
              <span>{article.readTime}</span>
            </div>
          ) : (
            <div className="text-xs text-neutral-500">{legalDoc?.updated}</div>
          )}

          <button
            type="button"
            onClick={onClose}
            aria-label="Close reader"
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md text-neutral-500 transition-colors duration-150 hover:bg-neutral-100 hover:text-[#0E1116] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D4ED8] cursor-pointer"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="p-6 sm:p-8">
          {article && (
            <>
              <h2
                id="reader-modal-title"
                className="font-display text-2xl font-semibold tracking-tight text-[#0E1116] sm:text-3xl [text-wrap:balance]"
              >
                {article.title}
              </h2>

              <div className="mt-3 text-sm text-neutral-500">
                By <span className="font-medium text-[#0E1116]">{article.author}</span>
                <span className="mx-2" aria-hidden="true">
                  ·
                </span>
                <span>{article.authorRole}</span>
              </div>

              <div className="mt-6 space-y-4 border-t border-neutral-200 pt-6 text-base leading-relaxed text-neutral-700">
                {article.paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              <div className="mt-8 border-t border-neutral-200 pt-6">
                <h3 className="font-display text-sm font-semibold text-[#0E1116]">
                  Key Principles
                </h3>
                <ul className="mt-3 space-y-2.5 text-sm leading-relaxed text-neutral-600">
                  {article.keyTakeaways.map((point, index) => (
                    <li key={index} className="flex gap-3">
                      <span className="font-mono text-xs text-neutral-400 tabular-nums pt-0.5">
                        0{index + 1}.
                      </span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </>
          )}

          {legalDoc && (
            <>
              <h2
                id="reader-modal-title"
                className="font-display text-2xl font-semibold tracking-tight text-[#0E1116] sm:text-3xl"
              >
                {legalDoc.title}
              </h2>

              <div className="mt-6 space-y-6 border-t border-neutral-200 pt-6">
                {legalDoc.sections.map((section) => (
                  <div key={section.heading}>
                    <h3 className="font-display text-base font-semibold text-[#0E1116]">
                      {section.heading}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-neutral-600">{section.body}</p>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
