import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import { SEOHead } from '@/components/SEOHead';
import CaseStudyPageLayout from '@/components/CaseStudyPageLayout';
import CreComponentsDiagram from '@/components/motion/CreComponentsDiagram';
import { caseStudies } from '@/utils/data/caseStudies';

const project = caseStudies.find((p) => p.id === 6)!;

// Temporary stand-in stock photography — not real product screenshots. Swap for actual
// Figma exports once available; ImagePlaceholder will pick them up automatically once
// local files exist at these paths.
const img = {
  hero: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&q=80&w=1600',
  componentLibrary: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=1600',
  multiProperty: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=1600',
  floodDetails: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1600',
  appraisalTab: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600',
  comparable: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&q=80&w=1600',
};

const verifiedTabs = [
  { name: 'Overview', body: 'Name, type/sub-type, valuation (AVM run action), ownership table (Primary Owner, Ownership Percentage), property address and attributes, map.' },
  { name: 'Collateral Files', body: 'Document storage for the record.' },
  { name: 'Pledged Loans', body: 'Internal / External / In-Process Loans sub-tabs — Loan Name, Loan Type, Lien Position, Lien Type, Loan Amount, with Show/Hide Details and a Pledge Collateral action.' },
  { name: '[Property-Type] Details', body: 'e.g. Office Details or the Commercial Component — the one component whose information differs by CRE sub-type.' },
  { name: 'Appraisal Details', body: 'Appraisal / Review / Evaluation sub-tabs — see Design Decisions below.' },
  { name: 'Comparable Details', body: 'Sale and lease comparables.' },
  { name: 'Flood Details', body: 'Certification, insurance, and an Order Flood flow.' },
  { name: 'Environmental Screening', body: 'Staged due-diligence trail — see "Further Components" below.' },
  { name: 'Insurance Details', body: 'Coverage and policy tracking — see "Further Components" below.' },
  { name: 'Tax Assessed Details', body: 'Assessed value and tax records.' },
  { name: 'Title Search Details', body: 'Search status, liens and judgements, taxes, title insurance.' },
  { name: 'Lien & Perfection', body: 'UCC search and filing.' },
  { name: 'Encumbrance & Risk', body: 'Open liens, tax liens, PACE/HOA liens, foreclosure history — via on-demand search.' },
];

const persistentHeaderMetrics = [
  'Total Current Loan Commitment', 'Available Equity', 'Available Equity to Margin', 'Recovery Rate',
  'Policy LTV', 'Current and Third-Party Loan Commitments', 'Proposed LTV', 'Current Collateral LTV',
  'Collateral Discount Value', 'Discounted Collateral Value', 'Discounted Collateral Coverage',
];

const subTypesListed = [
  'Commercial', 'Residential For-Sale', 'Residential Owner-Occupied', 'Land', 'Healthcare',
  'Multi-Family', 'Strip Malls', 'Farm Land', 'Special Purpose Building',
];

const componentLibraryItems = [
  'Appraisal', 'Environmental', 'Title Search & Insurance', 'Tax Assessed', 'Insurance',
  'Flood', 'Real Estate Fields', 'Land Fields', 'and others',
];

const commercialComponentFields = [
  'Number of Pad Sites', 'Vacant Square Feet', 'Total Square Feet', 'Property Stage',
  'Special Purpose Property Use Type', 'Commercial Use Type', 'Annual Leases Required',
  'Average Monthly Pad Lease Rate', 'Number of Beds', 'Average Monthly Per-Bed Lease Rate',
  'Occupancy', 'Zoning', 'Legal Description', "Tax/Assessor's Parcel Number",
  'Number of Units with Water', 'Total Number of Units', 'Parking Spaces that Convey Per Unit',
  'Number of Loading Docks', 'Clear Building Height', 'Trailer Parking Spaces',
  'Average Nightly Room Rate', 'Actual Nightly Room Rate Realized', 'RevPAR', 'Number of Rooms',
  'Anchor Tenant(s)', 'Percentage of space by primary/secondary/third use',
  'Low Income Housing Tax Credit', 'New Market and Historic Tax Credits',
  'Adjacent to a Hospital or Medical Center',
];

