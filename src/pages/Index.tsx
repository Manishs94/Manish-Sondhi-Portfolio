
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import PortfolioOverview from '@/components/PortfolioOverview';
import About from '@/components/About';
import ExperienceOverview from '@/components/ExperienceOverview';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <PortfolioOverview />
        <About />
        <ExperienceOverview />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
