import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import { SEOHead } from '@/components/SEOHead';
import CaseStudyPageLayout from '@/components/CaseStudyPageLayout';
import { caseStudies } from '@/utils/data/caseStudies';

const project = caseStudies.find((p) => p.id === 18)!;

// Local filenames under /case-studies/appraisal-screens/ — ImagePlaceholder shows an
// "Export Needed" box with the expected filename until the file exists at that path.
const img = {
  appraisalTab: 'appraisal-screens/01-appraisal-tab.png',
  approaches: 'appraisal-screens/02-valuation-approaches.png',
  ldvWarning: 'appraisal-screens/03-loan-determinant-warning.png',
  review: 'appraisal-screens/04-review-checklist.png',
  evaluation: 'appraisal-screens/05-evaluation-tab.png',
  avm: 'appraisal-screens/06-avm-evaluation.png',
  locked: 'appraisal-screens/07-overview-locked-value.png',
  admin: 'appraisal-screens/08-appraisal-component-admin.png',
};

const Strong: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="font-semibold text-portfolio-text-dark">{children}</span>
);

const Quote: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="font-medium text-portfolio-text-dark">"{children}"</span>
);

const Chips: React.FC<{ items: string[] }> = ({ items }) => (
  <div className="flex flex-wrap gap-2">
    {items.map((item) => (
      <span
        key={item}
        className="px-3 py-1 bg-portfolio-bg-light text-portfolio-text-dark rounded-full text-xs font-medium"
      >
        {item}
      </span>
    ))}
  </div>
);

const P: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <p className="text-sm text-portfolio-text-light leading-relaxed mb-4">{children}</p>
);

const H: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <p className="font-semibold text-portfolio-text-dark mb-2 mt-6">{children}</p>
);

const UL: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <ul className="space-y-2 text-sm text-portfolio-text-light leading-relaxed mb-4 list-disc pl-5">
    {children}
  </ul>
);

const approaches = [
  'Cost Approach', 'Sales Comparison', 'Income Capitalization', 'Direct Capitalization',
  'Bulk Wholesale Value', 'Gross Sellout Value', 'Development Approach Value', 'As-Is Market Value',
  'Projected Market Value Upon Completion', 'Projected Market Value Upon Stabilization',
];

const reviewGroups = [
  'Appraisal Report Completeness', 'Appraisal Methodology', 'Market Analysis',
  'Property Description', 'Comparable Sales', 'Income Analysis', 'Final Value Conclusion',
  'Regulatory Compliance', 'Overall Assessment',
];

const keyDecisions = [
  {
    title: 'Separate "Approaches Considered" From "The Value We Rely On"',
    body: 'The Problem: an appraisal often produces several values (cost, sales comparison, income). Showing one number hides the others; showing all of them leaves the user unsure which one counts.\n\nThe Decision: the Valuation Approach table holds everything considered, and a separate Final Valuation Approach and Loan Determinant Value name the one that drives lending. The choice is visible, deliberate, and recorded, which is what an auditor asks for.',
    image: img.approaches,
  },
  {
    title: 'Say What the Choice Will Do, and Warn If It Is Missing',
    body: 'The interface tells the user what the selection affects. Helper text explains that the selected approach and its value "will be utilized in the calculation of ratios," and that "the value of the selected source will be used for calculations." If the user saves without choosing, a warning reads "No Loan Determination Value has been selected. This may affect ratios. Do you want to continue?" Silent failure is the risk in a field that quietly feeds LTV, so the field announces its consequences.',
    image: img.ldvWarning,
  },
  {
    title: 'One Place to Edit the Value',
    body: "The collateral overview's value and valuation source are locked, with a pointer back to the appraisal component. A value that can be typed in two places will eventually disagree with itself. Locking it makes the appraisal the single source and turns the overview into a display.",
    image: img.locked,
  },
  {
    title: 'A Checklist for Review, Because Review Is a Standard',
    body: 'The review is a list of yes/no criteria grouped by the stages of the appraisal (completeness, methodology, market, property, comparables, income, conclusion, compliance), ending in an overall acceptance. That turns "looks fine to me" into a record of what was checked, and lets FIRREA, USPAP, and approved-appraiser-list compliance each be answered separately.',
    image: img.review,
  },
  {
    title: 'Automated and Human Valuations Share One Structure',
    body: 'An AVM result is recorded as an Evaluation of type Third-Party External, alongside human evaluations, and shows its confidence bands and order ID. The user can see how reliable the number is, and the same completion, review, and acceptance fields apply. A new valuation source is a new kind of evaluation, not a new screen.',
    image: img.avm,
  },
  {
    title: 'Appraisal Is a Component, Configured Per Sub-Type',
    body: 'Every one of the twelve CRE sub-types needs an appraisal, so it is built once in the component library and each sub-type chooses which of its fields to show. Appraisal behaves identically across sub-types, and the administrator, not engineering, decides which optional fields (Value Estimation Method, Valuation Type) appear.',
    image: img.admin,
  },
];

