
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Folder, FileText } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { getSubProjects, getParentProject, getProjectById } from '@/utils/projectData';

interface ProjectHierarchyProps {
  currentProjectId: number;
}

const ProjectHierarchy = ({ currentProjectId }: ProjectHierarchyProps) => {
  const currentProject = getProjectById(currentProjectId);
  const parentProject = getParentProject(currentProjectId);
  const subProjects = getSubProjects(currentProjectId);

  if (!parentProject && subProjects.length === 0) {
    return null;
  }

  return (
    <div className="space-y-6">
      {/* Parent Project Navigation */}
      {parentProject && (
        <Card className="border-portfolio-accent/20 bg-blue-50/50">
          <CardHeader className="pb-3">
            <div className="flex items-center gap-2 text-sm text-portfolio-accent">
              <Folder className="w-4 h-4" />
              <span>Part of Case Study Series</span>
            </div>
          </CardHeader>
          <CardContent>
            <Link 
              to={`/project/${parentProject.id}`}
              className="group flex items-center gap-3 p-3 rounded-lg hover:bg-white/50 transition-colors"
            >
              <div className="flex-shrink-0 w-16 h-12 rounded-lg overflow-hidden">
                <img 
                  src={parentProject.image} 
                  alt={parentProject.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-grow">
                <h4 className="font-semibold text-portfolio-text-dark group-hover:text-portfolio-accent transition-colors">
                  {parentProject.title}
                </h4>
                <p className="text-sm text-portfolio-text-light line-clamp-1">
                  {parentProject.subtitle}
                </p>
              </div>
              <ChevronRight className="w-4 h-4 text-portfolio-accent" />
            </Link>
          </CardContent>
        </Card>
      )}

      {/* Sub-projects */}
      {subProjects.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="w-5 h-5 text-portfolio-accent" />
              Related Case Studies
            </CardTitle>
            <p className="text-sm text-portfolio-text-light">
              Explore specific modules and components within this comprehensive system
            </p>
          </CardHeader>
          <CardContent>
            <div className="grid gap-3">
              {subProjects.map((subProject) => (
                <Link 
                  key={subProject.id}
                  to={`/project/${subProject.id}`}
                  className="group flex items-center gap-3 p-3 rounded-lg border border-gray-200 hover:border-portfolio-accent hover:bg-blue-50/30 transition-all"
                >
                  <div className="flex-shrink-0 w-16 h-12 rounded-lg overflow-hidden">
                    <img 
                      src={subProject.image} 
                      alt={subProject.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-grow">
                    <h4 className="font-semibold text-portfolio-text-dark group-hover:text-portfolio-accent transition-colors">
                      {subProject.title}
                    </h4>
                    <p className="text-sm text-portfolio-text-light line-clamp-1">
                      {subProject.subtitle}
                    </p>
                    <div className="flex items-center gap-2 mt-1">
                      <Badge variant="outline" className="text-xs">
                        {subProject.status}
                      </Badge>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-portfolio-accent" />
                </Link>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default ProjectHierarchy;
