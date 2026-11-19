import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import { SEOHead } from '@/components/SEOHead';
import CaseStudyPageLayout from '@/components/CaseStudyPageLayout';
import ImagePlaceholder from '@/components/ImagePlaceholder';
import { caseStudies } from '@/utils/data/caseStudies';

const project = caseStudies.find((p) => p.id === 21)!;

// Exports from the CYNC Figma file, under /case-studies/collateral-lifecycle-screens/.
const img = {
  list: 'collateral-lifecycle-screens/01-relationship-collateral-list.png',
  create: 'collateral-lifecycle-screens/02-create-collateral.png',
  created: 'collateral-lifecycle-screens/03-created-confirmation.png',
  loanSecurity: 'collateral-lifecycle-screens/04-loan-security-empty.png',
  pledgedLoans: 'collateral-lifecycle-screens/05-pledged-loans-status.png',
};

const Strong: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="font-semibold text-portfolio-text-dark">{children}</span>
);

const Quote: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="font-medium text-portfolio-text-dark">"{children}"</span>
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

const keyDecisions = [
  {
    title: 'One Status That Is Derived, Not Typed',
    body: 'The file\'s annotations describe a collateral\'s status (Available, Pending, Active) as following from the asset\'s loans, not as something the user sets: pledged to an unbooked loan is Pending, pledged to a booked loan is Active, and pledged to nothing is Available. A manually edited status would drift from reality. A derived one is always as current as the loans, and the list answers the question a banker asks most: "what can I still lend against?"',
    image: img.pledgedLoans,
  },
  {
    title: 'Make the Dangerous Action Impossible, Then Explain It',
    body: 'Deleting pledged collateral is blocked outright, with a message that says what to do first ("must be unpledged before it can be deleted"). The delete warning for unpledged collateral names the consequence ("All data related to this collateral record will be removed"). The riskiest action gets two layers: it can\'t happen when it would orphan a pledge, and it can\'t happen silently when it can.',
  },
  {
    title: 'Copy Instead of Retype',
    body: 'A borrower with several similar assets (four buildings, a fleet of vehicles) shouldn\'t enter the same type, owner, and valuation source four times. Copy creates the records in one step, gives each a distinct ID, and marks them "Copy" so they can\'t be confused with the original. The Number of Collateral Copies field appears only at copy time, because it has no meaning when editing.',
  },
  {
    title: 'Let the User Choose What Happens After Create',
    body: 'The creation confirmation offers View Collateral Record or Close. A banker adding several assets stays on the list, and one who wants to fill in details goes straight to the record. It also explains the resulting status: a newly created collateral shows as Available because nothing is pledged to it yet.',
    image: img.created,
  },
  {
    title: 'Show Ownership, Not Just Existence',
    body: 'Create and edit capture Collateral Owner, Primary Owner, and Ownership Percentage, and the list can include collateral held by affiliated entities. In commercial lending the asset is often held by a related LLC, not the borrower, so the owner and percentage matter to the lending decision.',
  },
];

