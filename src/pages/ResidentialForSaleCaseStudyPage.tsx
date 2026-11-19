import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import { SEOHead } from '@/components/SEOHead';
import CaseStudyPageLayout from '@/components/CaseStudyPageLayout';
import ImagePlaceholder from '@/components/ImagePlaceholder';
import { caseStudies } from '@/utils/data/caseStudies';

const project = caseStudies.find((p) => p.id === 20)!;

// Exports from the CYNC Figma file, under /case-studies/residential-for-sale-screens/.
const img = {
  propertyAbsorption: 'residential-for-sale-screens/01-record-property-and-absorption.png',
  lots: 'residential-for-sale-screens/02-record-lot-information.png',
  pads: 'residential-for-sale-screens/03-record-condominium-pads.png',
  builder: 'residential-for-sale-screens/04-admin-builder.png',
  preview: 'residential-for-sale-screens/05-admin-preview.png',
  editPropertyType: 'residential-for-sale-screens/06-edit-property-type.png',
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
    title: 'Capture Competing Projects Beside the Subject',
    body: 'The component includes the number of competing new developments, their price ranges, and their monthly absorption. Absorption in the subject project only means something against the market it sells into. Keeping both side by side on one record makes a claim like "we\'ll sell six lots a month" something a reviewer can test.',
  },
  {
    title: 'Repeaters Where Quantities Come in Groups',
    body: 'Lots come in sizes and contract purchasers come in numbers, so the form uses Add Lot and Add Contract Purchaser repeaters, with Remove on each row, rather than a fixed number of fields. A project with two lot sizes and one with five use the same screen.',
  },
  {
    title: 'Specific Questions, Controlled Answers',
    body: 'Property Type, Builder Type, Project Amenities, Lot Takedown Frequency, and Lot Purchase Contract in Place are pick lists or Yes / No, not free text. Consistent answers can be compared and reported across a portfolio of projects, and the administrator can change the list without engineering.',
    image: img.editPropertyType,
  },
  {
    title: 'The Field Set Is Configuration, Not Code',
    body: 'A development has many possible fields, and no single lender needs all of them. The administrator chooses which fields appear, previews the result, and can edit the Property Type options. The same builder pattern handles this sub-type and every other, so the For-Sale component inherits the policy fields, the section list, and the confirmation behavior without custom work.',
  },
  {
    title: 'Same Record, Same Header, Same Safeguards',
    body: 'The record carries the platform\'s header metrics, the same edit and exit warnings, and the same success sentence as every other collateral type. A user who has edited an agriculture record already knows how to edit this one, even though its fields are entirely different.',
  },
];

