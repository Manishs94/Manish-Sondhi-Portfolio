import { IconType } from './iconMappings';

// Define project types
export interface ProjectMetric {
  icon: IconType;
  value: string;
  label: string;
}

export interface ProjectOverview {
  challenge?: string;
  solution?: string;
  impact?: string;
}

export interface Project {
  id: number;
  title: string;
  subtitle?: string;
  description: string;
  image: string;
  category: string[] | string;
  tags?: string[];
  tools?: string[];
  link: string;
  githubLink?: string;
  demoLink?: string;
  metrics?: ProjectMetric[];
  challenge?: string;
  problem?: string;
  process?: string;
  solution?: string;
  impact?: string;
  overview?: ProjectOverview;
  team?: string[];
  timeline?: string;
  role?: string;
  keyFeatures?: string[];
  features?: string[];
  status?: 'Completed' | 'In Progress' | 'Planning';
  isCaseStudy?: boolean;
  isSpotlight?: boolean; // New field for featured projects
  beforeAfter?: {
    before: string;
    after: string;
    description: string;
  };
  wireframes?: string[];
  artifacts?: {
    type: 'wireframe' | 'prototype' | 'flowchart' | 'component';
    title: string;
    image: string;
    description: string;
  }[];
}

// Enhanced case studies with more detailed information
const caseStudies: Project[] = [
  {
    id: 1,
    title: 'Bank of America Mobile Bill Payment',
    subtitle: 'Enhancing Digital Banking Experience',
    description: 'Bank of America, serving over 68 million customers, introduced a new Bill Pay feature in 2022. This feature allows users to handle payments for utilities, cable, phone services, and more through electronic transactions, available as early as the next working day.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    category: ['UI Design', 'UX Research', 'Product Design'],
    tags: ['Auto Loans', 'Mobile Banking', 'Financial Services', 'User Research'],
    metrics: [
      { icon: 'users2', value: '68M+', label: 'Active Users' },
      { icon: 'lineChart', value: '40%', label: 'Reduced Drop-offs' },
      { icon: 'clock', value: '25%', label: 'Process Improvement' },
      { icon: 'target', value: '35%', label: 'User Satisfaction' }
    ],
    tools: ['Figma', 'Analytics', 'User Testing', 'Protopie', 'Miro', 'Confluence'],
    link: 'https://boa-billpay-redesign-fewkgfd.gamma.site/',
    challenge: 'Users expressed dissatisfaction with the Bill Pay feature, facing complexities in payment scheduling, limited flexibility, and confusion in tracking payment history.',
    process: 'Conducted extensive user research including interviews and usability testing. Created user journey maps and wireframes. Designed high-fidelity prototypes and conducted iterative testing.',
    solution: 'Implemented a streamlined UI with enhanced scheduling flexibility, real-time notifications, and improved payment history tracking.',
    overview: {
      challenge: 'Users expressed dissatisfaction with the Bill Pay feature, facing complexities in payment scheduling, limited flexibility, and confusion in tracking payment history.',
      solution: 'Implemented a streamlined UI with enhanced scheduling flexibility, real-time notifications, and improved payment history tracking.',
      impact: 'Achieved significant improvements in user satisfaction, adoption rates, and reduced support tickets related to bill payments.'
    },
    team: [
      'Product Designer (Lead)',
      'UX Research Team (4)',
      'Lead Designer',
      'Product Manager',
      'Engineering Team (6)'
    ],
    timeline: '2022 - Present (8 months)',
    role: 'Lead Product Designer - Responsible for end-to-end design process, user research coordination, and cross-functional collaboration',
    keyFeatures: [
      'Streamlined payment scheduling with calendar integration',
      'Enhanced payment history with search and filtering',
      'Real-time notifications and status updates',
      'Flexible payment management and recurring payments',
      'Improved accessibility and mobile responsiveness'
    ],
    status: 'Completed',
    isCaseStudy: true,
    isSpotlight: true,
    artifacts: [
      {
        type: 'wireframe',
        title: 'Payment Flow Wireframes',
        image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
        description: 'Low-fidelity wireframes showing the simplified payment flow'
      },
      {
        type: 'prototype',
        title: 'Interactive Prototype',
        image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
        description: 'High-fidelity interactive prototype used for user testing'
      }
    ]
  },
  {
    id: 2,
    title: 'CYNC Loan Origination System',
    subtitle: 'Streamlining Commercial Lending',
    description: 'Redesigned the loan origination system for Cync, focusing on automating and simplifying the commercial lending process while ensuring regulatory compliance and improving user experience for both lenders and borrowers.',
    image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    category: ['UI Design', 'UX Research', 'Product Design'],
    tags: ['Equipment Lending', 'Financial Services', 'B2B', 'Enterprise'],
    metrics: [
      { icon: 'users2', value: '45%', label: 'Faster Processing' },
      { icon: 'lineChart', value: '60%', label: 'Reduced Manual Work' },
      { icon: 'clock', value: '35%', label: 'Time Savings' },
      { icon: 'target', value: '50%', label: 'Error Reduction' }
    ],
    tools: ['Adobe XD', 'Jira', 'Miro', 'Protopie', 'UserTesting', 'Confluence', 'Figma'],
    link: 'https://cync-loan-origination-e8jwns9.gamma.site/',
    overview: {
      challenge: 'Complex loan origination process with multiple manual touchpoints, leading to delays, errors, and poor user experience for both lenders and borrowers.',
      solution: 'Implemented a streamlined, automated workflow with intelligent document processing, real-time status tracking, and integrated compliance checks.',
      impact: 'Significantly reduced loan processing time, improved accuracy, and enhanced user satisfaction for both internal teams and clients.'
    },
    challenge: 'Complex loan origination process with multiple manual touchpoints, leading to delays, errors, and poor user experience for both lenders and borrowers.',
    process: 'Conducted stakeholder interviews, mapped current state processes, identified pain points, created user personas, designed information architecture, developed wireframes and prototypes, conducted usability testing, and implemented design system.',
    team: [
      'Product Designer (Lead)',
      'Business Analysts (2)',
      'Development Team (6)',
      'QA Engineers (2)',
      'Product Manager',
      'Compliance Officer'
    ],
    timeline: '2023 - Present (12 months)',
    role: 'Lead UX/UI Designer - End-to-end design ownership including research, strategy, design, and implementation',
    keyFeatures: [
      'Automated document processing with AI validation',
      'Real-time application tracking and notifications',
      'Integrated compliance checks and risk assessment',
      'Smart workflow automation and routing',
      'Digital signature integration and e-document management',
      'Advanced analytics and reporting dashboard'
    ],
    status: 'In Progress',
    isCaseStudy: true,
    isSpotlight: true
  },
  {
    id: 3,
    title: 'CYNC Advanced Analytics',
    subtitle: 'Data-Driven Financial Insights',
    description: 'Creating a comprehensive analytics platform that transforms complex financial data into actionable insights for commercial lenders, with focus on accessibility and user-friendly data visualization.',
    image: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&q=80&w=1000',
    category: ['UI Design', 'UX Research', 'Product Design'],
    tags: ['Fleet Financing', 'Analytics', 'Data Visualization', 'Dashboard'],
    metrics: [
      { icon: 'users2', value: '35%', label: 'User Adoption' },
      { icon: 'lineChart', value: '45%', label: 'Decision Speed' },
      { icon: 'clock', value: '30%', label: 'Analysis Time' },
      { icon: 'target', value: '40%', label: 'Accuracy Improvement' }
    ],
    tools: ['Adobe XD', 'Miro', 'WCAG 2.1', 'Protopie', 'Confluence', 'D3.js', 'Tableau'],
    link: 'https://uiux-case-study-enhancin-zkm1u63.gamma.site/',
    overview: {
      challenge: 'Complex financial data was difficult to interpret and access, leading to delayed decision-making and missed opportunities in commercial lending.',
      solution: 'Designed an intuitive analytics platform with customizable dashboards, interactive visualizations, and automated insights generation.',
      impact: 'Improved decision-making speed, increased user adoption of analytics tools, and achieved full WCAG 2.1 accessibility compliance.'
    },
    challenge: 'Complex financial data was difficult to interpret and access, leading to delayed decision-making and missed opportunities in commercial lending.',
    process: 'Conducted user research with financial analysts, created data visualization standards, designed accessible interfaces, and implemented responsive design patterns.',
    team: ['Lead Designer', 'Accessibility Expert', 'Analytics Team (2)', 'Data Scientists (3)', 'Frontend Developers (4)'],
    timeline: '2021 - 2022 (10 months)',
    role: 'Lead Designer - Responsible for UX strategy, accessibility compliance, and design system creation',
    keyFeatures: [
      'Customizable dashboard with drag-and-drop widgets',
      'Interactive data visualizations and charts',
      'Automated insights and trend analysis',
      'WCAG 2.1 AA accessibility compliance',
      'Real-time data updates and notifications',
      'Export capabilities and scheduled reports'
    ],
    status: 'Completed',
    isCaseStudy: true
  },
  {
    id: 4,
    title: 'UI/UX Design Process Framework',
    subtitle: 'Systematic Design Methodology',
    description: 'Developed a comprehensive design process framework that standardizes UX practices across teams, ensuring consistent quality and efficient collaboration in enterprise environments.',
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    category: ['UI Design', 'UX Research', 'Design Systems'],
    tags: ['UX Systems', 'Process Design', 'Design Operations', 'Team Efficiency'],
    metrics: [
      { icon: 'users2', value: '40%', label: 'Team Efficiency' },
      { icon: 'lineChart', value: '50%', label: 'Design Consistency' },
      { icon: 'clock', value: '35%', label: 'Time to Market' },
      { icon: 'target', value: '45%', label: 'Quality Score' }
    ],
    tools: ['Figma', 'Miro', 'Confluence', 'Jira', 'Design Tokens', 'Storybook'],
    link: 'https://uiux-case-study-agobpmr.gamma.site/',
    overview: {
      challenge: 'Inconsistent design processes across teams leading to quality variations, longer delivery times, and poor cross-team collaboration.',
      solution: 'Created a standardized design framework with clear phases, deliverables, and quality checkpoints that can be adapted across different project types.',
      impact: 'Improved team efficiency, reduced design debt, and established measurable quality standards across the organization.'
    },
    challenge: 'Inconsistent design processes across teams leading to quality variations, longer delivery times, and poor cross-team collaboration.',
    process: 'Audited existing processes, interviewed team members, researched industry best practices, created framework documentation, and piloted with multiple teams.',
    team: ['UX Lead', 'UI Designer', 'Research Team', 'Design Operations', 'Product Managers (3)'],
    timeline: '2023 (6 months)',
    role: 'UX Lead - Process design, documentation, and change management',
    keyFeatures: [
      'Standardized research and discovery templates',
      'Design system integration guidelines',
      'Quality assurance checkpoints and criteria',
      'Cross-functional collaboration frameworks',
      'Metrics and measurement standards',
      'Training materials and onboarding guides'
    ],
    status: 'Completed',
    isCaseStudy: true
  }
];

