import React from 'react';
import { Award, Briefcase, Layers, Monitor, Users } from 'lucide-react';
const About = () => {
  const skills = [{
    name: 'UI/UX Design',
    icon: <Monitor size={24} className="text-portfolio-accent" />
  }, {
    name: 'Product Strategy',
    icon: <Layers size={24} className="text-portfolio-accent" />
  }, {
    name: 'User Research',
    icon: <Users size={24} className="text-portfolio-accent" />
  }, {
    name: 'Design Leadership',
    icon: <Briefcase size={24} className="text-portfolio-accent" />
  }];
  return <section id="about" className="py-24 bg-portfolio-bg-light">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="relative z-10 rounded-xl overflow-hidden">
              <img alt="About Me" className="w-full h-auto rounded-xl" src="/lovable-uploads/6f0b8c00-1540-45e5-95d0-c41efc358c2a.jpg" />
            </div>
            <div className="absolute -top-6 -right-6 w-full h-full border-2 border-portfolio-accent rounded-xl z-0"></div>
            
          </div>
          
          <div>
            <span className="inline-block px-4 py-2 bg-blue-100 text-portfolio-accent rounded-full font-medium mb-4">
              About Me
            </span>
            <h2 className="section-heading">I design enterprise fintech systems that scale</h2>
            <p className="text-lg text-portfolio-text-light mb-6">I'm a <strong>Senior Product Designer</strong> with <strong>8+ years of experience</strong> designing and delivering complex <strong>enterprise and consumer financial products</strong> at scale. My work focuses on transforming ambiguous business requirements, regulatory constraints, and data-intensive workflows into <strong>clear, production-ready user experiences</strong>.
            </p>

            <p className="text-lg text-portfolio-text-light mb-6">
              I specialize in <strong>enterprise fintech platforms</strong>, including loan origination, collateral management, underwriting, analytics, and risk workflows. I've partnered closely with product, engineering, risk, and compliance teams to shape solutions from early problem definition through execution across <strong>web and mobile platforms</strong>.
            </p>

            <p className="text-lg text-portfolio-text-light mb-6">
              My design approach is deeply rooted in <strong>usability, accessibility, and decision support</strong>. I focus on structuring information, workflows, and system states in a way that helps users make confident decisions in high-stakes environments. From dashboards and advanced tables to multi-step forms and configuration-driven interfaces, I design systems that are scalable, consistent, and easy to operate.
            </p>

            <p className="text-lg text-portfolio-text-light mb-6">
              I also bring experience designing <strong>AI-assisted and guided UX patterns</strong>, including conversational flows, contextual assistance, and decision-support interfaces. I care deeply about explainability, trust, and transparency—especially when intelligent systems are involved.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              {skills.map((skill, index) => <div key={index} className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-sm">
                  {skill.icon}
                  <h3 className="font-semibold text-portfolio-text-dark">{skill.name}</h3>
                </div>)}
            </div>
            
            <div className="prose prose-blue max-w-none text-portfolio-text-light">
              <p className="mb-4">I specialize in:</p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <span className="text-portfolio-accent mr-2">▹</span>
                  <span><strong>Data-dense enterprise applications</strong>—dashboards, advanced tables, multi-step forms, and configuration-driven interfaces that make complex workflows transparent and navigable</span>
                </li>
                <li className="flex items-start">
                  <span className="text-portfolio-accent mr-2">▹</span>
                  <span><strong>AI-assisted UX design</strong>—conversational flows, guided workflows, decision-support interfaces, and explainable AI patterns that users can trust</span>
                </li>
                <li className="flex items-start">
                  <span className="text-portfolio-accent mr-2">▹</span>
                  <span><strong>Accessibility-first design</strong>—WCAG compliance, inclusive patterns, and usability for users with diverse abilities in high-stakes financial workflows</span>
                </li>
                <li className="flex items-start">
                  <span className="text-portfolio-accent mr-2">▹</span>
                  <span><strong>Design systems and component thinking</strong>—establishing reusable patterns, consistent UI language, and scaled design practices across products</span>
                </li>
                <li className="flex items-start">
                  <span className="text-portfolio-accent mr-2">▹</span>
                  <span><strong>Cross-functional collaboration</strong>—working closely with product, engineering, risk, and compliance stakeholders in Agile environments</span>
                </li>
              </ul>
              <p>
                At my core, I believe great product design sits at the intersection of <strong>empathy, logic, and craft</strong>—balancing business goals, technical feasibility, and real user needs to create experiences that are intuitive, accessible, and durable over time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;