
import React from 'react';
import Navbar from '@/components/Navbar';
import Portfolio from '@/components/Portfolio';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';
import PortfolioAIChat from '@/components/PortfolioAIChat';

const PortfolioPage = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <ScrollProgress />
      <Navbar />
      <main className="pt-16">
        <Portfolio />
      </main>
      <Footer />
      <PortfolioAIChat />
    </div>
  );
};

export default PortfolioPage;
