
import { IconType } from '../iconMappings';

// Define project types
export interface ProjectMetric {
  icon: IconType;
  value: string;
  label: string;
}

export interface ProjectOverview {
  challenge?: string;
  solution?: string;
  impact?: string;
}

export interface Project {
  id: number;
  title: string;
  subtitle?: string;
  description: string;
  image: string;
  category: string[] | string;
  tools?: string[];
  link: string;
  githubLink?: string;
  demoLink?: string;
  metrics?: ProjectMetric[];
  challenge?: string;
  problem?: string;
  process?: string;
  solution?: string;
  impact?: string;
  overview?: ProjectOverview;
  team?: string[];
  timeline?: string;
  role?: string;
  keyFeatures?: string[];
  features?: string[];
  status?: 'Completed' | 'In Progress' | 'Planning';
  isCaseStudy?: boolean;
  isFlagged?: boolean; // Flagship project indicator
  platformOverview?: boolean; // Platform overview case study
  parentProjectId?: number; // New field for hierarchy
  subProjects?: number[]; // New field for sub-projects
}
