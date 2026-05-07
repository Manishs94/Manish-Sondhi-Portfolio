import { Project } from '../types/project';

// Case studies - in-depth projects
export const caseStudies: Project[] = [
  {
    id: 6,
    title: 'CRE Comparable Integration',
    subtitle: 'Unified dual-view interface for comparable property analysis in commercial real estate loan origination — reducing per-property research time by 68%.',
    description: 'Designed a unified comparable property interface integrating internal LOS data with a synchronized map and list view, enabling loan officers and underwriters to evaluate CRE valuations faster with less manual data entry and fewer cross-system switches.',
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&q=80&w=1080',
    category: ['Enterprise Fintech', 'Commercial Real Estate', 'Data Visualization'],
    metrics: [
      { icon: 'trending-up', value: '68%', label: 'Time Reduction in Comparable Analysis' },
      { icon: 'check', value: '92%', label: 'User Satisfaction Score' },
      { icon: 'activity', value: '41%', label: 'Error Reduction via Inline Validation' }
    ],
    tools: ['Figma', 'Uizard', 'Analytics', 'Protopie'],
    link: 'https://cre-comparable-integrati-w3y90dv.gamma.site/',
    overview: {
      challenge: 'Loan officers spent an average of 45 minutes per property gathering comparable data from disparate sources. Manual entry across multiple systems created data inconsistency across teams and complex workflows that bottlenecked underwriting review.',
      solution: 'Designed a unified interface integrating existing internal comparable data into the LOS with dual-view functionality — a synchronized map and sortable list — accommodating both automated suggestions and manual additions with real-time field-level validation and status indicators distinguishing system-suggested from manually added comparables.',
      impact: '• 68% reduction in comparable property analysis time versus the prior workflow\n• 92% user satisfaction across loan officers and underwriters (12 stakeholder interview participants)\n• 41% decrease in data entry errors through improved inline validation\n• SUS score of 87 — indicating excellent usability — from 8 moderated usability testing participants'
    },
    challenge: 'Loan officers averaged 45 minutes per property gathering comparable data across disconnected systems, with manual entry creating inconsistency and bottlenecks in underwriting review.',
    process: 'Conducted 12 stakeholder interviews across loan officers, underwriters, and administrative staff. Ran shadowing sessions and process mapping workshops. Followed with 8-participant moderated usability testing with think-aloud protocol and SUS assessment.',
    status: 'Completed',
    isCaseStudy: true,
    productType: 'Commercial Real Estate Lending Platform',
    platforms: 'Web (Enterprise SaaS)',
    timeline: 'Discovery through phased rollout',
    role: 'Senior Product & UX Designer',
    team: ['Product', 'Engineering', 'Loan Officers', 'Underwriters'],
    responsibilities: [
      'Designed a dual-view comparable interface (interactive map + sortable data table) with synchronized property selection across both views.',
      'Built an expandable filter control panel for radius, property type, and advanced parameters with dynamic application.',
      'Conducted 12 stakeholder interviews across loan officers, underwriters, and administrative staff to map workflow pain points.',
      'Led 8-participant moderated usability testing with think-aloud protocol, achieving a final SUS score of 87.',
      'Designed progressive disclosure for comparable detail — essential metrics visible by default with expandable panels for full data.',
      'Collaborated with engineering on API integration planning, design handoff documentation, and phased rollout monitoring.'
    ],
    outcomes: [
      '68% reduction in comparable property analysis time versus the prior multi-system workflow.',
      '92% user satisfaction score across loan officers and underwriters at usability testing completion.',
      '41% decrease in data entry errors through real-time field-level validation and status indicators.',
      'SUS score of 87 (excellent usability) from 8 moderated testing participants using think-aloud protocol.'
    ],
    keyFeatures: [
      'Dual-view layout: synchronized interactive map and sortable data table',
      'Expandable filter panel for radius, property type, and advanced parameters',
      'Status indicators distinguishing auto-suggested from manually added comparables',
      'Progressive disclosure: essential metrics visible with expandable detail panels',
      'Real-time field-level validation during manual data entry',
      'Non-linear evaluation flow supporting how users actually review comparables'
    ]
  },
  {
    id: 3,
    title: 'CYNC Collateral Platform',
    subtitle: 'Enterprise collateral management platform supporting 50+ asset types and 200+ subtype configurations, enabling teams to monitor dependencies, track lifecycle events, and maintain portfolio clarity across complex lending workflows.',
    description: 'Enterprise collateral management platform supporting 50+ asset types and 200+ subtype configurations across lending portfolios, helping teams monitor collateral dependencies, lifecycle status, and coverage through a more structured operational system.',
    image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    category: ['Enterprise Fintech', 'Collateral Management', 'Enterprise Platform'],
    metrics: [
      { icon: 'activity', value: '50+', label: 'Asset Types' },
      { icon: 'check', value: '60+', label: 'Components Built' },
      { icon: 'trending-up', value: 'Real-time', label: 'Collateral Monitoring' }
    ],
    tools: ['Figma', 'Miro', 'Analytics', 'Protopie'],
    link: 'https://cync-collateral-0urjvt8.gamma.site',
    overview: {
      challenge: 'Collateral data was fragmented across workflows, making asset review, monitoring, and exception handling slower and harder to scale.',
      solution: 'Designed a unified collateral management platform that gives teams structured visibility into asset dependencies, lifecycle events, and collateral coverage, creating clearer monitoring workflows and scalable infrastructure for complex portfolio operations.',
      impact: '• Unified 50+ asset types and 200+ subtype configurations into a single platform — previously managed across disconnected workflows\n• Designed for 5 distinct loan product types: Commercial, Consumer, ABL, Warehouse, and Specialty Lending\n• Built 60+ reusable components into Cync\'s first formal design system\n• Flood, Valuation, and Insurance data integrated via third-party APIs (Dataverify, EODHD) with inline override logic'
    },
    challenge: 'Collateral tracking workflows were difficult to monitor and validate across teams.',
    process: 'Mapped collateral lifecycle states, designed streamlined review flows, and validated dashboards for status clarity.',
    status: 'Completed',
    isCaseStudy: true,
    productType: 'Enterprise Collateral Management Platform',
    platforms: 'Web (Enterprise SaaS)',
    timeline: 'Multi-module, multi-quarter initiative',
    role: 'Senior Product & UX Designer',
    team: ['Product', 'Engineering', 'Risk', 'Compliance'],
    responsibilities: [
      'Led end-to-end design of a collateral management platform supporting 50+ asset types and 200+ subtype configurations.',
      'Mapped collateral lifecycle states and designed streamlined review and monitoring workflows.',
      'Built 60+ reusable components that became Cync\'s first formal design system.',
      'Integrated third-party data sources (Dataverify, EODHD) into inline override and validation workflows.',
      'Designed for 5 distinct loan product types: Commercial, Consumer, ABL, Warehouse, and Specialty Lending.',
      'Partnered with engineering and risk teams to validate data hierarchy and edge case handling.'
    ],
    outcomes: [
      'Unified 50+ asset types and 200+ subtype configurations into a single platform, previously managed across disconnected workflows.',
      'Designed across 5 loan product types, replacing fragmented tooling with one coherent operational system.',
      'Built 60+ reusable components that formed Cync\'s first formal design system.',
      'Integrated Flood, Valuation, and Insurance data via third-party APIs with inline override logic.'
    ]
  },
  {
    id: 5,
    title: 'Securities-Based Lending (SBL)',
    subtitle: 'Enterprise securities-based lending platform supporting underwriting, portfolio monitoring, and exception management for credit operations and high-value lending decisions.',
    description: 'Enterprise securities-based lending platform supporting underwriting workflows, portfolio monitoring, and exception management for credit teams making high-value, risk-sensitive lending decisions.',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=1080',
    category: ['Enterprise Fintech', 'Securities-Based Lending', 'Decision Platform'],
    metrics: [
      { icon: 'trending-up', value: '71% Faster', label: 'Approval Cycle' },
      { icon: 'check', value: 'Built-in', label: 'Audit Trail' },
      { icon: 'activity', value: 'Real-time', label: 'Risk Monitoring' }
    ],
    tools: ['Figma', 'Miro', 'Analytics', 'Protopie'],
    link: 'https://sbl-design-78bjaff.gamma.site/',
    overview: {
      challenge: 'Lending teams were working through securities-backed approvals with fragmented collateral visibility, unclear workflow states, and slow access to risk signals.',
      solution: 'Designed a decision-support workflow that brought underwriting, collateral evaluation, and portfolio monitoring into a shared view, helping analysts and operations teams interpret risk signals, review exposure with more confidence, and move through structured approval states.',
      impact: '• Approval cycle time reduced from 6.2 days → 1.8 days based on time-study analysis of 15 loan workflows\n• Analyst manual prep time cut from 4.2 hrs → 0.8 hrs per loan by unifying 4 previously separate systems\n• Loan volume capacity increased from 12 → 28 loans/analyst/month (projected, stakeholder-validated)\n• Full audit trail per decision — required for regulatory compliance, designed in from day one'
    },
    challenge: 'SBL teams needed clearer workflow states and faster access to key lending signals.',
    process: 'Mapped SBL decision flows, designed role-aware interfaces, and validated with iterative feedback cycles.',
    status: 'Completed',
    isCaseStudy: true,
    productType: 'Enterprise Decision Support Platform',
    platforms: 'Web (Enterprise SaaS)',
    timeline: 'Multi-phase delivery',
    role: 'Senior Product & UX Designer',
    team: ['Product', 'Engineering', 'Credit Operations', 'Risk'],
    responsibilities: [
      'Designed underwriting, portfolio monitoring, and exception management workflows for credit teams.',
      'Mapped SBL decision flows and created role-aware interfaces for analysts and operations teams.',
      'Unified collateral evaluation, underwriting, and portfolio monitoring into a shared decision view.',
      'Designed structured approval states with built-in audit trail for regulatory compliance.',
      'Validated designs through iterative feedback cycles with lending teams and stakeholders.',
      'Increased loan volume capacity from 12 to 28 loans per analyst per month (projected, stakeholder-validated).'
    ],
    outcomes: [
      'Approval cycle time reduced from 6.2 days to 1.8 days, based on time-study analysis of 15 loan workflows.',
      'Analyst manual prep time cut from 4.2 hours to 0.8 hours per loan by unifying 4 previously separate systems.',
      'Loan volume capacity increased from 12 to 28 loans per analyst per month (projected, stakeholder-validated).',
      'Full audit trail per decision — designed for regulatory compliance from day one.'
    ]
  },
  {
    id: 4,
    title: 'CYNC Advance Analytics (CAA)',
    subtitle: 'Enterprise portfolio analytics platform enabling credit teams to evaluate portfolio health, analyze collateral performance, and monitor exposure risk in real time using interactive dashboards and decision-support insights.',
    description: 'Enterprise portfolio analytics platform enabling credit teams to monitor portfolio health, interpret exposure risk, and act on decision-support insights through interactive analysis and data-rich dashboards.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1080',
    category: ['Enterprise Fintech', 'Advanced Analytics', 'Data Visualization'],
    metrics: [
      { icon: 'lineChart', value: '50+', label: 'Collateral Types' },
      { icon: 'trending-up', value: 'Reusable', label: 'Dashboard Patterns' },
      { icon: 'check', value: 'Real-time', label: 'Portfolio Insights' }
    ],
    tools: ['Figma', 'Miro', 'Analytics', 'Protopie'],
    link: 'https://cync-advance-analytics-dm754oh.gamma.site',
    overview: {
      challenge: 'Teams lacked a clear way to monitor portfolio health, spot exposure issues, and interpret performance trends across lending operations.',
      solution: 'Designed interactive dashboards, filtering tools, and decision-support insights that helped credit teams and portfolio managers monitor portfolio health, surface exposure issues faster, and replace manual spreadsheet-based analysis with more actionable operational intelligence.',
      impact: '• Replaced spreadsheet-based portfolio monitoring used by 3+ analyst roles across credit and operations\n• Designed filtering system handling 50+ collateral types with real-time exposure surfacing\n• Reduced time-to-insight for portfolio health reviews — validated through stakeholder walkthroughs\n• Established reusable dashboard component patterns now used across Cync\'s LOS product suite'
    },
    challenge: 'Analytics dashboards were difficult to interpret quickly across different user roles.',
    process: 'Defined analytics user journeys, designed data-first layouts, and validated usability for high-density information views.',
    status: 'Completed',
    isCaseStudy: true,
    productType: 'Enterprise Analytics Platform',
    platforms: 'Web (Enterprise SaaS)',
    timeline: 'Multi-phase delivery',
    role: 'Senior Product & UX Designer',
    team: ['Product', 'Engineering', 'Data'],
    responsibilities: [
      'Designed an analytics platform for enterprise credit and operations teams to monitor portfolio health and exposure.',
      'Established reusable dashboard component patterns used across Cync\'s LOS product suite.',
      'Translated complex data workflows into intuitive visualizations and decision-support dashboards.',
      'Designed a filtering system handling 50+ collateral types with real-time exposure surfacing.',
      'Partnered with product, engineering, and data teams to align on analytics requirements and insight delivery.',
      'Validated designs for usability, performance, and accessibility compliance across high-density data views.'
    ],
    outcomes: [
      'Replaced spreadsheet-based portfolio monitoring used by 3+ analyst roles across credit and operations.',
      'Designed filtering system handling 50+ collateral types with real-time exposure surfacing.',
      'Reduced time-to-insight for portfolio health reviews, validated through stakeholder walkthroughs.',
      'Established reusable dashboard component patterns now used across Cync\'s LOS product suite.'
    ]
  },
  {
    id: 2,
    title: 'Bank of America – Mobile Banking Redesign',
    subtitle: 'Redesigned core mobile banking experiences—bill payment, transfers, and account management—for a large-scale consumer audience, improving usability and accessibility across 68M+ active users.',
    description: 'Led the redesign of critical consumer banking workflows on mobile platforms, improving clarity, usability, and accessibility across payment scheduling, fund transfers, and account management for millions of users.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    category: ['Consumer Banking', 'Mobile UX', 'Accessibility Design', 'Fintech'],
    metrics: [
      { icon: 'users2', value: '68M+', label: 'Active Users' },
      { icon: 'check', value: '40%', label: 'Usability Improvement' },
      { icon: 'trending-up', value: '25%', label: 'Task Completion' }
    ],
    tools: ['Figma', 'Adobe XD', 'UserTesting', 'Protopie', 'Analytics', 'Accessibility Auditing'],
    link: 'https://boa-billpay-redesign-fewkgfd.gamma.site/',
    overview: {
      challenge: 'Users experienced confusion and frustration with mobile banking workflows: complex payment scheduling with unclear terminology, limited flexibility in transfer options, unclear transaction history, and poor accessibility (low contrast, unclear labels). High support volume and user abandonment in critical workflows.',
      solution: 'Redesigned payment scheduling with progressive disclosure and clearer mental models. Simplified fund transfer flows with template management for frequent transfers. Improved transaction history with filtering, search, and detailed transaction views. Implemented WCAG 2.1 accessibility standards across all workflows (color contrast, keyboard navigation, screen reader support).',
      impact: '• 40% improvement in task completion rates (measured via behavioral analytics pre/post redesign)\n• 25% increase in feature adoption for bill pay and transfers (tracked through in-app instrumentation)\n• 35% reduction in support tickets tied to redesigned workflows (validated against support operations data)\n• Full WCAG 2.1 AA compliance across all redesigned flows — color contrast, keyboard nav, screen reader support'
    },
    challenge: 'Mobile banking workflows were complex and confusing: unclear payment scheduling, limited transfer flexibility, poor transaction history, weak accessibility, leading to high user abandonment and support volume.',
    process: 'Conducted extensive user research and usability testing with 40+ participants across different user segments (frequent users, occasional users, accessibility users). Created wireframes and high-fidelity prototypes with iterative testing. Designed responsive layouts optimized for various phone sizes and orientations. Implemented accessibility requirements throughout design (WCAG 2.1, color contrast, keyboard navigation).',
    team: [
      'Senior UI/UX Designer (Lead)',
      'UX Researcher (2)',
      'Accessibility Specialist',
      'Product Manager',
      'Mobile Development Team (8)',
      'QA Engineer'
    ],
    timeline: 'Nov 2018 – Feb 2022',
    role: 'Senior UI/UX Designer — Mobile Consumer Banking',
    keyFeatures: [
      'Simplified payment scheduling with progressive disclosure',
      'Enhanced fund transfer with template management',
      'Improved transaction history with filtering and search',
      'WCAG 2.1 compliant accessibility throughout',
      'Responsive mobile design optimized for all phone sizes',
      'Real-time notifications and payment tracking',
      'Secure authentication with biometric support',
      'Detailed error handling and validation feedback'
    ],
    status: 'Completed',
    isCaseStudy: true,
    productType: 'Consumer Banking Mobile Application',
    platforms: 'iOS & Android',
    responsibilities: [
      'Designed end-to-end mobile banking experiences for high-volume consumer users across payment, transfer, and account management flows.',
      'Simplified payment scheduling and improved task completion across iOS, Android, and web.',
      'Conducted user research and usability testing with 40+ participants to identify friction points and optimize flows.',
      'Worked closely with engineers to ensure design feasibility and implementation fidelity.',
      'Ensured WCAG 2.1 AA accessibility compliance across all redesigned workflows.',
      'Improved trust and clarity in high-stakes financial transactions through progressive disclosure and clear error states.'
    ],
    outcomes: [
      '40% improvement in task completion rates, measured via behavioral analytics pre/post redesign.',
      '25% increase in feature adoption for bill pay and transfers, tracked through in-app instrumentation.',
      '35% reduction in support tickets tied to redesigned workflows, validated against support operations data.',
      'Full WCAG 2.1 AA compliance across all redesigned flows — color contrast, keyboard navigation, screen reader support.'
    ]
  }
];
