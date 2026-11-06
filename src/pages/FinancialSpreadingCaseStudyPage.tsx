import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import { SEOHead } from '@/components/SEOHead';
import CaseStudyPageLayout from '@/components/CaseStudyPageLayout';
import ImagePlaceholder from '@/components/ImagePlaceholder';
import { caseStudies } from '@/utils/data/caseStudies';

const project = caseStudies.find((p) => p.id === 17)!;

// Local filenames under /case-studies/spreading-screens/ — ImagePlaceholder shows an
// "Export Needed" box with the expected filename until the file exists at that path.
const shot = {
  overview: 'spreading-screens/01-spreads-overview.png',
  template: 'spreading-screens/02-create-template.png',
  balanceSheet: 'spreading-screens/03-balance-sheet-spread.png',
  rma: 'spreading-screens/04-rma-benchmark-flyout.png',
  incomePeriods: 'spreading-screens/05-income-statement-periods.png',
  incomeWide: 'spreading-screens/06-income-statement-wide.png',
  editPeriod: 'spreading-screens/07-edit-period-modal.png',
  aggregateSpec: 'spreading-screens/08-aggregate-period-spec.png',
  debtValidation: 'spreading-screens/09-debt-schedule-validation.png',
  debtAssociate: 'spreading-screens/10-debt-schedule-associate-periods.png',
  rentRoll: 'spreading-screens/11-rent-roll.png',
  customRatio: 'spreading-screens/12-personal-ratios-custom-ratio.png',
};

const Strong: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="font-semibold text-portfolio-text-dark">{children}</span>
);

const Quote: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="font-medium text-portfolio-text-dark">"{children}"</span>
);

