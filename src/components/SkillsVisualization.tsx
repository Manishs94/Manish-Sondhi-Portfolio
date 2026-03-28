import React from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Check } from 'lucide-react';

interface SkillCategory {
  title: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: 'AI Product Design',
    skills: [
      'Human-AI Interaction',
      'AI-Assisted Workflows',
      'AI Decision-Support Systems',
      'Explainable AI Interfaces',
      'Human-in-the-Loop Systems',
      'AI Trust & Transparency'
    ]
  },
  {
    title: 'Product & Interaction Design',
    skills: [
      'End-to-End Product Design',
      'UX Strategy',
      'Interaction Design',
      'Information Architecture',
      'Complex Workflow Design',
      'Dashboard & Data Visualization UX'
    ]
  },
  {
    title: 'Research, Systems & Impact',
    skills: [
      'User Research',
      'Usability Testing',
      'Design Systems',
      'Component Libraries',
      'Data-Driven Design',
      'Conversion-Focused UX'
    ]
  },
  {
    title: 'Tools & Collaboration',
    skills: [
      'Figma',
      'FigJam',
      'Miro',
      'Adobe XD',
      'Jira & Confluence',
      'Cross-Functional Collaboration'
    ]
  }
];

const SkillsVisualization = () => {
  const {
    ref,
    isVisible
  } = useScrollAnimation({
    threshold: 0.2
  });

  return <section id="skills" className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="section-container" ref={ref}>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-portfolio-accent rounded-full font-medium mb-4">
            Skills & Expertise
          </span>
          <h2 className="section-heading dark:text-white">Core Capabilities</h2>
          <p className="section-subheading">
            Core capabilities drawn directly from hands-on work in AI-assisted systems, enterprise fintech, consumer banking, and scalable product design.
          </p>
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          {skillCategories.map((category, categoryIndex) => <div key={category.title} className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300" style={{
          animationDelay: `${categoryIndex * 0.2}s`
        }}>
              <h3 className="text-xl font-bold text-portfolio-text-dark dark:text-white mb-6">
                {category.title}
              </h3>
              
              <div className="space-y-3">
                {category.skills.map((skill, index) => <div key={skill} className="flex items-center gap-3 transition-transform duration-300 hover:translate-x-1" style={{
                transitionDelay: `${(categoryIndex * category.skills.length + index) * 0.05}s`
              }}>
                    <Check className="text-portfolio-accent flex-shrink-0" size={18} />
                    <span className="text-portfolio-text-light dark:text-gray-300 font-medium">
                      {skill}
                    </span>
                  </div>)}
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};
export default SkillsVisualization;
