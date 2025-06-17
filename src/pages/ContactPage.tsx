
import React from 'react';
import Navbar from '@/components/Navbar';
import Contact from '@/components/Contact';
import TestimonialsCarousel from '@/components/TestimonialsCarousel';
import NewsletterSignup from '@/components/NewsletterSignup';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';

const ContactPage = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <ScrollProgress />
      <Navbar />
      <main className="pt-16">
        <div className="py-12 bg-white dark:bg-gray-900">
          <div className="section-container">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <h1 className="text-4xl md:text-5xl font-bold text-portfolio-text-dark dark:text-white mb-4">
                Get In Touch
              </h1>
              <p className="text-lg text-portfolio-text-light dark:text-gray-300">
                Let's discuss your project and create something amazing together.
              </p>
            </div>
          </div>
        </div>
        <Contact />
        <TestimonialsCarousel />
        
        {/* Newsletter Section */}
        <section className="py-24">
          <div className="section-container">
            <NewsletterSignup />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
