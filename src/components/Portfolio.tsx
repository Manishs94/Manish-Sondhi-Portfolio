import React, { useState, useEffect, useCallback } from 'react';
import { ExternalLink, BookOpen } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { allProjects, getAllCategories, getCaseStudies } from '@/utils/projectData';
import { renderIcon } from '@/utils/iconMappings';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { toast } from '@/hooks/use-toast';
import EnhancedPortfolioFilters, { FilterState } from '@/components/EnhancedPortfolioFilters';

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'case-studies'>('all');
  const [filteredProjects, setFilteredProjects] = useState(allProjects);
  const [isFiltering, setIsFiltering] = useState(false);
  
  const [filters, setFilters] = useState<FilterState>({
    category: 'all',
    year: 'all',
    clientType: 'all',
    duration: 'all',
    searchQuery: '',
    sortOption: 'newest'
  });
  
  const categories = getAllCategories();
  const caseStudies = getCaseStudies();

  // Enhanced filtering logic
  useEffect(() => {
    setIsFiltering(true);
    
    const filterTimer = setTimeout(() => {
      let result = activeTab === 'all' ? [...allProjects] : [...caseStudies];
      
      // Filter by category
      if (filters.category !== 'all') {
        result = result.filter(project => {
          if (Array.isArray(project.category)) {
            return project.category.some(cat => 
              cat.toLowerCase().replace(/\s+/g, '-') === filters.category
            );
          }
          return typeof project.category === 'string' && 
            project.category.toLowerCase().replace(/\s+/g, '-') === filters.category;
        });
      }
      
      // Filter by year (assuming projects have a year property)
      if (filters.year !== 'all') {
        result = result.filter(project => 
          project.year === filters.year || project.year === parseInt(filters.year)
        );
      }
      
      // Filter by client type
      if (filters.clientType !== 'all') {
        result = result.filter(project => 
          project.clientType === filters.clientType
        );
      }
      
      // Filter by duration
      if (filters.duration !== 'all') {
        result = result.filter(project => 
          project.duration === filters.duration
        );
      }
      
      // Filter by search query
      if (filters.searchQuery) {
        const query = filters.searchQuery.toLowerCase();
        result = result.filter(project => 
          project.title.toLowerCase().includes(query) ||
          project.description.toLowerCase().includes(query) ||
          (project.subtitle && project.subtitle.toLowerCase().includes(query)) ||
          (Array.isArray(project.category) && project.category.some(cat => cat.toLowerCase().includes(query))) ||
          (typeof project.category === 'string' && project.category.toLowerCase().includes(query)) ||
          (project.tools && project.tools.some(tool => tool.toLowerCase().includes(query)))
        );
      }
      
      // Sort projects
      if (filters.sortOption === 'alphabetical') {
        result.sort((a, b) => a.title.localeCompare(b.title));
      } else if (filters.sortOption === 'newest') {
        result.sort((a, b) => b.id - a.id);
      }
      
      setFilteredProjects(result);
      setIsFiltering(false);
    }, 300);
    
    return () => clearTimeout(filterTimer);
  }, [filters, activeTab]);

  const handleFiltersChange = useCallback((newFilters: Partial<FilterState>) => {
    setFilters(prev => ({ ...prev, ...newFilters }));
  }, []);

  const handleResetFilters = useCallback(() => {
    setFilters({
      category: 'all',
      year: 'all',
      clientType: 'all',
      duration: 'all',
      searchQuery: '',
      sortOption: 'newest'
    });
    
    toast({
      title: "Filters reset",
      description: "Showing all projects",
    });
    
    const portfolioSection = document.getElementById('portfolio');
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const totalProjects = activeTab === 'all' ? allProjects.length : caseStudies.length;

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
        
        {/* Tab selection */}
        <div className="flex justify-center mb-8 animate-fade-in opacity-0" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
          <div className="inline-flex rounded-md shadow-sm">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-6 py-3 text-sm font-medium rounded-l-md border ${
                activeTab === 'all'
                  ? 'bg-portfolio-accent text-white border-portfolio-accent'
                  : 'bg-white text-portfolio-text-dark border-gray-200 hover:bg-gray-50'
              }`}
            >
              All Projects
            </button>
            <button
              onClick={() => setActiveTab('case-studies')}
              className={`px-6 py-3 text-sm font-medium rounded-r-md border flex items-center gap-2 ${
                activeTab === 'case-studies'
                  ? 'bg-portfolio-accent text-white border-portfolio-accent'
                  : 'bg-white text-portfolio-text-dark border-gray-200 hover:bg-gray-50'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              Case Studies
            </button>
          </div>
        </div>
        
        {/* Enhanced Filters */}
        <div className="mb-8 animate-fade-in opacity-0" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
          <EnhancedPortfolioFilters
            filters={filters}
            onFiltersChange={handleFiltersChange}
            onResetFilters={handleResetFilters}
            categories={categories}
            filteredCount={filteredProjects.length}
            totalCount={totalProjects}
          />
        </div>
        
        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div 
            className={`grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 transition-opacity duration-300 ${isFiltering ? 'opacity-50' : 'opacity-100'}`}
          >
            {filteredProjects.map((project, index) => (
              <Link 
                to={`/project/${project.id}`} 
                key={project.id}
                className="transition-transform duration-300 hover:-translate-y-1"
              >
                <Card 
                  className={`bg-white rounded-xl overflow-hidden shadow-md transition-all duration-500 hover:shadow-xl animate-fade-in opacity-0 ${
                    project.isCaseStudy ? 'border-2 border-portfolio-accent' : ''
                  }`}
                  style={{ animationDelay: `${0.5 + index * 0.1}s`, animationFillMode: 'forwards' }}
                >
                  <div className="overflow-hidden h-60 sm:h-64 relative">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                    
                    {project.isCaseStudy && (
                      <div className="absolute top-3 left-3 px-3 py-1 bg-portfolio-accent text-white rounded-full text-sm flex items-center gap-1">
                        <BookOpen className="w-3 h-3" />
                        Case Study
                      </div>
                    )}
                    
                    {project.status && (
                      <Badge className="absolute top-3 right-3" variant={
                        project.status === 'Completed' ? 'default' :
                        project.status === 'In Progress' ? 'secondary' : 'outline'
                      }>
                        {project.status}
                      </Badge>
                    )}
                  </div>
                  <CardHeader className="p-4 sm:p-6 pb-0">
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
                  <CardContent className="p-4 sm:p-6 pt-3">
                    <p className="text-portfolio-text-light mb-4 line-clamp-3">{project.description}</p>
                    
                    {project.metrics && (
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6">
                        {project.metrics.map((metric, idx) => (
                          <div key={idx} className="flex flex-col items-center p-2 bg-gray-50 rounded-lg">
                            <div className="text-portfolio-accent mb-1">{renderIcon(metric.icon)}</div>
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
                      {project.isCaseStudy ? 'View Case Study' : 'View Project'} 
                      <ExternalLink size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-white rounded-lg shadow-sm">
            <p className="text-lg text-portfolio-text-light">No matching projects found</p>
            <Button onClick={handleResetFilters} className="mt-4">Reset Filters</Button>
          </div>
        )}
        
        <div className="text-center mt-12 animate-fade-in opacity-0" style={{ animationDelay: '0.9s', animationFillMode: 'forwards' }}>
          {activeTab === 'case-studies' ? (
            <Button 
              onClick={() => setActiveTab('all')}
              className="portfolio-button-primary transition-transform hover:scale-105 duration-300"
            >
              View All Projects
            </Button>
          ) : (
            <Button 
              onClick={() => {
                setActiveTab('case-studies');
                handleResetFilters();
              }}
              className="portfolio-button-primary transition-transform hover:scale-105 duration-300 flex items-center gap-2"
            >
              <BookOpen className="w-4 h-4" />
              View Case Studies
            </Button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
