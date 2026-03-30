import React from 'react';
import { Briefcase, Monitor, Brain, Shield } from 'lucide-react';
const About = () => {
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
  return <section id="about" className="py-24 bg-portfolio-bg-light">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="relative z-10 rounded-xl overflow-hidden">
              <img alt="Manish Sondhi - Senior Product Designer" className="w-full h-auto rounded-xl" src="/lovable-uploads/6f0b8c00-1540-45e5-95d0-c41efc358c2a.jpg" />
            </div>
            <div className="absolute -top-6 -right-6 w-full h-full border-2 border-portfolio-accent rounded-xl z-0"></div>
            
          </div>
          
          <div>
            <span className="inline-block px-4 py-2 bg-blue-100 text-portfolio-accent rounded-full font-medium mb-4">
              About
            </span>
            <h2 className="section-heading">Senior Product Designer for enterprise systems, AI-enabled workflows, and complex operational platforms</h2>
            <p className="text-lg text-portfolio-text-light mb-6">
              I&apos;m a Senior Product Designer with 8+ years designing enterprise systems where the cost of a bad UX decision is real — regulated workflows, high-stakes operational decisions, and complex multi-role platforms used by analysts, operators, and business teams. Proven ability to translate dense technical and compliance requirements into clear, scalable product experiences that people actually trust and use.
            </p>

            <p className="text-lg text-portfolio-text-light mb-6">
              Background spans financial services, enterprise SaaS, and AI-assisted decision platforms — with deep experience in workflow architecture, design systems, and cross-functional leadership across product, engineering, and compliance stakeholders. Equally at home designing for clinicians, analysts, case managers, underwriters, or operations teams: the discipline is the same, the domain changes.
            </p>

            <p className="text-lg text-portfolio-text-light mb-6">
              Actively targeting senior product design and design lead roles at enterprise software companies, regulated-industry platforms, and mission-critical SaaS products.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              {skills.map((skill, index) => <div key={index} className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-sm">
                  {skill.icon}
                  <h3 className="font-semibold text-portfolio-text-dark">{skill.name}</h3>
                </div>)}
            </div>
            
            <div className="prose prose-blue max-w-none text-portfolio-text-light">
              <p className="mb-4"><strong>What I design:</strong></p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-portfolio-accent mr-2">▹</span>
                  <span><strong>Enterprise & regulated workflows:</strong> Multi-role platforms for analysts, operators, underwriters, and compliance teams navigating high-stakes decisions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-portfolio-accent mr-2">▹</span>
                  <span><strong>AI-assisted decision interfaces:</strong> Explainable signals, confidence indicators, human override controls, and audit-ready interaction patterns</span>
                </li>
                <li className="flex items-start">
                  <span className="text-portfolio-accent mr-2">▹</span>
                  <span><strong>Complex operational systems:</strong> Multi-module platforms with parent-child record architecture, role-based access, and compliance-driven workflow states</span>
                </li>
                <li className="flex items-start">
                  <span className="text-portfolio-accent mr-2">▹</span>
                  <span><strong>Scalable design systems:</strong> 60+ component libraries across Angular and React platforms, cutting design-to-dev handoff cycles significantly</span>
                </li>
                <li className="flex items-start">
                  <span className="text-portfolio-accent mr-2">▹</span>
                  <span><strong>Cross-functional alignment:</strong> Translating regulatory, compliance, and business requirements into actionable product specifications across HIPAA, legal, and insurance contexts</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;
