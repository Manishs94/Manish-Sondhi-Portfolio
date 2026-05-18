import { Briefcase, Monitor, Brain, Shield } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const About = () => {
  const { ref: imageRef, isVisible: imageVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation({ threshold: 0.15 });

  const skills = [{
    name: 'Enterprise & Regulated-Industry UX',
    icon: <Briefcase size={24} className="text-portfolio-accent" />
  }, {
    name: 'AI-Assisted Workflow Design',
    icon: <Brain size={24} className="text-portfolio-accent" />
  }, {
    name: 'Design Systems & Component Libraries',
    icon: <Monitor size={24} className="text-portfolio-accent" />
  }, {
    name: 'Workflow Architecture & IA',
    icon: <Shield size={24} className="text-portfolio-accent" />
  }];

  return (
    <section id="about" className="py-24 bg-portfolio-bg-light dark:bg-gray-900 transition-colors duration-300">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Image column — slides in from left */}
          <div
            ref={imageRef}
            className={`relative transition-all duration-700 ${imageVisible ? 'opacity-100 translate-x-0 animate-fade-in-left' : 'opacity-0 -translate-x-8'}`}
          >
            <div className="relative z-10 rounded-xl overflow-hidden transition-transform duration-700 hover:scale-[1.02] hover:shadow-xl">
              <img
                alt="Manish Sondhi - Senior Product Designer"
                className="w-full h-auto rounded-xl"
                src="/lovable-uploads/6f0b8c00-1540-45e5-95d0-c41efc358c2a.jpg"
              />
            </div>
            <div className="absolute -top-6 -right-6 w-full h-full border-2 border-portfolio-accent rounded-xl z-0 animate-border-pulse"></div>
          </div>

          {/* Content column — slides in from right */}
          <div
            ref={contentRef}
            className={`transition-all duration-700 delay-200 ${contentVisible ? 'opacity-100 translate-x-0 animate-fade-in-right' : 'opacity-0 translate-x-8'}`}
          >
            <span className={`inline-block px-4 py-2 bg-blue-100 text-portfolio-accent rounded-full font-medium mb-4 transition-all duration-500 ${contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              About
            </span>
            <h2 className={`section-heading dark:text-white transition-all duration-600 delay-100 ${contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              Senior Product Designer for enterprise systems, AI-enabled workflows, and complex operational platforms
            </h2>
            <p className={`text-lg text-portfolio-text-light dark:text-gray-300 mb-6 transition-all duration-600 delay-200 ${contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              I&apos;m a Senior Product Designer with 8+ years designing enterprise systems where the cost of a bad UX decision is real — regulated workflows, high-stakes operational decisions, and complex multi-role platforms used by analysts, operators, and business teams. Proven ability to translate dense technical and compliance requirements into clear, scalable product experiences that people actually trust and use.
            </p>

            <p className={`text-lg text-portfolio-text-light dark:text-gray-300 mb-6 transition-all duration-600 delay-300 ${contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              Background spans financial services, enterprise SaaS, and AI-assisted decision platforms — with deep experience in workflow architecture, design systems, and cross-functional leadership across product, engineering, and compliance stakeholders. Equally at home designing for clinicians, analysts, case managers, underwriters, or operations teams: the discipline is the same, the domain changes.
            </p>

            <p className={`text-lg text-portfolio-text-light dark:text-gray-300 mb-6 transition-all duration-600 delay-400 ${contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              Actively targeting senior product design and design lead roles at enterprise software companies, regulated-industry platforms, and mission-critical SaaS products.
            </p>

            {/* Skill cards — staggered scale-in */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm transition-all duration-500 hover:shadow-md hover:-translate-y-1 hover:border-l-4 hover:border-portfolio-accent ${contentVisible ? 'opacity-100 scale-100 animate-scale-in' : 'opacity-0 scale-90'}`}
                  style={{ animationDelay: `${300 + index * 100}ms`, animationFillMode: 'both' }}
                >
                  <div className="transition-transform duration-300 hover:scale-110">
                    {skill.icon}
                  </div>
                  <h3 className="font-semibold text-portfolio-text-dark dark:text-white">{skill.name}</h3>
                </div>
              ))}
            </div>

            <div className={`prose prose-blue max-w-none text-portfolio-text-light dark:text-gray-300 transition-all duration-700 delay-700 ${contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <p className="mb-4"><strong>What I design:</strong></p>
              <ul className="space-y-2 mb-6">
                {[
                  { label: 'Enterprise & regulated workflows:', text: 'Multi-role platforms for analysts, operators, underwriters, and compliance teams navigating high-stakes decisions' },
                  { label: 'AI-assisted decision interfaces:', text: 'Explainable signals, confidence indicators, human override controls, and audit-ready interaction patterns' },
                  { label: 'Complex operational systems:', text: 'Multi-module platforms with parent-child record architecture, role-based access, and compliance-driven workflow states' },
                  { label: 'Scalable design systems:', text: '60+ component libraries across Angular and React platforms, cutting design-to-dev handoff cycles significantly' },
                  { label: 'Cross-functional alignment:', text: 'Translating regulatory, compliance, and business requirements into actionable product specifications across HIPAA, legal, and insurance contexts' },
                ].map((item, idx) => (
                  <li
                    key={idx}
                    className={`flex items-start transition-all duration-500 hover:translate-x-1 ${contentVisible ? 'opacity-100' : 'opacity-0'}`}
                    style={{ transitionDelay: `${700 + idx * 80}ms` }}
                  >
                    <span className="text-portfolio-accent mr-2">▹</span>
                    <span><strong>{item.label}</strong> {item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
