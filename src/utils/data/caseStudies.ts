import { Project } from '../types/project';

// Case studies - in-depth projects
export const caseStudies: Project[] = [
  {
    id: 3,
    title: 'CYNC Collateral Platform',
    subtitle: 'Enterprise collateral management platform supporting 50+ asset types and 200+ subtype configurations, enabling teams to monitor dependencies, track lifecycle events, and maintain portfolio clarity across complex lending workflows.',
    description: 'Enterprise collateral management platform supporting 50+ asset types and 200+ subtype configurations across lending portfolios, helping teams monitor collateral dependencies, lifecycle status, and coverage through a more structured operational system.',
    image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    category: ['Enterprise Fintech', 'Collateral Management', 'Enterprise Platform'],
    metrics: [
      { icon: 'activity', value: 'Real-time', label: 'Collateral Monitoring' },
      { icon: 'check', value: 'Improved', label: 'Review Accuracy' },
      { icon: 'trending-up', value: 'Faster', label: 'Decision Support' }
    ],
    tools: ['Figma', 'Miro', 'Analytics', 'Protopie'],
    link: 'https://cync-collateral-0urjvt8.gamma.site',
    overview: {
      challenge: 'Collateral data was fragmented across workflows, making asset review, monitoring, and exception handling slower and harder to scale.',
      solution: 'Designed a unified collateral management platform that gives teams structured visibility into asset dependencies, lifecycle events, and collateral coverage, creating clearer monitoring workflows and scalable infrastructure for complex portfolio operations.',
      impact: '• Improved visibility into collateral coverage and asset dependencies\n• Faster collateral reviews across multi-role operations teams\n• Reduced manual coordination across complex portfolios\n• Clearer operational coordination between analysts and operations teams'
    },
    challenge: 'Collateral tracking workflows were difficult to monitor and validate across teams.',
    process: 'Mapped collateral lifecycle states, designed streamlined review flows, and validated dashboards for status clarity.',
    status: 'Completed',
    isCaseStudy: true
  },
  {
    id: 5,
    title: 'Securities-Based Lending (SBL)',
    subtitle: 'Enterprise securities-based lending platform supporting underwriting, portfolio monitoring, and exception management for credit operations and high-value lending decisions.',
    description: 'Enterprise securities-based lending platform supporting underwriting workflows, portfolio monitoring, and exception management for credit teams making high-value, risk-sensitive lending decisions.',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=1080',
    category: ['Enterprise Fintech', 'Securities-Based Lending', 'Decision Platform'],
    metrics: [
      { icon: 'trending-up', value: 'Faster', label: 'Approval Workflow' },
      { icon: 'check', value: 'Improved', label: 'Operational Clarity' },
      { icon: 'activity', value: 'Real-time', label: 'Risk Monitoring' }
    ],
    tools: ['Figma', 'Miro', 'Analytics', 'Protopie'],
    link: 'https://sbl-design-78bjaff.gamma.site/',
    overview: {
      challenge: 'Lending teams were working through securities-backed approvals with fragmented collateral visibility, unclear workflow states, and slow access to risk signals.',
      solution: 'Designed a decision-support workflow that brought underwriting, collateral evaluation, and portfolio monitoring into a shared view, helping analysts and operations teams interpret risk signals, review exposure with more confidence, and move through structured approval states.',
      impact: '• Faster approval workflows for high-value lending decisions\n• Improved visibility into collateral and exposure risk\n• Reduced manual analysis across lending operations\n• Clearer operational coordination between analysts and operations teams'
    },
    challenge: 'SBL teams needed clearer workflow states and faster access to key lending signals.',
    process: 'Mapped SBL decision flows, designed role-aware interfaces, and validated with iterative feedback cycles.',
    status: 'Completed',
    isCaseStudy: true
  },
  {
    id: 4,
    title: 'CYNC Advance Analytics (CAA)',
    subtitle: 'Enterprise portfolio analytics platform enabling credit teams to evaluate portfolio health, analyze collateral performance, and monitor exposure risk in real time using interactive dashboards and decision-support insights.',
    description: 'Enterprise portfolio analytics platform enabling credit teams to monitor portfolio health, interpret exposure risk, and act on decision-support insights through interactive analysis and data-rich dashboards.',
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
      solution: 'Designed interactive dashboards, filtering tools, and decision-support insights that helped credit teams and portfolio managers monitor portfolio health, surface exposure issues faster, and replace manual spreadsheet-based analysis with more actionable operational intelligence.',
      impact: '• Reduced manual analysis across lending operations\n• Improved visibility into collateral performance and exposure risk\n• Faster portfolio reviews for credit teams and managers\n• Stronger decision support across portfolio monitoring workflows'
    },
    challenge: 'Analytics dashboards were difficult to interpret quickly across different user roles.',
    process: 'Defined analytics user journeys, designed data-first layouts, and validated usability for high-density information views.',
    status: 'Completed',
    isCaseStudy: true
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
      impact: '• 40% improvement in task completion rates across redesigned workflows\n• 25% increase in feature adoption for bill pay and transfers\n• 35% reduction in support tickets tied to critical banking tasks\n• Full WCAG 2.1 compliance across redesigned mobile experiences'
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
    id: 0,
    title: 'Innovative Design Studio — Foundational Product Design for Early-Stage Teams',
    subtitle: 'Designing scalable product foundations for startups and mission-driven organizations working under tight timelines, limited resources, and evolving product requirements.',
    description: 'Foundational product design work for startups and mission-driven teams, focused on clarifying user flows, improving usability, and building scalable product foundations under early-stage constraints.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1600',
    category: ['Product Design', 'UX Research', 'Early-Stage Products'],
    metrics: [
      { icon: 'check', value: 'Improved', label: 'Usability' },
      { icon: 'zap', value: 'Faster', label: 'Dev Handoffs' },
      { icon: 'layers', value: 'Stronger', label: 'Product Vision' }
    ],
    tools: ['Sketch', 'Illustrator', 'Google Forms'],
    link: '/case-study/innovative-design-studio',
    overview: {
      challenge: 'Early-stage teams often lacked structured product workflows, validated user journeys, and clear interface foundations. Many were trying to move quickly toward MVP launches while balancing limited time, budget, and internal design maturity.',
      solution: 'Designed foundational product experiences that helped early-stage teams clarify user flows, shape early product strategy, improve usability, and establish scalable UX foundations under tight delivery constraints.',
      impact: '• Improved clarity and usability across core early-stage product flows\n• Faster developer handoff through more structured interaction design\n• Stronger alignment between founders, stakeholders, and delivery teams\n• More scalable design foundations for future product iteration'
    },
    challenge: 'Scaling UX on limited resources.',
    process: 'From kickoff and research to wireframing, prototyping, and client handoff.',
    status: 'Completed',
    isCaseStudy: true
  }
];
