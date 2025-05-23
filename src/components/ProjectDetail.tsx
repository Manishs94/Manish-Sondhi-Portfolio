import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { getProjectById } from '@/utils/projectData';
import { renderIcon } from '@/utils/iconMappings';

const ProjectDetail = () => {
  const { id } = useParams();
  const [project, setProject] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      const projectData = getProjectById(parseInt(id));
      setProject(projectData);
      setLoading(false);
    }
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-portfolio-accent">Loading project details...</div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold mb-4">Project Not Found</h2>
        <Link to="/#portfolio">
          <Button className="flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back to Portfolio
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4">
        <Link 
          to="/#portfolio" 
          className="inline-flex items-center gap-2 text-portfolio-accent hover:underline mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Portfolio
        </Link>

        <div className="bg-white rounded-xl overflow-hidden shadow-lg">
          <div className="h-72 md:h-96 overflow-hidden">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="p-8">
            <div className="flex flex-wrap gap-2 mb-4">
              {project.category && (
                Array.isArray(project.category) ? 
                  project.category.map((cat: string) => (
                    <span key={cat} className="px-3 py-1 bg-blue-50 text-portfolio-accent rounded-full text-sm">
                      {cat}
                    </span>
                  )) : 
                  <span className="px-3 py-1 bg-blue-50 text-portfolio-accent rounded-full text-sm">
                    {project.category}
                  </span>
              )}
            </div>
            
            <h1 className="text-3xl font-bold text-portfolio-text-dark mb-2">{project.title}</h1>
            {project.subtitle && <p className="text-lg text-portfolio-text-light mb-4">{project.subtitle}</p>}
            
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <p className="text-portfolio-text-light leading-relaxed">{project.description}</p>
            </div>
            
            {project.metrics && (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {project.metrics.map((metric: any, idx: number) => (
                  <div key={idx} className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-portfolio-accent mb-2">{renderIcon(metric.icon)}</div>
                    <div className="font-bold text-xl text-portfolio-text-dark">{metric.value}</div>
                    <div className="text-sm text-portfolio-text-light">{metric.label}</div>
                  </div>
                ))}
              </div>
            )}
            
            <div className="space-y-8 mb-8">
              <div>
                <h3 className="text-xl font-semibold text-portfolio-text-dark mb-3">Challenge</h3>
                <p className="text-portfolio-text-light">{project.challenge || project.problem}</p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-portfolio-text-dark mb-3">Process</h3>
                <p className="text-portfolio-text-light">{project.process}</p>
              </div>
              
              {project.solution && (
                <div>
                  <h3 className="text-xl font-semibold text-portfolio-text-dark mb-3">Solution</h3>
                  <p className="text-portfolio-text-light">{project.solution}</p>
                </div>
              )}
              
              {(project.overview?.impact || project.impact) && (
                <div>
                  <h3 className="text-xl font-semibold text-portfolio-text-dark mb-3">Impact</h3>
                  <p className="text-portfolio-text-light">{project.overview?.impact || project.impact}</p>
                </div>
              )}
            </div>
            
            {(project.keyFeatures || project.features) && (
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-portfolio-text-dark mb-3">Key Features</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {(project.keyFeatures || project.features).map((feature: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-2 text-portfolio-text-light">
                      <span className="text-portfolio-accent">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            {project.tools && (
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-portfolio-text-dark mb-3">Tools & Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool: string, idx: number) => (
                    <span key={idx} className="px-3 py-1 bg-gray-100 text-portfolio-text-dark rounded text-sm">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            )}
            
            {project.team && (
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-portfolio-text-dark mb-3">Team</h3>
                <ul className="space-y-1 text-portfolio-text-light">
                  {project.team.map((member: string, idx: number) => (
                    <li key={idx}>{member}</li>
                  ))}
                </ul>
              </div>
            )}
            
            {project.timeline && (
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-portfolio-text-dark mb-3">Timeline</h3>
                <p className="text-portfolio-text-light">{project.timeline}</p>
              </div>
            )}
            
            {project.role && (
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-portfolio-text-dark mb-3">My Role</h3>
                <p className="text-portfolio-text-light">{project.role}</p>
              </div>
            )}
            
            <div className="flex flex-wrap gap-4">
              <a 
                href={project.link} 
                className="flex items-center gap-2 text-white bg-portfolio-accent px-6 py-3 rounded-md hover:bg-opacity-90 transition-all"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Case Study <ExternalLink size={16} />
              </a>
              
              {project.githubLink && (
                <a 
                  href={project.githubLink} 
                  className="flex items-center gap-2 border border-portfolio-accent text-portfolio-accent px-6 py-3 rounded-md hover:bg-portfolio-accent hover:text-white transition-all"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on GitHub <ExternalLink size={16} />
                </a>
              )}
              
              {project.demoLink && (
                <a 
                  href={project.demoLink} 
                  className="flex items-center gap-2 border border-gray-300 text-portfolio-text-dark px-6 py-3 rounded-md hover:bg-gray-100 transition-all"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo <ExternalLink size={16} />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
