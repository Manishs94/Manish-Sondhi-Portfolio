import { Project } from '../types/project';

// Case studies - in-depth projects
export const caseStudies: Project[] = [
  {
    id: 2,
    title: 'CYNC Loan Origination System',
    subtitle: 'Comprehensive Commercial Lending Platform',
    description: 'An overview of the complete loan origination system redesign for Cync, encompassing multiple specialized modules including collateral management, liquid assets, equity stock management, and insurance components.',
    image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    category: ['UI Design', 'UX Research', 'Product Design'],
    metrics: [
      { icon: 'users2', value: '45%', label: 'Faster Processing' },
      { icon: 'lineChart', value: '60%', label: 'Reduced Manual Work' },
      { icon: 'clock', value: '35%', label: 'Time Savings' },
      { icon: 'target', value: '50%', label: 'Error Reduction' }
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
    role: 'Lead UX/UI Designer',
    keyFeatures: [
      'Modular system architecture',
      'Automated workflow processing',
      'Integrated compliance checks',
      'Real-time application tracking',
      'Multi-component loan management'
    ],
    status: 'In Progress',
    isCaseStudy: true,
    subProjects: [6, 7, 8, 9, 19] // Added appraisal component (id: 19)
  },
  {
    id: 1,
    title: 'Bank of America Mobile Bill Payment',
    subtitle: 'Enhancing Digital Banking Experience',
    description: 'Bank of America, serving over 68 million customers, introduced a new Bill Pay feature in 2022. This feature allows users to handle payments for utilities, cable, phone services, and more through electronic transactions, available as early as the next working day.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    category: ['UI Design', 'UX Research', 'Product Design'],
    metrics: [
      { icon: 'users2', value: '68M+', label: 'Active Users' },
      { icon: 'lineChart', value: '40%', label: 'Reduced Drop-offs' },
      { icon: 'clock', value: '25%', label: 'Process Improvement' },
      { icon: 'target', value: '35%', label: 'User Satisfaction' }
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
    role: 'Lead Product Designer',
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
    title: 'CYNC Advanced Analytics',
    subtitle: 'Accessible Banking Solutions',
    description: 'Creating a seamless banking experience across web and mobile platforms with accessibility in mind',
    image: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&q=80&w=1000',
    category: ['UI Design', 'UX Research', 'Product Design'],
    metrics: [
      { icon: 'users2', value: '35%', label: 'User Satisfaction' },
      { icon: 'lineChart', value: '45%', label: 'Task Completion' },
      { icon: 'clock', value: '30%', label: 'Time Savings' },
      { icon: 'target', value: '40%', label: 'Accuracy Improvement' }
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
    role: 'Lead Designer',
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
    title: 'UI/UX Case Study: Innovative Design Studio',
    subtitle: 'End-to-End Design Methodology',
    description: 'A comprehensive look at the UI/UX design process from research to implementation',
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    category: ['UI Design', 'UX Research'],
    metrics: [
      { icon: 'users2', value: '40%', label: 'User Engagement' },
      { icon: 'lineChart', value: '50%', label: 'Process Efficiency' },
      { icon: 'clock', value: '35%', label: 'Time to Market' },
      { icon: 'target', value: '45%', label: 'Success Rate' }
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
    title: 'CYNC Collateral Management',
    subtitle: 'Streamlined Asset Tracking and Valuation',
    description: 'A specialized module within the CYNC Loan Origination System focused on collateral management, asset tracking, and automated valuation processes.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    category: ['UI Design', 'UX Research', 'Product Design'],
    metrics: [
      { icon: 'users2', value: '50%', label: 'Faster Valuation' },
      { icon: 'lineChart', value: '40%', label: 'Error Reduction' },
      { icon: 'clock', value: '35%', label: 'Processing Time' },
      { icon: 'target', value: '60%', label: 'Accuracy Improvement' }
    ],
    tools: ['Adobe XD', 'Miro', 'Protopie', 'UserTesting'],
    link: 'https://collateral-management-out7cmc.gamma.site/',
    challenge: 'Manual collateral tracking and valuation processes leading to delays and inconsistencies in loan processing.',
    process: 'Designed automated workflows for asset tracking, real-time valuation updates, and integrated compliance monitoring.',
    overview: {
      challenge: 'Manual collateral tracking and valuation processes leading to delays and inconsistencies in loan processing.',
      solution: 'Automated workflows for asset tracking, real-time valuation updates, and integrated compliance monitoring.',
      impact: 'Reduced processing time and improved accuracy in collateral management workflows.'
    },
    team: ['Product Designer', 'Business Analyst', 'Development Team (3)'],
    timeline: '2023',
    role: 'UI/UX Designer',
    keyFeatures: [
      'Automated asset tracking',
      'Real-time valuation',
      'Compliance monitoring',
      'Document management'
    ],
    status: 'Completed',
    isCaseStudy: true,
    parentProjectId: 2
  },
  {
    id: 7,
    title: 'CYNC Liquid Assets Management',
    subtitle: 'Cash Flow and Liquidity Analysis',
    description: 'A comprehensive liquid assets management module that provides real-time cash flow analysis and liquidity assessment within the loan origination process.',
    image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    category: ['UI Design', 'UX Research', 'Product Design'],
    metrics: [
      { icon: 'users2', value: '45%', label: 'Analysis Speed' },
      { icon: 'lineChart', value: '55%', label: 'Accuracy Gain' },
      { icon: 'clock', value: '40%', label: 'Time Reduction' },
      { icon: 'target', value: '50%', label: 'Risk Assessment' }
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
    title: 'CYNC Equity Stock Management',
    subtitle: 'Portfolio Tracking and Valuation',
    description: 'An advanced equity and stock management system integrated into the loan origination platform for comprehensive portfolio analysis and risk assessment.',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    category: ['UI Design', 'UX Research', 'Product Design'],
    metrics: [
      { icon: 'users2', value: '55%', label: 'Portfolio Analysis' },
      { icon: 'lineChart', value: '45%', label: 'Valuation Speed' },
      { icon: 'clock', value: '50%', label: 'Risk Processing' },
      { icon: 'target', value: '40%', label: 'Decision Accuracy' }
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
    title: 'CYNC Insurance Component Enhancement',
    subtitle: 'Integrated Insurance Verification System',
    description: 'Enhanced insurance verification and management components within the CYNC platform, streamlining insurance requirements for loan processing.',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    category: ['UI Design', 'UX Research', 'Product Design'],
    metrics: [
      { icon: 'users2', value: '60%', label: 'Verification Speed' },
      { icon: 'lineChart', value: '45%', label: 'Compliance Rate' },
      { icon: 'clock', value: '35%', label: 'Processing Time' },
      { icon: 'target', value: '50%', label: 'Error Reduction' }
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
    title: 'CYNC Appraisal Component Enhancement',
    subtitle: 'Configurable Asset Valuation System',
    description: 'Strategic enhancement to the Appraisal Component within the Collateral Management System, focusing on CRE asset evaluation with modular, configurable design for increased usability and compliance accuracy.',
    image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    category: ['UI Design', 'UX Research', 'Product Design'],
    metrics: [
      { icon: 'users2', value: '40%', label: 'Configuration Time Reduction' },
      { icon: 'lineChart', value: '55%', label: 'Data Accuracy Improvement' },
      { icon: 'clock', value: '35%', label: 'Processing Speed' },
      { icon: 'target', value: '90%', label: 'Compliance Rate' }
    ],
    tools: ['Adobe XD', 'Jira', 'Storybook', 'Confluence', 'React', 'Material UI'],
    link: 'https://case-study-enhancing-the-nrlwns9.gamma.site/',
    challenge: 'Complex information structure with dozens of interdependent fields, conditional visibility requirements, and the need for consistency across different user types while maintaining auditability and regulatory compliance (USPAP, FIRREA).',
    process: 'Designed a dual-interface system with admin configuration capabilities and streamlined end-user data input, implementing smart form logic and automated valuation mapping to ensure compliance and data integrity.',
    overview: {
      challenge: 'Complex appraisal workflows with manual processes, inconsistent data entry, and compliance challenges across CRE asset valuations.',
      solution: 'Modular, configurable appraisal component with smart form logic, automated validation, and integrated compliance tracking.',
      impact: 'Reduced configuration time by 40%, improved data accuracy, and achieved full regulatory compliance with streamlined user experience.'
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
  }
];
