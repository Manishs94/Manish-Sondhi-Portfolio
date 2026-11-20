import React, { useState, useEffect } from 'react';
import { Briefcase, MapPin, Calendar, TrendingUp, Users, Award } from 'lucide-react';

type ToolGroup = {
  label: string;
  items: string[];
};

type HighlightGroup = {
  heading?: string;
  items: string[];
};

type Experience = {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  highlights: HighlightGroup[];
  impact: { metric: string; icon: string }[];
  tools: ToolGroup[];
};

const Experience = () => {
  const [visibleExperiences, setVisibleExperiences] = useState<number[]>([]);

  // Progressively reveal experiences
  useEffect(() => {
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
  }, []);

  const experiences: Experience[] = [
    {
      title: "Staff UX Product Designer",
      company: "Infinite Computer Solutions",
      location: "Remote",
      period: "May 2026 – Present",
      description: "UX/UI Designer and Business Analyst for MDE4Vets, a back-office platform managing VA disability (C&P) exam logistics, provider billing, and compliance reporting — covering case-queue distribution, CPT billing configuration, invoice and travel/mileage reimbursement reporting, and provider training compliance, alongside a junior designer.",
      highlights: [
        {
          items: [
            "Conducted an end-to-end IA and UX audit across the platform's full surface, operating as a business analyst alongside design work to document patterns, redundancies, and gaps across a complex multi-persona system.",
            "Identified a recurring sensitive-data exposure pattern — unmasked sensitive identifiers in report data grids — a concrete compliance and security finding surfaced through systematic audit.",
            "Designing MDE4Vets stories on the shared MDE4Vets and Veteran Design System: UI/UX Principles, Banner Config, Announcements Config, Appointment Scheduling, Admin Roles, Clusters, and Availability Calendar.",
            "Built and extended the shared component system for MDE4Vets, LoyalSource, and VeteranPortal in Figma: VA-aligned foundations (Open Sans, VA-derived color, 14px minimum text), form controls in framed and frameless variants, navigation, overlays and steppers, and light and dark button sets.",
            "Defined a table system of six table types in two densities, built from reusable cell kinds, with composed recipes for provider appointments, final contention review, diagnostics, scheduling, and grouped case tables.",
            "Designed a packet-document selector that states the billing rule in its empty state, and a provider availability calendar with explicit slot states and facility-time-zone display.",
            "Redesigned the Veteran-facing exam portal around tasks (Scheduled, Unscheduled, Past Appointments, Travel Reimbursements): scheduling preferences moved from a phone call into the portal, plus a reimbursement tracker, notifications, and complete sign-in and recovery flows in light and dark themes at desktop and mobile widths.",
            "Used Claude and the Figma agent to create and update designs across the system, with each output reviewed and corrected by hand against VA/USWDS standards before it entered the shared library."
          ]
        }
      ],
      impact: [],
      tools: [
        { label: "Design Tools", items: ["Figma", "FigJam"] },
        { label: "AI-Assisted Tools", items: ["Claude", "Figma agent", "ChatGPT", "Copilot"] },
        { label: "Specialties", items: ["Business Analysis", "Compliance Auditing", "Federal Health Systems", "Information Architecture", "Design Systems", "VA / USWDS Standards"] }
      ]
    },
    {
      title: "Founding Designer",
      company: "CYNC Software",
      location: "Remote",
      period: "Feb 2022 – Jul 2026",
      description: "Design lead and product strategist for a multi-module B2B SaaS lending platform serving 15+ regulated financial institutions across loan origination, collateral management, AI-assisted decisioning, and portfolio analytics. Operated beyond a pure design remit — taking on product ownership and business analysis responsibilities, defining interaction models, workflow architecture, and integration design in close partnership with product, engineering, compliance, and data teams. All design work executed from discovery through production-ready spec.",
      highlights: [
        {
          heading: "Platform Strategy & Product Direction",
          items: [
            "Lead Product Designer, Advance Analytics: designed from scratch, with no internal precedent, the lending-compliance reporting and dashboard product, from information architecture through production-ready screens.",
            "Defined end-to-end design strategy for 5+ concurrent product modules simultaneously — establishing interaction models, IA frameworks, and workflow standards that became the engineering implementation baseline across quarterly release cycles, driving consistency without a dedicated program manager.",
            "Drove collateral module architecture from ambiguous, underdefined problem space to production-ready specification — resolving critical system boundary decisions between Admin configuration, Collateral enforcement, and UI inventory layers without formal product management support, preventing costly mid-build rework.",
            "Re-architected a fragmented collateral evaluation experience spanning multiple disconnected screens into a single unified decision surface — reducing analyst review time by 30%, eliminating workflow ambiguity, and improving multi-role operational clarity for underwriters, analysts, and compliance reviewers.",
            "Designed the collateral platform across 11 structurally distinct collateral categories, including a component-based administration builder that assembles sub-types (12 for Commercial Real Estate, 13 for Agriculture) from a shared library, so a new sub-type is a configuration task, not a new screen."
          ]
        },
        {
          heading: "Human-in-the-Loop & AI-Assisted Workflows",
          items: [
            "Designed override-with-rationale patterns across the lending platform: risk-rating scores that show the original and updated score and decision with overrides and comments, and required reason fields on pledge amount, collateral discount, Policy LTV, and Advance Rate overrides, so a person can supersede a system-calculated value and the reason stays on the record.",
            "Designed a natural-language rule-entry component for Fleet collateral, where administrators describe advance rules in plain language and AI interprets and structures them into the rule set, with guarded deletion and the same override-permission controls as manually built rules.",
            "Designed how a third-party automated valuation (ClearAVM) is presented as evidence: market value with a confidence score and nested 20%, 10%, and 5% confidence bands, order ID, and run date, recorded as an Evaluation under the same completion, review, and acceptance fields as a human valuation.",
            "Incorporated AI-assisted tooling — Claude, ChatGPT, Figma Make — as a core working method rather than a curiosity, using AI-generated IA frameworks and throwaway prototypes to compress early discovery from days to hours and stress-test interaction patterns before committing engineering resources to final design."
          ]
        },
        {
          heading: "Systems Design & Integration Architecture",
          items: [
            "Designed complete end-to-end third-party integration workflows for Dataverify Flood Services — defining the full lifecycle state machine from not-ordered through pending, completed, and failed states, dual-path execution for automated and manual determination flows, fallback logic for offline scenarios, and SFHA escalation as an automatic system behavior rather than a user decision.",
            "Architected EODHD financial data integration for the Investment Collateral module — defining real-time pricing fetch behavior, Securities Master auto-population logic, stale data handling, and symbol lookup cascade patterns that kept the UI responsive under variable API performance conditions.",
            "Built and scaled a 60+ component Figma design system — establishing reusable, documented patterns for data-heavy grid interfaces, multi-state workflow screens, status dashboards, and complex form architectures across Angular and React applications, standardizing implementation quality and reducing redundant pattern-building across concurrent engineering teams working on separate modules.",
            "Resolved the Subscription collateral parent-child architecture around BBC pool-level aggregation requirements — establishing a parent collateral record for subscription facilities with individual LP child records using Cync's native hierarchy, a decision driven by downstream reporting and compliance needs rather than UI preference."
          ]
        },
        {
          heading: "Cross-Functional Leadership & Design Elevation",
          items: [
            "Facilitated cross-functional alignment workshops in FigJam bringing together product, engineering, compliance, and business stakeholders to resolve system behavior conflicts, define workflow ownership boundaries, and align on release priorities — converting ambiguous stakeholder disagreements into documented design decisions.",
            "Produced complete HTML prototypes for complex modules — Investment Collateral, Valuation/Appraisal, BBC, and Flood Details — enabling engineering teams to implement from working references rather than static Figma specs, significantly reducing interpretation errors during development."
          ]
        }
      ],
      impact: [
        { metric: "Reduced analyst review time 30% through a unified collateral decision surface", icon: "📈" },
        { metric: "60+ component design system across Angular and React applications", icon: "🧩" },
        { metric: "11 collateral categories on one adaptive component system", icon: "🎯" },
        { metric: "HTML prototypes as working references for engineering", icon: "✓" }
      ],
      tools: [
        { label: "Design Tools", items: ["Figma", "FigJam", "Claude", "ChatGPT", "Figma Make", "Copilot"] },
        { label: "Product & Collaboration", items: ["Jira", "Confluence", "Product Workshops"] },
        { label: "Technologies", items: ["Angular", "React", "HTML Prototypes"] },
        { label: "Specialties", items: ["Workflow Architecture", "Human-in-the-Loop Systems", "Override-with-Rationale Patterns", "Compliance UX", "Integration Design"] }
      ]
    },
    {
      title: "Senior UI/UX Designer",
      company: "Bank of America",
      location: "New York",
      period: "Feb 2021 – Feb 2022",
      description: "Designed consumer-facing and operational digital experiences across web and mobile platforms serving millions of retail banking users — focused on high-frequency transactional workflows, account management, and accessible product design at scale across iOS, Android, and responsive web.",
      highlights: [
        {
          items: [
            "Led end-to-end UX for payments and account management flows used by millions of retail banking users — driving measurable improvements in task completion rates, error reduction, and WCAG 2.1 AA accessibility compliance across web and native mobile platforms simultaneously.",
            "Redesigned a high-traffic mobile self-service flow — identified through behavioral analytics as the primary drop-off point — validated through moderated usability testing and confirmed a 20% reduction in abandonment at the critical task step through post-launch behavioral analytics.",
            "Simplified a 7-step transactional workflow to 4 steps by eliminating redundant confirmation states and consolidating information architecture — reducing user errors and inbound support escalations, validated through moderated usability sessions with 12+ participants before release.",
            "Contributed 20+ reusable, documented components to the enterprise-scale Bank of America design system — supporting consistent UX across platform products, reducing cross-team duplication, and improving engineering implementation speed across feature teams working in parallel."
          ]
        }
      ],
      impact: [
        { metric: "20% reduction in abandonment at the critical task step", icon: "📈" },
        { metric: "7-step workflow simplified to 4 steps", icon: "✓" },
        { metric: "20+ components contributed to the enterprise design system", icon: "🧩" }
      ],
      tools: [
        { label: "Design Tools", items: ["Figma", "FigJam", "Adobe XD"] },
        { label: "Product & Collaboration", items: ["Jira", "Confluence"] },
        { label: "UX Methods", items: ["Wireframing", "Prototyping", "Usability Testing", "Behavioral Insights"] },
        { label: "Technologies", items: ["Angular"] },
        { label: "Specialties", items: ["Responsive Design", "Design Systems", "Accessibility (WCAG 2.1 AA)"] }
      ]
    },
    {
      title: "UI/UX Designer",
      company: "Innovative Design Studio",
      location: "Freelance",
      period: "Jan 2018 – Jan 2021",
      description: "Independent product design practice partnering with early-stage startups to design MVP web and mobile products across fintech and SaaS verticals — operating as sole designer across each engagement from discovery through investor-ready delivery.",
      highlights: [
        {
          items: [
            "Designed complete end-to-end product experiences for 3 startup clients — covering full information architecture, user research synthesis, user flows, wireframes, interaction design, and high-fidelity interfaces — each engagement delivered within a 6-week design sprint with no junior design support.",
            "Delivered interactive prototypes with sufficient fidelity to enable founders to conduct investor pitch demonstrations and initiate engineering sprints with implementation-ready specifications — eliminating the typical gap between design delivery and development kickoff."
          ]
        }
      ],
      impact: [],
      tools: [
        { label: "Design Tools", items: ["Figma", "FigJam", "Adobe XD"] },
        { label: "UX Methods", items: ["Wireframing", "Prototyping", "Information Architecture"] },
        { label: "Product Foundations", items: ["Responsive Design", "User Flows", "MVP Product Design"] }
      ]
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
        
          <div className="max-w-5xl mx-auto space-y-12">
            {experiences.map((exp, index) => (
              <div 
                key={index}
                data-experience-card
                data-index={index}
                className={`group bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-500 transform border border-transparent hover:border-portfolio-accent/20
                  ${visibleExperiences.includes(index) 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'} 
                  `}
                style={{ 
                  transitionDelay: `${0.2 * index}s`,
                  transitionProperty: 'opacity, transform'
                }}
              >
                {/* Header */}
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Briefcase className="text-portfolio-accent transition-transform duration-300" size={20} />
                      <h3 className="text-2xl font-bold text-portfolio-text-dark dark:text-white group-hover:text-portfolio-accent transition-colors duration-300">
                        {exp.title}
                      </h3>
                    </div>
                    <p className="text-xl text-portfolio-accent font-semibold mb-2 transition-all duration-300 origin-left">
                      {exp.company}
                    </p>
                    <div className="flex flex-wrap items-center gap-4 text-portfolio-text-light dark:text-gray-300">
                      <div className="flex items-center gap-1 transition-transform duration-300">
                        <MapPin size={16} className="transition-colors duration-300 group-hover:text-portfolio-accent" />
                        <span>{exp.location}</span>
                      </div>
                      <div className="flex items-center gap-1 transition-transform duration-300">
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
                    <Users size={18} className="text-portfolio-accent transition-transform duration-300" />
                    Role Highlights
                  </h4>
                  <div className="space-y-6">
                    {exp.highlights.map((group, groupIdx) => (
                      <div key={groupIdx}>
                        {group.heading && (
                          <p className="text-sm font-semibold text-portfolio-text-dark dark:text-white mb-2">
                            {group.heading}
                          </p>
                        )}
                        <ul className="space-y-2">
                          {group.items.map((highlight, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-portfolio-text-light dark:text-gray-300">
                              <span className="text-portfolio-accent text-sm mt-1.5">•</span>
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Impact Metrics */}
                {exp.impact.length > 0 && (
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-portfolio-text-dark dark:text-white mb-4 flex items-center gap-2 transition-colors duration-300 group-hover:text-portfolio-accent">
                      <TrendingUp size={18} className="text-portfolio-accent transition-transform duration-300" />
                      Key Impact
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                      {exp.impact.map((item, idx) => (
                        <div key={idx} className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 text-center transition-all duration-300 hover:shadow-md hover:bg-blue-50 dark:hover:bg-gray-600 cursor-pointer">
                          <div className="text-2xl mb-2 transition-transform duration-300">{item.icon}</div>
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
                    <Award size={18} className="text-portfolio-accent transition-transform duration-300" />
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
                              className="px-3 py-1 bg-portfolio-accent/10 text-portfolio-accent rounded-full text-sm font-medium transition-all duration-300 hover:bg-portfolio-accent hover:text-white cursor-pointer"
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
      </div>
    </section>
  );
};

export default Experience;
