import React from 'react';
import Layout from '@/components/Layout'; // New import
import Hero from '@/components/Hero';
import About from '@/components/About';
import Portfolio from '@/components/Portfolio'; // Using full Portfolio for summary as per Index.tsx
import Experience from '@/components/Experience'; // Using full Experience for summary as per Index.tsx
import Contact from '@/components/Contact';
import { Link } from 'react-router-dom'; // For "View All" links
import { Button } from '@/components/ui/button'; // For styling links as buttons

const HomePage: React.FC = () => {
  return (
    <Layout> {/* Wrap content with Layout */}
      {/* Navbar is now in Layout */}
      <Hero />
      <About />

      {/* Portfolio Section Summary */}
      <section id="portfolio-summary" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800/30">
        <div className="section-container text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-portfolio-text-dark dark:text-white">Featured Projects</h2>
          <p className="text-lg md:text-xl text-portfolio-text-light dark:text-gray-300 max-w-2xl mx-auto">
            A selection of my recent work. Explore the full range of projects on the portfolio page.
          </p>
        </div>
        {/* Render the actual Portfolio component, which might show a limited number by default or be configured */}
        <Portfolio />
        <div className="text-center mt-8 md:mt-12">
          <Button asChild variant="default" size="lg">
            <Link to="/portfolio">View Full Portfolio</Link>
          </Button>
        </div>
      </section>

      {/* Experience Section Summary */}
      <section id="experience-summary" className="py-16 md:py-24">
        <div className="section-container text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-portfolio-text-dark dark:text-white">Career Journey</h2>
          <p className="text-lg md:text-xl text-portfolio-text-light dark:text-gray-300 max-w-2xl mx-auto">
            Highlights from my professional experience. See the detailed timeline on the experience page.
          </p>
        </div>
        {/* Render the actual Experience component */}
        <Experience />
        <div className="text-center mt-8 md:mt-12">
          <Button asChild variant="default" size="lg">
            <Link to="/experience">View Full Experience</Link>
          </Button>
        </div>
      </section>

      <Contact />
      {/* Footer is now in Layout */}
    </Layout>
  );
};

export default HomePage;
