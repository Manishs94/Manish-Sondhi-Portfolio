import React from 'react';
import { ArrowRight, Briefcase, MapPin, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const ExperienceOverview = () => {
  const currentRole = {
    title: 'Lead Product Designer — Enterprise Platforms & B2B Products',
    company: 'CYNC Software',
    location: 'Tampa, FL',
    period: 'Feb 2022 – Present',
    description: `Lead designer for multiple enterprise fintech platforms supporting loan origination, underwriting, collateral management, analytics, and risk workflows. I lead end-to-end product design for complex, data-driven workflows, translating regulatory requirements, risk constraints, and multi-stakeholder needs into intuitive, accessible, production-ready experiences that serve enterprise lending teams.`,
    highlights: [
      'Led end-to-end design of modular enterprise lending platform serving financial institutions with complex lending workflows and regulatory compliance requirements.',
      'Designed AI-assisted UX features: guided workflows for complex tasks (appraisal configuration, risk assessment), conversational interfaces for compliance checks, and explainable decision-support dashboards.',
      'Established reusable design system with 15+ component patterns across lending, analytics, and admin modules—reducing development rework and ensuring consistency across 12+ teams.',
      'Designed decision-support dashboards and analytics platforms enabling enterprise users to monitor performance, risk, and portfolio health with clarity and confidence.',
      'Ensured WCAG 2.1 accessibility compliance across all platforms—creating accessible data visualizations, keyboard-navigable interfaces, and screen reader support.',
      'Collaborated cross-functionally with product managers, engineers, risk, and compliance stakeholders to align on complex workflows and system-level design.',
      'Conducted user research, usability testing, and accessibility audits to inform design decisions and validate solutions.'
    ]
  };

  return (
    <section id="experience" className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="section-container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-portfolio-accent rounded-full font-medium mb-4">
            Experience
          </span>
          <h2 className="section-heading dark:text-white">Lead Product Designer — Enterprise Platforms</h2>
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
