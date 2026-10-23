import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import { SEOHead } from '@/components/SEOHead';
import CaseStudyPageLayout from '@/components/CaseStudyPageLayout';
import PledgeLinkDiagram from '@/components/motion/PledgeLinkDiagram';
import { caseStudies } from '@/utils/data/caseStudies';

const project = caseStudies.find((p) => p.id === 9)!;

// Local filenames under /case-studies/ — ImagePlaceholder shows an "Export Needed" box
// with the expected filename until the Figma frame is exported to that path.
const img = {
  hero: 'cpl-relationship-collateral.png',
  pledgeFlow: 'cpl-pledge-collateral-flow.png',
  linkFlow: 'cpl-link-collateral-coverage.png',
  pledgedLoanTabs: 'cpl-pledged-loans-tabs.png',
  inProcessView: 'cpl-in-process-policy-metrics.png',
  overrideReason: 'cpl-override-reason.png',
  bookedView: 'cpl-booked-loan-collateral.png',
  releaseApproval: 'cpl-release-approval.png',
  unlink: 'cpl-security-unlink.png',
  externalLoan: 'cpl-external-loan-form.png',
};

const Quote: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="font-medium text-portfolio-text-dark">"{children}"</span>
);

const Strong: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="font-semibold text-portfolio-text-dark">{children}</span>
);

