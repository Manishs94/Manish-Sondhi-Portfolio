
import React from 'react';
import { BookOpen } from 'lucide-react';

interface ProjectDetailHeaderProps {
  project: {
    id: number;
    title: string;
    subtitle?: string;
    description: string;
    image: string;
    category: string | string[];
    isCaseStudy?: boolean;
  };
}

const ProjectDetailHeader: React.FC<ProjectDetailHeaderProps> = ({ project }) => {
  return (
    <div className={`bg-white rounded-xl overflow-hidden shadow-lg ${project.isCaseStudy ? 'border-2 border-portfolio-accent' : ''}`}>
      <div className="h-72 md:h-96 overflow-hidden relative">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />

        {project.isCaseStudy && (
          <div className="absolute top-4 left-4 px-4 py-2 bg-portfolio-accent text-white rounded-full text-sm font-medium flex items-center gap-2">
            <BookOpen className="w-4 h-4" />
            Case Study
          </div>
        )}
      </div>

      <div className="p-8">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.category && (
            Array.isArray(project.category) ?
              project.category.map((cat: string) => (
                <span key={cat} className="px-3 py-1 bg-blue-50 text-portfolio-accent rounded-full text-sm">
                  {cat}
                </span>
              )) :
              <span className="px-3 py-1 bg-blue-50 text-portfolio-accent rounded-full text-sm">
                {project.category}
              </span>
          )}
        </div>

        <h1 className="text-3xl font-bold text-portfolio-text-dark mb-2">{project.title}</h1>
        {project.subtitle && <p className="text-lg text-portfolio-text-light mb-4">{project.subtitle}</p>}

        <div className="bg-gray-50 p-6 rounded-lg mb-8">
          <p className="text-portfolio-text-light leading-relaxed">{project.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailHeader;
