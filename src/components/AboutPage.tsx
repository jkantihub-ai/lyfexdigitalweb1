import { useEffect, useMemo, useState } from 'react';
import { ArrowRight, ArrowUpRight, X } from 'lucide-react';
import {
  ABOUT_HERO,
  COMPANY_HISTORY,
  COMPANY_VALUES,
  MISSION_CONTENT,
  TEAM_MEMBERS,
  type TeamDepartment,
  type TeamMember,
} from '../data/aboutContent';
import { ResilientImage } from './ResilientImage';
import type { InquiryScope } from './ContactSection';

type DepartmentFilter = 'All Team' | TeamDepartment;

const DEPARTMENT_FILTERS: DepartmentFilter[] = [
  'All Team',
  'Strategy',
  'Engineering',
  'Design',
  'Growth',
];

const DEPARTMENT_TO_SCOPE: Record<TeamDepartment, InquiryScope> = {
  Strategy: 'Advisory & Audit',
  Engineering: 'Product Engineering',
  Design: 'Brand & Web',
  Growth: 'Growth Systems',
};

interface AboutPageProps {
  onStartProject: (scope?: InquiryScope, note?: string) => void;
  onViewWork: () => void;
}

export function AboutPage({ onStartProject, onViewWork }: AboutPageProps) {
  const [departmentFilter, setDepartmentFilter] = useState<DepartmentFilter>('All Team');
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const visibleMembers = useMemo(() => {
    if (departmentFilter === 'All Team') return TEAM_MEMBERS;
    return TEAM_MEMBERS.filter((member) => member.department === departmentFilter);
  }, [departmentFilter]);

  useEffect(() => {
    if (!selectedMember) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedMember(null);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedMember]);

  return (
    <div>
      {/* 1. ABOUT HERO + STUDIO PHOTOGRAPH */}
      <section className="pt-12 pb-16 lg:pt-20 lg:pb-24">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm text-neutral-500">
              {ABOUT_HERO.kicker}
              <span className="mx-2" aria-hidden="true">
                ·
              </span>
              {ABOUT_HERO.location}
            </p>

            <h1 className="mt-4 font-display text-[clamp(2.35rem,4vw,3.5rem)] leading-[1.08] font-semibold tracking-tight text-[#0E1116] [text-wrap:balance]">
              {ABOUT_HERO.headline}
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-neutral-600 sm:text-lg">
              {ABOUT_HERO.intro}
            </p>
          </div>

          <figure className="mt-10 lg:mt-14">
            <div className="aspect-[16/9] w-full overflow-hidden rounded-lg border border-neutral-200 bg-neutral-100">
              <ResilientImage
                src={ABOUT_HERO.image}
                alt={ABOUT_HERO.imageAlt}
                fallbackTitle={ABOUT_HERO.imageCaption}
                priority
                className="h-full w-full object-cover"
              />
            </div>
            <figcaption className="mt-3 text-xs text-neutral-500">
              {ABOUT_HERO.imageCaption}
            </figcaption>
          </figure>
        </div>
      </section>

      {/* 2. MISSION SECTION */}
      <section
        id="about-mission"
        aria-labelledby="mission-heading"
        className="border-t border-neutral-200 bg-white py-20 lg:py-28"
      >
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <p className="text-sm text-neutral-500">{MISSION_CONTENT.heading}</p>
              <dl className="mt-8 space-y-5 border-t border-neutral-200 pt-6">
                {MISSION_CONTENT.highlights.map((item) => (
                  <div key={item.label} className="flex items-baseline justify-between gap-4">
                    <dt className="text-xs text-neutral-500">{item.label}</dt>
                    <dd className="font-mono text-sm font-medium text-[#0E1116] tabular-nums">
                      {item.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="lg:col-span-8">
              <h2
                id="mission-heading"
                className="font-display text-2xl leading-snug font-semibold tracking-tight text-[#0E1116] sm:text-3xl [text-wrap:balance]"
              >
                {MISSION_CONTENT.statement}
              </h2>

              <div className="mt-6 space-y-4 text-base leading-relaxed text-neutral-600">
                {MISSION_CONTENT.paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. COMPANY HISTORY TIMELINE */}
      <section
        id="about-history"
        aria-labelledby="history-heading"
        className="border-t border-neutral-200 bg-[#FAFAFA] py-20 lg:py-28"
      >
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm text-neutral-500">Company History</p>
            <h2
              id="history-heading"
              className="mt-2 font-display text-3xl font-semibold tracking-tight text-[#0E1116] sm:text-4xl [text-wrap:balance]"
            >
              Seven years of building durable digital systems
            </h2>
          </div>

          <ol className="mt-12 divide-y divide-neutral-200 border-y border-neutral-200">
            {COMPANY_HISTORY.map((milestone) => (
              <li
                key={milestone.year}
                className="grid grid-cols-1 gap-4 py-8 md:grid-cols-12 md:gap-8"
              >
                <div className="flex items-baseline gap-3 md:col-span-3 md:flex-col md:gap-1">
                  <span className="font-mono text-xl font-medium tracking-tight text-[#0E1116] tabular-nums">
                    {milestone.year}
                  </span>
                  <span className="text-xs text-neutral-500">{milestone.location}</span>
                </div>

                <div className="md:col-span-9">
                  <h3 className="font-display text-lg font-semibold tracking-tight text-[#0E1116] sm:text-xl">
                    {milestone.title}
                  </h3>
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-neutral-600 sm:text-base">
                    {milestone.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 4. CORE VALUES */}
      <section
        id="about-values"
        aria-labelledby="values-heading"
        className="border-t border-neutral-200 bg-white py-20 lg:py-28"
      >
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <p className="text-sm text-neutral-500">Core Values</p>
              <h2
                id="values-heading"
                className="mt-2 font-display text-3xl font-semibold tracking-tight text-[#0E1116] sm:text-4xl [text-wrap:balance]"
              >
                Operating principles behind every engagement
              </h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-neutral-600">
              Placeholder subtitle: These four standards guide how we scope projects, write
              production code, and collaborate with client leadership.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
            {COMPANY_VALUES.map((value) => (
              <article
                key={value.number}
                className="flex flex-col justify-between rounded-lg border border-neutral-200 bg-[#FAFAFA] p-6 sm:p-8"
              >
                <div>
                  <span className="font-mono text-sm font-medium text-neutral-500 tabular-nums">
                    {value.number}
                  </span>
                  <h3 className="mt-3 font-display text-xl font-semibold tracking-tight text-[#0E1116] sm:text-2xl">
                    {value.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-600 sm:text-base">
                    {value.summary}
                  </p>
                </div>

                <p className="mt-6 border-t border-neutral-200/80 pt-4 text-xs text-neutral-500">
                  {value.practiceNote}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 5. TEAM MEMBERS */}
      <section
        id="about-team"
        aria-labelledby="team-heading"
        className="border-t border-neutral-200 bg-[#FAFAFA] py-20 lg:py-28"
      >
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <p className="text-sm text-neutral-500">Leadership &amp; Team</p>
              <h2
                id="team-heading"
                className="mt-2 font-display text-3xl font-semibold tracking-tight text-[#0E1116] sm:text-4xl [text-wrap:balance]"
              >
                Senior partners across strategy, design, engineering, and growth
              </h2>
            </div>

            <div
              role="tablist"
              aria-label="Filter team members by discipline"
              className="flex flex-wrap items-center gap-1 self-start rounded-lg bg-neutral-200/70 p-1 lg:self-auto"
            >
              {DEPARTMENT_FILTERS.map((filter) => {
                const isActive = departmentFilter === filter;
                return (
                  <button
                    key={filter}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setDepartmentFilter(filter)}
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

          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {visibleMembers.map((member) => (
              <article
                key={member.id}
                className="group flex flex-col overflow-hidden rounded-lg border border-neutral-200 bg-white transition-colors duration-150 hover:border-neutral-300"
              >
                <button
                  type="button"
                  onClick={() => setSelectedMember(member)}
                  aria-label={`View full profile for ${member.name}`}
                  className="block aspect-[3/4] w-full overflow-hidden bg-neutral-100 text-left focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#1D4ED8] cursor-pointer"
                >
                  <ResilientImage
                    src={member.image}
                    alt={member.imageAlt}
                    fallbackTitle={member.name}
                    className="h-full w-full object-cover object-top transition-transform duration-300 ease-out group-hover:scale-[1.02]"
                  />
                </button>

                <div className="flex flex-1 flex-col justify-between p-5">
                  <div>
                    <h3 className="font-display text-lg font-semibold tracking-tight text-[#0E1116]">
                      {member.name}
                    </h3>
                    <div className="mt-1 flex flex-wrap items-center gap-1.5 text-xs text-neutral-500">
                      <span>{member.role}</span>
                      <span aria-hidden="true">·</span>
                      <span>{member.location}</span>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                      {member.shortBio}
                    </p>
                  </div>

                  <div className="mt-5 border-t border-neutral-200/80 pt-3.5">
                    <button
                      type="button"
                      onClick={() => setSelectedMember(member)}
                      className="inline-flex min-h-[36px] items-center gap-1 text-xs font-medium text-[#1D4ED8] whitespace-nowrap transition-colors duration-150 hover:text-[#1E40AF] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1D4ED8] cursor-pointer"
                    >
                      <span>View Profile</span>
                      <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CLOSING CONVERSION BAND */}
      <section className="border-t border-neutral-200 bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
            <div className="max-w-xl">
              <h2 className="font-display text-2xl font-semibold tracking-tight text-[#0E1116] sm:text-3xl [text-wrap:balance]">
                Work directly with the partners building your platform
              </h2>
              <p className="mt-3 text-base leading-relaxed text-neutral-600">
                Share your roadmap or migration goals and our studio desk will respond within one
                business day.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-6 shrink-0">
              <button
                type="button"
                onClick={() => onStartProject()}
                className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-md bg-[#1D4ED8] px-6 py-2.5 text-sm font-medium text-white whitespace-nowrap shrink-0 transition-colors duration-150 hover:bg-[#1E40AF] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D4ED8] cursor-pointer"
              >
                <span>Schedule Discovery Call</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>

              <button
                type="button"
                onClick={onViewWork}
                className="inline-flex min-h-[44px] items-center gap-1.5 text-sm font-medium text-[#0E1116] whitespace-nowrap shrink-0 transition-colors duration-150 hover:text-[#1D4ED8] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1D4ED8] cursor-pointer"
              >
                <span>Explore Selected Work</span>
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Team Member Profile Modal */}
      {selectedMember && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#0E1116]/60 p-4 backdrop-blur-[2px] sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="team-modal-title"
          onClick={() => setSelectedMember(null)}
        >
          <div
            className="relative max-h-[88vh] w-full max-w-2xl overflow-y-auto rounded-lg border border-neutral-200 bg-white shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 z-10 flex items-center justify-between gap-4 border-b border-neutral-200 bg-white/95 px-6 py-4 backdrop-blur-sm sm:px-8">
              <div className="flex flex-wrap items-center gap-2 text-xs text-neutral-500">
                <span>{selectedMember.department}</span>
                <span aria-hidden="true">·</span>
                <span>{selectedMember.location} Studio</span>
                <span aria-hidden="true">·</span>
                <span className="font-mono tabular-nums">Since {selectedMember.since}</span>
              </div>

              <button
                type="button"
                onClick={() => setSelectedMember(null)}
                aria-label="Close team profile"
                className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md text-neutral-500 transition-colors duration-150 hover:bg-neutral-100 hover:text-[#0E1116] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D4ED8] cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="p-6 sm:p-8">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-12">
                <div className="sm:col-span-5">
                  <div className="aspect-[3/4] w-full overflow-hidden rounded-md bg-neutral-100">
                    <ResilientImage
                      src={selectedMember.image}
                      alt={selectedMember.imageAlt}
                      fallbackTitle={selectedMember.name}
                      className="h-full w-full object-cover object-top"
                    />
                  </div>
                </div>

                <div className="flex flex-col justify-between sm:col-span-7">
                  <div>
                    <h2
                      id="team-modal-title"
                      className="font-display text-2xl font-semibold tracking-tight text-[#0E1116]"
                    >
                      {selectedMember.name}
                    </h2>
                    <p className="mt-1 text-sm text-neutral-500">{selectedMember.role}</p>
                    <p className="mt-4 text-sm leading-relaxed text-neutral-600">
                      {selectedMember.fullBio}
                    </p>

                    <div className="mt-6 border-t border-neutral-200 pt-5">
                      <h3 className="font-display text-xs font-semibold text-[#0E1116]">
                        Core Focus Areas
                      </h3>
                      <ul className="mt-2.5 space-y-1.5 text-sm text-neutral-600">
                        {selectedMember.focusAreas.map((area) => (
                          <li key={area}>— {area}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 pt-2">
                    <button
                      type="button"
                      onClick={() => {
                        const member = selectedMember;
                        setSelectedMember(null);
                        onStartProject(
                          DEPARTMENT_TO_SCOPE[member.department],
                          `Looking to connect with ${member.name} regarding ${member.department.toLowerCase()} scope.`,
                        );
                      }}
                      className="inline-flex min-h-[42px] items-center gap-2 rounded-md bg-[#1D4ED8] px-5 py-2.5 text-sm font-medium text-white whitespace-nowrap transition-colors duration-150 hover:bg-[#1E40AF] cursor-pointer"
                    >
                      <span>Start a Conversation</span>
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
