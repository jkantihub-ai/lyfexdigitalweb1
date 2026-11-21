import { useEffect, useMemo, useState } from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import {
  APPROACH_PHASES,
  CAPABILITIES,
  CASE_STUDIES,
  HERO_MEDIA,
  IMPACT_METRICS,
  JOURNAL_ARTICLES,
  LEGAL_DOCUMENTS,
  type CaseStudy,
  type CaseStudyCategory,
  type JournalArticle,
  type LegalDocument,
} from './data/siteContent';
import { Navbar, type ActivePage } from './components/Navbar';
import { AboutPage } from './components/AboutPage';
import { ResilientImage } from './components/ResilientImage';
import { CaseStudyModal } from './components/CaseStudyModal';
import { JournalModal } from './components/JournalModal';
import { ContactSection, type InquiryScope } from './components/ContactSection';

type WorkFilter = 'All Work' | CaseStudyCategory;

const WORK_FILTERS: WorkFilter[] = [
  'All Work',
  'Product Engineering',
  'Brand & Web',
  'Growth Systems',
];

function resolvePageFromLocation(): ActivePage {
  if (typeof window === 'undefined') return 'home';
  const normalizedPath = window.location.pathname.replace(/\/+$/, '');
  if (window.location.hash === '#about' || normalizedPath.endsWith('/about')) {
    return 'about';
  }
  return 'home';
}

