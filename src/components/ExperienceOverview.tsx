import React from 'react';
import { ArrowRight, Briefcase, MapPin, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const ExperienceOverview = () => {
  const currentRole = {
    title: 'Senior Product Designer',
    company: 'CYNC Software',
    location: 'Remote',
    period: 'Feb 2022 – Present',
    description: `Design lead for a multi-module enterprise platform used by 15+ institutional clients — spanning intake, multi-party record management, compliance-driven workflows, and operational dashboards for analysts and operations teams at regulated financial institutions.`,
    highlights: [
      'Owned end-to-end UX for a multi-module enterprise platform — spanning compliance-driven workflows, role-based record management, and operational dashboards across Angular and React.',
      'Designed a structured parent-child record architecture defining document ownership boundaries, role-based access patterns, and audit-ready state management.',
      'Consolidated a 4-step collateral evaluation workflow into a single contextual dashboard, reducing estimated analyst review time by ~30%.',
      'Built a 60+ component design system (form controls, status indicators, data grids, workflow steppers) cutting design-to-dev handoff cycles significantly.',
      'Led discovery with operations, compliance, and product stakeholders to translate regulatory requirements into actionable product specifications — applicable to HIPAA, legal, and insurance contexts.',
      'Designed AI-assisted decision interfaces with confidence indicators, contextual explanations, and human override controls — maintaining accountability and audit trails.',
      'Collaborated with AI/ML engineers to translate predictive model outputs into clear, actionable UI — improving analyst decision speed and accuracy.'
    ]
  };

  return (
    <section id="experience" className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="section-container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-portfolio-accent rounded-full font-medium mb-4">
            Experience
          </span>
          <h2 className="section-heading dark:text-white">Senior Product Designer</h2>
          <p className="section-subheading mx-auto dark:text-gray-300">
            CYNC Software
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
            {/* Header */}
            <div className="flex items-center gap-2 mb-4">
              <Briefcase className="text-portfolio-accent" size={24} />
              <h3 className="text-2xl font-bold text-portfolio-text-dark dark:text-white">
                {currentRole.title}
              </h3>
            </div>
            
            <p className="text-xl text-portfolio-accent font-semibold mb-4">
              {currentRole.company}
            </p>
            
            <div className="flex flex-wrap items-center gap-4 text-portfolio-text-light dark:text-gray-300 mb-6">
              <div className="flex items-center gap-1">
                <MapPin size={16} />
                <span>{currentRole.location}</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar size={16} />
                <span>{currentRole.period}</span>
              </div>
            </div>

            <p className="text-portfolio-text-light dark:text-gray-300 mb-6 leading-relaxed">
              {currentRole.description}
            </p>

            <div className="mb-8">
              <h4 className="text-lg font-semibold text-portfolio-text-dark dark:text-white mb-4">
                Key Responsibilities & Impact
              </h4>
              <ul className="space-y-2">
                {currentRole.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-portfolio-text-light dark:text-gray-300">
                    <span className="text-portfolio-accent text-sm mt-1.5">•</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-center">
              <Link to="/experience">
                <Button className="portfolio-button-primary transition-transform hover:scale-105 duration-300 flex items-center gap-2">
                  <Briefcase className="w-4 h-4" />
                  View Full Experience
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceOverview;
