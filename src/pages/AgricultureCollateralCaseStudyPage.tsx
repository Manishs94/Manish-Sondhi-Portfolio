import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import { SEOHead } from '@/components/SEOHead';
import CaseStudyPageLayout from '@/components/CaseStudyPageLayout';
import AgricultureSubtypeDiagram from '@/components/motion/AgricultureSubtypeDiagram';
import { caseStudies } from '@/utils/data/caseStudies';

const project = caseStudies.find((p) => p.id === 11)!;

// Local filenames under /case-studies/ — ImagePlaceholder shows an "Export Needed" box
// with the expected filename until the Figma frame is exported to that path.
const img = {
  hero: 'ag-admin-builder.png',
  subTypeComponent: 'ag-livestock-information.png',
  picklist: 'ag-type-picklist.png',
  units: 'ag-commodity-crops-yield.png',
  sharedComponents: 'ag-shared-components.png',
  partyType: 'ag-party-type.png',
};

const Quote: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="font-medium text-portfolio-text-dark">"{children}"</span>
);

const subTypes = [
  { name: 'Commodity Crops', body: 'Commodity Crops Type (Corn, Soybeans, Wheat, Barley, Alfalfa, Oats, Cotton, Tobacco, Sugarcane, Rice), Number of Acres, Total Yield, Yield per Acre, Yield Type, Unit of Measurement, Crops Grown, Crops Status (including To Be Grown), Total Produced.' },
  { name: 'Dairy', body: 'Dairy Type (Milk, Cheese, Butter, Yogurt, Ice Cream), Processing Unit, Quantity, Units.' },
  { name: 'Fruit', body: 'Fruit Type (a long picklist), Number of Acre/Hectare, Yield per Acre/Hectare.' },
  { name: 'Livestock', body: 'Livestock Type (Cow, Pigs, Sheep, Goat), Breed, Animal Purpose (Breeding, For Market, For Raising, Brood, Both), Quantity.' },
  { name: 'Nurseries', body: 'Nursery Type, Number of Trees.' },
  { name: 'Orchard', body: 'Orchard Type (Apple, Citrus, Stone Fruit, Olive Grove, Almond, Pecan, Hazelnut, and others), Number of Trees, Number of Acre/Hectare.' },
  { name: 'Poultry', body: 'Poultry Type (Chicken, Turkey, Geese, Duck, Quail, and others), Purpose (Egg Production, Meat Production), Facility Type, Quantity.' },
  { name: 'Timber', body: 'Timber Type (Pine, Spruce, Fir, Cedar, Oak, Maple, Teak, and others), Estimated Timber Volume, Merchantable Timber Volume, volume units (Board Feet).' },
  { name: 'Vegetable', body: 'Vegetable Type (a long picklist), acreage, yield.' },
  { name: 'Fisheries', body: 'Fish Type, Water type (Freshwater, Salt), Acres/Pond Size/Area, Quantity.' },
  { name: 'Vineyard', body: 'Grape Type, Number of Bottles, Number of Liters, acreage.' },
  { name: 'Equine', body: 'Number of Horses, Age(s), Purpose.' },
  { name: 'Stables', body: 'Number of Stalls, Number of Structures, Total Square Feet, Height (in Feet), Construction Material, Physical Use.' },
];

const libraryComponents = [
  'Appraisal', 'Insurance', 'Flood', 'Environmental', 'Title Search', 'Land', 'Equipment',
  'Real Estate', 'Account Receivables', 'Inventory', 'Invoice', 'Market Securities', 'Automobiles',
];