const additionalSections = [
  {
    title: 'On the Collateral Record',
    content: (
      <>
        <p className="text-xs text-portfolio-text-light italic mb-6">
          Source: about 70 frames in the CYNC Figma file (51 "Collateral record: Residential For
          Sale" frames and 20 "Admin: Residential For Sale" frames). Names, quantities, and dates in
          the frames are placeholder data.
        </p>
        <P>
          The record opens with the standard header (Policy LTV, Recovery Rate, Current and
          Proposed LTV, loan commitments, available equity) and a{' '}
          <Strong>Residential For-Sale</Strong> section, edited in place with a confirmation (
          <Quote>Residential For-Sale Info successfully edited.</Quote>) and an exit guard (
          <Quote>
            You are about to exit without editing the Residential For-Sale info. Do you want to
            continue?
          </Quote>
          ). The section's fields fall into groups:
        </P>
        <UL>
          <li>
            <Strong>Property basics:</Strong> Property Type, Tax/Assessor's Parcel Number, Legal
            Description (250-character counter), Zoning, Total Acreage, and Projected Year of
            Completion (Sell Out).
          </li>
          <li>
            <Strong>Property Type</Strong> is a pick list with Single-Family Detached, Townhouse
            Units, Condominiums, Planned Unit Development (PUD), and Lot Development.
          </li>
          <li>
            <Strong>Project:</Strong> Builder Type, Project Amenities, Number of Model Types, Number
            of Finished House Model &amp; Lot Types, and Average Unit Size.
          </li>
          <li>
            <Strong>Lot Information:</Strong> Total Number of Lots Approved for Development, Types
            of Lots, an <Strong>Add Lot</Strong> repeater (Lot Size, Number of Lots per Size, Number
            of Lots), Lots Absorbed per Period, Lot Takedown Frequency (Monthly, Quarterly),
            Beginning Sale Price per Lot (per Contract), and Annual/Quarterly/Monthly Price
            Increases on a per-Lot Basis (per Contracts).
          </li>
          <li>
            <Strong>Contract in place:</Strong> Lot Purchase Contract in Place (Yes / No) and
            Finished Lot Contract Purchaser(s), with an <Strong>Add Contract Purchaser</Strong>{' '}
            control.
          </li>
          <li>
            <Strong>Pads and condominiums:</Strong> Number of Pads, Pad Size (in Square Feet),
            Number of Units per Pad, Pad Price (per Total Square Foot), Pads Absorbed per Period,
            Average Condo Size, Number of Buildings, Number of Floors, Elevators, and Construction
            Type.
          </li>
          <li>
            <Strong>Completed units:</Strong> Completed Units (Total Square Feet), Completed Unit
            Price Range, Total Number of Units, and Average Square Feet per Unit.
          </li>
          <li>
            <Strong>Absorption:</Strong> Projected Monthly and Quarterly Absorption, and Monthly
            Absorption per Single-Family Development, Townhouse, and Condominium Contract (After 6
            Months).
          </li>
          <li>
            <Strong>Competing projects:</Strong> Number of Competing New Developments in Area, Price
            Range of Units in Competing Developments, and Monthly Absorption of Competing Projects.
          </li>
        </UL>
        <Shot
          file={img.propertyAbsorption}
          caption="Property basics, absorption, and competing projects"
        />
        <P>Different frames show different groups, for example lot fields in some and pad and building fields in others.</P>
        <Shot file={img.lots} caption="Lot Information: Single-Family lots with lot size, contract price, and takedown frequency" />
        <Shot file={img.pads} caption="Condominiums: pad size, units per pad, and pad price" />
      </>
    ),
  },
  {
    title: 'In Administration',
    content: (
      <>
        <P>
          Under Administration &gt; Collateral Management &gt; Real Estate &gt; Residential Real
          Estate, the sub-type is assembled in the same drag-and-drop builder as every other
          category: policy fields at the top (Recovery Rate, Maximum Lien Limit, Policy LTV,
          Collateral Code), a section list on the left, and a <Strong>Configure</Strong> panel on
          the right (<Quote>Drag &amp; Drop Components, Fields</Quote>) with a searchable library of
          components (Appraisal, Flood, Insurance, Title, Title Search, Environmental, Tax Assessed,
          Land, Equipment, Liquid Assets, Residential Owner-Occupied, Residential For-Sale, and
          others) and field groups (Real Estate, Land, Equipment, Inventory, and so on).
        </P>
        <Shot file={img.builder} caption="Residential Real Estate sub-type in the administration builder" />
        <P>
          The For-Sale field set is configured in a two-pane{' '}
          <Strong>Available / Selected Fields</Strong> transfer list, with search on both sides,
          select-all and move controls, a "No fields selected" empty state, and a live preview
          labeled <Quote>This is the preview of the section for the collateral record.</Quote>{' '}
          Groups such as Lot Information, Lot Types, and Property Type are collapsible within the
          preview.
        </P>
        <Shot file={img.preview} caption="Live preview of the section for the collateral record" />
        <P>
          Administrators can also <Strong>edit the Property Type list itself</Strong>: an Edit
          Property Type dialog lists the options and offers an Input Type (a Dropdown Field in the
          frames) with Field Name/Label, and confirms{' '}
          <Quote>Property Type successfully edited.</Quote> Other administrator actions confirm
          with the platform's standard sentence (
          <Quote>Tax Assessed Component successfully added to Tax Assessed Details.</Quote>).
        </P>
      </>
    ),
  },
  {
    title: 'Related Work',
    content: (
      <P>
        Residential For-Sale is assembled from the same builder as{' '}
        <Link to="/work/agriculture-collateral" className="text-portfolio-accent underline hover:no-underline">
          Agriculture
        </Link>{' '}
        and{' '}
        <Link to="/work/commercial-real-estate-collateral" className="text-portfolio-accent underline hover:no-underline">
          Commercial Real Estate
        </Link>
        , and carries the shared{' '}
        <Link to="/work/due-diligence-components" className="text-portfolio-accent underline hover:no-underline">
          due-diligence components
        </Link>
        .
      </P>
    ),
  },
  {
    title: 'Role',
    content: <P>Designer of the Residential For-Sale record and administration flows shown in the CYNC Figma file.</P>,
  },
];

const closingReflection = [
  'The lesson of this sub-type is to model the collateral the lender is actually lending against. For a builder, that is a plan with lots, contracts, prices, and absorption rates, and a form that only asked for an address, a value, and a square footage would have missed all of it.',
  'The second lesson is how little needs to change to support a very different asset. The builder, the header, the confirmations, and the exit guard stayed identical, and only the information component changed. That is what made it possible to add a development-finance collateral type without building a development-finance product.',
];

const ResidentialForSaleCaseStudyPage = () => {
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
          heroImage={img.lots}
          overviewText="A loan to a home builder isn't secured by a finished house. It is secured by land, lots, and a plan: how many lots are approved, how big they are, who has contracted to buy them and at what price, how fast comparable projects are selling, and when the project will sell out. The value of the collateral depends on that schedule, and almost none of it fits the fields of an ordinary real-estate record, which describe an existing building."
          problemTitle="A Development, Not a Building"
          problemText="The design gives Residential For-Sale its own information component with a development-oriented field set, keeps it inside the same record and builder as every other collateral type, and makes the field set itself configurable."
          hardDecisionIntro="Underwrite the Plan, Not Just the Dirt."
          hardDecisionBody="The problem: a builder's loan is repaid from future sales. The risk lies in the schedule: absorption rates, contract terms, and price increases per lot, not in the current appraised value of the land. The decision: the component captures the sell-out plan as structured data: lots by size, contracted purchasers and prices, takedown frequency, pad pricing, and projected monthly and quarterly absorption by product type. A credit officer can read the repayment assumptions from the record instead of from a separate memo."
          keyDecisions={keyDecisions}
          additionalSections={additionalSections}
          closingReflection={closingReflection}
        />
      </div>
      <Footer />
    </div>
  );
};

export default ResidentialForSaleCaseStudyPage;
