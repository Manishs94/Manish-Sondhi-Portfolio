import React from 'react';

interface ProjectDetailContentProps {
  project: {
    id?: number;
    title?: string;
    challenge?: string;
    problem?: string;
    process?: string;
    solution?: string;
    overview?: { impact?: string; challenge?: string; solution?: string };
    impact?: string;
    keyFeatures?: string[];
    features?: string[];
    tools?: string[];
    team?: string[];
    timeline?: string;
    role?: string;
    category?: string | string[];
    isCaseStudy?: boolean;
    productType?: string;
    platforms?: string;
    responsibilities?: string[];
    outcomes?: string[];
  };
}

const ProjectDetailContent: React.FC<ProjectDetailContentProps> = ({ project }) => {
  const hasCaseStudyOverview = project.isCaseStudy && project.productType;

  return (
    <div className="space-y-8 mb-8">
      {/* Project Overview Section — case studies only */}
      {hasCaseStudyOverview && (
        <div className="bg-portfolio-bg-light dark:bg-gray-800 border border-portfolio-accent/20 rounded-lg p-6 mb-8">
          <h3 className="text-lg font-semibold text-portfolio-text-dark dark:text-white mb-4">Project Overview</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 text-sm">
            <div>
              <span className="font-semibold text-portfolio-text-dark dark:text-gray-200">Product Type:</span>
              <p className="text-portfolio-text-light dark:text-gray-400">{project.productType}</p>
            </div>
            <div>
              <span className="font-semibold text-portfolio-text-dark dark:text-gray-200">Timeline:</span>
              <p className="text-portfolio-text-light dark:text-gray-400">{project.timeline}</p>
            </div>
            <div>
              <span className="font-semibold text-portfolio-text-dark dark:text-gray-200">Role:</span>
              <p className="text-portfolio-text-light dark:text-gray-400">{project.role}</p>
            </div>
            {project.team && (
              <div>
                <span className="font-semibold text-portfolio-text-dark dark:text-gray-200">Team:</span>
                <p className="text-portfolio-text-light dark:text-gray-400">
                  {Array.isArray(project.team) ? project.team.join(', ') : project.team}
                </p>
              </div>
            )}
            {project.platforms && (
              <div>
                <span className="font-semibold text-portfolio-text-dark dark:text-gray-200">Platforms:</span>
                <p className="text-portfolio-text-light dark:text-gray-400">{project.platforms}</p>
              </div>
            )}
          </div>

          <div className="space-y-4 pt-4 border-t border-portfolio-accent/20">
            {project.overview?.challenge && (
              <div>
                <span className="font-semibold text-portfolio-text-dark dark:text-gray-200 block mb-2">Problem</span>
                <p className="text-portfolio-text-light dark:text-gray-400 text-sm">{project.overview.challenge}</p>
              </div>
            )}
            {project.overview?.solution && (
              <div>
                <span className="font-semibold text-portfolio-text-dark dark:text-gray-200 block mb-2">Outcome</span>
                <p className="text-portfolio-text-light dark:text-gray-400 text-sm">{project.overview.solution}</p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Responsibilities Section — case studies only */}
      {hasCaseStudyOverview && project.responsibilities && project.responsibilities.length > 0 && (
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 mb-8">
          <h3 className="text-lg font-semibold text-portfolio-text-dark dark:text-white mb-4">Responsibilities & Impact</h3>
          <ul className="space-y-3">
            {project.responsibilities.map((item: string, idx: number) => (
              <li key={idx} className="flex items-start gap-3 text-portfolio-text-light dark:text-gray-300">
                <span className="text-portfolio-accent flex-shrink-0 mt-1">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Outcomes Section — case studies only */}
      {hasCaseStudyOverview && project.outcomes && project.outcomes.length > 0 && (
        <div className="bg-portfolio-bg-light dark:bg-gray-800 border border-portfolio-accent/10 rounded-lg p-6 mb-8">
          <h3 className="text-lg font-semibold text-portfolio-text-dark dark:text-white mb-4">Metrics & Outcomes</h3>
          <ul className="space-y-3">
            {project.outcomes.map((item: string, idx: number) => (
              <li key={idx} className="flex items-start gap-3 text-portfolio-text-light dark:text-gray-300">
                <span className="text-portfolio-accent flex-shrink-0 mt-1">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Challenge — non-case-studies only (case studies show it in the overview card) */}
      {!hasCaseStudyOverview && (project.challenge || project.problem) && (
        <div>
          <h3 className="text-xl font-semibold text-portfolio-text-dark mb-3">Challenge</h3>
          <p className="text-portfolio-text-light">{project.challenge || project.problem}</p>
        </div>
      )}

      {/* Process — all projects */}
      {project.process && (
        <div>
          <h3 className="text-xl font-semibold text-portfolio-text-dark mb-3">Process</h3>
          <p className="text-portfolio-text-light">{project.process}</p>
        </div>
      )}

      {/* Solution — non-case-studies only */}
      {!hasCaseStudyOverview && project.solution && (
        <div>
          <h3 className="text-xl font-semibold text-portfolio-text-dark mb-3">Solution</h3>
          <p className="text-portfolio-text-light">{project.solution}</p>
        </div>
      )}

      {/* Impact — non-case-studies only */}
      {!hasCaseStudyOverview && (project.overview?.impact || project.impact) && (
        <div>
          <h3 className="text-xl font-semibold text-portfolio-text-dark mb-3">Impact</h3>
          <p className="text-portfolio-text-light">{project.overview?.impact || project.impact}</p>
        </div>
      )}

      {(project.keyFeatures || project.features) && (
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-portfolio-text-dark mb-3">Key Features</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {(project.keyFeatures || project.features)!.map((feature: string, idx: number) => (
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

      {/* Team, Timeline, Role — only for non-case-studies (case studies show these in the overview card) */}
      {!hasCaseStudyOverview && project.team && (
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-portfolio-text-dark mb-3">Team</h3>
          <ul className="space-y-1 text-portfolio-text-light">
            {project.team.map((member: string, idx: number) => (
              <li key={idx}>{member}</li>
            ))}
          </ul>
        </div>
      )}

      {!hasCaseStudyOverview && project.timeline && (
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-portfolio-text-dark mb-3">Timeline</h3>
          <p className="text-portfolio-text-light">{project.timeline}</p>
        </div>
      )}

      {!hasCaseStudyOverview && project.role && (
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-portfolio-text-dark mb-3">My Role</h3>
          <p className="text-portfolio-text-light">{project.role}</p>
        </div>
      )}
    </div>
  );
};

export default ProjectDetailContent;