const additionalSections = [
  {
    title: 'Where It Lives',
    content: (
      <>
        <p className="text-xs text-portfolio-text-light italic mb-6">
          Source: about 220 Appraisal frames in the CYNC Figma file (the "Appraisal"
          collateral-record screens, Appraisal Administration, and Order Appraisal Certification).
          Names, dollar amounts, dates, and IDs in the frames are placeholder data.
        </p>
        <P>
          On a collateral record, <Strong>Appraisal Details</Strong> is a section of the record with
          three sub-tabs: <Strong>Appraisal</Strong>, <Strong>Review</Strong>, and{' '}
          <Strong>Evaluation</Strong>. Beside it sit the other due-diligence sections (Environmental
          Screening, Comparable, Insurance, Tax Assessed, Title Search, Flood).
        </P>
        <P>
          A header summary on the record shows what the valuation drives: Current Collateral LTV,
          Proposed LTV, Policy LTV (80% in the sample), Recovery Rate, Current Loan Commitments (and
          third-party commitments), Total Current Loan Commitment, Available Equity, Available
          Equity to Margin, Discounted Collateral Value, and Discounted Collateral Coverage.
        </P>
      </>
    ),
  },
  {
    title: 'Appraisal, Review, and Evaluation',
    content: (
      <>
        <H>Appraisal tab</H>
        <UL>
          <li>
            <Strong>Who and when:</Strong> Appraisal Company Name/Source, Appraiser's Name, Property
            Stage (<Strong>Existing</Strong>, <Strong>To be Majorly Renovated</Strong>,{' '}
            <Strong>To be Constructed/Developed</Strong>), Appraisal Date, and Appraisal Effective
            Date.
          </li>
          <li>
            <Strong>Valuation Approach table:</Strong> a repeatable table of the approaches
            considered, each with Value, Area (Total Sq. Ft.), Net Area (Sq. Ft.), Date, and row
            actions, with an <Strong>Add Valuation Approach</Strong> control. The approach pick list
            is shown below.
          </li>
          <li>
            <Strong>Final Valuation Approach</Strong> selector, and{' '}
            <Strong>Final Valuation Source</Strong> and <Strong>Loan Determinant Value</Strong>{' '}
            fields. These pick which approach, and which resulting value, the bank relies on.
          </li>
          <li>
            <Strong>Appraisal Completed</Strong> and <Strong>Appraisal Acceptable</Strong> flags,
            and a 3,000-character comment with a live counter.
          </li>
        </UL>
        <div className="mb-4">
          <Chips items={approaches} />
        </div>

        <H>Review tab</H>
        <P>
          The review is a structured checklist, not a free-text sign-off, grouped into these
          sections:
        </P>
        <div className="mb-4">
          <Chips items={reviewGroups} />
        </div>
        <P>
          Items include <Quote>Appraisal Report complete and signed</Quote>,{' '}
          <Quote>Required exhibits and addenda included</Quote>,{' '}
          <Quote>Relevant and Recent Comparable Sales Data</Quote>,{' '}
          <Quote>Reasonable and Well-Supported Adjustments to Comparable</Quote>,{' '}
          <Quote>Appraisal Complies with FIRREA</Quote>,{' '}
          <Quote>Appraisal Complies with USPAP</Quote>, and{' '}
          <Quote>Appraiser is on Financial Institution's Approved Appraiser List</Quote>. The tab
          also records Compliance Issues Noted, a Quality of the Appraisal rating (for example
          Excellent), Appraisal Review Company, Reviewer's Name, Review Completed Date, and an{' '}
          <Strong>Internal / External Third-Party</Strong> designation for who did the review.
        </P>

        <H>Evaluation tab</H>
        <P>
          For an independent evaluation that can exist alongside or instead of a full appraisal:
          Evaluation Type (for example Third-Party External), Evaluation Value, Evaluation Date and
          Effective Date, Evaluation Company Name, Completed By, Reviewed By, Review Date,
          Evaluation Accepted (Yes / No), and a Comment.
        </P>
      </>
    ),
  },
  {
    title: 'Ordering, Automated Valuation, and History',
    content: (
      <>
        <H>Order Appraisal Certification and automated valuation</H>
        <P>
          The record's action bar offers <Strong>Order Appraisal Certification</Strong>,{' '}
          <Strong>Extract Document</Strong> (upload a file and pull its fields into the record),{' '}
          <Strong>Copy Collateral (Clone)</Strong>, and Delete. An evaluation shown in the file is
          an <Strong>Automated Valuation Model (AVM)</Strong> result from a third-party provider
          (ClearAVM), with a market value, a <Strong>confidence score and FSD</Strong>, and nested
          confidence bands (20%, 10%, and 5% ranges around the value), an Order ID, and a run date.
          Evaluation Type reads Third-Party External, so the automated result fits the same
          Evaluation structure as a human one.
        </P>
        <H>Valuation history and the overview</H>
        <UL>
          <li>
            A <Strong>Valuation History</Strong> view records, per final valuation, its source,
            effective date, date modified, and who updated it.
          </li>
          <li>
            On the collateral Overview, <Strong>Collateral Value</Strong> and{' '}
            <Strong>Collateral Valuation Source</Strong> are read-only, with a lock and the message{' '}
            <Quote>This value must be edited via the appraisal component.</Quote> The overview never
            holds a number that disagrees with the appraisal.
          </li>
        </UL>
      </>
    ),
  },
  {
    title: 'Administration',
    content: (
      <P>
        In Administration &gt; Collateral Management, Appraisal is a <Strong>component</Strong> that
        an administrator drags into a sub-type, not a hard-coded screen. The component is
        configured with a <Strong>Select Appraisal Type</Strong> control and an Available /
        Selected fields transfer list with search on both sides. The grouped fields (Appraisal,
        Appraisal Completed, Appraisal Review, Evaluation, Evaluation Completed, Loan Determinant
        Value) can each be included or omitted per sub-type, with Appraiser, Appraisal Firm, Amount,
        Valuation Type, and Value Estimation Method available as optional fields. A live Preview
        shows the section as it will appear on the record, and saving confirms{' '}
        <Quote>Appraisal Component successfully added to Appraisal Details.</Quote>
      </P>
    ),
  },
  {
    title: 'Related Work',
    content: (
      <P>
        Appraisal is one of the due-diligence components assembled into{' '}
        <Link to="/work/commercial-real-estate-collateral" className="text-portfolio-accent underline hover:no-underline">
          Commercial Real Estate Collateral
        </Link>
        . The values it produces drive the header metrics described in the{' '}
        <Link to="/work/cync-collateral-platform" className="text-portfolio-accent underline hover:no-underline">
          Cync Collateral Platform
        </Link>
        .
      </P>
    ),
  },
  {
    title: 'Role',
    content: <P>Designer of the Appraisal record and administration flows shown in the CYNC Figma file.</P>,
  },
];

