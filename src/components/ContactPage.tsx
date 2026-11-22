import { useEffect, useState, type FormEvent } from 'react';
import { ArrowRight, Check, ChevronDown, Copy } from 'lucide-react';
import type { InquiryScope, PartnerType } from '../data/siteContent';

const PARTNER_TYPES: PartnerType[] = [
  'Physical Business',
  'Digital Startup',
  'Co-Working Space',
  'Angel Investor',
];

const SCOPES: InquiryScope[] = [
  'Product Engineering',
  'Brand & Web',
  'Growth Systems',
  'Venture & Advisory',
];

const BUDGET_RANGES = ['Under $10k', '$10k–$25k', '$25k–$75k', '$75k+'];

const ENGAGEMENT_TRACKS: {
  number: string;
  title: string;
  description: string;
  partnerType: PartnerType;
  scope: InquiryScope;
  note: string;
}[] = [
  {
    number: '01.',
    title: 'Physical & Digital Businesses',
    description:
      'Brand flagships, omnichannel storefronts, booking platforms, and search engines built for Indian and overseas growth.',
    partnerType: 'Physical Business',
    scope: 'Brand & Web',
    note: 'Looking to modernize our digital presence and acquisition platform.',
  },
  {
    number: '02.',
    title: 'Startups & Angel Investors',
    description:
      'Rapid MVP builds, product architecture, investor-ready demos, and dedicated technical squads for portfolio companies.',
    partnerType: 'Angel Investor',
    scope: 'Venture & Advisory',
    note: 'Interested in startup product sprints or portfolio advisory with LyfexDigital.',
  },
  {
    number: '03.',
    title: 'Co-Working Spaces & Hubs',
    description:
      'Multi-location websites, member booking portals, community systems, and regional plus international occupancy growth.',
    partnerType: 'Co-Working Space',
    scope: 'Product Engineering',
    note: 'Exploring digital infrastructure and member growth for our co-working space.',
  },
];

const CONTACT_FAQS = [
  {
    question: 'How does your Goa studio collaborate with overseas clients?',
    answer:
      'Our Panaji studio runs structured overlapping sprint windows with teams in the UK, Europe, the Middle East, Singapore, and North America. Weekly demos, async Loom walkthroughs, and shared Slack/Linear channels keep every milestone transparent.',
  },
  {
    question: 'How do you work with startups and angel investors?',
    answer:
      'Through our Venture & Spaces Desk, we support pre-seed through Series B startups with focused MVP builds, brand launches, and growth instrumentation, and assist angel investors with technical evaluations and post-investment portfolio support.',
  },
  {
    question: 'Can we engage multiple brands under the LyfexDigital® umbrella?',
    answer:
      'Yes. Clients routinely combine Lyfex Studio (brand & web), Lyfex Engineering (custom apps & commerce), and Lyfex Growth (SEO & CRM automation) under one unified Statement of Work and single partner point of contact.',
  },
  {
    question: 'Do you work with traditional physical businesses going digital?',
    answer:
      'Yes. A large portion of our work in Goa, pan-India, and overseas involves hospitality venues, co-working hubs, retail groups, and industrial businesses transitioning to modern booking, commerce, and lead-generation platforms.',
  },
];

interface ContactPageProps {
  preselectedScope: InquiryScope;
  preselectedPartner: PartnerType;
  preselectedNote: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  company?: string;
  brief?: string;
}

