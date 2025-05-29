

import { Project } from '../types/project';

// Regular portfolio projects
export const portfolioProjects: Project[] = [
  {
    id: 5,
    title: 'CSS Animations Gallery',
    description: 'A curated collection of interaction design patterns and micro-animations, focusing on user engagement and visual feedback',
    image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    category: ['UI Design', 'Interaction Design'],
    tools: ['Figma', 'Principle', 'Framer', 'After Effects'],
    link: 'https://animations-a7d93.web.app/',
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
    id: 10,
    title: 'Kanban Board',
    description: 'A user-centered task management interface with focus on workflow optimization and visual hierarchy',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    category: ['UI Design', 'UX Research'],
    tools: ['Figma', 'Maze', 'Miro', 'ProtoPie'],
    link: 'https://kanban-fire-be71d.web.app/',
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
    id: 11,
    title: 'Hulu Redesign',
    description: 'A modern, responsive redesign of the Hulu streaming platform interface',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    category: ['UI Design', 'UX Research'],
    tools: ['React', 'Tailwind CSS', 'Responsive Design'],
    link: 'https://hulu-project-1.netlify.app/',
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
    id: 13,
    title: 'AI Chatbot Application',
    description: 'An interactive AI chatbot with natural language processing and responsive interface',
    image: '/lovable-uploads/25012106-d649-4a4f-b9d0-7eb1b4890a63.png',
    category: ['AI', 'UX Research', 'UI Design'],
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

