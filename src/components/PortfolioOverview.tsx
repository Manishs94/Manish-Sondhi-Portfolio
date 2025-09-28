
import React from 'react';
import { ArrowRight, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { allProjects } from '@/utils/projectData';
import ProjectCard from '@/components/ProjectCard';

const PortfolioOverview = () => {
  // Show only the first 3 projects for the overview
  const featuredProjects = allProjects.slice(0, 3);

  return (
    <section id="portfolio" className="py-24 bg-portfolio-bg-light">
      <div className="section-container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-blue-100 text-portfolio-accent rounded-full font-medium mb-4">
            Portfolio
          </span>
          <h2 className="section-heading">Featured Projects</h2>
          <p className="section-subheading mx-auto">
            Take a look at some of my recent work that showcases my design thinking and problem-solving approach.
          </p>
        </div>
        
        {/* Featured Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
        
        <div className="text-center">
          <Link to="/portfolio">
            <Button className="portfolio-button-primary transition-transform hover:scale-105 duration-300 flex items-center gap-2">
              <BookOpen className="w-4 h-4" />
              View Full Portfolio
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PortfolioOverview;
