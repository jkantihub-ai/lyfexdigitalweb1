import heroLyfexStudioImg from '../assets/images/hero_lyfex_studio_1795276674405.jpg';
import workNordicFintechImg from '../assets/images/work_nordic_fintech_1795276715758.jpg';
import workKinetixMobilityImg from '../assets/images/work_kinetix_mobility_1795276674260.jpg';
import workVerveCommerceImg from '../assets/images/work_verve_commerce_1795276673224.jpg';
import workSolisEnergyImg from '../assets/images/work_solis_energy_1795276673324.jpg';

export type CaseStudyCategory = 'Product Engineering' | 'Brand & Web' | 'Growth Systems';

export interface MetricItem {
  value: string;
  label: string;
  context: string;
}

export interface CapabilityItem {
  number: string;
  title: string;
  summary: string;
  deliverables: string[];
  typicalTimeline: string;
  featured: boolean;
  focusKey: CaseStudyCategory;
}

export interface CaseStudy {
  id: string;
  client: string;
  title: string;
  category: CaseStudyCategory;
  industry: string;
  year: string;
  location: string;
  image: string;
  imageAlt: string;
  headlineMetric: string;
  headlineMetricContext: string;
  summary: string;
  challenge: string;
  architecture: string;
  deliverables: string[];
  outcomes: {
    figure: string;
    detail: string;
  }[];
  testimonial: {
    quote: string;
    author: string;
    role: string;
    company: string;
  };
}

export interface ApproachPhase {
  number: string;
  title: string;
  duration: string;
  description: string;
  outputs: string[];
}

export interface JournalArticle {
  id: string;
  title: string;
  topic: string;
  date: string;
  readTime: string;
  author: string;
  authorRole: string;
  excerpt: string;
  paragraphs: string[];
  keyTakeaways: string[];
}

export interface LegalDocument {
  id: 'privacy' | 'terms';
  title: string;
  updated: string;
  sections: {
    heading: string;
    body: string;
  }[];
}

export const HERO_MEDIA = {
  image: heroLyfexStudioImg,
  alt: 'Lyfex Digital design and engineering studio interior with oak worktables and natural daylight through floor-to-ceiling windows',
  caption: 'Lyfex Digital Studio — Austin & London',
};

export const IMPACT_METRICS: MetricItem[] = [
  {
    value: '42+',
    label: 'Platforms Shipped',
    context: 'Production web apps & brand flagships launched since 2019',
  },
  {
    value: '+138%',
    label: 'Median Pipeline Lift',
    context: 'Qualified inbound conversion growth within 6 months of launch',
  },
  {
    value: '99.94%',
    label: 'Measured Uptime',
    context: 'Across managed commerce and SaaS client architectures',
  },
  {
    value: '11 wks',
    label: 'Concept to Launch',
    context: 'Average delivery cadence from discovery to production release',
  },
];

