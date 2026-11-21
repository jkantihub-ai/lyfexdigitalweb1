import { useEffect, useState, type FormEvent } from 'react';
import { Check, Copy, ArrowRight } from 'lucide-react';

export type InquiryScope =
  | 'Product Engineering'
  | 'Brand & Web'
  | 'Growth Systems'
  | 'Advisory & Audit';

const SCOPES: InquiryScope[] = [
  'Product Engineering',
  'Brand & Web',
  'Growth Systems',
  'Advisory & Audit',
];

const BUDGET_RANGES = ['$25k–$50k', '$50k–$100k', '$100k–$250k', '$250k+'];

interface ContactSectionProps {
  preselectedScope: InquiryScope;
  preselectedNote: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  company?: string;
  brief?: string;
}

export function ContactSection({ preselectedScope, preselectedNote }: ContactSectionProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [scope, setScope] = useState<InquiryScope>(preselectedScope);
  const [budget, setBudget] = useState('$50k–$100k');
  const [brief, setBrief] = useState(preselectedNote);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  useEffect(() => {
    setScope(preselectedScope);
  }, [preselectedScope]);

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
      nextErrors.email = 'Enter a valid work email address.';
    }
    if (company.trim().length < 2) {
      nextErrors.company = 'Enter your company or organization name.';
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

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText('hello@lyfexdigital.com');
      setCopiedEmail(true);
      window.setTimeout(() => setCopiedEmail(false), 2200);
    } catch {
      setCopiedEmail(false);
    }
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="border-t border-neutral-200 bg-white py-20 lg:py-28"
    >
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column: Concrete Engagement Expectations */}
          <div className="lg:col-span-5">
            <h2
              id="contact-heading"
              className="font-display text-3xl font-semibold tracking-tight text-[#0E1116] sm:text-4xl [text-wrap:balance]"
            >
              Schedule a discovery call
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-neutral-600">
              Tell us what you are building or migrating. A senior partner reviews every inquiry and
              responds within one business day with concrete scope questions—never an automated
              sales sequence.
            </p>

            <dl className="mt-10 space-y-6 border-t border-neutral-200 pt-8 text-sm">
              <div>
                <dt className="font-medium text-[#0E1116]">Direct Studio Desk</dt>
                <dd className="mt-1.5 flex items-center gap-3">
                  <a
                    href="mailto:hello@lyfexdigital.com"
                    className="font-mono text-sm text-[#1D4ED8] hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D4ED8]"
                  >
                    hello@lyfexdigital.com
                  </a>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="inline-flex min-h-[32px] items-center gap-1.5 rounded border border-neutral-200 bg-[#FAFAFA] px-2.5 py-1 text-xs font-medium text-neutral-700 whitespace-nowrap shrink-0 transition-colors duration-150 hover:border-neutral-300 hover:text-[#0E1116] cursor-pointer"
                  >
                    {copiedEmail ? (
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
                <dt className="font-medium text-[#0E1116]">Studios</dt>
                <dd className="mt-1 text-neutral-600">
                  Austin — 600 Congress Ave, Suite 1400
                  <br />
                  London — 48 Clerkenwell Rd, EC1M 5PS
                </dd>
              </div>

              <div>
                <dt className="font-medium text-[#0E1116]">Typical Engagement Cadence</dt>
                <dd className="mt-1 text-neutral-600">
                  Focused 6–14 week product & web engagements, or quarterly growth & platform
                  retainers. Next onboarding window opens January 2027.
                </dd>
              </div>
            </dl>
          </div>

          {/* Right Column: Validated Lead Capture Form */}
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
                    Thank you, {name}. Your {scope.toLowerCase()} brief ({budget}) has been logged
                    for partner review. A confirmation summary is ready for{' '}
                    <span className="font-medium text-[#0E1116]">{email}</span>, and our studio desk
                    responds within one business day.
                  </p>

                  <div className="mt-6 border-t border-neutral-200 pt-6">
                    <button
                      type="button"
                      onClick={handleReset}
                      className="inline-flex min-h-[42px] items-center justify-center rounded-md border border-neutral-300 bg-white px-4 py-2 text-sm font-medium text-[#0E1116] whitespace-nowrap transition-colors duration-150 hover:bg-neutral-100 cursor-pointer"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="inquiry-name"
                        className="block text-sm font-medium text-[#0E1116]"
                      >
                        Full name
                      </label>
                      <input
                        id="inquiry-name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        value={name}
                        onChange={(e) => {
                          setName(e.target.value);
                          if (errors.name) setErrors((prev) => ({ ...prev, name: undefined }));
                        }}
                        placeholder="Jordan Rivera"
                        aria-invalid={Boolean(errors.name)}
                        aria-describedby={errors.name ? 'inquiry-name-error' : undefined}
                        className="mt-1.5 block min-h-[42px] w-full rounded-md border border-neutral-300 bg-white px-3.5 py-2 text-sm text-[#0E1116] placeholder:text-neutral-400 transition-colors focus:border-[#1D4ED8] focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]/20"
                      />
                      {errors.name && (
                        <p id="inquiry-name-error" className="mt-1.5 text-xs text-red-700">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="inquiry-email"
                        className="block text-sm font-medium text-[#0E1116]"
                      >
                        Work email
                      </label>
                      <input
                        id="inquiry-email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          if (errors.email) setErrors((prev) => ({ ...prev, email: undefined }));
                        }}
                        placeholder="jordan@company.com"
                        aria-invalid={Boolean(errors.email)}
                        aria-describedby={errors.email ? 'inquiry-email-error' : undefined}
                        className="mt-1.5 block min-h-[42px] w-full rounded-md border border-neutral-300 bg-white px-3.5 py-2 text-sm text-[#0E1116] placeholder:text-neutral-400 transition-colors focus:border-[#1D4ED8] focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]/20"
                      />
                      {errors.email && (
                        <p id="inquiry-email-error" className="mt-1.5 text-xs text-red-700">
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="inquiry-company"
                      className="block text-sm font-medium text-[#0E1116]"
                    >
                      Company or organization
                    </label>
                    <input
                      id="inquiry-company"
                      name="company"
                      type="text"
                      autoComplete="organization"
                      value={company}
                      onChange={(e) => {
                        setCompany(e.target.value);
                        if (errors.company) setErrors((prev) => ({ ...prev, company: undefined }));
                      }}
                      placeholder="Acme Logistics Inc."
                      aria-invalid={Boolean(errors.company)}
                      aria-describedby={errors.company ? 'inquiry-company-error' : undefined}
                      className="mt-1.5 block min-h-[42px] w-full rounded-md border border-neutral-300 bg-white px-3.5 py-2 text-sm text-[#0E1116] placeholder:text-neutral-400 transition-colors focus:border-[#1D4ED8] focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]/20"
                    />
                    {errors.company && (
                      <p id="inquiry-company-error" className="mt-1.5 text-xs text-red-700">
                        {errors.company}
                      </p>
                    )}
                  </div>

                  {/* Primary Focus Selector */}
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

                  {/* Estimated Budget Selector */}
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
                      htmlFor="inquiry-brief"
                      className="block text-sm font-medium text-[#0E1116]"
                    >
                      Project brief & target timeline
                    </label>
                    <textarea
                      id="inquiry-brief"
                      name="brief"
                      rows={4}
                      value={brief}
                      onChange={(e) => {
                        setBrief(e.target.value);
                        if (errors.brief) setErrors((prev) => ({ ...prev, brief: undefined }));
                      }}
                      placeholder="Outline your current site or product, key objectives, and target launch window..."
                      aria-invalid={Boolean(errors.brief)}
                      aria-describedby={errors.brief ? 'inquiry-brief-error' : undefined}
                      className="mt-1.5 block w-full rounded-md border border-neutral-300 bg-white px-3.5 py-2.5 text-sm text-[#0E1116] placeholder:text-neutral-400 transition-colors focus:border-[#1D4ED8] focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]/20"
                    />
                    {errors.brief && (
                      <p id="inquiry-brief-error" className="mt-1.5 text-xs text-red-700">
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
  );
}
