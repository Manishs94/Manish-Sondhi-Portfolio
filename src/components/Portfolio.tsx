
import React, { useState, useCallback } from 'react'; // Removed useEffect
import { BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { allProjects, getAllCategories, getCaseStudies } from '@/utils/projectData';
import { usePortfolioFilters } from '@/hooks/usePortfolioFilters'; // Added import
import { toast } from '@/hooks/use-toast';
import PortfolioFilters from '@/components/PortfolioFilters';
import ProjectCard from '@/components/ProjectCard';
import ProjectCardSkeleton from '@/components/ProjectCardSkeleton'; // Import skeleton
import PortfolioPagination from '@/components/PortfolioPagination';

type SortOption = 'newest' | 'alphabetical';

const PROJECTS_PER_PAGE = 6; // Show 6 projects per page

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOption, setSortOption] = useState<SortOption>('newest');
  // const [filteredProjects, setFilteredProjects] = useState(allProjects); // Removed
  // const [isFiltering, setIsFiltering] = useState(false); // Removed
  const [activeTab, setActiveTab] = useState<'all' | 'case-studies'>('all');
  const [currentPage, setCurrentPage] = useState(1);
  
  const categories = getAllCategories();
  const caseStudies = getCaseStudies();

  // Use the custom hook for filtering and sorting
  const { filteredProjects, isFiltering } = usePortfolioFilters({
    allProjects,
    caseStudies,
    selectedCategory,
    searchQuery,
    sortOption,
    activeTab,
  });

  // Reset to first page when filters change (selectedCategory, searchQuery, sortOption, activeTab)
  // This useEffect was implicitly part of the larger useEffect. Now, it needs to be explicit
  // if we want to reset current page whenever filteredProjects array reference changes.
  // Or, more directly, when the source filters for the hook change.
  React.useEffect(() => {
    setCurrentPage(1);
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
    // setCurrentPage(1); // This is now handled by the useEffect above
    
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
        
        {/* Projects Grid Area */}
        <div
          className={`grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12 transition-opacity duration-300 ${isFiltering ? 'opacity-50' : 'opacity-100'}`}
        >
          {isFiltering ? (
            Array.from({ length: PROJECTS_PER_PAGE }).map((_, index) => (
              <ProjectCardSkeleton key={`skeleton-${index}`} />
            ))
          ) : (
            // Only map currentProjects if not filtering and there are projects to display
            currentProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))
          )}
        </div>

        {/* Pagination: Show if not filtering AND there are projects to paginate (i.e., more projects than fit on one page) */}
        {!isFiltering && filteredProjects.length > PROJECTS_PER_PAGE && (
          <PortfolioPagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        )}

        {/* No Results Message: Show if not filtering AND no projects match the filters */}
        {!isFiltering && filteredProjects.length === 0 && (
          <div className="text-center py-12 bg-white rounded-lg shadow-sm">
            <p className="text-lg text-portfolio-text-light">No matching projects found</p>
            <Button onClick={handleResetFilters} className="mt-4">Reset Filters</Button>
          </div>
        )}
        
        <div className="text-center mt-12 animate-fade-in opacity-0" style={{ animationDelay: '0.9s', animationFillMode: 'forwards' }}>
          {activeTab === 'case-studies' ? (
            <Button 
              onClick={() => {
                setActiveTab('all');
                setCurrentPage(1); // Explicitly reset page
              }}
              className="portfolio-button-primary transition-transform hover:scale-105 duration-300"
            >
              View All Projects
            </Button>
          ) : (
            <Button 
              onClick={() => {
                setActiveTab('case-studies');
                setSortOption('newest'); // Set sort to newest for case studies
                setCurrentPage(1);      // Explicitly reset page
                // Filters (selectedCategory, searchQuery) are intentionally not reset
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
