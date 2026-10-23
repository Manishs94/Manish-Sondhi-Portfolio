import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import { SEOHead } from '@/components/SEOHead';
import CaseStudyPageLayout from '@/components/CaseStudyPageLayout';
import BorrowingBaseDiagram from '@/components/motion/BorrowingBaseDiagram';
import { caseStudies } from '@/utils/data/caseStudies';

const project = caseStudies.find((p) => p.id === 12)!;

// Local filenames under /case-studies/ — ImagePlaceholder shows an "Export Needed" box
// with the expected filename until the Figma frame is exported to that path.
const img = {
  hero: 'bbc-summary.png',
  availability: 'bbc-ar-availability.png',
  override: 'bbc-override-reason.png',
  ineligibles: 'bbc-add-ineligible.png',
  history: 'bbc-history.png',
  tickler: 'bbc-assign-tickler.png',
  arRecord: 'bbc-ar-invoice-aging.png',
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

const receivableIneligibles = [
  'Over 90 Days', 'Cross Aged %', 'Concentration %', 'Contra Accounts', 'Non-domestic / Foreign',
  'Federal Government', 'Intercompany/Affiliates', 'Individual/Employee', 'Credit Card Sales',
  'Cash/COD', 'Pre Billings', 'Progress Billings', 'Retention', 'Unbilled AR', 'Uninsured',
  'Customer Deposits', 'Finance Charges', 'Deferred Revenue', 'Aged Credit Item',
  'Ineligible Debtor', 'Exceeds Credit Limit', 'Payment Term Overdays',
];

const inventoryIneligibles = [
  'Consignment', 'Inventory in Transit', 'Damaged', 'Discontinued', 'Marketing and Samples',
  'Packaging', 'Quarantined', 'Work-in-Process', 'Reserved', 'Slow-Moving',
];

const certificateSections = [
  {
    name: 'Account Receivable Availability',
    body: 'Gross AR, Ineligible AR, Available AR, Reserves, Eligible AR, Sublimit/Cap, Available for Advance, and an Account Receivable Borrowing Base, with totals and a net total after reserves.',
  },
  {
    name: 'Inventory Availability',
    body: 'Gross Inventory, Ineligible Inventory, Inventory Reserves, Eligible Inventory, Sublimit/Cap, Available for Advance, with an Inventory Borrowing Base.',
  },
  {
    name: 'Other Collateral Availability',
    body: 'The same structure for any additional collateral, including a Policy LTV (Margin).',
  },
  {
    name: 'Borrowing Base Availability',
    body: 'Maximum Borrowing Capacity, Net Borrowing Base Available, Loan Amount, Outstanding Principal Balance, Line of Credit and other items to be covered, Available to Borrow, Advance Request, and New Line Balance.',
  },
];

const keyDecisions = [
  {
    title: 'Overrides Are Allowed, but Never Silent',
    body: 'Policy LTV % and Advance Rate % can be overridden per collateral, but each override carries an Override Reason field and the calculation keeps both the policy and the override value visible. Lenders do make exceptions; the design makes them reviewable instead of hidden in a cell.',
    image: img.override,
  },
  {
    title: 'A Controlled Ineligible Vocabulary',
    body: 'Ineligibility is chosen from a defined list of reasons by collateral type (aging, contra, concentration, consignment, in-transit, and so on) with a free-text Other and a notes field. A reason list gives consistent reporting ("how much AR is ineligible for aging versus concentration?") and teaches a new analyst what a seasoned one already knows.',
    image: img.ineligibles,
  },
  {
    title: 'Calculation Is an Event With History',
    body: 'Calculate BBC creates a history record with as-of date, calculation timestamp, totals, submitter, and status (Draft, Calculated, Recalculated). A recalculation is visible as a recalculation, and any prior certificate can be retrieved. The BBC is a dated, attributable record, not a view that silently changes.',
    image: img.history,
  },
  {
    title: 'The Certificate Drives the Calendar',
    body: 'Frequency, starting date, and tickler assignment live next to the certificate. Assigning a tickler can send the request as a task to the customer portal, so the borrower is asked for the next certificate from the same system that will receive and test it. Current and next due dates are on the record.',
    image: img.tickler,
  },
  {
    title: 'Receivables Are Modeled at the Invoice Level, Not as a Balance',
    body: 'AR collateral breaks down by account, invoice, and credit memo with aging buckets and per-line eligibility, then nets credits by account. Eligibility depends on aging and on credits, so a single total balance would hide the very things an asset-based lender tests.',
    image: img.arRecord,
  },
];

const additionalSections = [
  {
    title: 'From Gross to Available',
    content: <BorrowingBaseDiagram />,
  },
  {
    title: 'The System',
    content: (
      <>
        <p className="text-xs text-portfolio-text-light italic mb-6">
          Source: about 145 frames in the CYNC Figma file (Borrowing Base Certificate, Account
          Receivable, and the BBC tickler and field-exam flows). Names, dollar amounts, and dates in
          the frames are sample data.
        </p>

        <p className="font-semibold text-portfolio-text-dark mb-2">BBC Summary</p>
        <ul className="space-y-2 text-sm text-portfolio-text-light leading-relaxed mb-8 list-disc pl-5">
          <li>
            <Strong>Collateral selection</Strong> — choose which collateral feeds the certificate
            (Account Receivables, Trade Receivables, Inventory, Raw Materials, Commercial Real
            Estate, Other Collateral), with a table of Collateral Name, Type, Sub-Type, Owner,
            Valuation Date, Collateral Value, Policy LTV %, and Advance Rate %.
          </li>
          <li>
            <Strong>Overrides</Strong> — Policy LTV % Override and Advance Rate % Override per
            collateral, each requiring a <Strong>Policy LTV/Advance Rate Override Reason</Strong>.
          </li>
          <li>
            <Strong>Ineligibles</Strong> — Ineligible Parameters, Ineligible Notes, Total Ineligible
            Amount, with an <Quote>Add Ineligible Parameters</Quote> flow (Ineligible Reason,
            Amount, Notes).
          </li>
          <li>
            <Strong>Availability columns</Strong> — Eligible Amount, Sublimit, Reserve, Eligible
            After Reserve, Net Advanceable, Net Total Available for Advance, with a trend view
            (Eligible Trend).
          </li>
          <li>
            <Strong>Calculate BBC</Strong> — runs the calculation and confirms{' '}
            <Quote>BBC successfully calculated.</Quote>
          </li>
          <li>
            <Strong>Outputs</Strong> — Export, Download, and <Strong>Send to ABL</Strong> (
            <Quote>BBC successfully sent to ABL</Quote>).
          </li>
        </ul>

        <p className="font-semibold text-portfolio-text-dark mb-4">Category sections on the certificate</p>
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          {certificateSections.map((section) => (
            <div key={section.name} className="rounded-xl bg-portfolio-bg-light p-5">
              <p className="font-semibold text-portfolio-text-dark mb-1 text-sm">{section.name}</p>
              <p className="text-xs text-portfolio-text-light leading-relaxed">{section.body}</p>
            </div>
          ))}
        </div>

        <p className="font-semibold text-portfolio-text-dark mb-2">Ineligible reasons the product knows about</p>
        <p className="text-sm text-portfolio-text-light mb-2">Receivables:</p>
        <div className="mb-4">
          <Chips items={receivableIneligibles} />
        </div>
        <p className="text-sm text-portfolio-text-light mb-2">Inventory:</p>
        <div className="mb-3">
          <Chips items={inventoryIneligibles} />
        </div>
        <p className="text-sm text-portfolio-text-light leading-relaxed mb-8">
          An <Quote>Other, Please Specify</Quote> path covers the rest.
        </p>

        <p className="font-semibold text-portfolio-text-dark mb-2">BBC History</p>
        <p className="text-sm text-portfolio-text-light leading-relaxed mb-8">
          A history table of every calculation: As of Date, Calculated On, Total Collateral, Total
          Ineligible, Total Available for Advance, Submitted By, and Status (Draft, Calculated,
          Recalculated), with search per column and a View Details action.
        </p>

        <p className="font-semibold text-portfolio-text-dark mb-2">Certificate setup</p>
        <ul className="space-y-2 text-sm text-portfolio-text-light leading-relaxed mb-8 list-disc pl-5">
          <li>
            <Strong>BBC Frequency</Strong> — Weekly, Bi-Weekly, Monthly, Quarterly, Semi-Annually,
            Annually, On Demand, with a Starting BBC Date and Initial Due Date.
          </li>
          <li>
            <Strong>Document Type</Strong> — Borrowing Base Certificate, Covenant Compliance
            Certificate, and others, with a "describe contracts" field for Direct Assignments of
            Contract.
          </li>
          <li>
            <Strong>Account Type</Strong> — Lock Box, Cash Collateral, and related account options.
          </li>
          <li>
            <Strong>Collateral Field Exam</Strong> — indicate a field exam and its type, and
            schedule an evaluation.
          </li>
          <li>
            <Strong>Tickler assignment</Strong> — Assign Tickler with Associated Loan(s),
            Relationship Name, Relationship Manager, Tickler Type, Evaluation Frequency, Initial Due
            Date, Additional Information, an Internal/External choice, and{' '}
            <Strong>Send as Task to Customer Portal</Strong>. A tickler record shows Current and
            Future Tickler Details (Current As-Of Date, Next As-Of Date, Current Due Date, Next Due
            Date, Current Status such as Upcoming, Preparation Method).
          </li>
        </ul>

        <p className="font-semibold text-portfolio-text-dark mb-2">Accounts Receivable as a collateral category</p>
        <p className="text-sm text-portfolio-text-light leading-relaxed mb-8">
          The AR collateral record carries Total Receivables, Total Credits,{' '}
          <Strong>Net Collateral Value</Strong>, Total Accounts, Total Invoices, and an As Of Date.
          Receivables list by Account (Account No, Account Name) and Invoice (Invoice No, Order No,
          Original Date, Inv Days, Due Date, Due Days) with aging buckets (Future, Current, 31-60,
          61-90, 91-120, Over 120), Balance, and an Eligibility value (Eligible, Conditional,
          Ineligible). Credits list with Credit Memo No, Related Invoice, and dates. A{' '}
          <Strong>Net Receivables by Account</Strong> view nets credits against receivables and
          shows Net Balance.
        </p>

        <p className="font-semibold text-portfolio-text-dark mb-2">Pledge and cross-collateralization inside the BBC</p>
        <p className="text-sm text-portfolio-text-light leading-relaxed">
          Collateral is selected into the certificate through the same pledge flow used elsewhere
          (Amount Pledged, Collateral Discount Applied %, Lien Position, Lien Type, Assignment Type
          including Abundance of Caution, Cross-Collateralized flag, Prior Lien Amount, Pledge
          Status), with policy metrics calculated either on collateral value or on pledged amount.
        </p>
      </>
    ),
  },
  {
    title: 'Related Work',
    content: (
      <p className="text-sm text-portfolio-text-light leading-relaxed">
        The pledge flow used to select collateral into the certificate is covered in{' '}
        <Link to="/work/collateral-pledge-link" className="text-portfolio-accent underline hover:no-underline">
          Linking Collateral to Loans: Pledge, Link, and Unlink
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
        Designer of the Borrowing Base Certificate, Accounts Receivable, and tickler flows shown in
        the CYNC Figma file.
      </p>
    ),
  },
];

const images = [
  { filename: img.hero, caption: 'BBC Summary — collateral selection and availability columns' },
  { filename: img.availability, caption: 'Account Receivable Availability — gross to available' },
  { filename: img.ineligibles, caption: 'Add Ineligible Parameters' },
  { filename: img.history, caption: 'BBC History — Draft, Calculated, Recalculated' },
  { filename: img.tickler, caption: 'Assign Tickler — Send as Task to Customer Portal' },
  { filename: img.arRecord, caption: 'AR collateral — invoices, aging buckets, and eligibility' },
];

const closingReflection = [
  'The Borrowing Base Certificate is arithmetic with consequences, and the main lesson is to show the work. Every step from gross to available is visible, every override carries a reason, and every calculation is saved as a dated event with a status, so a number can be defended to a credit committee or an examiner months later.',
  'The second lesson is that a recurring certificate is also a calendar. Tying frequency, tickler, and due dates to the certificate meant the borrower is asked for the next one from the same system that will test it. Designing the workflow around the whole cycle, not just the calculation screen, is what makes it hold together.',
];

const BorrowingBaseCertificateCaseStudyPage = () => {
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
          eyebrow="Enterprise Loan Origination & Collateral Management"
          title={project.title}
          subtitle={project.subtitle}
          role={project.role}
          company="Cync Software (nCino)"
          heroImage={img.hero}
          overviewText="An asset-based loan is only as safe as its borrowing base: the pool of receivables, inventory, and other collateral that is eligible to borrow against, after the lender removes what doesn't qualify. The borrower reports this on a recurring Borrowing Base Certificate (BBC), and the lender must test it, adjust it, and decide what is actually available to advance. Done by hand, that is a spreadsheet exercise with weak audit trails."
          problemTitle="A Workflow With Arithmetic in the Middle"
          problemText="The user has to choose which collateral counts, see exactly why items are ineligible, change a policy rate when there is a reason, trust the calculation, retrieve any past certificate, and be reminded when the next one is due."
          hardDecisionImage={img.availability}
          hardDecisionIntro="Show the Arithmetic, Not Just the Answer."
          hardDecisionBody="The problem: a borrowing base number a credit officer cannot trace is a number they will not defend to an examiner. The decision: every step from gross to available is a visible column or row: Gross, Ineligible, Reserves, Eligible, Sublimit/Cap, Available for Advance. The officer can see where a dollar went between what the borrower reported and what is advanceable."
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

export default BorrowingBaseCertificateCaseStudyPage;
