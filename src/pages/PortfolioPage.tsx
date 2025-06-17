
import React from 'react';
import Navbar from '@/components/Navbar';
import Portfolio from '@/components/Portfolio';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';

const PortfolioPage = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <ScrollProgress />
      <Navbar />
      <main className="pt-16">
        <div className="section-container">
          <BreadcrumbNav />
        </div>
        <Portfolio />
      </main>
      <Footer />
    </div>
  );
};

export default PortfolioPage;