const keyDecisions = [
  {
    title: 'Controlled Vocabularies Instead of Free Text',
    body: 'Type fields are pick lists (Fruit Type, Vegetable Type, Timber Type, Livestock Type, Poultry Type, Grape Type, Fish Type), with an "Other" path where the list can\'t be complete. Lists give consistent data to report on and compare across the portfolio; "Other" keeps an unlisted crop from blocking a record. A note in the file reads "You can add more values to this dropdown if needed," so the list is extendable by the lender.',
    image: img.picklist,
  },
  {
    title: 'Yield and Volume in the Unit the Industry Uses',
    body: 'Total Yield and Yield per Acre pair with an explicit Unit of Measurement (Pounds, Bushel, Tons, Kilogram, Gallons, Board Feet) instead of assuming one unit. Different commodities are measured differently, and an unlabeled number is a data-quality risk in a collateral record.',
    image: img.units,
  },
  {
    title: 'Built From the Same Components as Every Other Category',
    body: 'Agriculture is assembled in the same builder, from the same component library (Appraisal, Insurance, Flood, Land, Equipment, Real Estate), as Commercial Real Estate, Deposit, and Investment. Only the information component is agriculture-specific. A property-secured farm can carry Land and Appraisal components; an equipment-heavy operation can carry Equipment. The category stays consistent with the rest of the system while its own data stays specific.',
    image: img.sharedComponents,
  },
  {
    title: 'Party Type First',
    body: 'The entity section asks for Party Type before anything else, then shows only the matching fields (a name for an individual, a Business Name and Entity Type for an entity, "Other Entity Type" if none fits), reducing form noise and keeping legal-entity data structured.',
    image: img.partyType,
  },
];

const additionalSections = [
  {
    title: 'The Sub-Type Sets the Questions',
    content: <AgricultureSubtypeDiagram />,
  },
  {
    title: 'The System',
    content: (
      <>
        <p className="text-xs text-portfolio-text-light italic mb-6">
          Source: about 220 Agriculture frames in the CYNC Figma file (the largest single group in
          the file), including the administration builder and the collateral-record views. Sample
          values (farm names, yields, IDs) are placeholder data.
        </p>

        <p className="font-semibold text-portfolio-text-dark mb-2">
          Administration → Collateral Management → Agriculture
        </p>
        <p className="text-sm text-portfolio-text-light leading-relaxed mb-3">
          The administrator defines the category's sub-type policy at the top of the builder
          (Collateral Code, Recovery Rate %, Maximum Lien Limit, Policy LTV %) and builds the record
          by dragging components into sections: Agriculture Information, Buyer Information, plus
          shared components from the library:
        </p>
        <div className="flex flex-wrap gap-2 mb-3">
          {libraryComponents.map((c) => (
            <span
              key={c}
              className="px-3 py-1 bg-portfolio-bg-light text-portfolio-text-dark rounded-full text-xs font-medium"
            >
              {c}
            </span>
          ))}
        </div>
        <p className="text-sm text-portfolio-text-light leading-relaxed mb-8">
          Fields are chosen in a two-pane Available/Selected transfer list under a type selector (
          <Quote>Select Agriculture Type</Quote>). A live preview shows the section as it will
          appear on the collateral record, and saving confirms with{' '}
          <Quote>Agriculture Component successfully added.</Quote>
        </p>

        <p className="font-semibold text-portfolio-text-dark mb-4">
          The thirteen sub-types and their information
        </p>
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          {subTypes.map((t) => (
            <div key={t.name} className="rounded-xl bg-portfolio-bg-light p-5">
              <p className="font-semibold text-portfolio-text-dark mb-1 text-sm">{t.name}</p>
              <p className="text-xs text-portfolio-text-light leading-relaxed">{t.body}</p>
            </div>
          ))}
        </div>

        <p className="font-semibold text-portfolio-text-dark mb-2">Shared sections on every sub-type</p>
        <ul className="space-y-2 text-sm text-portfolio-text-light leading-relaxed mb-8 list-disc pl-5">
          <li>
            <span className="font-semibold text-portfolio-text-dark">Entity and ownership:</span>{' '}
            Party Type (Individual, Entity, Other), Entity Type (Association, Cooperative, Domestic
            Government Unit, Estate, Foreign Government Unit, General Partnership, Limited Liability
            Company, Sole Proprietorship, LLP, Trust, LP, Financial Institution, Other), Business
            Name, and First/Middle/Last/Suffix for individuals.
          </li>
          <li>
            <span className="font-semibold text-portfolio-text-dark">Buyer Information</span> — who
            the product is sold to.
          </li>
          <li>
            <span className="font-semibold text-portfolio-text-dark">Unit of Measurement</span> —
            Pounds, Bushel, Tons, Kilogram, Gallons, Board Feet.
          </li>
          <li>
            <span className="font-semibold text-portfolio-text-dark">
              Standard record header and tabs
            </span>
            , including the shared Lien &amp; Perfection (UCC) capability, which the file
            demonstrates on a Commodity Crops record.
          </li>
        </ul>

        <p className="font-semibold text-portfolio-text-dark mb-2">The exit guard</p>
        <p className="text-sm text-portfolio-text-light leading-relaxed">
          Leaving an agriculture information section with unsaved edits triggers a{' '}
          <Quote>
            You are about to exit without editing the Agriculture Information. Do you want to
            continue?
          </Quote>{' '}
          warning, and a successful save confirms{' '}
          <Quote>Agriculture Information successfully edited.</Quote>
        </p>
      </>
    ),
  },
  {
    title: 'Related Work',
    content: (
      <p className="text-sm text-portfolio-text-light leading-relaxed">
        The same builder and component library assemble{' '}
        <Link to="/work/commercial-real-estate-collateral" className="text-portfolio-accent underline hover:no-underline">
          Commercial Real Estate Collateral
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
        Designer of the Agriculture collateral administration and record flows shown in the CYNC
        Figma file.
      </p>
    ),
  },
];