export const CAPABILITIES: CapabilityItem[] = [
  {
    number: '01.',
    title: 'Product & Platform Engineering',
    summary:
      'We architect and build custom web applications, customer portals, and composable storefronts engineered for sub-second response times and clean handoff to internal teams.',
    deliverables: [
      'React & TypeScript web applications',
      'Headless commerce & checkout architecture',
      'Component libraries & design token systems',
      'API integration & performance auditing',
    ],
    typicalTimeline: '8–14 weeks',
    featured: true,
    focusKey: 'Product Engineering',
  },
  {
    number: '02.',
    title: 'Brand Identity & Web Flagships',
    summary:
      'Distinctive visual identities and editorial marketing sites built to clarify complex offers, shorten enterprise sales cycles, and convert high-intent visitors.',
    deliverables: [
      'Digital brand systems & typography',
      'Editorial marketing flagships',
      'Interactive product configurators',
      'Structured CMS content modeling',
    ],
    typicalTimeline: '6–10 weeks',
    featured: false,
    focusKey: 'Brand & Web',
  },
  {
    number: '03.',
    title: 'Search & Acquisition Architecture',
    summary:
      'Technical search foundations, conversion experimentation, and full-funnel analytics that turn marketing spend into measurable pipeline rather than vanity traffic.',
    deliverables: [
      'Technical SEO & programmatic landing pages',
      'Conversion rate auditing & experimentation',
      'Server-side analytics & attribution tracking',
      'Paid acquisition landing systems',
    ],
    typicalTimeline: '4–8 weeks',
    featured: false,
    focusKey: 'Growth Systems',
  },
  {
    number: '04.',
    title: 'Revenue & Workflow Automation',
    summary:
      'Connected CRM pipelines, automated qualification flows, and internal operational tools that eliminate manual bottlenecks between marketing, sales, and customer delivery.',
    deliverables: [
      'CRM & lead-routing architecture',
      'Automated onboarding & billing flows',
      'Executive reporting & pipeline dashboards',
      'Legacy system consolidation',
    ],
    typicalTimeline: '6–12 weeks',
    featured: true,
    focusKey: 'Growth Systems',
  },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'nova-capital',
    client: 'Nova Capital Analytics',
    title: 'Rebuilding institutional treasury reporting and client onboarding for speed',
    category: 'Product Engineering',
    industry: 'Financial Infrastructure',
    year: '2026',
    location: 'London',
    image: workNordicFintechImg,
    imageAlt: 'Laptop displaying Nova Capital Analytics workspace interface on a honed concrete desk',
    headlineMetric: '-64% Onboarding Time',
    headlineMetricContext: 'Reduced enterprise client setup from 19 days to 6.8 days in Q1–Q2',
    summary:
      'Replaced a fragmented legacy portal with a unified TypeScript client workspace, real-time portfolio reporting views, and a documented 48-component design system.',
    challenge:
      'Nova’s institutional clients faced slow multi-page reporting tables and an opaque onboarding sequence that required 14 manual email handoffs per account.',
    architecture:
      'We audited every onboarding touchpoint with operations leads, then built a modular React platform with strict keyboard navigation, progressive data loading, and automated document verification steps.',
    deliverables: [
      'Client Web Platform',
      '48-Component Design System',
      'Onboarding Workflow Engine',
      'Accessibility Remediation (WCAG AA)',
    ],
    outcomes: [
      { figure: '-64%', detail: 'Reduction in average institutional onboarding duration (19 to 6.8 days)' },
      { figure: '0.7s', detail: 'Median Largest Contentful Paint across portfolio views on enterprise VPNs' },
      { figure: '+41%', detail: 'Increase in weekly active treasury analyst sessions within 90 days' },
    ],
    testimonial: {
      quote:
        'Before working with Lyfex Digital, our client portal slowed down every renewal conversation. Within three months of launching the rebuilt platform, onboarding time fell by nearly two-thirds and our engineering team inherited a codebase they could immediately extend.',
      author: 'Henrik Lindholm',
      role: 'VP of Product',
      company: 'Nova Capital Analytics',
    },
  },
  {
    id: 'volt-mobility',
    client: 'Volt Mobility',
    title: 'Direct-to-rider digital flagship and interactive commuter configurator',
    category: 'Brand & Web',
    industry: 'Electric Mobility',
    year: '2026',
    location: 'Amsterdam',
    image: workKinetixMobilityImg,
    imageAlt: 'Matte charcoal Volt electric commuter bike photographed inside a sunlit concrete pavilion',
    headlineMetric: '+148% Test-Ride Bookings',
    headlineMetricContext: 'Measured across 4 European launch cities over the first 120 days',
    summary:
      'Crafted the digital brand language, direct-to-consumer flagship, and real-time fleet booking flow for Volt’s Series B electric commuter launch.',
    challenge:
      'Prospective riders struggled to compare range specifications, financing options, and local service coverage on Volt’s previous template storefront, causing 78% checkout abandonment.',
    architecture:
      'Designed an editorial product narrative paired with a single-screen model selector, transparent monthly financing breakdown, and instant showroom slot scheduling tied directly to local fleet inventory.',
    deliverables: [
      'Digital Brand Guidelines',
      'Direct-to-Consumer Web Flagship',
      'Interactive Model & Financing Selector',
      'Multi-City Test-Ride Scheduler',
    ],
    outcomes: [
      { figure: '+148%', detail: 'Growth in qualified showroom test-ride bookings across 4 launch markets' },
      { figure: '3.4×', detail: 'Improvement in mobile checkout completion rate on cellular networks' },
      { figure: '$3.1M', detail: 'Direct pre-order volume attributed to the flagship in the first 90 days' },
    ],
    testimonial: {
      quote:
        'Lyfex Digital treated our website like a physical showroom. By stripping away technical jargon and clarifying range and financing on one screen, our test-ride bookings more than doubled across all four launch cities.',
      author: 'Clara Vermeer',
      role: 'Chief Commercial Officer',
      company: 'Volt Mobility',
    },
  },
  {
    id: 'aura-botanics',
    client: 'Aura Botanics',
    title: 'Headless commerce replatforming and retention-focused subscription engine',
    category: 'Product Engineering',
    industry: 'Consumer Wellness',
    year: '2025',
    location: 'Austin',
    image: workVerveCommerceImg,
    imageAlt: 'Minimalist matte stone and frosted glass Aura Botanics skincare vessels arranged on travertine',
    headlineMetric: '+52% Repeat Revenue',
    headlineMetricContext: 'Subscription retention lift measured over 6 billing cycles post-launch',
    summary:
      'Migrated Aura Botanics to a composable headless storefront with frictionless bundle building and self-service refill cadence management.',
    challenge:
      'A bloated monolithic storefront caused 4.8-second mobile load times and forced subscribers to contact support just to skip or swap a replenishment item.',
    architecture:
      'Engineered an edge-cached storefront with instant regimen pairing, one-click cadence controls inside the customer account, and automated replenishment reminders synced with warehouse fulfillment.',
    deliverables: [
      'Headless Storefront Architecture',
      'Regimen Bundle Configurator',
      'Self-Service Subscription Portal',
      'Core Web Vitals Optimization',
    ],
    outcomes: [
      { figure: '+52%', detail: 'Increase in 6-month repeat subscription revenue per cohort' },
      { figure: '-71%', detail: 'Drop in subscription-related customer support tickets within 60 days' },
      { figure: '+28%', detail: 'Lift in average order value through guided regimen bundling' },
    ],
    testimonial: {
      quote:
        'Our previous storefront cost us repeat buyers every month because managing refills felt like a chore. Lyfex Digital rebuilt the entire purchase and account experience—support tickets dropped 71% and subscription retention jumped 52% in two quarters.',
      author: 'Nadia Okafor',
      role: 'Co-Founder & Head of Digital',
      company: 'Aura Botanics',
    },
  },
  {
    id: 'aurora-solutions',
    client: 'Aurora Solutions',
    title: 'Enterprise demand engine and corporate web architecture for clean energy',
    category: 'Growth Systems',
    industry: 'Clean Energy Engineering',
    year: '2025',
    location: 'Denver',
    image: workSolisEnergyImg,
    imageAlt: 'Aurora Solutions clean energy engineering headquarters with geometric glass and steel facade at golden hour',
    headlineMetric: '$4.6M Qualified Pipeline',
    headlineMetricContext: 'Attributed to organic search and interactive ROI assessment in 9 months',
    summary:
      'Consolidated three regional microsites into one authoritative corporate platform backed by technical SEO architecture and automated CRM lead qualification.',
    challenge:
      'Industrial facility directors searching for commercial solar engineering landed on disconnected regional brochures with no structured way to estimate site feasibility or reach regional engineers.',
    architecture:
      'Built a unified information architecture organized by facility sector, paired with a structured commercial load estimator that routes qualified opportunities straight to regional engineering leads in HubSpot.',
    deliverables: [
      'Corporate Web Consolidation',
      'Technical SEO & Sector Hub Architecture',
      'Commercial Feasibility Estimator',
      'CRM Qualification & Attribution Setup',
    ],
    outcomes: [
      { figure: '$4.6M', detail: 'Net-new qualified commercial pipeline generated in the first 9 months' },
      { figure: '+184%', detail: 'Growth in non-branded organic traffic from industrial procurement keywords' },
      { figure: '4.2×', detail: 'Faster response time from inquiry submission to engineering review' },
    ],
    testimonial: {
      quote:
        'Instead of pitching another visual refresh, Lyfex Digital mapped how industrial buyers actually evaluate clean-energy contractors. The consolidated site and feasibility workflow generated $4.6M in qualified pipeline inside nine months.',
      author: 'David Castellano',
      role: 'Director of Growth Operations',
      company: 'Aurora Solutions',
    },
  },
];

