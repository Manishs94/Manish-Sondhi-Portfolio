import { Project } from '../types/project';

// Regular portfolio projects
export const portfolioProjects: Project[] = [
  {
    id: 19,
    title: 'CSS Animations Gallery',
    description: 'A curated collection of interaction design patterns and micro-animations, focusing on user engagement and visual feedback',
    image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    category: ['Product Design', 'Interaction Design'],
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
    category: ['Product Design', 'UX Research'],
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
    category: ['Product Design', 'UX Research'],
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
    category: ['AI', 'UX Research', 'Product Design'],
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
  },
  {
    id: 14,
    title: 'Expanding Cards Gallery',
    description: 'An interactive image gallery with smooth expanding animations and responsive design.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    category: ['Interactive Design'],
    tools: ['HTML', 'CSS', 'JavaScript', 'Animations'],
    link: 'https://expanding-cards-unique.netlify.app/',
    metrics: [
      { icon: 'users', value: '60%', label: 'User Engagement' },
      { icon: 'lineChart', value: '42%', label: 'Interaction Rate' }
    ],
    problem: 'Traditional gallery layouts limiting content exploration and user interaction',
    process: 'Explored innovative interaction patterns and tested with target users',
    solution: 'Designed an expanding card system that enhances content discovery',
    features: [
      'Smooth expansion animations',
      'Touch-friendly interface',
      'Dynamic content loading',
      'Keyboard accessibility'
    ],
    status: 'Completed',
    isCaseStudy: false
  },
  {
    id: 15,
    title: 'Budget Planner',
    description: 'A dynamic budget planner application with search and filtering capabilities',
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    category: ['Application Design'],
    tools: ['React', 'JavaScript', 'CSS', 'Netlify'],
    link: 'https://hardcore-roentgen-8b2667.netlify.app/',
    githubLink: 'https://github.com/Manishs94/Budget-Tracker',
    demoLink: 'https://hardcore-roentgen-8b2667.netlify.app/',
    metrics: [
      { icon: 'users', value: '50%', label: 'User Efficiency' },
      { icon: 'lineChart', value: '38%', label: 'Task Completion' }
    ],
    problem: 'Complex financial management and lack of intuitive categorization',
    process: 'Conducted user research on financial planning habits and tested various UI patterns',
    solution: 'Created a streamlined interface with clear categorization and visual feedback',
    features: [
      'Budget planner',
      'Search functionality',
      'Responsive design',
      'Category filtering'
    ],
    status: 'Completed',
    isCaseStudy: false
  },
  {
    id: 16,
    title: 'Video Game Database',
    description: 'A comprehensive video game database with search and filtering capabilities',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    category: ['Database Interface Design'],
    tools: ['Angular', 'TypeScript', 'Firebase', 'RapidAPI'],
    link: 'https://ng-video-game-db.web.app/',
    githubLink: 'https://github.com/Manishs94/ng-video-game-db',
    demoLink: 'https://ng-video-game-db.web.app/',
    metrics: [
      { icon: 'users', value: '65%', label: 'Search Accuracy' },
      { icon: 'lineChart', value: '48%', label: 'User Retention' }
    ],
    problem: 'Information overload and poor content organization',
    process: 'Analyzed user search patterns and information hierarchy needs',
    solution: 'Implemented an intuitive search and filter system with clear visual hierarchy',
    features: [
      'Game search functionality',
      'Detailed game information',
      'Rating system',
      'Responsive design'
    ],
    status: 'Completed',
    isCaseStudy: false
  },
  {
    id: 17,
    title: 'Todo Application',
    description: 'A feature-rich todo application with real-time updates and persistent storage',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    category: ['Productivity Design'],
    tools: ['React', 'TypeScript', 'Netlify', 'CSS'],
    link: 'https://todo-cda1b8.netlify.app/',
    githubLink: 'https://github.com/Manishs94/todo-app',
    demoLink: 'https://todo-cda1b8.netlify.app/',
    metrics: [
      { icon: 'users', value: '75%', label: 'Task Completion' },
      { icon: 'lineChart', value: '58%', label: 'User Productivity' }
    ],
    problem: 'Task management complexity and poor user engagement',
    process: 'Studied user productivity patterns and task management workflows',
    solution: 'Designed a clean, focused interface with clear task hierarchy',
    features: [
      'Task management',
      'Real-time updates',
      'Persistent storage',
      'Responsive design'
    ],
    status: 'Completed',
    isCaseStudy: false
  },
  {
    id: 18,
    title: 'Twitter Clone',
    description: 'A full-featured Twitter clone with real-time updates and social interactions',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    category: ['Social Media Design'],
    tools: ['React', 'Firebase', 'Material-UI', 'JavaScript'],
    link: 'https://twitter-clone-83a92.firebaseapp.com/',
    githubLink: 'https://github.com/Manishs94/Twitter-Clone',
    demoLink: 'https://twitter-clone-83a92.firebaseapp.com/',
    metrics: [
      { icon: 'users', value: '68%', label: 'User Engagement' },
      { icon: 'lineChart', value: '52%', label: 'Social Interaction' }
    ],
    problem: 'Complex social interactions and information overload',
    process: 'Analyzed social media interaction patterns and user engagement metrics',
    solution: 'Created a streamlined interface focusing on core social features',
    features: [
      'Real-time feed updates',
      'User authentication',
      'Tweet functionality',
      'Responsive design'
    ],
    status: 'Completed',
    isCaseStudy: false
  },
  {
    id: 20,
    title: 'Investment Collateral Detail',
    description: 'A detailed investment collateral interface focused on clear information hierarchy and decision support for financial workflows.',
    image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    category: ['Product Design', 'Enterprise Fintech', 'Dashboard Design'],
    tools: ['React', 'TypeScript', 'Tailwind CSS'],
    link: 'https://v0-investment-collateral-detail.vercel.app',
    demoLink: 'https://v0-investment-collateral-detail.vercel.app',
    metrics: [
      { icon: 'check', value: 'Improved', label: 'Information Clarity' },
      { icon: 'lineChart', value: 'Faster', label: 'Data Review' }
    ],
    problem: 'Collateral details were difficult to scan quickly in high-stakes investment workflows.',
    process: 'Structured the data layout, prioritized key financial attributes, and validated readability across screen sizes.',
    solution: 'Delivered a clean, high-density design that improves scanability and decision confidence.',
    features: [
      'Collateral detail summary',
      'Financial data hierarchy',
      'Responsive layout',
      'Action-oriented workflow design'
    ],
    status: 'Completed',
    isCaseStudy: false
  },
  {
    id: 21,
    title: 'Commercial Real Estate Solution',
    description: 'A commercial real estate experience designed to organize complex property and lending information into a clear, usable workflow.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    category: ['Product Design', 'Enterprise Fintech', 'Commercial Real Estate'],
    tools: ['React', 'TypeScript', 'Tailwind CSS'],
    link: 'https://v0-commercial-real-estate-solution.vercel.app',
    demoLink: 'https://v0-commercial-real-estate-solution.vercel.app',
    metrics: [
      { icon: 'check', value: 'Improved', label: 'Workflow Clarity' },
      { icon: 'lineChart', value: 'Faster', label: 'Property Review' }
    ],
    problem: 'Commercial real estate data and actions were spread across fragmented views, reducing operational efficiency.',
    process: 'Mapped core CRE tasks, prioritized critical financial and property signals, and structured responsive layouts for quick scanning.',
    solution: 'Created a cohesive interface that improves usability for reviewing, comparing, and acting on CRE information.',
    features: [
      'Property overview workflows',
      'Organized financial and collateral details',
      'Responsive design system',
      'Decision-focused layout patterns'
    ],
    status: 'Completed',
    isCaseStudy: false
  },
  {
    id: 22,
    title: 'Tip Calculator',
    description: 'A clean, responsive calculator interface focused on quick bill splitting and tip calculation with clear visual feedback.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    category: ['Product Design', 'Interaction Design'],
    tools: ['React', 'TypeScript', 'Tailwind CSS'],
    link: 'https://tip-calculator-2z8roy6xz-manishs94s-projects.vercel.app',
    demoLink: 'https://tip-calculator-2z8roy6xz-manishs94s-projects.vercel.app',
    metrics: [
      { icon: 'check', value: 'Improved', label: 'Calculation Clarity' },
      { icon: 'lineChart', value: 'Faster', label: 'Bill Splitting' }
    ],
    problem: 'Users needed a straightforward way to calculate tip and per-person totals without confusion.',
    process: 'Designed and refined the form flow, validation states, and output hierarchy for fast comprehension.',
    solution: 'Built a simple, mobile-friendly interface with immediate calculation feedback.',
    features: [
      'Tip percentage controls',
      'Per-person split calculation',
      'Real-time result updates',
      'Responsive layout'
    ],
    status: 'Completed',
    isCaseStudy: false
  },
  {
    id: 23,
    title: 'Netflix Mobile Navigation',
    description: 'A mobile navigation concept inspired by streaming app interaction patterns, optimized for thumb-friendly navigation and quick discovery.',
    image: 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    category: ['Product Design', 'Mobile Design', 'Interaction Design'],
    tools: ['React', 'TypeScript', 'CSS'],
    link: 'https://netflix-mobile-navigation-504fy6ok8-manishs94s-projects.vercel.app/#',
    demoLink: 'https://netflix-mobile-navigation-504fy6ok8-manishs94s-projects.vercel.app/#',
    metrics: [
      { icon: 'users', value: 'Improved', label: 'Navigation Flow' },
      { icon: 'lineChart', value: 'Faster', label: 'Content Access' }
    ],
    problem: 'Mobile users needed faster access to primary destinations with minimal cognitive load.',
    process: 'Explored mobile-first navigation structures, tested hierarchy options, and refined interaction states.',
    solution: 'Delivered a streamlined navigation pattern tailored for one-handed use and rapid switching.',
    features: [
      'Mobile-first navigation',
      'Optimized interaction states',
      'Clear visual hierarchy',
      'Responsive behavior'
    ],
    status: 'Completed',
    isCaseStudy: false
  },
  {
    id: 24,
    title: 'Seamless Auto Sync',
    description: 'A product experience focused on automated synchronization workflows with clear status feedback and minimal user friction.',
    image: 'https://images.unsplash.com/photo-1518773553398-650c184e0bb3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    category: ['Product Design', 'Platform Design', 'Interaction Design'],
    tools: ['React', 'TypeScript', 'Tailwind CSS'],
    link: 'https://seamless-auto-sync.vercel.app',
    demoLink: 'https://seamless-auto-sync.vercel.app',
    metrics: [
      { icon: 'check', value: 'Improved', label: 'Sync Transparency' },
      { icon: 'lineChart', value: 'Faster', label: 'Task Continuity' }
    ],
    problem: 'Users lacked clear visibility into auto-sync states, causing uncertainty and repeated manual checks.',
    process: 'Mapped sync states, designed status-first UI patterns, and refined interaction cues for confidence and clarity.',
    solution: 'Created a streamlined interface that communicates sync progress and outcomes in real time.',
    features: [
      'Auto-sync status indicators',
      'Progress and state feedback',
      'Responsive interface behavior',
      'Clear action recovery paths'
    ],
    status: 'Completed',
    isCaseStudy: false
  },
  {
    id: 25,
    title: 'Floorplan Loan Compass',
    description: 'A floorplan lending experience designed to simplify loan monitoring, inventory visibility, and operational decision-making.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    category: ['Product Design', 'Enterprise Fintech', 'Platform Design'],
    tools: ['React', 'TypeScript', 'Tailwind CSS'],
    link: 'https://floorplan-loan-compass.vercel.app',
    demoLink: 'https://floorplan-loan-compass.vercel.app',
    metrics: [
      { icon: 'check', value: 'Improved', label: 'Inventory Visibility' },
      { icon: 'lineChart', value: 'Faster', label: 'Loan Monitoring' }
    ],
    problem: 'Floorplan lending teams needed clearer visibility into inventory-backed loans and their changing risk states.',
    process: 'Mapped user workflows, prioritized key lending indicators, and structured screens for quick monitoring and action.',
    solution: 'Built a decision-oriented interface that improves clarity across loan status, collateral, and operational tasks.',
    features: [
      'Loan and inventory overview',
      'Clear status and risk indicators',
      'Workflow-driven layout',
      'Responsive dashboard experience'
    ],
    status: 'Completed',
    isCaseStudy: false
  },
  {
    id: 26,
    title: 'Fleet Finance AI Integration',
    description: 'A design-focused concept integrating AI-assisted workflows into fleet finance operations for clearer guidance and faster decisions.',
    image: 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    category: ['Product Design', 'Enterprise Fintech', 'AI-Assisted UX'],
    tools: ['React', 'TypeScript', 'Tailwind CSS'],
    link: 'https://fleet-finance-ai-integration.vercel.app',
    demoLink: 'https://fleet-finance-ai-integration.vercel.app',
    metrics: [
      { icon: 'check', value: 'Improved', label: 'Workflow Guidance' },
      { icon: 'lineChart', value: 'Faster', label: 'Decision Support' }
    ],
    problem: 'Fleet finance teams needed better visibility and guidance while combining operational data with lending decisions.',
    process: 'Mapped finance workflows, identified AI support moments, and designed interfaces for clearer action prioritization.',
    solution: 'Created an integrated experience that improves context, confidence, and efficiency across fleet finance tasks.',
    features: [
      'AI-assisted task guidance',
      'Finance workflow integration',
      'Clear decision states',
      'Responsive enterprise UI'
    ],
    status: 'Completed',
    isCaseStudy: false
  },
  {
    id: 27,
    title: 'Floorplan Loan Orchestrator',
    description: 'A design concept for orchestrating floorplan lending workflows across monitoring, approvals, and operational actions.',
    image: 'https://images.unsplash.com/photo-1460472178825-e5240623afd5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    category: ['Product Design', 'Enterprise Fintech', 'Platform Design'],
    tools: ['React', 'TypeScript', 'Tailwind CSS'],
    link: 'https://floorplan-loan-orchestrator.lovable.app',
    demoLink: 'https://floorplan-loan-orchestrator.lovable.app',
    metrics: [
      { icon: 'check', value: 'Improved', label: 'Workflow Coordination' },
      { icon: 'lineChart', value: 'Faster', label: 'Loan Operations' }
    ],
    problem: 'Floorplan workflows were fragmented across screens, reducing visibility and slowing operational execution.',
    process: 'Mapped orchestration paths, defined high-priority user actions, and designed clear state-based interface patterns.',
    solution: 'Built a coordinated workflow experience that improves visibility, task flow, and operational speed.',
    features: [
      'Workflow orchestration views',
      'Status and priority indicators',
      'Role-oriented task design',
      'Responsive enterprise layout'
    ],
    status: 'Completed',
    isCaseStudy: false
  },
  {
    id: 28,
    title: 'Loan Pledge Orchestrator',
    description: 'A workflow orchestration design for managing loan pledge processes, handoffs, and operational states across enterprise lending teams.',
    image: 'https://images.unsplash.com/photo-1559526324-593bc073d938?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    category: ['Product Design', 'Enterprise Fintech', 'Platform Design'],
    tools: ['React', 'TypeScript', 'Tailwind CSS'],
    link: 'https://loan-pledge-orchestrator.lovable.app',
    demoLink: 'https://loan-pledge-orchestrator.lovable.app',
    metrics: [
      { icon: 'check', value: 'Improved', label: 'Pledge Workflow Clarity' },
      { icon: 'lineChart', value: 'Faster', label: 'Operational Handoffs' }
    ],
    problem: 'Loan pledge processes involved complex transitions and dependencies that were difficult to track consistently.',
    process: 'Mapped lifecycle states, aligned interface actions to operations, and refined sequencing for execution clarity.',
    solution: 'Created a coordinated orchestration interface that improves visibility, control, and team alignment.',
    features: [
      'Pledge lifecycle tracking',
      'Role-based workflow cues',
      'State and dependency visibility',
      'Responsive enterprise layout'
    ],
    status: 'Completed',
    isCaseStudy: false
  },
  {
    id: 29,
    title: 'System Flow Platform MVP',
    description: 'A system-flow MVP design focused on visualizing process stages, dependencies, and next actions for faster operational decisions.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    category: ['Product Design', 'System Design', 'Platform Design'],
    tools: ['React', 'TypeScript', 'Tailwind CSS'],
    link: 'https://v0-system-flow-mvp.vercel.app',
    demoLink: 'https://v0-system-flow-mvp.vercel.app',
    metrics: [
      { icon: 'check', value: 'Improved', label: 'Flow Clarity' },
      { icon: 'lineChart', value: 'Faster', label: 'Process Decisions' }
    ],
    problem: 'Teams needed a clearer system view of workflow states and dependencies to avoid delays and confusion.',
    process: 'Mapped the end-to-end flow, prioritized critical state changes, and designed a concise information hierarchy.',
    solution: 'Delivered an MVP interface that improves process visibility and decision confidence.',
    features: [
      'State-based process visualization',
      'Dependency mapping',
      'Action-focused layout',
      'Responsive workflow interface'
    ],
    status: 'Completed',
    isCaseStudy: false
  }
];
