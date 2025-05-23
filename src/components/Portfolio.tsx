
import React, { useState } from 'react';
import { ExternalLink, Users2, LineChart, Clock, Target, Users } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { allProjects, getAllCategories } from '@/utils/projectData';

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const categories = getAllCategories();
  
  const filteredProjects = selectedCategory === 'all' 
    ? allProjects 
    : allProjects.filter(project => {
        if (Array.isArray(project.category)) {
          return project.category.some(cat => 
            cat.toLowerCase().replace(/\s+/g, '-') === selectedCategory
          );
        }
        return typeof project.category === 'string' && 
          project.category.toLowerCase().replace(/\s+/g, '-') === selectedCategory;
      });

  return (
    <section id="portfolio" className="py-24 bg-portfolio-bg-light">
      <div className="section-container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-blue-100 text-portfolio-accent rounded-full font-medium mb-4 animate-fade-in opacity-0" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
            Portfolio
          </span>
          <h2 className="section-heading animate-fade-in opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>Featured Projects</h2>
          <p className="section-subheading mx-auto animate-fade-in opacity-0" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
            Take a look at some of my recent work that showcases my design thinking and problem-solving approach.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in opacity-0" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-5 py-2 rounded-full transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-portfolio-accent text-white'
                  : 'bg-white text-portfolio-text-dark hover:bg-gray-100'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <Link 
              to={`/project/${project.id}`} 
              key={project.id}
              className="transition-transform duration-300 hover:-translate-y-1"
            >
              <Card 
                className="bg-white rounded-xl overflow-hidden shadow-md transition-all duration-500 hover:shadow-xl animate-fade-in opacity-0"
                style={{ animationDelay: `${0.5 + index * 0.1}s`, animationFillMode: 'forwards' }}
              >
                <div className="overflow-hidden h-64">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
                <CardHeader className="p-6 pb-0">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {Array.isArray(project.category) ? (
                      project.category.map((cat, idx) => (
                        <span key={idx} className="px-3 py-1 bg-blue-50 text-portfolio-accent rounded-full text-sm">
                          {cat}
                        </span>
                      ))
                    ) : (
                      project.category && (
                        <span className="px-3 py-1 bg-blue-50 text-portfolio-accent rounded-full text-sm">
                          {project.category}
                        </span>
                      )
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-portfolio-text-dark mb-1">{project.title}</h3>
                  {project.subtitle && <p className="text-portfolio-text-light text-sm mb-2">{project.subtitle}</p>}
                </CardHeader>
                <CardContent className="p-6 pt-3">
                  <p className="text-portfolio-text-light mb-4 line-clamp-3">{project.description}</p>
                  
                  {project.metrics && (
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6">
                      {project.metrics.map((metric, idx) => (
                        <div key={idx} className="flex flex-col items-center p-2 bg-gray-50 rounded-lg">
                          <div className="text-portfolio-accent mb-1">{metric.icon}</div>
                          <div className="font-bold text-portfolio-text-dark">{metric.value}</div>
                          <div className="text-xs text-portfolio-text-light">{metric.label}</div>
                        </div>
                      ))}
                    </div>
                  )}
                  
                  <div className="space-y-3 mb-6">
                    <div>
                      <span className="text-sm font-semibold text-portfolio-text-dark">Challenge:</span>
                      <p className="text-sm text-portfolio-text-light line-clamp-2">
                        {project.challenge || project.problem || (project.overview && project.overview.challenge) || ""}
                      </p>
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-portfolio-text-dark">Process:</span>
                      <p className="text-sm text-portfolio-text-light line-clamp-2">{project.process}</p>
                    </div>
                  </div>
                  
                  {project.tools && (
                    <div className="mb-4">
                      <span className="text-sm font-semibold text-portfolio-text-dark block mb-2">Tools & Technologies:</span>
                      <div className="flex flex-wrap gap-2">
                        {project.tools.map((tool, idx) => (
                          <span key={idx} className="px-2 py-1 bg-gray-100 text-portfolio-text-dark rounded text-xs">
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  <div 
                    className="flex items-center gap-2 text-portfolio-accent hover:underline font-medium group"
                    onClick={(e) => e.preventDefault()}
                  >
                    View Case Study 
                    <ExternalLink size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
        
        <div className="text-center mt-12 animate-fade-in opacity-0" style={{ animationDelay: '0.9s', animationFillMode: 'forwards' }}>
          <a href="#" className="portfolio-button-primary transition-transform hover:scale-105 duration-300">
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
