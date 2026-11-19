import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import { SEOHead } from '@/components/SEOHead';
import CaseStudyPageLayout from '@/components/CaseStudyPageLayout';
import ImagePlaceholder from '@/components/ImagePlaceholder';
import { caseStudies } from '@/utils/data/caseStudies';

const project = caseStudies.find((p) => p.id === 19)!;

// Exports from the CYNC Figma file, under /case-studies/due-diligence-screens/.
const img = {
  insurance: 'due-diligence-screens/01-insurance.png',
  titleSearch: 'due-diligence-screens/02-title-search.png',
  environmental: 'due-diligence-screens/03-environmental.png',
  flood: 'due-diligence-screens/04-flood.png',
  orderFlood: 'due-diligence-screens/05-order-flood.png',
  comparables: 'due-diligence-screens/06-comparables.png',
  uccRegister: 'due-diligence-screens/07-ucc-register.png',
  uccFiling: 'due-diligence-screens/08-ucc-filing.png',
  titleAdmin: 'due-diligence-screens/09-title-admin.png',
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

const UL: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <ul className="space-y-2 text-sm text-portfolio-text-light leading-relaxed mb-4 list-disc pl-5">
    {children}
  </ul>
);

const Shot: React.FC<{ file: string; caption: string }> = ({ file, caption }) => (
  <div className="my-6">
    <ImagePlaceholder filename={file} caption={caption} aspect="wide" />
    <p className="text-xs text-portfolio-text-light mt-2">{caption}</p>
  </div>
);

const insuranceTypes = [
  'Property', 'Casualty', 'Liability', 'Flood', 'Business Interruption', 'Environmental', 'Crop',
  'Equipment', 'Auto', 'Health', 'Mortgage', 'Private Mortgage Insurance', 'Master Condo',
  'Errors and Omissions', 'Tenant-only', 'Key Man',
];

const keyDecisions = [
  {
    title: 'Model Each Item as the Process It Is',
    body: "Each component's shape follows its real-world process, instead of one form with date and status fields. Environmental is a staged trail (screen, Phase I, Phase II, remediation) in which each step depends on the last. Title is \"ordered, received, clear,\" with two registers of exceptions (liens and taxes). Flood is a determination, an insurance status, and an order, with the request fields a vendor requires. UCC is a register with a lifecycle (filed, continued, terminated, expired). Insurance is a set of policies with a minimum-coverage requirement and an expiry.\n\nThe user sees the state of the process, not just a set of fields.",
  },
  {
    title: 'Registers for Many, Fields for One',
    body: 'Where a collateral item can have several of something (policies, liens, taxes, UCC filings, comparables), the component shows a table with row actions and an Add control. Where there is only ever one (title search status, a flood determination), it is a form. The screen shape tells the user which one they are working with.',
  },
  {
    title: 'Put the Rule at the Field',
    body: 'Validation and warnings are written where the mistake happens. "Minimum Coverage Required cannot be greater than Coverage Amount" appears on the insurance form. "This policy will expire on [Date]" surfaces an expiry before it becomes a gap in coverage. Helper text on the flood form explains an option whose meaning isn\'t obvious ("guaranteed for the life of the loan").',
  },
  {
    title: 'One Pattern for Every Save, Exit, and Delete',
    body: 'Every component uses the same confirm-on-save sentence, the same exit warning, and, for deletes, a message that names what will be removed. The user learns the pattern once, and it holds across insurance, title, environmental, and comparables.',
  },
  {
    title: 'Let Administrators Shape the Fields Per Sub-Type',
    body: 'The title component is configured with the same Available / Selected transfer list used across the collateral builder, with search on both sides and a live preview. A residential sub-type can omit fields a commercial one needs without a new component.',
    image: img.titleAdmin,
  },
  {
    title: 'Type a Sentence Where a Filter Would Be Slow',
    body: 'Comparable search accepts natural language alongside radius and property-type filters. For an analyst who knows what they want ("retail leases nearby, last 12 months"), typing it is faster than setting five filters. The structured filters remain for precision. Whether the natural-language search shipped isn\'t confirmed in the file.',
  },
];

