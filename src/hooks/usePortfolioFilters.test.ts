import { renderHook, act } from '@testing-library/react';
import { usePortfolioFilters } from './usePortfolioFilters'; // Assuming test file is in src/hooks
import { Project } from '../utils/types/project'; // Adjust path relative to src/hooks

// Mock data using the Project interface
const mockProjects: Project[] = [
  {
    id: 1, title: 'Alpha Project', subtitle: 'Subtitle Alpha', description: 'Description about React',
    category: 'Web Development', tools: ['React', 'TypeScript'], isCaseStudy: false,
    image: 'alpha.jpg', link: '/alpha'
  },
  {
    id: 2, title: 'Bravo Case Study', subtitle: 'Subtitle Bravo', description: 'Description about Mobile and Swift',
    category: ['Mobile Development', 'iOS'], tools: ['Swift', 'Xcode'], isCaseStudy: true,
    image: 'bravo.jpg', link: '/bravo'
  },
  {
    id: 3, title: 'Charlie Project', subtitle: 'Subtitle Charlie', description: 'Description about Angular',
    category: 'Web Development', tools: ['Angular', 'JavaScript'], isCaseStudy: false,
    image: 'charlie.jpg', link: '/charlie'
  },
  {
    id: 4, title: 'Delta Case Study', subtitle: 'Subtitle Delta', description: 'Description about Vue for Web',
    category: 'Web Development', tools: ['Vue', 'CSS'], isCaseStudy: true,
    image: 'delta.jpg', link: '/delta'
  },
  {
    id: 5, title: 'Echo Project', subtitle: 'Subtitle Echo', description: 'Another Mobile app with React Native',
    category: 'Mobile Development', tools: ['React Native', 'Firebase'], isCaseStudy: false,
    image: 'echo.jpg', link: '/echo'
  },
];

const mockCaseStudies = mockProjects.filter(p => p.isCaseStudy); // Bravo (2), Delta (4)

// Helper to wait for the hook's internal timeout
const waitForFilterDebounce = async () => {
  await act(async () => {
    await new Promise(resolve => setTimeout(resolve, 350)); // A bit more than 300ms
  });
};

