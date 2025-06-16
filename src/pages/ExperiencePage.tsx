import React from 'react';
import Layout from '@/components/Layout'; // New import
import Experience from '@/components/Experience';

const ExperiencePage: React.FC = () => {
  return (
    <Layout> {/* Wrap content with Layout */}
      {/* The <main> tag is now part of Layout */}
      <Experience />
    </Layout>
  );
};

export default ExperiencePage;
