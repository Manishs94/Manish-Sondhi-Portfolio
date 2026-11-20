import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Dialog, DialogContent, DialogDescription, DialogTitle } from '@/components/ui/dialog';
import type { Project } from '@/utils/projectData';

interface DesignOverviewModalProps {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
}

/**
 * Case-study-style overview for a side project: screenshot, tags, summary, what it includes,
 * and links out. Deliberately leaves out the data file's metrics and problem/process copy,
 * which are unverified for these projects.
 */
const DesignOverviewModal: React.FC<DesignOverviewModalProps> = ({ project, isOpen, onClose }) => {
  const tags = Array.isArray(project.category) ? project.category : project.category ? [project.category] : [];
  const features = project.features ?? project.keyFeatures ?? [];
  const liveUrl = project.demoLink ?? project.link;

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-4xl w-[calc(100vw-2rem)] max-h-[90vh] overflow-y-auto p-0 gap-0">
        <div className="bg-gray-100 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
          <img
            src={project.image}
            alt={`${project.title} screenshot`}
            className="w-full h-auto aspect-[16/10] object-cover object-top"
          />
        </div>

        <div className="p-6 sm:p-8">
          {tags.length > 0 && (
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-portfolio-accent mb-3">
              {tags.join(' · ')}
            </p>
          )}
          <DialogTitle className="font-display text-2xl sm:text-3xl font-bold text-portfolio-text-dark dark:text-white mb-3">
            {project.title}
          </DialogTitle>
          <DialogDescription className="text-base text-portfolio-text-light dark:text-gray-300 leading-relaxed mb-6">
            {project.description}
          </DialogDescription>

          {features.length > 0 && (
            <div className="mb-6">
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-portfolio-text-dark dark:text-white mb-3">
                What's in it
              </p>
              <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2">
                {features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-portfolio-text-light dark:text-gray-300">
                    <span className="text-portfolio-accent mt-0.5">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="flex flex-wrap gap-3 pt-6 border-t border-gray-200 dark:border-gray-700">
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-portfolio-accent px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-600 transition-colors"
            >
              View live project <ExternalLink size={16} />
            </a>
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-gray-300 dark:border-gray-600 px-5 py-2.5 text-sm font-medium text-portfolio-text-dark dark:text-white hover:border-portfolio-accent hover:text-portfolio-accent transition-colors"
              >
                <Github size={16} /> View code
              </a>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DesignOverviewModal;
