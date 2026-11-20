
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import CaseStudyModal from '@/components/CaseStudyModal';
import Reveal from '@/components/motion/Reveal';

interface ProjectCardProps {
  project: any;
  index?: number;
  onQuickView?: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index = 0, onQuickView }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const isInternalLink = (link: string) => link.startsWith('/');

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
    if (project.isCaseStudy && isInternalLink(project.link)) {
      navigate(project.link);
      return;
    }
    if (shouldOpenModal) {
      setIsModalOpen(true);
    } else if (typeof onQuickView === 'function') {
      onQuickView();
    }
  };

  const handleViewProject = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (project.isCaseStudy && isInternalLink(project.link)) {
      navigate(project.link);
      return;
    }
    if (shouldOpenModal) {
      setIsModalOpen(true);
    } else if (typeof onQuickView === 'function') {
      onQuickView();
    }
  };


  const tags: string[] = Array.isArray(project.category)
    ? project.category.slice(0, 2)
    : project.category
      ? [project.category]
      : [];

  return (
    <>
      <Reveal delay={(index % 3) * 100} className="h-full">
        <div
          role="link"
          tabIndex={0}
          aria-label={getProjectTitle(project)}
          className="group/card h-full cursor-pointer rounded-xl focus-visible:ring-2 focus-visible:ring-portfolio-accent focus-visible:ring-offset-2"
          onClick={handleCardClick}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              handleCardClick();
            }
          }}
        >
          <Card className="h-full flex flex-col bg-white dark:bg-gray-900 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-sm transition-shadow duration-300 group-hover/card:shadow-lg">
            <div className="aspect-[16/10] overflow-hidden bg-gray-100 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-800">
              <img
                src={getProjectImage(project)}
                alt={getProjectTitle(project)}
                loading="lazy"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <CardHeader className="px-5 pt-5 pb-0 sm:px-6 sm:pt-6 space-y-0">
              {tags.length > 0 && (
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-portfolio-accent mb-2">
                  {tags.join(' · ')}
                </p>
              )}
              <h3 className="text-lg font-semibold leading-snug text-portfolio-text-dark dark:text-white mb-2">
                {getProjectTitle(project)}
              </h3>
            </CardHeader>
            <CardContent className="px-5 pb-5 pt-0 sm:px-6 sm:pb-6 flex flex-col flex-1">
              {(project.subtitle || project.description) && (
                <p className="text-sm text-portfolio-text-light dark:text-gray-400 leading-relaxed line-clamp-2 mb-4">
                  {project.subtitle || project.description}
                </p>
              )}
              <span
                className="mt-auto inline-flex items-center gap-1.5 text-sm font-medium text-portfolio-accent"
                onClick={handleViewProject}
              >
                {project.isCaseStudy ? 'Read case study' : 'View project'}
                <ArrowRight size={16} className="transition-transform duration-300 group-hover/card:translate-x-1" />
              </span>
            </CardContent>
          </Card>
        </div>
      </Reveal>

      <CaseStudyModal
        project={project}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default ProjectCard;
