import React from 'react';
import { ShieldCheck } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import { SEOHead } from '@/components/SEOHead';
import CaseStudyPageLayout from '@/components/CaseStudyPageLayout';
import { caseStudies } from '@/utils/data/caseStudies';

const project = caseStudies.find((p) => p.id === 4)!;

const problemDetails = [
  {
    title: 'Overview',
    body: 'Landing screen with a welcome message and a "+ Widget" action for adding widgets to the view.',
  },
  {
    title: 'Dashboards',
    body: 'A categorized library (Account, Branch, Customer, Deposit, HMDA, Loans, plus sample entries) presented as a table: Dashboard Name, Description, Created By, Date Created, Last Updated, Actions.',
  },
  {
    title: 'Reports',
    body: 'The same categorization and table structure as Dashboards (adds a Custom category), kept as a separate top-level section rather than merged into one.',
  },
  {
    title: 'DWH Query',
    body: 'Labeled "Custom & Predefined Queries" in-product — select a source database, browse its tables, and write and run custom SQL directly in a query editor, with Query History, Result, and Predefined Query tabs.',
  },
  {
    title: 'Metadata',
    body: 'A searchable data glossary, split into Business and Target (TGT) tabs, mapping abbreviation → summary → full description for lending/compliance terms.',
  },
  {
    title: 'Document & Data',
    body: 'File Upload and Adhoc Data Import, each with an empty state and an upload action.',
  },
  {
    title: 'Administration',
    body: 'Profile Management (Information, Financial Year, Holiday Calendar, Branches, Settings, Notification Content Settings, Privacy Policy Management), plus Report Permission, Roles & Permission, and User sections.',
  },
];

const keyDecisions = [
  {
    title: 'Dashboards and Reports as Parallel, Not Merged, Structures',
    body: "The Problem: dashboards (visual, at-a-glance views) and reports (typically more detailed, exportable views) serve different moments in a user's workflow, but if categorized inconsistently, a user has to learn two different mental models for organizing the same underlying business areas.\n\nThe Decision: Dashboards and Reports use the identical category taxonomy (Account, Branch, Customer, Deposit, HMDA, Loans) and the identical table structure (Name, Description, Created By, Date Created, Last Updated, Actions), while remaining separate top-level sections rather than one merged list. A user who understands how to find something in Dashboards already knows how to find its counterpart in Reports.",
  },
  {
    title: 'Self-Service SQL Access, Not Just Pre-Built Views',
    body: "The Problem: pre-built dashboards and reports cover known, anticipated questions. Analysts and compliance staff frequently need to answer questions no pre-built view was designed for.\n\nThe Decision: DWH Query gives users direct, structured access to run custom SQL against a named source database (hmda_dev), rather than requiring every ad-hoc question to go through a data or engineering team. Query History persists what was run, by execution ID, with status (Succeeded/Canceled) and timestamp — giving the self-service capability an audit trail rather than leaving ad-hoc queries undocumented. The real query log shows this used against genuine dimensional-warehouse tables (core_dim_hmda_metadata_tbl_clm..., raw_loan_admission_register), not a flattened or simplified copy of the data — so the self-service layer is querying the same structure the underlying warehouse actually uses, not a dumbed-down abstraction built for this tool.",
  },
  {
    title: 'Built-In Glossary for Regulatory Terminology',
    body: "The Problem: lending-compliance terminology (ATR, ARM, ALLL, AML, and similar) is dense and easy to get wrong, especially for users who aren't compliance specialists but still need to interpret dashboards and reports built on this data.\n\nThe Decision: Metadata is built into the application itself as a searchable glossary, with a Business-definitions view and a separate Target (TGT) view — rather than living in an external document or requiring institutional tribal knowledge to interpret what a report is actually showing.",
  },
];

