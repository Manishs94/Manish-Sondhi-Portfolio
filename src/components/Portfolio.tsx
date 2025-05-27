import React, { useState, useEffect, useCallback } from 'react';
import { ExternalLink, Search, BookOpen } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { allProjects, getAllCategories, getCaseStudies } from '@/utils/projectData';
import { renderIcon } from '@/utils/iconMappings';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { toast } from '@/hooks/use-toast';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';

type SortOption = 'newest' | 'alphabetical';

const PROJECTS_PER_PAGE = 6; // Show 6 projects per page

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOption, setSortOption] = useState<SortOption>('newest');
  const [filteredProjects, setFilteredProjects] = useState(allProjects);
  const [isFiltering, setIsFiltering] = useState(false);
  const [activeTab, setActiveTab] = useState<'all' | 'case-studies'>('all');
  const [currentPage, setCurrentPage] = useState(1);
  
  const categories = getAllCategories();
  const caseStudies = getCaseStudies();

  // Filter and sort projects whenever filters change
  useEffect(() => {
    setIsFiltering(true);
    setCurrentPage(1); // Reset to first page when filters change
    
    // Add a small delay to show the animation
    const filterTimer = setTimeout(() => {
      // Start with either all projects or just case studies based on active tab
      let result = activeTab === 'all' ? [...allProjects] : [...caseStudies];
      
      // Filter by category
      if (selectedCategory !== 'all') {
        result = result.filter(project => {
          if (Array.isArray(project.category)) {
            return project.category.some(cat => 
              cat.toLowerCase().replace(/\s+/g, '-') === selectedCategory
            );
          }
          return typeof project.category === 'string' && 
            project.category.toLowerCase().replace(/\s+/g, '-') === selectedCategory;
        });
      }
      
      // Filter by search query
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
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
      if (sortOption === 'alphabetical') {
        result.sort((a, b) => a.title.localeCompare(b.title));
      } else if (sortOption === 'newest') {
        // Assuming higher IDs are newer projects
        result.sort((a, b) => b.id - a.id);
      }
      
      setFilteredProjects(result);
      setIsFiltering(false);
    }, 300);
    
    return () => clearTimeout(filterTimer);
  }, [selectedCategory, searchQuery, sortOption, activeTab]);

  // Calculate pagination
  const totalPages = Math.ceil(filteredProjects.length / PROJECTS_PER_PAGE);
  const startIndex = (currentPage - 1) * PROJECTS_PER_PAGE;
  const endIndex = startIndex + PROJECTS_PER_PAGE;
  const currentProjects = filteredProjects.slice(startIndex, endIndex);

  // Reset filters and scroll to portfolio section
  const handleResetFilters = useCallback(() => {
    setSelectedCategory('all');
    setSearchQuery('');
    setSortOption('newest');
    setCurrentPage(1);
    
    // Show a toast notification
    toast({
      title: "Filters reset",
      description: "Showing all projects",
    });
    
    // Scroll to portfolio section
    const portfolioSection = document.getElementById('portfolio');
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Scroll to top of portfolio section when page changes
    const portfolioSection = document.getElementById('portfolio');
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Function to get the appropriate image for each project
  const getProjectImage = (project: any) => {
    // Check if this is the AI Chatbot Application project (assuming it has a specific title or id)
    if (project.title === "AI Chatbot Application" || project.title.toLowerCase().includes("ai chatbot")) {
      return "/lovable-uploads/25012106-d649-4a4f-b9d0-7eb1b4890a63.png";
    }
    // Return the project's original image for all other projects
    return project.image;
  };

  // Function to get the display title for each project
  const getProjectTitle = (project: any) => {
    // Check if this is the UI/UX Design Process Case study and rename it
    if (project.title === "UI/UX Design Process Case study" || project.title === "UI/UX Design Process") {
      return "UI/UX Case Study: Innovative Design Studio";
    }
    return project.title;
  };

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
        
        {/* Tab selection - Case Studies vs All Projects */}
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
        
        {/* Search and Filter Controls */}
        <div className="mb-8 animate-fade-in opacity-0" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <Input
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-white shadow-sm border-gray-200"
              />
            </div>
            
            <div className="flex gap-2">
              <select 
                className="bg-white border border-gray-200 rounded-md px-3 py-2 text-sm shadow-sm"
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value as SortOption)}
              >
                <option value="newest">Newest first</option>
                <option value="alphabetical">Alphabetical</option>
              </select>
              
              <Button 
                variant="outline" 
                size="sm"
                onClick={handleResetFilters}
                className="whitespace-nowrap"
              >
                Reset filters
              </Button>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full transition-all duration-300 text-sm ${
                  selectedCategory === category.id
                    ? 'bg-portfolio-accent text-white'
                    : 'bg-white text-portfolio-text-dark hover:bg-gray-100'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
          
          {/* Search results info */}
          <div className="text-center text-portfolio-text-light text-sm">
            {filteredProjects.length === 0 ? (
              <p>No projects found. Try adjusting your filters.</p>
            ) : (
              <p>
                Showing {startIndex + 1}-{Math.min(endIndex, filteredProjects.length)} of {filteredProjects.length} {filteredProjects.length === 1 ? 'project' : 'projects'}
                {activeTab === 'case-studies' && ' (Case Studies)'}
              </p>
            )}
          </div>
        </div>
        
        {/* Projects Grid with improved responsive behavior */}
        {currentProjects.length > 0 ? (
          <>
            <div 
              className={`grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 transition-opacity duration-300 ${isFiltering ? 'opacity-50' : 'opacity-100'} mb-12`}
            >
              {currentProjects.map((project, index) => (
                <Link 
                  to={`/project/${project.id}`} 
                  key={project.id}
                  className="transition-transform duration-300 hover:-translate-y-1"
                >
                  <Card 
                    className={`bg-white rounded-xl overflow-hidden shadow-md transition-all duration-500 hover:shadow-xl animate-fade-in opacity-0 ${
                      project.isCaseStudy ? 'border-2 border-portfolio-accent' : ''
                    }`}
                    style={{ animationDelay: `${0.1 * index}s`, animationFillMode: 'forwards' }}
                  >
                    <div className="overflow-hidden h-60 sm:h-64 relative">
                      <img 
                        src={getProjectImage(project)} 
                        alt={getProjectTitle(project)} 
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                      />
                      
                      {/* Case study badge */}
                      {project.isCaseStudy && (
                        <div className="absolute top-3 left-3 px-3 py-1 bg-portfolio-accent text-white rounded-full text-sm flex items-center gap-1">
                          <BookOpen className="w-3 h-3" />
                          Case Study
                        </div>
                      )}
                      
                      {/* Parent project indicator */}
                      {project.parentProjectId && (
                        <div className="absolute top-3 right-3 px-2 py-1 bg-blue-100 text-portfolio-accent rounded-full text-xs">
                          Module
                        </div>
                      )}
                      
                      {/* Sub-projects indicator */}
                      {project.subProjects && project.subProjects.length > 0 && (
                        <div className="absolute bottom-3 left-3 px-2 py-1 bg-white/90 text-portfolio-accent rounded-full text-xs font-medium">
                          {project.subProjects.length} Modules
                        </div>
                      )}
                      
                      {/* Status badge if available */}
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
                      <h3 className="text-xl font-bold text-portfolio-text-dark mb-1">{getProjectTitle(project)}</h3>
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

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center">
                <Pagination>
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious 
                        onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                        className={currentPage === 1 ? 'pointer-events-none opacity-50' : 'cursor-pointer'}
                      />
                    </PaginationItem>
                    
                    {/* Page numbers */}
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
                      // Show first page, last page, current page, and pages around current
                      if (
                        page === 1 ||
                        page === totalPages ||
                        (page >= currentPage - 1 && page <= currentPage + 1)
                      ) {
                        return (
                          <PaginationItem key={page}>
                            <PaginationLink
                              onClick={() => handlePageChange(page)}
                              isActive={currentPage === page}
                              className="cursor-pointer"
                            >
                              {page}
                            </PaginationLink>
                          </PaginationItem>
                        );
                      } else if (
                        page === currentPage - 2 ||
                        page === currentPage + 2
                      ) {
                        return (
                          <PaginationItem key={page}>
                            <PaginationEllipsis />
                          </PaginationItem>
                        );
                      }
                      return null;
                    })}
                    
                    <PaginationItem>
                      <PaginationNext 
                        onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                        className={currentPage === totalPages ? 'pointer-events-none opacity-50' : 'cursor-pointer'}
                      />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </div>
            )}
          </>
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
