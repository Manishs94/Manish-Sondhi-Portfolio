
import React from 'react';
import { ExternalLink } from 'lucide-react';

interface ProjectDetailActionsProps {
  project: {
    link: string;
    githubLink?: string;
    demoLink?: string;
    isCaseStudy?: boolean;
  };
}

const ProjectDetailActions: React.FC<ProjectDetailActionsProps> = ({ project }) => {
  return (
    <div className="flex flex-wrap gap-4">
      <a
        href={project.link}
        className="flex items-center gap-2 text-white bg-portfolio-accent px-6 py-3 rounded-md hover:bg-opacity-90 transition-all"
        target="_blank"
        rel="noopener noreferrer"
      >
        {project.isCaseStudy ? 'View Case Study' : 'View Project'} <ExternalLink size={16} />
      </a>

      {project.githubLink && (
        <a
          href={project.githubLink}
          className="flex items-center gap-2 border border-portfolio-accent text-portfolio-accent px-6 py-3 rounded-md hover:bg-portfolio-accent hover:text-white transition-all"
          target="_blank"
          rel="noopener noreferrer"
        >
          View on GitHub <ExternalLink size={16} />
        </a>
      )}
    </div>
  );
};

export default ProjectDetailActions;
