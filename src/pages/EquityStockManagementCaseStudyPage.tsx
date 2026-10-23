import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import { SEOHead } from '@/components/SEOHead';
import CaseStudyPageLayout from '@/components/CaseStudyPageLayout';
import EquityStockDiagram from '@/components/motion/EquityStockDiagram';
import { caseStudies } from '@/utils/data/caseStudies';

const project = caseStudies.find((p) => p.id === 8)!;

// Local filenames under /case-studies/ — ImagePlaceholder shows an "Export Needed" box
// with the expected filename until the Figma frame is exported to that path.
const img = {
  hero: 'esm-stock-list.png',
  policyLtv: 'esm-create-stock.png',
  deactivate: 'esm-deactivate-warning.png',
  bulkImport: 'esm-bulk-upload-review.png',
  history: 'esm-stock-history.png',
  duplicates: 'esm-duplicate-check.png',
};

const listColumns = [
  'Symbol', 'Name', 'Country', 'Category', 'Policy LTV (%)', 'SNP Real Time Price',
  'Created By', 'Date Created', 'Date Modified', 'Last Modified By',
];

const keyDecisions = [
  {
    title: "Deactivate, Don't Break History",
    body: 'The Problem: a stock that falls out of favor (delisted, downgraded, too volatile) still sits on existing loans. Deleting it would corrupt those records.\n\nThe Decision: delete is blocked while the stock is in use, and deactivate removes it from future use without touching existing records. The warning text says exactly that, so the administrator knows the blast radius before confirming.',
    image: img.deactivate,
  },
  {
    title: 'Bulk Import With a Review Step',
    body: 'Uploading a file does not write directly. The system reports what it found, lets the administrator proceed, and confirms the result. Stock lists run to thousands of rows, and a typed-in list is not realistic.',
    image: img.bulkImport,
  },
  {
    title: 'History Is Visible',
    body: 'A View Stock History panel shows how a stock\'s settings changed over time (the sample shows dated entries), so a margin change is attributable and a question of "what was the policy when this loan closed" is answerable.',
    image: img.history,
  },
  {
    title: 'Duplicates Are Prevented at Entry',
    body: 'The form checks for an existing stock by criteria and by name before saving, because duplicate symbols in a policy table create ambiguity about which margin applies.',
    image: img.duplicates,
  },
];

const Quote: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="font-medium text-portfolio-text-dark">"{children}"</span>
);

