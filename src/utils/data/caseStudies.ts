import { Project } from '../types/project';

// Case studies - in-depth projects
export const caseStudies: Project[] = [
  {
    id: 2,
    title: 'CYNC Enterprise Lending Platform – Modular Platform Design',
    subtitle: 'Led end-to-end design of a modular enterprise fintech platform supporting loan origination, underwriting, collateral management, analytics, and risk monitoring—scaling across multiple complex workflows and regulatory requirements.',
    description: 'Designed a comprehensive enterprise lending platform serving financial institutions with highly complex, data-intensive workflows. Created a cohesive, scalable platform experience across multiple products while solving for workflow complexity, regulatory compliance, multi-stakeholder alignment, and data-driven decision support.',
    image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    category: ['Enterprise Fintech', 'Platform Design', 'B2B SaaS', 'AI-Assisted UX', 'Systems Thinking'],
    metrics: [
      { icon: 'zap', value: 'Modular', label: 'Platform Architecture' },
      { icon: 'shield', value: 'WCAG 2.1', label: 'Compliant Design' },
      { icon: 'layers', value: '15+', label: 'Reusable Components' }
    ],
    tools: ['Figma', 'Adobe XD', 'Jira', 'Miro', 'Protopie', 'UserTesting', 'Confluence', 'ChatGPT'],
    link: 'https://cync-platform-overview.gamma.site/',
    overview: {
      challenge: 'Design a cohesive platform across multiple, overlapping challenges: highly complex, multi-step lending workflows; strict regulatory and compliance requirements (audit trails, data immutability, role-based access); data-dense interfaces for different personas (credit analysts, risk managers, operations teams); need for configurability without compromising usability; increasing demand for AI-assisted decision support and guided workflows; accessibility compliance (WCAG 2.1) at scale.',
      solution: 'Created a modular, workflow-first platform architecture with configuration-driven UX patterns, decision-support analytics, and accessibility-first design embedded throughout. Designed guided workflows and AI-assisted interfaces for complex tasks (e.g., appraisal configuration, risk assessment). Established a reusable design system with 15+ component patterns, ensuring consistency across all modules. Each module was designed as a standalone product while sharing common interaction models, visual language, and system behavior, enabling both independence and coherence.',
      impact: 'Enabled a scalable, modular enterprise lending platform that: improved clarity and consistency across complex workflows; reduced operational friction through structured patterns; reduced development rework through reusable components; supported compliance and auditability requirements through design; created a foundation for AI-assisted enhancements (guided workflows, conversational interfaces, explainable decision-support); achieved WCAG 2.1 compliance across all modules.'
    },
    challenge: 'Designing a cohesive platform across multiple, overlapping challenges: highly complex lending workflows, strict regulatory requirements, data-dense interfaces across different personas, need for configurability without compromising usability, increasing demand for analytics and AI-assisted decision support, and accessibility compliance at scale.',
    process: 'Established a modular, workflow-first architecture with configuration-driven UX patterns, decision-support analytics focus, and accessibility-first design embedded throughout. Designed reusable interaction models for complex scenarios (multi-step workflows, data validation, conditional logic). Integrated AI-assisted UX patterns including guided workflows for appraisal configuration, conversational interfaces for compliance checks, and explainable decision-support dashboards. Created a unified design system in Figma with documentation in Confluence, enabling consistent implementation across 12+ development teams.',
    team: [
      'Product Designer (Lead) - Platform Architecture & Strategy',
      'Product Managers (2)',
      'Business Analysts (4)',
      'Development Teams (12+)',
      'Risk & Compliance Stakeholders (3)',
      'Accessibility Reviewer'
    ],
    timeline: 'Feb 2022 – Present',
    role: 'Lead Product Designer — Enterprise Platforms & AI-Assisted UX',
    keyFeatures: [
      'Modular, workflow-first architecture',
      'Configuration-driven UX patterns with admin interfaces',
      'AI-assisted guided workflows for complex tasks',
      'Decision-support dashboards with explainable analytics',
      'WCAG 2.1 compliant accessibility by design',
      'Audit-ready data capture and compliance workflows',
      '15+ reusable UI patterns and design system',
      'Cross-functional collaboration framework',
      'Real-time validation and error handling',
      'Multi-stakeholder interface variants'
    ],
    status: 'In Progress',
    isCaseStudy: true,
    isFlagged: true,
    platformOverview: true,
    subProjects: [6, 7, 8, 9, 19, 20, 21, 22, 23]
  },
  {
    id: 1,
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
    id: 3,
    title: 'CYNC Advanced Analytics & Decision-Support Platform',
    subtitle: 'Designed an accessibility-first analytics and decision-support platform enabling enterprise lending teams to monitor performance, risk, and portfolio health with clarity and confidence.',
    description: 'Created a comprehensive analytics platform for enterprise lending teams, combining complex data visualizations with explainable decision-support interfaces. Focused on accessibility-first design to ensure all users—regardless of ability—can access critical financial insights.',
    image: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&q=80&w=1000',
    category: ['Enterprise Analytics', 'Accessibility Design', 'B2B SaaS', 'Data Visualization', 'Decision Support'],
    metrics: [
      { icon: 'accessibility', value: 'WCAG 2.1', label: 'Compliant Platform' },
      { icon: 'lineChart', value: 'Real-time', label: 'Analytics Insights' },
      { icon: 'trending-up', value: '50%', label: 'Decision Speed' }
    ],
    tools: ['Figma', 'Adobe XD', 'Miro', 'WCAG 2.1 Audits', 'Protopie', 'D3.js/Recharts', 'Confluence'],
    link: 'https://uiux-case-study-enhancin-zkm1u63.gamma.site/',
    overview: {
      challenge: 'Enterprise users struggled with existing analytics interfaces: inconsistent data visualization patterns across products, poor accessibility (low contrast charts, no alt text, keyboard navigation issues), overwhelming data density, unclear interpretation of analytics results, difficulty identifying trends and anomalies across complex portfolios.',
      solution: 'Designed a unified analytics platform with: consistent, accessible data visualization patterns (high contrast, alt text, keyboard-navigable charts); progressive disclosure to manage information overload; integrated decision-support (annotations, benchmarking, alerts); accessibility as a core principle (not an afterthought); clear visual hierarchy to guide users through complex dashboards; real-time data integration for actionable insights.',
      impact: 'Achieved WCAG 2.1 compliance across all analytics dashboards, improved data interpretation clarity, reduced time to identify trends by 50%, increased user confidence in decision-making, and expanded platform accessibility to all user types.'
    },
    challenge: 'Analytics dashboards had inconsistent experiences, poor accessibility compliance, overwhelming data density, and unclear interpretation of complex financial metrics.',
    process: 'Conducted accessibility audits to identify WCAG violations. Designed a unified data visualization system with accessible color palettes (colorblind-friendly, high contrast), keyboard-navigable charts, and screen reader support. Created progressive disclosure patterns for complex data. Designed decision-support overlays with annotations and benchmarking tools. Built a comprehensive design system in Figma with accessibility guidelines documented in Confluence.',
    team: [
      'Lead Designer - Analytics & Data Visualization',
      'Accessibility Specialist',
      'Data Visualization Engineer',
      'Product Manager (Analytics)',
      'Development Team (5)',
      'Data Analyst',
      'QA Engineer'
    ],
    timeline: '2022 – 2024',
    role: 'Senior Product & UX Designer — Analytics & Accessibility',
    keyFeatures: [
      'Unified, accessible data visualization patterns',
      'WCAG 2.1 compliant dashboards (color contrast, alt text, keyboard nav)',
      'Progressive disclosure for complex data',
      'Real-time analytics with automated alerts',
      'Decision-support overlays and benchmarking',
      'Custom report builder with template management',
      'Colorblind-friendly and high-contrast modes',
      'Screen reader optimized interface',
      'Mobile-responsive dashboards',
      'Performance monitoring and anomaly detection'
    ],
    status: 'Completed',
    isCaseStudy: true
  },
  {
    id: 4,
    title: 'Design System & Component Library',
    subtitle: 'Built reusable UI patterns and components to support consistency across enterprise applications.',
    description: 'Improved design consistency across multiple products and reduced design and development rework through a scalable component library.',
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    category: ['UI Design', 'UX Research'],
    metrics: [
      { icon: 'layers', value: 'Unified', label: 'Design System' },
      { icon: 'check', value: 'Documented', label: 'Design Process' }
    ],
    tools: ['Figma', 'User Research', 'Prototyping', 'Design Systems'],
    link: 'https://uiux-case-study-agobpmr.gamma.site/',
    overview: {
      challenge: 'Complex design processes leading to inefficient workflows and inconsistent outputs',
      solution: 'Standardized design methodology with clear frameworks and tooling',
      impact: 'Improved team efficiency and consistent high-quality deliverables'
    },
    challenge: 'Complex design processes leading to inefficient workflows and inconsistent outputs',
    process: 'Standardized design methodology with clear frameworks and tooling',
    team: ['UX Lead', 'UI Designer', 'Research Team'],
    timeline: '2023',
    role: 'UX Lead',
    keyFeatures: [
      'Research Framework',
      'Design System',
      'Process Documentation',
      'Quality Metrics'
    ],
    status: 'Completed',
    isCaseStudy: true
  },
  // CYNC Sub-case studies
  {
    id: 6,
    title: 'CYNC Loan Origination System',
    subtitle: 'Designed core loan origination workflows for enterprise lenders, supporting complex data capture, validation, and approvals.',
    description: 'Simplified multi-step loan submission and review processes while improving efficiency and accuracy for underwriting teams.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    category: ['Enterprise Fintech', 'B2B SaaS', 'Workflow Design'],
    metrics: [
      { icon: 'workflow', value: 'Streamlined', label: 'Loan Submission' },
      { icon: 'check', value: 'Simplified', label: 'Review Process' }
    ],
    tools: ['Adobe XD', 'Miro', 'Protopie', 'UserTesting'],
    link: 'https://collateral-management-out7cmc.gamma.site/',
    challenge: 'Complex loan origination workflows with multiple manual touchpoints.',
    process: 'Designed streamlined workflows for data capture, validation, and approvals.',
    overview: {
      challenge: 'Complex loan origination workflows with multiple manual touchpoints.',
      solution: 'Streamlined workflows for data capture, validation, and approvals.',
      impact: 'Improved efficiency and accuracy in loan origination processes.'
    },
    team: ['Product Designer', 'Business Analyst', 'Development Team (3)'],
    timeline: '2023',
    role: 'UI/UX Designer',
    keyFeatures: [
      'Streamlined data capture',
      'Automated validation',
      'Approval workflows',
      'Status tracking'
    ],
    status: 'Completed',
    isCaseStudy: true,
    parentProjectId: 2
  },
  {
    id: 7,
    title: 'CYNC Collateral Management System',
    subtitle: 'Designed collateral tracking and management workflows for complex asset portfolios within enterprise lending systems.',
    description: 'Improved visibility into collateral status and dependencies while simplifying monitoring and review of pledged assets.',
    image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    category: ['UI Design', 'UX Research', 'Product Design'],
    metrics: [
      { icon: 'activity', value: 'Real-time', label: 'Liquidity Analysis' },
      { icon: 'zap', value: 'Automated', label: 'Risk Scoring' }
    ],
    tools: ['Adobe XD', 'Analytics', 'Protopie', 'Confluence'],
    link: 'https://liquid-assets-case-study-glfrazg.gamma.site/',
    challenge: 'Complex liquid asset analysis requiring manual calculations and prone to human error in risk assessment.',
    process: 'Created intuitive dashboards for real-time liquidity analysis with automated risk scoring and cash flow projections.',
    overview: {
      challenge: 'Complex liquid asset analysis requiring manual calculations and prone to human error in risk assessment.',
      solution: 'Intuitive dashboards for real-time liquidity analysis with automated risk scoring and cash flow projections.',
      impact: 'Enhanced accuracy in liquidity assessment and faster decision-making in loan approvals.'
    },
    team: ['Product Designer', 'Financial Analyst', 'Development Team (3)'],
    timeline: '2023',
    role: 'UI/UX Designer',
    keyFeatures: [
      'Real-time liquidity analysis',
      'Automated risk scoring',
      'Cash flow projections',
      'Interactive dashboards'
    ],
    status: 'Completed',
    isCaseStudy: true,
    parentProjectId: 2
  },
  {
    id: 8,
    title: 'CYNC Appraisal & Valuation Component',
    subtitle: 'Designed a flexible appraisal system supporting CRE valuation workflows, configurable logic, and audit-ready data capture.',
    description: 'Reduced manual effort in appraisal configuration and review while improving consistency and traceability of valuation data.',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    category: ['UI Design', 'UX Research', 'Product Design'],
    metrics: [
      { icon: 'trending-up', value: 'Live', label: 'Market Data Integration' },
      { icon: 'shield', value: 'Automated', label: 'Risk Calculations' }
    ],
    tools: ['Adobe XD', 'Market Data APIs', 'Protopie', 'UserTesting'],
    link: 'https://equity-stock-management-ciqwlqu.gamma.site/',
    challenge: 'Difficulty in real-time stock portfolio valuation and risk assessment for loan collateral purposes.',
    process: 'Developed integrated portfolio management tools with live market data feeds and automated risk calculations.',
    overview: {
      challenge: 'Difficulty in real-time stock portfolio valuation and risk assessment for loan collateral purposes.',
      solution: 'Integrated portfolio management tools with live market data feeds and automated risk calculations.',
      impact: 'Improved accuracy and speed in equity-based loan decisions with real-time market integration.'
    },
    team: ['Product Designer', 'Financial Engineer', 'Development Team (4)'],
    timeline: '2023',
    role: 'UI/UX Designer',
    keyFeatures: [
      'Real-time portfolio tracking',
      'Live market data integration',
      'Automated risk calculations',
      'Performance analytics'
    ],
    status: 'Completed',
    isCaseStudy: true,
    parentProjectId: 2
  },
  {
    id: 9,
    title: 'CYNC Insurance Verification Component',
    subtitle: 'Designed insurance verification workflows to support compliance, coverage validation, and exception handling.',
    description: 'Streamlined insurance review and verification processes while reducing compliance risk through clearer system states.',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    category: ['UI Design', 'UX Research', 'Product Design'],
    metrics: [
      { icon: 'check-circle', value: 'Automated', label: 'Policy Verification' },
      { icon: 'alert-circle', value: 'Real-time', label: 'Compliance Tracking' }
    ],
    tools: ['Adobe XD', 'Insurance APIs', 'Protopie', 'Confluence'],
    link: 'https://insurance-component-enha-fsma6lw.gamma.site/',
    challenge: 'Manual insurance verification processes causing delays and compliance issues in loan approvals.',
    process: 'Designed automated insurance verification workflows with real-time policy validation and compliance tracking.',
    overview: {
      challenge: 'Manual insurance verification processes causing delays and compliance issues in loan approvals.',
      solution: 'Automated insurance verification workflows with real-time policy validation and compliance tracking.',
      impact: 'Streamlined insurance processes with improved compliance and faster loan processing times.'
    },
    team: ['Product Designer', 'Compliance Specialist', 'Development Team (2)'],
    timeline: '2023',
    role: 'UI/UX Designer',
    keyFeatures: [
      'Automated policy verification',
      'Real-time compliance tracking',
      'Insurance document management',
      'Risk assessment integration'
    ],
    status: 'Completed',
    isCaseStudy: true,
    parentProjectId: 2
  },
  {
    id: 19,
    title: 'CYNC Appraisal & Valuation Component',
    subtitle: 'Designed a flexible appraisal system supporting CRE valuation workflows, configurable logic, and audit-ready data capture.',
    description: 'Reduced manual effort in appraisal configuration and review while improving consistency and traceability of valuation data.',
    image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    category: ['Commercial Real Estate', 'Enterprise', 'Configuration-Driven UX'],
    metrics: [
      { icon: 'layers', value: 'Modular', label: 'Configuration System' },
      { icon: 'check', value: 'Regulatory', label: 'Compliant Design' }
    ],
    tools: ['Adobe XD', 'Jira', 'Storybook', 'Confluence', 'React', 'Material UI'],
    link: 'https://case-study-enhancing-the-nrlwns9.gamma.site/',
    challenge: 'Complex information structure with dozens of interdependent fields, conditional visibility requirements, and the need for consistency across different user types while maintaining auditability and regulatory compliance.',
    process: 'Designed a dual-interface system with admin configuration capabilities and streamlined end-user data input, implementing smart form logic and automated valuation mapping.',
    overview: {
      challenge: 'Complex appraisal workflows with manual processes, inconsistent data entry, and compliance challenges.',
      solution: 'Modular, configurable appraisal component with smart form logic and integrated compliance tracking.',
      impact: 'Reduced manual effort, improved data consistency, and achieved regulatory compliance with streamlined workflows.'
    },
    team: ['Product Designer', 'Compliance Specialist', 'Development Team (4)', 'Business Analyst'],
    timeline: '2023',
    role: 'UI/UX Designer',
    keyFeatures: [
      'Admin configuration modal with drag-and-drop',
      'Smart form logic with conditional visibility',
      'Multi-source valuation integration',
      'Automated compliance validation',
      'Final valuation mapping system'
    ],
    status: 'Completed',
    isCaseStudy: true,
    parentProjectId: 2
  },
  {
    id: 20,
    title: 'CRE Comparable & Market Data Integration',
    subtitle: 'Designed interfaces for comparing market data and property comps to support valuation and risk assessment.',
    description: 'Simplified interpretation of complex market data and improved decision-making confidence for valuation teams.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    category: ['Commercial Real Estate', 'Data Visualization', 'Decision Support'],
    metrics: [
      { icon: 'database', value: 'Automated', label: 'Comparable Matching' },
      { icon: 'bar-chart-2', value: 'Real-time', label: 'Market Data' }
    ],
    tools: ['Adobe XD', 'Figma', 'Real Estate APIs', 'Data Visualization', 'Protopie', 'UserTesting'],
    link: 'https://cre-comparable-integrati-w3y90dv.gamma.site/',
    challenge: 'Commercial real estate professionals need clear interfaces to compare market data and property comps.',
    process: 'Designed intuitive data visualization interfaces for market data comparison.',
    overview: {
      challenge: 'Commercial real estate professionals need clear interfaces to compare market data and property comps.',
      solution: 'Intuitive data visualization and streamlined comparison workflows.',
      impact: 'Improved decision-making confidence and clarity in valuation analysis.'
    },
    team: [
      'Product Designer (Lead)',
      'Real Estate Analyst',
      'Development Team (5)',
      'Data Engineer',
      'QA Specialist'
    ],
    timeline: '2023',
    role: 'Lead UI/UX Designer',
    keyFeatures: [
      'Automated comparable property matching',
      'Interactive data visualization dashboards',
      'Streamlined valuation workflows',
      'Real-time market data integration',
      'Comprehensive reporting system'
    ],
    status: 'Completed',
    isCaseStudy: true,
    parentProjectId: 2
  },
  {
    id: 21,
    title: 'Vendor Relationship Management',
    subtitle: 'Designed workflows for managing vendor onboarding, documentation, and ongoing compliance.',
    description: 'Reduced friction in vendor management processes while improving operational visibility and control.',
    image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    category: ['Enterprise SaaS', 'Operations', 'Workflow Design'],
    metrics: [
      { icon: 'users', value: 'Streamlined', label: 'Vendor Onboarding' },
      { icon: 'shield', value: 'Centralized', label: 'Compliance Tracking' }
    ],
    tools: ['Adobe XD', 'Figma', 'Miro', 'Protopie', 'UserTesting', 'Confluence', 'Jira'],
    link: 'https://vendor-management-enhanc-e121rwj.gamma.site/',
    challenge: 'Complex vendor management with manual workflows and inconsistent compliance tracking.',
    process: 'Designed intuitive management interfaces and automated compliance tracking systems.',
    overview: {
      challenge: 'Complex vendor management with manual workflows and inconsistent compliance tracking.',
      solution: 'Integrated vendor management platform with automated workflows and compliance tracking.',
      impact: 'Improved efficiency, compliance monitoring, and vendor relationship management.'
    },
    team: [
      'Product Designer (Lead)',
      'Business Analyst',
      'Compliance Specialist',
      'Development Team (6)',
      'QA Engineer',
      'Project Manager'
    ],
    timeline: '2023',
    role: 'Lead UI/UX Designer',
    keyFeatures: [
      'Automated vendor onboarding workflows',
      'Centralized compliance tracking dashboard',
      'Real-time communication portal',
      'Document management system',
      'Performance analytics and reporting',
      'Risk assessment automation'
    ],
    status: 'Completed',
    isCaseStudy: true,
    parentProjectId: 2
  },
  {
    id: 22,
    title: 'Exposure & Risk Monitoring Dashboard',
    subtitle: 'Designed dashboards to help enterprise teams monitor exposure, thresholds, and portfolio-level risk.',
    description: 'Improved clarity of risk indicators and system status while enabling faster issue identification and response.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    category: ['Enterprise Fintech', 'Risk Analytics', 'Dashboard UX'],
    metrics: [
      { icon: 'alert-circle', value: 'Automated', label: 'Risk Assessment' },
      { icon: 'archive', value: 'Centralized', label: 'Record Management' }
    ],
    tools: ['Adobe XD', 'Figma', 'Risk Analytics', 'Protopie', 'UserTesting', 'Confluence', 'Jira'],
    link: 'https://exposure-management-dh0l4va.gamma.site/',
    challenge: 'Complex exposure tracking with manual risk calculations and fragmented record management.',
    process: 'Designed intuitive exposure tracking interfaces with automated risk calculations.',
    overview: {
      challenge: 'Complex exposure tracking with manual risk calculations and fragmented record management.',
      solution: 'Integrated exposure management platform with automated risk calculations and real-time monitoring.',
      impact: 'Improved accuracy, streamlined compliance, and enhanced operational efficiency.'
    },
    team: [
      'Product Designer (Lead)',
      'Risk Management Specialist',
      'Compliance Officer',
      'Development Team (5)',
      'Data Analyst',
      'QA Engineer'
    ],
    timeline: '2023',
    role: 'Lead UI/UX Designer',
    keyFeatures: [
      'Automated exposure calculation engine',
      'Real-time risk monitoring dashboard',
      'Centralized record management system',
      'Regulatory compliance reporting',
      'Advanced analytics and forecasting',
      'Audit trail and documentation'
    ],
    status: 'Completed',
    isCaseStudy: true,
    parentProjectId: 2
  },
  {
    id: 23,
    title: 'Borrowing Base Certificate Workflow',
    subtitle: 'Designed workflows for generating and reviewing borrowing base certificates within lending platforms.',
    description: 'Simplified complex financial reporting workflows while reducing errors through clearer validation and system feedback.',
    image: 'https://bbc-module-8t5opxq.gamma.site',
    category: ['Enterprise Lending', 'Financial Reporting', 'UX Strategy'],
    metrics: [
      { icon: 'file-text', value: 'Streamlined', label: 'Reporting Workflows' },
      { icon: 'check-circle', value: 'Reduced', label: 'Validation Errors' }
    ],
    tools: ['Adobe XD', 'Figma', 'Microservices Architecture', 'Protopie', 'UserTesting', 'Confluence', 'Jira'],
    link: 'https://bbc-module-8t5opxq.gamma.site/',
    challenge: 'Complex financial reporting workflows with manual processes and high error potential.',
    process: 'Designed streamlined workflows with automated validation and clear system feedback.',
    overview: {
      challenge: 'Complex financial reporting workflows with manual processes and high error potential.',
      solution: 'Simplified workflows with automated validation and clear feedback mechanisms.',
      impact: 'Reduced errors and improved efficiency in financial reporting processes.'
    },
    team: [
      'Product Designer (Lead)',
      'Relationship Manager',
      'Business Analyst',
      'Development Team (6)',
      'Data Architect',
      'QA Engineer'
    ],
    timeline: '2023',
    role: 'Lead UI/UX Designer',
    keyFeatures: [
      'Centralized client relationship dashboard',
      'Automated communication workflows',
      'Comprehensive client history tracking',
      'Real-time interaction monitoring',
      'Relationship analytics and insights',
      'Microservice architecture integration'
    ],
    status: 'Completed',
    isCaseStudy: true,
    parentProjectId: 2
  }
];
