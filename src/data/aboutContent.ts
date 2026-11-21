import aboutStudioCollaborationImg from '../assets/images/about_studio_collaboration_1795277065772.jpg';
import aboutTeamMarcusImg from '../assets/images/about_team_marcus_1795277103019.jpg';
import aboutTeamElenaImg from '../assets/images/about_team_elena_1795277064314.jpg';
import aboutTeamSorenImg from '../assets/images/about_team_soren_1795277245468.jpg';
import aboutTeamPriyaImg from '../assets/images/about_team_priya_1795277107581.jpg';

export type TeamDepartment = 'Strategy' | 'Engineering' | 'Design' | 'Growth';

export interface HistoryMilestone {
  year: string;
  location: string;
  title: string;
  description: string;
}

export interface CompanyValue {
  number: string;
  title: string;
  summary: string;
  practiceNote: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  department: TeamDepartment;
  location: string;
  since: string;
  image: string;
  imageAlt: string;
  shortBio: string;
  fullBio: string;
  focusAreas: string[];
}

export const ABOUT_HERO = {
  kicker: 'About Lyfex Digital',
  location: 'Austin & London',
  headline: 'An independent studio built around craft, accountability, and measurable outcomes.',
  intro:
    'Placeholder studio introduction: Lyfex Digital was founded on the belief that brand systems, frontend engineering, and growth architecture belong inside one senior team rather than separate agency silos.',
  image: aboutStudioCollaborationImg,
  imageAlt:
    'Lyfex Digital designers and engineers reviewing printed interface layouts across an oak worktable in natural daylight',
  imageCaption: 'Weekly architecture critique at our studio table',
};

export const MISSION_CONTENT = {
  heading: 'Our Mission',
  statement:
    'To design and engineer digital platforms that simplify complex buying journeys, operate at sub-second speed, and remain maintainable long after launch day.',
  paragraphs: [
    'Placeholder mission context: Most organizations inherit a patchwork of disconnected marketing pages, brittle templates, and unmeasured acquisition channels. Our mission is to replace that friction with deliberate architecture.',
    'Placeholder operating principle: We take on a focused number of client partnerships each quarter so every engagement is led directly by senior partners across strategy, design, engineering, and analytics.',
  ],
  highlights: [
    { label: 'Founded', value: '2019' },
    { label: 'Studio Hubs', value: 'Austin & London' },
    { label: 'Senior Ratio', value: '100% Principal-Led' },
  ],
};

export const COMPANY_HISTORY: HistoryMilestone[] = [
  {
    year: '2019',
    location: 'Austin, TX',
    title: 'Studio founded as a two-person web engineering practice',
    description:
      'Placeholder milestone text: Lyfex Digital began in downtown Austin focused on high-speed React storefronts and technical search audits for early-stage SaaS and consumer founders.',
  },
  {
    year: '2021',
    location: 'Austin, TX',
    title: 'Integrated brand systems and product design discipline',
    description:
      'Placeholder milestone text: Expanded into a multidisciplinary team of ten, pairing editorial visual identity and component design systems directly with production frontend engineering.',
  },
  {
    year: '2023',
    location: 'London, UK',
    title: 'Opened our Clerkenwell studio to serve European partners',
    description:
      'Placeholder milestone text: Established our London office to support transatlantic fintech, clean-energy, and mobility clients requiring shared time-zone engineering sprints.',
  },
  {
    year: '2025',
    location: 'Austin & London',
    title: 'Launched dedicated Revenue & Workflow Automation practice',
    description:
      'Placeholder milestone text: Formalized our CRM, attribution, and self-service portal capabilities after seeing marketing teams lose qualified pipeline between website launch and sales handoff.',
  },
  {
    year: '2026',
    location: 'Global',
    title: '42+ production platforms shipped across 9 industries',
    description:
      'Placeholder milestone text: Today Lyfex Digital operates as an independent 22-person studio partnering with B2B and consumer leadership teams on multi-quarter digital roadmaps.',
  },
];

