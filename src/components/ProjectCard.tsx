
import React, { useState } from 'react';
import { ExternalLink, BookOpen } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { renderIcon } from '@/utils/iconMappings';
import CaseStudyModal from '@/components/CaseStudyModal';

interface ProjectCardProps {
  project: any;
  index?: number;
  onQuickView?: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index = 0, onQuickView }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to get the appropriate image for each project
  const getProjectImage = (project: any) => {
    if (project.title === "AI Chatbot Application" || project.title.toLowerCase().includes("ai chatbot")) {
      return "/lovable-uploads/25012106-d649-4a4f-b9d0-7eb1b4890a63.png";
    }
    return project.image;
  };

  // Function to get the display title for each project
  const getProjectTitle = (project: any) => {
    if (project.title === "UI/UX Design Process Case study" || project.title === "UI/UX Design Process") {
      return "UI/UX Case Study: Innovative Design Studio";
    }
    return project.title;
  };

  // Check if project is a design project
  const isDesignProject = () => {
    if (Array.isArray(project.category)) {
      return project.category.some(cat => 
        cat.toLowerCase().includes('design') || 
        cat.toLowerCase().includes('ui/ux')
      );
    }
    return project.category?.toLowerCase().includes('design') || 
           project.category?.toLowerCase().includes('ui/ux');
  };

  const shouldOpenModal = project.isCaseStudy || isDesignProject();

  const handleCardClick = () => {
    if (shouldOpenModal) {
      setIsModalOpen(true);
    } else if (typeof onQuickView === 'function') {
      onQuickView();
    }
  };

  const handleViewProject = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (shouldOpenModal) {
      setIsModalOpen(true);
    } else if (typeof onQuickView === 'function') {
      onQuickView();
    }
  };

  return (
    <>
      <div 
        className="transition-transform duration-300 hover:-translate-y-1 cursor-pointer"
        onClick={handleCardClick}
      >
        <Card 
          className={`bg-white rounded-xl overflow-hidden shadow-md transition-all duration-500 hover:shadow-xl animate-fade-in opacity-0 ${
            project.isCaseStudy ? 'border-2 border-portfolio-accent' : ''
          }`}
          style={{ animationDelay: `${0.1 * index}s`, animationFillMode: 'forwards' }}
        >
          <div className="overflow-hidden h-60 sm:h-64 relative">
            <img 
              src={getProjectImage(project)} 
              alt={getProjectTitle(project)} 
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
            
            {/* Case study badge */}
            {project.isCaseStudy && (
              <div className="absolute top-3 left-3 px-3 py-1 bg-portfolio-accent text-white rounded-full text-sm flex items-center gap-1">
                <BookOpen className="w-3 h-3" />
                Case Study
              </div>
            )}
            
            {/* Parent project indicator */}
            {project.parentProjectId && (
              <div className="absolute top-3 right-3 px-2 py-1 bg-blue-100 text-portfolio-accent rounded-full text-xs">
                Module
              </div>
            )}
            
            {/* Sub-projects indicator */}
            {project.subProjects && project.subProjects.length > 0 && (
              <div className="absolute bottom-3 left-3 px-2 py-1 bg-white/90 text-portfolio-accent rounded-full text-xs font-medium">
                {project.subProjects.length} Modules
              </div>
            )}
            
            {/* Status badge if available */}
            {project.status && (
              <Badge className="absolute top-3 right-3" variant={
                project.status === 'Completed' ? 'default' :
                project.status === 'In Progress' ? 'secondary' : 'outline'
              }>
                {project.status}
              </Badge>
            )}
          </div>
          <CardHeader className="p-4 sm:p-6 pb-0">
            <div className="flex flex-wrap gap-2 mb-3">
              {Array.isArray(project.category) ? (
                <>
                  {project.category.slice(0, 3).map((cat, idx) => (
                    <span key={idx} className="px-3 py-1 bg-blue-50 text-portfolio-accent rounded-full text-xs font-medium">
                      {cat}
                    </span>
                  ))}
                  {project.category.length > 3 && (
                    <span className="px-3 py-1 bg-blue-50 text-portfolio-accent rounded-full text-xs font-medium">
                      +{project.category.length - 3} more
                    </span>
                  )}
                </>
              ) : (
                project.category && (
                  <span className="px-3 py-1 bg-blue-50 text-portfolio-accent rounded-full text-xs font-medium">
                    {project.category}
                  </span>
                )
              )}
            </div>
            <h3 className="text-lg font-bold text-portfolio-text-dark mb-2">{getProjectTitle(project)}</h3>
            {project.subtitle && <p className="text-portfolio-text-light text-sm mb-4">{project.subtitle}</p>}
          </CardHeader>
          <CardContent className="p-4 sm:p-6 pt-0">
            {/* Impact metrics (1-2 bullets max) */}
            {project.metrics && project.metrics.length > 0 && (
              <div className="mb-4 space-y-1">
                {project.metrics.slice(0, 2).map((metric, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-sm text-portfolio-text-light">
                    <span className="text-portfolio-accent font-bold mt-0.5">•</span>
                    <span>{metric.label}: {metric.value}</span>
                  </div>
                ))}
              </div>
            )}
            
            <div 
              className="flex items-center gap-2 text-portfolio-accent hover:underline font-medium group cursor-pointer"
              onClick={handleViewProject}
            >
              View Case Study
              <ExternalLink size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </div>
          </CardContent>
        </Card>
      </div>

      <CaseStudyModal
        project={project}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default ProjectCard;
