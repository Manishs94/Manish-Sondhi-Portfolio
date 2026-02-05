import React from 'react';
import { Award, Briefcase, Layers, Monitor, Users, Brain, Shield } from 'lucide-react';
const About = () => {
  const skills = [{
    name: 'Product Design & Strategy',
    icon: <Briefcase size={24} className="text-portfolio-accent" />
  }, {
    name: 'Enterprise & Consumer UX',
    icon: <Monitor size={24} className="text-portfolio-accent" />
  }, {
    name: 'AI-Assisted UX Patterns',
    icon: <Brain size={24} className="text-portfolio-accent" />
  }, {
    name: 'Accessibility & Compliance',
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
              About Me
            </span>
            <h2 className="section-heading">I design enterprise platforms that serve millions</h2>
            <p className="text-lg text-portfolio-text-light mb-6">I'm a <strong>Senior Product Designer</strong> with <strong>8+ years of experience</strong> designing and leading complex <strong>enterprise fintech, B2B, and consumer financial products</strong> at scale. My work focuses on transforming ambiguous business requirements, regulatory constraints, and data-intensive workflows into <strong>clear, accessible, production-ready experiences</strong> that reduce risk, accelerate decisions, and empower users.
            </p>

            <p className="text-lg text-portfolio-text-light mb-6">
              I specialize in <strong>end-to-end product design</strong> for complex enterprise systems: loan origination platforms, underwriting dashboards, collateral management workflows, and portfolio analytics. I'm equally versed in <strong>AI-assisted UX patterns</strong> (guided workflows, conversational interfaces, explainable decision-support) and <strong>accessibility-first design</strong> (WCAG 2.1 compliance, inclusive design practices). My background spans both enterprise B2B platforms and large-scale consumer banking.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              {skills.map((skill, index) => <div key={index} className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-sm">
                  {skill.icon}
                  <h3 className="font-semibold text-portfolio-text-dark">{skill.name}</h3>
                </div>)}
            </div>
            
            <div className="prose prose-blue max-w-none text-portfolio-text-light">
              <p className="mb-4"><strong>Core expertise includes:</strong></p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-portfolio-accent mr-2">▹</span>
                  <span><strong>Enterprise platforms:</strong> Loan origination, underwriting, collateral management, portfolio analytics, risk assessment, and vendor management</span>
                </li>
                <li className="flex items-start">
                  <span className="text-portfolio-accent mr-2">▹</span>
                  <span><strong>AI-assisted UX:</strong> Guided workflows, conversational interfaces, decision-support dashboards, and explainable AI patterns</span>
                </li>
                <li className="flex items-start">
                  <span className="text-portfolio-accent mr-2">▹</span>
                  <span><strong>Accessibility & compliance:</strong> WCAG 2.1 compliance, regulatory-compliant design, audit-ready interfaces, and inclusive design practices</span>
                </li>
                <li className="flex items-start">
                  <span className="text-portfolio-accent mr-2">▹</span>
                  <span><strong>Design systems & scale:</strong> Building reusable component libraries and design patterns across 10+ teams</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;