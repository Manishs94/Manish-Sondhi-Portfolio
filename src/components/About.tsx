
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
              <img src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" alt="About Me" className="w-full h-auto rounded-xl" />
            </div>
            <div className="absolute -top-6 -right-6 w-full h-full border-2 border-portfolio-accent rounded-xl z-0"></div>
            <div className="absolute right-10 -bottom-10 bg-white p-4 rounded-lg shadow-lg">
              <div className="flex items-center gap-2">
                <Award size={24} className="text-portfolio-accent" />
                <div>
                  <p className="text-sm text-portfolio-text-light">Experience</p>
                  <p className="text-xl font-bold text-portfolio-text-dark">8+ Years</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <span className="inline-block px-4 py-2 bg-blue-100 text-portfolio-accent rounded-full font-medium mb-4">
              About Me
            </span>
            <h2 className="section-heading">I design products that delight users and help businesses grow</h2>
            <p className="text-lg text-portfolio-text-light mb-6">I'm a Product and UI/UX Designer with 7 years of experience designing user-centered digital solutions that not only delight users but also drive measurable business outcomes. My work spans across fintech, SaaS, and enterprise platforms, with a focus on solving real-world problems through thoughtful design, usability, and strategy.
            </p>

            <p className="text-lg text-portfolio-text-light mb-6">
              At the core of my design philosophy is a deep understanding of user behavior, stakeholder goals, and technical constraints. I approach every project by aligning product vision with user needs—starting from research and ideation, through wireframes and high-fidelity UI, to developer-ready handoffs and post-launch iteration.
            </p>

            <p className="text-lg text-portfolio-text-light mb-6">
              My approach centers on deeply understanding user needs and business objectives, then crafting solutions that balance both. I believe in collaborative design processes and data-informed decisions.
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
                  <span>Turning complex workflows into intuitive interfaces—whether it's a loan origination system, an admin dashboard, or a schema-based form builder</span>
                </li>
                <li className="flex items-start">
                  <span className="text-portfolio-accent mr-2">▹</span>
                  <span>Design systems that ensure consistency and scalability across web and mobile platforms</span>
                </li>
                <li className="flex items-start">
                  <span className="text-portfolio-accent mr-2">▹</span>
                  <span>Collaborative design processes, working closely with product managers, developers, and cross-functional teams in Agile environments</span>
                </li>
                <li className="flex items-start">
                  <span className="text-portfolio-accent mr-2">▹</span>
                  <span>Using tools like Figma, Adobe XD, and Protopie, along with platforms like Jira, Confluence, and Miro for smooth end-to-end delivery</span>
                </li>
              </ul>
              <p>
                I believe great design is part empathy, part logic, and part craft. My goal is always to create experiences that are seamless, accessible, and scalable—balancing visual clarity with functional depth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;
