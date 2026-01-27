import React, { useState, useEffect, useCallback } from 'react';
import { BookOpen, Palette, Grid3X3 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { allProjects, getAllCategories, getCaseStudies } from '@/utils/projectData';
import QuickViewModal from '@/components/QuickViewModal';
import { toast } from '@/hooks/use-toast';
import PortfolioFilters from '@/components/PortfolioFilters';
import ProjectGrid from '@/components/ProjectGrid';
import PortfolioPagination from '@/components/PortfolioPagination';

type SortOption = 'newest' | 'alphabetical';

const PROJECTS_PER_PAGE = 6; // Show 6 projects per page

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOption, setSortOption] = useState<SortOption>('newest');
  const [filteredProjects, setFilteredProjects] = useState(allProjects);
  const [isFiltering, setIsFiltering] = useState(false);
  const [activeTab, setActiveTab] = useState<'case-studies' | 'design' | 'all'>('case-studies'); // Default to case studies
  const [currentPage, setCurrentPage] = useState(1);
  const [previewProject, setPreviewProject] = useState<(typeof allProjects)[0] | null>(null);
  const [showQuickView, setShowQuickView] = useState(false);
  
  const categories = getAllCategories();
  const caseStudies = getCaseStudies();
  const designProjects = allProjects.filter(project => 
    !project.isCaseStudy && (
      (Array.isArray(project.category) && project.category.some(cat => 
        cat.toLowerCase().includes('design') || cat.toLowerCase().includes('ui/ux')
      )) ||
      (typeof project.category === 'string' && 
        (project.category.toLowerCase().includes('design') || project.category.toLowerCase().includes('ui/ux'))
      )
    )
  );

  // Filter and sort projects whenever filters change
  useEffect(() => {
    setIsFiltering(true);
    
    // Add a small delay to show the animation
    const filterTimer = setTimeout(() => {
      // Start with appropriate projects based on active tab
      let result = [];
      if (activeTab === 'case-studies') {
        result = [...caseStudies];
      } else if (activeTab === 'design') {
        result = [...designProjects];
      } else {
        result = [...allProjects];
      }
      
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
  }, [selectedCategory, searchQuery, sortOption, activeTab, caseStudies, designProjects]);

  // Calculate pagination
  const totalPages = Math.ceil(filteredProjects.length / PROJECTS_PER_PAGE);
  const startIndex = (currentPage - 1) * PROJECTS_PER_PAGE;
  const endIndex = startIndex + PROJECTS_PER_PAGE;
  const currentProjects = filteredProjects.slice(startIndex, endIndex);

  // Debug logs
  console.log('Pagination Debug:', {
    currentPage,
    totalPages,
    filteredProjectsLength: filteredProjects.length,
    currentProjectsLength: currentProjects.length,
    startIndex,
    endIndex
  });
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

  const handlePageChange = useCallback((page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  }, [totalPages]);

  const handleTabChange = (value: string) => {
    setActiveTab(value as 'case-studies' | 'design' | 'all');
    setCurrentPage(1);
    handleResetFilters();
  };

  // Effect to reset pagination when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, searchQuery, sortOption, activeTab]);
  return (
    <section id="portfolio" className="py-24 bg-portfolio-bg-light">
      <div className="section-container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="section-heading animate-fade-in opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>Featured Projects</h2>
          <p className="section-subheading mx-auto animate-fade-in opacity-0" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
            A curated selection of projects demonstrating my expertise in enterprise fintech, AI-assisted UX, and complex data-driven systems. Each case study highlights the challenge, process, tools used, and measurable impact of my design work.
          </p>
        </div>
        
        {/* Tab Navigation */}
        <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
          <div className="flex justify-center mb-8 animate-fade-in opacity-0" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
            <TabsList className="grid w-full max-w-md grid-cols-3 bg-white shadow-sm">
              <TabsTrigger value="case-studies" className="flex items-center gap-2 data-[state=active]:bg-portfolio-accent data-[state=active]:text-white">
                <BookOpen className="w-4 h-4" />
                Case Study
              </TabsTrigger>
              <TabsTrigger value="design" className="flex items-center gap-2 data-[state=active]:bg-portfolio-accent data-[state=active]:text-white">
                <Palette className="w-4 h-4" />
                Design
              </TabsTrigger>
              <TabsTrigger value="all" className="flex items-center gap-2 data-[state=active]:bg-portfolio-accent data-[state=active]:text-white">
                <Grid3X3 className="w-4 h-4" />
                All Projects
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="case-studies" className="mt-0">
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
            
            {currentProjects.length > 0 ? (
              <>
                <ProjectGrid
                  projects={currentProjects}
                  isFiltering={isFiltering}
                  onQuickView={(project) => {
                    setPreviewProject(project);
                    setShowQuickView(true);
                  }}
                />

                <PortfolioPagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={handlePageChange}
                />
              </>
            ) : (
              <div className="text-center py-12 bg-white rounded-lg shadow-sm">
                <p className="text-lg text-portfolio-text-light">No case studies found</p>
                <Button onClick={handleResetFilters} className="mt-4">Reset Filters</Button>
              </div>
            )}
          </TabsContent>

          <TabsContent value="design" className="mt-0">
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
            
            {currentProjects.length > 0 ? (
              <>
                <ProjectGrid
                  projects={currentProjects}
                  isFiltering={isFiltering}
                  onQuickView={(project) => {
                    setPreviewProject(project);
                    setShowQuickView(true);
                  }}
                />

                <PortfolioPagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={handlePageChange}
                />
              </>
            ) : (
              <div className="text-center py-12 bg-white rounded-lg shadow-sm">
                <p className="text-lg text-portfolio-text-light">No design projects found</p>
                <Button onClick={handleResetFilters} className="mt-4">Reset Filters</Button>
              </div>
            )}
          </TabsContent>

          <TabsContent value="all" className="mt-0">
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
            
            {currentProjects.length > 0 ? (
              <>
                <ProjectGrid
                  projects={currentProjects}
                  isFiltering={isFiltering}
                  onQuickView={(project) => {
                    setPreviewProject(project);
                    setShowQuickView(true);
                  }}
                />

                <PortfolioPagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={handlePageChange}
                />
              </>
            ) : (
              <div className="text-center py-12 bg-white rounded-lg shadow-sm">
                <p className="text-lg text-portfolio-text-light">No projects found</p>
                <Button onClick={handleResetFilters} className="mt-4">Reset Filters</Button>
              </div>
            )}
          </TabsContent>
        </Tabs>

        {/* Quick View Modal */}
        {showQuickView && previewProject && (
          <QuickViewModal
            project={previewProject}
            onClose={() => {
              setShowQuickView(false);
              setPreviewProject(null);
            }}
          />
        )}
      </div>
    </section>
  );
};

export default Portfolio;
