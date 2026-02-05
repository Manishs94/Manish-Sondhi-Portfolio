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
      title: 'Lead Product Designer – Enterprise Platforms & B2B Products',
      company: 'CYNC Software',
      location: 'Tampa, FL',
      period: 'Feb 2022 – Present',
      description: 'Design lead for enterprise fintech platforms supporting loan origination, underwriting, collateral management, analytics, and risk workflows. Owned end-to-end design for complex, data-driven enterprise systems, translating regulatory requirements, risk constraints, and multi-stakeholder needs into clear, accessible, production-ready workflows.',
      highlights: [
        'Led end-to-end design of modular enterprise lending platform serving financial institutions with complex lending workflows, strict regulatory compliance, and multi-stakeholder alignment.',
        'Designed AI-assisted UX features: guided workflows for complex tasks (appraisal configuration, risk assessment), conversational interfaces for compliance checks, and explainable decision-support dashboards.',
        'Established reusable design system with 15+ component patterns across lending, analytics, and admin modules—reducing development rework and ensuring consistency across 12+ development teams.',
        'Designed decision-support dashboards and analytics platforms enabling enterprise users to monitor performance, risk, and portfolio health with clarity and confidence.',
        'Ensured WCAG 2.1 accessibility compliance across all platforms—creating accessible data visualizations, keyboard-navigable interfaces, and screen reader support.',
        'Acted as screen- and workflow-level design authority, collaborating with product managers, engineers, AI/ML teams, risk, and compliance stakeholders to balance business objectives, technical constraints, and user needs.',
        'Conducted user research, usability testing, and accessibility audits to inform design decisions and validate solutions across enterprise workflows.'
      ],
      impact: [
        { metric: 'Improved operational efficiency across multi-module platforms', icon: '🎯' },
        { metric: 'Increased adoption through clearer system states and workflows', icon: '📈' },
        { metric: 'Established accessibility and UI standards across products', icon: '♿' },
        { metric: 'Full WCAG 2.1 compliance across all platforms', icon: '✓' }
      ],
      tools: ['Figma', 'Adobe XD', 'Jira', 'Confluence', 'Miro', 'Protopie', 'UserTesting', 'ChatGPT', 'Angular', 'React', 'TypeScript', 'WCAG 2.1']
    },
    {
      title: 'Senior UI/UX Designer – Mobile Consumer Banking',
      company: 'Bank of America',
      location: 'New York, NY',
      period: 'Nov 2018 – Feb 2022',
      description: 'Contributed to digital banking experiences for 68M+ users through improved mobile and desktop interfaces. Applied research-backed design, accessibility standards, and cross-functional collaboration to deliver high-impact consumer fintech products. Redesigned core banking workflows including bill payment, transfers, and account management.',
      highlights: [
        'Redesigned mobile bill payment and fund transfer workflows, improving clarity of payment scheduling, tracking, and transaction history for millions of users.',
        'Conducted extensive user research and usability testing with 40+ participants, translated findings into wireframes, prototypes, and high-fidelity designs.',
        'Performed accessibility testing and led WCAG 2.1 compliance reviews across all banking experiences—color contrast, keyboard navigation, screen reader support.',
        'Delivered high-fidelity prototypes and design systems aligned with enterprise standards. Partnered with engineering teams using Angular, TypeScript, and CSS3.',
        'Conducted analytics review, A/B testing, and iterative design improvements to optimize workflow efficiency and user satisfaction.',
        'Collaborated with product managers, researchers, and engineers to balance user needs, business objectives, and technical constraints.'
      ],
      impact: [
        { metric: '40% improvement in task completion rates', icon: '📈' },
        { metric: '25% increase in feature adoption', icon: '✓' },
        { metric: '35% reduction in support tickets for bill pay', icon: '🔻' },
        { metric: 'Full WCAG 2.1 accessibility compliance at scale', icon: '♿' }
      ],
      tools: ['Figma', 'Adobe XD', 'InVision', 'Sketch', 'Angular', 'TypeScript', 'Jira', 'Confluence', 'Google Analytics', 'UserTesting', 'WCAG']
    },
    {
      title: 'Freelance UI/UX Designer',
      company: 'Innovative Design Studio',
      location: 'Freelance',
      period: 'Jan 2018 – Nov 2018',
      description: 'Contributed to multiple startup and nonprofit projects, applying human-centered design principles to early-stage products. Created research-backed designs, responsive layouts, and visual systems for web and mobile MVPs.',
      highlights: [
        'Created low-fidelity wireframes and high-fidelity prototypes for startup and nonprofit clients based on user research and requirements.',
        'Conducted user interviews, surveys, and heuristic evaluations to inform product direction and feature prioritization.',
        'Designed mobile-first responsive layouts optimized for various screen sizes and devices.',
        'Built comprehensive style guides, icon sets, and UI asset libraries for client handoffs and developer implementation.',
        'Collaborated in brainstorming and design workshops to shape product vision and user experience strategy.',
        'Focused on accessibility and inclusive design principles across all projects.'
      ],
      impact: [],
      tools: ['Sketch', 'Adobe Illustrator', 'Photoshop', 'InVision', 'User Interviews', 'Heuristic Evaluation', 'Wireframing', 'Agile Collaboration']
    },
    {
      title: 'Customer Service Representative',
      company: 'TD Bank',
      location: 'Absecon, NJ',
      period: 'Jan 2014 – Nov 2018',
      description: 'Delivered high-quality customer service and operational support to banking customers. This experience provided valuable insights into user pain points, customer frustrations, and real-world banking workflows—informing later UX design work.',
      highlights: [
        'Provided customer support across banking products and services, understanding user pain points and workflow challenges.',
        'Gained deep insight into customer frustrations with digital banking interfaces and processes.',
        'Collaborated with operations and management to identify process improvements and customer experience opportunities.',
        'Developed empathy for diverse user needs and accessibility challenges in financial services.'
      ],
      impact: [],
      tools: ['Customer Service', 'Banking Systems', 'User Empathy', 'Problem Solving']
    }
  ];

  return (
    <section id="experience" className="py-24 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-heading dark:text-white">Work Experience</h2>
          <p className="section-subheading mx-auto dark:text-gray-300 mb-8">
            Senior Product & UX Designer with 8+ years of experience designing enterprise fintech platforms and consumer banking products. Specialized in complex, data-driven workflows, AI-assisted decision support, accessibility-first design, and regulatory-compliant systems. Experienced design lead partnering with product, engineering, risk, and compliance teams across large-scale organizations.
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