export const APPROACH_PHASES: ApproachPhase[] = [
  {
    number: '01.',
    title: 'Diagnostic & Architecture',
    duration: 'Weeks 1–2',
    description:
      'We audit analytics, technical bottlenecks, buyer interviews, and conversion drop-offs before drawing a single wireframe.',
    outputs: ['Technical & funnel audit', 'Information architecture map', 'Scoped delivery roadmap'],
  },
  {
    number: '02.',
    title: 'System & Interface Design',
    duration: 'Weeks 3–5',
    description:
      'Typography, layout grids, interactive prototypes, and reusable component tokens reviewed directly in the browser.',
    outputs: ['Interactive Figma prototypes', 'Design token & component kit', 'Editorial copy architecture'],
  },
  {
    number: '03.',
    title: 'Engineering Sprints',
    duration: 'Weeks 6–9',
    description:
      'Production frontend engineering, CMS modeling, CRM integrations, and automated quality gates shipped to staging every Friday.',
    outputs: ['Type-safe production code', 'CMS & CRM integrations', 'WCAG AA & Core Web Vitals QA'],
  },
  {
    number: '04.',
    title: 'Launch & Instrumentation',
    duration: 'Weeks 10–11',
    description:
      'Zero-downtime deployment, server-side event validation, internal team training, and 30-day post-launch optimization.',
    outputs: ['Production cutover plan', 'Attribution & event verification', 'Team handoff documentation'],
  },
];

