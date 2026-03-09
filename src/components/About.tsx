import React from 'react';
import { Briefcase, Monitor, Brain, Shield } from 'lucide-react';
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
            <h2 className="section-heading">I design complex products around clarity, usability, and adoption</h2>
            <p className="text-lg text-portfolio-text-light mb-6">I'm a <strong>Senior Product Designer</strong> with <strong>8+ years of experience</strong> designing complex <strong>enterprise and consumer digital products</strong> across fintech, SaaS, and data-driven platforms. My work focuses on transforming complex workflows, operational systems, and analytics-heavy experiences into <strong>intuitive, user-centered products</strong> that improve efficiency, usability, and product adoption.
            </p>

            <p className="text-lg text-portfolio-text-light mb-6">
              I specialize in <strong>end-to-end product design</strong>, including user research, information architecture, interaction design, usability testing, and design systems. My background spans enterprise lending platforms, collateral workflows, portfolio analytics, and consumer banking experiences, with additional focus on <strong>AI-assisted UX</strong>, reusable component systems, and cross-functional collaboration with product, engineering, and business stakeholders.
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
                  <span><strong>Enterprise platforms:</strong> Loan origination, collateral management, security-based lending workflows, portfolio analytics, and operational dashboards</span>
                </li>
                <li className="flex items-start">
                  <span className="text-portfolio-accent mr-2">▹</span>
                  <span><strong>AI-assisted UX:</strong> Guided workflows, conversational interfaces, contextual guidance, and explainable decision-support patterns</span>
                </li>
                <li className="flex items-start">
                  <span className="text-portfolio-accent mr-2">▹</span>
                  <span><strong>Design systems:</strong> Reusable UI patterns, component standards, design consistency, and scalable cross-product experiences</span>
                </li>
                <li className="flex items-start">
                  <span className="text-portfolio-accent mr-2">▹</span>
                  <span><strong>Research and optimization:</strong> User research, usability testing, workflow analysis, and data-informed iteration to improve adoption and task success</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;