describe('usePortfolioFilters', () => {
  // Initial Props for most tests
  const initialHookProps = {
    allProjects: mockProjects,
    caseStudies: mockCaseStudies,
    selectedCategory: 'all',
    searchQuery: '',
    sortOption: 'newest' as 'newest' | 'alphabetical',
    activeTab: 'all' as 'all' | 'case-studies',
  };

  it('should return all projects by default, sorted by newest', async () => {
    const { result } = renderHook(() => usePortfolioFilters(initialHookProps));
    await waitForFilterDebounce(); // Initial effect also has a timeout
    expect(result.current.filteredProjects.length).toBe(5);
    expect(result.current.filteredProjects.map(p => p.id)).toEqual([5, 4, 3, 2, 1]); // Newest = descending ID
  });

  describe('Category Filtering', () => {
    it('should filter by a single string category (Web Development)', async () => {
      const { result, rerender } = renderHook(usePortfolioFilters, { initialProps: { ...initialHookProps, selectedCategory: 'web-development' } });
      await waitForFilterDebounce();
      expect(result.current.filteredProjects.length).toBe(3); // Alpha, Charlie, Delta
      expect(result.current.filteredProjects.every(p =>
        (Array.isArray(p.category) ? p.category.some(c => c.toLowerCase().replace(/\s+/g, '-') === 'web-development') : (p.category as string).toLowerCase().replace(/\s+/g, '-') === 'web-development')
      )).toBeTruthy();
    });

    it('should filter by a category from an array (Mobile Development)', async () => {
        const { result } = renderHook(() => usePortfolioFilters({ ...initialHookProps, selectedCategory: 'mobile-development' }));
        await waitForFilterDebounce();
        expect(result.current.filteredProjects.length).toBe(2); // Bravo, Echo
        expect(result.current.filteredProjects.every(p =>
          (Array.isArray(p.category) ? p.category.some(c => c.toLowerCase().replace(/\s+/g, '-') === 'mobile-development') : (p.category as string).toLowerCase().replace(/\s+/g, '-') === 'mobile-development')
        )).toBeTruthy();
    });

    it('should return no projects for a category with no matches', async () => {
      const { result } = renderHook(() => usePortfolioFilters({ ...initialHookProps, selectedCategory: 'non-existent-category' }));
      await waitForFilterDebounce();
      expect(result.current.filteredProjects.length).toBe(0);
    });
  });

  describe('Search Query Filtering', () => {
    it('should filter by project title', async () => {
      const { result } = renderHook(() => usePortfolioFilters({ ...initialHookProps, searchQuery: 'Alpha' }));
      await waitForFilterDebounce();
      expect(result.current.filteredProjects.length).toBe(1);
      expect(result.current.filteredProjects[0].title).toBe('Alpha Project');
    });

    it('should filter by project description', async () => {
      const { result } = renderHook(() => usePortfolioFilters({ ...initialHookProps, searchQuery: 'Angular' }));
      await waitForFilterDebounce();
      expect(result.current.filteredProjects.length).toBe(1);
      expect(result.current.filteredProjects[0].title).toBe('Charlie Project');
    });

    it('should filter by tool', async () => {
      const { result } = renderHook(() => usePortfolioFilters({ ...initialHookProps, searchQuery: 'React' }));
      await waitForFilterDebounce();
      // Alpha (React), Echo (React Native)
      expect(result.current.filteredProjects.length).toBe(2);
    });

    it('should be case-insensitive for search query', async () => {
      const { result } = renderHook(() => usePortfolioFilters({ ...initialHookProps, searchQuery: 'react' })); // lowercase
      await waitForFilterDebounce();
      expect(result.current.filteredProjects.length).toBe(2);
    });

    it('should return no projects for a search query with no matches', async () => {
      const { result } = renderHook(() => usePortfolioFilters({ ...initialHookProps, searchQuery: 'NoSuchThingExists' }));
      await waitForFilterDebounce();
      expect(result.current.filteredProjects.length).toBe(0);
    });
  });

  describe('Sort Option', () => {
    it('should sort by newest (ID descending) by default', async () => {
      const { result } = renderHook(() => usePortfolioFilters(initialHookProps));
      await waitForFilterDebounce();
      expect(result.current.filteredProjects.map(p => p.id)).toEqual([5, 4, 3, 2, 1]);
    });

    it('should sort by alphabetical (title ascending)', async () => {
      const { result } = renderHook(() => usePortfolioFilters({ ...initialHookProps, sortOption: 'alphabetical' }));
      await waitForFilterDebounce();
      expect(result.current.filteredProjects.map(p => p.title)).toEqual([
        'Alpha Project', 'Bravo Case Study', 'Charlie Project', 'Delta Case Study', 'Echo Project'
      ]);
    });
  });

  describe('Active Tab Behavior', () => {
    it('should filter for case studies when activeTab is "case-studies"', async () => {
      const { result } = renderHook(() => usePortfolioFilters({ ...initialHookProps, activeTab: 'case-studies' }));
      await waitForFilterDebounce();
      expect(result.current.filteredProjects.length).toBe(mockCaseStudies.length); // 2
      expect(result.current.filteredProjects.every(p => p.isCaseStudy)).toBeTruthy();
      // Check sorting within case studies (newest by default)
      expect(result.current.filteredProjects.map(p => p.id)).toEqual([4, 2]); // Delta (4), Bravo (2)
    });

    it('should use all projects when activeTab is "all"', async () => {
        const { result } = renderHook(() => usePortfolioFilters({ ...initialHookProps, activeTab: 'all' }));
        await waitForFilterDebounce();
        expect(result.current.filteredProjects.length).toBe(mockProjects.length); // 5
      });
  });

  describe('Combined Filters', () => {
    it('should filter by category "Web Development" and search "Vue" on "all" tab', async () => {
      const { result } = renderHook(() => usePortfolioFilters({
        ...initialHookProps,
        selectedCategory: 'web-development',
        searchQuery: 'Vue',
        activeTab: 'all'
      }));
      await waitForFilterDebounce();
      expect(result.current.filteredProjects.length).toBe(1);
      expect(result.current.filteredProjects[0].title).toBe('Delta Case Study');
    });

    it('should filter for case studies by category "Web Development"', async () => {
      const { result } = renderHook(() => usePortfolioFilters({
        ...initialHookProps,
        selectedCategory: 'web-development',
        activeTab: 'case-studies'
      }));
      await waitForFilterDebounce();
      expect(result.current.filteredProjects.length).toBe(1); // Delta Case Study
      expect(result.current.filteredProjects[0].id).toBe(4);
      expect(result.current.filteredProjects[0].isCaseStudy).toBeTruthy();
    });

    it('should return no projects if combined filters match nothing', async () => {
        const { result } = renderHook(() => usePortfolioFilters({
          ...initialHookProps,
          selectedCategory: 'mobile-development',
          searchQuery: 'Vue', // Vue is not in mobile projects
          activeTab: 'all'
        }));
        await waitForFilterDebounce();
        expect(result.current.filteredProjects.length).toBe(0);
      });
  });

  describe('isFiltering State', () => {
    it('should set isFiltering to true during processing and false after', async () => {
      const { result, rerender } = renderHook(
        (props) => usePortfolioFilters(props),
        { initialProps: initialHookProps }
      );

      // Initial render, isFiltering should become false after timeout
      expect(result.current.isFiltering).toBe(true); // Initially true because of useEffect
      await waitForFilterDebounce();
      expect(result.current.isFiltering).toBe(false);

      // Trigger a change
      act(() => {
        rerender({ ...initialHookProps, selectedCategory: 'web-development' });
      });

      // isFiltering should be true immediately after prop change triggering useEffect
      expect(result.current.isFiltering).toBe(true);

      await waitForFilterDebounce(); // Wait for the timeout in useEffect
      expect(result.current.isFiltering).toBe(false); // Should be false after processing
    });
  });
});
