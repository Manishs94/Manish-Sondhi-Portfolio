import React from 'react';
import Layout from '@/components/Layout'; // New import
import Contact from '@/components/Contact';

const ContactPage: React.FC = () => {
  return (
    <Layout> {/* Wrap content with Layout */}
      {/* The <main> tag is now part of Layout */}
      <Contact />
    </Layout>
  );
};

export default ContactPage;
