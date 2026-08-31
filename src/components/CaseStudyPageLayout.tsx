import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, Lightbulb } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import ImagePlaceholder from '@/components/ImagePlaceholder';

interface CaseStudyImage {
  filename: string;
  caption?: string;
}

interface CaseStudyMetric {
  value: string;
  label: string;
}

interface CaseStudyDetailBlock {
  title: string;
  body: string;
  image?: string;
}

interface CaseStudyAdditionalSection {
  title: string;
  content: React.ReactNode;
}

interface CaseStudyContextItem {
  label: string;
  value: string;
}

interface CaseStudyPageLayoutProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  role?: string;
  company: string;
  timeline?: string;
  status?: string;

  heroImage?: string;

  roleOwned?: string[];
  roleContext?: CaseStudyContextItem[];

  overviewText: string;

  problemTitle?: string;
  problemText: string;
  problemDetails?: CaseStudyDetailBlock[];
  discoveryImage?: string;
  discoveryFindings?: CaseStudyDetailBlock[];

  hardDecisionImage?: string;
  hardDecisionIntro?: string;
  hardDecisionBody?: string;
  hardDecisionPoints?: string[];
  hardDecisionRejected?: string;

  keyDecisions?: CaseStudyDetailBlock[];

  outcomeMetrics?: CaseStudyMetric[];
  outcomeHighlights?: CaseStudyDetailBlock[];
  outcomeBullets?: string[];

  additionalSections?: CaseStudyAdditionalSection[];

  images?: CaseStudyImage[];

  retrospective?: CaseStudyDetailBlock[];

  closingImage?: string;
  closingReflection?: string[];

  backLink?: string;
}

const SectionEyebrow: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-portfolio-accent mb-3">
    {children}
  </p>
);

