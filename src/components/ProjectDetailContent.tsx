
import React from 'react';

interface ProjectDetailContentProps {
  project: {
    challenge?: string;
    problem?: string;
    process?: string;
    solution?: string;
    overview?: { impact?: string };
    impact?: string;
    keyFeatures?: string[];
    features?: string[];
    tools?: string[];
    team?: string[];
    timeline?: string;
    role?: string;
  };
}

const ProjectDetailContent: React.FC<ProjectDetailContentProps> = ({ project }) => {
  return (
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
    </div>
  );
};

export default ProjectDetailContent;
