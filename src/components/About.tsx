import React from 'react';
import { Briefcase, Monitor, Brain, Shield } from 'lucide-react';
const About = () => {
  const skills = [{
    name: 'Product Design & Strategy',
    icon: <Briefcase size={24} className="text-portfolio-accent" />
  }, {
    name: 'Enterprise, SaaS & Fintech UX',
    icon: <Monitor size={24} className="text-portfolio-accent" />
  }, {
    name: 'AI-Assisted Workflows',
    icon: <Brain size={24} className="text-portfolio-accent" />
  }, {
    name: 'Design Systems & Scale',
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
            <h2 className="section-heading">Senior Product Designer for AI-enabled systems, product UX, and complex workflows</h2>
            <p className="text-lg text-portfolio-text-light mb-6">
              I&apos;m a Senior Product Designer with 8+ years of experience designing complex digital products across fintech, SaaS, enterprise systems, and consumer banking.
            </p>

            <p className="text-lg text-portfolio-text-light mb-6">
              I design for analysts, operators, business teams, and customers working across data, automation, and decision-heavy workflows. My focus is on AI-assisted systems, decision-support platforms, and operational products where users need to interpret information quickly and act with confidence.
            </p>

            <p className="text-lg text-portfolio-text-light mb-6">
              My strength is translating complex product logic, analytics, and machine-generated insights into clear product experiences through strong UX craft, workflow thinking, research, and scalable design systems. I&apos;m especially effective on products that need explainability, cross-functional alignment, and foundations that can evolve with the platform.
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
                  <span><strong>Decision-heavy workflows:</strong> Guided experiences for review, approvals, exceptions, and next-step clarity</span>
                </li>
                <li className="flex items-start">
                  <span className="text-portfolio-accent mr-2">▹</span>
                  <span><strong>AI-assisted product experiences:</strong> Intelligent workflows with explainable guidance, confidence cues, clear system feedback, and human oversight</span>
                </li>
                <li className="flex items-start">
                  <span className="text-portfolio-accent mr-2">▹</span>
                  <span><strong>Multi-user systems:</strong> Shared environments for analysts, operators, managers, and customers working from the same source of truth</span>
                </li>
                <li className="flex items-start">
                  <span className="text-portfolio-accent mr-2">▹</span>
                  <span><strong>Scalable product foundations:</strong> Reusable patterns, design systems, and flexible interaction models built for growing platforms</span>
                </li>
                <li className="flex items-start">
                  <span className="text-portfolio-accent mr-2">▹</span>
                  <span><strong>Content-driven product UX:</strong> Flexible interfaces for messaging, lifecycle touchpoints, and CMS-like content structures that support iteration and adoption</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;
