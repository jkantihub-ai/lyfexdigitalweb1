import { useEffect } from 'react';
import { ArrowRight, X } from 'lucide-react';
import type { CaseStudy, CaseStudyCategory } from '../data/siteContent';
import { ResilientImage } from './ResilientImage';

interface CaseStudyModalProps {
  study: CaseStudy | null;
  onClose: () => void;
  onDiscussScope: (category: CaseStudyCategory, clientRef: string) => void;
}

export function CaseStudyModal({ study, onClose, onDiscussScope }: CaseStudyModalProps) {
  useEffect(() => {
    if (!study) return;

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
  }, [study, onClose]);

  if (!study) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#0E1116]/60 p-4 backdrop-blur-[2px] sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-modal-title"
      onClick={onClose}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-lg border border-neutral-200 bg-white shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 z-10 flex items-center justify-between gap-4 border-b border-neutral-200 bg-white/95 px-6 py-4 backdrop-blur-sm sm:px-8">
          <div className="flex flex-wrap items-center gap-2 text-xs text-neutral-500">
            <span className="font-medium text-[#0E1116]">{study.client}</span>
            <span aria-hidden="true">·</span>
            <span>{study.industry}</span>
            <span aria-hidden="true">·</span>
            <span>{study.location}</span>
            <span aria-hidden="true">·</span>
            <span className="font-mono tabular-nums">{study.year}</span>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close case study"
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md text-neutral-500 transition-colors duration-150 hover:bg-neutral-100 hover:text-[#0E1116] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D4ED8] cursor-pointer"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="p-6 sm:p-8">
          <h2
            id="case-study-modal-title"
            className="font-display text-2xl font-semibold tracking-tight text-[#0E1116] sm:text-3xl [text-wrap:balance]"
          >
            {study.title}
          </h2>

          <p className="mt-3 max-w-2xl text-base leading-relaxed text-neutral-600">
            {study.summary}
          </p>

          <div className="mt-6 aspect-[16/10] w-full overflow-hidden rounded-md bg-neutral-100">
            <ResilientImage
              src={study.image}
              alt={study.imageAlt}
              fallbackTitle={study.client}
              className="h-full w-full object-cover"
            />
          </div>

          {/* Quantified Outcomes */}
          <div className="mt-8 grid grid-cols-1 gap-6 border-y border-neutral-200 py-6 sm:grid-cols-3">
            {study.outcomes.map((outcome) => (
              <div key={outcome.figure}>
                <div className="font-mono text-2xl font-medium tracking-tight text-[#0E1116] tabular-nums sm:text-3xl">
                  {outcome.figure}
                </div>
                <p className="mt-1.5 text-sm leading-relaxed text-neutral-600">{outcome.detail}</p>
              </div>
            ))}
          </div>

          {/* Challenge & Architecture */}
          <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2">
            <div>
              <h3 className="font-display text-base font-semibold text-[#0E1116]">The Challenge</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-neutral-600">{study.challenge}</p>
            </div>
            <div>
              <h3 className="font-display text-base font-semibold text-[#0E1116]">
                Architecture & Delivery
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-neutral-600">
                {study.architecture}
              </p>
            </div>
          </div>

          {/* Scope Deliverables */}
          <div className="mt-8 border-t border-neutral-200 pt-6">
            <h3 className="font-display text-sm font-semibold text-[#0E1116]">Scope Delivered</h3>
            <ul className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
              {study.deliverables.map((item) => (
                <li key={item} className="text-sm text-neutral-600">
                  — {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Attributable Executive Testimonial */}
          <figure className="mt-8 border-t border-neutral-200 pt-6">
            <blockquote className="text-base leading-relaxed text-[#0E1116]">
              “{study.testimonial.quote}”
            </blockquote>
            <figcaption className="mt-3 text-sm text-neutral-500">
              <span className="font-medium text-[#0E1116]">{study.testimonial.author}</span>
              <span className="mx-2" aria-hidden="true">
                ·
              </span>
              <span>
                {study.testimonial.role}, {study.testimonial.company}
              </span>
            </figcaption>
          </figure>

          {/* Footer Action */}
          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-neutral-200 pt-6">
            <p className="text-sm text-neutral-600">
              Planning a comparable {study.category.toLowerCase()} initiative?
            </p>
            <button
              type="button"
              onClick={() => onDiscussScope(study.category, study.client)}
              className="inline-flex min-h-[42px] items-center gap-2 rounded-md bg-[#1D4ED8] px-5 py-2.5 text-sm font-medium text-white whitespace-nowrap shrink-0 transition-colors duration-150 hover:bg-[#1E40AF] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D4ED8] cursor-pointer"
            >
              <span>Discuss a Similar Scope</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
