import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import { SEOHead } from '@/components/SEOHead';
import CaseStudyPageLayout from '@/components/CaseStudyPageLayout';
import NavSubscriptionDiagram from '@/components/motion/NavSubscriptionDiagram';
import { caseStudies } from '@/utils/data/caseStudies';

const project = caseStudies.find((p) => p.id === 13)!;

// Local filenames under /case-studies/ — ImagePlaceholder shows an "Export Needed" box
// with the expected filename until the Figma frame is exported to that path.
const img = {
  hero: 'nav-sub-lp-pool.png',
  summaryStrip: 'nav-sub-summary-strip.png',
  concentration: 'nav-sub-portfolio-rollups.png',
  sideLetter: 'nav-sub-side-letter.png',
  navSnapshot: 'nav-sub-nav-snapshot.png',
  deleteGuard: 'nav-sub-delete-guard.png',
};

const Strong: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="font-semibold text-portfolio-text-dark">{children}</span>
);

const Quote: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="font-medium text-portfolio-text-dark">"{children}"</span>
);

const Formula: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="font-mono text-xs bg-portfolio-bg-light rounded px-1.5 py-0.5 text-portfolio-text-dark">
    {children}
  </span>
);

const sideLetterImpacts = [
  'None', 'Minor / Non material', 'Eligibility Restriction', 'Capital Call Limitation',
  'Excuse / Opt-Out Rights', 'Transfer / Withdrawal Rights', 'Concentration / Exposure Limitation',
];

const keyDecisions = [
  {
    title: 'Concentration Is a First-Class Metric, Not a Report',
    body: 'Top-1 Concentration is displayed on both products as part of the summary, and the NAV frame states its formula (Max FV / Total FV) on the screen. In fund finance, a single LP or a single portfolio company dominating the pool is the main risk, so it is not left for a separate report.',
    image: img.concentration,
  },
  {
    title: 'Side Letters Are Required Data',
    body: 'The Problem: side letters can change what an LP actually owes, by limiting capital calls, granting excuse rights, or restricting transfer, without changing anything on the face of the commitment.\n\nThe Decision: Side Letter Flag is a required field with a defined impact vocabulary (eligibility restriction, capital call limitation, excuse/opt-out rights, transfer/withdrawal rights, concentration limitation), so the facts that can quietly make a commitment less collectible are captured in a structured, reportable way instead of a note.',
    image: img.sideLetter,
  },
  {
    title: 'Eligibility and Status Are Separate Fields',
    body: 'Eligibility (Eligible / Excluded) is a lender decision; LP Status (Active, Inactive, Incomplete, Transferred, Defaulted) and portfolio Status (Watch List, Non-Performing) are facts about the entity. Keeping them separate lets a defaulted LP be visibly excluded and a watch-list investment stay eligible but flagged.',
  },
  {
    title: 'Per-Row Advance Rate and Last Verified',
    body: 'The LP Pool carries an Advance Rate per LP, and a Last Verified date, so a reviewer can see both the policy applied to a given investor type or jurisdiction and how stale the data behind it is.',
  },
  {
    title: 'NAV Is Sourced, Dated, and Netted',
    body: 'NAV shows its source, date, and frequency next to the value and nets liabilities explicitly. A NAV figure without a date and source cannot be defended, so both are part of the snapshot, not an afterthought.',
    image: img.navSnapshot,
  },
  {
    title: 'Every Destructive Action Is Guarded and Confirmed',
    body: 'Add, edit, and delete each have a success confirmation; delete has a warning that names what will be removed. A pool table is edited constantly during diligence, and one mis-click removes a commitment from the borrowing base.',
    image: img.deleteGuard,
  },
];

