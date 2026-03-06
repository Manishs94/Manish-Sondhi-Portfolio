import React, { useState, useEffect } from 'react';
import { Briefcase, MapPin, Calendar, TrendingUp, Users, Award } from 'lucide-react';
import ExperienceSkeleton from './ExperienceSkeleton';

const Experience = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [visibleExperiences, setVisibleExperiences] = useState<number[]>([]);

  // Simulate loading for demonstration
  useEffect(() => {
    const loadingTimer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(loadingTimer);
  }, []);

  // Progressively reveal experiences
  useEffect(() => {
    if (!isLoading) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const index = parseInt(entry.target.getAttribute('data-index') || '0');
              setVisibleExperiences((prev) => [...new Set([...prev, index])]);
            }
          });
        },
        {
          root: null,
          rootMargin: '0px',
          threshold: 0.1,
        }
      );

      document.querySelectorAll('[data-experience-card]').forEach((card) => {
        observer.observe(card);
      });

      return () => observer.disconnect();
    }
  }, [isLoading]);

  const experiences = [
    {
      title: 'Lead Product Designer – Enterprise Platforms',
      company: 'CYNC Software',
      location: 'Remote',
      period: 'Feb 2022 – Present',
      description: 'Design lead for enterprise fintech platforms supporting security-based lending, collateral management, and portfolio analytics. Responsible for product design leadership, workflow architecture, and system-level UX strategy.',
      highlights: [
        'Led UX design for Loan Origination Systems and collateral workflows, translating complex multi-system processes into intuitive user journeys.',
        'Defined workflow architecture, interaction models, and system states to ensure consistent, scalable enterprise UX across Angular and React platforms.',
        'Influenced product direction by shaping decision-support interfaces and operational dashboards to improve clarity and task accuracy.',
        'Established reusable UI/UX patterns and component standards to enhance consistency, scalability, and engineering efficiency.',
        'Designed AI-assisted workflows and contextual guidance systems for complex financial processes.',
        'Built conversational UX patterns, fallback logic, and explainable AI interfaces to increase adoption and trust.',
        'Facilitated design workshops and acted as the design authority for screen-level execution and workflow coherence across cross-functional teams.'
      ],
      impact: [
        { metric: 'Improved workflow clarity across enterprise fintech platforms', icon: '🎯' },
        { metric: 'Increased trust through explainable AI and guided experiences', icon: '📈' },
        { metric: 'Strengthened cross-product consistency with reusable UX standards', icon: '🧩' },
        { metric: 'Improved delivery quality through stronger design-engineering alignment', icon: '✓' }
      ],
      tools: ['Figma', 'Adobe XD', 'Jira', 'Confluence', 'ChatGPT', 'Angular', 'React', 'Workflow Design', 'Conversational UX', 'Explainable AI']
    },
    {
      title: 'Senior UI/UX Designer',
      company: 'Bank of America',
      location: 'New York, NY',
      period: 'Nov 2018 – Feb 2022',
      description: 'Designed digital banking experiences across consumer web and mobile platforms, supporting millions of users performing financial transactions, account management, and payments.',
      highlights: [
        'Led UX initiatives for payments, account management, and operational workflows to improve usability and task completion.',
        'Designed responsive web and native mobile experiences optimized for clarity, accessibility, and efficiency.',
        'Simplified complex operational processes into intuitive user journeys for diverse audiences.',
        'Facilitated cross-functional design discussions to align UX solutions with product and technical goals.',
        'Conducted usability testing and user behavior analysis to identify friction points and improve task efficiency.',
        'Contributed to reusable UI components and templates, and delivered high-fidelity prototypes, wireframes, and specifications to engineering teams.'
      ],
      impact: [
        { metric: 'Improved usability for core consumer banking workflows', icon: '📈' },
        { metric: 'Improved task completion through clearer interaction patterns', icon: '✓' },
        { metric: 'Increased consistency through reusable UI templates', icon: '🧩' },
        { metric: 'Strengthened collaboration across product, design, and engineering', icon: '🤝' }
      ],
      tools: ['Figma', 'Adobe XD', 'Jira', 'Confluence', 'Wireframing', 'Prototyping', 'Usability Testing', 'Responsive Design', 'Design Systems']
    },
    {
      title: 'UI/UX Designer',
      company: 'Innovative Design Studio',
      location: 'Freelance',
      period: 'Jan 2018 – Nov 2018',
      description: 'Partnered with early-stage startups to design MVP web and mobile products, translating product ideas into scalable user experiences.',
      highlights: [
        'Collaborated with founders and product teams to define product concepts, user journeys, and feature requirements for early-stage digital products.',
        'Designed end-to-end user experiences including information architecture, user flows, wireframes, and high-fidelity interfaces for web and mobile applications.',
        'Rapidly iterated on product ideas through prototyping and feedback cycles in fast-paced startup environments.',
        'Helped translate business goals and product vision into actionable UX solutions.',
        'Created interactive prototypes and design specifications to support engineering implementation and product launch.',
        'Delivered responsive design solutions optimized for usability across multiple devices.'
      ],
      impact: [],
      tools: ['Figma', 'Adobe XD', 'Wireframing', 'Prototyping', 'Information Architecture', 'Responsive Design', 'User Flows']
    }
  ];

  return (
    <section id="experience" className="py-24 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-heading dark:text-white">Work Experience</h2>
          <p className="section-subheading mx-auto dark:text-gray-300 mb-8">
            Senior Product Designer with 8+ years of experience designing complex enterprise and fintech platforms, with strengths in loan origination workflows, collateral management, AI-assisted UX, and scalable design systems. Experienced in translating regulatory requirements and multi-stakeholder needs into intuitive, production-ready user experiences.
          </p>
        </div>
        
        {isLoading ? (
          <ExperienceSkeleton />
        ) : (
          <div className="max-w-5xl mx-auto space-y-12">
            {experiences.map((exp, index) => (
              <div 
                key={index}
                data-experience-card
                data-index={index}
                className={`group bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform border border-transparent hover:border-portfolio-accent/20
                  ${visibleExperiences.includes(index) 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'} 
                  hover:-translate-y-1 hover:scale-[1.02]`}
                style={{ 
                  transitionDelay: `${0.2 * index}s`,
                  transitionProperty: 'opacity, transform'
                }}
              >
                {/* Header */}
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Briefcase className="text-portfolio-accent transition-transform duration-300 group-hover:scale-110" size={20} />
                      <h3 className="text-2xl font-bold text-portfolio-text-dark dark:text-white group-hover:text-portfolio-accent transition-colors duration-300">
                        {exp.title}
                      </h3>
                    </div>
                    <p className="text-xl text-portfolio-accent font-semibold mb-2 transition-all duration-300 group-hover:scale-105 origin-left">
                      {exp.company}
                    </p>
                    <div className="flex flex-wrap items-center gap-4 text-portfolio-text-light dark:text-gray-300">
                      <div className="flex items-center gap-1 transition-transform duration-300 hover:scale-105">
                        <MapPin size={16} className="transition-colors duration-300 group-hover:text-portfolio-accent" />
                        <span>{exp.location}</span>
                      </div>
                      <div className="flex items-center gap-1 transition-transform duration-300 hover:scale-105">
                        <Calendar size={16} className="transition-colors duration-300 group-hover:text-portfolio-accent" />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-portfolio-text-light dark:text-gray-300 mb-6 leading-relaxed transition-colors duration-300 group-hover:text-portfolio-text-dark dark:group-hover:text-gray-200">
                  {exp.description}
                </p>

                {/* Role Highlights */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-portfolio-text-dark dark:text-white mb-4 flex items-center gap-2 transition-colors duration-300 group-hover:text-portfolio-accent">
                    <Users size={18} className="text-portfolio-accent transition-transform duration-300 group-hover:scale-110" />
                    Role Highlights
                  </h4>
                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-portfolio-text-light dark:text-gray-300 transition-all duration-300 hover:translate-x-2 hover:text-portfolio-text-dark dark:hover:text-gray-200">
                        <span className="text-portfolio-accent text-sm mt-1.5 transition-transform duration-300 hover:scale-150">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Impact Metrics */}
                {exp.impact.length > 0 && (
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-portfolio-text-dark dark:text-white mb-4 flex items-center gap-2 transition-colors duration-300 group-hover:text-portfolio-accent">
                      <TrendingUp size={18} className="text-portfolio-accent transition-transform duration-300 group-hover:scale-110" />
                      Key Impact
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                      {exp.impact.map((item, idx) => (
                        <div key={idx} className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 text-center transition-all duration-300 hover:scale-105 hover:shadow-md hover:bg-blue-50 dark:hover:bg-gray-600 cursor-pointer">
                          <div className="text-2xl mb-2 transition-transform duration-300 hover:scale-125">{item.icon}</div>
                          <p className="text-sm font-medium text-portfolio-text-dark dark:text-white transition-colors duration-300">
                            {item.metric}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Tools & Stack */}
                <div>
                  <h4 className="text-lg font-semibold text-portfolio-text-dark dark:text-white mb-4 flex items-center gap-2 transition-colors duration-300 group-hover:text-portfolio-accent">
                    <Award size={18} className="text-portfolio-accent transition-transform duration-300 group-hover:scale-110" />
                    Tools & Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.tools.map((tool, idx) => (
                      <span 
                        key={idx}
                        className="px-3 py-1 bg-portfolio-accent/10 text-portfolio-accent rounded-full text-sm font-medium transition-all duration-300 hover:bg-portfolio-accent hover:text-white hover:scale-105 cursor-pointer"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Experience;
