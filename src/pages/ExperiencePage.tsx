
import React from 'react';
import Navbar from '@/components/Navbar';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import SkillsVisualization from '@/components/SkillsVisualization';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';

const ExperiencePage = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <ScrollProgress />
      <Navbar />
      <main className="pt-16">
        <div className="section-container">
          <BreadcrumbNav />
        </div>
        <Experience />
        <SkillsVisualization />
        <Education />
      </main>
      <Footer />
    </div>
  );
};

export default ExperiencePage;
