
import { ExternalLink, Users2, LineChart, Clock, Target, Users } from 'lucide-react';
import React from 'react';

// Define project types
export interface ProjectMetric {
  icon: React.ReactNode;
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
}

// Combine all projects
export const allProjects: Project[] = [
  // Main projects
  {
    id: 1,
    title: 'Bank of America Mobile Bill Payment',
    subtitle: 'Enhancing Digital Banking Experience',
    description: 'Bank of America, serving over 68 million customers, introduced a new Bill Pay feature in 2022. This feature allows users to handle payments for utilities, cable, phone services, and more through electronic transactions, available as early as the next working day.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    category: ['UI Design', 'UX Research', 'Product Design'],
    metrics: [
      { icon: <Users2 className="w-5 h-5" />, value: '68M+', label: 'Active Users' },
      { icon: <LineChart className="w-5 h-5" />, value: '40%', label: 'Reduced Drop-offs' },
      { icon: <Clock className="w-5 h-5" />, value: '25%', label: 'Process Improvement' },
      { icon: <Target className="w-5 h-5" />, value: '35%', label: 'User Satisfaction' }
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
    ]
  },
  {
    id: 2,
    title: 'CYNC Loan Origination System',
    subtitle: 'Streamlining Commercial Lending',
    description: 'Redesigned the loan origination system for Cync, focusing on automating and simplifying the commercial lending process while ensuring regulatory compliance and improving user experience for both lenders and borrowers.',
    image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    category: ['UI Design', 'UX Research', 'Product Design'],
    metrics: [
      { icon: <Users2 className="w-5 h-5" />, value: '45%', label: 'Faster Processing' },
      { icon: <LineChart className="w-5 h-5" />, value: '60%', label: 'Reduced Manual Work' },
      { icon: <Clock className="w-5 h-5" />, value: '35%', label: 'Time Savings' },
      { icon: <Target className="w-5 h-5" />, value: '50%', label: 'Error Reduction' }
    ],
    tools: ['Adobe XD', 'Jira', 'Miro', 'Protopie', 'UserTesting', 'Confluence'],
    link: 'https://cync-loan-origination-e8jwns9.gamma.site/',
    overview: {
      challenge: 'Complex loan origination process with multiple manual touchpoints, leading to delays, errors, and poor user experience for both lenders and borrowers.',
      solution: 'Implemented a streamlined, automated workflow with intelligent document processing, real-time status tracking, and integrated compliance checks.',
      impact: 'Significantly reduced loan processing time, improved accuracy, and enhanced user satisfaction for both internal teams and clients.'
    },
    challenge: 'Complex loan origination process with multiple manual touchpoints, leading to delays, errors, and poor user experience for both lenders and borrowers.',
    process: 'Implemented a streamlined, automated workflow with intelligent document processing, real-time status tracking, and integrated compliance checks.',
    team: [
      'Product Designer (Lead)',
      'Business Analysts (2)',
      'Development Team (6)',
      'QA Engineers (2)'
    ],
    timeline: '2023 - Present',
    role: 'Lead UX/UI Designer',
    keyFeatures: [
      'Automated document processing',
      'Real-time application tracking',
      'Integrated compliance checks',
      'Smart workflow automation',
      'Digital signature integration'
    ]
  },
  {
    id: 3,
    title: 'CYNC Advanced Analytics',
    subtitle: 'Accessible Banking Solutions',
    description: 'Creating a seamless banking experience across web and mobile platforms with accessibility in mind',
    image: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&q=80&w=1000',
    category: ['UI Design', 'UX Research', 'Product Design'],
    metrics: [
      { icon: <Users2 className="w-5 h-5" />, value: '35%', label: 'User Satisfaction' },
      { icon: <LineChart className="w-5 h-5" />, value: '45%', label: 'Task Completion' },
      { icon: <Clock className="w-5 h-5" />, value: '30%', label: 'Time Savings' },
      { icon: <Target className="w-5 h-5" />, value: '40%', label: 'Accuracy Improvement' }
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
    ]
  },
  
  // Add more main projects
  {
    id: 4,
    title: 'UI/UX Design Process',
    subtitle: 'End-to-End Design Methodology',
    description: 'A comprehensive look at the UI/UX design process from research to implementation',
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    category: ['UI Design', 'UX Research'],
    metrics: [
      { icon: <Users2 className="w-5 h-5" />, value: '40%', label: 'User Engagement' },
      { icon: <LineChart className="w-5 h-5" />, value: '50%', label: 'Process Efficiency' },
      { icon: <Clock className="w-5 h-5" />, value: '35%', label: 'Time to Market' },
      { icon: <Target className="w-5 h-5" />, value: '45%', label: 'Success Rate' }
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
    ]
  },
  
  // Portfolio projects
  {
    id: 5,
    title: 'CSS Animations Gallery',
    description: 'A curated collection of interaction design patterns and micro-animations, focusing on user engagement and visual feedback',
    image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    category: ['UI Design', 'Interaction Design'],
    tools: ['Figma', 'Principle', 'Framer', 'After Effects'],
    link: '#',
    metrics: [
      { icon: <Users className="w-5 h-5" />, value: '40%', label: 'Engagement Increase' },
      { icon: <LineChart className="w-5 h-5" />, value: '25%', label: 'User Satisfaction' }
    ],
    problem: 'Limited user engagement due to static animations and lack of interactive feedback',
    process: 'Researched animation principles, created prototypes, and conducted usability testing',
    solution: 'Implemented intuitive animations with responsive interactions and performance optimization',
    features: [
      'Interactive animation examples',
      'Custom CSS transitions',
      'Responsive design',
      'Performance optimized'
    ]
  },
  {
    id: 6,
    title: 'Kanban Board',
    description: 'A user-centered task management interface with focus on workflow optimization and visual hierarchy',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    category: ['UI Design', 'UX Research'],
    tools: ['Figma', 'Maze', 'Miro', 'ProtoPie'],
    link: '#',
    metrics: [
      { icon: <Users className="w-5 h-5" />, value: '45%', label: 'Task Completion' },
      { icon: <LineChart className="w-5 h-5" />, value: '30%', label: 'Workflow Efficiency' }
    ],
    problem: 'Complex task management leading to reduced productivity and user frustration',
    process: 'Analyzed user workflows, created wireframes, and iteratively tested prototypes',
    solution: 'Developed an intuitive drag-and-drop interface with clear visual hierarchy',
    features: [
      'Drag and drop interface',
      'Real-time updates',
      'Task management',
      'Board customization'
    ]
  },
  
  // Add more portfolio projects
  {
    id: 7,
    title: 'Hulu Redesign',
    description: 'A modern, responsive redesign of the Hulu streaming platform interface',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    category: ['UI Design', 'UX Research'],
    tools: ['React', 'Tailwind CSS', 'Responsive Design'],
    link: '#',
    metrics: [
      { icon: <Users className="w-5 h-5" />, value: '35%', label: 'User Engagement' },
      { icon: <LineChart className="w-5 h-5" />, value: '45%', label: 'Conversion Rate' }
    ],
    problem: 'Outdated interface leading to poor user engagement',
    process: 'Conducted user research and created interactive prototypes',
    solution: 'Modern, responsive interface with improved navigation',
    features: [
      'Personalized recommendations',
      'Advanced search filters',
      'Watchlist management',
      'Cross-device synchronization'
    ]
  },
  {
    id: 8,
    title: 'Split Landing Page',
    description: 'A modern split-screen landing page featuring bold visuals and clear calls-to-action.',
    image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    category: ['Web Design'],
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
    ]
  }
];

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
