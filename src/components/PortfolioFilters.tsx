
import React from 'react';
import { Search, ChevronDown } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface PortfolioFiltersProps {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  sortOption: 'newest' | 'alphabetical';
  setSortOption: (option: 'newest' | 'alphabetical') => void;
  activeTab: 'case-studies' | 'design' | 'all';
  setActiveTab: (tab: 'case-studies' | 'design' | 'all') => void;
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

  const getTabDisplayName = () => {
    switch (activeTab) {
      case 'case-studies':
        return 'Case Studies';
      case 'design':
        return 'Design Projects';
      case 'all':
        return 'All Projects';
      default:
        return 'Projects';
    }
  };

  const getSortDisplayText = () => {
    return sortOption === 'newest' ? 'Newest first' : 'Alphabetical';
  };

  return (
    <>
      {/* Search and Filter Controls */}
      <div className="mb-8 animate-fade-in opacity-0" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <Input
              type="text"
              placeholder={`Search ${getTabDisplayName().toLowerCase()}...`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-white shadow-sm border-gray-200"
            />
          </div>
          
          <div className="flex gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="whitespace-nowrap">
                  {getSortDisplayText()}
                  <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-white border border-gray-200 shadow-lg">
                <DropdownMenuItem 
                  onClick={() => setSortOption('newest')}
                  className="cursor-pointer hover:bg-gray-100"
                >
                  Newest first
                </DropdownMenuItem>
                <DropdownMenuItem 
                  onClick={() => setSortOption('alphabetical')}
                  className="cursor-pointer hover:bg-gray-100"
                >
                  Alphabetical
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
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
        
        {/* Only show category filters for "all" tab */}
        {activeTab === 'all' && (
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
        )}
        
        {/* Search results info */}
        <div className="text-center text-portfolio-text-light text-sm">
          {filteredProjects.length === 0 ? (
            <p>No {getTabDisplayName().toLowerCase()} found. Try adjusting your filters.</p>
          ) : (
            <p>
              Showing {startIndex + 1}-{endIndex} of {filteredProjects.length} {filteredProjects.length === 1 ? 'project' : 'projects'}
              {activeTab !== 'all' && ` (${getTabDisplayName()})`}
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default PortfolioFilters;