// Enhanced portfolio projects
const portfolioProjects: Project[] = [
  {
    id: 5,
    title: 'CSS Animations Gallery',
    description: 'A curated collection of interaction design patterns and micro-animations, focusing on user engagement and visual feedback',
    image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    category: ['UI Design', 'Interaction Design'],
    tags: ['Animations', 'CSS', 'Frontend', 'Interaction'],
    tools: ['Figma', 'Principle', 'Framer', 'After Effects', 'CSS', 'JavaScript'],
    link: '#',
    metrics: [
      { icon: 'users', value: '40%', label: 'Engagement Increase' },
      { icon: 'lineChart', value: '25%', label: 'User Satisfaction' }
    ],
    problem: 'Limited user engagement due to static animations and lack of interactive feedback',
    process: 'Researched animation principles, created prototypes, and conducted usability testing',
    solution: 'Implemented intuitive animations with responsive interactions and performance optimization',
    features: [
      'Interactive animation examples',
      'Custom CSS transitions',
      'Responsive design',
      'Performance optimized'
    ],
    isCaseStudy: false
  },
  {
    id: 6,
    title: 'Kanban Board',
    description: 'A user-centered task management interface with focus on workflow optimization and visual hierarchy',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    category: ['UI Design', 'UX Research'],
    tags: ['Productivity', 'Task Management', 'Workflow'],
    tools: ['Figma', 'Maze', 'Miro', 'ProtoPie'],
    link: '#',
    metrics: [
      { icon: 'users', value: '45%', label: 'Task Completion' },
      { icon: 'lineChart', value: '30%', label: 'Workflow Efficiency' }
    ],
    problem: 'Complex task management leading to reduced productivity and user frustration',
    process: 'Analyzed user workflows, created wireframes, and iteratively tested prototypes',
    solution: 'Developed an intuitive drag-and-drop interface with clear visual hierarchy',
    features: [
      'Drag and drop interface',
      'Real-time updates',
      'Task management',
      'Board customization'
    ],
    isCaseStudy: false
  },
  {
    id: 7,
    title: 'Hulu Redesign',
    description: 'A modern, responsive redesign of the Hulu streaming platform interface',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    category: ['UI Design', 'UX Research'],
    tags: ['Streaming', 'Entertainment', 'Mobile'],
    tools: ['React', 'Tailwind CSS', 'Responsive Design'],
    link: '#',
    metrics: [
      { icon: 'users', value: '35%', label: 'User Engagement' },
      { icon: 'lineChart', value: '45%', label: 'Conversion Rate' }
    ],
    problem: 'Outdated interface leading to poor user engagement',
    process: 'Conducted user research and created interactive prototypes',
    solution: 'Modern, responsive interface with improved navigation',
    features: [
      'Personalized recommendations',
      'Advanced search filters',
      'Watchlist management',
      'Cross-device synchronization'
    ],
    isCaseStudy: false
  },
  {
    id: 8,
    title: 'Split Landing Page',
    description: 'A modern split-screen landing page featuring bold visuals and clear calls-to-action.',
    image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    category: ['Web Design'],
    tags: ['Landing Page', 'Conversion', 'Marketing'],
    tools: ['HTML', 'CSS', 'JavaScript'],
    link: '#',
    problem: 'Ineffective landing page conversion and unclear user journey',
    process: 'Analyzed user behavior, conducted A/B testing, and refined visual hierarchy',
    solution: 'Created a split-screen design that improved conversion rates and user engagement',
    features: [
      'Dynamic content transitions',
      'Responsive split layout',
      'Optimized image loading',
      'Interactive hover states'
    ],
    isCaseStudy: false
  },
  {
    id: 12,
    title: 'AI Chatbot Application',
    description: 'An interactive AI chatbot with natural language processing and responsive interface',
    image: 'https://images.unsplash.com/photo-1531746790731-6bf607ccff6f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    category: ['AI', 'UX Research', 'UI Design'],
    tags: ['AI', 'Machine Learning', 'Conversational UI'],
    tools: ['React', 'TypeScript', 'AI/ML', 'Vercel'],
    link: 'https://my-awesome-chatbot-six-hazel.vercel.app/',
    demoLink: 'https://my-awesome-chatbot-six-hazel.vercel.app/',
    metrics: [
      { icon: 'users', value: '55%', label: 'User Engagement' },
      { icon: 'lineChart', value: '78%', label: 'Response Accuracy' }
    ],
    problem: 'Complex user interactions requiring immediate, intelligent responses and assistance',
    process: 'Developed and trained an AI model, designed intuitive conversation flows, and implemented a responsive UI',
    solution: 'Created a conversational AI interface with natural language understanding and dynamic responses',
    features: [
      'Natural language processing',
      'Contextual conversations',
      'Responsive design',
      'Real-time interaction'
    ],
    status: 'Completed',
    isCaseStudy: false
  }
];

