
import React from 'react';
import Navbar from '@/components/Navbar';
import Contact from '@/components/Contact';
import TestimonialsCarousel from '@/components/TestimonialsCarousel';
import NewsletterSignup from '@/components/NewsletterSignup';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';

const ContactPage = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <ScrollProgress />
      <Navbar />
      <main className="pt-16">
        <div className="section-container">
          <BreadcrumbNav />
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