const additionalSections = [
  {
    title: 'Headline Number, Auditable Rows',
    content: <NavSubscriptionDiagram />,
  },
  {
    title: 'The System',
    content: (
      <>
        <p className="text-xs text-portfolio-text-light italic mb-6">
          Source: about 125 frames in the CYNC Figma file (NAV Collateral, Subscription Collateral,
          and their add/edit/delete use cases). Fund names, LP names, dollar amounts, and
          percentages in the frames are sample data.
        </p>

        <p className="font-semibold text-portfolio-text-dark mb-2">
          Subscription collateral — "Subscription &amp; LP Pool"
        </p>
        <ul className="space-y-2 text-sm text-portfolio-text-light leading-relaxed mb-4 list-disc pl-5">
          <li>
            <Strong>Summary strip:</Strong> Total LPs (shown as <Quote>34 / 2 excl</Quote>, meaning
            34 LPs with 2 excluded), total uncalled commitments, <Strong>Eligible Uncalled</Strong>,{' '}
            <Strong>Eligibility %</Strong>, and <Strong>Top-1 Concentration</Strong>.
          </li>
          <li>
            <Strong>Subscription tab:</Strong> subscription-level details and the general
            information of the facility.
          </li>
          <li>
            <Strong>LP Pool tab:</Strong> a table with one row per limited partner. Columns: Limited
            Partner Name, Type (Pension, Sovereign, Fund, Endowment, Corporate, Family Office,
            Insurance, Fund of Funds), Total Commitment, Uncalled, Jurisdiction,{' '}
            <Strong>Advance Rate</Strong>, <Strong>Eligibility</Strong> (Eligible / Excluded),{' '}
            <Strong>Side Letter Flag</Strong>, <Strong>Side Letter Impact</Strong>,{' '}
            <Strong>LP Status</Strong> (Active, Inactive, Incomplete, Transferred, Defaulted), and
            Last Verified. Every column has its own search.
          </li>
          <li>
            <Strong>Add / Edit / Delete Limited Partner</Strong> flows with confirmations (
            <Quote>Limited partners successfully added</Quote>,{' '}
            <Quote>Limited partner successfully edited</Quote>,{' '}
            <Quote>Limited partners successfully deleted</Quote>) and a delete guard (
            <Quote>This will delete the selected LP from the LP Pool. Do you want to continue?</Quote>
            ).
          </li>
          <li>
            <Strong>Side Letter Flag</Strong> is a required field, with these impact options. In the
            sample rows the impact is shown as Capital Call Limitation, Transfer, or Concentration.
          </li>
        </ul>
        <div className="flex flex-wrap gap-2 mb-8">
          {sideLetterImpacts.map((impact) => (
            <span
              key={impact}
              className="px-3 py-1 bg-portfolio-bg-light text-portfolio-text-dark rounded-full text-xs font-medium"
            >
              {impact}
            </span>
          ))}
        </div>

        <p className="font-semibold text-portfolio-text-dark mb-2">NAV collateral — "NAV &amp; Portfolio"</p>
        <ul className="space-y-2 text-sm text-portfolio-text-light leading-relaxed list-disc pl-5">
          <li>
            <Strong>NAV Snapshot:</Strong> Total Fund NAV, Fund Liabilities, <Strong>Net NAV</Strong>{' '}
            (the frame states the formula: <Formula>Net NAV = Total Fund NAV − Fund Liabilities</Formula>
            ), NAV Date, NAV Source (for example Administrator Statement), and NAV Frequency (for
            example Quarterly).
          </li>
          <li>
            <Strong>Portfolio Investment tab:</Strong> one row per portfolio company: Portfolio
            Company, Sector (Healthcare, Technology, Financial Services, Industrials), Jurisdiction,
            Asset Type (Private Equity – Control, Private Equity – Minority, Public Equity, Private
            Credit), Fair Value, Status (including Watch List and Non-Performing), and Investor Type.
          </li>
          <li>
            <Strong>Roll-ups with stated formulas:</Strong> Total Investment (
            <Formula>Total fair value = Σ FV</Formula>), <Strong>Eligible NAV</Strong>, and{' '}
            <Strong>Top-1 concentration</Strong> (<Formula>= Max FV / Total FV</Formula>), with a
            note that Eligible NAV feeds the BBC module.
          </li>
          <li>
            <Strong>Add / Edit / Delete Portfolio Investment</Strong> flows with confirmations (
            <Quote>Portfolio investments successfully added</Quote>, <Quote>…edited</Quote>,{' '}
            <Quote>…deleted</Quote>) and a delete guard (
            <Quote>
              This will delete the selected Investment from the Portfolio investment. Do you want
              to continue?
            </Quote>
            ), plus a path to add several investments in sequence.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: 'Related Work',
    content: (
      <p className="text-sm text-portfolio-text-light leading-relaxed">
        Eligible NAV feeds the{' '}
        <Link to="/work/borrowing-base-certificate" className="text-portfolio-accent underline hover:no-underline">
          Borrowing Base Certificate
        </Link>
        . For the wider collateral module, including NAV and Subscription among its 11 categories,
        see the{' '}
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
        Designer of the NAV and Subscription collateral flows shown in the CYNC Figma file.
      </p>
    ),
  },
];

const images = [
  { filename: img.summaryStrip, caption: 'Subscription & LP Pool — summary strip' },
  { filename: img.hero, caption: 'LP Pool — one row per limited partner' },
  { filename: img.sideLetter, caption: 'Side Letter Flag and impact' },
  { filename: img.navSnapshot, caption: 'NAV Snapshot — source, date, frequency, Net NAV' },
  { filename: img.concentration, caption: 'Portfolio Investment roll-ups with stated formulas' },
  { filename: img.deleteGuard, caption: 'Delete guard' },
];

const closingReflection = [
  'Fund finance collateral is a pool of obligations, so the design question is how to present a total while keeping every row auditable. A summary strip with the eligible figure, the exclusion count, and the top-1 concentration, above a fully searchable table, answers both the committee\'s "what is it" and the examiner\'s "why".',
  'The lasting lesson is to capture the facts that quietly change collectability as structured data. Side letters, LP status, and portfolio status are required, defined fields, not notes, because that is where risk hides in this product.',
];

const NavSubscriptionCollateralCaseStudyPage = () => {
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
          overviewText="Fund finance breaks the usual collateral mold. A real-estate or equipment record describes an asset. A subscription (capital call) facility is secured by the uncalled capital commitments of a fund's limited partners (LPs), so the collateral is a pool of obligations, and each LP has its own creditworthiness, jurisdiction, and contractual terms. A NAV facility is secured by the net asset value of a fund's portfolio, so the collateral is a set of portfolio investments, each with a fair value, a sector, and a status."
          problemTitle="The Total and What Is Inside It"
          problemText="The design problem in both is the same: the headline number (eligible uncalled capital, eligible NAV) is a roll-up of many rows, and each row can be excluded, discounted, or flagged for reasons that live in a side letter or a status. The user has to see the total and be able to audit what is inside it."
          hardDecisionImage={img.summaryStrip}
          hardDecisionIntro="Headline Number on Top, Auditable Rows Underneath."
          hardDecisionBody={'The problem: a credit officer approving an advance needs one number (eligible uncalled, eligible NAV), but will be asked by a committee or examiner why it is that number. The decision: a summary strip on top (Total LPs with exclusions called out, Eligible Uncalled, Eligibility %, Top-1 Concentration) and the full table beneath, where each row\'s Advance Rate, Eligibility, and Status are visible. "34 / 2 excl" tells the reader immediately that exclusions exist before they open the table.'}
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

export default NavSubscriptionCollateralCaseStudyPage;