const systemParts: { heading: string; body: React.ReactNode }[] = [
  {
    heading: 'From the borrower relationship',
    body: (
      <>
        On a Relationship, a <Strong>Collateral</Strong> view lists the borrower's collateral with
        Collateral Name, ID, Type, Sub-Type, Status (Available / Pending), Collateral Value,
        Maximum Loan Per Policy, Available Equity to Margin, Policy LTV %, Advance Rate %, Policy
        Collateral Discount %, Proposed and Current Collateral LTV %, Current, Third-Party, and
        Total Current Loan Commitments, and Discounted Collateral Value / Coverage / Discount Value.
        Affiliations can be selected, so collateral owned by related entities (for example a
        building held in an affiliated LLC) appears alongside.
      </>
    ),
  },
  {
    heading: 'Create Collateral in place',
    body: (
      <>
        A <Strong>Create Collateral</Strong> action with Address, Ownership (Collateral Owner,
        Primary Owner, Ownership Percentage), and Valuation sections, plus a Create Task action, so
        the user does not leave the relationship to start a new collateral record.
      </>
    ),
  },
  {
    heading: 'Pledging from the collateral side',
    body: (
      <>
        On a collateral record, a <Strong>Pledged Loans</Strong> tab with Internal, External, and
        In-Process Loans sub-tabs lists each loan's Name, Type, Lien Position, Lien Type, and Loan
        Amount. <Strong>Pledge Collateral</Strong> opens a flow that lists loans (Loan Name,
        Product, Structure, Stage, Borrower(s)) and captures per loan: <Strong>Amount Pledged</Strong>,{' '}
        <Strong>Collateral Discount Applied (%)</Strong>, Lien Position, Lien Type, and{' '}
        <Strong>Assignment</Strong> (including Abundance of Caution). A summary shows Total
        Collateral Amount Pledged, Current Collateral LTV, and Proposed LTV, and a Show Details /
        Hide Details toggle reveals the collateral's own type, sub-type, value, and owner.
      </>
    ),
  },
  {
    heading: 'Linking from the loan side',
    body: (
      <>
        For investment-type collateral, a <Strong>Link Collateral</Strong> flow lets the user
        select from existing collateral (for example brokerage, 401k, 529, annuity) by type,
        sub-type, owner, and value, and shows the selection with Valuation Date and Collateral ID.
        A summary shows Total Availability, Total Market Value, Outstanding Loan, Active Positions,
        Last Price Update, and a <Strong>Coverage Ratio</Strong>. A{' '}
        <Strong>Pledge Collateral</Strong> step then sets Advance Rate on the linked positions.
      </>
    ),
  },
  {
    heading: 'Unlinking',
    body: (
      <>
        A <Strong>Security – Unlink</Strong> view lists the linked accounts (for example by
        institution and ID) with positions, quantity, market value, last price, advance rate,
        availability, and collateral percentage, supporting removal of a link while keeping the
        underlying collateral.
      </>
    ),
  },
  {
    heading: 'The three kinds of pledged loan',
    body: (
      <>
        The Pledged Loans section is split into three sub-tabs, each with its own add, edit, copy,
        and delete flow:
        <ul className="space-y-2 list-disc pl-5 mt-3">
          <li>
            <Strong>Internal Loans</Strong> — loans on the lender's own books: Loan Name, Loan
            Number, Loan Type (for example Line of Credit), Lien Type (for example Deed of Trust),
            Lien Position, Maturity Date, Original Loan Amount, Outstanding Principal Balance.
          </li>
          <li>
            <Strong>In Process Loans</Strong> — loans still in origination: Loan Name, Application
            Number, Loan Type, Lien Type, Lien Position, and a <Strong>Proposed Loan Amount</Strong>{' '}
            instead of an outstanding balance.
          </li>
          <li>
            <Strong>External Loans</Strong> — other lenders' liens against the same asset: Lender
            Name, DBA Name, lender email and address, Entity Type, Loan Number,{' '}
            <Strong>Loan Structure Type</Strong> (Term, Revolving Line of Credit, Construction Loan
            (Draw-Down), Construction to Permanent, Acquisition &amp; Development loans), Lien
            Position, Maturity Date, Committed Loan Amount, and Outstanding Principal Balance.
          </li>
        </ul>
        <p className="mt-3">
          Each tab has its own empty state (
          <Quote>This collateral has not been pledged to any external loans</Quote>) and
          confirmations (<Quote>successfully added / edited / copied</Quote>).
        </p>
      </>
    ),
  },
  {
    heading: "The loan's own view of its collateral, in process",
    body: (
      <>
        From a loan in origination, a Collateral section opens on{' '}
        <Quote>No collateral has been pledged for this loan</Quote>, with{' '}
        <Strong>Pledge Collateral</Strong> and <Strong>Create Collateral</Strong> actions. Once
        collateral is pledged, a Policy Metrics block shows Policy LTV %, Policy Collateral Discount
        %, Maximum Loan per Policy, Total Prior Loan Commitment, Total In-Process Loans, Proposed
        LTV, Current Collateral LTV, Discounted Collateral Value / Coverage, and an{' '}
        <Strong>Equity and Margins</Strong> group: Available Equity (Collateral Value), Available
        Equity as % of Value, Available Equity-to-Margin, and Prior Liens % Equity-to-Margin. A
        toggle switches the calculation basis between <Strong>Collateral Value</Strong> and{' '}
        <Strong>Pledged Amount</Strong>, and the frames show a negative position as a bracketed
        figure, for example $(50,000.00) and (100.00)%.
        <p className="mt-3 font-mono text-xs bg-portfolio-bg-light rounded-lg p-3">
          Proposed LTV = (Proposed Loan Amount + Total Current Loan Commitments) / Collateral Value
        </p>
        <p className="mt-1 text-xs italic">Formula from a design annotation on the collateral record.</p>
        <p className="mt-3">
          <Strong>Overrides carry a required reason.</Strong> Three override paths each have a
          mandatory reason field: Collateral Discount Override Reason/Exception, Pledge Amount
          Override Reason, and Policy LTV (%) Override Percentage Reason. Sample reasons in the
          frames include{' '}
          <Quote>A discount provided to retain a valuable or strategic borrower</Quote> and{' '}
          <Quote>The borrower wants to pledge only $50,000.</Quote>
        </p>
      </>
    ),
  },
  {
    heading: "The loan's view after booking",
    body: (
      <>
        On a booked loan, the collateral view summarizes Original LTV, Current LTV, Loan-to-Cost,
        Aggregate Amount Pledged %, Total Amount Pledged, Total Collateral Value, Total Recovery
        Value, Total Collateral Number, and Original and Current Aggregate LTV against a Max Policy
        LTV. Each pledged collateral row shows Pledge Status (Active, Pending, Release Pending), Lien
        Position, Lien Type, Cross-Collateralized flag, Prior Lien Amount, Collateral Value, Amount
        Pledged, and Amount Pledged Percentage.
        <p className="mt-3">
          <Strong>Releasing collateral is an approval workflow, not a delete.</Strong> A Release
          Collateral action requires a <Strong>Release Reason</Strong> (a defined list, with an
          Other path and its own required text) and puts the pledge into Release Pending. The loan's
          Approvals area then tracks the request: Requested By, Approver, Approval Status (Sent for
          Approval, Received for Approval, Approved, Declined), Due Date, notification alerts, and
          approval history. The approver's screen has Approve and Decline, with a required Reason
          for Decline.
        </p>
      </>
    ),
  },
];