const CaseStudyPageLayout: React.FC<CaseStudyPageLayoutProps> = ({
  eyebrow,
  title,
  subtitle,
  role,
  company,
  timeline,
  status = 'Completed',
  heroImage,
  roleOwned,
  roleContext,
  overviewText,
  problemTitle = 'The Problem',
  problemText,
  problemDetails,
  discoveryImage,
  discoveryFindings,
  hardDecisionImage,
  hardDecisionIntro,
  hardDecisionBody,
  hardDecisionPoints,
  hardDecisionRejected,
  keyDecisions,
  outcomeMetrics,
  outcomeHighlights,
  outcomeBullets,
  additionalSections,
  images,
  retrospective,
  closingImage,
  closingReflection,
  backLink = '/portfolio',
}) => {
  const myRole = useScrollAnimation({ threshold: 0.15 });
  const overview = useScrollAnimation({ threshold: 0.2 });
  const problem = useScrollAnimation({ threshold: 0.15 });
  const decision = useScrollAnimation({ threshold: 0.15 });
  const decisions = useScrollAnimation({ threshold: 0.1 });
  const outcome = useScrollAnimation({ threshold: 0.1 });
  const gallery = useScrollAnimation({ threshold: 0.1 });
  const retro = useScrollAnimation({ threshold: 0.1 });
  const closing = useScrollAnimation({ threshold: 0.2 });

  return (
    <>
      {/* Hero */}
      <section className="py-24 bg-portfolio-bg-light">
        <div className="section-container">
          {heroImage && (
            <div className="mb-10">
              <ImagePlaceholder filename={heroImage} caption={title} aspect="wide" />
            </div>
          )}
          {eyebrow && <SectionEyebrow>{eyebrow}</SectionEyebrow>}
          <h1 className="section-heading">{title}</h1>
          {subtitle && <p className="section-subheading">{subtitle}</p>}

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-10 pt-8 border-t border-gray-200">
            {role && (
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-portfolio-text-light mb-1">
                  Role
                </p>
                <p className="text-sm font-medium text-portfolio-text-dark">{role}</p>
              </div>
            )}
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-portfolio-text-light mb-1">
                Company
              </p>
              <p className="text-sm font-medium text-portfolio-text-dark">{company}</p>
            </div>
            {timeline && (
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-portfolio-text-light mb-1">
                  Timeline
                </p>
                <p className="text-sm font-medium text-portfolio-text-dark">{timeline}</p>
              </div>
            )}
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-portfolio-text-light mb-1">
                Status
              </p>
              <p className="text-sm font-medium text-portfolio-text-dark">{status}</p>
            </div>
          </div>
        </div>
      </section>

      {/* My Role */}
      {(roleOwned?.length || roleContext?.length) ? (
        <section className="py-24 bg-white">
          <div className="section-container">
            <div ref={myRole.ref} className={`fade-in-up max-w-4xl mx-auto ${myRole.isVisible ? 'visible' : ''}`}>
              <SectionEyebrow>My Role</SectionEyebrow>
              <h2 className="text-3xl font-bold text-portfolio-text-dark font-display mb-10">My Role</h2>
              <div className="grid sm:grid-cols-2 gap-10">
                {roleOwned && roleOwned.length > 0 && (
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.14em] text-portfolio-text-dark mb-4">
                      What I Owned
                    </p>
                    <div className="space-y-3">
                      {roleOwned.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-3 text-portfolio-text-light">
                          <CheckCircle2 className="w-4 h-4 text-portfolio-accent mt-1 shrink-0" />
                          <span className="text-sm leading-relaxed">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                {roleContext && roleContext.length > 0 && (
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.14em] text-portfolio-text-dark mb-4">
                      Project Context
                    </p>
                    <div className="space-y-3">
                      {roleContext.map((item) => (
                        <p key={item.label} className="text-sm text-portfolio-text-light">
                          <span className="font-semibold text-portfolio-text-dark">{item.label}:</span> {item.value}
                        </p>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      ) : null}

      {/* Overview */}
      <section className="py-24 bg-portfolio-bg-light">
        <div className="section-container">
          <div
            ref={overview.ref}
            className={`fade-in-up max-w-3xl mx-auto ${overview.isVisible ? 'visible' : ''}`}
          >
            <SectionEyebrow>Overview</SectionEyebrow>
            <h2 className="text-3xl font-bold text-portfolio-text-dark font-display mb-6">Overview</h2>
            <p className="text-lg text-portfolio-text-light leading-relaxed whitespace-pre-line">
              {overviewText}
            </p>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="py-24 bg-white">
        <div className="section-container">
          <div
            ref={problem.ref}
            className={`fade-in-up max-w-3xl mx-auto ${problem.isVisible ? 'visible' : ''}`}
          >
            <SectionEyebrow>Problem</SectionEyebrow>
            <h2 className="text-3xl font-bold text-portfolio-text-dark font-display mb-6">
              {problemTitle}
            </h2>
            <p className="text-lg text-portfolio-text-light leading-relaxed whitespace-pre-line">
              {problemText}
            </p>

            {problemDetails && problemDetails.length > 0 && (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
                {problemDetails.map((detail) => (
                  <div key={detail.title} className="rounded-xl bg-portfolio-bg-light border border-gray-200 p-6 shadow-sm">
                    <p className="font-semibold text-portfolio-text-dark mb-2">{detail.title}</p>
                    <p className="text-sm text-portfolio-text-light leading-relaxed">{detail.body}</p>
                  </div>
                ))}
              </div>
            )}

            {discoveryFindings && discoveryFindings.length > 0 && (
              <div className="mt-10">
                <p className="text-sm font-semibold uppercase tracking-[0.14em] text-portfolio-text-dark mb-4">
                  What Discovery Revealed
                </p>
                {discoveryImage && (
                  <div className="mb-6">
                    <ImagePlaceholder filename={discoveryImage} caption="What discovery revealed" aspect="wide" />
                  </div>
                )}
                <div className="grid sm:grid-cols-2 gap-6">
                  {discoveryFindings.map((item) => (
                    <div key={item.title} className="rounded-xl bg-portfolio-bg-light p-6">
                      <p className="font-semibold text-portfolio-text-dark mb-2">{item.title}</p>
                      <p className="text-sm text-portfolio-text-light leading-relaxed">{item.body}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Hard Decision — highlighted callout */}
      {hardDecisionBody && (
        <section className="py-24 bg-portfolio-bg-light">
          <div className="section-container">
            <div
              ref={decision.ref}
              className={`fade-in-up max-w-3xl mx-auto ${decision.isVisible ? 'visible' : ''}`}
            >
              <SectionEyebrow>The Hard Decision</SectionEyebrow>
              <div className="rounded-2xl border-2 border-portfolio-accent/20 bg-white p-8 sm:p-10">
                {hardDecisionImage && (
                  <div className="mb-6">
                    <ImagePlaceholder filename={hardDecisionImage} caption="The hard decision" aspect="wide" />
                  </div>
                )}
                <Lightbulb className="w-6 h-6 text-portfolio-accent mb-4" />
                {hardDecisionIntro && (
                  <p className="text-portfolio-text-light leading-relaxed mb-4 whitespace-pre-line">
                    {hardDecisionIntro}
                  </p>
                )}
                <p className="text-lg text-portfolio-text-dark leading-relaxed whitespace-pre-line font-medium">
                  {hardDecisionBody}
                </p>
                {hardDecisionPoints && hardDecisionPoints.length > 0 && (
                  <ul className="mt-4 space-y-2">
                    {hardDecisionPoints.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-portfolio-text-light leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-portfolio-accent mt-1 shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {hardDecisionRejected && (
                  <p className="text-portfolio-text-light leading-relaxed mt-4 whitespace-pre-line">
                    {hardDecisionRejected}
                  </p>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Key Decisions — numbered list */}
      {keyDecisions && keyDecisions.length > 0 && (
        <section className="py-24 bg-white">
          <div className="section-container">
            <div ref={decisions.ref} className={`fade-in-up ${decisions.isVisible ? 'visible' : ''}`}>
              <SectionEyebrow>Key Decisions</SectionEyebrow>
              <h2 className="text-3xl font-bold text-portfolio-text-dark font-display mb-10">
                Key Design Decisions
              </h2>
              <div className="space-y-10 max-w-3xl">
                {keyDecisions.map((decisionItem, idx) => (
                  <div key={decisionItem.title} className="flex gap-5">
                    <div className="shrink-0 w-10 h-10 rounded-full bg-portfolio-accent text-white flex items-center justify-center font-bold font-display">
                      {idx + 1}
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-portfolio-text-dark mb-2">{decisionItem.title}</p>
                      {decisionItem.image && (
                        <div className="mb-4">
                          <ImagePlaceholder filename={decisionItem.image} caption={decisionItem.title} aspect="wide" />
                        </div>
                      )}
                      <p className="text-sm text-portfolio-text-light leading-relaxed whitespace-pre-line">
                        {decisionItem.body}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Additional case-study-specific sections */}
      {additionalSections?.map((section) => (
        <section key={section.title} className="py-24 bg-white border-t border-gray-100">
          <div className="section-container max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-portfolio-text-dark font-display mb-6">
              {section.title}
            </h2>
            {section.content}
          </div>
        </section>
      ))}

      {/* Outcome */}
      {(outcomeMetrics?.length || outcomeHighlights?.length || outcomeBullets?.length) ? (
      <section className="py-24 bg-portfolio-text-dark text-white">
        <div className="section-container">
          <div ref={outcome.ref} className={`fade-in-up ${outcome.isVisible ? 'visible' : ''}`}>
            <SectionEyebrow>Outcome</SectionEyebrow>
            <h2 className="text-3xl font-bold font-display mb-10 text-white">Outcome</h2>

            {outcomeMetrics && outcomeMetrics.length > 0 && (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mb-10">
                {outcomeMetrics.map((metric, idx) => (
                  <div key={idx} className="rounded-xl border border-white/15 bg-white/5 p-6">
                    <p className="text-3xl font-bold font-display text-white">{metric.value}</p>
                    <p className="text-sm text-white/70 mt-2">{metric.label}</p>
                  </div>
                ))}
              </div>
            )}

            {outcomeHighlights && outcomeHighlights.length > 0 && (
              <div className="grid sm:grid-cols-2 gap-6">
                {outcomeHighlights.map((item) => (
                  <div key={item.title} className="rounded-xl border border-white/15 bg-white/5 p-6">
                    <p className="font-semibold text-white mb-2">{item.title}</p>
                    <p className="text-sm text-white/70 leading-relaxed">{item.body}</p>
                  </div>
                ))}
              </div>
            )}

            {outcomeBullets && outcomeBullets.length > 0 && (
              <div className="space-y-3 max-w-3xl">
                {outcomeBullets.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-white/85">
                    <CheckCircle2 className="w-5 h-5 text-portfolio-accent mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
      ) : null}

      {/* Image Gallery */}
      {images && images.length > 0 && (
        <section className="py-24 bg-white">
          <div className="section-container">
            <div ref={gallery.ref} className={`fade-in-up ${gallery.isVisible ? 'visible' : ''}`}>
              <SectionEyebrow>Selected Screens</SectionEyebrow>
              <h2 className="text-3xl font-bold text-portfolio-text-dark font-display mb-10">
                The Work
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {images.map((image) => (
                  <ImagePlaceholder key={image.filename} filename={image.filename} caption={image.caption} />
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Honest Retrospective */}
      {retrospective && retrospective.length > 0 && (
        <section className="py-24 bg-portfolio-bg-light">
          <div className="section-container">
            <div ref={retro.ref} className={`fade-in-up max-w-3xl mx-auto ${retro.isVisible ? 'visible' : ''}`}>
              <SectionEyebrow>Honest Retrospective</SectionEyebrow>
              <h2 className="text-3xl font-bold text-portfolio-text-dark font-display mb-10">
                What I'd Do Differently
              </h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {retrospective.map((item) => (
                  <div key={item.title} className="rounded-xl bg-white border border-gray-200 p-6 shadow-sm">
                    <p className="font-semibold text-portfolio-text-dark mb-2">{item.title}</p>
                    <p className="text-sm text-portfolio-text-light leading-relaxed">{item.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Closing Reflection */}
      {closingReflection && closingReflection.length > 0 && (
        <section className="relative py-24 bg-white overflow-hidden">
          {closingImage && (
            <img
              src={closingImage}
              alt=""
              aria-hidden="true"
              className="absolute inset-0 w-full h-full object-cover opacity-10"
            />
          )}
          <div className="relative section-container">
            <div
              ref={closing.ref}
              className={`fade-in-up max-w-2xl mx-auto text-center ${closing.isVisible ? 'visible' : ''}`}
            >
              {closingReflection.map((paragraph, idx) => (
                <p key={idx} className="text-lg text-portfolio-text-light leading-relaxed mb-4 last:mb-0">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Closing CTA */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="section-container flex justify-center">
          <Link to={backLink} className="portfolio-button-outline">
            Back to Portfolio
          </Link>
        </div>
      </section>
    </>
  );
};

export default CaseStudyPageLayout;