const additionalSections = [
  {
    title: 'Bulk Upload, Reviewed',
    content: <EquityStockDiagram />,
  },
  {
    title: 'The System',
    content: (
      <>
        <p className="text-xs text-portfolio-text-light italic mb-6">
          Source: about 55 frames in the CYNC Figma file (Equity Stock Management / Stock
          Management / Stock Update / Create Stock). Company names, tickers, and percentages in the
          frames are sample data.
        </p>

        <p className="font-semibold text-portfolio-text-dark mb-2">Stock list</p>
        <p className="text-sm text-portfolio-text-light leading-relaxed mb-3">
          A table with a price source column and audit fields. Category covers values such as
          S&amp;P 500 and Market Capitalization; Policy LTV (%) is also labeled Policy LTV (Margin)
          in later frames. An empty state reads <Quote>No stock has been created</Quote>, with a
          Create Stock action.
        </p>
        <div className="flex flex-wrap gap-2 mb-8">
          {listColumns.map((col) => (
            <span
              key={col}
              className="px-3 py-1 bg-portfolio-bg-light text-portfolio-text-dark rounded-full text-xs font-medium"
            >
              {col}
            </span>
          ))}
        </div>

        <p className="font-semibold text-portfolio-text-dark mb-2">Create, edit, and import</p>
        <ul className="space-y-2 text-sm text-portfolio-text-light leading-relaxed mb-8 list-disc pl-5">
          <li>
            <span className="font-semibold text-portfolio-text-dark">Create New Stock</span> with
            required Symbol, Name, and Policy LTV (%), plus Country and Category selectors.
          </li>
          <li>
            <span className="font-semibold text-portfolio-text-dark">Edit Stock</span> and{' '}
            <span className="font-semibold text-portfolio-text-dark">Stock Update</span> flows.
          </li>
          <li>
            <span className="font-semibold text-portfolio-text-dark">Bulk upload:</span>{' '}
            <Quote>Drag and drop a file here or browse to select a file.</Quote> A review step
            reports <Quote>Data was found in the uploaded file that can be used to create additional stocks</Quote>,
            with a Next step and a confirmation (<Quote>Stocks successfully updated</Quote>).
          </li>
          <li>
            <span className="font-semibold text-portfolio-text-dark">Export</span> (XLS or PDF) and{' '}
            <span className="font-semibold text-portfolio-text-dark">Download</span>.
          </li>
          <li>
            <span className="font-semibold text-portfolio-text-dark">View Stock History</span>{' '}
            showing prior values by date.
          </li>
        </ul>

        <p className="font-semibold text-portfolio-text-dark mb-2">Guarded lifecycle</p>
        <ul className="space-y-2 text-sm text-portfolio-text-light leading-relaxed list-disc pl-5">
          <li>
            <span className="font-semibold text-portfolio-text-dark">Duplicate checks:</span>{' '}
            <Quote>Stock meeting the entered criteria already exists</Quote>,{' '}
            <Quote>Name is already in use</Quote>.
          </li>
          <li>
            <span className="font-semibold text-portfolio-text-dark">Delete versus deactivate:</span>{' '}
            a stock currently in use cannot be deleted (
            <Quote>This stock is currently associated with a record. Please remove the stock from any associated records to delete it</Quote>
            ). Deactivation is offered instead:{' '}
            <Quote>Deactivating this stock will not affect records where it is currently in use, but it will be unavailable for use with future records.</Quote>
          </li>
          <li>
            <span className="font-semibold text-portfolio-text-dark">Confirmations:</span>{' '}
            <Quote>Stock successfully created / edited / deleted / deactivated</Quote>.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: 'Related Work',
    content: (
      <p className="text-sm text-portfolio-text-light leading-relaxed">
        For how the policy set here reaches loans, see{' '}
        <Link to="/work/investment-collateral" className="text-portfolio-accent underline hover:no-underline">
          Investment Collateral: Securities as a Distinct Collateral Category
        </Link>
        . For the wider collateral module, see the{' '}
        <Link to="/work/cync-collateral-platform" className="text-portfolio-accent underline hover:no-underline">
          Cync Collateral Platform
        </Link>
        .
      </p>
    ),
  },
  {
    title: 'Role',
    content: (
      <p className="text-sm text-portfolio-text-light leading-relaxed">
        Designer of the Equity Stock Management flows shown in the CYNC Figma file.
      </p>
    ),
  },
];

const images = [
  { filename: 'esm-stock-list.png', caption: 'Stock list with Policy LTV and audit fields' },
  { filename: 'esm-empty-state.png', caption: 'Empty state — "No stock has been created"' },
  { filename: 'esm-create-stock.png', caption: 'Create New Stock form' },
  { filename: 'esm-bulk-upload-review.png', caption: 'Bulk upload with review step' },
  { filename: 'esm-stock-history.png', caption: 'View Stock History' },
  { filename: 'esm-deactivate-warning.png', caption: 'Delete blocked — deactivate offered instead' },
];

const closingReflection = [
  'A master list that feeds many loans has to be safe to change. Policy LTV set once per stock, duplicate checks at entry, history on every change, and a choice of deactivate over delete for anything in use all come from the same concern: an edit here reaches every loan that uses the stock.',
  'The lesson is to design administrative tools around blast radius. Tell the administrator exactly what will and will not be affected before they confirm, and make it impossible to break existing records by accident.',
];

const EquityStockManagementCaseStudyPage = () => {
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
          eyebrow="Enterprise Collateral Management"
          title={project.title}
          subtitle={project.subtitle}
          role={project.role}
          company="Cync Software (nCino)"
          heroImage={img.hero}
          overviewText="Securities-backed lending needs a source of truth for which stocks the lender will accept and at what policy margin. This admin surface is where that decision is made and maintained."
          problemTitle="Before a Stock Can Be Pledged"
          problemText="Before a security can be pledged on a loan, the lender has to decide it is acceptable, classify it, and set a policy LTV. The Investment Collateral case study covers how that policy flows to loans; this one covers the master list behind it."
          hardDecisionImage={img.policyLtv}
          hardDecisionIntro="Policy LTV Lives on the Stock, Not on the Loan."
          hardDecisionBody="The margin is set once per stock in Administration, which matches the platform's policy-inheritance model: configure upstream, inherit downstream. A loan officer pledging a stock does not choose its margin, so two officers cannot treat the same stock differently."
          keyDecisions={keyDecisions}
          additionalSections={additionalSections}
          images={images}
          closingReflection={closingReflection}
        />
      </div>
      <Footer />
    </div>
  );
};

export default EquityStockManagementCaseStudyPage;