const keyDecisions = [
  {
    title: 'Pledge From Either Side',
    body: 'A user can pledge from the collateral record (Pledged Loans tab) or link from the loan, and both views show the same relationship. Loan officers think in loans and collateral analysts think in assets; the design lets each start from their own object.',
    image: img.linkFlow,
  },
  {
    title: 'Roll-Ups Update as You Pledge',
    body: 'The pledge flow shows Total Collateral Amount Pledged, Current Collateral LTV, and Proposed LTV as the pledge is being configured, so the effect of the decision is visible before it is saved.',
  },
  {
    title: 'Internal, External, and In-Process Are Separated',
    body: 'Loans are grouped as Internal, External (third-party), and In-Process, with an explicit empty state ("This collateral has not been pledged to any in process loans"). Prior third-party liens and pending pledges affect equity differently, and mixing them would misstate availability.',
    image: img.pledgedLoanTabs,
  },
  {
    title: 'Coverage Is Shown at the Moment of Linking',
    body: 'For investment collateral, Total Availability, Total Market Value, Outstanding Loan, and Coverage Ratio sit beside the selection, so the officer sees whether the pledged assets cover the loan as they select them.',
  },
  {
    title: 'Unlink Without Deleting',
    body: 'Unlinking is a distinct action from deleting the collateral, because the asset remains on the borrower\'s record and may be pledged elsewhere.',
    image: img.unlink,
  },
  {
    title: 'In-Process and Booked Are Different Views of the Same Pledge',
    body: 'While a loan is in origination the collateral section is a working surface (pledge, create, override, see proposed LTV). After booking it becomes a monitoring surface (original versus current LTV, recovery value, pledge status). The same relationship is shown with the question each stage asks: "what if we pledge this?" and then "how are we covered now?"',
    image: img.bookedView,
  },
  {
    title: 'Every Exception Needs a Stated Reason',
    body: 'A discount override, a partial pledge amount, and a policy LTV override each require a reason before saving. Credit exceptions are normal in lending; what examiners ask is why. Capturing the reason at the moment of the exception makes the answer retrievable.',
    image: img.overrideReason,
  },
  {
    title: 'Releasing Collateral Is Gated',
    body: 'The Problem: removing collateral from a booked loan changes coverage and may breach policy, so it should not be one click by one person.\n\nThe Decision: release is a request with a reason, a pending state, a named approver, and a decline reason if refused. The pledge stays visible as Release Pending so nobody reads it as already gone.',
    image: img.releaseApproval,
  },
  {
    title: 'External Liens Are Recorded in Full',
    body: 'A third-party lender\'s lien is captured with the lender\'s details, loan structure, position, and committed and outstanding amounts, because prior liens reduce available equity and a bare "external lien: yes" would hide the amount that matters.',
    image: img.externalLoan,
  },
];

const additionalSections = [
  {
    title: 'One Asset, Two Pledges',
    content: <PledgeLinkDiagram />,
  },
  {
    title: 'The System',
    content: (
      <>
        <p className="text-xs text-portfolio-text-light italic mb-6">
          Source: about 450 frames in the CYNC Figma file (Relationship – Collateral, Create
          Collateral, Link Collateral, Pledge Collateral, Pledged Loans: Internal, In Process and
          External, In Process and Booked Loan Collateral views, Release Collateral approvals,
          Security – Unlink). Names, IDs, and amounts in the frames are sample data.
        </p>
        <div className="space-y-8">
          {systemParts.map((part) => (
            <div key={part.heading}>
              <p className="font-semibold text-portfolio-text-dark mb-2">{part.heading}</p>
              <div className="text-sm text-portfolio-text-light leading-relaxed">{part.body}</div>
            </div>
          ))}
        </div>
      </>
    ),
  },
  {
    title: 'Related Work',
    content: (
      <p className="text-sm text-portfolio-text-light leading-relaxed">
        For how policy set on a security reaches every loan it is linked to, see{' '}
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
        Designer of the collateral relationship, pledge, link, and unlink flows shown in the CYNC
        Figma file.
      </p>
    ),
  },
];

const images = [
  { filename: img.hero, caption: 'Relationship — Collateral view with affiliations' },
  { filename: img.pledgeFlow, caption: 'Pledge Collateral — per-loan pledge attributes and roll-ups' },
  { filename: img.linkFlow, caption: 'Link Collateral — selection with Coverage Ratio' },
  { filename: img.pledgedLoanTabs, caption: 'Pledged Loans — Internal, In Process, External' },
  { filename: img.inProcessView, caption: 'In-process loan — Policy Metrics and Equity and Margins' },
  { filename: img.bookedView, caption: 'Booked loan — collateral monitoring view' },
  { filename: img.releaseApproval, caption: 'Release Collateral — approval workflow' },
  { filename: img.unlink, caption: 'Security – Unlink' },
];

const closingReflection = [
  'The pledge is its own object. How much is pledged, at what lien position, with what discount, belong to the relationship, not to the asset or the loan, and designing it that way is what lets one property sit first lien on one loan and second on another.',
  'The rest followed from treating the relationship seriously: pledge from either side, roll-ups that update as you decide, a working view while a loan is in process and a monitoring view once it is booked, a required reason for every exception, and release as an approved request instead of a delete. In credit systems, how you record a decision matters as much as the decision.',
];

const CollateralPledgeLinkCaseStudyPage = () => {
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
          overviewText="In Cync, collateral and loans are separate modules. A collateral record exists with or without a loan, can be pledged to more than one loan, and a loan can be secured by more than one collateral record."
          problemTitle="The Relationship Has Its Own Data"
          problemText="The product challenge is that the relationship has its own data (how much is pledged, at what lien position, with what discount) and must be reachable from where the user already is, whether that is a borrower relationship, a loan, or the collateral itself."
          hardDecisionImage={img.pledgeFlow}
          hardDecisionIntro="The Relationship Is Its Own Object."
          hardDecisionBody="The pledge carries Amount Pledged, Collateral Discount Applied %, Lien Position, Lien Type, and Assignment type as attributes of the link, not of the collateral or the loan. The same property can be first lien on one loan and second on another; storing those facts on either end would be wrong for one of them."
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

export default CollateralPledgeLinkCaseStudyPage;