// Combine all projects
export const allProjects: Project[] = [...caseStudies, ...portfolioProjects];

// Get case studies specifically
export const getCaseStudies = (): Project[] => {
  return allProjects.filter(project => project.isCaseStudy);
};

// Get spotlight projects
export const getSpotlightProjects = (): Project[] => {
  return allProjects.filter(project => project.isSpotlight);
};

// Function to get project by ID
export const getProjectById = (id: number): Project | undefined => {
  return allProjects.find(project => project.id === id);
};

// Function to get all project IDs
export const getAllProjectIds = (): number[] => {
  return allProjects.map(project => project.id);
};

// Get projects by category
export const getProjectsByCategory = (category: string): Project[] => {
  if (category === 'all') {
    return allProjects;
  }
  
  return allProjects.filter(project => {
    if (Array.isArray(project.category)) {
      return project.category.some(cat => cat.toLowerCase().includes(category.toLowerCase()));
    }
    return project.category?.toLowerCase().includes(category.toLowerCase());
  });
};

// Get projects by tag
export const getProjectsByTag = (tag: string): Project[] => {
  return allProjects.filter(project => 
    project.tags?.some(projectTag => 
      projectTag.toLowerCase().includes(tag.toLowerCase())
    )
  );
};

// Get all available categories
export const getAllCategories = (): {id: string, name: string}[] => {
  const uniqueCategories = new Set<string>();
  uniqueCategories.add('all');
  
  allProjects.forEach(project => {
    if (Array.isArray(project.category)) {
      project.category.forEach(cat => {
        const categoryId = cat.toLowerCase().replace(/\s+/g, '-');
        uniqueCategories.add(categoryId);
      });
    } else if (project.category) {
      const categoryId = project.category.toLowerCase().replace(/\s+/g, '-');
      uniqueCategories.add(categoryId);
    }
  });
  
  return Array.from(uniqueCategories).map(cat => {
    const name = cat === 'all' ? 'All Projects' : cat.split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
    
    return { id: cat, name };
  });
};

// Get all available tags
export const getAllTags = (): string[] => {
  const uniqueTags = new Set<string>();
  
  allProjects.forEach(project => {
    if (project.tags) {
      project.tags.forEach(tag => uniqueTags.add(tag));
    }
  });
  
  return Array.from(uniqueTags).sort();
};
