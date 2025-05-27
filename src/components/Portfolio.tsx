
import React, { useState, useEffect, useCallback } from 'react';
import { BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { allProjects, getAllCategories, getCaseStudies } from '@/utils/projectData';
import { toast } from '@/hooks/use-toast';
import PortfolioFilters from '@/components/PortfolioFilters';
import ProjectCard from '@/components/ProjectCard';
import PortfolioPagination from '@/components/PortfolioPagination';

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
        
        <PortfolioFilters
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          sortOption={sortOption}
          setSortOption={setSortOption}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          categories={categories}
          onResetFilters={handleResetFilters}
          filteredProjects={filteredProjects}
          currentPage={currentPage}
          projectsPerPage={PROJECTS_PER_PAGE}
        />
        
        {/* Projects Grid */}
        {currentProjects.length > 0 ? (
          <>
            <div 
              className={`grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 transition-opacity duration-300 ${isFiltering ? 'opacity-50' : 'opacity-100'} mb-12`}
            >
              {currentProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>

            <PortfolioPagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
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