const additionalSections = [
  {
    title: 'The System — Confirmed Detail',
    content: (
      <>
        <p className="text-sm text-portfolio-text-light leading-relaxed mb-4">
          Confirmed from direct product screenshots. Top-level navigation:{' '}
          <span className="font-semibold text-portfolio-text-dark">
            Overview, Dashboards, Reports, Document &amp; Data, DWH Query, Metadata, Administration.
          </span>
        </p>
        <p className="text-sm text-portfolio-text-light leading-relaxed mb-6">
          <span className="font-semibold text-portfolio-text-dark">DWH Query, in detail:</span>{' '}
          the confirmed real database name is <code className="text-xs bg-portfolio-bg-light px-1.5 py-0.5 rounded">hmda_dev</code>,
          browsable across 8 tables named by entity ID (e.g. <code className="text-xs bg-portfolio-bg-light px-1.5 py-0.5 rounded">E031-0345-e5789-g975...</code>).
          Confirmed real logged queries include{' '}
          <code className="text-xs bg-portfolio-bg-light px-1.5 py-0.5 rounded">select src_site from core_dim_hmda_metadata_tbl_clm_...</code>,{' '}
          <code className="text-xs bg-portfolio-bg-light px-1.5 py-0.5 rounded">select * from hmda_dev.raw_different_interest_rates_wkl...</code>, and{' '}
          <code className="text-xs bg-portfolio-bg-light px-1.5 py-0.5 rounded">select * from raw_loan_admission_register</code>. The{' '}
          <code className="text-xs bg-portfolio-bg-light px-1.5 py-0.5 rounded">core_dim_</code> / <code className="text-xs bg-portfolio-bg-light px-1.5 py-0.5 rounded">raw_</code>{' '}
          table-naming convention confirms this sits on top of an actual dimensional data warehouse
          (dimension and raw/staging layers), not a simplified reporting mart.
        </p>
        <p className="text-sm text-portfolio-text-light leading-relaxed mb-6">
          <span className="font-semibold text-portfolio-text-dark">Metadata, in detail:</span> real
          lending-compliance terms confirmed in the glossary include ATR (Ability to Repay), ARM
          (Adjustable Rate Mortgage), and AML (Anti-Money Laundering), among others.
        </p>
        <p className="text-sm text-portfolio-text-light leading-relaxed">
          This confirms Advance Analytics is specifically oriented around{' '}
          <span className="font-semibold text-portfolio-text-dark">
            HMDA (Home Mortgage Disclosure Act) reporting and broader lending-compliance data
          </span>{' '}
          — not a generic BI tool, but one built around a named regulatory dataset and
          domain-specific glossary content.
        </p>
      </>
    ),
  },
  {
    title: 'Role',
    content: (
      <p className="text-sm text-portfolio-text-light leading-relaxed">
        <span className="font-semibold text-portfolio-text-dark">Lead Product Designer</span> for
        this project — designed the application end to end from scratch. A subject matter expert
        supplied business and domain information; the design decisions — the product's structure,
        its connection to Loan Origination System reports and dashboards, and its screens — were
        made from that information, not executed against someone else's spec.
      </p>
    ),
  },
  {
    title: "Scope of What's Confirmed Here",
    content: (
      <div className="rounded-2xl border-2 border-gray-200 bg-portfolio-bg-light p-6 sm:p-8">
        <ShieldCheck className="w-5 h-5 text-portfolio-text-dark mb-3" />
        <p className="text-sm text-portfolio-text-light leading-relaxed mb-3">
          <span className="font-semibold text-portfolio-text-dark">Confirmed:</span> the product
          exists, it was designed from scratch, it's shipped, it's built around HMDA and broader
          lending-compliance data, it includes the seven confirmed sections above (Overview,
          Dashboards, Reports, DWH Query, Metadata, Document &amp; Data, Administration), and the
          role on this project was Lead Product Designer.
        </p>
        <p className="text-sm text-portfolio-text-light leading-relaxed">
          <span className="font-semibold text-portfolio-text-dark">Not confirmed:</span> product
          name accuracy ("Advance Analytics" vs. "Cync Advance Analytics" vs. "CAA"), the "NDS
          Systems, LC" footer attribution and how it relates to Cync, whether/how this connects
          specifically to the Collateral or Loan modules beyond LOS/Financial Analyzer generally,
          any user research process, any adoption or performance metrics, and any regulatory
          reporting claims (CCAR/IFRS9/Basel).
        </p>
      </div>
    ),
  },
];

// Real product screenshots. Environment shown is a QA/sample instance — see galleryNote below
// for what's real (structure, navigation, query data) vs. sample placeholder content.
const images = [
  { filename: 'advance-analytics-screens/01-overview.png', caption: 'Overview — landing screen, welcome state, "+ Widget" action' },
  { filename: 'advance-analytics-screens/02-dashboards.png', caption: 'Dashboards — categorized library (Account, Branch, Customer, Deposit, HMDA, Loans, Sample), table view' },
  { filename: 'advance-analytics-screens/03-reports.png', caption: 'Reports — identical category taxonomy and table structure to Dashboards, kept as a separate top-level section' },
  { filename: 'advance-analytics-screens/04-dwh-query.png', caption: 'DWH Query ("Custom & Predefined Queries") — database selector (hmda_dev), table browser, SQL query editor, and Query History' },
  { filename: 'advance-analytics-screens/05-metadata.png', caption: 'Metadata — Business/Target (TGT) glossary tabs with real lending-compliance terms' },
  { filename: 'advance-analytics-screens/06-document-data.png', caption: 'Document & Data — File Upload and Adhoc Data Import, each in an empty state in this environment' },
  { filename: 'advance-analytics-screens/07-administration-nav.png', caption: 'Full navigation, expanded — Administration open to Profile Management' },
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
          role="Lead Product Designer"
          company="Cync Software"
          status={project.status}
          heroImage="advance-analytics-screens/01-overview.png"
          overviewText="Advance Analytics is a consolidated reporting and dashboard layer for Cync's application suite — conceptually similar to Google Analytics in role, but for Cync's own products rather than external web traffic. It aggregates reports and dashboards from individual Cync applications into a single application, rather than requiring users to check each source system separately. There was no prior design or existing application at Cync to redesign or extend — this was a genuinely new product with no internal precedent. Without an internal reference point, external analytics and dashboard applications were used as structural comparison points, then adapted to Cync's specific data and use case. Currently shipped and integrated with the Loan Origination System (LOS) — specifically its reports and dashboards — and Financial Analyzer, with the stated design intent to extend coverage to additional Cync applications over time."
          problemTitle="The System (Verified, In Production)"
          problemText="Confirmed from direct product screenshots — seven top-level sections, each with real, specific structure (not just a generic category label)."
          problemDetails={problemDetails}
          keyDecisions={keyDecisions}
          additionalSections={additionalSections}
          galleryNote={'Direct product screenshots. The environment shown is a QA/sample instance — dashboard and report rows read "reallyLongDashboardName" / "Lorem ipsum..." as placeholder content, and Administration → Profile Management fields are unpopulated ("-"). The structure, navigation, and query data are real; the row-level content is not.'}
          images={images}
        />
      </div>
      <Footer />
    </div>
  );
};

export default CyncAdvanceAnalyticsCaseStudyPage;
