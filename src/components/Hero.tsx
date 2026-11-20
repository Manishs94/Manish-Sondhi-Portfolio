
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Download, Github, Linkedin } from 'lucide-react';
import { SEOHead } from './SEOHead';
import { trackDownloadCV } from './Analytics';

const LENDING_SCREEN = {
  src: '/case-studies/collateral-screens/04-header-metrics-variant.png',
  alt: 'Cync Collateral Platform record overview with header metrics and valuation chart',
  width: 1344,
  height: 769,
  label: 'Enterprise lending',
  href: '/work/cync-collateral-platform',
};

const HEALTH_SCREEN = {
  src: '/case-studies/veteran-portal-screens/06-scheduled-appointments.png',
  alt: 'Redesigned Veteran exam scheduling portal showing scheduled appointment cards',
  width: 1440,
  height: 917,
  label: 'Federal health',
  href: '/work/veteran-exam-scheduling-portal',
};

const ScreenLabel = ({ children, className }: { children: React.ReactNode; className: string }) => (
  <span
    className={`absolute ${className} inline-flex items-center gap-1 rounded-full bg-white/95 dark:bg-gray-900/95 border border-gray-200 dark:border-gray-700 px-3 py-1 text-xs font-medium text-portfolio-text-dark dark:text-white shadow-sm`}
  >
    {children}
    <ArrowRight size={12} className="transition-transform group-hover:translate-x-0.5" />
  </span>
);

const Hero = () => {
  const handleDownloadCV = () => {
    trackDownloadCV();

    // Convert Google Drive view link to direct download link
    const driveFileId = '1mh8jWf6acspgD7GOF8PW2OixRcL59zD5';
    const downloadUrl = `https://drive.google.com/uc?export=download&id=${driveFileId}`;

    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download = 'Manish_Sondhi_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <SEOHead
        title="Manish Sondhi — Staff UX Product Designer | Human-in-the-Loop Decision Systems"
        description="Staff UX Product Designer with 9+ years owning design strategy across complex, regulated enterprise platforms — financial services, lending, and government health systems."
        keywords="Staff UX Product Designer Portfolio, Human-in-the-Loop Decision Systems, Override-with-Rationale Patterns, AI-Assisted Workflow Design, Enterprise Fintech UX, Government Health Systems UX, Collateral Management Design, Regulated Industry Design, Design Systems"
      />

      <section id="home" className="pt-28 pb-16 md:pt-40 md:pb-24">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-16 items-center">
            <div className="animate-fade-in opacity-0">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-portfolio-accent mb-5">
                Staff UX Product Designer
              </p>

              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] text-portfolio-text-dark dark:text-white mb-6">
                Designing systems people trust enough to act on
              </h1>

              <p className="text-lg text-portfolio-text-light dark:text-gray-300 mb-8 max-w-xl leading-relaxed">
                9+ years owning design strategy for complex, regulated enterprise platforms in financial services, lending, and government health systems. I design human-in-the-loop decision surfaces: override-with-rationale patterns, AI-assisted rule entry, and audit-ready workflows.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <a href="#portfolio" className="group portfolio-button-primary flex items-center gap-2">
                  View Case Studies <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                </a>
                <button onClick={handleDownloadCV} className="portfolio-button-outline flex items-center gap-2">
                  Download Resume <Download size={18} />
                </button>
                <div className="flex items-center gap-1 sm:ml-2">
                  <a
                    href="https://www.linkedin.com/in/manish-sondhi-2b3bb2217/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="p-2 text-portfolio-text-light dark:text-gray-300 hover:text-portfolio-accent transition-colors"
                  >
                    <Linkedin size={22} />
                  </a>
                  <a
                    href="https://github.com/Manishs94"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="p-2 text-portfolio-text-light dark:text-gray-300 hover:text-portfolio-accent transition-colors"
                  >
                    <Github size={22} />
                  </a>
                </div>
              </div>
            </div>

            {/* Two industries, one composition: lending screen behind, federal health screen in front.
                Padding-bottom is a % of width, so the overlap scales with the column at every breakpoint. */}
            <div
              className="relative pb-[26%] animate-fade-in opacity-0"
              style={{ animationDelay: '0.15s' }}
            >
              <Link
                to={LENDING_SCREEN.href}
                className="group relative block w-[82%] ml-auto rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-lg"
              >
                <img
                  src={LENDING_SCREEN.src}
                  alt={LENDING_SCREEN.alt}
                  width={LENDING_SCREEN.width}
                  height={LENDING_SCREEN.height}
                  className="w-full h-auto"
                />
                <ScreenLabel className="top-3 right-3">{LENDING_SCREEN.label}</ScreenLabel>
              </Link>

              <Link
                to={HEALTH_SCREEN.href}
                className="group absolute left-0 bottom-0 block w-[72%] rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-2xl"
              >
                <img
                  src={HEALTH_SCREEN.src}
                  alt={HEALTH_SCREEN.alt}
                  width={HEALTH_SCREEN.width}
                  height={HEALTH_SCREEN.height}
                  className="w-full h-auto"
                />
                <ScreenLabel className="bottom-3 left-3">{HEALTH_SCREEN.label}</ScreenLabel>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
