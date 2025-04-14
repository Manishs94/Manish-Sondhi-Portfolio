
import React from 'react';

const Experience = () => {
  const experiences = [
    {
      title: 'Senior Product Designer',
      company: 'TechCorp Inc.',
      period: '2021 - Present',
      description: 'Led the redesign of the company\'s flagship product, resulting in a 35% increase in user engagement. Managed a team of 3 designers and collaborated with product and engineering teams.',
    },
    {
      title: 'UX Designer',
      company: 'DesignStudio',
      period: '2018 - 2021',
      description: 'Designed user interfaces for various client projects across fintech, healthcare, and e-commerce sectors. Conducted user research and testing to inform design decisions.',
    },
    {
      title: 'UI/UX Designer',
      company: 'CreativeAgency',
      period: '2016 - 2018',
      description: 'Created digital experiences for web and mobile applications. Worked closely with clients to understand requirements and deliver solutions that met their business goals.',
    },
  ];

  return (
    <section id="experience" className="py-24">
      <div className="section-container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-blue-100 text-portfolio-accent rounded-full font-medium mb-4">
            My Experience
          </span>
          <h2 className="section-heading">Work Experience</h2>
          <p className="section-subheading mx-auto">
            I've worked with a variety of organizations from startups to established companies, bringing their visions to life through thoughtful design.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            <div className="absolute left-5 md:left-1/2 h-full w-0.5 bg-gray-200 transform -translate-x-1/2"></div>
            
            {experiences.map((exp, index) => (
              <div 
                key={index} 
                className={`relative flex flex-col md:flex-row gap-8 md:gap-0 items-start mb-12 animate-fade-in`} 
                style={{ animationDelay: `${0.2 * index}s` }}
              >
                <div className="md:w-1/2 md:text-right md:pr-12 order-2 md:order-1">
                  {index % 2 === 0 ? (
                    <>
                      <h3 className="text-xl font-bold text-portfolio-text-dark">{exp.title}</h3>
                      <p className="text-portfolio-accent font-medium">{exp.company}</p>
                      <p className="text-portfolio-text-light mb-4">{exp.period}</p>
                      <p className="text-gray-600">{exp.description}</p>
                    </>
                  ) : (
                    <div className="hidden md:block" />
                  )}
                </div>
                
                <div className="z-10 order-1 md:order-2">
                  <div className="w-10 h-10 bg-portfolio-accent rounded-full flex items-center justify-center text-white">
                    {index + 1}
                  </div>
                </div>
                
                <div className="md:w-1/2 md:pl-12 order-3">
                  {index % 2 === 1 ? (
                    <>
                      <h3 className="text-xl font-bold text-portfolio-text-dark">{exp.title}</h3>
                      <p className="text-portfolio-accent font-medium">{exp.company}</p>
                      <p className="text-portfolio-text-light mb-4">{exp.period}</p>
                      <p className="text-gray-600">{exp.description}</p>
                    </>
                  ) : (
                    <div className="hidden md:block" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
