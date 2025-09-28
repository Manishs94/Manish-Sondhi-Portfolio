
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { getAllProjects } from '@/utils/projectData';

interface RelatedProjectsProps {
  currentProjectId: number;
  currentProjectCategory: string | string[];
}

const RelatedProjects = ({ currentProjectId, currentProjectCategory }: RelatedProjectsProps) => {
  const allProjects = getAllProjects();
  
  // Get related projects based on category
  const getRelatedProjects = () => {
    const currentCategories = Array.isArray(currentProjectCategory) 
      ? currentProjectCategory 
      : [currentProjectCategory];
    
    return allProjects
      .filter(project => {
        if (project.id === currentProjectId) return false;
        
        const projectCategories = Array.isArray(project.category) 
          ? project.category 
          : [project.category];
        
        return currentCategories.some(cat => 
          projectCategories.some(projCat => 
            projCat.toLowerCase().includes(cat.toLowerCase()) || 
            cat.toLowerCase().includes(projCat.toLowerCase())
          )
        );
      })
      .slice(0, 3); // Show max 3 related projects
  };

  const relatedProjects = getRelatedProjects();

  if (relatedProjects.length === 0) {
    return null;
  }

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-portfolio-text-dark dark:text-white mb-4">
            Related Projects
          </h3>
          <p className="text-portfolio-text-light dark:text-gray-300">
            Explore more projects in similar categories
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {relatedProjects.map((project) => (
            <Card key={project.id} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="aspect-video overflow-hidden rounded-t-lg">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <CardHeader className="pb-3">
                <div className="flex flex-wrap gap-1 mb-2">
                  {(Array.isArray(project.category) ? project.category : [project.category])
                    .slice(0, 2)
                    .map((cat, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {cat}
                      </Badge>
                    ))}
                </div>
                <CardTitle className="text-lg line-clamp-2">{project.title}</CardTitle>
              </CardHeader>
              
              <CardContent className="pt-0">
                <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
                  {project.description}
                </p>
                
                <div className="flex gap-2">
                  <Button asChild size="sm" className="flex-1">
                    <Link to={`/project/${project.id}`} className="flex items-center gap-1">
                      View Project
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </Button>
                  
                  <Button asChild variant="outline" size="sm">
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-1"
                    >
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button asChild variant="outline">
            <Link to="/#portfolio" className="flex items-center gap-2">
              View All Projects
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default RelatedProjects;