export const JOURNAL_ARTICLES: JournalArticle[] = [
  {
    id: 'b2b-conversion-architecture',
    title: 'Why Enterprise Websites Lose Qualified Buyers Before the First Scroll',
    topic: 'Growth Architecture',
    date: 'October 2026',
    readTime: '5 min read',
    author: 'Marcus Vance',
    authorRole: 'Managing Partner, Strategy',
    excerpt:
      'Replacing vague positioning slogans with concrete capability architecture, adjacent proof, and transparent engagement paths.',
    paragraphs: [
      'Most B2B marketing sites fail for a remarkably mundane reason: a technical buyer lands on the homepage, reads a sweeping abstract tagline, and still cannot tell what the company actually builds, who it serves, or what happens if they request a call.',
      'Across 38 enterprise site audits conducted by our studio over the past three years, we observed a consistent pattern. Pages that replaced abstract value statements with concrete scope descriptions and placed quantified customer outcomes immediately adjacent to each claim saw a 40% to 115% lift in qualified demo requests—without increasing paid media spend.',
      'Clarity compounds across the rest of the funnel. When prospects understand your architecture, typical delivery timeline, and relevant case studies prior to booking a discovery call, sales teams spend less time qualifying basic fit and more time scoping real work.',
      'Good digital design is rarely about adding more interactive widgets. It is about removing ambiguity at every decision point so an informed buyer can evaluate credibility quickly.',
    ],
    keyTakeaways: [
      'State what you build, for whom, and the measurable mechanism in the first 120 words.',
      'Keep evidence (metrics, architecture details, named client outcomes) within one scroll of the claim it supports.',
      'Give technical evaluators clear next steps—such as scope benchmarks and realistic response windows—next to the inquiry form.',
    ],
  },
  {
    id: 'sub-second-composable-web',
    title: 'Engineering Sub-Second Marketing & Commerce Sites Without Framework Bloat',
    topic: 'Web Engineering',
    date: 'September 2026',
    readTime: '6 min read',
    author: 'Elena Rostova',
    authorRole: 'Principal Frontend Engineer',
    excerpt:
      'Practical architectural patterns for keeping JavaScript payloads disciplined, fonts crisp, and layout shifts at zero.',
    paragraphs: [
      'Performance is frequently treated as a cleanup sprint scheduled two days before launch. By that point, third-party tag managers, unoptimized imagery, and heavy animation runtimes have already locked in a sluggish mobile experience.',
      'At Lyfex Digital, performance budgets are established during week one alongside visual direction. We constrain font families to two curated faces with strict weight subsets, size media containers explicitly to prevent cumulative layout shift, and restrict motion strictly to GPU-composited transform and opacity properties.',
      'Equally important is hydration discipline. Static editorial sections do not need sprawling client-side state trees, and third-party analytics scripts should never block the critical rendering path.',
      'The business impact is immediate and durable: faster landing pages reduce paid acquisition bounce rates, preserve organic search rankings, and make every brand interaction feel deliberate and composed.',
    ],
    keyTakeaways: [
      'Enforce explicit aspect ratios and resilient fallbacks on every media container to keep CLS at 0.00.',
      'Animate only transform and opacity, keeping routine interface transitions under 200 milliseconds.',
      'Audit third-party marketing scripts quarterly; a single unmonitored tag often outweighs the entire application bundle.',
    ],
  },
  {
    id: 'design-systems-that-survive-handoff',
    title: 'Designing Component Systems Internal Teams Actually Maintain After Launch',
    topic: 'Design Systems',
    date: 'August 2026',
    readTime: '4 min read',
    author: 'Soren Lindqvist',
    authorRole: 'Design Director',
    excerpt:
      'Why over-engineered 200-component libraries stall post-launch—and how focused, token-driven foundations endure.',
    paragraphs: [
      'Every agency loves presenting an encyclopedic component library at the end of an engagement. Six months later, internal product teams routinely bypass it because the abstractions are too rigid for day-to-day shipping.',
      'Durable design systems optimize for restraint. Instead of encoding forty bespoke card variants, we establish a small, legible set of spatial rules, semantic color tokens, typographic scales, and composable primitives that cover 90% of real product surfaces.',
      'Documentation lives directly beside the code rather than in a static slide deck that goes stale on day thirty. When engineers and designers share identical naming for spacing, elevation, and typography, shipping new pages takes hours instead of weeks.',
    ],
    keyTakeaways: [
      'Codify typography, spacing rhythm, and surface contrast tokens before building specialized page widgets.',
      'Build 25–45 genuinely reusable components rather than 150 single-use variations.',
      'Pair every handoff with live pairing sessions alongside the client’s internal engineers.',
    ],
  },
];