const images = [
  { filename: img.appraisalTab, caption: 'Appraisal tab — who, when, and property stage' },
  { filename: img.approaches, caption: 'Valuation Approach table and Loan Determinant Value' },
  { filename: img.review, caption: 'Review checklist' },
  { filename: img.evaluation, caption: 'Evaluation tab' },
  { filename: img.avm, caption: 'AVM evaluation with confidence bands' },
  { filename: img.admin, caption: 'Appraisal component in administration' },
];

const closingReflection = [
  'The lesson of the appraisal is that the number matters less than knowing which number, who produced it, who checked it, and what it will drive. Separating appraisal, review, and evaluation, and separating the approaches considered from the final lending value, makes each of those questions answerable from the screen.',
  'The smaller lesson is that a field which feeds a calculation should say so. Helper text that names the consequence, a warning when the choice is missing, and a locked copy of the value elsewhere cost very little, and they remove the failure that is hardest to catch: a ratio that is quietly wrong.',
];

const AppraisalCaseStudyPage = () => {
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
          heroImage={img.appraisalTab}
          overviewText="On a commercial real estate record, the appraisal produces the number that everything else is measured against: loan-to-value, available equity, discounted coverage, and the lending decision. It is also not one thing. A raw appraisal can consider several valuation approaches. A second person has to review it against regulatory standards. And sometimes an evaluation, which is lighter than a full appraisal, or an automated valuation stands in for it."
          problemTitle="Not One Number"
          problemText={'A single "Appraisal" form with a value field would hide all of that. The design instead treats valuation as a small process with three parts, and makes the choice of the final lending value an explicit, labeled step.'}
          hardDecisionImage={img.evaluation}
          hardDecisionIntro="Three Workflows, Not One Long Form."
          hardDecisionBody="The problem: a raw appraisal, the regulatory review of that appraisal, and an independent evaluation are different tasks, done by different people, with different regulatory weight. A single form can't show who did what, or whether the review has happened. The decision: three sub-tabs with their own fields and their own completion flags (Appraisal Completed, Evaluation Completed). A reviewer opening the Review tab sees only the review. A record can show a completed appraisal with no review, or an evaluation with no appraisal, and say so."
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

export default AppraisalCaseStudyPage;
