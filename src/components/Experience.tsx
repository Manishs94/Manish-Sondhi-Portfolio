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
      description: 'Design lead for enterprise fintech platforms supporting securities-based lending, collateral management, portfolio analytics, and AI-assisted decision-support workflows.',
      highlights: [
        'Led UX design for enterprise lending platforms including loan origination systems, collateral management platforms, and portfolio analytics tools used by financial institutions.',
        'Designed complex operational workflows enabling credit analysts, operations teams, and financial managers to evaluate collateral, manage lending decisions, and monitor portfolio health.',
        'Defined workflow architecture, interaction models, and product states to ensure consistent, scalable UX across enterprise platforms.',
        'Shaped decision-support interfaces, dashboards, onboarding patterns, and workflow tools that improved clarity, feature adoption, and task accuracy.',
        'Designed AI-assisted workflows and contextual guidance systems that help analysts interpret automated insights, evaluate risk signals, and make faster lending decisions.',
        'Built explainable AI interfaces with clear explanations, confidence indicators, human override capabilities, and conversational fallback logic.',
        'Established reusable UX patterns and component standards while providing design leadership across cross-functional product initiatives.'
      ],
      impact: [
        { metric: 'Enabled clearer portfolio risk evaluation and collateral monitoring', icon: '🎯' },
        { metric: 'Improved workflow efficiency through guided product experiences', icon: '📈' },
        { metric: 'Strengthened trust in automation with explainable AI interaction patterns', icon: '🧩' },
        { metric: 'Improved product consistency through reusable design standards', icon: '✓' }
      ],
      tools: [
        { label: 'Design Tools', items: ['Figma', 'FigJam', 'Adobe XD'] },
        { label: 'Product & Collaboration', items: ['Jira', 'Confluence', 'Product Workshops'] },
        { label: 'Technologies', items: ['React'] },
        { label: 'Specialties', items: ['Workflow Design', 'Conversational UX', 'Explainable AI', 'Human-in-the-Loop Systems'] }
      ] as ToolGroup[]
    },
    {
      title: 'Senior UI/UX Designer',
      company: 'Bank of America',
      location: 'New York',
      period: 'Nov 2018 – Feb 2022',
      description: 'Designed digital banking experiences across consumer web and mobile platforms, supporting payments, account management, and other critical financial workflows.',
      highlights: [
        'Led UX initiatives for payments, account management, and operational workflows, improving usability and task completion.',
        'Designed responsive web and native mobile experiences optimized for clarity, accessibility, and efficient task flow.',
        'Simplified complex financial tasks into intuitive user journeys for a broad consumer audience.',
        'Facilitated cross-functional design discussions to align UX solutions with product and technical goals.',
        'Defined interaction patterns, workflow structures, and reusable components across multiple features.',
        'Conducted usability testing and analyzed user behavior to identify friction points and improve task efficiency.',
        'Iterated designs using analytics insights and feedback from multiple user groups.',
        'Applied principles aligned with lifecycle UX, A/B testing, and conversion-focused design improvements.',
        'Delivered prototypes, specifications, and reusable UI patterns that supported high-quality engineering implementation.'
      ],
      impact: [
        { metric: 'Improved usability across core consumer banking experiences', icon: '📈' },
        { metric: 'Increased task completion through clearer interaction patterns', icon: '✓' },
        { metric: 'Strengthened consistency with reusable UI standards', icon: '🧩' },
        { metric: 'Improved cross-functional execution across product, design, and engineering', icon: '🤝' }
      ],
      tools: [
        { label: 'Design Tools', items: ['Figma', 'FigJam', 'Adobe XD'] },
        { label: 'Product & Collaboration', items: ['Jira', 'Confluence'] },
        { label: 'UX Methods', items: ['Wireframing', 'Prototyping', 'Usability Testing', 'Behavioral Insights'] },
        { label: 'Technologies', items: ['Angular'] },
        { label: 'Specialties', items: ['Responsive Design', 'Design Systems', 'Conversion-Focused UX'] }
      ] as ToolGroup[]
    },
    {
      title: 'UI/UX Designer',
      company: 'Innovative Design Studio',
      location: 'Freelance',
      period: 'Jan 2018 – Nov 2018',
      description: 'Partnered with early-stage startups to design MVP web and mobile products, translating product ideas into scalable user experiences.',
      highlights: [
        'Collaborated with founders and product teams to define product concepts, user journeys, and feature requirements for early-stage digital products.',
        'Designed end-to-end product experiences including information architecture, user flows, wireframes, and high-fidelity interfaces for web and mobile applications.',
        'Rapidly iterated on product ideas through prototyping and feedback cycles in fast-moving startup environments.',
        'Created wireframes, prototypes, and high-fidelity designs using Figma and FigJam for stakeholder collaboration.',
        'Translated business goals and product vision into actionable UX direction and launch-ready product decisions.',
        'Created interactive prototypes and design specifications to support engineering implementation and faster product launches.',
        'Delivered responsive experiences optimized for usability across devices and evolving product requirements.'
      ],
      impact: [],
      tools: [
        { label: 'Design Tools', items: ['Figma', 'FigJam', 'Adobe XD'] },
        { label: 'UX Methods', items: ['Wireframing', 'Prototyping', 'Information Architecture'] },
        { label: 'Product Foundations', items: ['Responsive Design', 'User Flows', 'MVP Product Design'] }
      ] as ToolGroup[]
    },
    {
      title: 'Customer Service Representative',
      company: 'TD Bank',
      location: 'Absecon, NJ',
      period: 'Jan 2014 – Nov 2018',
      description: 'Delivered high-quality customer service while supporting branch operations, compliance standards, and day-to-day banking workflows.',
      highlights: [
        'Assisted customers with account management, transactions, and product education through clear, needs-based communication.',
        'Built strong relationships through proactive support and needs-based recommendations.',
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
            Senior Product Designer with 8+ years designing complex digital products across fintech, SaaS, enterprise systems, and consumer banking. I specialize in AI-assisted systems, operational workflows, analytics tools, and product experiences that help teams interpret information, evaluate risk, and act with confidence.
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
