
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { allProjects } from '@/utils/projectData';
import ProjectCard from '@/components/ProjectCard';
import Reveal from '@/components/motion/Reveal';

const PortfolioOverview = () => {
  const featuredCaseStudyTitles = [
    'Redesigning a Veteran-Facing Exam Scheduling Portal',
    'Cync Collateral Platform',
    'Cync Advance Analytics',
    'Bank of America Bill Pay Redesign',
  ];

  const featuredProjects = featuredCaseStudyTitles
    .map((title) => allProjects.find((project) => project.title === title))
    .filter((project): project is NonNullable<typeof project> => Boolean(project));

  return (
    <section id="portfolio" className="py-24 bg-portfolio-bg-light">
      <div className="section-container">
        <Reveal className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-portfolio-accent mb-4">
            Selected Work
          </p>
          <h2 className="section-heading">Product strategy, systems thinking, and decision support</h2>
          <p className="section-subheading mx-auto">
            How I simplify high-stakes operations, shape scalable product foundations, and design decision-support experiences where clarity and trust are critical.
          </p>
        </Reveal>
        
        {/* Featured Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
        
        <Reveal className="flex justify-center">
          <Button asChild className="group portfolio-button-primary flex items-center gap-2">
            <Link to="/portfolio">
              View Full Portfolio
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Button>
        </Reveal>
      </div>
    </section>
  );
};

export default PortfolioOverview;
