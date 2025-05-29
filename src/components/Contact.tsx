
import React from 'react';
import { Mail, Phone, Send } from 'lucide-react';
import { ContactForm } from './ContactForm';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Contact = () => {
  const { ref: contactRef, isVisible } = useScrollAnimation();

  return (
    <section id="contact" className="py-24 bg-white dark:bg-gray-900 transition-colors duration-300" ref={contactRef}>
      <div className="section-container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className={`inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-portfolio-accent rounded-full font-medium mb-4 transition-all duration-700 ${isVisible ? 'animate-fade-in opacity-100' : 'opacity-0 translate-y-4'}`}>
            Contact
          </span>
          <h2 className={`section-heading dark:text-white transition-all duration-700 delay-200 ${isVisible ? 'animate-fade-in opacity-100' : 'opacity-0 translate-y-4'}`}>
            Let's Create Something Amazing Together
          </h2>
          <p className={`section-subheading mx-auto dark:text-gray-300 transition-all duration-700 delay-400 ${isVisible ? 'animate-fade-in opacity-100' : 'opacity-0 translate-y-4'}`}>
            Ready to transform your ideas into exceptional user experiences? Let's discuss your project.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className={`space-y-8 transition-all duration-700 delay-600 ${isVisible ? 'animate-fade-in opacity-100' : 'opacity-0 translate-x-8'}`}>
            <div>
              <h3 className="text-2xl font-bold text-portfolio-text-dark dark:text-white mb-6">Get in Touch</h3>
              <p className="text-portfolio-text-light dark:text-gray-300 mb-8">
                I'm always open to discussing new opportunities, interesting projects, and creative collaborations.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg transition-colors duration-300">
                <div className="bg-portfolio-accent text-white p-3 rounded-full">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="font-medium text-portfolio-text-dark dark:text-white">Email</p>
                  <p className="text-portfolio-text-light dark:text-gray-300">Manishsondhi94@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg transition-colors duration-300">
                <div className="bg-portfolio-accent text-white p-3 rounded-full">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="font-medium text-portfolio-text-dark dark:text-white">Phone</p>
                  <p className="text-portfolio-text-light dark:text-gray-300">+1 (609) 816-5121</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-portfolio-accent to-blue-600 p-6 rounded-lg text-white">
              <h4 className="font-bold mb-2">Quick Response Guaranteed</h4>
              <p className="text-blue-100">I typically respond to all inquiries within 24 hours during business days.</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`transition-all duration-700 delay-800 ${isVisible ? 'animate-fade-in opacity-100' : 'opacity-0 translate-x-8'}`}>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
