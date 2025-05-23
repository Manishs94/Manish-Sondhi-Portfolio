
import React, { useState } from 'react';
import { ExternalLink, Users2, LineChart, Clock, Target, Users } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'ui', name: 'UI Design' },
    { id: 'ux', name: 'UX Research' },
    { id: 'product', name: 'Product Design' },
    { id: 'web', name: 'Web Design' },
    { id: 'interaction', name: 'Interaction Design' },
  ];
  
  const mainProjects = [
    {
      id: 1,
      title: 'Bank of America Mobile Bill Payment',
      subtitle: 'Enhancing Digital Banking Experience',
      description: 'Bank of America, serving over 68 million customers, introduced a new Bill Pay feature in 2022. This feature allows users to handle payments for utilities, cable, phone services, and more through electronic transactions, available as early as the next working day.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      category: ['ui', 'ux', 'product'],
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
    },
    {
      id: 2,
      title: 'CYNC Loan Origination System',
      subtitle: 'Streamlining Commercial Lending',
      description: 'Redesigned the loan origination system for Cync, focusing on automating and simplifying the commercial lending process while ensuring regulatory compliance and improving user experience for both lenders and borrowers.',
      image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      category: ['ui', 'ux', 'product'],
      metrics: [
        { icon: <Users2 className="w-5 h-5" />, value: '45%', label: 'Faster Processing' },
        { icon: <LineChart className="w-5 h-5" />, value: '60%', label: 'Reduced Manual Work' },
        { icon: <Clock className="w-5 h-5" />, value: '35%', label: 'Time Savings' },
        { icon: <Target className="w-5 h-5" />, value: '50%', label: 'Error Reduction' }
      ],
      tools: ['Adobe XD', 'Jira', 'Miro', 'Protopie', 'UserTesting', 'Confluence'],
      link: 'https://cync-loan-origination-e8jwns9.gamma.site/',
      challenge: 'Complex loan origination process with multiple manual touchpoints, leading to delays, errors, and poor user experience for both lenders and borrowers.',
      process: 'Implemented a streamlined, automated workflow with intelligent document processing, real-time status tracking, and integrated compliance checks.',
    },
    {
      id: 3,
      title: 'CYNC Advanced Analytics',
      subtitle: 'Accessible Banking Solutions',
      description: 'Creating a seamless banking experience across web and mobile platforms with accessibility in mind',
      image: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&q=80&w=1000',
      category: ['ui', 'ux', 'product'],
      metrics: [
        { icon: <Users2 className="w-5 h-5" />, value: '35%', label: 'User Satisfaction' },
        { icon: <LineChart className="w-5 h-5" />, value: '45%', label: 'Task Completion' },
        { icon: <Clock className="w-5 h-5" />, value: '30%', label: 'Time Savings' },
        { icon: <Target className="w-5 h-5" />, value: '40%', label: 'Accuracy Improvement' }
      ],
      tools: ['Adobe XD', 'Miro', 'WCAG 2.1', 'Protopie', 'Confluence'],
      link: 'https://uiux-case-study-enhancin-zkm1u63.gamma.site/',
      challenge: 'Inconsistent experience across platforms and poor accessibility compliance',
      process: 'Unified design system with strong accessibility focus and improved analytics',
    },
    {
      id: 4,
      title: 'UI/UX Design Process',
      subtitle: 'End-to-End Design Methodology',
      description: 'A comprehensive look at the UI/UX design process from research to implementation',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      category: ['ui', 'ux'],
      metrics: [
        { icon: <Users2 className="w-5 h-5" />, value: '40%', label: 'User Engagement' },
        { icon: <LineChart className="w-5 h-5" />, value: '50%', label: 'Process Efficiency' },
        { icon: <Clock className="w-5 h-5" />, value: '35%', label: 'Time to Market' },
        { icon: <Target className="w-5 h-5" />, value: '45%', label: 'Success Rate' }
      ],
      tools: ['Figma', 'User Research', 'Prototyping', 'Design Systems'],
      link: 'https://uiux-case-study-agobpmr.gamma.site/',
      challenge: 'Complex design processes leading to inefficient workflows and inconsistent outputs',
      process: 'Standardized design methodology with clear frameworks and tooling',
    },
  ];
  
  const portfolioProjects = [
    {
      id: 5,
      title: 'CSS Animations Gallery',
      description: 'A curated collection of interaction design patterns and micro-animations, focusing on user engagement and visual feedback',
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      category: ['ui', 'interaction'],
      tools: ['Figma', 'Principle', 'Framer', 'After Effects'],
      link: '#',
      metrics: [
        { icon: <Users className="w-5 h-5" />, value: '40%', label: 'Engagement Increase' },
        { icon: <LineChart className="w-5 h-5" />, value: '25%', label: 'User Satisfaction' }
      ],
      challenge: 'Limited user engagement due to static animations and lack of interactive feedback',
      process: 'Researched animation principles, created prototypes, and conducted usability testing',
    },
    {
      id: 6,
      title: 'Kanban Board',
      description: 'A user-centered task management interface with focus on workflow optimization and visual hierarchy',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      category: ['ui', 'ux'],
      tools: ['Figma', 'Maze', 'Miro', 'ProtoPie'],
      link: '#',
      metrics: [
        { icon: <Users className="w-5 h-5" />, value: '45%', label: 'Task Completion' },
        { icon: <LineChart className="w-5 h-5" />, value: '30%', label: 'Workflow Efficiency' }
      ],
      challenge: 'Complex task management leading to reduced productivity and user frustration',
      process: 'Analyzed user workflows, created wireframes, and iteratively tested prototypes',
    },
    {
      id: 7,
      title: 'Hulu Redesign',
      description: 'A modern, responsive redesign of the Hulu streaming platform interface',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      category: ['ui', 'ux'],
      tools: ['React', 'Tailwind CSS', 'Responsive Design'],
      link: '#',
      metrics: [
        { icon: <Users className="w-5 h-5" />, value: '35%', label: 'User Engagement' },
        { icon: <LineChart className="w-5 h-5" />, value: '45%', label: 'Conversion Rate' }
      ],
      challenge: 'Outdated interface leading to poor user engagement',
      process: 'Conducted user research and created interactive prototypes',
    },
    {
      id: 8,
      title: 'Split Landing Page',
      description: 'A modern split-screen landing page featuring bold visuals and clear calls-to-action.',
      image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      category: ['web'],
      tools: ['HTML', 'CSS', 'JavaScript'],
      link: '#',
      challenge: 'Ineffective landing page conversion and unclear user journey',
      process: 'Analyzed user behavior, conducted A/B testing, and refined visual hierarchy',
    },
  ];

  const allProjects = [...mainProjects, ...portfolioProjects];
  
  const filteredProjects = selectedCategory === 'all' 
    ? allProjects 
    : allProjects.filter(project => project.category.includes(selectedCategory));

  return (
    <section id="portfolio" className="py-24 bg-portfolio-bg-light">
      <div className="section-container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-blue-100 text-portfolio-accent rounded-full font-medium mb-4 animate-fade-in opacity-0" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
            Portfolio
          </span>
          <h2 className="section-heading animate-fade-in opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>Featured Projects</h2>
          <p className="section-subheading mx-auto animate-fade-in opacity-0" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
            Take a look at some of my recent work that showcases my design thinking and problem-solving approach.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in opacity-0" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-5 py-2 rounded-full transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-portfolio-accent text-white'
                  : 'bg-white text-portfolio-text-dark hover:bg-gray-100'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <Card 
              key={project.id} 
              className="bg-white rounded-xl overflow-hidden shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-xl animate-fade-in opacity-0"
              style={{ animationDelay: `${0.5 + index * 0.1}s`, animationFillMode: 'forwards' }}
            >
              <div className="overflow-hidden h-64">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <CardHeader className="p-6 pb-0">
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.category.map((cat) => (
                    <span key={cat} className="px-3 py-1 bg-blue-50 text-portfolio-accent rounded-full text-sm">
                      {categories.find(c => c.id === cat)?.name || cat}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-bold text-portfolio-text-dark mb-1">{project.title}</h3>
                {project.subtitle && <p className="text-portfolio-text-light text-sm mb-2">{project.subtitle}</p>}
              </CardHeader>
              <CardContent className="p-6 pt-3">
                <p className="text-portfolio-text-light mb-4">{project.description}</p>
                
                {project.metrics && (
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6">
                    {project.metrics.map((metric, idx) => (
                      <div key={idx} className="flex flex-col items-center p-2 bg-gray-50 rounded-lg">
                        <div className="text-portfolio-accent mb-1">{metric.icon}</div>
                        <div className="font-bold text-portfolio-text-dark">{metric.value}</div>
                        <div className="text-xs text-portfolio-text-light">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                )}
                
                <div className="space-y-3 mb-6">
                  <div>
                    <span className="text-sm font-semibold text-portfolio-text-dark">Challenge:</span>
                    <p className="text-sm text-portfolio-text-light">{project.challenge}</p>
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-portfolio-text-dark">Process:</span>
                    <p className="text-sm text-portfolio-text-light">{project.process}</p>
                  </div>
                </div>
                
                {project.tools && (
                  <div className="mb-4">
                    <span className="text-sm font-semibold text-portfolio-text-dark block mb-2">Tools & Technologies:</span>
                    <div className="flex flex-wrap gap-2">
                      {project.tools.map((tool, idx) => (
                        <span key={idx} className="px-2 py-1 bg-gray-100 text-portfolio-text-dark rounded text-xs">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                
                <a 
                  href={project.link} 
                  className="flex items-center gap-2 text-portfolio-accent hover:underline font-medium group"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Case Study 
                  <ExternalLink size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12 animate-fade-in opacity-0" style={{ animationDelay: '0.9s', animationFillMode: 'forwards' }}>
          <a href="#" className="portfolio-button-primary transition-transform hover:scale-105 duration-300">
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
