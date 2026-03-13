import { Project } from '../types/project';

// Case studies - in-depth projects
export const caseStudies: Project[] = [
  {
    id: 0,
    title: 'UI/UX Case Study: Innovative Design Studio',
    subtitle: 'Foundational Product Design for Early-Stage Clients: A UI/UX Case Study',
    description: 'As a UI/UX Designer, I collaborated with senior designers to deliver impactful user experiences for startups and nonprofit organizations.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1600',
    category: ['UI Design', 'UX Research', 'Early-Stage Products'],
    metrics: [
      { icon: 'check', value: 'Improved', label: 'Usability' },
      { icon: 'zap', value: 'Faster', label: 'Dev Handoffs' },
      { icon: 'layers', value: 'Stronger', label: 'Product Vision' }
    ],
    tools: ['Sketch', 'Illustrator', 'Google Forms'],
    link: '/case-study/innovative-design-studio',
    overview: {
      challenge: 'Startups and nonprofits often face limited resources for design cycles, a lack of user insight at the outset, and a need to iterate quickly and launch MVPs.',
      solution: 'Created foundational UX solutions that could scale while working within budget and time constraints.',
      impact: 'Improved usability, faster dev handoffs, and stronger product vision.'
    },
    challenge: 'Scaling UX on limited resources.',
    process: 'From kickoff and research to wireframing, prototyping, and client handoff.',
    status: 'Completed',
    isCaseStudy: true
  },
  {
    id: 2,
    title: 'Bank of America – Mobile Banking Redesign',
    subtitle: 'Redesigned core mobile banking experiences—bill payment, transfers, and account management—for a large-scale consumer audience, improving usability and accessibility across 68M+ active users.',
    description: 'Led the redesign of critical consumer banking workflows on mobile platforms. Improved clarity, usability, and accessibility of payment scheduling, fund transfers, and account management—delivering a cohesive, mobile-first experience for millions of users while maintaining enterprise-level security and compliance requirements.',
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
      impact: 'Achieved 40% improvement in task completion rates, 25% increase in feature adoption, 35% reduction in support tickets for bill pay and transfers, and full WCAG 2.1 compliance across redesigned workflows.'
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
    isCaseStudy: true
  },
  {
    id: 5,
    title: 'Securities-Based Lending (SBL)',
    subtitle: 'Enterprise securities-based lending workflows for multi-role credit operations and high-value loan decisions.',
    description: 'Enterprise securities-based lending platform enabling credit teams to evaluate collateral portfolios, monitor exposure risk, and approve loans through integrated decision-support workflows.',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=1080',
    category: ['Enterprise Fintech', 'Securities-Based Lending', 'Workflow Design'],
    metrics: [
      { icon: 'trending-up', value: 'Faster', label: 'Approval Workflow' },
      { icon: 'check', value: 'Improved', label: 'Operational Clarity' },
      { icon: 'activity', value: 'Real-time', label: 'Risk Monitoring' }
    ],
    tools: ['Figma', 'Miro', 'Analytics', 'Protopie'],
    link: 'https://sbl-design-78bjaff.gamma.site/',
    overview: {
      challenge: 'Lending teams were working through securities-backed approvals with fragmented collateral visibility, unclear workflow states, and slow access to risk signals.',
      solution: 'Designed underwriting workflows, portfolio monitoring, and exception handling for analysts, approvers, and operations teams working across shared lending data.',
      impact: 'Faster approval workflows for high-value lending decisions; improved visibility into collateral and risk exposure; clearer operational handoffs between analysts and operations teams.'
    },
    challenge: 'SBL teams needed clearer workflow states and faster access to key lending signals.',
    process: 'Mapped SBL decision flows, designed role-aware interfaces, and validated with iterative feedback cycles.',
    status: 'Completed',
    isCaseStudy: true
  },
  {
    id: 4,
    title: 'CYNC Advance Analytics (CAA)',
    subtitle: 'Enterprise portfolio analytics platform for multi-role monitoring, risk visibility, and faster decision support.',
    description: 'Enterprise portfolio analytics platform enabling lending teams to evaluate portfolio health, analyze collateral performance, and monitor risk exposure in real time.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1080',
    category: ['Enterprise Fintech', 'Advanced Analytics', 'Data Visualization'],
    metrics: [
      { icon: 'lineChart', value: 'Real-time', label: 'Portfolio Insights' },
      { icon: 'trending-up', value: 'Faster', label: 'Decision Analysis' },
      { icon: 'check', value: 'Improved', label: 'Risk Visibility' }
    ],
    tools: ['Figma', 'Miro', 'Analytics', 'Protopie'],
    link: 'https://cync-advance-analytics-dm754oh.gamma.site',
    overview: {
      challenge: 'Teams lacked a clear way to monitor portfolio health, spot exposure issues, and interpret performance trends across lending operations.',
      solution: 'Designed interactive dashboards, filtering tools, and decision-support insights for credit teams and portfolio managers replacing manual spreadsheet-based analysis.',
      impact: 'Reduced manual analysis across lending operations; improved visibility into collateral performance and exposure risk; faster portfolio reviews for credit teams and managers.'
    },
    challenge: 'Analytics dashboards were difficult to interpret quickly across different user roles.',
    process: 'Defined analytics user journeys, designed data-first layouts, and validated usability for high-density information views.',
    status: 'Completed',
    isCaseStudy: true
  },
  {
    id: 3,
    title: 'CYNC Collateral Platform',
    subtitle: 'Enterprise collateral management platform supporting complex loan portfolios, asset dependencies, and lifecycle tracking.',
    description: 'Enterprise collateral management platform supporting 50+ asset types and 200+ subtype configurations across lending products.',
    image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    category: ['Enterprise Fintech', 'Collateral Management', 'Workflow Design'],
    metrics: [
      { icon: 'activity', value: 'Real-time', label: 'Collateral Monitoring' },
      { icon: 'check', value: 'Improved', label: 'Review Accuracy' },
      { icon: 'trending-up', value: 'Faster', label: 'Decision Support' }
    ],
    tools: ['Figma', 'Miro', 'Analytics', 'Protopie'],
    link: 'https://cync-collateral-0urjvt8.gamma.site',
    overview: {
      challenge: 'Collateral data was fragmented across workflows, making asset review, monitoring, and exception handling slower and harder to scale.',
      solution: 'The platform enables lending teams to track asset dependencies, manage collateral lifecycle events, and maintain collateral coverage across complex loan portfolios.',
      impact: 'Improved visibility into collateral coverage and asset dependencies; faster collateral reviews across multi-role operations teams; reduced manual coordination across complex portfolios.'
    },
    challenge: 'Collateral tracking workflows were difficult to monitor and validate across teams.',
    process: 'Mapped collateral lifecycle states, designed streamlined review flows, and validated dashboards for status clarity.',
    status: 'Completed',
    isCaseStudy: true
  }
];