export function ContactPage({
  preselectedScope,
  preselectedPartner,
  preselectedNote,
}: ContactPageProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [region, setRegion] = useState('India');
  const [partnerType, setPartnerType] = useState<PartnerType>(preselectedPartner);
  const [scope, setScope] = useState<InquiryScope>(preselectedScope);
  const [budget, setBudget] = useState('$10k–$25k');
  const [brief, setBrief] = useState(preselectedNote);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [copiedDesk, setCopiedDesk] = useState<'studio' | 'ventures' | null>(null);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  useEffect(() => {
    setScope(preselectedScope);
  }, [preselectedScope]);

  useEffect(() => {
    setPartnerType(preselectedPartner);
  }, [preselectedPartner]);

  useEffect(() => {
    if (preselectedNote) {
      setBrief(preselectedNote);
    }
  }, [preselectedNote]);

  const validate = (): FormErrors => {
    const nextErrors: FormErrors = {};
    if (name.trim().length < 2) {
      nextErrors.name = 'Enter your full name.';
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    if (!emailPattern.test(email.trim())) {
      nextErrors.email = 'Enter a valid email address.';
    }
    if (company.trim().length < 2) {
      nextErrors.company = 'Enter your business, startup, space, or fund name.';
    }
    if (brief.trim().length < 20) {
      nextErrors.brief = 'Share at least a brief 1–2 sentence overview of your goals.';
    }
    return nextErrors;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
    }
  };

  const handleReset = () => {
    setName('');
    setEmail('');
    setCompany('');
    setBrief('');
    setErrors({});
    setSubmitted(false);
  };

  const handleCopy = async (address: string, key: 'studio' | 'ventures') => {
    try {
      await navigator.clipboard.writeText(address);
      setCopiedDesk(key);
      window.setTimeout(() => setCopiedDesk(null), 2200);
    } catch {
      setCopiedDesk(null);
    }
  };

  const selectTrack = (nextPartner: PartnerType, nextScope: InquiryScope, nextNote: string) => {
    setPartnerType(nextPartner);
    setScope(nextScope);
    setBrief(nextNote);
    setSubmitted(false);
    const formEl = document.getElementById('contact-inquiry-form');
    if (formEl) {
      formEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div>
      {/* 1. CONTACT PAGE HEADER */}
      <section className="pt-12 pb-12 lg:pt-20 lg:pb-16">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm text-neutral-500">
              Contact LyfexDigital®
              <span className="mx-2" aria-hidden="true">
                ·
              </span>
              Panaji, Goa, India
            </p>

            <h1 className="mt-4 font-display text-[clamp(2.35rem,4vw,3.5rem)] leading-[1.08] font-semibold tracking-tight text-[#0E1116] [text-wrap:balance]">
              Start a conversation with our Goa studio.
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-relaxed text-neutral-600 sm:text-lg">
              Whether you run a physical business, a digital startup, a co-working space, or an
              angel portfolio in India or overseas, a senior partner reviews every inquiry and
              responds within one business day.
            </p>
          </div>
        </div>
      </section>

      {/* 2. MAIN TWO-COLUMN CONTACT FORM + DIRECT CHANNELS */}
      <section
        id="contact-inquiry-form"
        aria-labelledby="inquiry-form-heading"
        className="border-t border-neutral-200 bg-white py-16 lg:py-24"
      >
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Left Column: Goa Headquarters & Direct Desks */}
            <div className="lg:col-span-5">
              <h2
                id="inquiry-form-heading"
                className="font-display text-2xl font-semibold tracking-tight text-[#0E1116]"
              >
                Direct studio channels
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                Reach the appropriate desk under the LyfexDigital® umbrella or complete the project
                brief to schedule a discovery call.
              </p>

              <dl className="mt-8 space-y-6 border-t border-neutral-200 pt-8 text-sm">
                <div>
                  <dt className="font-medium text-[#0E1116]">General &amp; Client Studio Desk</dt>
                  <dd className="mt-1.5 flex items-center gap-3">
                    <a
                      href="mailto:hello@lyfexdigital.com"
                      className="font-mono text-sm text-[#1D4ED8] hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D4ED8]"
                    >
                      hello@lyfexdigital.com
                    </a>
                    <button
                      type="button"
                      onClick={() => handleCopy('hello@lyfexdigital.com', 'studio')}
                      className="inline-flex min-h-[32px] items-center gap-1.5 rounded border border-neutral-200 bg-[#FAFAFA] px-2.5 py-1 text-xs font-medium text-neutral-700 whitespace-nowrap shrink-0 transition-colors duration-150 hover:border-neutral-300 hover:text-[#0E1116] cursor-pointer"
                    >
                      {copiedDesk === 'studio' ? (
                        <>
                          <Check className="h-3.5 w-3.5 text-emerald-700" aria-hidden="true" />
                          <span>Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="h-3.5 w-3.5 text-neutral-500" aria-hidden="true" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </dd>
                </div>

                <div>
                  <dt className="font-medium text-[#0E1116]">
                    Startups, Co-Working &amp; Angel Investors Desk
                  </dt>
                  <dd className="mt-1.5 flex items-center gap-3">
                    <a
                      href="mailto:ventures@lyfexdigital.com"
                      className="font-mono text-sm text-[#1D4ED8] hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D4ED8]"
                    >
                      ventures@lyfexdigital.com
                    </a>
                    <button
                      type="button"
                      onClick={() => handleCopy('ventures@lyfexdigital.com', 'ventures')}
                      className="inline-flex min-h-[32px] items-center gap-1.5 rounded border border-neutral-200 bg-[#FAFAFA] px-2.5 py-1 text-xs font-medium text-neutral-700 whitespace-nowrap shrink-0 transition-colors duration-150 hover:border-neutral-300 hover:text-[#0E1116] cursor-pointer"
                    >
                      {copiedDesk === 'ventures' ? (
                        <>
                          <Check className="h-3.5 w-3.5 text-emerald-700" aria-hidden="true" />
                          <span>Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="h-3.5 w-3.5 text-neutral-500" aria-hidden="true" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </dd>
                </div>

                <div>
                  <dt className="font-medium text-[#0E1116]">Studio Headquarters</dt>
                  <dd className="mt-1 leading-relaxed text-neutral-600">
                    LyfexDigital® Studio
                    <br />
                    Panaji, Goa 403001, India
                  </dd>
                </div>

                <div>
                  <dt className="font-medium text-[#0E1116]">Hours &amp; Global Overlap</dt>
                  <dd className="mt-1 leading-relaxed text-neutral-600">
                    Monday – Friday · 09:30 – 19:00 IST
                    <br />
                    Dedicated call windows for India, UK, Europe, UAE, Singapore &amp; North
                    America.
                  </dd>
                </div>

                <div>
                  <dt className="font-medium text-[#0E1116]">Registered Brand</dt>
                  <dd className="mt-1 text-neutral-600">
                    LyfexDigital® is a registered trademark operating a portfolio of digital brands
                    and services under one umbrella.
                  </dd>
                </div>
              </dl>
            </div>

            {/* Right Column: Validated Contact & Scope Form */}
            <div className="lg:col-span-7">
              <div className="rounded-lg border border-neutral-200 bg-[#FAFAFA] p-6 sm:p-8">
                {submitted ? (
                  <div role="status" aria-live="polite" className="py-6">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#1D4ED8]/10 text-[#1D4ED8]">
                      <Check className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <h3 className="mt-4 font-display text-2xl font-semibold tracking-tight text-[#0E1116]">
                      Inquiry received for {company}
                    </h3>
                    <p className="mt-2.5 max-w-lg text-sm leading-relaxed text-neutral-600">
                      Thank you, {name}. Your inquiry as a{' '}
                      <span className="font-medium text-[#0E1116]">
                        {partnerType.toLowerCase()}
                      </span>{' '}
                      ({region}) focused on{' '}
                      <span className="font-medium text-[#0E1116]">{scope.toLowerCase()}</span> (
                      {budget}) is ready for partner review at our Goa studio. We respond to{' '}
                      <span className="font-medium text-[#0E1116]">{email}</span> within one
                      business day.
                    </p>

                    <div className="mt-6 border-t border-neutral-200 pt-6">
                      <button
                        type="button"
                        onClick={handleReset}
                        className="inline-flex min-h-[42px] items-center justify-center rounded-md border border-neutral-300 bg-white px-4 py-2 text-sm font-medium text-[#0E1116] whitespace-nowrap transition-colors duration-150 hover:bg-neutral-100 cursor-pointer"
                      >
                        Send Another Inquiry
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="space-y-6">
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="contact-name"
                          className="block text-sm font-medium text-[#0E1116]"
                        >
                          Full name
                        </label>
                        <input
                          id="contact-name"
                          name="name"
                          type="text"
                          autoComplete="name"
                          value={name}
                          onChange={(e) => {
                            setName(e.target.value);
                            if (errors.name) setErrors((prev) => ({ ...prev, name: undefined }));
                          }}
                          placeholder="Rohan Deshmukh"
                          aria-invalid={Boolean(errors.name)}
                          aria-describedby={errors.name ? 'contact-name-error' : undefined}
                          className="mt-1.5 block min-h-[42px] w-full rounded-md border border-neutral-300 bg-white px-3.5 py-2 text-sm text-[#0E1116] placeholder:text-neutral-400 transition-colors focus:border-[#1D4ED8] focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]/20"
                        />
                        {errors.name && (
                          <p id="contact-name-error" className="mt-1.5 text-xs text-red-700">
                            {errors.name}
                          </p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="contact-email"
                          className="block text-sm font-medium text-[#0E1116]"
                        >
                          Work email
                        </label>
                        <input
                          id="contact-email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          value={email}
                          onChange={(e) => {
                            setEmail(e.target.value);
                            if (errors.email) setErrors((prev) => ({ ...prev, email: undefined }));
                          }}
                          placeholder="rohan@company.com"
                          aria-invalid={Boolean(errors.email)}
                          aria-describedby={errors.email ? 'contact-email-error' : undefined}
                          className="mt-1.5 block min-h-[42px] w-full rounded-md border border-neutral-300 bg-white px-3.5 py-2 text-sm text-[#0E1116] placeholder:text-neutral-400 transition-colors focus:border-[#1D4ED8] focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]/20"
                        />
                        {errors.email && (
                          <p id="contact-email-error" className="mt-1.5 text-xs text-red-700">
                            {errors.email}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="contact-company"
                          className="block text-sm font-medium text-[#0E1116]"
                        >
                          Business, startup, space, or fund
                        </label>
                        <input
                          id="contact-company"
                          name="company"
                          type="text"
                          autoComplete="organization"
                          value={company}
                          onChange={(e) => {
                            setCompany(e.target.value);
                            if (errors.company)
                              setErrors((prev) => ({ ...prev, company: undefined }));
                          }}
                          placeholder="Company or venture name"
                          aria-invalid={Boolean(errors.company)}
                          aria-describedby={errors.company ? 'contact-company-error' : undefined}
                          className="mt-1.5 block min-h-[42px] w-full rounded-md border border-neutral-300 bg-white px-3.5 py-2 text-sm text-[#0E1116] placeholder:text-neutral-400 transition-colors focus:border-[#1D4ED8] focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]/20"
                        />
                        {errors.company && (
                          <p id="contact-company-error" className="mt-1.5 text-xs text-red-700">
                            {errors.company}
                          </p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="contact-region"
                          className="block text-sm font-medium text-[#0E1116]"
                        >
                          Primary market
                        </label>
                        <select
                          id="contact-region"
                          name="region"
                          value={region}
                          onChange={(e) => setRegion(e.target.value)}
                          className="mt-1.5 block min-h-[42px] w-full rounded-md border border-neutral-300 bg-white px-3.5 py-2 text-sm text-[#0E1116] transition-colors focus:border-[#1D4ED8] focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]/20"
                        >
                          <option value="India">India (Goa &amp; Pan-India)</option>
                          <option value="Overseas">Overseas (UK / Europe / US / UAE / APAC)</option>
                          <option value="India & Overseas">Both India &amp; Overseas</option>
                        </select>
                      </div>
                    </div>

                    {/* Organization / Partner Type */}
                    <fieldset>
                      <legend className="text-sm font-medium text-[#0E1116]">Who are you?</legend>
                      <div className="mt-2 grid grid-cols-2 gap-2">
                        {PARTNER_TYPES.map((option) => {
                          const active = partnerType === option;
                          return (
                            <button
                              key={option}
                              type="button"
                              onClick={() => setPartnerType(option)}
                              aria-pressed={active}
                              className={`flex min-h-[40px] items-center justify-center rounded-md border px-3 py-2 text-xs font-medium whitespace-nowrap transition-colors duration-150 cursor-pointer ${
                                active
                                  ? 'border-[#0E1116] bg-[#0E1116] text-white'
                                  : 'border-neutral-200 bg-white text-neutral-700 hover:border-neutral-300 hover:text-[#0E1116]'
                              }`}
                            >
                              {option}
                            </button>
                          );
                        })}
                      </div>
                    </fieldset>

                    {/* Primary Focus */}
                    <fieldset>
                      <legend className="text-sm font-medium text-[#0E1116]">Primary focus</legend>
                      <div className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-2">
                        {SCOPES.map((option) => {
                          const active = scope === option;
                          return (
                            <button
                              key={option}
                              type="button"
                              onClick={() => setScope(option)}
                              aria-pressed={active}
                              className={`flex min-h-[40px] items-center justify-center rounded-md border px-3.5 py-2 text-xs font-medium whitespace-nowrap transition-colors duration-150 cursor-pointer ${
                                active
                                  ? 'border-[#1D4ED8] bg-[#1D4ED8] text-white'
                                  : 'border-neutral-200 bg-white text-neutral-700 hover:border-neutral-300 hover:text-[#0E1116]'
                              }`}
                            >
                              {option}
                            </button>
                          );
                        })}
                      </div>
                    </fieldset>

                    {/* Estimated Budget Range */}
                    <fieldset>
                      <legend className="text-sm font-medium text-[#0E1116]">
                        Estimated budget range
                      </legend>
                      <div className="mt-2 grid grid-cols-2 gap-2 sm:grid-cols-4">
                        {BUDGET_RANGES.map((range) => {
                          const active = budget === range;
                          return (
                            <button
                              key={range}
                              type="button"
                              onClick={() => setBudget(range)}
                              aria-pressed={active}
                              className={`flex min-h-[40px] items-center justify-center rounded-md border px-3 py-2 font-mono text-xs tabular-nums whitespace-nowrap transition-colors duration-150 cursor-pointer ${
                                active
                                  ? 'border-[#0E1116] bg-[#0E1116] text-white'
                                  : 'border-neutral-200 bg-white text-neutral-700 hover:border-neutral-300 hover:text-[#0E1116]'
                              }`}
                            >
                              {range}
                            </button>
                          );
                        })}
                      </div>
                    </fieldset>

                    <div>
                      <label
                        htmlFor="contact-brief"
                        className="block text-sm font-medium text-[#0E1116]"
                      >
                        Project brief &amp; target timeline
                      </label>
                      <textarea
                        id="contact-brief"
                        name="brief"
                        rows={4}
                        value={brief}
                        onChange={(e) => {
                          setBrief(e.target.value);
                          if (errors.brief) setErrors((prev) => ({ ...prev, brief: undefined }));
                        }}
                        placeholder="Tell us about your business, goals, current challenges, and target timeline..."
                        aria-invalid={Boolean(errors.brief)}
                        aria-describedby={errors.brief ? 'contact-brief-error' : undefined}
                        className="mt-1.5 block w-full rounded-md border border-neutral-300 bg-white px-3.5 py-2.5 text-sm text-[#0E1116] placeholder:text-neutral-400 transition-colors focus:border-[#1D4ED8] focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]/20"
                      />
                      {errors.brief && (
                        <p id="contact-brief-error" className="mt-1.5 text-xs text-red-700">
                          {errors.brief}
                        </p>
                      )}
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-4 pt-1">
                      <p className="text-xs text-neutral-500">
                        Protected under mutual NDA upon request.
                      </p>
                      <button
                        type="submit"
                        className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-md bg-[#1D4ED8] px-6 py-2.5 text-sm font-medium text-white whitespace-nowrap shrink-0 transition-colors duration-150 hover:bg-[#1E40AF] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D4ED8] cursor-pointer"
                      >
                        <span>Schedule Discovery Call</span>
                        <ArrowRight className="h-4 w-4" aria-hidden="true" />
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. DIRECT ENGAGEMENT TRACKS */}
      <section
        aria-labelledby="tracks-heading"
        className="border-t border-neutral-200 bg-[#FAFAFA] py-16 lg:py-24"
      >
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm text-neutral-500">Engagement Tracks</p>
            <h2
              id="tracks-heading"
              className="mt-2 font-display text-2xl font-semibold tracking-tight text-[#0E1116] sm:text-3xl [text-wrap:balance]"
            >
              Choose the partnership model that fits your stage
            </h2>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {ENGAGEMENT_TRACKS.map((track) => (
              <article
                key={track.number}
                className="flex flex-col justify-between rounded-lg border border-neutral-200 bg-white p-6"
              >
                <div>
                  <span className="font-mono text-xs font-medium text-neutral-500 tabular-nums">
                    {track.number}
                  </span>
                  <h3 className="mt-3 font-display text-lg font-semibold tracking-tight text-[#0E1116]">
                    {track.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-neutral-600">
                    {track.description}
                  </p>
                </div>

                <div className="mt-6 border-t border-neutral-200/80 pt-4">
                  <button
                    type="button"
                    onClick={() => selectTrack(track.partnerType, track.scope, track.note)}
                    className="inline-flex min-h-[38px] items-center gap-1.5 text-xs font-medium text-[#1D4ED8] whitespace-nowrap transition-colors hover:text-[#1E40AF] cursor-pointer"
                  >
                    <span>Pre-fill this track</span>
                    <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 4. COMMON QUESTIONS */}
      <section
        aria-labelledby="contact-faq-heading"
        className="border-t border-neutral-200 bg-white py-16 lg:py-24"
      >
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <p className="text-sm text-neutral-500">Before We Speak</p>
              <h2
                id="contact-faq-heading"
                className="mt-2 font-display text-2xl font-semibold tracking-tight text-[#0E1116] sm:text-3xl [text-wrap:balance]"
              >
                Common questions
              </h2>
            </div>

            <div className="divide-y divide-neutral-200 border-y border-neutral-200 lg:col-span-8">
              {CONTACT_FAQS.map((item, index) => {
                const isOpen = openFaqIndex === index;
                return (
                  <div key={item.question}>
                    <button
                      type="button"
                      onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                      aria-expanded={isOpen}
                      className="flex min-h-[56px] w-full items-center justify-between gap-4 py-4 text-left text-base font-medium text-[#0E1116] transition-colors hover:text-[#1D4ED8] cursor-pointer"
                    >
                      <span>{item.question}</span>
                      <ChevronDown
                        className={`h-4 w-4 shrink-0 text-neutral-500 transition-transform duration-150 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                        aria-hidden="true"
                      />
                    </button>
                    {isOpen && (
                      <p className="pb-5 pr-8 text-sm leading-relaxed text-neutral-600">
                        {item.answer}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