const Shot: React.FC<{ file: string; caption: string }> = ({ file, caption }) => (
  <div className="my-6">
    <ImagePlaceholder filename={file} caption={caption} aspect="wide" />
    <p className="text-xs text-portfolio-text-light mt-2">{caption}</p>
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

const keyDecisions = [
  {
    title: 'A Transfer List for Choosing Fields',
    body: "Field selection uses the same Available / Selected two-pane pattern that the collateral administration builder uses, with search on each side and bulk controls. A template can span many statements with long field lists, and the pattern makes the chosen subset visible at a glance. The stepper's checks show which statements are finished, so a long template build doesn't lose its place.",
    image: shot.template,
  },
  {
    title: 'Make It Behave Like a Spreadsheet',
    body: "A formula bar, a cell-selection prompt, collapsible row groups, one tab per statement, and period columns are borrowed directly from the tool analysts already know. The product's contribution is the structure around the grid (templates, balance checks, mapping), not a new interaction model for entering numbers.",
  },
  {
    title: 'Check the Books on Every Period',
    body: "The Problem: a balance sheet that doesn't balance poisons every ratio computed from it, and is costly to discover late.\n\nThe Decision: each period shows Balanced or Unbalanced directly under its header, and a Difference row appears in red at the top of the sheet. The error is visible where the analyst is already looking, before they move to the next statement.",
    image: shot.balanceSheet,
  },
  {
    title: 'Periods Are Columns, and Aggregates Are Columns Too',
    body: 'Monthly, quarterly, and annual figures all live in the same grid as columns, with the aggregates visually distinct (dark headers) and collapsible. An analyst entering monthly data can see how it rolls up to a quarter without leaving the sheet, and the header carries the statement type and number of months so that a 3-month and a 12-month column can\'t be confused.',
    image: shot.incomePeriods,
  },
  {
    title: 'Benchmarks Beside the Numbers, Not on Another Screen',
    body: "The RMA comparison opens as a flyout over the spread rather than navigating away. The analyst sees the borrower's ratio, the industry's, and the variance together, can open a trend with View, and can promote a ratio into the Ratios statement with Add to Ratios. Context is one click away without losing the place in the grid.",
    image: shot.rma,
  },
  {
    title: 'Prevent the Error Where It Is Typed, and Say Why',
    body: 'The Debt Schedule validates in the cell. Outstanding Balance cannot exceed Original Loan Amount, and the field turns red with a message that says exactly that. Derived cells (payments) are read-only and styled as such, so an analyst never overwrites a formula by accident. In a grid people fill in quickly, the error has to appear at the cell, not on a later summary screen.',
    image: shot.debtValidation,
  },
  {
    title: 'Specify the Mechanics, Not Just the Look',
    body: 'The file documents behavior alongside pixels: nested aggregates by level, disabled-cell colors, which controls stay enabled when switching schedules, and the exact error copy. Developers get a rule, not a guess, for each of the states a dense grid has to handle.',
    image: shot.aggregateSpec,
  },
  {
    title: 'Let Analysts Extend the Ratios, Within Guardrails',
    body: 'The Ratios tab shows each formula next to its result and lets an analyst add a custom ratio with a formula field that opens a field-selection menu on "[", a list of supported operators, and a required output format. Standard ratios stay standard, and a one-off analysis doesn\'t need an engineering request.',
    image: shot.customRatio,
  },
  {
    title: "Hide, Don't Delete, a Period",
    body: "Edit Period includes a Hide Period toggle, and the statement date and months are read-only. Analysts can set a period aside for a calculation without losing the data, and the identity of a period can't drift after others have relied on it.",
    image: shot.editPeriod,
  },
  {
    title: 'Show Who Else Is In the Record',
    body: 'The header shows how many users are viewing the spread. Spreads are collaborative, and two analysts editing the same record is a real risk, so presence is part of the header.',
  },
];

const additionalSections = [
  {
    title: 'Spreads Overview and Templates',
    content: (
      <>
        <p className="text-xs text-portfolio-text-light italic mb-6">
          Source: 25 Spreading frames in the CYNC Figma file (Internal Only Canvas and the Design
          System page). Company names, dates, and dollar values in the frames are placeholder data,
          and some figures in the sample columns do not reconcile with each other. They are not
          used here as evidence of anything.
        </p>
        <H>Spreads Overview and record creation</H>
        <P>
          A table of spread records with category filters (Individual, Real Estate, Commercial,
          Agriculture, Show All), Created By and Last Updated columns, per-row actions, and
          pagination (<Quote>Page 1 of 163</Quote>). Creating a spread opens a modal that asks for
          the relationship name and a <Strong>template</Strong>, picked by Template Name and Type.
        </P>
        <Shot file={shot.overview} caption="Spreads overview with the Create Spreading Record modal" />
        <H>Create Spreading Template</H>
        <P>An administrator builds a template in one modal:</P>
        <UL>
          <li>
            <Strong>Template Name</Strong> (100-character limit with a live counter) and{' '}
            <Strong>Template Type</Strong> (Real Estate in the frame; the file also shows
            Individual, Commercial, and Agriculture).
          </li>
          <li>
            <Strong>Statement Structure</Strong> (for example,{' '}
            <Quote>Company with Attached Properties</Quote>).
          </li>
          <li>
            <Strong>Select Statement(s):</Strong> a checklist of what the spread will contain. The
            Real Estate example offers Rent Roll, Retail, Office, Lodging, Self-Storage and
            Multi-Family Property Cash Flow, Discounted Cash Flow, Stress Test, Ratios, UCA Cash
            Flow, and Direct Cash Flow.
          </li>
          <li>
            A <Strong>statement stepper</Strong> across the top, with a green check on each
            statement whose fields are configured and an open circle on the one being edited
            (Ratios here), with arrows to scroll.
          </li>
          <li>
            An <Strong>Available / Selected Fields transfer list</Strong> for the current
            statement, grouped (for example Liquidity Ratios: Cash Ratio, Current Ratio, Quick
            Ratio, Working Capital, Sales/Receivables, Day's Receivables), with search on both
            sides and add-all, add-one, remove-one, remove-all controls.
          </li>
        </UL>
      </>
    ),
  },
  {
    title: 'The Spread Workspace',
    content: (
      <>
        <UL>
          <li>
            <Strong>Header:</Strong> Exit, the borrower or template name, Last Updated, a presence
            line (<Quote>Users (5): people are viewing this spread</Quote>), and Save, Export,
            Print, and Map Data actions. A secondary Expand Mapped Fields action sits beside Map
            Data.
          </li>
          <li>
            <Strong>Statement tabs:</Strong> Balance Sheet, Income Statement, Equity
            Reconciliation, UCA Cash Flow, Direct and Indirect Cash Flow, Debt Schedule, Global
            Debt Service, Traditional Cash Flow, Adjusted EBITDA, Ratios. The tab set follows the
            template, so a Real Estate spread and a Commercial spread show different tabs.
          </li>
          <li>
            <Strong>Formula bar:</Strong> a <Quote>Select a cell…</Quote> bar above the grid, as in
            a spreadsheet.
          </li>
          <li>
            <Strong>View toggles:</Strong> Hidden Statements, Common Sizing, Trend Analysis, Hide
            Comments, and a Units selector. <Quote>Amounts displayed in units</Quote> is stated in
            the grid header.
          </li>
          <li>
            <Strong>Period columns:</Strong> each column header carries the period date, its
            statement type (for example Company Prepared, Tax Return), the length in months, an
            info icon, an edit pencil, and a delete icon. A green <Strong>+ Period</Strong> column
            at the right adds the next one.
          </li>
          <li>
            <Strong>Rows:</Strong> collapsible groups (Assets &gt; Current Assets &gt; Cash &amp;
            Cash Equivalents), each with line items, an add-row control, and a total row.
            Individual cells carry a small green "+" for adding a note or mapping, and line items
            show a blue month count (3 M, 2 M).
          </li>
          <li>
            <Strong>Comments:</Strong> a Comments tab docks at the bottom edge of the grid, and a
            Highlights tab docks on the right.
          </li>
        </UL>
        <Shot file={shot.balanceSheet} caption="Balance Sheet spread with balanced and unbalanced periods" />
      </>
    ),
  },
  {
    title: 'Periods: Balance, Aggregates, and Editing',
    content: (
      <>
        <H>Balanced and unbalanced periods</H>
        <P>
          Under each period header, a status indicator reads <Strong>Balanced</Strong> (green dot)
          or <Strong>Unbalanced</Strong> (red dot). A "Balance Sheet Status" group at the top of
          the grid shows Total Current Assets, Total Assets, Total Liabilities &amp; Net Worth, and
          a <Strong>Difference</Strong> row in red whenever they don't match. A design annotation
          in the frame calls this the <Quote>balanced &amp; unbalanced option</Quote>.
        </P>
        <H>Aggregated periods</H>
        <P>
          On the Income Statement, some columns are dark: <Strong>Q1 Aggregate</Strong> and{' '}
          <Strong>Q2 Aggregate</Strong> (3 months each) and <Strong>2021 Annual</Strong>, with a
          minus or plus control in the header to collapse or expand the months that roll up into
          them. Monthly columns (1/31, 2/28, 3/30) remain visible beside the aggregates.
        </P>
        <Shot file={shot.incomePeriods} caption="Income Statement with monthly and aggregated period columns" />
        <P>
          A wider variant of the same screen shows two quarters of monthly columns with their
          aggregates and the annual column.
        </P>
        <Shot file={shot.incomeWide} caption="Income Statement, wide layout" />
        <H>Editing a period</H>
        <P>
          Clicking the pencil on a period header opens an <Strong>Edit Period</Strong> modal:
          Statement Type (a required pick list, Tax Return in the frame), the Statement Date and
          Months (shown read-only, so the period's identity can't be changed by accident), a
          Preparer field, who created it, and a <Strong>Hide Period</Strong> toggle. Hiding is how
          a period is set aside without deleting its data.
        </P>
        <Shot file={shot.editPeriod} caption="Edit Period modal" />
        <H>Nested aggregates, specified</H>
        <P>
          A specification frame documents how aggregate periods nest: monthly periods roll into
          aggregates, aggregates roll into higher-level aggregates, and the headers scroll
          horizontally. It defines the colors by role: standard period headers in the system blue,
          aggregates in a dark green, nested periods on a pale neutral with a defined stroke and
          font, and nested aggregate levels in a near-black. The color rules are written as tokens
          (for example{' '}
          <span className="font-mono text-xs bg-portfolio-bg-light rounded px-1.5 py-0.5 text-portfolio-text-dark">
            dark-sys-b-10
          </span>{' '}
          at 10% of #0F1943) so developers build from the design system's values.
        </P>
        <Shot file={shot.aggregateSpec} caption="Aggregate period specification" />
      </>
    ),
  },
  {
    title: 'RMA Benchmark Flyout',
    content: (
      <>
        <P>
          An <Strong>RMA Data</Strong> tab on the right edge of the grid opens a side panel,{' '}
          <Quote>RMA Data Comparison</Quote>, over the spread. Its header sets the comparison
          population (Data Set, NAICS Code, Accounting Method, Section, Asset Size, Sales Size,
          Region, Quartile) and a settings link. Below it, a table lists each ratio with the
          spread's own value for the period, the RMA value, a <Strong>Variance</Strong>, a{' '}
          <Strong>View</Strong> link for the trend, and an <Strong>Add to Ratios</Strong> action
          on selected rows.
        </P>
        <P>
          Rows include Current Ratio, Quick Ratio, Sales/Receivables, Days' Receivables, Cost of
          Sales/Inventory, Days' Inventory, Cost of Sales/Payables, EBIT/Interest, EBITDA/Sales,
          Sales/Net Fixed Assets, and Sales/Total Assets. A design note on the frame suggests a 3px
          border for the flyout.
        </P>
        <Shot file={shot.rma} caption="RMA benchmark flyout over the Balance Sheet" />
      </>
    ),
  },
  {
    title: 'Debt Schedule and Rent Roll',
    content: (
      <>
        <H>Debt Schedule</H>
        <P>A tab for the borrower's debt, in two grids:</P>
        <UL>
          <li>
            <Strong>Existing Debt Parameters:</Strong> Debt Name, Loan ID, Original Loan Amount,
            Amortization (Months), Outstanding Balance, Maturity Date, Interest Rate, Payment
            Calculation (Principal &amp; Interest, Interest Only), calculated Monthly and Annual
            Payments, and a delete action, with a subtotal row.
          </li>
          <li>
            <Strong>Proposed Request Parameters:</Strong> the same structure for the debt being
            requested, with Proposed Loan Amount, Amortization, Interest Rate, Payment, and
            Estimated Monthly and Annual payments, followed by a <Strong>Total Debt Payments</Strong>{' '}
            row that adds existing and proposed.
          </li>
          <li>
            An <Strong>As Of Date</Strong> with an Edit control, and a{' '}
            <Strong>Create Debt Schedule</Strong> action.
          </li>
        </UL>
        <P>
          Calculated cells (monthly and annual payments) are read-only. A note on the frame
          specifies the disabled-cell styling, and another specifies the validation:{' '}
          <Quote>Outstanding Balance cannot be greater than the Original Loan Amount</Quote>, shown
          as an inline error (a red outline and warning icon) on the offending cell.
        </P>
        <Shot file={shot.debtValidation} caption="Debt Schedule with inline validation" />
        <P>
          <Strong>Associating periods.</Strong> A dropdown beside the schedule lets the analyst
          associate it with one or more statement periods through a searchable, multi-select list,
          with Select All. Each option shows the period date and its statement type (for example
          CPA Audited, Company Prepared Statement) and, where relevant, which debt schedule it is
          already tied to. The auto-save indicator replaces "Last Updated" on this tab, and a
          developer note specifies that switching to a previous debt schedule must keep the
          associate-period control enabled.
        </P>
        <Shot file={shot.debtAssociate} caption="Debt Schedule, associating periods" />
        <H>Rent Roll</H>
        <P>
          For real-estate borrowers, a Rent Roll tab lists each unit: Suite/Unit #, Tenant,
          Occupancy Status (Occupied, Vacant), Lease Start and End Date, Lease Term, Annual and
          Monthly Rent per Sq. Ft., Annual Rent, and Unit Type, with a filter field on every
          column, a per-row on/off toggle and delete, and a column chooser on the right edge.
          Vacant units show empty date placeholders rather than zeros. Totals and averages sit in a
          fixed footer (unit and tenant counts, total, leased, and vacant area with percentages),
          and the header carries Total Sq. Ft. of the property and a{' '}
          <Strong>View Lease Expiration Schedule</Strong> link. An <Quote>Updates Available</Quote>{' '}
          notice appears next to the auto-save indicator.
        </P>
        <Shot file={shot.rentRoll} caption="Rent Roll" />
      </>
    ),
  },
  {
    title: 'Personal Templates and Custom Ratios',
    content: (
      <>
        <P>
          A Personal Template carries Personal Tax Return, Personal Financial Statement, Personal
          Cash Flow, Global Debt Service, Adjusted EBITDA, Debt Schedule, and Ratios tabs. The{' '}
          <Strong>Ratios</Strong> tab lists each ratio with its formula beside it in a Preview
          column: Debt Service Coverage, Debt to Income, Cash Flow Margin, Existing, Proposed, and
          Combined Debt/Income, and, under Personal Financial Statement Ratios, Current Ratio, Debt
          to Net Worth, Debt to Total Assets, and Working Capital.
        </P>
        <P>
          An analyst can add an <Strong>Add Custom Ratio</Strong> through a side panel: a ratio
          name, a <Strong>Custom Ratio Formula</Strong> field (
          <Quote>Use the [ key to activate the field selection menu</Quote>) with Days in Statement
          and Supported Operators help, and an Output Format selector.
        </P>
        <Shot file={shot.customRatio} caption="Personal ratios and the Add Custom Ratio panel" />
        <p className="text-xs text-portfolio-text-light italic leading-relaxed border-l-2 border-gray-300 pl-4 mt-6">
          The file also contains a document upload and mapping flow (Select Files, Upload Files,
          Import Files, a file table with Document Type, Format, Selected Period(s), Status, and
          Uploaded By, and a Map Selected File step that returns to the spread). It is not covered
          in this case study.
        </p>
      </>
    ),
  },
  {
    title: 'Related Work',
    content: (
      <P>
        The spread workspace is built from{' '}
        <Link to="/work/cync-design-system" className="text-portfolio-accent underline hover:no-underline">
          The Cync Design System (Style Guide 2.0)
        </Link>
        , whose Spreading concept shows the overview and template picker. The Available / Selected
        transfer list is the same pattern used in{' '}
        <Link to="/work/agriculture-collateral" className="text-portfolio-accent underline hover:no-underline">
          Agriculture Collateral
        </Link>
        's administration builder.
      </P>
    ),
  },
  {
    title: 'Role',
    content: <P>Designer of the Spreading flows shown in the CYNC Figma file.</P>,
  },
];

const closingReflection = [
  "Spreading taught a different lesson from the configuration-heavy modules: when users already have a mental model, match it. The workspace borrows the spreadsheet's grid, formula bar, and collapsing groups, and puts the design effort into the parts a spreadsheet can't give an analyst: templates that make spreads comparable, a balance check on every period, and benchmarks next to the numbers.",
  'The second lesson is to put the error where the eye already is. A red Difference row and a status under each period header cost almost nothing to build and remove a whole class of downstream mistakes. A dense screen is good when each part of it answers a question the analyst would otherwise have to go and find.',
];

const FinancialSpreadingCaseStudyPage = () => {
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
          eyebrow="Loan Origination System (LOS)"
          title={project.title}
          subtitle={project.subtitle}
          role={project.role}
          company="Cync Software (nCino)"
          heroImage={shot.balanceSheet}
          overviewText="Spreading is the step where an analyst takes a borrower's financial documents (balance sheets, income statements, tax returns) and enters them into a standard structure so that ratios, cash flow, and debt service can be calculated and compared. It is dense, numeric, repetitive work that analysts do for hours at a stretch, so the usual rules for form design don't apply. The interface has to behave like a spreadsheet and still enforce the structure a bank needs."
          problemTitle="Three Layers"
          problemText="The design splits the problem into three layers: the Spreads Overview, a list of spread records filtered by borrower type, with a modal to create a new one from a template; Spreading Templates, an administrator-defined choice of which statements and which fields a spread contains, by borrower type; and the Spread workspace, the grid where the analyst works, one tab per statement and one column per period."
          hardDecisionImage={shot.overview}
          hardDecisionIntro="Templates Decide the Structure, So Analysts Don't."
          hardDecisionBody="The problem: a real-estate borrower needs a rent roll and property-level cash flows; an individual needs personal statements; a farm needs something else. If every analyst picks their own statements, spreads can't be compared across the portfolio. The decision: an administrator defines a template per borrower type, including which statements it contains and which fields each statement exposes. The analyst picks a template when creating the spread. Structure is decided once, centrally, and the analyst's job is data entry."
          keyDecisions={keyDecisions}
          additionalSections={additionalSections}
          closingReflection={closingReflection}
        />
      </div>
      <Footer />
    </div>
  );
};

export default FinancialSpreadingCaseStudyPage;
