
import { renderHook } from '@testing-library/react';
import { usePortfolioFilters } from './usePortfolioFilters';
import { Project } from '../utils/types/project';

// Mock data for testing - now properly matching the Project interface
const mockProjects: Project[] = [
  {
    id: 1,
    title: 'Test Project 1',
    description: 'Test description 1',
    image: '/test-image-1.jpg',
    category: ['Web Design'],
    link: '/project/1',
    isCaseStudy: false
  },
  {
    id: 2,
    title: 'Test Project 2',
    description: 'Test description 2',
    image: '/test-image-2.jpg',
    category: ['Mobile App'],
    link: '/project/2',
    isCaseStudy: true
  }
];

const mockCaseStudies: Project[] = [
  {
    id: 2,
    title: 'Test Project 2',
    description: 'Test description 2',
    image: '/test-image-2.jpg',
    category: ['Mobile App'],
    link: '/project/2',
    isCaseStudy: true
  }
];

describe('usePortfolioFilters', () => {
  const defaultProps = {
    allProjects: mockProjects,
    caseStudies: mockCaseStudies,
    selectedCategory: 'all',
    searchQuery: '',
    sortOption: 'newest' as const,
    activeTab: 'all' as const,
  };

  it('should return all projects by default', () => {
    const { result } = renderHook(() => usePortfolioFilters(defaultProps));
    
    expect(result.current.filteredProjects).toHaveLength(2);
    expect(result.current.isFiltering).toBe(false);
  });

  describe('category filtering', () => {
    it('should filter projects by category', () => {
      const { result } = renderHook(() => usePortfolioFilters({
        ...defaultProps,
        selectedCategory: 'web-design'
      }));
      
      expect(result.current.filteredProjects).toHaveLength(1);
      expect(result.current.filteredProjects[0].title).toBe('Test Project 1');
    });

    it('should handle mobile-app category', () => {
      const { result } = renderHook(() => usePortfolioFilters({
        ...defaultProps,
        selectedCategory: 'mobile-app'
      }));
        
        expect(result.current.filteredProjects).toHaveLength(1);
        expect(result.current.filteredProjects[0].title).toBe('Test Project 2');
    });

    it('should return empty array for non-existent category', () => {
      const { result } = renderHook(() => usePortfolioFilters({
        ...defaultProps,
        selectedCategory: 'non-existent'
      }));
      
      expect(result.current.filteredProjects).toHaveLength(0);
    });
  });

  describe('search filtering', () => {
    it('should filter projects by search query', () => {
      const { result } = renderHook(() => usePortfolioFilters({
        ...defaultProps,
        searchQuery: 'Project 1'
      }));
      
      expect(result.current.filteredProjects).toHaveLength(1);
      expect(result.current.filteredProjects[0].title).toBe('Test Project 1');
    });

    it('should be case insensitive', () => {
      const { result } = renderHook(() => usePortfolioFilters({
        ...defaultProps,
        searchQuery: 'project 2'
      }));
      
      expect(result.current.filteredProjects).toHaveLength(1);
      expect(result.current.filteredProjects[0].title).toBe('Test Project 2');
    });

    it('should return empty array when no matches', () => {
      const { result } = renderHook(() => usePortfolioFilters({
        ...defaultProps,
        searchQuery: 'non-existent project'
      }));
      
      expect(result.current.filteredProjects).toHaveLength(0);
    });
  });

  describe('tab filtering', () => {
    it('should show only case studies when activeTab is case-studies', () => {
      const { result } = renderHook(() => usePortfolioFilters({
        ...defaultProps,
        activeTab: 'case-studies'
      }));
      
      expect(result.current.filteredProjects).toHaveLength(1);
      expect(result.current.filteredProjects[0].isCaseStudy).toBe(true);
      expect(result.current.filteredProjects[0].title).toBe('Test Project 2');
    });

    it('should show all projects when activeTab is all', () => {
      const { result } = renderHook(() => usePortfolioFilters({
        ...defaultProps,
        activeTab: 'all'
      }));
        
        expect(result.current.filteredProjects).toHaveLength(2);
    });
  });

  describe('sorting', () => {
    it('should sort projects by newest first', () => {
      const { result } = renderHook(() => usePortfolioFilters({
        ...defaultProps,
        sortOption: 'newest'
      }));
      
      expect(result.current.filteredProjects[0].id).toBe(2);
      expect(result.current.filteredProjects[1].id).toBe(1);
    });

    it('should sort projects alphabetically', () => {
      const { result } = renderHook(() => usePortfolioFilters({
        ...defaultProps,
        sortOption: 'alphabetical'
      }));
      
      expect(result.current.filteredProjects[0].title).toBe('Test Project 1');
      expect(result.current.filteredProjects[1].title).toBe('Test Project 2');
    });
  });

  describe('combined filtering', () => {
    it('should apply category and search filters together', () => {
      const { result } = renderHook(() => usePortfolioFilters({
        ...defaultProps,
        selectedCategory: 'mobile-app',
        searchQuery: 'Project 2'
      }));
      
      expect(result.current.filteredProjects).toHaveLength(1);
      expect(result.current.filteredProjects[0].title).toBe('Test Project 2');
      expect(result.current.filteredProjects[0].category).toContain('Mobile App');
    });

    it('should apply all filters together', () => {
      const { result } = renderHook(() => usePortfolioFilters({
        ...defaultProps,
        selectedCategory: 'mobile-app',
        searchQuery: 'Project',
        activeTab: 'case-studies',
        sortOption: 'alphabetical'
      }));
        
        expect(result.current.filteredProjects).toHaveLength(1);
    });
  });
});
