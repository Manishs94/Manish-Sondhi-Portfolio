import React from 'react';
import ProjectCard from './ProjectCard';

interface ProjectGridProps {
  projects: any[];
  isFiltering: boolean;
  onQuickView: (project: any) => void;
}

const ProjectGrid: React.FC<ProjectGridProps> = ({ projects, isFiltering, onQuickView }) => {
  return (
    <div 
      className={`grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12 
        transition-opacity duration-300 ${isFiltering ? 'opacity-50' : 'opacity-100'}`}
    >
      {projects.map((project, index) => (
        <div
          key={project.id}
          className={`transform transition-all duration-500 ${
            isFiltering ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
          }`}
          style={{ transitionDelay: `${index * 0.1}s` }}
        >
          <ProjectCard
            project={project}
            index={index}
            onQuickView={() => onQuickView(project)}
          />
        </div>
      ))}
    </div>
  );
};

export default ProjectGrid;