import React from 'react';
import Layout from '@/components/Layout'; // New import
import Portfolio from '@/components/Portfolio';

const PortfolioPage: React.FC = () => {
  return (
    <Layout> {/* Wrap content with Layout */}
      {/* The <main> tag is now part of Layout */}
      <Portfolio />
    </Layout>
  );
};

export default PortfolioPage;
