import React from 'react';

interface ProjectDetailContentProps {
  project: {
    id?: number;
    title?: string;
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
    category?: string | string[];
  };
}

const ProjectDetailContent: React.FC<ProjectDetailContentProps> = ({ project }) => {
  // Helper function to get project-specific overview data
  const getProjectOverview = () => {
    switch(project.id) {
      case 2: // CYNC Loan Origination
        return {
          productType: 'Enterprise Loan Origination System',
          timeline: 'Multi-module, multi-quarter initiative',
          role: 'Senior Product & UX Designer',
          team: 'Product, Engineering, Risk, Compliance',
          platforms: 'Web (Enterprise SaaS)',
          problem: 'Commercial lending workflows relied on fragmented tools and manual data entry across collateral, underwriting, and asset management, increasing processing time, error rates, and operational risk.',
          outcome: 'Led end-to-end design of a modular loan origination platform that unified workflows, improved data clarity, and supported scalable, compliant lending operations across multiple enterprise teams.',
          responsibilities: [
            'Led end-to-end design of multiple loan origination modules for enterprise lending.',
            'Translated regulatory and risk constraints into clear, usable workflows.',
            'Designed dashboards and decision-support interfaces for underwriting and portfolio review.',
            'Created reusable UI patterns and components to improve consistency and efficiency.',
            'Ensured accessibility compliance and validated UI in staging/production environments.',
            'Partnered with cross-functional teams to align on design decisions and product vision.'
          ],
          metrics: [
            'Streamlined loan processing workflows and reduced manual steps.',
            'Increased efficiency and clarity for underwriting and portfolio review teams.',
            'Reduced errors and operational friction across multiple enterprise modules.',
            'Improved adoption of new workflows among finance and operations users.',
            'Maintained full accessibility compliance (WCAG 2.2) across all interfaces.'
          ]
        };
      case 1: // Bank of America Bill Pay
        return {
          productType: 'Consumer Banking Mobile Application',
          timeline: 'Product enhancement initiative',
          role: 'Product & UX Designer',
          team: 'Product, Engineering, Analytics',
          platforms: 'iOS & Android',
          problem: 'Users struggled with payment scheduling, visibility, and confirmation, leading to confusion, missed payments, and reduced trust in the bill pay experience.',
          outcome: 'Redesigned key payment flows to improve clarity, scheduling flexibility, and transaction visibility, contributing to a more intuitive and reliable experience for millions of users.',
          responsibilities: [
            'Designed end-to-end mobile banking experiences for high-volume consumer users.',
            'Simplified payment flows and improved task completion across iOS, Android, and web.',
            'Conducted user research and usability testing to identify friction and optimize flows.',
            'Worked closely with engineers to ensure design feasibility and fidelity.',
            'Ensured accessibility compliance and adherence to platform standards.',
            'Improved trust and clarity in high-stakes financial transactions.'
          ],
          metrics: [
            'Simplified bill payment flows, reducing user confusion and errors.',
            'Improved task completion for payments and overall user satisfaction.',
            'Increased adoption and engagement of the Bill Pay feature among millions of users.',
            'Ensured accessibility compliance across iOS, Android, and web platforms.'
          ]
        };
      case 3: // CYNC Advanced Analytics
        return {
          productType: 'Enterprise Analytics Platform',
          timeline: 'Multi-phase delivery',
          role: 'Senior Product & UX Designer',
          team: 'Product, Engineering, Data',
          platforms: 'Web (Enterprise SaaS)',
          problem: 'Analytics experiences were inconsistent across platforms and lacked accessibility support, making it difficult for enterprise users to interpret insights and monitor performance.',
          outcome: 'Designed an accessibility-first analytics platform with a unified design system, improving insight discoverability, usability, and compliance across enterprise financial products.',
          responsibilities: [
            'Designed an accessibility-first analytics platform for enterprise users.',
            'Established a unified design system for consistency across web and mobile.',
            'Translated complex data workflows into intuitive visualizations and dashboards.',
            'Partnered with product, engineering, and data teams to align on functionality.',
            'Validated designs for usability, performance, and accessibility compliance.',
            'Integrated AI-assisted features to help users interpret insights efficiently.'
          ],
          metrics: [
            'Unified analytics dashboards improved insight discoverability.',
            'Reduced navigation errors and improved data interpretation for enterprise users.',
            'Enhanced cross-platform consistency and accessibility compliance (WCAG 2.1).',
            'Integrated AI-assisted features to support faster analysis and reduce manual review.'
          ]
        };
      default:
        return null;
    }
  };

  const overview = getProjectOverview();

  return (
    <div className="space-y-8 mb-8">
      {/* Project Overview Section */}
      {overview && (
        <div className="bg-portfolio-bg-light dark:bg-gray-800 border border-portfolio-accent/20 rounded-lg p-6 mb-8">
          <h3 className="text-lg font-semibold text-portfolio-text-dark dark:text-white mb-4">Project Overview</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 text-sm">
            <div>
              <span className="font-semibold text-portfolio-text-dark dark:text-gray-200">Product Type:</span>
              <p className="text-portfolio-text-light dark:text-gray-400">{overview.productType}</p>
            </div>
            <div>
              <span className="font-semibold text-portfolio-text-dark dark:text-gray-200">Timeline:</span>
              <p className="text-portfolio-text-light dark:text-gray-400">{overview.timeline}</p>
            </div>
            <div>
              <span className="font-semibold text-portfolio-text-dark dark:text-gray-200">Role:</span>
              <p className="text-portfolio-text-light dark:text-gray-400">{overview.role}</p>
            </div>
            <div>
              <span className="font-semibold text-portfolio-text-dark dark:text-gray-200">Team:</span>
              <p className="text-portfolio-text-light dark:text-gray-400">{overview.team}</p>
            </div>
            <div>
              <span className="font-semibold text-portfolio-text-dark dark:text-gray-200">Platforms:</span>
              <p className="text-portfolio-text-light dark:text-gray-400">{overview.platforms}</p>
            </div>
          </div>

          <div className="space-y-4 pt-4 border-t border-portfolio-accent/20">
            <div>
              <span className="font-semibold text-portfolio-text-dark dark:text-gray-200 block mb-2">Problem</span>
              <p className="text-portfolio-text-light dark:text-gray-400 text-sm">{overview.problem}</p>
            </div>
            <div>
              <span className="font-semibold text-portfolio-text-dark dark:text-gray-200 block mb-2">Outcome</span>
              <p className="text-portfolio-text-light dark:text-gray-400 text-sm">{overview.outcome}</p>
            </div>
          </div>
        </div>
      )}

      {/* Responsibilities & Impact Section */}
      {overview && overview.responsibilities && (
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 mb-8">
          <h3 className="text-lg font-semibold text-portfolio-text-dark dark:text-white mb-4">Responsibilities & Impact</h3>
          <ul className="space-y-3">
            {overview.responsibilities.map((responsibility: string, idx: number) => (
              <li key={idx} className="flex items-start gap-3 text-portfolio-text-light dark:text-gray-300">
                <span className="text-portfolio-accent flex-shrink-0 mt-1">•</span>
                <span>{responsibility}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Metrics & Outcomes Section */}
      {overview && overview.metrics && (
        <div className="bg-portfolio-bg-light dark:bg-gray-800 border border-portfolio-accent/10 rounded-lg p-6 mb-8">
          <h3 className="text-lg font-semibold text-portfolio-text-dark dark:text-white mb-4">Metrics & Outcomes</h3>
          <ul className="space-y-3">
            {overview.metrics.map((metric: string, idx: number) => (
              <li key={idx} className="flex items-start gap-3 text-portfolio-text-light dark:text-gray-300">
                <span className="text-portfolio-accent flex-shrink-0 mt-1">✓</span>
                <span>{metric}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

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
          <p className="text-portfolio-text-light">2022</p>
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