export const COMPANY_VALUES: CompanyValue[] = [
  {
    number: '01.',
    title: 'Clarity Before Code',
    summary:
      'Placeholder value description: Every interface starts by eliminating ambiguity. We define buyer questions, technical constraints, and success metrics before opening a design file or repository.',
    practiceNote: 'Applied through two-week architecture diagnostics on every project.',
  },
  {
    number: '02.',
    title: 'Evidence Over Aesthetics Alone',
    summary:
      'Placeholder value description: Visual restraint should never exist for its own sake. Typography, layout rhythm, and interaction speed are engineered to improve comprehension and conversion.',
    practiceNote: 'Applied through baseline telemetry and post-launch instrumentation.',
  },
  {
    number: '03.',
    title: 'Senior Ownership End-to-End',
    summary:
      'Placeholder value description: The partners who scope your architecture are the same people designing your system and reviewing every pull request through production deployment.',
    practiceNote: 'Applied by capping active studio engagements per quarter.',
  },
  {
    number: '04.',
    title: 'Built for Clean Handoff',
    summary:
      'Placeholder value description: We never trap clients inside proprietary abstractions. Our codebases, design tokens, and CMS schemas are documented so internal teams can ship independently.',
    practiceNote: 'Applied through live engineering pairing sessions prior to handoff.',
  },
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'marcus-vance',
    name: 'Marcus Vance',
    role: 'Managing Partner, Strategy',
    department: 'Strategy',
    location: 'Austin',
    since: '2019',
    image: aboutTeamMarcusImg,
    imageAlt: 'Portrait of Marcus Vance, Managing Partner of Strategy at Lyfex Digital',
    shortBio:
      'Placeholder bio: Leads commercial positioning, buyer research, and multi-quarter digital roadmaps for enterprise and Series B–D teams.',
    fullBio:
      'Placeholder extended bio: Marcus co-founded Lyfex Digital in 2019 after twelve years advising B2B software and industrial technology companies on go-to-market web architecture. He oversees discovery diagnostics, executive alignment, and measurable conversion modeling across both studio hubs.',
    focusAreas: [
      'B2B Positioning & Information Architecture',
      'Commercial Funnel Diagnostics',
      'Executive Stakeholder Alignment',
    ],
  },
  {
    id: 'elena-rostova',
    name: 'Elena Rostova',
    role: 'Principal Frontend Engineer',
    department: 'Engineering',
    location: 'London',
    since: '2020',
    image: aboutTeamElenaImg,
    imageAlt: 'Portrait of Elena Rostova, Principal Frontend Engineer at Lyfex Digital',
    shortBio:
      'Placeholder bio: Architects TypeScript web applications, headless commerce storefronts, and Core Web Vitals performance budgets.',
    fullBio:
      'Placeholder extended bio: Elena leads frontend architecture and engineering quality standards at Lyfex Digital. Prior to joining the studio, she led platform engineering teams in financial infrastructure and specializes in accessible, sub-second React architectures designed for long-term internal maintainability.',
    focusAreas: [
      'React & TypeScript Platform Architecture',
      'Headless Commerce & Edge Performance',
      'WCAG AA Accessibility Engineering',
    ],
  },
  {
    id: 'soren-lindqvist',
    name: 'Soren Lindqvist',
    role: 'Design Director',
    department: 'Design',
    location: 'London',
    since: '2021',
    image: aboutTeamSorenImg,
    imageAlt: 'Portrait of Soren Lindqvist, Design Director at Lyfex Digital',
    shortBio:
      'Placeholder bio: Directs typographic systems, editorial web flagships, and token-driven component libraries across client engagements.',
    fullBio:
      'Placeholder extended bio: Soren brings fifteen years of editorial and digital product design experience across Copenhagen and London. At Lyfex Digital, he leads visual direction, interactive prototyping, and pragmatic design systems built to survive real-world product iteration.',
    focusAreas: [
      'Editorial Web & Brand Systems',
      'Design Tokens & Component Libraries',
      'Interactive Product Prototyping',
    ],
  },
  {
    id: 'priya-nair',
    name: 'Priya Nair',
    role: 'Director of Growth & Automation',
    department: 'Growth',
    location: 'Austin',
    since: '2022',
    image: aboutTeamPriyaImg,
    imageAlt: 'Portrait of Priya Nair, Director of Growth and Automation at Lyfex Digital',
    shortBio:
      'Placeholder bio: Oversees technical SEO architecture, server-side attribution, and automated CRM revenue workflows.',
    fullBio:
      'Placeholder extended bio: Priya bridges web engineering and revenue operations. She leads technical search strategy, conversion experimentation, and automated lead-routing architectures so client marketing investments translate cleanly into sales-ready pipeline.',
    focusAreas: [
      'Technical SEO & Programmatic Hubs',
      'CRM Qualification & Lead Routing',
      'Server-Side Analytics & Attribution',
    ],
  },
];
