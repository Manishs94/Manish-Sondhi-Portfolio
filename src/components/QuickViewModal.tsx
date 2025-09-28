import React from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Project } from '@/utils/projectData';

interface QuickViewModalProps {
  project: Project;
  onClose: () => void;
}

const QuickViewModal: React.FC<QuickViewModalProps> = ({ project, onClose }) => {
  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 animate-fade-in"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div 
        className="bg-white dark:bg-gray-800 rounded-lg w-full max-w-4xl mx-4 animate-slide-in"
        style={{ maxHeight: '90vh', overflow: 'auto' }}
      >
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-2xl font-bold text-portfolio-text-dark dark:text-white mb-2">
                {project.title}
              </h3>
              {project.subtitle && (
                <p className="text-lg text-portfolio-accent">{project.subtitle}</p>
              )}
            </div>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full"
            >
              <span className="sr-only">Close</span>
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="space-y-6">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 object-cover rounded-lg mb-4 transition-transform duration-300 hover:scale-105"
            />
            <p className="text-portfolio-text-light dark:text-gray-300">{project.description}</p>
            
            {project.features && (
              <div>
                <h4 className="text-lg font-semibold text-portfolio-text-dark dark:text-white mb-2">
                  Key Features
                </h4>
                <ul className="grid grid-cols-2 gap-2">
                  {project.features.map((feature, idx) => (
                    <li 
                      key={idx} 
                      className="flex items-center text-portfolio-text-light dark:text-gray-300 transition-colors hover:text-portfolio-text-dark dark:hover:text-white"
                    >
                      <span className="text-portfolio-accent mr-2">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {project.tools && (
              <div>
                <h4 className="text-lg font-semibold text-portfolio-text-dark dark:text-white mb-2">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-portfolio-text-light dark:text-gray-300 rounded-full text-sm font-medium transition-all duration-300 hover:bg-portfolio-accent hover:text-white transform hover:scale-105"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="flex gap-4">
              {project.link && (
                <Button 
                  onClick={() => window.open(project.link, '_blank')}
                  className="flex-1 bg-portfolio-accent hover:bg-portfolio-accent/90"
                >
                  View Live Demo
                </Button>
              )}
              {project.githubLink && (
                <Button 
                  onClick={() => window.open(project.githubLink, '_blank')}
                  variant="outline"
                  className="flex-1"
                >
                  View Source Code
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickViewModal;