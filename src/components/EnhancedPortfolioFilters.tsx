
import React from 'react';
import { Search, Filter, X } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export interface FilterState {
  category: string;
  year: string;
  clientType: string;
  duration: string;
  searchQuery: string;
  sortOption: 'newest' | 'alphabetical';
}

interface EnhancedPortfolioFiltersProps {
  filters: FilterState;
  onFiltersChange: (filters: Partial<FilterState>) => void;
  onResetFilters: () => void;
  categories: Array<{ id: string; name: string }>;
  filteredCount: number;
  totalCount: number;
}

const EnhancedPortfolioFilters: React.FC<EnhancedPortfolioFiltersProps> = ({
  filters,
  onFiltersChange,
  onResetFilters,
  categories,
  filteredCount,
  totalCount
}) => {
  const years = ['2024', '2023', '2022', '2021', '2020'];
  const clientTypes = ['Enterprise', 'Startup', 'Agency', 'Personal', 'Non-profit'];
  const durations = ['< 1 month', '1-3 months', '3-6 months', '6+ months'];

  const activeFiltersCount = Object.entries(filters).filter(([key, value]) => 
    key !== 'searchQuery' && key !== 'sortOption' && value && value !== 'all'
  ).length;

  const hasActiveFilters = activeFiltersCount > 0 || filters.searchQuery;

  return (
    <div className="space-y-6">
      {/* Search and Quick Actions */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          <Input
            type="text"
            placeholder="Search projects..."
            value={filters.searchQuery}
            onChange={(e) => onFiltersChange({ searchQuery: e.target.value })}
            className="pl-10 bg-white shadow-sm border-gray-200"
          />
        </div>
        
        <div className="flex gap-2">
          <Select value={filters.sortOption} onValueChange={(value) => onFiltersChange({ sortOption: value as 'newest' | 'alphabetical' })}>
            <SelectTrigger className="w-40">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">Newest first</SelectItem>
              <SelectItem value="alphabetical">Alphabetical</SelectItem>
            </SelectContent>
          </Select>
          
          {hasActiveFilters && (
            <Button 
              variant="outline" 
              size="sm"
              onClick={onResetFilters}
              className="whitespace-nowrap flex items-center gap-2"
            >
              <X className="w-4 h-4" />
              Reset
            </Button>
          )}
        </div>
      </div>

      {/* Advanced Filters */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Category Filter */}
        <div>
          <label className="text-sm font-medium text-portfolio-text-dark dark:text-white mb-2 block">
            Category
          </label>
          <Select value={filters.category} onValueChange={(value) => onFiltersChange({ category: value })}>
            <SelectTrigger>
              <SelectValue placeholder="All categories" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              {categories.map((category) => (
                <SelectItem key={category.id} value={category.id}>
                  {category.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Year Filter */}
        <div>
          <label className="text-sm font-medium text-portfolio-text-dark dark:text-white mb-2 block">
            Year
          </label>
          <Select value={filters.year} onValueChange={(value) => onFiltersChange({ year: value })}>
            <SelectTrigger>
              <SelectValue placeholder="All years" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Years</SelectItem>
              {years.map((year) => (
                <SelectItem key={year} value={year}>
                  {year}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Client Type Filter */}
        <div>
          <label className="text-sm font-medium text-portfolio-text-dark dark:text-white mb-2 block">
            Client Type
          </label>
          <Select value={filters.clientType} onValueChange={(value) => onFiltersChange({ clientType: value })}>
            <SelectTrigger>
              <SelectValue placeholder="All types" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              {clientTypes.map((type) => (
                <SelectItem key={type} value={type}>
                  {type}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Duration Filter */}
        <div>
          <label className="text-sm font-medium text-portfolio-text-dark dark:text-white mb-2 block">
            Duration
          </label>
          <Select value={filters.duration} onValueChange={(value) => onFiltersChange({ duration: value })}>
            <SelectTrigger>
              <SelectValue placeholder="All durations" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Durations</SelectItem>
              {durations.map((duration) => (
                <SelectItem key={duration} value={duration}>
                  {duration}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Active Filters Display */}
      {hasActiveFilters && (
        <div className="flex flex-wrap gap-2 items-center">
          <span className="text-sm font-medium text-portfolio-text-dark dark:text-white">
            Active filters:
          </span>
          {filters.category !== 'all' && (
            <Badge variant="secondary" className="flex items-center gap-1">
              Category: {categories.find(c => c.id === filters.category)?.name}
              <X 
                className="w-3 h-3 cursor-pointer" 
                onClick={() => onFiltersChange({ category: 'all' })}
              />
            </Badge>
          )}
          {filters.year !== 'all' && (
            <Badge variant="secondary" className="flex items-center gap-1">
              Year: {filters.year}
              <X 
                className="w-3 h-3 cursor-pointer" 
                onClick={() => onFiltersChange({ year: 'all' })}
              />
            </Badge>
          )}
          {filters.clientType !== 'all' && (
            <Badge variant="secondary" className="flex items-center gap-1">
              Client: {filters.clientType}
              <X 
                className="w-3 h-3 cursor-pointer" 
                onClick={() => onFiltersChange({ clientType: 'all' })}
              />
            </Badge>
          )}
          {filters.duration !== 'all' && (
            <Badge variant="secondary" className="flex items-center gap-1">
              Duration: {filters.duration}
              <X 
                className="w-3 h-3 cursor-pointer" 
                onClick={() => onFiltersChange({ duration: 'all' })}
              />
            </Badge>
          )}
          {filters.searchQuery && (
            <Badge variant="secondary" className="flex items-center gap-1">
              Search: "{filters.searchQuery}"
              <X 
                className="w-3 h-3 cursor-pointer" 
                onClick={() => onFiltersChange({ searchQuery: '' })}
              />
            </Badge>
          )}
        </div>
      )}

      {/* Results Summary */}
      <div className="text-center text-portfolio-text-light dark:text-gray-300 text-sm">
        {filteredCount === 0 ? (
          <p>No projects found. Try adjusting your filters.</p>
        ) : (
          <p>
            Showing {filteredCount} of {totalCount} {filteredCount === 1 ? 'project' : 'projects'}
            {hasActiveFilters && ' (filtered)'}
          </p>
        )}
      </div>
    </div>
  );
};

export default EnhancedPortfolioFilters;
