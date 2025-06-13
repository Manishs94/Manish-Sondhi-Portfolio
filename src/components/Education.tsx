import React from 'react';
import { GraduationCap, Award, ExternalLink } from 'lucide-react';
const Education = () => {
  const education = [{
    degree: 'Bachelor\'s Degree in Information Technology',
    institution: 'Southern New Hampshire University',
    description: 'Graduated with a great learning experience in Information Technology',
    type: 'education'
  }];
  const certifications = [{
    title: 'Google UX Design Professional Certificate',
    issuer: 'Google',
    description: 'Comprehensive certification in UX design principles, research methods, and design tools',
    credentialId: 'YFMCQB9B53QO',
    link: 'https://www.coursera.org/account/accomplishments/specialization/YFMCQB9B53QO',
    image: '/lovable-uploads/40a88f6c-2ff7-46f9-a46b-c70eecdba6e3.png',
    type: 'certification'
  }];
  return <section id="education" className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="section-container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-portfolio-accent rounded-full font-medium mb-4">
            Education & Certifications
          </span>
          <h2 className="section-heading text-white">Learning & Growth</h2>
          <p className="section-subheading text-white">
            My educational background and professional certifications that drive my design expertise.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Education Section */}
          <div>
            <h3 className="text-2xl font-bold text-portfolio-text-dark dark:text-white mb-8 flex items-center gap-3">
              <GraduationCap className="text-portfolio-accent" size={28} />
              Education
            </h3>
            
            {education.map((edu, index) => <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in" style={{
            animationDelay: `${0.1 * index}s`
          }}>
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-portfolio-text-dark dark:text-white mb-2">
                      {edu.degree}
                    </h4>
                    <p className="text-portfolio-accent font-semibold text-lg">
                      {edu.institution}
                    </p>
                  </div>
                </div>
                <p className="text-portfolio-text-light dark:text-gray-300">
                  {edu.description}
                </p>
              </div>)}
          </div>

          {/* Certifications Section */}
          <div>
            <h3 className="text-2xl font-bold text-portfolio-text-dark dark:text-white mb-8 flex items-center gap-3">
              <Award className="text-portfolio-accent" size={28} />
              Certifications
            </h3>
            
            {certifications.map((cert, index) => <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in" style={{
            animationDelay: `${0.1 * (education.length + index)}s`
          }}>
                <div className="flex flex-col lg:flex-row gap-6">
                  {/* Certificate Image */}
                  {cert.image && <div className="flex-shrink-0">
                      <img src={cert.image} alt={`${cert.title} Certificate`} className="w-full lg:w-64 h-48 object-contain rounded-lg border border-gray-200 dark:border-gray-700" />
                    </div>}
                  
                  {/* Certificate Details */}
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-start justify-between mb-4">
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-portfolio-text-dark dark:text-white mb-2">
                          {cert.title}
                        </h4>
                        <p className="text-portfolio-accent font-semibold text-lg mb-3">
                          {cert.issuer}
                        </p>
                        <p className="text-portfolio-text-light dark:text-gray-300 mb-4">
                          {cert.description}
                        </p>
                        
                        {cert.credentialId && <div className="text-sm text-portfolio-text-light dark:text-gray-400 mb-4">
                            <span className="font-medium">Credential ID:</span> {cert.credentialId}
                          </div>}
                      </div>
                      
                      {cert.link && <div className="mt-4 md:mt-0 md:ml-6">
                          <a href={cert.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-portfolio-accent text-white rounded-lg hover:bg-opacity-90 transition-colors duration-300">
                            <span>View Certificate</span>
                            <ExternalLink size={16} />
                          </a>
                        </div>}
                    </div>
                  </div>
                </div>
              </div>)}
          </div>
        </div>
      </div>
    </section>;
};
export default Education;