
import React from 'react';
import { X, ExternalLink, BookOpen, AlertCircle, RefreshCw } from 'lucide-react';
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
  const [iframeLoaded, setIframeLoaded] = React.useState(false);
  const [iframeError, setIframeError] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);

  if (!project) return null;

  // Check if it's a design project
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

  const handleIframeLoad = () => {
    setIframeLoaded(true);
    setIsLoading(false);
    setIframeError(false);
    console.log('Iframe loaded successfully');
  };

  const handleIframeError = () => {
    setIframeError(true);
    setIsLoading(false);
    console.error('Iframe failed to load - likely due to X-Frame-Options');
  };

  const retryIframe = () => {
    setIsLoading(true);
    setIframeError(false);
    setIframeLoaded(false);
    // Force iframe reload by changing src
    const iframe = document.querySelector('#case-study-iframe') as HTMLIFrameElement;
    if (iframe) {
      const originalSrc = iframe.src;
      iframe.src = '';
      setTimeout(() => {
        iframe.src = originalSrc;
      }, 100);
    }
  };

  // Reset states when modal opens/closes
  React.useEffect(() => {
    if (isOpen) {
      setIsLoading(true);
      setIframeError(false);
      setIframeLoaded(false);
    }
  }, [isOpen]);

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
        <div className="flex-1 w-full h-[calc(98vh-80px)] relative bg-gray-50 dark:bg-gray-900">
          {/* Loading State */}
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-white dark:bg-gray-800 z-10">
              <div className="text-center">
                <RefreshCw className="w-8 h-8 animate-spin text-portfolio-accent mx-auto mb-4" />
                <p className="text-lg font-medium text-portfolio-text-dark dark:text-white mb-2">
                  {isDesignProject() ? 'Loading Design...' : 'Loading Case Study...'}
                </p>
                <p className="text-sm text-portfolio-text-light dark:text-gray-400">
                  Please wait while we load the preview
                </p>
              </div>
            </div>
          )}

          {/* Error State with Fallback */}
          {iframeError && (
            <div className="absolute inset-0 flex items-center justify-center bg-white dark:bg-gray-800 z-10">
              <div className="text-center max-w-md mx-auto p-8">
                <AlertCircle className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-portfolio-text-dark dark:text-white mb-4">
                  Preview Restricted
                </h3>
                <p className="text-portfolio-text-light dark:text-gray-300 mb-6">
                  This case study cannot be previewed in the modal due to security restrictions. 
                  Click below to view the full case study in a new tab.
                </p>
                
                {/* Project Preview Card */}
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 mb-6">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-32 object-cover rounded-lg mb-4"
                  />
                  <h4 className="font-bold text-lg text-portfolio-text-dark dark:text-white mb-2">
                    {project.title}
                  </h4>
                  {project.subtitle && (
                    <p className="text-portfolio-accent font-medium mb-2">{project.subtitle}</p>
                  )}
                  <p className="text-sm text-portfolio-text-light dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                  
                  {/* Metrics Preview */}
                  {project.metrics && (
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      {project.metrics.slice(0, 4).map((metric, idx) => (
                        <div key={idx} className="text-center p-2 bg-white dark:bg-gray-600 rounded">
                          <div className="text-portfolio-accent mb-1">
                            {renderIcon(metric.icon as IconType)}
                          </div>
                          <div className="font-bold text-sm">{metric.value}</div>
                          <div className="text-xs text-portfolio-text-light dark:text-gray-400">
                            {metric.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                
                <div className="flex gap-3 justify-center">
                  <Button onClick={retryIframe} variant="outline" size="sm">
                    <RefreshCw className="w-4 h-4 mr-2" />
                    Try Again
                  </Button>
                  <Button asChild size="sm" className="bg-portfolio-accent hover:bg-portfolio-accent/90">
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Full Case Study
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          )}

          {/* Iframe */}
          <iframe
            id="case-study-iframe"
            src={project.link}
            title={project.title}
            className={`w-full h-full border-0 bg-white transition-opacity duration-300 ${
              iframeLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
            allowFullScreen
            sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-top-navigation allow-presentation allow-downloads"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            onLoad={handleIframeLoad}
            onError={handleIframeError}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CaseStudyModal;
