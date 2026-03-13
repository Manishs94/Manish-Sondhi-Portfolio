import React from 'react';
import { Mail, Phone } from 'lucide-react';
import { ContactForm } from './ContactForm';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Contact = () => {
  const { ref: contactRef, isVisible } = useScrollAnimation();

  return (
    <section id="contact" className="py-24 bg-white dark:bg-gray-900 transition-colors duration-300" ref={contactRef}>
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className={`section-heading dark:text-white transition-all duration-700 delay-200 ${isVisible ? 'animate-fade-in opacity-100' : 'opacity-0 translate-y-4'}`}>
            Let&apos;s talk about senior product design roles
          </h2>
          <p className={`section-subheading mx-auto dark:text-gray-300 mb-6 transition-all duration-700 delay-300 ${isVisible ? 'animate-fade-in opacity-100' : 'opacity-0 translate-y-4'}`}>
            I&apos;m open to senior product design roles and opportunities where teams are building complex products, data platforms, or intelligent systems.
            <br /><br />
            For hiring conversations, the fastest way to reach me is via email or LinkedIn.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className={`space-y-8 transition-all duration-700 delay-600 ${isVisible ? 'animate-fade-in opacity-100' : 'opacity-0 translate-x-8'}`}>
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
                  <p className="text-portfolio-text-light dark:text-gray-300">(609)-816-5121</p>
                </div>
              </div>
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
