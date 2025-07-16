
import React from 'react';
import { X, ExternalLink, BookOpen } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { renderIcon } from '@/utils/iconMappings';
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
    isCaseStudy?: boolean;
  } | null;
  isOpen: boolean;
  onClose: () => void;
}

const CaseStudyModal = ({ project, isOpen, onClose }: CaseStudyModalProps) => {
  if (!project) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[98vw] max-h-[98vh] w-full h-full p-0 overflow-hidden">
        {/* Header with project info */}
        <div className="flex items-center justify-between p-4 border-b bg-white dark:bg-gray-800">
          <div className="flex items-center gap-3">
            <Badge className="bg-portfolio-accent text-white flex items-center gap-1">
              <BookOpen className="w-3 h-3" />
              {project.isCaseStudy ? 'Case Study' : 'Project'}
            </Badge>
            <div>
              <h3 className="font-semibold text-lg">{project.title}</h3>
              {project.subtitle && (
                <p className="text-sm text-portfolio-accent">{project.subtitle}</p>
              )}
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" asChild>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                Open in New Tab <ExternalLink className="w-4 h-4" />
              </a>
            </Button>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Iframe content */}
        <div className="flex-1 w-full h-[calc(98vh-80px)]">
          <iframe
            src={project.link}
            title={project.title}
            className="w-full h-full border-0 bg-white"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-top-navigation allow-presentation"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            onLoad={(e) => {
              console.log('Iframe loaded successfully');
            }}
            onError={(e) => {
              console.error('Iframe failed to load:', e);
            }}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CaseStudyModal;
