
import React from 'react';
import { allProjects, type Project } from '@/utils/projectData';
import { SEOHead } from '@/components/SEOHead';
import ProjectCard from '@/components/ProjectCard';
import Reveal from '@/components/motion/Reveal';

interface ProjectGroup {
  id: string;
  title: string;
  description: string;
  projects: Project[];
}

const isVa = (p: Project) => /veteran|va-operations/.test(p.link);
const isBoa = (p: Project) => p.link.includes('bank-of-america');

// Platform-level case studies lead the Cync group; the module deep-dives follow in data order.
const CYNC_LEADS = ['/work/cync-collateral-platform', '/work/cync-advance-analytics', '/work/cync-design-system'];

const buildGroups = (): ProjectGroup[] => {
  const caseStudies = allProjects.filter((p) => p.isCaseStudy);
  const cync = caseStudies
    .filter((p) => !isVa(p) && !isBoa(p))
    .sort((a, b) => {
      const ai = CYNC_LEADS.indexOf(a.link);
      const bi = CYNC_LEADS.indexOf(b.link);
      return (ai === -1 ? Infinity : ai) - (bi === -1 ? Infinity : bi);
    });

  return [
    {
      id: 'va',
      title: 'Healthcare & Federal Systems',
      description: 'A Veteran-facing exam scheduling portal and the design system behind a VA operations platform.',
      projects: caseStudies.filter(isVa),
    },
    {
      id: 'cync',
      title: 'Cync Lending Platform',
      description: 'Collateral, loan, analytics, and design system work across an enterprise commercial lending platform.',
      projects: cync,
    },
    {
      id: 'boa',
      title: 'Concept Work',
      description: 'A concept redesign of Bill Pay flows in the Bank of America mobile app.',
      projects: caseStudies.filter(isBoa),
    },
    {
      id: 'side-projects',
      title: 'Side Projects',
      description: 'Smaller front-end builds and experiments.',
      projects: allProjects.filter((p) => !p.isCaseStudy),
    },
  ].filter((group) => group.projects.length > 0);
};

const Portfolio = () => {
  const groups = buildGroups();

  return (
    <section id="portfolio" className="py-20 sm:py-24 bg-portfolio-bg-light">
      <SEOHead
        title="Staff UX Product Designer Portfolio | Human-in-the-Loop Decision Systems"
        description="Staff UX Product Designer with 9+ years owning design strategy across complex, regulated enterprise platforms — financial services, lending, and government health systems."
        keywords="Staff UX Product Designer Portfolio, Human-in-the-Loop Decision Systems, AI-Assisted Workflow Design, Enterprise UX, Regulated Industry UX, Fintech UX, Government Health Systems UX, Design Systems, Collateral Management Design"
      />
      <div className="section-container">
        <Reveal className="max-w-2xl mb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-portfolio-accent mb-4">Portfolio</p>
          <h1 className="section-heading">All work</h1>
          <p className="section-subheading">
            Case studies grouped by product, from government health systems to enterprise lending.
          </p>
          <nav aria-label="Jump to section" className="mt-6 flex flex-wrap gap-2">
            {groups.map((group) => (
              <a
                key={group.id}
                href={`#${group.id}`}
                className="px-3 py-1.5 rounded-full border border-gray-300 dark:border-gray-700 text-sm text-portfolio-text-dark dark:text-gray-200 hover:border-portfolio-accent hover:text-portfolio-accent transition-colors"
              >
                {group.title} <span className="text-portfolio-text-light">({group.projects.length})</span>
              </a>
            ))}
          </nav>
        </Reveal>

        <div className="space-y-20">
          {groups.map((group) => (
            <div key={group.id} id={group.id} className="scroll-mt-24">
              <div className="mb-8 pb-4 border-b border-gray-200 dark:border-gray-800">
                <h2 className="text-2xl sm:text-3xl font-bold font-display text-portfolio-text-dark dark:text-white mb-2">
                  {group.title}
                </h2>
                <p className="text-portfolio-text-light dark:text-gray-400">{group.description}</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {group.projects.map((project, index) => (
                  <ProjectCard key={project.id} project={project} index={index} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