const additionalSections = [
  {
    title: 'The Shared Frame',
    content: (
      <>
        <p className="text-xs text-portfolio-text-light italic mb-6">
          Source: about 230 frames in the CYNC Figma file (Insurance Component, Title Search &amp;
          Insurance and its administration variants, Environmental, Flood, Comparable, and the
          UCC1, UCC3, Continuation, Termination, and UCC Search frames). Borrower names, dollar
          amounts, dates, and filing numbers in the frames are placeholder data.
        </p>
        <P>
          Every component renders inside the same record: the collateral name, a metrics header
          (Policy LTV, Recovery Rate, Current Collateral LTV, Proposed LTV, current and third-party
          loan commitments, available equity), a left list of the record's sections, and a single
          content panel with Edit, Cancel, and Save. Leaving a section with unsaved changes
          triggers the same warning (
          <Quote>You are about to exit without editing the [Component]. Do you want to continue?</Quote>
          ), and saving confirms with the same sentence pattern (
          <Quote>Insurance successfully edited.</Quote>).
        </P>
      </>
    ),
  },
  {
    title: 'Insurance',
    content: (
      <>
        <P>
          A grid of policies, with Insurance Type, Insurance Company Name, Policy Number, Coverage
          Amount, Minimum Coverage Required, Effective Date, and Expiration Date, a search field on
          each column, and View, Edit, and Delete per row. <Strong>Add Insurance</Strong> opens a
          form in sections: Insurance Company Details, Agent Details (name, e-mail, contact
          number), Coverage Information (Coverage Limit, Maximum Deductible, Coverage Description,
          Policy Term and its unit), Policyholder Details (name and a full address), and Premiums
          &amp; Payments (Premium Amount, Frequency of Payments, Payment Due Date, a description).{' '}
          <Strong>Property Insured</Strong> and an <Strong>Insurance Certificate Included</Strong>{' '}
          Yes/No sit alongside.
        </P>
        <Shot file={img.insurance} caption="Insurance component on the Grape Farms record" />
        <P>The insurance type list, with an <Strong>Other Insurance Type</Strong> path:</P>
        <div className="mb-4">
          <Chips items={insuranceTypes} />
        </div>
        <P>
          A <Strong>Key Person Insured</Strong> field appears in the frames for the Key Man type.
          Validation says{' '}
          <Quote>Minimum Coverage Required cannot be greater than Coverage Amount.</Quote> An
          expiry notice reads <Quote>This policy will expire on [Date].</Quote> Delete asks{' '}
          <Quote>This will delete the Insurance. Do you want to continue?</Quote> and confirms{' '}
          <Quote>Insurance successfully deleted.</Quote>
        </P>
      </>
    ),
  },
  {
    title: 'Title Search & Insurance',
    content: (
      <>
        <P>
          Two tabs: <Strong>Title Search</Strong> and <Strong>Title Insurance</Strong>.
        </P>
        <UL>
          <li>
            <Strong>Title Search:</Strong> Title Search Ordered (Yes / No), Date Ordered, Date
            Received, Title Clear, and Comments, followed by two editable tables.{' '}
            <Strong>Liens &amp; Judgements</Strong> records a Creditor, Type (Deed of Trust,
            Mortgage, Judgement, HOA, State Tax Lien, UCC Filing), Amount, and Status (Open,
            Requested, Closed). <Strong>Taxes</Strong> records Tax Name, Taxes Owed, Tax Amount, and
            Current and Previous Due Dates.
          </li>
          <li>
            <Strong>Title Insurance:</Strong> Company Name, Agent Name, Agent License Number, Agent
            Address, Title Opinion Attorney Name and License Number.
          </li>
        </UL>
        <Shot file={img.titleSearch} caption="Title Search: ordered, received, clear, then Liens & Judgements and Taxes" />
        <P>
          In administration, a <Strong>Select Title Search &amp; Insurance Type</Strong> control and
          an Available / Selected fields transfer list let an administrator include only the fields
          a sub-type needs, with a live preview and the confirmation{' '}
          <Quote>
            Title Search &amp; Insurance Component successfully added to Title Search &amp;
            Insurance Details.
          </Quote>
        </P>
      </>
    ),
  },
  {
    title: 'Environmental',
    content: (
      <>
        <P>
          A staged trail, shown on the Grape Farms record:{' '}
          <Strong>Environmental Status Determined</Strong> and{' '}
          <Strong>Environmental Concerns Exist</Strong>, then an{' '}
          <Strong>Environmental Transaction Screen (ETS)</Strong> (vendor, date ordered, date
          obtained, concerns detected), <Strong>Phase I Required</Strong>,{' '}
          <Strong>Phase II Required</Strong> (each with vendor, dates, and concerns detected), and{' '}
          <Strong>Property Requires Environmental Remediation</Strong>, with projected and actual
          completion dates and{' '}
          <Quote>Property Environmentally Remediated &amp; Approved Safe by Government Officials.</Quote>
        </P>
        <Shot file={img.environmental} caption="Environmental: status, ETS, then Phase I" />
      </>
    ),
  },
  {
    title: 'Flood',
    content: (
      <>
        <P>
          A <Strong>Flood Certification</Strong> with Determination Source, Insurance Status, Loan
          Requirements, and Coverage Details (Flood Insurance, National Flood Insurance Program or
          regulatory, Protected Areas, Insurance Carrier, Policy Number, Coverage Amount,
          Origination Date, Expiration Date, Notes), and a drag-and-drop upload for the flood
          determination document.
        </P>
        <Shot file={img.flood} caption="Flood on a Commodity Crops record" />
        <P>
          An <Strong>Order Flood</Strong> form (shown on a Commodity Crops record) collects Flood
          Request Details (Requested By, Action Type, MISMO Version ID, Product), the Borrower and
          any Co-Applicants, the Property (address, county, parcel number, property type), Loan
          Number, Mortgage Terms, and an optional PDF or TIFF attachment. A helper line explains
          the "life of loan" option:{' '}
          <Quote>Indicates whether flood zone determination is guaranteed for the life of the loan.</Quote>
        </P>
        <Shot file={img.orderFlood} caption="Order Flood form" />
      </>
    ),
  },
  {
    title: 'Comparables',
    content: (
      <>
        <P>
          <Strong>Sale</Strong> and <Strong>Lease</Strong> tabs for the subject property. Sale
          comparables carry Property Address, Sale Date, Sale Price, $/Sq. Ft., Cap Rate,
          Classification (Class A), Square Feet, Number of Units, Lot Size, Year Built, and Year
          Renovated. Lease comparables carry Lease Date, Lease Term, Monthly and Annual Rent, Total
          Lease Value, Lease Rate per Sq. Ft., and Lease Type (for example Absolute Net).
        </P>
        <P>
          A property-type filter (Office, Retail, Industrial, Lodging, Land), a{' '}
          <Strong>Radius</Strong> control, per-field search, and a{' '}
          <Strong>Natural Language</Strong> search accept queries typed as sentences. Empty states
          say <Quote>No Sale comparable added for this collateral</Quote> and{' '}
          <Quote>No comparable found. Try adjusting the radius.</Quote>
        </P>
        <Shot file={img.comparables} caption="Search Comparable: address and Smart Search (Natural Language), radius, sale and lease results with a map" />
      </>
    ),
  },
  {
    title: 'UCC: Lien & Perfection',
    content: (
      <>
        <P>
          A register of filings (Filing Number, UCC Type, Debtor Name, Secured Party, State, Filing
          Date, Expiration Date, Status, Actions), with a column chooser. A{' '}
          <Strong>UCC Filing</Strong> flow has a Q&amp;A step, Debtors (Name, Type Business or
          Individual, Address, Tax ID, Jurisdiction), Secured Parties, and Collateral Information.
          UCC1 is the initial filing; UCC3 covers <Strong>Continuation</Strong> and{' '}
          <Strong>Termination</Strong>, with statuses Completed, Expired, and Terminated. A{' '}
          <Strong>UCC Search</Strong> view lists filings in the same register layout. The empty
          state reads <Quote>No UCC Search &amp; File for this collateral.</Quote>
        </P>
        <Shot file={img.uccRegister} caption="Lien & Perfection register with Completed and Expired filings" />
        <Shot file={img.uccFiling} caption="UCC Filing: jurisdiction, debtors, secured parties, collateral information, Q&A" />
      </>
    ),
  },
  {
    title: 'Related Work',
    content: (
      <P>
        These components sit beside{' '}
        <Link to="/work/appraisal" className="text-portfolio-accent underline hover:no-underline">
          Appraisal
        </Link>{' '}
        on the record and are assembled into categories such as{' '}
        <Link to="/work/commercial-real-estate-collateral" className="text-portfolio-accent underline hover:no-underline">
          Commercial Real Estate
        </Link>{' '}
        and{' '}
        <Link to="/work/agriculture-collateral" className="text-portfolio-accent underline hover:no-underline">
          Agriculture
        </Link>
        . The shared save, exit, and delete sentences come from{' '}
        <Link to="/work/cync-design-system" className="text-portfolio-accent underline hover:no-underline">
          The Cync Design System
        </Link>
        .
      </P>
    ),
  },
  {
    title: 'Role',
    content: <P>Designer of the due-diligence components shown in the CYNC Figma file.</P>,
  },
];

