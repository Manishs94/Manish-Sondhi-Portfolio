import React, { useState, useEffect } from 'react';
import { Briefcase, MapPin, Calendar, TrendingUp, Users, Award } from 'lucide-react';
import ExperienceSkeleton from './ExperienceSkeleton';

type ToolGroup = {
  label: string;
  items: string[];
};

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
      title: 'Senior Product Designer',
      company: 'CYNC Software',
      location: 'Remote',
      period: 'Feb 2022 – Present',
      description: 'Design lead for AI-enabled systems and complex product platforms including loan origination systems, collateral platforms, analytics dashboards, and decision-support tools used by lending operations and credit teams.',
      highlights: [
        'Led product design for loan origination systems, collateral workflows, and analytics experiences, turning complex multi-system processes into clear, scalable user journeys.',
        'Defined workflow architecture, interaction models, and system states to create consistent product foundations across Angular and React enterprise platforms.',
        'Shaped decision-support interfaces and operational dashboards that improved visibility into key signals, task clarity, and review accuracy.',
        'Established reusable UX patterns and component standards that strengthened consistency, scalability, and design-engineering efficiency.',
        'Designed AI-assisted workflows and guidance patterns that integrated automated insights into high-stakes operational processes without removing human oversight.',
        'Created conversational and explainability patterns that surfaced system outputs with clear context, confidence cues, fallback logic, and review workflows.',
        'Facilitated design workshops and influenced cross-functional product decisions across product, engineering, and business stakeholders.'
      ],
      impact: [
        { metric: 'Improved decision clarity across workflow-heavy product platforms', icon: '🎯' },
        { metric: 'Reduced manual analysis through better dashboards, guidance, and review flows', icon: '📈' },
        { metric: 'Increased trust in automated insights through explainable interaction patterns', icon: '🧩' },
        { metric: 'Strengthened product delivery through tighter design-engineering alignment', icon: '✓' }
      ],
      tools: [
        { label: 'Design Tools', items: ['Figma', 'Adobe XD'] },
        { label: 'Product & Collaboration', items: ['Jira', 'Confluence'] },
        { label: 'AI-Assisted Tools', items: ['ChatGPT'] },
        { label: 'Technologies', items: ['Angular', 'React'] },
        { label: 'Specialties', items: ['Workflow Design', 'Conversational UX', 'Explainable AI'] }
      ] as ToolGroup[]
    },
    {
      title: 'Senior UI/UX Designer',
      company: 'Bank of America',
      location: 'New York',
      period: 'Nov 2018 – Feb 2022',
      description: 'Designed large-scale consumer banking experiences across web and mobile platforms, improving usability, accessibility, and task success for payments, account management, and other critical financial workflows.',
      highlights: [
        'Led UX initiatives for payments, account management, and high-traffic banking workflows to improve usability and task completion at scale.',
        'Designed responsive web and native mobile experiences optimized for clarity, accessibility, and efficient task flow.',
        'Simplified complex financial tasks into intuitive user journeys for a broad consumer audience.',
        'Facilitated cross-functional design discussions to align UX decisions with product goals, technical constraints, and compliance needs.',
        'Defined interaction patterns, workflow structures, and reusable components across multiple features.',
        'Used usability testing and behavioral analysis to uncover friction points and improve completion rates.',
        'Iterated designs using analytics insights and feedback from multiple user groups.',
        'Delivered prototypes, specifications, and reusable UI patterns that supported high-quality engineering implementation.'
      ],
      impact: [
        { metric: 'Improved usability across core consumer banking experiences', icon: '📈' },
        { metric: 'Increased task completion through clearer interaction patterns', icon: '✓' },
        { metric: 'Strengthened accessibility and consistency with reusable UI standards', icon: '🧩' },
        { metric: 'Improved cross-functional execution across product, design, and engineering', icon: '🤝' }
      ],
      tools: [
        { label: 'Design Tools', items: ['Figma', 'Adobe XD'] },
        { label: 'Product & Collaboration', items: ['Jira', 'Confluence'] },
        { label: 'UX Methods', items: ['Wireframing', 'Prototyping', 'Usability Testing'] },
        { label: 'Specialties', items: ['Responsive Design', 'Design Systems'] }
      ] as ToolGroup[]
    },
    {
      title: 'UI/UX Designer',
      company: 'Innovative Design Studio',
      location: 'Freelance',
      period: 'Jan 2018 – Nov 2018',
      description: 'Partnered with early-stage startups to design MVP web and mobile products, helping founders translate product ideas into clear user flows, scalable UX foundations, and launch-ready interfaces.',
      highlights: [
        'Collaborated with founders and early product teams to define product concepts, user journeys, and feature priorities for 0→1 digital products.',
        'Designed end-to-end product experiences including information architecture, user flows, wireframes, and high-fidelity interfaces for web and mobile applications.',
        'Rapidly iterated on MVP concepts through prototyping and feedback cycles in fast-moving startup environments.',
        'Translated business goals and early product vision into actionable UX direction and launch-ready product decisions.',
        'Created interactive prototypes and design specifications to support engineering implementation and faster product launches.',
        'Delivered responsive experiences optimized for usability across devices and evolving product requirements.'
      ],
      impact: [],
      tools: [
        { label: 'Design Tools', items: ['Figma', 'Adobe XD'] },
        { label: 'UX Methods', items: ['Wireframing', 'Prototyping', 'Information Architecture'] },
        { label: 'Product Foundations', items: ['Responsive Design', 'User Flows'] }
      ] as ToolGroup[]
    },
    {
      title: 'Customer Service Representative',
      company: 'TD Bank',
      location: 'Absecon, NJ',
      period: 'Jan 2014 – Nov 2018',
      description: 'Built a strong foundation in customer empathy, financial workflows, and real-world service behavior while supporting branch operations and compliance standards.',
      highlights: [
        'Assisted customers with account management, transactions, and product education through clear, needs-based communication.',
        'Observed firsthand how people navigate financial tasks, service friction, and trust-sensitive interactions.',
        'Maintained 100% compliance with operational procedures, security policies, and regulatory standards.',
        'Supported branch operations and team workflows to improve daily efficiency and reliability.',
        'Developed transferable strengths in problem-solving, communication, and operational awareness.',
        'Gained frontline insight into customer pain points and real-world behavior that now informs product decisions.'
      ],
      impact: [
        { metric: 'Built deep empathy for real-world financial service users', icon: '🤝' },
        { metric: 'Maintained strong compliance and operational accuracy', icon: '✓' },
        { metric: 'Developed firsthand understanding of banking workflows', icon: '🏦' },
        { metric: 'Strengthened communication and user-centered service instincts', icon: '🧠' }
      ],
      tools: [
        { label: 'Customer & Operations', items: ['Customer Communication', 'Operations', 'Compliance'] },
        { label: 'Transferable Strengths', items: ['Problem Solving', 'Relationship Management', 'Financial Services'] }
      ] as ToolGroup[]
    }
  ];

  return (
    <section id="experience" className="py-24 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-heading dark:text-white">Work Experience</h2>
          <p className="section-subheading mx-auto dark:text-gray-300 mb-8">
            Senior Product Designer with 8+ years designing AI-enabled systems, enterprise platforms, and data-driven product experiences. I specialize in transforming complex workflows, analytics tools, and operational systems into intuitive products that help teams interpret information, evaluate risk, and make confident decisions.
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
                  <div className="space-y-3">
                    {exp.tools.map((group: ToolGroup, idx) => (
                      <div key={idx}>
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-portfolio-accent mb-2">
                          {group.label}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {group.items.map((tool, toolIdx) => (
                            <span
                              key={toolIdx}
                              className="px-3 py-1 bg-portfolio-accent/10 text-portfolio-accent rounded-full text-sm font-medium transition-all duration-300 hover:bg-portfolio-accent hover:text-white hover:scale-105 cursor-pointer"
                            >
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>
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
