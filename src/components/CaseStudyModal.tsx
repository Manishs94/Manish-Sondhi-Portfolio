
import React from 'react';
import { X, ExternalLink, BookOpen } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { renderIcon } from '@/utils/iconMappings';
import { Link } from 'react-router-dom';
import { IconType } from '@/utils/iconMappings';

interface CaseStudyModalProps {
  project: {
    id: number;
    title: string;
    subtitle?: string;
    description: string;
    image: string;
    category: string | string[];
    metrics?: Array<{
      icon: string;
      value: string;
      label: string;
    }>;
    challenge?: string;
    problem?: string;
    process?: string;
    solution?: string;
    tools?: string[];
    link: string;
  } | null;
  isOpen: boolean;
  onClose: () => void;
}

const CaseStudyModal = ({ project, isOpen, onClose }: CaseStudyModalProps) => {
  if (!project) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="relative h-48 -mx-6 -mt-6 mb-4 overflow-hidden">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4">
              <Badge className="bg-portfolio-accent text-white flex items-center gap-1">
                <BookOpen className="w-3 h-3" />
                Case Study Preview
              </Badge>
            </div>
          </div>
          
          <div className="space-y-2">
            <div className="flex flex-wrap gap-2 mb-2">
              {Array.isArray(project.category) ? (
                project.category.map((cat, idx) => (
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
            
            <DialogTitle className="text-2xl font-bold">{project.title}</DialogTitle>
            {project.subtitle && (
              <p className="text-portfolio-accent font-medium">{project.subtitle}</p>
            )}
            <DialogDescription className="text-base">
              {project.description}
            </DialogDescription>
          </div>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Metrics */}
          {project.metrics && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {project.metrics.map((metric, idx) => (
                <div key={idx} className="flex flex-col items-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <div className="text-portfolio-accent mb-2">{renderIcon(metric.icon as IconType)}</div>
                  <div className="font-bold text-lg text-portfolio-text-dark dark:text-white">{metric.value}</div>
                  <div className="text-sm text-portfolio-text-light dark:text-gray-400 text-center">{metric.label}</div>
                </div>
              ))}
            </div>
          )}
          
          {/* Challenge */}
          {(project.challenge || project.problem) && (
            <div>
              <h3 className="text-lg font-semibold text-portfolio-text-dark dark:text-white mb-2">Challenge</h3>
              <p className="text-portfolio-text-light dark:text-gray-300">{project.challenge || project.problem}</p>
            </div>
          )}
          
          {/* Process */}
          {project.process && (
            <div>
              <h3 className="text-lg font-semibold text-portfolio-text-dark dark:text-white mb-2">Process</h3>
              <p className="text-portfolio-text-light dark:text-gray-300">{project.process}</p>
            </div>
          )}
          
          {/* Solution */}
          {project.solution && (
            <div>
              <h3 className="text-lg font-semibold text-portfolio-text-dark dark:text-white mb-2">Solution</h3>
              <p className="text-portfolio-text-light dark:text-gray-300">{project.solution}</p>
            </div>
          )}
          
          {/* Tools */}
          {project.tools && (
            <div>
              <h3 className="text-lg font-semibold text-portfolio-text-dark dark:text-white mb-2">Tools & Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {project.tools.map((tool, idx) => (
                  <span key={idx} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-portfolio-text-dark dark:text-gray-300 rounded text-sm">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          )}
          
          {/* Actions */}
          <div className="flex flex-wrap gap-4 pt-4 border-t">
            <Link to={`/project/${project.id}`} onClick={onClose}>
              <Button className="flex items-center gap-2">
                View Full Case Study <ExternalLink className="w-4 h-4" />
              </Button>
            </Link>
            <Button variant="outline" asChild>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                Live Project <ExternalLink className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CaseStudyModal;
