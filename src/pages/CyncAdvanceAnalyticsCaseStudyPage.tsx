import React from 'react';
import { ShieldCheck } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import { SEOHead } from '@/components/SEOHead';
import CaseStudyPageLayout from '@/components/CaseStudyPageLayout';
import NeedsAnswerFlag from '@/components/NeedsAnswerFlag';
import { caseStudies } from '@/utils/data/caseStudies';

const project = caseStudies.find((p) => p.id === 4)!;

const problemDetails = [
  {
    title: 'Dashboard Views',
    body: 'Dashboard-style screens with bar/column chart components.',
  },
  {
    title: 'Table-Based Views',
    body: 'Table-based data views.',
  },
  {
    title: 'Modal / Detail States',
    body: 'Several dark-background modal or detail-state screens.',
  },
  {
    title: 'Screen Count',
    body: 'Approximately 25 distinct screens total, per the design file.',
  },
];

const additionalSections = [
  {
    title: 'Design Decisions',
    content: (
      <NeedsAnswerFlag>
        Not yet populated. No design decision in this section can be written honestly until
        specific screens are described — what each chart shows, what each table contains, what the
        modal/detail screens do, and why they were designed that way.
      </NeedsAnswerFlag>
    ),
  },
  {
    title: 'Role',
    content: (
      <NeedsAnswerFlag>
        Unresolved — this document previously appeared with "Lead Principal Product Designer,"
        which conflicts with "Senior Product Designer" used everywhere else in this portfolio and
        in your own stated profile. This needs to be resolved with a single correct answer before
        either title is used in any portfolio material for this project. "Lead Principal Product
        Designer" is not used anywhere on this page.
      </NeedsAnswerFlag>
    ),
  },
  {
    title: "Scope of What's Confirmed Here",
    content: (
      <div className="rounded-2xl border-2 border-gray-200 bg-portfolio-bg-light p-6 sm:p-8">
        <ShieldCheck className="w-5 h-5 text-portfolio-text-dark mb-3" />
        <p className="text-sm text-portfolio-text-light leading-relaxed mb-3">
          <span className="font-semibold text-portfolio-text-dark">Confirmed:</span> the product
          exists, it was designed by Manish, and it includes dashboard, chart, table, and
          modal/detail screens.
        </p>
        <p className="text-sm text-portfolio-text-light leading-relaxed">
          <span className="font-semibold text-portfolio-text-dark">Not confirmed:</span> product
          name accuracy ("Advance Analytics" vs. "Cync Advance Analytics" vs. "CAA"), what specific
          problem it solves, which systems it integrates with, any user research process, any
          adoption or performance metrics, any regulatory reporting claims (CCAR/IFRS9/Basel), any
          entity hierarchy or data architecture claims, and the title used on this project.
        </p>
      </div>
    ),
  },
  {
    title: 'Open Items — Pending Confirmation Before Use',
    content: (
      <div className="space-y-4">
        <NeedsAnswerFlag>
          What does Advance Analytics actually do — one or two sentences, in your own words.
        </NeedsAnswerFlag>
        <NeedsAnswerFlag>
          Pick 2-3 specific screens from the design file and describe what each one shows (chart
          type, what data, what table columns, what a modal screen does).
        </NeedsAnswerFlag>
        <NeedsAnswerFlag>
          Your actual title on this project — Senior Product Designer, or something else, resolved
          once and used consistently everywhere.
        </NeedsAnswerFlag>
        <NeedsAnswerFlag>
          Any real metric you can point to — even rough — for what this replaced or improved, or
          confirmation there isn't one.
        </NeedsAnswerFlag>
        <NeedsAnswerFlag>
          Whether this integrates with other confirmed systems (Collateral, Loan) or stands alone.
        </NeedsAnswerFlag>
        <NeedsAnswerFlag>
          Higher-resolution screenshots or exported images — current thumbnails aren't legible
          enough to extract field-level detail.
        </NeedsAnswerFlag>
      </div>
    ),
  },
];

// No real usable images yet — thumbnails aren't legible enough to extract field-level detail
// (see Open Items). These gracefully placeholder via ImagePlaceholder until real exports land.
const images = [
  { filename: 'caa-dashboard-chart-view.png', caption: 'Dashboard view with chart components (verified category — specific screen not yet selected)' },
  { filename: 'caa-table-view.png', caption: 'Table-based data view (verified category — specific screen not yet selected)' },
  { filename: 'caa-modal-detail-view.png', caption: 'Dark-background modal / detail-state screen (verified category — specific screen not yet selected)' },
];

const CyncAdvanceAnalyticsCaseStudyPage = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <SEOHead
        title={`${project.title} | Manish Sondhi`}
        description={project.description}
        type="article"
        category={Array.isArray(project.category) ? project.category[0] : project.category}
      />
      <div className="pt-16">
        <div className="section-container">
          <BreadcrumbNav projectTitle={project.title} />
        </div>
        <CaseStudyPageLayout
          eyebrow="Enterprise Web"
          title={project.title}
          subtitle={project.subtitle}
          company="Cync Software"
          status={project.status}
          // Temporary stand-in; replace with real export as caa-hero.png when ready
          heroImage="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1600"
          overviewText="Advance Analytics is a real product you designed — confirmed by actual Figma screens showing dashboard views, chart/graph components, table layouts, and detail/modal states. Beyond that confirmed existence, this case study does not yet contain enough verified detail to describe what the product does, who uses it, or what problem it solves — because that detail hasn't been provided in a form that can be verified, the way the CRE Appraisal tabs or Investment Collateral fields were."
          problemTitle="The System (Verified, In Production)"
          problemText="That is the complete extent of what's currently confirmed. No specific field names, metrics, data model, user roles, or workflow steps have been verified."
          problemDetails={problemDetails}
          additionalSections={additionalSections}
          images={images}
        />
      </div>
      <Footer />
    </div>
  );
};

export default CyncAdvanceAnalyticsCaseStudyPage;