const closingReflection = [
  'Compliance evidence is repetitive across collateral types and specific within each item. The design answers both: shared components for the repetition, and a shape for each component that follows the real process (a stage trail, a register, a lifecycle) for the specifics.',
  'The lasting lesson is that the details that prevent a missed requirement cost little. A minimum-coverage check, an expiry message, a "this option means life of loan" note, and a single exit warning don\'t make the screens more impressive. They are the reason an analyst finds the gap before the examiner does.',
];

const DueDiligenceComponentsCaseStudyPage = () => {
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
          heroImage={img.uccRegister}
          overviewText="A collateral record is only as good as the evidence behind it. Before a bank lends against an asset, it has to know the asset is insured, that the title is clean, that no environmental problem lowers its value, that it is not in an unmapped flood zone, that comparable properties support the valuation, and that the bank's lien is filed and still alive. Each of those is a separate process with its own vendors, dates, and exceptions, and each one blocks or delays the loan if it is missed."
          problemTitle="Shared Components, Real Processes"
          problemText="The design treats them as components: self-contained sections that an administrator drops into any collateral sub-type. The file shows the same components on a real-estate record (459 Hendon Parkway), an agricultural record (Grape Farms), and a commodity-crops record, which is the clearest evidence that they are shared rather than built per category."
          hardDecisionIntro="Build It Once, Place It Anywhere."
          hardDecisionBody="The problem: every collateral category needs most of the same evidence (an agricultural property still needs title, insurance, and environmental checks). Building each per category would multiply the screens and let them drift apart. The decision: each due-diligence item is a component in the administration library, dropped into a sub-type's section list. The same Insurance form appears on a farm and a building. The category-specific work lives in the property-facts component, and the compliance work is shared."
          keyDecisions={keyDecisions}
          additionalSections={additionalSections}
          closingReflection={closingReflection}
        />
      </div>
      <Footer />
    </div>
  );
};

export default DueDiligenceComponentsCaseStudyPage;
