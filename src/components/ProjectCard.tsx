
import React, { useState } from 'react';
import { ExternalLink, BookOpen } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { renderIcon } from '@/utils/iconMappings';
import CaseStudyModal from '@/components/CaseStudyModal';

interface ProjectCardProps {
  project: any;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
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

  const handleViewClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsModalOpen(true);
  };

  return (
    <>
      <Link 
        to={`/project/${project.id}`}
        className="transition-transform duration-300 hover:-translate-y-1"
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
                project.category.map((cat, idx) => (
                  <span key={idx} className="px-3 py-1 bg-blue-50 text-portfolio-accent rounded-full text-sm">
                    {cat}
                  </span>
                ))
              ) : (
                project.category && (
                  <span className="px-3 py-1 bg-blue-50 text-portfolio-accent rounded-full text-sm">
                    {project.category}
                  </span>
                )
              )}
            </div>
            <h3 className="text-xl font-bold text-portfolio-text-dark mb-1">{getProjectTitle(project)}</h3>
            {project.subtitle && <p className="text-portfolio-text-light text-sm mb-2">{project.subtitle}</p>}
          </CardHeader>
          <CardContent className="p-4 sm:p-6 pt-3">
            <p className="text-portfolio-text-light mb-4 line-clamp-3">{project.description}</p>
            
            {project.metrics && (
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6">
                {project.metrics.map((metric, idx) => (
                  <div key={idx} className="flex flex-col items-center p-2 bg-gray-50 rounded-lg">
                    <div className="text-portfolio-accent mb-1">{renderIcon(metric.icon)}</div>
                    <div className="font-bold text-portfolio-text-dark">{metric.value}</div>
                    <div className="text-xs text-portfolio-text-light">{metric.label}</div>
                  </div>
                ))}
              </div>
            )}
            
            <div className="space-y-3 mb-6">
              <div>
                <span className="text-sm font-semibold text-portfolio-text-dark">Challenge:</span>
                <p className="text-sm text-portfolio-text-light line-clamp-2">
                  {project.challenge || project.problem || (project.overview && project.overview.challenge) || ""}
                </p>
              </div>
              <div>
                <span className="text-sm font-semibold text-portfolio-text-dark">Process:</span>
                <p className="text-sm text-portfolio-text-light line-clamp-2">{project.process}</p>
              </div>
            </div>
            
            {project.tools && (
              <div className="mb-4">
                <span className="text-sm font-semibold text-portfolio-text-dark block mb-2">Tools & Technologies:</span>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool, idx) => (
                    <span key={idx} className="px-2 py-1 bg-gray-100 text-portfolio-text-dark rounded text-xs">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            )}
            
            <div 
              className="flex items-center gap-2 text-portfolio-accent hover:underline font-medium group cursor-pointer"
              onClick={handleViewClick}
            >
              {project.isCaseStudy ? 'View Case Study' : 'View Project'} 
              <ExternalLink size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </div>
          </CardContent>
        </Card>
      </Link>

      <CaseStudyModal
        project={project}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default ProjectCard;
