
import React from 'react';
import { ExternalLink, BookOpen, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { renderIcon } from '@/utils/iconMappings';
import { Badge } from '@/components/ui/badge';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { IconType } from '@/utils/iconMappings';

interface ProjectSpotlightProps {
  project: {
    id: number;
    title: string;
    subtitle?: string;
    description: string;
    image: string;
    category: string | string[];
    isCaseStudy?: boolean;
    status?: string;
    metrics?: Array<{
      icon: string;
      value: string;
      label: string;
    }>;
    tools?: string[];
    link: string;
  };
  featured?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

const ProjectSpotlight = ({ project, featured = false, className = '', style }: ProjectSpotlightProps) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <div ref={ref} className={`${className} ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={style}>
      <Link 
        to={`/project/${project.id}`}
        className="group block"
      >
        <div className={`
          relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 shadow-lg 
          transition-all duration-700 ease-out
          hover:shadow-2xl hover:-translate-y-2
          ${featured ? 'md:h-96 lg:h-[28rem]' : 'h-80'}
        `}>
          {/* Image Container with Overlay */}
          <div className="relative h-48 md:h-56 overflow-hidden">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Status & Case Study Badges */}
            <div className="absolute top-4 left-4 flex gap-2">
              {project.isCaseStudy && (
                <Badge className="bg-portfolio-accent text-white flex items-center gap-1">
                  <BookOpen className="w-3 h-3" />
                  Case Study
                </Badge>
              )}
              {project.status && (
                <Badge variant={
                  project.status === 'Completed' ? 'default' :
                  project.status === 'In Progress' ? 'secondary' : 'outline'
                }>
                  {project.status}
                </Badge>
              )}
            </div>
            
            {/* Hover Action Button */}
            <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
              <div className="bg-white text-portfolio-accent px-4 py-2 rounded-full flex items-center gap-2 shadow-lg">
                <span className="text-sm font-medium">View Details</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </div>
          
          {/* Content Container */}
          <div className="p-6 space-y-4">
            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {Array.isArray(project.category) ? (
                project.category.slice(0, 2).map((cat, idx) => (
                  <span key={idx} className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-portfolio-accent rounded-full text-xs font-medium">
                    {cat}
                  </span>
                ))
              ) : (
                <span className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-portfolio-accent rounded-full text-xs font-medium">
                  {project.category}
                </span>
              )}
            </div>
            
            {/* Title and Description */}
            <div>
              <h3 className="text-xl font-bold text-portfolio-text-dark dark:text-white mb-2 group-hover:text-portfolio-accent transition-colors duration-300">
                {project.title}
              </h3>
              {project.subtitle && (
                <p className="text-sm text-portfolio-accent font-medium mb-2">{project.subtitle}</p>
              )}
              <p className="text-portfolio-text-light dark:text-gray-300 text-sm line-clamp-3">
                {project.description}
              </p>
            </div>
            
            {/* Metrics Preview */}
            {project.metrics && (
              <div className="flex gap-4 pt-2">
                {project.metrics.slice(0, 2).map((metric, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <div className="text-portfolio-accent">{renderIcon(metric.icon as IconType)}</div>
                    <div>
                      <div className="font-bold text-sm text-portfolio-text-dark dark:text-white">{metric.value}</div>
                      <div className="text-xs text-portfolio-text-light dark:text-gray-400">{metric.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProjectSpotlight;
