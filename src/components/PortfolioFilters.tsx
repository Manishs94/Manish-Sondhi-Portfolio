
import React from 'react';
import { Search, BookOpen } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface PortfolioFiltersProps {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  sortOption: 'newest' | 'alphabetical';
  setSortOption: (option: 'newest' | 'alphabetical') => void;
  activeTab: 'all' | 'case-studies';
  setActiveTab: (tab: 'all' | 'case-studies') => void;
  categories: { id: string; name: string }[];
  onResetFilters: () => void;
  filteredProjects: any[];
  currentPage: number;
  projectsPerPage: number;
}

const PortfolioFilters: React.FC<PortfolioFiltersProps> = ({
  selectedCategory,
  setSelectedCategory,
  searchQuery,
  setSearchQuery,
  sortOption,
  setSortOption,
  activeTab,
  setActiveTab,
  categories,
  onResetFilters,
  filteredProjects,
  currentPage,
  projectsPerPage
}) => {
  const startIndex = (currentPage - 1) * projectsPerPage;
  const endIndex = Math.min(startIndex + projectsPerPage, filteredProjects.length);

  return (
    <>
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
              onChange={(e) => setSortOption(e.target.value as 'newest' | 'alphabetical')}
            >
              <option value="newest">Newest first</option>
              <option value="alphabetical">Alphabetical</option>
            </select>
            
            <Button 
              variant="outline" 
              size="sm"
              onClick={onResetFilters}
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
              Showing {startIndex + 1}-{endIndex} of {filteredProjects.length} {filteredProjects.length === 1 ? 'project' : 'projects'}
              {activeTab === 'case-studies' && ' (Case Studies)'}
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default PortfolioFilters;
