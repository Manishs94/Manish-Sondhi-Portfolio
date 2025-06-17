
import React from 'react';
import Navbar from '@/components/Navbar';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import SkillsVisualization from '@/components/SkillsVisualization';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';

const ExperiencePage = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <ScrollProgress />
      <Navbar />
      <main className="pt-16">
        <div className="py-12 bg-white dark:bg-gray-900">
          <div className="section-container">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <h1 className="text-4xl md:text-5xl font-bold text-portfolio-text-dark dark:text-white mb-4">
                Experience & Skills
              </h1>
              <p className="text-lg text-portfolio-text-light dark:text-gray-300">
                Discover my professional journey, technical expertise, and educational background.
              </p>
            </div>
          </div>
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
