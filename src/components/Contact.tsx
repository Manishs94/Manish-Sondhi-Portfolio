import React from 'react';
import { Mail, Phone, Send } from 'lucide-react';
import { ContactForm } from './ContactForm';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Contact = () => {
  const { ref: contactRef, isVisible } = useScrollAnimation();

  return (
    <section id="contact" className="py-24 bg-white dark:bg-gray-900 transition-colors duration-300" ref={contactRef}>
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className={`section-heading dark:text-white transition-all duration-700 delay-200 ${isVisible ? 'animate-fade-in opacity-100' : 'opacity-0 translate-y-4'}`}>
            Let's Work Together
          </h2>
          <p className={`section-subheading mx-auto dark:text-gray-300 mb-6 transition-all duration-700 delay-300 ${isVisible ? 'animate-fade-in opacity-100' : 'opacity-0 translate-y-4'}`}>
            I work with product teams and design leaders at fintech, B2B SaaS, and enterprise organizations on complex design challenges.
          </p>
          
          {/* Who this is for */}
          <div className={`bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-8 transition-all duration-700 delay-400 ${isVisible ? 'animate-fade-in opacity-100' : 'opacity-0 translate-y-4'}`}>
            <h3 className="font-semibold text-portfolio-text-dark dark:text-white mb-4 text-sm uppercase tracking-wide">Best fit for:</h3>
            <ul className="text-left max-w-2xl mx-auto space-y-2 text-portfolio-text-light dark:text-gray-300 text-sm">
              <li>• Product & Design Leaders at Fintech / B2B SaaS companies</li>
              <li>• Engineering-led teams building complex internal tools</li>
              <li>• Founders scaling regulated or data-heavy platforms</li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className={`space-y-8 transition-all duration-700 delay-600 ${isVisible ? 'animate-fade-in opacity-100' : 'opacity-0 translate-x-8'}`}>
            {/* Direct Contact */}
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
            </div>

            {/* What happens next */}
            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
              <h3 className="font-semibold text-portfolio-text-dark dark:text-white mb-4">What Happens Next</h3>
              <ol className="space-y-3 text-sm text-portfolio-text-light dark:text-gray-300">
                <li className="flex gap-3">
                  <span className="font-bold text-portfolio-accent flex-shrink-0">1.</span>
                  <span>You submit your inquiry with context about your challenge.</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-portfolio-accent flex-shrink-0">2.</span>
                  <span>I personally review it and respond within 24 business hours.</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-portfolio-accent flex-shrink-0">3.</span>
                  <span>If there's a strong fit, we schedule a call to explore next steps.</span>
                </li>
              </ol>
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