const images = [
  { filename: img.hero, caption: 'Administration builder — Agriculture components and live preview' },
  { filename: img.subTypeComponent, caption: 'Livestock information component' },
  { filename: img.units, caption: 'Commodity Crops — yield with explicit unit of measurement' },
  { filename: img.picklist, caption: 'Type picklist with "Other" path' },
  { filename: img.partyType, caption: 'Entity and ownership — Party Type first' },
  { filename: 'ag-exit-guard.png', caption: 'Unsaved-changes exit guard' },
];

const closingReflection = [
  'Agriculture taught that variety should live in the data, not the screen count. Thirteen sub-types each get only the questions that make sense for them (head count for livestock, board feet for timber, bottles and liters for a vineyard), while the builder, the shared components, and the record header stay identical.',
  'Two small decisions carry the rest: controlled vocabularies with an "Other" path keep data reportable without blocking an unusual record, and explicit units on every yield and volume remove a quiet source of bad data. A form is good when it asks what a farmer would actually say.',
];

const AgricultureCollateralCaseStudyPage = () => {
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
          overviewText="Agricultural lending does not secure one kind of asset. A cattle operation, a vineyard, a timber stand, and a commodity-crop farm are valued by different measures (head count, bottles and liters, board feet, bushels per acre), carry different risks, and are described in different vocabulary."
          problemTitle="One Category, Many Kinds of Asset"
          problemText={'A single "Agriculture" form with every field would be unusable; thirteen unrelated screens would be unmaintainable. The design answers this by treating Agriculture as one category with thirteen sub-types, each configured with its own information component, all assembled in the same administration builder as the rest of the collateral system.'}
          hardDecisionImage={img.subTypeComponent}
          hardDecisionIntro="Sub-Type Determines the Questions, Not the Screen."
          hardDecisionBody="The problem: the information a lender needs depends entirely on what is being financed. Head count and breeding purpose matter for livestock and mean nothing for timber; merchantable board-feet matter for timber and mean nothing for a vineyard. The decision: each sub-type owns a component with only its own fields and its own vocabulary (Quantity for animals, Number of Trees for orchards, Number of Stalls for stables, Estimated and Merchantable Timber Volume for timber). An analyst entering a vineyard is never asked for a breed, and the record reads the way the farmer would describe the operation."
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

export default AgricultureCollateralCaseStudyPage;
