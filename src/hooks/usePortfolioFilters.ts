// src/hooks/usePortfolioFilters.ts
import { useState, useEffect } from 'react';
import { Project } from '../utils/types/project'; // Corrected import path

interface UsePortfolioFiltersProps {
  allProjects: Project[];
  caseStudies: Project[];
  selectedCategory: string;
  searchQuery: string;
  sortOption: 'newest' | 'alphabetical';
  activeTab: 'all' | 'case-studies';
}

interface UsePortfolioFiltersReturn {
  filteredProjects: Project[];
  isFiltering: boolean;
}

export const usePortfolioFilters = ({
  allProjects,
  caseStudies,
  selectedCategory,
  searchQuery,
  sortOption,
  activeTab,
}: UsePortfolioFiltersProps): UsePortfolioFiltersReturn => {
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  const [isFiltering, setIsFiltering] = useState<boolean>(false);

  useEffect(() => {
    setIsFiltering(true);
    // Add a small delay to show the animation - consistent with original Portfolio.tsx
    const filterTimer = setTimeout(() => {
      let projectsToFilter = activeTab === 'case-studies' ? [...caseStudies] : [...allProjects];

      // Filter by category (logic from Portfolio.tsx)
      if (selectedCategory && selectedCategory !== 'all') {
        projectsToFilter = projectsToFilter.filter(project => {
          if (Array.isArray(project.category)) {
            return project.category.some(cat =>
              cat.toLowerCase().replace(/\s+/g, '-') === selectedCategory
            );
          }
          return typeof project.category === 'string' &&
            project.category.toLowerCase().replace(/\s+/g, '-') === selectedCategory;
        });
      }

      // Filter by search query (logic from Portfolio.tsx)
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        projectsToFilter = projectsToFilter.filter(project =>
          project.title.toLowerCase().includes(query) ||
          project.description.toLowerCase().includes(query) ||
          (project.subtitle && project.subtitle.toLowerCase().includes(query)) ||
          (Array.isArray(project.category) && project.category.some(cat => cat.toLowerCase().includes(query))) ||
          (typeof project.category === 'string' && project.category.toLowerCase().includes(query)) ||
          (project.tools && project.tools.some(tool => tool.toLowerCase().includes(query)))
        );
      }

      // Sort projects (logic from Portfolio.tsx)
      if (sortOption === 'alphabetical') {
        projectsToFilter.sort((a, b) => a.title.localeCompare(b.title));
      } else if (sortOption === 'newest') {
        // Assuming higher IDs are newer projects
        projectsToFilter.sort((a, b) => b.id - a.id);
      }

      setFilteredProjects(projectsToFilter);
      setIsFiltering(false);
    }, 300); // Original delay from Portfolio.tsx

    return () => clearTimeout(filterTimer);
  }, [
    selectedCategory,
    searchQuery,
    sortOption,
    allProjects,
    caseStudies,
    activeTab,
  ]);

  return { filteredProjects, isFiltering };
};