const residentialForSaleFields = [
  'Zoning', 'Legal Description', 'Parcel Number',
  'Property Type (Single-Family Detached, Townhouse Units, Lot Development, PUD, Condominiums)',
  'Builder Type', 'Project Amenities', 'Total Acreage', 'Total Number of Units',
  'Projected Year of Completion', 'Average Square Feet per Unit',
  'Competing-development counts and absorption',
  'Lot Information (Number of Lots, Lots Absorbed per Period, Beginning Sale Price per Lot, Lot Takedown Frequency, Finished Lot Contract Purchaser)',
];

const keyDecisions = [
  {
    title: 'Admin Configures; the Record Previews',
    body: 'The Decision: the builder shows a live preview of the section as it will appear on the collateral record, and confirms changes with a success message ("Component successfully added to..."). An administrator sees the consequence of a field choice before any analyst does.',
    image: img.componentLibrary,
  },
  {
    title: 'One Loan, Multiple Pledged Properties',
    body: "The Problem This Shaped: a single commercial loan is often secured by more than one property — not one collateral record per loan, but exposure spread across several CRE records at once. Showing the loan officer one property's numbers would misrepresent coverage.\n\nThe Decision: the pledge/link relationship supports many-to-many linking. A loan can pledge multiple CRE records and a property can be pledged toward more than one loan. The Pledged Loans tab shows Amount Pledged, Collateral Discount Applied %, Lien Position, and Lien Type per loan, and Total Collateral Amount Pledged, Current Collateral LTV, and Proposed LTV roll up across them. The same mechanism makes cross-collateralization visible from the relationship side. The loan-side view aggregates exposure instead of making the officer open each property and total it by hand.",
    image: img.multiProperty,
  },
  {
    title: 'Appraisal, Review, and Evaluation as Three Separate Workflows',
    body: "The Problem: a raw appraisal, the regulatory review of that appraisal, and an independent evaluation are different tasks with different owners and different regulatory weight.\n\nThe Decision: three tabs, not one long form.\n\nAppraisal tab: Appraisal Company Name/Source, Appraiser's Name, Property Stage, Appraisal Date, Appraisal Effective Date. A repeatable Valuation Approach table (Value, Area/Total Sq. Ft., Net Area/Sq. Ft., Date, Actions) with \"Add Valuation Approach\" and a Final Valuation Approach selector separates the approaches considered from the one relied on. Fields such as Current As-Is Appraised Value, Loan Determinant Value, and Final Valuation Source tie the appraisal to the figure that drives lending.\n\nReview tab: a structured compliance checklist rather than a free-text sign-off, organized into Appraisal Report Completeness, Appraisal Methodology, Market Analysis, Property Description, Comparable Sales, Income Analysis, Final Value Conclusion, Regulatory Compliance, and Overall Assessment. Items include \"Appraisal Report complete and signed,\" \"Required exhibits and addenda included,\" \"Appropriate Appraisal Methodology,\" \"Relevant and Recent Comparable Sales Data,\" \"Reasonable and Well-Supported Adjustments,\" \"Appraisal Complies with USPAP,\" \"Appraisal Complies with FIRREA,\" and \"Appraiser is on Financial Institution's Approved Appraiser List,\" with Compliance Issues Noted, Appraisal Acceptable, Reviewer's Name, Review Completed Date, an Internal/External Third-Party reviewer designation, and comments.\n\nEvaluation tab: Evaluation Type, Evaluation Value, Evaluation Date and Effective Date, Evaluation Company Name, Completed By, Reviewed By, Review Date, Evaluation Accepted (Yes/No), Comment, for an independent evaluation that can exist alongside or instead of a full appraisal.\n\nIn administration, the same three components (Appraisal, Appraisal Review, Evaluation) are fields an administrator can include or omit per sub-type, with Value Estimation Method and Valuation Type available as optional fields.",
    image: img.appraisalTab,
  },
  {
    title: 'Comparable Property Integration: Map and List Together',
    body: 'The Problem: comparables need spatial context (where they sit relative to the subject) and structured comparison (price per square foot, transaction type, size, building class). Neither a map alone nor a list alone serves both.\n\nThe Decision: a synchronized dual view where selecting a property in one highlights it in the other, paired with a persistent filter panel because comparable analysis involves frequent filter changes. Confirmed filter fields: Radius, Property type, Transaction type, Building class, Size range.',
    image: img.comparable,
  },
  {
    title: 'Flood as a Dual-Mode Component, With Ordering Built In',
    body: 'Flood Details runs in two modes off the same tab: populated from Dataverify where integrated, manual where not, so an analyst moving between institutions doesn\'t relearn the layout. The Order Flood flow follows a MISMO request structure (Version ID, Action Type, borrower, mortgage terms, property) so a determination can be ordered from the record rather than outside it.',
    image: img.floodDetails,
  },
  {
    title: 'Lien Lifecycle Modeled as Filings, Not a Status Field',
    body: 'UCC is not a checkbox. It is a register of filings with their own type, number, secured party, state, filing and expiration dates, and status. A UCC1 can be continued or terminated through UCC3 amendments, an expiry is visible as a status, and a UCC Search is separate from a filing. This lets a reviewer see whether a lien is perfected, about to lapse, or released, which is what a lien position claim actually depends on.',
  },
  {
    title: 'Pull Information In Rather Than Retype It',
    body: 'Extract Document (upload a file, populate the record), Order Appraisal Certification, an AVM/ClearAVM result with an Order ID, a Datatree integration, and Dataverify for flood all move data into the record from the system that already holds it. Datatree is confirmed as a real integration; its specific function within the record is not detailed in the file.',
  },
];