const additionalSections = [
  {
    title: 'The Collateral List on a Relationship',
    content: (
      <>
        <p className="text-xs text-portfolio-text-light italic mb-6">
          Source: about 45 frames in the CYNC Figma file (Collateral Section in Relationship Module,
          Relationship: Collateral, and the Create Task / Create Collateral frames on a loan
          application). Entity names, IDs, dollar amounts, and dates in the frames are placeholder
          data. Several explanatory notes in the frames are the designer's own annotations, quoted
          here as the file's rules, not as shipped behavior.
        </p>
        <P>
          A table of the borrower's collateral, with Collateral Name, Collateral ID, Collateral
          Type, Collateral Sub-Type, <Strong>Status</Strong>, and Collateral Value, plus per-column
          search, a column chooser, and row actions: <Strong>Edit Collateral</Strong>,{' '}
          <Strong>Copy Collateral</Strong>, <Strong>Pledged Loans</Strong>, and{' '}
          <Strong>Delete Collateral</Strong>. The wider table adds Policy LTV, Advance Rate, Policy
          Collateral Discount, Maximum Loan Per Policy, Available Equity to Margin, Available
          Equity, Recovery Rate, Current and Proposed Collateral LTV, Current and Third-Party Loan
          Commitments, Total Current Loan Commitments, and Discounted Collateral Value, Coverage,
          and Discount Value. An <Strong>Affiliations</Strong> selector adds collateral held by
          related entities (grouped, for example, by building). When a relationship has none, the
          empty state reads <Quote>No collateral has been created for this relationship.</Quote>
        </P>
        <Shot file={img.list} caption="Relationship Collateral list with Available and Pending statuses" />
      </>
    ),
  },
  {
    title: 'Create Collateral',
    content: (
      <>
        <P>
          <Strong>Create Collateral</Strong> opens a form on the relationship: Collateral Name,
          Collateral Type and Sub-Type (both required), Collateral Owner, Primary Owner, Ownership
          Percentage, Address, Valuation Date, Collateral Valuation Source, and Description (3,000
          characters). A Collateral Code (RE-101 in the sample) is shown with the sub-type. On
          success, a confirmation modal reads{' '}
          <Quote>[Name] collateral successfully created</Quote>, with{' '}
          <Strong>View Collateral Record</Strong> and <Strong>Close</Strong>, so the user chooses
          between going to the record and staying on the relationship. A note on one frame says
          four collateral records were created at the same time.
        </P>
        <Shot file={img.create} caption="Create Collateral on the relationship, including Number of Collateral Copies" />
        <P>
          <Strong>From the loan application.</Strong> On a loan application (Application,
          Activity, Tasks, Documents, Communication, Credit Memo, Term Sheet, Spread Highlights,
          Security), the <Strong>Security</Strong> section opens empty (
          <Quote>No Security has been added</Quote>) with <Strong>Create Collateral</Strong> and{' '}
          <Strong>Create Task</Strong> actions. The user starts a collateral record from the loan
          they are working on, and the loan's header (loan number, stage, status, projected and
          estimated closing dates, relationship manager) stays in view.
        </P>
        <Shot file={img.loanSecurity} caption="Loan application Security section, empty, with Create Collateral" />
      </>
    ),
  },
  {
    title: 'Copy, Edit, and Delete',
    content: (
      <>
        <P>
          <Strong>Copy Collateral</Strong> asks for a <Strong>Number of Collateral Copies</Strong>{' '}
          and creates that many new records of the same type and sub-type, each with its own
          Collateral ID and the word "Copy" added to the name. The designer's note states that the
          field is not shown when editing, and that cancelling a half-completed copy shows a
          warning (
          <Quote>You are about to exit without copying collateral. Do you want to continue?</Quote>
          ). Confirmation: <Quote>[Name] Copy successfully copied.</Quote>
        </P>
        <P>
          Edit confirms with <Quote>[Name] successfully edited.</Quote> Delete warns{' '}
          <Quote>
            This will delete the collateral record. All data related to this collateral record
            will be removed. Do you want to continue?
          </Quote>{' '}
          and confirms <Quote>[Name] successfully deleted.</Quote> A collateral that is pledged to
          a loan can't be deleted:{' '}
          <Quote>ERROR! Pledged collateral must be unpledged before it can be deleted.</Quote> The
          frame notes that the user must first unpledge, and then delete.
        </P>
      </>
    ),
  },
  {
    title: 'Status, as the File Defines It',
    content: (
      <>
        <P>Annotations on the frames define the lifecycle:</P>
        <UL>
          <li>
            <Strong>Available:</Strong> the collateral has been created but is not pledged to any
            loan (<Quote>This collateral has not been pledged to any loans.</Quote>).
          </li>
          <li>
            <Strong>Pending:</Strong> the collateral is pledged to a loan that has not yet booked.
          </li>
          <li>
            <Strong>Active:</Strong> the collateral is pledged to a booked loan.
          </li>
          <li>
            Loan status is stated alongside: a loan is <Strong>Active</Strong> while not yet
            approved, approved, or booked, and <Strong>Inactive</Strong> when it is paid off, or
            when an original loan goes for modification and the modification loan is booked.
          </li>
        </UL>
        <P>
          A Pledged Loans view for one collateral lists each loan's Loan Name, Stage, Amount
          Pledged, Aggregate Pledged Percentage, Lien Position (1st), and status.
        </P>
      </>
    ),
  },
  {
    title: 'Related Work',
    content: (
      <P>
        The pledge relationship itself is covered in{' '}
        <Link to="/work/collateral-pledge-link" className="text-portfolio-accent underline hover:no-underline">
          Linking Collateral to Loans: Pledge, Link, and Unlink
        </Link>
        . For the wider collateral module, see the{' '}
        <Link to="/work/cync-collateral-platform" className="text-portfolio-accent underline hover:no-underline">
          Cync Collateral Platform
        </Link>
        .
      </P>
    ),
  },
  {
    title: 'Role',
    content: <P>Designer of the Relationship collateral and loan-application Security flows shown in the CYNC Figma file.</P>,
  },
];

const closingReflection = [
  'The lesson of this work is that the entry point matters as much as the screen. The same collateral record serves a credit analyst who starts from the asset and a banker who starts from the borrower, so the design adds a door from each side instead of building a second system.',
  "The second lesson is to let state be derived and actions be guarded. A status computed from the loans can't be wrong, and a delete that refuses to orphan a pledge can't do damage. Both take effort to design and are invisible when they work.",
];

const CollateralLifecycleCaseStudyPage = () => {
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
          heroImage={img.list}
          overviewText="Collateral is usually discussed from the asset's side: its appraisal, its documents, its loans. But a relationship manager starts from the borrower. They want to see everything this client could pledge, add something new while on a call, copy a similar asset instead of retyping it, and know which assets are free and which are already committed."
          problemTitle="Starting From the Borrower"
          problemText="The design puts a Collateral section inside the Relationship module, alongside Exposure Summary, Account Summary, Affiliations, Financial Summary, Wiring Instructions, Servicing Group, Relationship Covenants, Relationship Files, and Credit Report. It also puts a Create Collateral action inside a loan application's Security section. The harder design problem is the lifecycle: what each action does to an asset's status, and what must stop a user from breaking it."
          hardDecisionIntro="Meet the Relationship Manager Where They Start."
          hardDecisionBody={'The problem: a banker thinks "my client," not "this asset." Making them navigate to a separate collateral module, find the right record, and come back loses the thread of the conversation. The decision: collateral is a first-class section of the Relationship, with its own list, its own create, edit, and copy actions, and the metrics a banker cares about (value, available equity, maximum loan per policy) in the list itself. The same capability is reachable from the loan application\'s Security section.'}
          keyDecisions={keyDecisions}
          additionalSections={additionalSections}
          closingReflection={closingReflection}
        />
      </div>
      <Footer />
    </div>
  );
};

export default CollateralLifecycleCaseStudyPage;
