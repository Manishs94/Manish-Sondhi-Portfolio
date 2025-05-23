
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Portfolio from '@/components/Portfolio';
import About from '@/components/About';
import Experience from '@/components/Experience';
import TestimonialsCarousel from '@/components/TestimonialsCarousel';
import SkillsVisualization from '@/components/SkillsVisualization';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import NewsletterSignup from '@/components/NewsletterSignup';
import ProjectSpotlight from '@/components/ProjectSpotlight';
import { getCaseStudies } from '@/utils/projectData';

const Index = () => {
  const featuredProjects = getCaseStudies().slice(0, 2);

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        
        {/* Featured Projects Spotlight */}
        {featuredProjects.length > 0 && (
          <section className="py-24 bg-gray-50 dark:bg-gray-900">
            <div className="section-container">
              <div className="text-center max-w-2xl mx-auto mb-16">
                <span className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-portfolio-accent rounded-full font-medium mb-4">
                  Featured Work
                </span>
                <h2 className="section-heading">Project Spotlight</h2>
                <p className="section-subheading">
                  Highlighting some of my most impactful design projects and case studies.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {featuredProjects.map((project, index) => (
                  <ProjectSpotlight 
                    key={project.id} 
                    project={project} 
                    featured 
                    className={`animate-fade-in`}
                    style={{ animationDelay: `${index * 0.2}s` }}
                  />
                ))}
              </div>
            </div>
          </section>
        )}
        
        <Portfolio />
        <About />
        <SkillsVisualization />
        <Experience />
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