const additionalSections = [
  {
    title: 'Shared Components, Varying Facts',
    content: <CreComponentsDiagram />,
  },
  {
    title: 'The Collateral Record',
    content: (
      <>
        <p className="text-xs text-portfolio-text-light italic leading-relaxed mb-6">
          Sources: product walkthroughs, screenshots, and the CYNC Figma file (about 120 CRE-related
          frames: Commercial Real Estate, Residential For-Sale, Appraisal, Appraisal Administration,
          Order Appraisal Certification, Flood, UCC1/UCC3/UCC Search/Continuation/Termination, and
          Title Search &amp; Insurance administration). Sample values in the frames (property names,
          dollar amounts, IDs) are placeholder data.
        </p>
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          {verifiedTabs.map((tab) => (
            <div key={tab.name} className="rounded-xl bg-portfolio-bg-light p-5">
              <p className="font-semibold text-portfolio-text-dark mb-1 text-sm">{tab.name}</p>
              <p className="text-xs text-portfolio-text-light leading-relaxed">{tab.body}</p>
            </div>
          ))}
        </div>
        <p className="text-sm text-portfolio-text-light leading-relaxed">
          <span className="font-semibold text-portfolio-text-dark">A persistent header</span>{' '}
          carries the record's policy metrics: {persistentHeaderMetrics.join(', ')}.
        </p>
      </>
    ),
  },
  {
    title: 'Twelve Sub-Types, One Component Library',
    content: (
      <>
        <p className="text-sm text-portfolio-text-light leading-relaxed mb-4">
          In Administration → Collateral Management → Commercial Real Estate, a sub-type is not a
          hand-built screen. It is assembled in a drag-and-drop builder. The administrator sets
          sub-type policy at the top (Collateral Code, Recovery Rate %, Maximum Lien Limit, Policy
          LTV %) and then adds components, each from a searchable library (
          {componentLibraryItems.join(', ')}), arranging them into sections with Create Section and
          Create New Field.
        </p>
        <p className="text-sm text-portfolio-text-light leading-relaxed mb-4">
          Sub-types visible in the file include {subTypesListed.join(', ')}. The file does not
          enumerate all twelve.
        </p>
        <p className="text-sm text-portfolio-text-light leading-relaxed">
          Each component is configured through a two-pane transfer list (Available Fields / Selected
          Fields, with Select All and a type selector), and the builder shows a live "Collateral
          Information (Preview)" of the section as it will appear on the collateral record, with a
          "Last saved" stamp.
        </p>
      </>
    ),
  },
  {
    title: 'Property-Specific Fields',
    content: (
      <>
        <p className="text-sm text-portfolio-text-light leading-relaxed mb-6">
          What differs between sub-types is the property-facts component.
        </p>
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="rounded-xl border border-gray-200 p-6">
            <p className="font-semibold text-portfolio-text-dark mb-3">Commercial Component</p>
            <p className="text-xs text-portfolio-text-light leading-relaxed">
              {commercialComponentFields.join(', ')}.
            </p>
          </div>
          <div className="rounded-xl border border-gray-200 p-6">
            <p className="font-semibold text-portfolio-text-dark mb-3">Residential For-Sale</p>
            <p className="text-xs text-portfolio-text-light leading-relaxed">
              {residentialForSaleFields.join('; ')}.
            </p>
          </div>
        </div>
      </>
    ),
  },
  {
    title: 'Flood',
    content: (
      <p className="text-sm text-portfolio-text-light leading-relaxed">
        Flood Certification (Determination Source), Insurance Status, Loan Requirements, Coverage
        Details (Flood Insurance, National Flood Insurance Program/Regulatory, Protected Areas,
        Notes, Insurance Carrier, Policy Number, Coverage Amount, Origination Date, Expiration
        Date), a determination document upload, and an Order Flood flow: Organization Name and
        Address, Contact Point (Type, Value), Flood Request Details (MISMO Version ID, Action Type,
        Requested By, Comments), Product, Borrower (First/Last Name, Add Co-Applicant), Mortgage
        Terms, Property (Street Address, City, State, Postal Code, County, Parcel Number), and an
        optional document attachment (PDF or TIFF) with name and description. A field note explains
        that the determination is guaranteed for the life of the loan.
      </p>
    ),
  },
  {
    title: 'Title Search & Insurance',
    content: (
      <p className="text-sm text-portfolio-text-light leading-relaxed">
        A configurable component whose fields include Title Search Ordered, Title Search Obtained,
        Title Cleared, Date Ordered, Date Received, Comments; Liens &amp; Judgements (Creditor,
        Type, Status, Amount); Taxes (Tax Name, Taxes Owed, Total Tax Amount, Current Due Date,
        Previous Due Date); and Title Insurance (Company Name, Agent Name, Agent License Number,
        Agent Address, Title Opinion Attorney Name and License Number).
      </p>
    ),
  },
  {
    title: 'Lien & Perfection (UCC)',
    content: (
      <p className="text-sm text-portfolio-text-light leading-relaxed">
        UCC Filing with a Q&amp;A step, Debtors, Secured Parties, and Collateral Information
        sections (Debtor Name, Type Business/Individual, Address, Tax ID, Jurisdiction), a UCC
        register (UCC Type, Filing Number, Secured Party, State, Filing Date, Expiration Date,
        Status), UCC1 filing, UCC3 amendment flows for Continuation and Termination, and a UCC
        Search. Statuses include Completed, Expired, and Terminated. The UCC frames in the file are
        shown on an agricultural collateral record (Commodity Crops), which shows Lien &amp;
        Perfection is a cross-category capability, not CRE-only.
      </p>
    ),
  },
  {
    title: 'Order Appraisal Certification and Document Extraction',
    content: (
      <p className="text-sm text-portfolio-text-light leading-relaxed">
        The collateral record includes Copy Collateral (Clone), Extract Document (upload a file and
        have its fields pulled into the record: Drag and Drop the new version of your file here),
        and Order Appraisal Certification, alongside a ClearAVM result with an Order ID, Valuation
        Date, and Collateral Valuation Source.
      </p>
    ),
  },
  {
    title: 'Further Components Found in the Updated Figma File',
    content: (
      <div className="space-y-6">
        <div>
          <p className="font-semibold text-portfolio-text-dark mb-2">Environmental</p>
          <p className="text-sm text-portfolio-text-light leading-relaxed">
            Environmental Status Determined and Environmental Concerns Exist, then a staged
            due-diligence trail: Environmental Transaction Screen (ETS) (vendor, date ordered, date
            obtained, whether concerns were detected), Phase I Required (vendor, dates, concerns
            detected), Phase II Required (vendor, dates, concerns detected), and Property Requires
            Environmental Remediation (remediation vendor, projected and actual completion dates,
            and "Property Environmentally Remediated &amp; Approved Safe by Government Officials").
            Each step appears only when the previous one says it is needed.
          </p>
        </div>
        <div>
          <p className="font-semibold text-portfolio-text-dark mb-2">Insurance</p>
          <p className="text-sm text-portfolio-text-light leading-relaxed">
            Insurance Type (a long list including Property, Casualty, Liability, Flood, Business
            Interruption, Environmental, Key Man, Private Mortgage Insurance, Master Condo, Crop,
            Equipment, Auto), Policy Number, Insurance Company, Coverage Amount, Minimum Coverage
            Required, Expiration Date, Insurance Certificate Included, and expanded sections for
            Policyholder Details, Agent Details, Coverage Information (Policy Term, Coverage Limit,
            Maximum Deductible), and Premiums &amp; Payments (Premium Amount, Frequency, Payment
            Due Date). An expiry warning reads "This policy will expire on [Date]."
          </p>
        </div>
        <div>
          <p className="font-semibold text-portfolio-text-dark mb-2">Title Search &amp; Insurance (updated)</p>
          <p className="text-sm text-portfolio-text-light leading-relaxed">
            Liens &amp; Judgements now carry a Creditor, a Type (Deed of Trust, Mortgage, Judgement,
            HOA, State Tax Lien, UCC Filing), Amount, and Status (Open, Requested, Closed); Taxes
            carry Tax Name, Tax Amount, Current and Previous Due Dates.
          </p>
        </div>
        <div>
          <p className="font-semibold text-portfolio-text-dark mb-2">Comparable</p>
          <p className="text-sm text-portfolio-text-light leading-relaxed">
            Separate Sale and Lease comparables for the current property. Sale: Property Address,
            Sale Date, Sale Price, $/Sq. Ft., Cap Rate, Classification (for example Class A), Square
            Feet, Number of Units, Lot Size, Year Built, Year Renovated, distance ("0.4 Miles
            Away"). Lease: Lease Date, Lease Term, Monthly Rent, Annual Rent, Total Lease Value,
            Lease Rate per Sq. Ft., Lease Type (for example Absolute Net). A Radius control searches
            by distance, an empty result says "No comparable found. Try adjusting the radius," and
            a Natural Language smart search accepts queries typed as sentences (the frame's examples
            begin "Retail leases in Manhattan in…").
          </p>
        </div>
        <div>
          <p className="font-semibold text-portfolio-text-dark mb-2">Residential For-Sale (expanded)</p>
          <p className="text-sm text-portfolio-text-light leading-relaxed">
            A development-oriented field set rather than a property-facts set: Zoning, Legal
            Description, Parcel Number, Total Acreage, Builder Type, Project Amenities, Number of
            Model Types, competing developments (count, price range, monthly absorption), Lot
            Information (Number of Lots, Lot Size, Lots Absorbed per Period, Beginning Sale Price
            per Lot, Lot Takedown Frequency, Finished Lot Contract Purchaser), Pad fields (Number of
            Pads, Pad Size, Pad Price), and projected monthly and quarterly absorption per product
            type (single-family, townhouse, condominium). This is the clearest example in the file
            of how much the property-facts component differs by sub-type.
          </p>
        </div>
        <div>
          <p className="font-semibold text-portfolio-text-dark mb-2">Collateral Overview and Record</p>
          <p className="text-sm text-portfolio-text-light leading-relaxed">
            Metropolitan Statistical Area (MSA), Core Unique ID, Collateral Code (RE-101),
            Collateral Valuation Source (for example Appraisal), Copy, Edit, and Delete Collateral,
            and a file upload for a new version of a document.
          </p>
        </div>
        <div className="rounded-xl bg-portfolio-bg-light p-6">
          <p className="font-semibold text-portfolio-text-dark mb-2">What This Changes</p>
          <p className="text-sm text-portfolio-text-light leading-relaxed">
            Environmental, Insurance, and Title Search appear in the file on an agricultural record
            (Grape Farms) as well as on real-estate records, confirming the component-library
            design — these are shared due-diligence components, not CRE-only screens. The
            natural-language comparable search is a second place, after the Fleet AI Rule, where
            the file shows typing a sentence instead of filling a form — both shipped.
          </p>
        </div>
      </div>
    ),
  },
  {
    title: 'Role',
    content: (
      <p className="text-sm text-portfolio-text-light leading-relaxed">
        Foundational designer and de facto business analyst for the Commercial Real Estate
        collateral category, translating appraisal, title, flood, tax, and environmental
        due-diligence requirements into the record structure, the sub-type builder, and the field
        specs, in addition to the UI/UX design work.
      </p>
    ),
  },
];

const images = [
  { filename: 'cre-collateral-record-overview.png', caption: 'CRE collateral record — Overview tab' },
  { filename: 'cre-component-builder.png', caption: 'Admin → Collateral Management — sub-type component builder' },
  { filename: 'cre-multi-property-loan-linking.png', caption: 'Loan-side view — exposure aggregated across linked properties' },
  { filename: 'cre-appraisal-review-checklist.png', caption: 'Review tab — USPAP/FIRREA compliance checklist' },
  { filename: 'cre-evaluation-tab.png', caption: 'Evaluation tab' },
  { filename: 'cre-comparable-map-list-view.png', caption: 'Synchronized map/list comparable view with persistent filter panel' },
  { filename: 'cre-order-flood-mismo.png', caption: 'Order Flood — MISMO request flow' },
  { filename: 'cre-ucc-register.png', caption: 'Lien & Perfection — UCC register and filing flows' },
];

const closingReflection = [
  'CRE showed that the right unit of design is the component, not the screen. Twelve sub-types mostly need the same due-diligence data (appraisal, flood, title, tax, environmental, insurance, lien) with a different property-facts component, so building sub-types from a shared library keeps them consistent and makes a thirteenth a configuration task. The same components appear on an agricultural record in the file, which confirms the point.',
  'The other lesson is to model each due-diligence item as the process it is: three appraisal workflows, a staged environmental trail, a UCC register of filings with their own lifecycle. A status field would have hidden exactly what a reviewer needs to see.',
];

const CreComparableCaseStudyPage = () => {
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
          status={project.status}
          heroImage={img.hero}
          overviewText="Commercial Real Estate is the collateral category with the most third-party integration surface and the most compliance-driven due diligence in the platform. Unlike Investment collateral, where value comes from a live pricing feed and one admin screen governs eligibility, a CRE record has to assemble evidence from independent sources (appraisal, comparables, flood certification, title, tax assessment, environmental screening, insurance, and lien search) into a single record a credit officer, a compliance reviewer, and an examiner can all rely on. A single loan may also be secured by more than one CRE property at once."
          problemTitle="Two Design Problems"
          problemText="Two design problems sit under that: the record, and the workflow."
          problemDetails={[
            {
              title: 'The Record',
              body: 'Twelve property sub-types that mostly need the same due-diligence data but different property facts.',
            },
            {
              title: 'The Workflow',
              body: 'Each due-diligence component (appraisal, flood, UCC, title) is its own process with its own actors, documents, and regulatory weight, not a form field.',
            },
          ]}
          hardDecisionImage={img.componentLibrary}
          hardDecisionIntro="The Problem: twelve property types mostly need the same due-diligence data (every one needs an appraisal, a flood determination, title, tax, and insurance) but different property facts (beds and pad sites for healthcare and manufactured housing, loading docks and clear height for industrial, rooms and RevPAR for hospitality, absorption and lot takedown for for-sale residential). Twelve bespoke record designs would drift apart; one universal form would show most fields as irrelevant on most sub-types."
          hardDecisionBody="The Decision: treat due-diligence components as a shared library and the property-facts component as the variable part. An administrator builds a sub-type by selecting components and fields rather than requesting a new screen, and every sub-type inherits identical Appraisal, Flood, Title, Tax, Insurance, and Lien behavior."
          hardDecisionPoints={[
            'An analyst who learns the record on one sub-type already knows it on all twelve, and adding a thirteenth is a configuration task.',
            'Most components carry the same data across sub-types, and the builder is the mechanism that makes that true.',
          ]}
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

export default CreComparableCaseStudyPage;
