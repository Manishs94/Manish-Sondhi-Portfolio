import React, { useState, useEffect } from 'react';
import { Briefcase, MapPin, Calendar, TrendingUp, Users, Award } from 'lucide-react';
import ExperienceSkeleton from './ExperienceSkeleton';

type ToolGroup = {
  label: string;
  items: string[];
};

const Experience = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [visibleExperiences, setVisibleExperiences] = useState<number[]>([]);

  // Simulate loading for demonstration
  useEffect(() => {
    const loadingTimer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(loadingTimer);
  }, []);

  // Progressively reveal experiences
  useEffect(() => {
    if (!isLoading) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const index = parseInt(entry.target.getAttribute('data-index') || '0');
              setVisibleExperiences((prev) => [...new Set([...prev, index])]);
            }
          });
        },
        {
          root: null,
          rootMargin: '0px',
          threshold: 0.1,
        }
      );

      document.querySelectorAll('[data-experience-card]').forEach((card) => {
        observer.observe(card);
      });

      return () => observer.disconnect();
    }
  }, [isLoading]);

  const experiences = [
    {
      title: 'Staff UX Product Designer',
      company: 'Infinite Computer Solutions',
      location: 'Remote',
      period: 'May 2026 – Present',
      description: "UX/UI Designer and Business Analyst for MDE4Vets, a federal back-office platform managing VA disability (C&P) exam logistics, provider billing, and compliance reporting — covering case-queue distribution, CPT billing configuration, invoice and travel/mileage reimbursement reporting, and provider training compliance, alongside a junior designer.",
      highlights: [
        "Conducted an end-to-end IA and UX audit across the platform's full surface, operating as a business analyst alongside design work to document patterns, redundancies, and gaps across a complex multi-persona system.",
        'Identified a recurring sensitive-data exposure pattern — veteran SSNs displayed unmasked in report data grids — a concrete compliance and security finding surfaced through systematic audit.',
        'Designing across the full MDE4Vets and Veteran Design System: UI/UX Principles, Banner Config, Announcements Config, Appointment Scheduling, Admin Roles, Clusters, and Availability Calendar — each story designed to system standards with no new patterns introduced.',
        'Work spans Case Management, Provider, and Admin personas across a government-regulated platform where UX decisions have direct operational and compliance consequences for veterans.'
      ],
      impact: [],
      tools: [
        { label: 'Design Tools', items: ['Figma', 'FigJam'] },
        { label: 'AI-Assisted Tools', items: ['Claude', 'ChatGPT', 'Copilot'] },
        { label: 'Specialties', items: ['Business Analysis', 'Compliance Auditing', 'Federal Health Systems', 'Information Architecture', 'Veteran Design System'] }
      ] as ToolGroup[]
    },
    {
      title: 'Founding Designer',
      company: 'CYNC Software',
      location: 'Remote',
      period: 'Feb 2022 – Jul 2026',
      description: 'Design lead and product strategist for a multi-module B2B SaaS lending platform serving 15+ regulated financial institutions across loan origination, collateral management, AI-assisted decisioning, and portfolio analytics. Operated beyond a pure design remit — taking on product ownership and business analysis responsibilities, defining interaction models, workflow architecture, and integration design in close partnership with product, engineering, compliance, and data teams. All design work executed from discovery through production-ready spec.',
      highlights: [
        'Lead Product Designer, Advance Analytics: designed from scratch, with no internal precedent, the lending-compliance reporting and dashboard product, from information architecture through production-ready screens.',
        'Defined end-to-end design strategy for 5+ concurrent product modules — establishing interaction models, IA frameworks, and workflow standards that became the engineering implementation baseline across quarterly release cycles.',
        'Designed the collateral platform across 11 structurally distinct collateral categories, including a component-based administration builder that assembles sub-types (12 for Commercial Real Estate, 13 for Agriculture) from a shared library, so a new sub-type is a configuration task, not a new screen.',
        'Re-architected a fragmented collateral evaluation experience spanning multiple disconnected screens into a single unified decision surface — reducing analyst review time by 30% and improving multi-role clarity for underwriters, analysts, and compliance reviewers.',
        'Designed override-with-rationale patterns across the lending platform: risk-rating scores that show the original and updated score and decision with overrides and comments, and required reason fields on pledge amount, collateral discount, Policy LTV, and Advance Rate overrides, so the reason stays on the record.',
        'Designed a natural-language rule-entry component for Fleet collateral, where administrators describe advance rules in plain language and AI interprets and structures them into the rule set, with guarded deletion and the same override-permission controls as manually built rules.',
        'Designed how a third-party automated valuation (ClearAVM) is presented as evidence: market value with a confidence score and nested 20%, 10%, and 5% confidence bands, order ID, and run date, recorded as an Evaluation under the same completion, review, and acceptance fields as a human valuation.',
        'Designed complete end-to-end third-party integration workflows for Dataverify Flood Services — the full lifecycle state machine from not-ordered through pending, completed, and failed states, dual-path automated and manual determination flows, offline fallback logic, and SFHA escalation as an automatic system behavior.',
        'Architected EODHD financial data integration for the Investment Collateral module — real-time pricing fetch behavior, Securities Master auto-population logic, stale data handling, and symbol lookup cascade patterns.',
        'Designed the Roles & Permissions model (reusable Permission Sets composed into Roles, with license tiers and role deletion that reassigns users instead of orphaning them) and the loan-to-collateral pledge and release-approval workflow, with equity and margin metrics shown at the point of decision.',
        'Resolved the Subscription collateral parent-child architecture around BBC pool-level aggregation requirements — a parent collateral record for subscription facilities with individual LP child records, driven by downstream reporting and compliance needs.',
        'Built and scaled a 60+ component Figma design system across Angular and React applications — standardizing implementation quality and reducing redundant pattern-building across concurrent engineering teams.',
        'Produced complete HTML prototypes for complex modules — Investment Collateral, Valuation/Appraisal, BBC, and Flood Details — enabling engineering teams to implement from working references rather than static Figma specs.',
        'Authored complete acceptance criteria and field-level specifications for complex modules — working directly with CEO and engineering leads in the absence of dedicated product managers.',
        'Facilitated cross-functional alignment workshops in FigJam and mentored junior and mid-level designers through structured critique sessions and shared component library standards.',
        'Incorporated Claude, ChatGPT, and Figma Make as a core working method — using AI-generated IA frameworks and throwaway prototypes to compress early discovery from days to hours.'
      ],
      impact: [
        { metric: 'Reduced analyst review time 30% through a unified collateral decision surface', icon: '📈' },
        { metric: '60+ component design system across Angular and React modules', icon: '🧩' },
        { metric: '11 collateral categories on one adaptive component system', icon: '🎯' },
        { metric: 'Production-ready HTML prototypes enabling direct engineering implementation', icon: '✓' }
      ],
      tools: [
        { label: 'Design Tools', items: ['Figma', 'FigJam', 'Claude', 'ChatGPT', 'Figma Make', 'Copilot'] },
        { label: 'Product & Collaboration', items: ['Jira', 'Confluence', 'Product Workshops'] },
        { label: 'Technologies', items: ['Angular', 'React', 'HTML Prototypes'] },
        { label: 'Specialties', items: ['Workflow Architecture', 'Human-in-the-Loop Systems', 'Override-with-Rationale Patterns', 'Compliance UX', 'Integration Design'] }
      ] as ToolGroup[]
    },
    {
      title: 'Senior UI/UX Designer',
      company: 'Bank of America',
      location: 'New York',
      period: 'Feb 2021 – Feb 2022',
      description: 'Designed consumer-facing and operational digital experiences across web and mobile platforms serving millions of retail banking users — focused on high-frequency transactional workflows, account management, and accessible product design at scale across iOS, Android, and responsive web.',
      highlights: [
        'Led end-to-end UX for payments and account management flows used by millions of retail banking users — driving measurable improvements in task completion rates, error reduction, and WCAG 2.1 AA compliance across web and native mobile platforms.',
        'Simplified a 7-step transactional workflow to 4 steps by eliminating redundant confirmation states and consolidating information architecture — reducing user errors and inbound support escalations, validated through moderated usability sessions with 12+ participants.',
        'Redesigned a high-traffic mobile self-service flow — identified through behavioral analytics as the primary drop-off point — confirmed a 20% reduction in abandonment at the critical task step through post-launch behavioral analytics.',
        'Drove WCAG 2.1 AA compliance reviews across payment and account management surfaces — establishing a structured audit process that resolved contrast, focus order, and screen reader compatibility issues before engineering handoff.',
        'Contributed 20+ reusable, documented components to the enterprise-scale Bank of America design system — supporting consistent UX across platform products and improving engineering implementation speed.',
        'Conducted mixed-method usability research using interactive prototypes, behavioral analytics, heatmap analysis, and journey mapping — translating findings into prioritized design backlogs.',
        'Partnered with data analytics teams to instrument new flows and establish behavioral baselines — enabling post-launch measurement of design impact against pre-defined success metrics.',
        'Collaborated directly with iOS, Android, and web engineering leads to resolve implementation questions at the component level — preventing design intent loss without requiring redesign cycles.'
      ],
      impact: [
        { metric: '20% drop-off reduction at primary bill pay task step', icon: '📈' },
        { metric: '12+ usability testing participants across 3 core workflows', icon: '✓' },
        { metric: 'WCAG 2.1 AA compliance across all redesigned flows', icon: '🧩' },
        { metric: '68M+ active users impacted across redesigned mobile experiences', icon: '🤝' }
      ],
      tools: [
        { label: 'Design Tools', items: ['Figma', 'FigJam', 'Adobe XD'] },
        { label: 'Product & Collaboration', items: ['Jira', 'Confluence'] },
        { label: 'UX Methods', items: ['Wireframing', 'Prototyping', 'Usability Testing', 'Behavioral Insights'] },
        { label: 'Technologies', items: ['Angular'] },
        { label: 'Specialties', items: ['Responsive Design', 'Design Systems', 'Conversion-Focused UX'] }
      ] as ToolGroup[]
    },
    {
      title: 'UI/UX Designer',
      company: 'Innovative Design Studio',
      location: 'Freelance',
      period: 'Jan 2018 – Jan 2021',
      description: 'Independent product design practice partnering with early-stage startups to design MVP web and mobile products across fintech and SaaS verticals — operating as sole designer across each engagement from discovery through investor-ready delivery.',
      highlights: [
        'Designed complete end-to-end product experiences for 3 startup clients — covering full information architecture, user research synthesis, user flows, wireframes, and high-fidelity interfaces, each delivered within a 6-week design sprint with no junior design support.',
        'Delivered interactive prototypes with sufficient fidelity to enable founders to conduct investor pitch demonstrations and initiate engineering sprints with implementation-ready specifications.',
        'Managed full client relationship lifecycle independently — from initial discovery workshops and requirements definition through design delivery, stakeholder review cycles, and final handoff.',
        'Designed across fintech and B2B SaaS verticals — developing early fluency in regulated product constraints, financial data presentation, and complex workflow design that directly informed later enterprise work.',
        'Translated business goals and product vision into actionable UX direction and launch-ready product decisions across fast-moving startup environments.'
      ],
      impact: [],
      tools: [
        { label: 'Design Tools', items: ['Figma', 'FigJam', 'Adobe XD'] },
        { label: 'UX Methods', items: ['Wireframing', 'Prototyping', 'Information Architecture'] },
        { label: 'Product Foundations', items: ['Responsive Design', 'User Flows', 'MVP Product Design'] }
      ] as ToolGroup[]
    },
  ];

  return (
    <section id="experience" className="py-24 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-heading dark:text-white">Work Experience</h2>
          <p className="section-subheading mx-auto dark:text-gray-300 mb-8">
            Product designer with 9+ years owning design strategy across complex, regulated enterprise platforms — financial services, lending, and government health systems. Operates at the intersection of design, product, and engineering: resolving architectural ambiguity before it costs engineering cycles, defining interaction models that become the implementation baseline, and building systems other teams build on.
          </p>
        </div>
        
        {isLoading ? (
          <ExperienceSkeleton />
        ) : (
          <div className="max-w-5xl mx-auto space-y-12">
            {experiences.map((exp, index) => (
              <div 
                key={index}
                data-experience-card
                data-index={index}
                className={`group bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform border border-transparent hover:border-portfolio-accent/20
                  ${visibleExperiences.includes(index) 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'} 
                  hover:-translate-y-1 hover:scale-[1.02]`}
                style={{ 
                  transitionDelay: `${0.2 * index}s`,
                  transitionProperty: 'opacity, transform'
                }}
              >
                {/* Header */}
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Briefcase className="text-portfolio-accent transition-transform duration-300 group-hover:scale-110" size={20} />
                      <h3 className="text-2xl font-bold text-portfolio-text-dark dark:text-white group-hover:text-portfolio-accent transition-colors duration-300">
                        {exp.title}
                      </h3>
                    </div>
                    <p className="text-xl text-portfolio-accent font-semibold mb-2 transition-all duration-300 group-hover:scale-105 origin-left">
                      {exp.company}
                    </p>
                    <div className="flex flex-wrap items-center gap-4 text-portfolio-text-light dark:text-gray-300">
                      <div className="flex items-center gap-1 transition-transform duration-300 hover:scale-105">
                        <MapPin size={16} className="transition-colors duration-300 group-hover:text-portfolio-accent" />
                        <span>{exp.location}</span>
                      </div>
                      <div className="flex items-center gap-1 transition-transform duration-300 hover:scale-105">
                        <Calendar size={16} className="transition-colors duration-300 group-hover:text-portfolio-accent" />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-portfolio-text-light dark:text-gray-300 mb-6 leading-relaxed transition-colors duration-300 group-hover:text-portfolio-text-dark dark:group-hover:text-gray-200">
                  {exp.description}
                </p>

                {/* Role Highlights */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-portfolio-text-dark dark:text-white mb-4 flex items-center gap-2 transition-colors duration-300 group-hover:text-portfolio-accent">
                    <Users size={18} className="text-portfolio-accent transition-transform duration-300 group-hover:scale-110" />
                    Role Highlights
                  </h4>
                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-portfolio-text-light dark:text-gray-300 transition-all duration-300 hover:translate-x-2 hover:text-portfolio-text-dark dark:hover:text-gray-200">
                        <span className="text-portfolio-accent text-sm mt-1.5 transition-transform duration-300 hover:scale-150">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Impact Metrics */}
                {exp.impact.length > 0 && (
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-portfolio-text-dark dark:text-white mb-4 flex items-center gap-2 transition-colors duration-300 group-hover:text-portfolio-accent">
                      <TrendingUp size={18} className="text-portfolio-accent transition-transform duration-300 group-hover:scale-110" />
                      Key Impact
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                      {exp.impact.map((item, idx) => (
                        <div key={idx} className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 text-center transition-all duration-300 hover:scale-105 hover:shadow-md hover:bg-blue-50 dark:hover:bg-gray-600 cursor-pointer">
                          <div className="text-2xl mb-2 transition-transform duration-300 hover:scale-125">{item.icon}</div>
                          <p className="text-sm font-medium text-portfolio-text-dark dark:text-white transition-colors duration-300">
                            {item.metric}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Tools & Stack */}
                <div>
                  <h4 className="text-lg font-semibold text-portfolio-text-dark dark:text-white mb-4 flex items-center gap-2 transition-colors duration-300 group-hover:text-portfolio-accent">
                    <Award size={18} className="text-portfolio-accent transition-transform duration-300 group-hover:scale-110" />
                    Tools & Stack
                  </h4>
                  <div className="space-y-3">
                    {exp.tools.map((group: ToolGroup, idx) => (
                      <div key={idx}>
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-portfolio-accent mb-2">
                          {group.label}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {group.items.map((tool, toolIdx) => (
                            <span
                              key={toolIdx}
                              className="px-3 py-1 bg-portfolio-accent/10 text-portfolio-accent rounded-full text-sm font-medium transition-all duration-300 hover:bg-portfolio-accent hover:text-white hover:scale-105 cursor-pointer"
                            >
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Experience;
