
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Portfolio from '@/components/Portfolio';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import TestimonialsCarousel from '@/components/TestimonialsCarousel';
import SkillsVisualization from '@/components/SkillsVisualization';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import NewsletterSignup from '@/components/NewsletterSignup';
import ScrollProgress from '@/components/ScrollProgress';

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Portfolio />
        <About />
        <SkillsVisualization />
        <Experience />
        <Education />
        <TestimonialsCarousel />
        
        {/* Newsletter Section */}
        <section className="py-24">
          <div className="section-container">
            <NewsletterSignup />
          </div>
        </section>
        
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
