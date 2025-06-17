
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
        <Portfolio />
      </main>
      <Footer />
    </div>
  );
};

export default PortfolioPage;
