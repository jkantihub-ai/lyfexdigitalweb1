import heroLyfexStudioImg from '../assets/images/hero_lyfex_studio_1795276674405.jpg';
import clientGreentopliImg from '../assets/images/client_greentopli_1795309876794.jpg';
import clientStintCoworkingImg from '../assets/images/client_stint_coworking_1795309875537.jpg';
import clientSamratMedicalImg from '../assets/images/client_samrat_medical_1795309876052.jpg';
import workNordicFintechImg from '../assets/images/work_nordic_fintech_1795276715758.jpg';

export type CaseStudyCategory = 'Product Engineering' | 'Brand & Web' | 'Growth Systems';

export type InquiryScope =
  | 'Product Engineering'
  | 'Brand & Web'
  | 'Growth Systems'
  | 'Venture & Advisory';

export type PartnerType =
  | 'Physical Business'
  | 'Digital Startup'
  | 'Co-Working Space'
  | 'Angel Investor';

export interface UmbrellaBrand {
  number: string;
  name: string;
  category: string;
  audience: string;
  description: string;
  offerings: string[];
  defaultScope: InquiryScope;
  defaultPartner: PartnerType;
}

export interface EcosystemPartner {
  title: string;
  regionNote: string;
  summary: string;
  partnerType: PartnerType;
}

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
  alt: 'LyfexDigital design and engineering studio interior with oak worktables and natural daylight through floor-to-ceiling windows',
  caption: 'LyfexDigital® Studio — Goa, India',
};

export const ECOSYSTEM_PARTNERS: EcosystemPartner[] = [
  {
    title: 'Physical & Digital Businesses',
    regionNote: 'India & Overseas',
    summary:
      'Hospitality groups, retail brands, industrial operators, and software companies modernizing their storefronts, web platforms, and acquisition funnels.',
    partnerType: 'Physical Business',
  },
  {
    title: 'Startups & Founders',
    regionNote: 'Pre-Seed to Series B',
    summary:
      'Rapid product architecture, MVP engineering, launch flagships, and early growth instrumentation built to ship fast and scale cleanly.',
    partnerType: 'Digital Startup',
  },
  {
    title: 'Co-Working Spaces & Hubs',
    regionNote: 'Goa, Pan-India & Global',
    summary:
      'Member booking platforms, multi-location web presence, community portals, and local-to-international occupancy growth systems.',
    partnerType: 'Co-Working Space',
  },
  {
    title: 'Angel Investors & Syndicates',
    regionNote: 'Portfolio Support',
    summary:
      'Technical diligence, rapid venture prototyping, and dedicated design-and-engineering squads supporting portfolio companies post-investment.',
    partnerType: 'Angel Investor',
  },
];

export const UMBRELLA_PORTFOLIO: UmbrellaBrand[] = [
  {
    number: '01.',
    name: 'Lyfex Studio',
    category: 'Brand & Digital Flagships',
    audience: 'Physical & Digital Brands',
    description:
      'Placeholder umbrella brand description: Our flagship identity and editorial web practice crafting high-converting digital homes for Indian and international companies.',
    offerings: ['Brand identity systems', 'Custom web flagships', 'Design systems'],
    defaultScope: 'Brand & Web',
    defaultPartner: 'Physical Business',
  },
  {
    number: '02.',
    name: 'Lyfex Engineering',
    category: 'Product & Commerce Platforms',
    audience: 'Startups & Enterprises',
    description:
      'Placeholder umbrella brand description: Full-stack web applications, omnichannel commerce, and custom booking or operational portals engineered for speed.',
    offerings: ['React & TypeScript apps', 'Headless commerce', 'Booking & member portals'],
    defaultScope: 'Product Engineering',
    defaultPartner: 'Digital Startup',
  },
  {
    number: '03.',
    name: 'Lyfex Growth',
    category: 'Search, Demand & Automation',
    audience: 'India & Overseas Markets',
    description:
      'Placeholder umbrella brand description: Technical SEO, multi-region paid acquisition pages, and CRM workflow automation engineered for measurable pipeline.',
    offerings: ['Multi-region technical SEO', 'Conversion optimization', 'CRM & lead automation'],
    defaultScope: 'Growth Systems',
    defaultPartner: 'Physical Business',
  },
  {
    number: '04.',
    name: 'Lyfex Venture & Spaces Desk',
    category: 'Startups, Co-Working & Angels',
    audience: 'Ecosystem Partners',
    description:
      'Placeholder umbrella brand description: Specialized advisory, rapid MVP build tracks, and digital infrastructure tailored for early-stage founders, co-working hubs, and angel portfolios.',
    offerings: ['Founder MVP sprints', 'Co-working growth systems', 'Angel portfolio support'],
    defaultScope: 'Venture & Advisory',
    defaultPartner: 'Angel Investor',
  },
];