export default function App() {
  const [currentPage, setCurrentPage] = useState<ActivePage>(resolvePageFromLocation);
  const [activeFilter, setActiveFilter] = useState<WorkFilter>('All Work');
  const [selectedStudy, setSelectedStudy] = useState<CaseStudy | null>(null);
  const [activeArticle, setActiveArticle] = useState<JournalArticle | null>(null);
  const [activeLegalDoc, setActiveLegalDoc] = useState<LegalDocument | null>(null);
  const [preselectedScope, setPreselectedScope] = useState<InquiryScope>('Product Engineering');
  const [preselectedNote, setPreselectedNote] = useState('');

  useEffect(() => {
    const syncPageWithHash = () => {
      const nextPage = resolvePageFromLocation();
      setCurrentPage(nextPage);
      if (nextPage === 'about') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };

    window.addEventListener('hashchange', syncPageWithHash);
    window.addEventListener('popstate', syncPageWithHash);
    return () => {
      window.removeEventListener('hashchange', syncPageWithHash);
      window.removeEventListener('popstate', syncPageWithHash);
    };
  }, []);

  const filteredStudies = useMemo(() => {
    if (activeFilter === 'All Work') return CASE_STUDIES;
    return CASE_STUDIES.filter((study) => study.category === activeFilter);
  }, [activeFilter]);

  const navigateTo = (page: ActivePage, sectionId?: string) => {
    if (page === 'about') {
      setCurrentPage('about');
      if (window.location.hash !== '#about') {
        window.history.pushState(null, '', '#about');
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const wasOnAbout = currentPage === 'about';
    setCurrentPage('home');
    const targetHash = sectionId && sectionId !== 'top' ? `#${sectionId}` : '#top';
    if (window.location.hash !== targetHash) {
      window.history.pushState(null, '', targetHash);
    }

    if (!sectionId || sectionId === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const scrollToTarget = () => {
      const targetEl = document.getElementById(sectionId);
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };

    if (wasOnAbout) {
      window.requestAnimationFrame(() => {
        window.requestAnimationFrame(scrollToTarget);
      });
    } else {
      scrollToTarget();
    }
  };

  const scrollToContact = (scope?: InquiryScope, note?: string) => {
    if (scope) setPreselectedScope(scope);
    if (note !== undefined) setPreselectedNote(note);
    navigateTo('home', 'contact');
  };

  const handleDiscussSimilarScope = (category: CaseStudyCategory, clientRef: string) => {
    setSelectedStudy(null);
    scrollToContact(
      category,
      `Interested in discussing a ${category.toLowerCase()} engagement similar in scope to the ${clientRef} project.`,
    );
  };

  const openArticle = (article: JournalArticle) => {
    setActiveLegalDoc(null);
    setActiveArticle(article);
  };

  const openLegal = (docKey: 'privacy' | 'terms') => {
    setActiveArticle(null);
    setActiveLegalDoc(LEGAL_DOCUMENTS[docKey]);
  };

  const closeReader = () => {
    setActiveArticle(null);
    setActiveLegalDoc(null);
  };

  const featuredTestimonials = CASE_STUDIES.slice(0, 2);

  return (
    <div id="top" className="min-h-screen bg-[#FAFAFA] text-[#0E1116]">
      <Navbar
        currentPage={currentPage}
        onNavigate={navigateTo}
        onStartProject={() => scrollToContact()}
      />

      <main>
        {currentPage === 'about' ? (
          <AboutPage
            onStartProject={scrollToContact}
            onViewWork={() => navigateTo('home', 'work')}
          />
        ) : (
          <>
        {/* 1. HERO SECTION: Proposition + Architectural Visual + Full-Width Proof Strip */}
        <section className="pt-12 pb-16 lg:pt-20 lg:pb-24">
          <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
            <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12 lg:gap-12">
              <div className="flex flex-col justify-between lg:col-span-6 lg:py-2">
                <div>
                  <p className="text-sm text-neutral-500">
                    Independent Digital Studio
                    <span className="mx-2" aria-hidden="true">
                      ·
                    </span>
                    Austin &amp; London
                  </p>

                  <h1 className="mt-5 font-display text-[clamp(2.35rem,4vw,3.75rem)] leading-[1.06] font-semibold tracking-tight text-[#0E1116] [text-wrap:balance]">
                    Digital products and growth platforms built to perform.
                  </h1>

                  <p className="mt-6 max-w-xl text-base leading-relaxed text-neutral-600 sm:text-lg">
                    Lyfex Digital designs, engineers, and scales custom web applications, brand
                    flagships, and technical acquisition engines for B2B and consumer teams that
                    measure work in revenue, speed, and longevity.
                  </p>
                </div>

                <div className="mt-9 flex flex-wrap items-center gap-6">
                  <button
                    type="button"
                    onClick={() => scrollToContact()}
                    className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-md bg-[#1D4ED8] px-6 py-2.5 text-sm font-medium text-white whitespace-nowrap shrink-0 transition-colors duration-150 hover:bg-[#1E40AF] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D4ED8] cursor-pointer"
                  >
                    <span>Schedule Discovery Call</span>
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </button>

                  <a
                    href="#work"
                    className="inline-flex min-h-[44px] items-center gap-1.5 text-sm font-medium text-[#0E1116] whitespace-nowrap shrink-0 transition-colors duration-150 hover:text-[#1D4ED8] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1D4ED8]"
                  >
                    <span>View Selected Work</span>
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg border border-neutral-200 bg-neutral-100 lg:aspect-auto lg:h-full lg:min-h-[420px]">
                  <ResilientImage
                    src={HERO_MEDIA.image}
                    alt={HERO_MEDIA.alt}
                    fallbackTitle={HERO_MEDIA.caption}
                    priority
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Full-Width 4-Column Quantified Proof Strip */}
            <div className="mt-14 grid grid-cols-1 gap-8 border-t border-neutral-200 pt-10 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
              {IMPACT_METRICS.map((metric) => (
                <div key={metric.label} className="space-y-1.5">
                  <div className="font-mono text-3xl font-medium tracking-tight text-[#0E1116] tabular-nums">
                    {metric.value}
                  </div>
                  <div className="text-sm font-medium text-[#0E1116]">{metric.label}</div>
                  <p className="text-xs leading-relaxed text-neutral-500">{metric.context}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 2. CAPABILITIES SECTION: Asymmetric Bento Grid */}
        <section
          id="capabilities"
          aria-labelledby="capabilities-heading"
          className="border-t border-neutral-200 bg-white py-20 lg:py-28"
        >
          <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
            <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
              <div className="max-w-2xl">
                <p className="text-sm text-neutral-500">Capabilities</p>
                <h2
                  id="capabilities-heading"
                  className="mt-2 font-display text-3xl font-semibold tracking-tight text-[#0E1116] sm:text-4xl [text-wrap:balance]"
                >
                  Four disciplines aligned around measurable commercial outcomes
                </h2>
              </div>
              <p className="max-w-md text-sm leading-relaxed text-neutral-600">
                Senior designers, full-stack engineers, and acquisition strategists work inside one
                integrated team—preventing the handoff gaps common between agencies.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
              {CAPABILITIES.map((cap) => (
                <article
                  key={cap.number}
                  className={`flex flex-col justify-between rounded-lg border border-neutral-200 bg-[#FAFAFA] p-6 sm:p-8 ${
                    cap.featured ? 'lg:col-span-2' : 'lg:col-span-1'
                  }`}
                >
                  <div>
                    <div className="flex items-baseline justify-between gap-4">
                      <span className="font-mono text-sm font-medium text-neutral-500 tabular-nums">
                        {cap.number}
                      </span>
                      <span className="text-xs text-neutral-500">
                        Typical cadence: {cap.typicalTimeline}
                      </span>
                    </div>

                    <h3 className="mt-4 font-display text-xl font-semibold tracking-tight text-[#0E1116] sm:text-2xl">
                      {cap.title}
                    </h3>

                    <p className="mt-3 max-w-2xl text-sm leading-relaxed text-neutral-600 sm:text-base">
                      {cap.summary}
                    </p>

                    <ul
                      className={`mt-6 grid grid-cols-1 gap-y-2 gap-x-6 border-t border-neutral-200/80 pt-5 text-sm text-neutral-700 ${
                        cap.featured ? 'sm:grid-cols-2' : ''
                      }`}
                    >
                      {cap.deliverables.map((item) => (
                        <li key={item} className="leading-snug">
                          — {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-7 pt-2">
                    <button
                      type="button"
                      onClick={() =>
                        scrollToContact(
                          cap.focusKey,
                          `Interested in scoping a ${cap.title.toLowerCase()} engagement.`,
                        )
                      }
                      className="inline-flex min-h-[40px] items-center gap-1.5 text-sm font-medium text-[#1D4ED8] whitespace-nowrap transition-colors duration-150 hover:text-[#1E40AF] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1D4ED8] cursor-pointer"
                    >
                      <span>Scope this capability</span>
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 3. SELECTED WORK / CASE STUDIES: Proof of Impact Adjacent to Capabilities */}
        <section
          id="work"
          aria-labelledby="work-heading"
          className="border-t border-neutral-200 bg-[#FAFAFA] py-20 lg:py-28"
        >
          <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
            <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
              <div className="max-w-2xl">
                <p className="text-sm text-neutral-500">Selected Work</p>
                <h2
                  id="work-heading"
                  className="mt-2 font-display text-3xl font-semibold tracking-tight text-[#0E1116] sm:text-4xl [text-wrap:balance]"
                >
                  Recent platforms, brand flagships, and documented results
                </h2>
              </div>

              {/* Interactive Segmented Filter Bar */}
              <div
                role="tablist"
                aria-label="Filter case studies by discipline"
                className="flex flex-wrap items-center gap-1 self-start rounded-lg bg-neutral-200/70 p-1 lg:self-auto"
              >
                {WORK_FILTERS.map((filter) => {
                  const isActive = activeFilter === filter;
                  return (
                    <button
                      key={filter}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      onClick={() => setActiveFilter(filter)}
                      className={`min-h-[38px] rounded-md px-3.5 py-1.5 text-xs font-medium whitespace-nowrap shrink-0 transition-colors duration-150 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D4ED8] ${
                        isActive
                          ? 'bg-white text-[#0E1116] shadow-xs'
                          : 'text-neutral-600 hover:text-[#0E1116]'
                      }`}
                    >
                      {filter}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
              {filteredStudies.map((study) => (
                <article
                  key={study.id}
                  className="group flex flex-col overflow-hidden rounded-lg border border-neutral-200 bg-white transition-colors duration-150 hover:border-neutral-300"
                >
                  <button
                    type="button"
                    onClick={() => setSelectedStudy(study)}
                    className="block aspect-[4/3] w-full overflow-hidden bg-neutral-100 text-left focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#1D4ED8] cursor-pointer"
                    aria-label={`Read ${study.client} case study`}
                  >
                    <ResilientImage
                      src={study.image}
                      alt={study.imageAlt}
                      fallbackTitle={study.client}
                      className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.02]"
                    />
                  </button>

                  <div className="flex flex-1 flex-col justify-between p-6 sm:p-8">
                    <div>
                      <div className="flex flex-wrap items-center gap-2 text-xs text-neutral-500">
                        <span className="font-medium text-[#0E1116]">{study.client}</span>
                        <span aria-hidden="true">·</span>
                        <span>{study.category}</span>
                        <span aria-hidden="true">·</span>
                        <span className="font-mono tabular-nums">{study.year}</span>
                      </div>

                      <h3 className="mt-3 font-display text-xl font-semibold tracking-tight text-[#0E1116] sm:text-2xl [text-wrap:balance]">
                        {study.title}
                      </h3>

                      <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                        {study.summary}
                      </p>
                    </div>

                    <div className="mt-6 border-t border-neutral-200 pt-5">
                      <div className="flex flex-wrap items-end justify-between gap-4">
                        <div>
                          <div className="font-mono text-lg font-medium tracking-tight text-[#0E1116] tabular-nums">
                            {study.headlineMetric}
                          </div>
                          <p className="mt-0.5 text-xs text-neutral-500">
                            {study.headlineMetricContext}
                          </p>
                        </div>

                        <button
                          type="button"
                          onClick={() => setSelectedStudy(study)}
                          className="inline-flex min-h-[40px] items-center gap-1.5 text-sm font-medium text-[#1D4ED8] whitespace-nowrap shrink-0 transition-colors duration-150 hover:text-[#1E40AF] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1D4ED8] cursor-pointer"
                        >
                          <span>Read Case Study</span>
                          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                        </button>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Attributable Client Perspectives — Directly Adjacent to Proof */}
            <div className="mt-20 border-t border-neutral-200 pt-14">
              <p className="text-sm text-neutral-500">Client Perspectives</p>
              <div className="mt-6 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
                {featuredTestimonials.map((study) => (
                  <figure key={study.id} className="flex flex-col justify-between">
                    <blockquote className="text-lg leading-relaxed text-[#0E1116]">
                      “{study.testimonial.quote}”
                    </blockquote>
                    <figcaption className="mt-5 text-sm text-neutral-500">
                      <span className="font-medium text-[#0E1116]">{study.testimonial.author}</span>
                      <span className="mx-2" aria-hidden="true">
                        ·
                      </span>
                      <span>
                        {study.testimonial.role}, {study.testimonial.company}
                      </span>
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 4. DELIVERY APPROACH + EDITORIAL JOURNAL */}
        <section
          id="approach"
          aria-labelledby="approach-heading"
          className="border-t border-neutral-200 bg-white py-20 lg:py-28"
        >
          <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
            <div className="max-w-2xl">
              <p className="text-sm text-neutral-500">How We Deliver</p>
              <h2
                id="approach-heading"
                className="mt-2 font-display text-3xl font-semibold tracking-tight text-[#0E1116] sm:text-4xl [text-wrap:balance]"
              >
                A structured eleven-week cadence built for transparency
              </h2>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-8 border-t border-neutral-200 pt-10 sm:grid-cols-2 lg:grid-cols-4">
              {APPROACH_PHASES.map((phase) => (
                <div key={phase.number} className="flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between gap-2 text-xs text-neutral-500">
                      <span className="font-mono font-medium text-[#0E1116] tabular-nums">
                        {phase.number}
                      </span>
                      <span>{phase.duration}</span>
                    </div>
                    <h3 className="mt-3 font-display text-lg font-semibold tracking-tight text-[#0E1116]">
                      {phase.title}
                    </h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-neutral-600">
                      {phase.description}
                    </p>
                  </div>

                  <ul className="mt-5 space-y-1.5 border-t border-neutral-200/80 pt-4 text-xs text-neutral-500">
                    {phase.outputs.map((output) => (
                      <li key={output}>— {output}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* EDITORIAL JOURNAL */}
        <section
          id="journal"
          aria-labelledby="journal-heading"
          className="border-t border-neutral-200 bg-[#FAFAFA] py-20 lg:py-28"
        >
          <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <p className="text-sm text-neutral-500">Studio Journal</p>
                <h2
                  id="journal-heading"
                  className="mt-2 font-display text-3xl font-semibold tracking-tight text-[#0E1116] sm:text-4xl [text-wrap:balance]"
                >
                  Notes on product architecture and growth
                </h2>
              </div>
              <p className="text-sm text-neutral-500">Written by our engineering and strategy leads</p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
              {JOURNAL_ARTICLES.map((article) => (
                <article
                  key={article.id}
                  className="flex flex-col justify-between rounded-lg border border-neutral-200 bg-white p-6 transition-colors duration-150 hover:border-neutral-300"
                >
                  <div>
                    <div className="flex flex-wrap items-center gap-2 text-xs text-neutral-500">
                      <span>{article.topic}</span>
                      <span aria-hidden="true">·</span>
                      <span>{article.date}</span>
                      <span aria-hidden="true">·</span>
                      <span>{article.readTime}</span>
                    </div>

                    <h3 className="mt-3 font-display text-lg font-semibold leading-snug tracking-tight text-[#0E1116]">
                      {article.title}
                    </h3>

                    <p className="mt-2.5 text-sm leading-relaxed text-neutral-600">
                      {article.excerpt}
                    </p>
                  </div>

                  <div className="mt-6 flex items-center justify-between gap-4 border-t border-neutral-200/80 pt-4">
                    <span className="text-xs text-neutral-500">{article.author}</span>
                    <button
                      type="button"
                      onClick={() => openArticle(article)}
                      className="inline-flex min-h-[36px] items-center gap-1 text-xs font-medium text-[#1D4ED8] whitespace-nowrap shrink-0 transition-colors duration-150 hover:text-[#1E40AF] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1D4ED8] cursor-pointer"
                    >
                      <span>Read Note</span>
                      <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 5. CONVERSION / PROJECT INQUIRY */}
        <ContactSection
          preselectedScope={preselectedScope}
          preselectedNote={preselectedNote}
        />
          </>
        )}
      </main>

      {/* QUIET FOOTER */}
      <footer className="border-t border-neutral-200 bg-[#FAFAFA] py-12">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">
            <div>
              <a
                href="#top"
                onClick={(e) => {
                  e.preventDefault();
                  navigateTo('home', 'top');
                }}
                className="font-display text-base font-semibold tracking-tight text-[#0E1116]"
              >
                Lyfex Digital
              </a>
              <p className="mt-1 text-xs text-neutral-500">
                Austin, TX · London, UK · Digital Product &amp; Growth Studio
              </p>
            </div>

            <nav
              aria-label="Footer navigation"
              className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-neutral-600"
            >
              <a
                href="#capabilities"
                onClick={(e) => {
                  e.preventDefault();
                  navigateTo('home', 'capabilities');
                }}
                className="transition-colors hover:text-[#0E1116]"
              >
                Capabilities
              </a>
              <a
                href="#work"
                onClick={(e) => {
                  e.preventDefault();
                  navigateTo('home', 'work');
                }}
                className="transition-colors hover:text-[#0E1116]"
              >
                Work
              </a>
              <a
                href="#approach"
                onClick={(e) => {
                  e.preventDefault();
                  navigateTo('home', 'approach');
                }}
                className="transition-colors hover:text-[#0E1116]"
              >
                Approach
              </a>
              <a
                href="#journal"
                onClick={(e) => {
                  e.preventDefault();
                  navigateTo('home', 'journal');
                }}
                className="transition-colors hover:text-[#0E1116]"
              >
                Journal
              </a>
              <a
                href="#about"
                onClick={(e) => {
                  e.preventDefault();
                  navigateTo('about');
                }}
                className={`transition-colors ${
                  currentPage === 'about'
                    ? 'font-medium text-[#0E1116]'
                    : 'hover:text-[#0E1116]'
                }`}
              >
                About
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  navigateTo('home', 'contact');
                }}
                className="transition-colors hover:text-[#0E1116]"
              >
                Contact
              </a>
            </nav>
          </div>

          <div className="mt-8 flex flex-col justify-between gap-4 border-t border-neutral-200 pt-6 text-xs text-neutral-500 sm:flex-row sm:items-center">
            <p>© 2026 Lyfex Digital LLC. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <button
                type="button"
                onClick={() => openLegal('privacy')}
                className="transition-colors hover:text-[#0E1116] cursor-pointer"
              >
                Privacy Policy
              </button>
              <button
                type="button"
                onClick={() => openLegal('terms')}
                className="transition-colors hover:text-[#0E1116] cursor-pointer"
              >
                Terms of Engagement
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Interactive Modals */}
      <CaseStudyModal
        study={selectedStudy}
        onClose={() => setSelectedStudy(null)}
        onDiscussScope={handleDiscussSimilarScope}
      />

      <JournalModal
        article={activeArticle}
        legalDoc={activeLegalDoc}
        onClose={closeReader}
      />
    </div>
  );
}
