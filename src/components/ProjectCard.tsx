
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import DesignOverviewModal from '@/components/DesignOverviewModal';
import type { Project } from '@/utils/projectData';
import Reveal from '@/components/motion/Reveal';

interface ProjectCardProps {
  project: Project;
  index?: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index = 0 }) => {
  const [isOverviewOpen, setIsOverviewOpen] = useState(false);
  const navigate = useNavigate();

  const getProjectTitle = (p: Project) =>
    p.title === 'UI/UX Design Process Case study' || p.title === 'UI/UX Design Process'
      ? 'UI/UX Case Study: Innovative Design Studio'
      : p.title;

  // Case studies are pages on this site; everything else opens a case-study-style overview.
  const handleCardClick = () => {
    if (project.isCaseStudy && project.link.startsWith('/')) {
      navigate(project.link);
    } else {
      setIsOverviewOpen(true);
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
                src={project.image}
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
              <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-medium text-portfolio-accent">
                {project.isCaseStudy ? 'Read case study' : 'View overview'}
                <ArrowRight size={16} className="transition-transform duration-300 group-hover/card:translate-x-1" />
              </span>
            </CardContent>
          </Card>
        </div>
      </Reveal>

      {!project.isCaseStudy && (
        <DesignOverviewModal
          project={project}
          isOpen={isOverviewOpen}
          onClose={() => setIsOverviewOpen(false)}
        />
      )}
    </>
  );
};

export default ProjectCard;