export const LEGAL_DOCUMENTS: Record<'privacy' | 'terms', LegalDocument> = {
  privacy: {
    id: 'privacy',
    title: 'Privacy Policy',
    updated: 'Last updated November 2026',
    sections: [
      {
        heading: 'Information You Provide',
        body: 'When you submit a project inquiry through this website, we collect only the contact details and project context you voluntarily enter (such as your name, work email, organization, and brief). Because this static showcase operates locally in your browser, submitted inquiry previews are not transmitted to third-party data brokers.',
      },
      {
        heading: 'How We Use Project Inquiries',
        body: 'Information shared with Lyfex Digital via email or project discovery is used solely to evaluate project scope, schedule discovery conversations, and prepare engagement proposals. We never sell, rent, or trade contact lists.',
      },
      {
        heading: 'Data Retention & Contact',
        body: 'You may request access to, correction of, or deletion of any correspondence held by Lyfex Digital LLC at any time by writing to privacy@lyfexdigital.com.',
      },
    ],
  },
  terms: {
    id: 'terms',
    title: 'Terms of Engagement',
    updated: 'Last updated November 2026',
    sections: [
      {
        heading: 'Intellectual Property',
        body: 'All case study narratives, architectural photography, visual assets, and copy published on this website remain the intellectual property of Lyfex Digital LLC and our respective client partners. Upon full payment of a client engagement, custom production deliverables transfer to the client per our Master Services Agreement.',
      },
      {
        heading: 'Project Estimates & Scope',
        body: 'Timeline ranges and engagement figures displayed on this site serve as planning benchmarks based on historical studio engagements. Formal schedules, deliverables, and pricing are defined exclusively in a mutually signed Statement of Work.',
      },
      {
        heading: 'Governing Jurisdiction',
        body: 'Lyfex Digital LLC operates from Austin, Texas and London, United Kingdom. Formal client engagements are governed by the jurisdiction specified in the applicable Master Services Agreement.',
      },
    ],
  },
};
