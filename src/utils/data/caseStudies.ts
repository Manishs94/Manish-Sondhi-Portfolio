import { Project } from '../types/project';

// Case studies - in-depth projects
export const caseStudies: Project[] = [
  {
    id: 7,
    title: 'Investment Collateral — Securities as a Distinct Collateral Category',
    subtitle: 'One of 11 structurally distinct collateral categories in Cync\'s platform — securities-backed lending, with policy (advance rate, eligibility) set once at the admin level and inherited automatically wherever that security is pledged to a loan.',
    description: 'Securities behave differently as collateral than physical assets: value changes with the market, eligibility is a policy decision made at the security level, and one security can secure more than one loan. Designed Admin → Investments Management as the securities master, with advance rate and eligibility inherited automatically by every loan referencing that security.',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=1080',
    category: ['Enterprise Fintech', 'Information Architecture', 'Compliance UX'],
    metrics: [
      { icon: 'activity', value: '11', label: 'Structurally Distinct Collateral Categories' }
    ],
    tools: ['Figma', 'Miro', 'Analytics'],
    link: '/work/investment-collateral',
    overview: {
      challenge: 'Investment collateral (securities) is different in kind, not just in fields, from most collateral types: value changes with the market, eligibility is a policy decision made at the security level rather than the loan level, and a single security can sit behind more than one loan at once.',
      solution: 'Designed Admin → Investments Management as the securities master — the source of truth for every security that can be pledged as collateral, with eligibility, advance rate, and pricing living on the security record itself and inherited automatically wherever that security is linked to a loan.',
      impact: 'Collateral and Loan are independent modules, linked by an explicit pledge action. Once linked, the loan side inherits the policy already set on the collateral side — advance rate and eligibility flow through automatically, and updates in Admin propagate to every loan referencing that security.'
    },
    challenge: 'Most collateral types in the system — Commercial Real Estate, Equipment, Agriculture — represent a physical or slow-changing asset priced by appraisal and tied to a single, mostly-static record. Investment collateral needed a genuinely separate data model and admin surface, not a few securities-specific fields bolted onto the existing record.',
    process: 'Mapped how securities behave differently as collateral, designed the Investments Management admin surface as the securities master, and designed the pledge/link mechanism connecting a security to a loan with automatic policy inheritance.',
    status: 'Completed',
    isCaseStudy: true,
    productType: 'Enterprise Collateral Management Platform',
    platforms: 'Web (Enterprise SaaS · Angular)',
    timeline: '2022 – 2026',
    role: 'Senior Product Designer · Product Owner · Business Analyst',
    team: ['Product', 'Engineering', 'Risk', 'Compliance'],
    responsibilities: [
      'Designed Admin → Investments Management as the securities master for every security eligible to be pledged as collateral.',
      'Designed the explicit Eligible for Collateral flag and Advance Rate% as policy fields living on the security record, not duplicated per loan.',
      'Designed the pledge/link mechanism connecting Collateral and Loan as independent modules, with automatic policy inheritance on the loan side.',
      'Designed individual and bulk ("Investment Update" file upload) security creation, plus per-row ON/OFF availability toggling.'
    ],
    outcomes: [
      'Eligibility, advance rate, and pricing centralized on the security record in Admin — not duplicated per loan, per borrower, or per collateral record.',
      'Policy updates in Admin propagate automatically to every loan referencing that security, rather than requiring manual updates per loan.',
      'Bulk operations (Investment Update upload, per-row ON/OFF toggle) allow policy changes across every affected loan from a single point of control.'
    ]
  },
  {
    id: 6,
    title: 'Commercial Real Estate Collateral',
    subtitle: 'One of 11 structurally distinct collateral categories in Cync\'s platform — the highest-integration category, connecting appraisal, title, flood, tax, environmental, and encumbrance data to a single record, and to a loan that may spread its exposure across more than one property.',
    description: 'The collateral category with the most third-party integration surface area and the most compliance-driven due-diligence structure in the platform — assembling appraisal, title, flood, tax, environmental, and lien-search evidence into a single auditable record, with support for a loan secured by more than one CRE property at once.',
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&q=80&w=1080',
    category: ['Enterprise Fintech', 'Commercial Real Estate', 'Compliance UX'],
    metrics: [
      { icon: 'activity', value: '13', label: 'Collateral Record Tabs — Widest of Any Category' }
    ],
    tools: ['Figma'],
    link: '/work/commercial-real-estate-collateral',
    overview: {
      challenge: 'A CRE record has to assemble evidence from multiple independent sources — appraisal, title, flood certification, tax assessment, environmental screening, lien search — into a single, auditable record, unlike Investment collateral, where value comes from a live pricing feed and one admin screen governs eligibility.',
      solution: 'Designed the widest tab set of any collateral category, a many-to-many loan-to-property pledge/link mechanism for loans secured by more than one CRE property, a three-tab Appraisal/Review/Evaluation structure, and a synchronized map/list comparable-property view with a persistent filter panel.'
    },
    challenge: 'Commercial Real Estate is the collateral category with the most third-party integration surface area and the most compliance-driven due-diligence structure of any type in the platform.',
    process: 'Translated appraisal, title, flood, tax, and environmental due-diligence requirements into the record\'s tab structure and field specs, as foundational designer and de facto business analyst for the category.',
    status: 'Completed',
    isCaseStudy: true,
    productType: 'Enterprise Collateral Management Platform',
    platforms: 'Web (Enterprise SaaS · Angular)',
    role: 'Foundational Designer · De Facto Business Analyst',
    team: ['Product', 'Engineering', 'Risk', 'Compliance'],
    responsibilities: [
      'Translated appraisal, title, flood, tax, and environmental due-diligence requirements into the CRE record\'s 13-tab structure and field specs.',
      'Designed the many-to-many loan-to-property pledge/link mechanism supporting loans secured by more than one CRE property.',
      'Designed the Appraisal Details three-tab structure separating raw appraisal data entry, regulatory-compliance review, and independent evaluation records.',
      'Designed the synchronized map/list comparable-property view with a persistent filter panel (radius, property type, transaction type, building class, size range).'
    ],
    outcomes: [
      'Widest tab set of any collateral category in the platform — a direct consequence of how many independent data sources a CRE underwriting decision depends on.',
      'Loan-side exposure aggregation across every linked property, rather than requiring manual totaling across individually opened property records.',
      'Appraisal, Review, and Evaluation kept as separate tabs reflecting three distinct workflows with different owners and regulatory weight.'
    ]
  },
  {
    id: 3,
    title: 'Cync Collateral Platform',
    subtitle: 'Designing a single configurable system to manage 50+ collateral categories — 1,798 granular types — across 5 loan products, without building a separate UI for each',
    description: 'A configurable collateral record architecture — one consistent shell serving 50+ top-level collateral categories (1,798 granular types, 2,344 sub-types) across 5 loan products, with proactive lifecycle event tracking and explicit data-source labeling for compliance-critical valuation data.',
    image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    category: ['Enterprise Fintech', 'Information Architecture', 'Design Systems', 'Compliance UX', 'Angular'],
    metrics: [
      { icon: 'activity', value: '50+', label: 'Collateral Categories (1,798 Types)' },
      { icon: 'check', value: '2,344', label: 'Sub-Types Configured' },
      { icon: 'trending-up', value: '60+', label: 'Design System Components' }
    ],
    tools: ['Figma', 'Miro', 'Analytics', 'Protopie'],
    link: '/work/cync-collateral-platform',
    overview: {
      challenge: 'Analysts working a collateral record had to move across multiple separate tabs to get a full picture. Compliance events were tracked in spreadsheets and discovered reactively, after a finding, not before.',
      solution: 'Designed a configurable collateral record shell — consistent outer structure with field-level customization per asset type and loan product — plus proactive lifecycle event tracking built into the record as a first-class object.',
      impact: '• 50+ top-level collateral categories unified in one configurable platform — 1,798 granular types in total\n• 2,344 sub-type configurations supported\n• 60+ design system components created\n• Compliance events moved from spreadsheet-managed to platform-managed'
    },
    challenge: 'Enterprise collateral management sounds like a data problem. It is actually an information architecture problem — 50+ collateral categories (1,798 configured types) with different fields, validation rules, and compliance requirements, each with its own lifecycle.',
    process: 'Mapped asset, integration, and compliance complexity across every collateral type, then built a configurable shell — consistent chrome, field-level customization — validated against real analyst review sessions.',
    status: 'Completed',
    isCaseStudy: true,
    productType: 'Enterprise Collateral Management Platform',
    platforms: 'Web (Enterprise SaaS · Angular)',
    timeline: '2022 – 2026',
    role: 'Senior Product Designer · Product Owner · Business Analyst',
    team: ['Product', 'Engineering', 'Risk', 'Compliance'],
    responsibilities: [
      'Led end-to-end design of a configurable collateral management platform supporting 50+ collateral categories — 1,798 granular types and 2,344 sub-types.',
      'Designed the two-mode valuation pattern with explicit API/Manual source labeling for compliance-critical data.',
      'Built 60+ reusable components that became Cync\'s first formal design system.',
      'Designed proactive lifecycle event tracking, replacing spreadsheet-managed compliance monitoring.',
      'Partnered with engineering and risk teams to validate the configurable architecture against real asset data.'
    ],
    outcomes: [
      '50+ top-level collateral categories unified in one configurable platform — 1,798 granular types in total.',
      '2,344 sub-type configurations supported.',
      '60+ design system components created — now used across the Cync LOS suite.',
      'Compliance events moved from spreadsheet-managed to platform-managed.',
      'One consistent UI across clients with different integration states — no retraining when switching clients.'
    ]
  },
  {
    id: 4,
    title: 'Cync Advance Analytics',
    subtitle: 'A portfolio analytics product for commercial lending — dashboard, chart, and detail views designed within Cync\'s platform. Full scope not yet documented.',
    description: 'A real, in-production analytics product within Cync\'s platform, confirmed by roughly 25 screens in the design file — dashboard views with chart components, table-based data views, and modal/detail states. What the product does, who uses it, and what problem it solves have not yet been verified for this case study.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1080',
    category: ['Enterprise Fintech', 'Data Visualization'],
    metrics: [
      { icon: 'activity', value: '~25', label: 'Screens in Design File' }
    ],
    tools: ['Figma'],
    link: '/work/cync-advance-analytics',
    overview: {
      challenge: 'Not yet documented — see the full case study for exactly what is and is not verified about this product.',
      solution: 'Confirmed screen inventory only: dashboard views with bar/column chart components, table-based data views, and several dark-background modal or detail-state screens.'
    },
    status: 'Completed',
    isCaseStudy: true,
    productType: 'Enterprise Web',
    platforms: 'Web (Enterprise SaaS)'
  },
  {
    id: 2,
    title: 'Bank of America Bill Pay Redesign',
    subtitle: 'Enhancing digital banking experience for over 68 million customers through an intuitive and user-friendly Bill Pay feature redesign.',
    description: 'Redesigned the Bill Pay feature on the Bank of America mobile app — simplifying payment scheduling, improving payment history visibility, and creating a smoother experience for individual and business banking customers.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    category: ['Consumer Banking', 'Mobile UX', 'Fintech'],
    metrics: [
      { icon: 'users2', value: '68M+', label: 'Customers Served' }
    ],
    tools: ['Figma', 'UserTesting', 'App Store Review Analysis'],
    link: '/work/bank-of-america-mobile-banking',
    overview: {
      challenge: 'Users found the Bill Pay feature complex and inflexible: difficult scheduling and management, limited ability to modify options and delivery dates, confusing payment formats, and difficulty tracking payment history.',
      solution: 'Streamlined the bill payment UI, added scheduling flexibility with real-time notifications, and upgraded payment history to a searchable, filterable view — validated through two rounds of usability testing with returning participants.',
      impact: '• Streamlined UI for setting up and managing bill payments\n• Greater scheduling flexibility with real-time notifications and intuitive prompts\n• Searchable, detailed payment history with filtering by date, recipient, and payment type\n• Delete button, in-flow help text, and a repeat-payment button added after usability testing feedback'
    },
    challenge: 'Users expressed dissatisfaction with the Bill Pay feature: complexity in managing and scheduling payments, limited flexibility in modifying delivery dates, confusing payment formats, and difficulty tracking payment history.',
    process: 'Conducted app store feedback analysis, surveys, and in-depth user interviews. Designed solutions for two user groups (individual and business), then validated with two rounds of usability testing using returning participants and realistic task scenarios.',
    team: [
      'Product Designer (Researcher)',
      'Lead Product Designer',
      'UX Designers & Researchers (4)'
    ],
    timeline: '2022',
    role: 'Product Designer & Researcher',
    keyFeatures: [
      'Streamlined bill payment scheduling and management UI',
      'Real-time notifications and intuitive prompts for scheduled payments',
      'Searchable, filterable payment history',
      'Delete button for managing scheduled payments',
      'In-flow help text throughout the payment process',
      'Repeat bill payment button for recurring payments'
    ],
    status: 'Completed',
    isCaseStudy: true,
    productType: 'Consumer Banking Mobile Application',
    platforms: 'Bank of America Mobile App',
    responsibilities: [
      'Conducted user feedback analysis, surveys, and interviews to identify Bill Pay pain points.',
      'Designed solutions for two user groups: individual users and business owners.',
      'Ran two rounds of usability testing with returning participants using realistic task scenarios.',
      'Iterated the design based on usability findings — added a delete button, help text, and a repeat-payment button.'
    ],
    outcomes: [
      'Streamlined UI for setting up and managing bill payments.',
      'Enhanced scheduling flexibility with real-time notifications.',
      'Upgraded, searchable payment history with filtering by date, recipient, and payment type.',
      'Iterative refinements (delete button, help text, repeat payment) added directly from usability testing feedback.'
    ]
  }
];
