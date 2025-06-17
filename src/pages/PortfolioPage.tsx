
import React from 'react';
import Navbar from '@/components/Navbar';
import Portfolio from '@/components/Portfolio';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';

const PortfolioPage = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <ScrollProgress />
      <Navbar />
      <main className="pt-16">
        <div className="py-12">
          <div className="section-container">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <h1 className="text-4xl md:text-5xl font-bold text-portfolio-text-dark dark:text-white mb-4">
                My Portfolio
              </h1>
              <p className="text-lg text-portfolio-text-light dark:text-gray-300">
                Explore my complete collection of projects, case studies, and design work.
              </p>
            </div>
          </div>
        </div>
        <Portfolio />
      </main>
      <Footer />
    </div>
  );
};

export default PortfolioPage;
