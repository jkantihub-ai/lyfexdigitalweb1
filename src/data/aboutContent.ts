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
  kicker: 'About LyfexDigital®',
  location: 'Goa, India · Registered Trademark · India & Overseas',
  headline: 'A Goa-based umbrella studio building for businesses, startups, and investors worldwide.',
  intro:
    'Placeholder studio introduction: LyfexDigital® is a registered trademark based in Goa, India. Operating a focused portfolio of brands and digital services under one umbrella, we partner with physical and digital businesses, startups, co-working spaces, and angel investors across India and overseas.',
  image: aboutStudioCollaborationImg,
  imageAlt:
    'LyfexDigital designers and engineers reviewing printed interface layouts across an oak worktable in natural daylight',
  imageCaption: 'Weekly architecture critique at the LyfexDigital® studio in Goa',
};

export const MISSION_CONTENT = {
  heading: 'Our Mission',
  statement:
    'To unify brand craft, software engineering, and growth systems under one dependable umbrella for physical businesses, startups, co-working hubs, and angel-backed ventures across India and overseas.',
  paragraphs: [
    'Placeholder mission context: Whether an organization runs physical retail, co-working spaces, hospitality venues, or venture-backed digital products, disconnected websites and fragmented vendors slow momentum. Our mission is to deliver cohesive digital foundations that perform.',
    'Placeholder operating principle: From our headquarters in Goa, LyfexDigital® houses specialized service brands under one roof—allowing founders, space operators, and angel investors to engage a single accountable partner from initial concept through international scale.',
  ],
  highlights: [
    { label: 'Trademark', value: 'LyfexDigital®' },
    { label: 'Studio Base', value: 'Panaji, Goa' },
    { label: 'Client Reach', value: 'India & Overseas' },
    { label: 'Ecosystem', value: 'Startups · Spaces · Angels' },
  ],
};

export const COMPANY_HISTORY: HistoryMilestone[] = [
  {
    year: '2019',
    location: 'Panaji, Goa',
    title: 'Founded in Goa as a focused web and digital studio',
    description:
      'Placeholder milestone text: LyfexDigital® began in Goa focused on high-speed websites, online booking flows, and technical search foundations for regional physical businesses and early digital founders.',
  },
  {
    year: '2021',
    location: 'Goa & Pan-India',
    title: 'Partnered with startups, co-working spaces, and Indian growth brands',
    description:
      'Placeholder milestone text: Expanded into product design and community infrastructure, helping co-working hubs, hospitality operators, and early-stage Indian startups build digital platforms that convert.',
  },
  {
    year: '2023',
    location: 'India & Overseas',
    title: 'Scaled international delivery and angel investor collaborations',
    description:
      'Placeholder milestone text: Built overlapping sprint schedules from Goa to serve overseas clients across Europe, the UK, UAE, and Singapore while partnering with angel investors on technical diligence and portfolio product launches.',
  },
  {
    year: '2025',
    location: 'Goa, India',
    title: 'Registered LyfexDigital® trademark & unified umbrella portfolio',
    description:
      'Placeholder milestone text: Formalized our registered trademark and organized our specialized brands and services under the LyfexDigital® umbrella spanning Studio, Engineering, Growth, and our Venture & Spaces Desk.',
  },
  {
    year: '2026',
    location: 'Goa · Worldwide',
    title: '42+ platforms shipped across physical, digital, and venture ecosystems',
    description:
      'Placeholder milestone text: Today LyfexDigital® continues to operate independently from Goa, partnering with physical and digital businesses, co-working networks, startups, and angel investors across India and overseas.',
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
    location: 'Goa, India',
    since: '2019',
    image: aboutTeamMarcusImg,
    imageAlt: 'Portrait of Marcus Vance, Managing Partner of Strategy at Lyfex Digital',
    shortBio:
      'Placeholder bio: Leads commercial positioning, omnichannel strategy, and digital roadmaps for physical and digital businesses in India and overseas.',
    fullBio:
      'Placeholder extended bio: Marcus co-founded Lyfex Digital in Goa in 2019 after twelve years advising physical retail networks and B2B software companies on go-to-market web architecture. He oversees discovery diagnostics, executive alignment, and measurable conversion modeling for Indian and overseas partners.',
    focusAreas: [
      'Physical-to-Digital & B2B Positioning',
      'Commercial Funnel Diagnostics',
      'India & Overseas Market Expansion',
    ],
  },
  {
    id: 'elena-rostova',
    name: 'Elena Rostova',
    role: 'Principal Frontend Engineer',
    department: 'Engineering',
    location: 'Goa, India',
    since: '2020',
    image: aboutTeamElenaImg,
    imageAlt: 'Portrait of Elena Rostova, Principal Frontend Engineer at Lyfex Digital',
    shortBio:
      'Placeholder bio: Architects TypeScript web applications, headless commerce storefronts, and Core Web Vitals performance budgets.',
    fullBio:
      'Placeholder extended bio: Based at our Goa studio, Elena leads frontend architecture and engineering quality standards at Lyfex Digital. Prior to joining the studio, she led platform engineering teams in financial infrastructure and specializes in accessible, sub-second React architectures built for global reliability.',
    focusAreas: [
      'React & TypeScript Platform Architecture',
      'Omnichannel & Headless Commerce',
      'WCAG AA Accessibility Engineering',
    ],
  },
  {
    id: 'soren-lindqvist',
    name: 'Soren Lindqvist',
    role: 'Design Director',
    department: 'Design',
    location: 'Goa, India',
    since: '2021',
    image: aboutTeamSorenImg,
    imageAlt: 'Portrait of Soren Lindqvist, Design Director at Lyfex Digital',
    shortBio:
      'Placeholder bio: Directs typographic systems, editorial web flagships, and token-driven component libraries across client engagements.',
    fullBio:
      'Placeholder extended bio: Soren brings fifteen years of editorial and digital product design experience across Europe and India. Working from our Goa studio, he leads visual direction, interactive prototyping, and pragmatic design systems for physical brands and software platforms alike.',
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
    location: 'Goa, India',
    since: '2022',
    image: aboutTeamPriyaImg,
    imageAlt: 'Portrait of Priya Nair, Director of Growth and Automation at Lyfex Digital',
    shortBio:
      'Placeholder bio: Oversees multi-region technical SEO, server-side attribution, and automated CRM workflows across India and international markets.',
    fullBio:
      'Placeholder extended bio: Priya bridges web engineering and revenue operations from Goa. She leads local and international search strategy, conversion experimentation, and automated lead-routing workflows so both physical locations and digital funnels turn visits into qualified pipeline.',
    focusAreas: [
      'India & International Technical SEO',
      'CRM Qualification & Lead Routing',
      'Server-Side Analytics & Attribution',
    ],
  },
];