export interface ClientBrandEntry {
  name: string;
  sector: string;
  region: string;
  caseStudyId?: string;
}

export const CLIENT_BRANDS: ClientBrandEntry[] = [
  {
    name: 'GreenTopli',
    sector: 'Fresh Produce & Hospitality Supply',
    region: 'Mumbai & Goa, India',
    caseStudyId: 'greentopli',
  },
  {
    name: 'Stint Studio Co-Working Space',
    sector: 'Co-Working Spaces',
    region: 'India',
    caseStudyId: 'stint-studio',
  },
  {
    name: 'Samrat Medical',
    sector: 'Healthcare & Pharmacy Retail',
    region: 'Goa, India',
    caseStudyId: 'samrat-medical',
  },
  {
    name: 'Nova Capital Analytics',
    sector: 'Financial Infrastructure',
    region: 'Mumbai & London',
    caseStudyId: 'nova-capital',
  },
  {
    name: 'Regional Hospitality & Retail Partners',
    sector: 'Physical & Omnichannel',
    region: 'Goa & Pan-India',
  },
  {
    name: 'Overseas Startups & Angel Portfolios',
    sector: 'SaaS & Digital Ventures',
    region: 'UK, Europe, UAE & APAC',
  },
];

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
      'We architect and build custom web applications, customer portals, and omnichannel storefronts for both digital-native startups and established physical businesses expanding online.',
    deliverables: [
      'React & TypeScript web applications',
      'Headless & omnichannel commerce architecture',
      'Booking, inventory & showroom portals',
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
      'Distinctive visual identities and editorial marketing sites that translate physical-world craftsmanship and complex digital offers into clear, high-converting web experiences.',
    deliverables: [
      'Digital brand systems & typography',
      'Editorial marketing flagships',
      'Interactive product & location configurators',
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
      'Local, national, and international search foundations paired with conversion experimentation that turn demand across India and overseas markets into measurable pipeline.',
    deliverables: [
      'Technical & multi-region SEO architecture',
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
      'Connected CRM pipelines, automated qualification flows, and internal operational tools bridging physical storefronts, field teams, and global digital sales.',
    deliverables: [
      'CRM & multi-region lead-routing architecture',
      'Automated onboarding, booking & billing flows',
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
    id: 'greentopli',
    client: 'GreenTopli',
    title: 'Digital storefront and B2B ordering presence for fresh & exotic produce supply',
    category: 'Product Engineering',
    industry: 'Fresh Produce & Supply',
    year: '2026',
    location: 'Mumbai & Goa',
    image: clientGreentopliImg,
    imageAlt:
      'Fresh heirloom greens, exotic vegetables, and culinary herbs arranged in a woven basket on limestone for GreenTopli',
    headlineMetric: 'Physical-to-Digital Commerce',
    headlineMetricContext: 'Streamlined wholesale & direct ordering across hospitality and retail buyers',
    summary:
      'Partnered with GreenTopli to establish a crisp digital storefront, structured catalog architecture, and inquiry-to-order workflow bridging farm-fresh supply with hospitality kitchens and regional buyers.',
    challenge:
      'High-frequency produce suppliers often rely on scattered phone and messaging threads for daily stock inquiries, creating friction when expanding to new restaurants, hotels, and direct retail buyers.',
    architecture:
      'Designed a clean, mobile-first web presence organized around seasonal exotic produce categories, transparent wholesale inquiry flows, and search-ready regional landing pages.',
    deliverables: [
      'Digital Brand & Storefront Architecture',
      'Catalog & Seasonal Produce Structure',
      'B2B & Retail Order Inquiry Flows',
      'Regional Search & Performance Setup',
    ],
    outcomes: [
      { figure: 'Mobile-First', detail: 'Fast-loading ordering & inquiry UX built for kitchen and procurement leads on cellular networks' },
      { figure: 'Unified Catalog', detail: 'Structured product taxonomy covering exotic greens, herbs, and fresh kitchen staples' },
      { figure: 'Omnichannel', detail: 'Bridges physical cold-chain distribution with direct online discovery across Mumbai & Goa' },
    ],
    testimonial: {
      quote:
        'Working with LyfexDigital® gave GreenTopli a clear, dependable online home that reflects the quality of our fresh produce and makes it simple for both hospitality kitchens and direct buyers to connect with us.',
      author: 'Operations Desk',
      role: 'Client Partner Summary',
      company: 'GreenTopli',
    },
  },
  {
    id: 'stint-studio',
    client: 'Stint Studio Co-Working Space',
    title: 'Multi-location workspace showcase, tour booking, and member growth engine',
    category: 'Brand & Web',
    industry: 'Co-Working Spaces',
    year: '2026',
    location: 'India',
    image: clientStintCoworkingImg,
    imageAlt:
      'Sunlit contemporary co-working space with pale oak communal desks and glass partitions representing Stint Studio Co-Working Space',
    headlineMetric: 'Multi-Location Booking Funnel',
    headlineMetricContext: 'Unified brand experience, workspace plans, and local lead capture across hubs',
    summary:
      'Built an editorial workspace flagship and structured lead-capture system for Stint Studio Co-Working Space—clarifying private cabins, dedicated desks, and meeting rooms for founders and distributed teams.',
    challenge:
      'Growing co-working operators struggle to communicate location amenities, flexible seat plans, and community culture clearly without losing high-intent local search visitors to aggregator directories.',
    architecture:
      'Crafted a clean location-driven web architecture pairing crisp workspace photography with transparent plan comparisons, one-step tour scheduling, and local SEO structure per hub.',
    deliverables: [
      'Co-Working Brand & Web Flagship',
      'Location & Membership Plan Architecture',
      'Tour & Day-Pass Booking Flow',
      'Local Search & Lead Routing Setup',
    ],
    outcomes: [
      { figure: 'Direct Bookings', detail: 'Reduced reliance on third-party listing aggregators with direct tour & desk inquiries' },
      { figure: 'Multi-Hub Ready', detail: 'Modular location pages designed to scale effortlessly as new studio hubs open' },
      { figure: 'Fast Clarity', detail: 'Transparent desk, cabin, and meeting-room overview built for startups and remote teams' },
    ],
    testimonial: {
      quote:
        'LyfexDigital® understood how founders and teams evaluate a co-working space online. The new digital presence presents our spaces cleanly and turns local searches directly into scheduled tours.',
      author: 'Community & Growth Team',
      role: 'Client Partner Summary',
      company: 'Stint Studio Co-Working Space',
    },
  },
  {
    id: 'samrat-medical',
    client: 'Samrat Medical',
    title: 'Trustworthy digital presence and local discovery architecture for pharmacy retail',
    category: 'Growth Systems',
    industry: 'Healthcare & Pharmacy Retail',
    year: '2025',
    location: 'Goa, India',
    image: clientSamratMedicalImg,
    imageAlt:
      'Clean contemporary pharmacy and medical retail counter with pale stone surfaces and organized apothecary shelves for Samrat Medical',
    headlineMetric: 'Local Search & Retail Trust',
    headlineMetricContext: 'Modernizing physical pharmacy visibility, accessibility, and customer communication',
    summary:
      'Helped Samrat Medical translate decades of neighborhood retail trust into a fast, accessible digital touchpoint—improving local search visibility, store discovery, and everyday customer convenience.',
    challenge:
      'Established physical medical and pharmacy stores frequently have outdated online listings and fragmented store information, making it difficult for residents and visitors to confirm availability, timings, or direct contact channels.',
    architecture:
      'Established a clear, high-legibility healthcare web presence paired with structured local SEO metadata, mobile tap-to-connect workflows, and clean service categorization.',
    deliverables: [
      'Healthcare Retail Web Presence',
      'Local SEO & Store Discovery Setup',
      'Mobile-First Customer Inquiry Paths',
      'WCAG AA Legibility & Contrast Design',
    ],
    outcomes: [
      { figure: 'High Legibility', detail: 'Clear typography and accessible mobile layouts built for customers of all age groups' },
      { figure: 'Local Discovery', detail: 'Structured regional search presence connecting nearby residents directly to store services' },
      { figure: 'Physical + Digital', detail: 'Extends everyday counter reliability into a dependable always-on online touchpoint' },
    ],
    testimonial: {
      quote:
        'LyfexDigital® brought clarity and professionalism to our online presence without complicating our daily counter operations. Customers can now find our store details and connect with us effortlessly.',
      author: 'Retail Management',
      role: 'Client Partner Summary',
      company: 'Samrat Medical',
    },
  },
  {
    id: 'nova-capital',
    client: 'Nova Capital Analytics',
    title: 'Institutional treasury reporting and client onboarding built for international scale',
    category: 'Product Engineering',
    industry: 'Financial Infrastructure',
    year: '2026',
    location: 'Mumbai & London',
    image: workNordicFintechImg,
    imageAlt: 'Laptop displaying Nova Capital Analytics workspace interface on a honed concrete desk',
    headlineMetric: '-64% Onboarding Time',
    headlineMetricContext: 'Reduced enterprise client setup from 19 days to 6.8 days across UK & India teams',
    summary:
      'Replaced a fragmented legacy portal with a unified TypeScript client workspace, real-time portfolio reporting views, and a documented 48-component design system delivered from our Goa studio.',
    challenge:
      'Institutional clients faced slow multi-page reporting tables and an opaque onboarding sequence requiring 14 manual email handoffs per account across international time zones.',
    architecture:
      'We audited every onboarding touchpoint with operations leads, then engineered a modular React platform with strict keyboard navigation, progressive data loading, and automated verification steps.',
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
        'Before working with LyfexDigital®, our client portal slowed down every renewal conversation. Within three months of launching the rebuilt platform, onboarding time fell by nearly two-thirds and our engineering team inherited a codebase they could immediately extend.',
      author: 'Henrik Lindholm',
      role: 'VP of Product',
      company: 'Nova Capital Analytics',
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
        body: 'Information shared with LyfexDigital® via email or project discovery is used solely to evaluate project scope, schedule discovery conversations, and prepare engagement proposals. We never sell, rent, or trade contact lists.',
      },
      {
        heading: 'Data Retention & Contact',
        body: 'You may request access to, correction of, or deletion of any correspondence held by LyfexDigital® at any time by writing to privacy@lyfexdigital.com.',
      },
    ],
  },
  terms: {
    id: 'terms',
    title: 'Terms of Engagement',
    updated: 'Last updated November 2026',
    sections: [
      {
        heading: 'Registered Trademark & Intellectual Property',
        body: 'LyfexDigital® is a registered trademark. All umbrella brand names, case study narratives, architectural photography, visual assets, and copy published on this website remain the intellectual property of LyfexDigital® and our respective client partners. Upon full payment of a client engagement, custom production deliverables transfer to the client per our Master Services Agreement.',
      },
      {
        heading: 'Project Estimates & Scope',
        body: 'Timeline ranges and engagement figures displayed on this site serve as planning benchmarks based on historical studio engagements. Formal schedules, deliverables, and pricing are defined exclusively in a mutually signed Statement of Work.',
      },
      {
        heading: 'Governing Jurisdiction',
        body: 'LyfexDigital® operates from Panaji, Goa, India and partners with physical businesses, digital startups, co-working spaces, and angel investors across India and overseas. Formal client engagements are governed by the jurisdiction specified in the applicable Master Services Agreement.',
      },
    ],
  },
};
