import React from 'react';
import { Progress } from '@/components/ui/progress';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
interface Skill {
  name: string;
  level: number;
  category: 'design' | 'research' | 'tools' | 'development';
  icon?: string;
}
const skillsData: Skill[] = [
// Design Skills
{
  name: 'UI/UX Design',
  level: 95,
  category: 'design'
}, {
  name: 'Visual Design',
  level: 90,
  category: 'design'
}, {
  name: 'Interaction Design',
  level: 88,
  category: 'design'
}, {
  name: 'Design Systems',
  level: 92,
  category: 'design'
},
// Research Skills
{
  name: 'User Research',
  level: 85,
  category: 'research'
}, {
  name: 'Usability Testing',
  level: 88,
  category: 'research'
}, {
  name: 'Data Analysis',
  level: 80,
  category: 'research'
}, {
  name: 'A/B Testing',
  level: 82,
  category: 'research'
},
// Tools
{
  name: 'Figma',
  level: 95,
  category: 'tools'
}, {
  name: 'Adobe XD',
  level: 88,
  category: 'tools'
}, {
  name: 'Protopie',
  level: 85,
  category: 'tools'
}, {
  name: 'Principle',
  level: 80,
  category: 'tools'
},
// Development
{
  name: 'HTML/CSS',
  level: 85,
  category: 'development'
}, {
  name: 'React',
  level: 75,
  category: 'development'
}, {
  name: 'TypeScript',
  level: 70,
  category: 'development'
}, {
  name: 'Responsive Design',
  level: 90,
  category: 'development'
}];
const categoryColors = {
  design: 'bg-blue-500',
  research: 'bg-green-500',
  tools: 'bg-purple-500',
  development: 'bg-orange-500'
};
const categoryLabels = {
  design: 'Design Skills',
  research: 'Research & Analytics',
  tools: 'Design Tools',
  development: 'Development'
};
const SkillsVisualization = () => {
  const {
    ref,
    isVisible
  } = useScrollAnimation({
    threshold: 0.2
  });
  const groupedSkills = skillsData.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);
  return <section id="skills" className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="section-container" ref={ref}>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-portfolio-accent rounded-full font-medium mb-4">
            Skills & Expertise
          </span>
          <h2 className="section-heading text-white">Technical Proficiency</h2>
          <p className="section-subheading text-white">
            A comprehensive overview of my design and technical capabilities across various domains.
          </p>
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          {Object.entries(groupedSkills).map(([category, skills], categoryIndex) => <div key={category} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg" style={{
          animationDelay: `${categoryIndex * 0.2}s`
        }}>
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-4 h-4 rounded-full ${categoryColors[category as keyof typeof categoryColors]}`} />
                <h3 className="text-xl font-bold text-portfolio-text-dark dark:text-white">
                  {categoryLabels[category as keyof typeof categoryLabels]}
                </h3>
              </div>
              
              <div className="space-y-4">
                {skills.map((skill, index) => <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-portfolio-text-dark dark:text-white">{skill.name}</span>
                      <span className="text-sm text-portfolio-text-light dark:text-gray-400">{skill.level}%</span>
                    </div>
                    <Progress value={isVisible ? skill.level : 0} className="h-2 transition-all duration-1000" style={{
                transitionDelay: `${(categoryIndex * skills.length + index) * 0.1}s`
              }} />
                  </div>)}
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};
export default SkillsVisualization;