
import { Project } from './types/project';
import { caseStudies } from './data/caseStudies';
import { portfolioProjects } from './data/portfolioProjects';

// Combine all projects
export const allProjects: Project[] = [...caseStudies, ...portfolioProjects];

// Re-export types for backward compatibility
export type { Project, ProjectMetric, ProjectOverview } from './types/project';

// Function to get all projects
export const getAllProjects = (): Project[] => {
  return allProjects;
};

// Get case studies specifically
export const getCaseStudies = (): Project[] => {
  return allProjects.filter(project => project.isCaseStudy);
};

// Function to get project by ID
export const getProjectById = (id: number): Project | undefined => {
  return allProjects.find(project => project.id === id);
};

// Get sub-projects for a parent project
export const getSubProjects = (parentId: number): Project[] => {
  return allProjects.filter(project => project.parentProjectId === parentId);
};

// Get parent project for a sub-project
export const getParentProject = (projectId: number): Project | undefined => {
  const project = getProjectById(projectId);
  if (project?.parentProjectId) {
    return getProjectById(project.parentProjectId);
  }
  return undefined;
};

// Function to get all project IDs
export const getAllProjectIds = (): number[] => {
  return allProjects.map(project => project.id);
};

// Get projects by category
export const getProjectsByCategory = (category: string): Project[] => {
  if (category === 'all') {
    return allProjects;
  }
  
  return allProjects.filter(project => {
    if (Array.isArray(project.category)) {
      return project.category.some(cat => cat.toLowerCase().includes(category.toLowerCase()));
    }
    return project.category?.toLowerCase().includes(category.toLowerCase());
  });
};

// Get all available categories
export const getAllCategories = (): {id: string, name: string}[] => {
  const uniqueCategories = new Set<string>();
  uniqueCategories.add('all');
  
  allProjects.forEach(project => {
    if (Array.isArray(project.category)) {
      project.category.forEach(cat => {
        const categoryId = cat.toLowerCase().replace(/\s+/g, '-');
        uniqueCategories.add(categoryId);
      });
    } else if (project.category) {
      const categoryId = project.category.toLowerCase().replace(/\s+/g, '-');
      uniqueCategories.add(categoryId);
    }
  });
  
  return Array.from(uniqueCategories).map(cat => {
    const name = cat === 'all' ? 'All Projects' : cat.split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
    
    return { id: cat, name };
  });
};
