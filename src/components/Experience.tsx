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
      title: 'Lead Product & UI/UX Designer',
      company: 'CYNC Software',
      location: 'Tampa, FL',
      period: 'Feb 2022 – Present',
      description: 'As the lead designer at CYNC Software, I\'ve owned the end-to-end user experience for a suite of enterprise SaaS products in the commercial lending space. My work has focused on solving complex B2B workflows, improving usability across modules, and aligning design with product and business strategy.',
      highlights: [
        'Collaborated directly with the CEO, product managers, and developers to define product vision and prioritize features across modules such as Collateral, Exposure, Analytics, and Relationship Management.',
        'Led user research and usability testing, applying journey mapping, surveys, and A/B testing to identify friction points and increase adoption.',
        'Created interactive prototypes and wireframes using Adobe XD, translating research insights into scalable design solutions.',
        'Built and maintained a modular design system, aligning UI components and brand standards across multiple product verticals.',
        'Partnered with engineering to ensure seamless design-to-development handoff using Agile sprints and tools like Jira, Confluence, and Miro.',
        'Ensured WCAG 2.2 accessibility compliance and responsive behavior across all devices.'
      ],
      impact: [
        { metric: '20% increase in user engagement', icon: '🚀' },
        { metric: '25% reduction in onboarding friction', icon: '⏱' },
        { metric: '30% improvement in usability scores', icon: '🎯' },
        { metric: '10% faster dev cycles', icon: '🔁' }
      ],
      tools: ['Figma', 'Adobe XD', 'Sketch', 'Google Analytics', 'Miro', 'Jira', 'Confluence', 'React', 'Angular', 'TypeScript', 'HTML5', 'CSS3', 'WCAG 2.2']
    },
    {
      title: 'UI/UX Designer',
      company: 'Bank of America',
      location: 'New York, NY',
      period: 'Nov 2018 – Feb 2022',
      description: 'At Bank of America, I helped redefine digital banking workflows for millions of users through improved mobile and desktop experiences. I contributed to key product initiatives by applying research-backed design, accessibility, and cross-functional collaboration.',
      highlights: [
        'Designed and launched the Bill Payment feature for the bank\'s mobile app, resulting in a 25% increase in adoption.',
        'Created user personas and journey maps, translating customer feedback into actionable design improvements.',
        'Conducted usability testing, A/B experiments, and heatmap analysis to optimize interface structure and navigation.',
        'Delivered high-fidelity prototypes aligned with BofA\'s design system and partnered with front-end teams using Angular, TypeScript, HTML5, and CSS3.',
        'Led accessibility testing to ensure compliance with WCAG standards and make banking more inclusive for all users.'
      ],
      impact: [
        { metric: '15% increase in task completion', icon: '📈' },
        { metric: '10% reduction in drop-off rates', icon: '🔻' },
        { metric: '20% lower redesign costs', icon: '💡' },
        { metric: 'Full accessibility compliance', icon: '♿' }
      ],
      tools: ['Figma', 'Adobe XD', 'InVision', 'Sketch', 'Angular', 'TypeScript', 'Jira', 'Confluence', 'Google Analytics', 'Heatmaps', 'WCAG', 'User Research']
    },
    {
      title: 'Junior UI/UX Designer',
      company: 'Innovative Design Studio',
      location: 'Freelance',
      period: 'Jan 2018 – Nov 2018',
      description: 'I worked on multiple early-stage projects, contributing to research, UX flows, and UI visuals under the guidance of senior designers. This role gave me foundational hands-on experience in applying human-centered design principles to real client problems.',
      highlights: [
        'Created low-fidelity wireframes and prototypes for startup and nonprofit clients',
        'Supported research through user interviews, surveys, and usability documentation',
        'Collaborated in brainstorming sessions to shape product direction and features',
        'Built UI assets and interactive prototypes using Sketch and Illustrator',
        'Focused on mobile-first responsive design and visual hierarchy',
        'Developed mini style guides and icon sets for client handoffs'
      ],
      impact: [],
      tools: ['Sketch', 'Adobe Illustrator', 'Photoshop', 'User Surveys', 'Heuristic Evaluation', 'Wireframing', 'Agile Collaboration']
    }
  ];

  return (
    <section id="experience" className="py-24 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="section-container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="section-heading dark:text-white">Work Experience</h2>
          <p className="section-subheading mx-auto dark:text-gray-300">
            I've worked with a variety of organizations from startups to established companies, bringing their visions to life through thoughtful design.
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