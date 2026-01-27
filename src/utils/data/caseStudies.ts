import { Project } from '../types/project';

// Case studies - in-depth projects
export const caseStudies: Project[] = [
  {
    id: 2,
    title: 'CYNC Enterprise Lending Platform',
    subtitle: 'End-to-end design of a modular enterprise lending platform supporting loan origination, underwriting, collateral, and analytics workflows.',
    description: 'Designed and delivered a cohesive enterprise platform reducing operational friction across complex lending workflows while improving clarity and consistency across multi-module systems.',
    image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    category: ['Enterprise Fintech', 'Loan Origination', 'B2B SaaS'],
    metrics: [
      { icon: 'workflow', value: 'Automated', label: 'Loan Processing Workflows' },
      { icon: 'zap', value: 'Multi-module', label: 'System Architecture' }
    ],
    tools: ['Adobe XD', 'Jira', 'Miro', 'Protopie', 'UserTesting', 'Confluence'],
    link: 'https://cync-loan-origination-e8jwns9.gamma.site/',
    overview: {
      challenge: 'Complex loan origination process with multiple manual touchpoints, leading to delays, errors, and poor user experience for both lenders and borrowers.',
      solution: 'Implemented a comprehensive, automated workflow system with multiple specialized modules for different aspects of loan processing.',
      impact: 'Significantly reduced loan processing time, improved accuracy, and enhanced user satisfaction across all loan origination touchpoints.'
    },
    challenge: 'Complex loan origination process with multiple manual touchpoints, leading to delays, errors, and poor user experience for both lenders and borrowers.',
    process: 'Implemented a comprehensive, automated workflow system with multiple specialized modules for different aspects of loan processing.',
    team: [
      'Product Designer (Lead)',
      'Business Analysts (3)',
      'Development Team (8)',
      'QA Engineers (3)'
    ],
    timeline: '2023 - Present',
    role: 'Senior Product & UX Designer',
    keyFeatures: [
      'Modular system architecture',
      'Automated workflow processing',
      'Integrated compliance checks',
      'Real-time application tracking',
      'Multi-component loan management'
    ],
    status: 'In Progress',
    isCaseStudy: true,
    isFlagged: true, // New flag to identify flagship
    subProjects: [6, 7, 8, 9, 19] // Added appraisal component (id: 19)
  },
  {
    id: 1,
    title: 'Bank of America – Mobile Bill Payment',
    subtitle: 'Redesigned the mobile bill payment experience for a large-scale consumer banking audience.',
    description: 'Improved clarity and usability of payment scheduling and tracking while delivering an accessible, mobile-first experience at scale for 68M+ active users.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    category: ['Consumer Banking', 'Mobile UX', 'Fintech'],
    metrics: [
      { icon: 'users2', value: '68M+', label: 'Active Users' },
      { icon: 'check', value: 'Streamlined', label: 'Payment Workflows' }
    ],
    tools: ['Figma', 'Analytics', 'User Testing', 'Protopie'],
    link: 'https://boa-billpay-redesign-fewkgfd.gamma.site/',
    challenge: 'Users expressed dissatisfaction with the Bill Pay feature, facing complexities in payment scheduling, limited flexibility, and confusion in tracking payment history.',
    process: 'Implemented a streamlined UI with enhanced scheduling flexibility, real-time notifications, and improved payment history tracking.',
    overview: {
      challenge: 'Users expressed dissatisfaction with the Bill Pay feature, facing complexities in payment scheduling, limited flexibility, and confusion in tracking payment history.',
      solution: 'Implemented a streamlined UI with enhanced scheduling flexibility, real-time notifications, and improved payment history tracking.',
      impact: 'Achieved significant improvements in user satisfaction, adoption rates, and reduced support tickets related to bill payments.'
    },
    team: [
      'Product Designer (Lead)',
      'UX Research Team (4)',
      'Lead Designer'
    ],
    timeline: '2022 - Present',
    role: 'Product & UX Designer',
    keyFeatures: [
      'Streamlined payment scheduling',
      'Enhanced payment history tracking',
      'Real-time notifications',
      'Flexible payment management'
    ],
    status: 'Completed',
    isCaseStudy: true
  },
  {
    id: 3,
    title: 'CYNC Advanced Analytics Platform',
    subtitle: 'Designed an accessibility-first analytics platform enabling enterprise users to monitor performance and risk indicators.',
    description: 'Improved usability of complex analytics dashboards and delivered WCAG-compliant data visualization for enterprise users.',
    image: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&q=80&w=1000',
    category: ['Enterprise Analytics', 'Accessibility Design', 'B2B SaaS'],
    metrics: [
      { icon: 'accessibility', value: 'WCAG 2.1', label: 'Compliant Platform' },
      { icon: 'lineChart', value: 'Real-time', label: 'Analytics Insights' }
    ],
    tools: ['Adobe XD', 'Miro', 'WCAG 2.1', 'Protopie', 'Confluence'],
    link: 'https://uiux-case-study-enhancin-zkm1u63.gamma.site/',
    overview: {
      challenge: 'Inconsistent experience across platforms and poor accessibility compliance',
      solution: 'Unified design system with strong accessibility focus and improved analytics',
      impact: 'Improved user satisfaction and full WCAG 2.1 compliance'
    },
    challenge: 'Inconsistent experience across platforms and poor accessibility compliance',
    process: 'Unified design system with strong accessibility focus and improved analytics',
    team: ['Lead Designer', 'Accessibility Expert', 'Analytics Team (2)'],
    timeline: '2021 - 2022',
    role: 'Senior Product & UX Designer',
    keyFeatures: [
      'Cross-platform consistency',
      'WCAG 2.1 compliance',
      'Unified design system',
      'Advanced analytics dashboard'
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
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    category: ['Enterprise Lending', 'Financial Reporting', 'UX Strategy'],
    metrics: [
      { icon: 'file-text', value: 'Streamlined', label: 'Reporting Workflows' },
      { icon: 'check-circle', value: 'Reduced', label: 'Validation Errors' }
    ],
    tools: ['Adobe XD', 'Figma', 'Microservices Architecture', 'Protopie', 'UserTesting', 'Confluence', 'Jira'],
    link: 'https://relationship-microservic-pds8k8g.gamma.site/',
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
