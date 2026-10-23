import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import { SEOHead } from '@/components/SEOHead';
import CaseStudyPageLayout from '@/components/CaseStudyPageLayout';
import EquipmentSerialDiagram from '@/components/motion/EquipmentSerialDiagram';
import { caseStudies } from '@/utils/data/caseStudies';

const project = caseStudies.find((p) => p.id === 15)!;

// Local filenames under /case-studies/ — ImagePlaceholder shows an "Export Needed" box
// with the expected filename until the Figma frame is exported to that path.
const img = {
  hero: 'eqd-equipment-form.png',
  serialCheck: 'eqd-serial-realtime-check.png',
  linked: 'eqd-collateral-linked.png',
  typeSelector: 'eqd-equipment-type.png',
  location: 'eqd-equipment-location-map.png',
  adminBuilder: 'eqd-equipment-admin-builder.png',
  deposit: 'eqd-deposit-admin.png',
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

const equipmentTypes = [
  'Agricultural', 'Gym & Fitness', 'Material Handling', 'Construction', 'IT & Technology',
  'Medical', 'Energy & Renewable Energy', 'Laboratory', 'Transportation', 'Entertainment',
  'Manufacturing', 'Restaurant & Food Service', 'Environmental',
];

const adminFamilies = [
  'Agricultural', 'Construction', 'Energy & Renewable Energy', 'Entertainment', 'Environmental',
  'Gym & Fitness', 'IT & Technology', 'Laboratory', 'Manufacturing', 'Material Handling',
  'Medical', 'Office', 'Restaurant & Food Service', 'Transportation',
];

const adminSections = [
  'Serial Number', 'Dimensions', 'Condition', 'Pricing', 'Maintenance & Warranty', 'Damage',
  'Appraisal',
];

const keyDecisions = [
  {
    title: 'Reuse the Collateral Record Instead of Retyping',
    body: 'When a serial matches existing collateral, the form fills from that record, shows its photos, and confirms "Collateral successfully linked." Adding equipment to a loan is a link to the asset, consistent with the pledge/link model used across the platform.',
    image: img.linked,
  },
  {
    title: 'Type Determines the Form',
    body: 'Choosing Equipment Type or Vehicle Type shapes the fields (a vehicle asks for Manufacturer; an agricultural item asks for Agriculture Type). Thirteen equipment families share one flow without a 13-way form.',
    image: img.typeSelector,
  },
  {
    title: 'A Readable Name, Generated',
    body: 'The record title is composed from year, make, model, and type ("2023 John Deere 8R 370 Tractor") with the collateral ID, so lists of equipment are scannable without opening each.',
  },
  {
    title: 'Location Is Structured and Mapped',
    body: 'Equipment location is a full address with a map, because where a movable asset physically sits matters for repossession and for inspection.',
    image: img.location,
  },
  {
    title: 'One Component Per Equipment Family',
    body: 'The admin builder gives each equipment family (medical, laboratory, construction, and so on) its own details component rather than one giant equipment form. Condition, pricing, warranty, damage, and appraisal sections are shared building blocks. A lender that only finances medical equipment configures only that family; one that finances several selects several.',
    image: img.adminBuilder,
  },
  {
    title: 'Deposit Is Configuration, Not a Custom Build',
    body: 'A new liquid-asset category is assembled in the same component builder, with its own Details component and the same policy fields. Deposits needed only their own data model, not their own tooling.',
    image: img.deposit,
  },
];

const additionalSections = [
  {
    title: 'Checked as You Type',
    content: <EquipmentSerialDiagram />,
  },
  {
    title: 'The System',
    content: (
      <>
        <p className="text-xs text-portfolio-text-light italic mb-6">
          Source: about 25 frames in the CYNC Figma file (Equipment on a loan, and Deposit
          administration). Serial numbers, prices, and addresses in the frames are sample data.
        </p>

        <p className="font-semibold text-portfolio-text-dark mb-2">Equipment on a loan</p>
        <ul className="space-y-2 text-sm text-portfolio-text-light leading-relaxed mb-3 list-disc pl-5">
          <li>
            <Strong>Empty state:</Strong> <Quote>No Equipment have been added to this loan</Quote>,
            with an <Strong>Add Equipment</Strong> action.
          </li>
          <li>
            <Strong>Equipment Type</Strong> selector, shown below.
          </li>
          <li>
            <Strong>Vehicle Type</Strong> path (for example Car) with Manufacturer, for
            transportation assets.
          </li>
          <li>
            <Strong>Equipment form:</Strong> Year, Serial Number (required), Make, Model, Estimated
            Price, Equipment Condition (for example New), an Agriculture Type for agricultural
            equipment (for example Tractor), and an <Strong>Equipment Location</Strong> (Address 1,
            Address 2, City, State/Province/Territory, ZIP/Postal Code, Country) with a Map.
          </li>
          <li>
            <Strong>Media:</Strong> photos from the collateral record are displayed in the form (
            <Quote>View Photos</Quote>).
          </li>
          <li>
            <Strong>Real-time check:</Strong> the form states{' '}
            <Quote>The system checks collateral in real time</Quote>, and a duplicate or conflicting
            serial shows an <Strong>ERROR!</Strong> state.
          </li>
          <li>
            <Strong>Outcomes:</Strong> <Quote>Collateral successfully linked</Quote> when the serial
            matches existing collateral, and <Quote>Equipment successfully edited</Quote> on edit.
            The saved record reads like <Quote>2023 John Deere 8R 370 Tractor</Quote>, generated
            from its fields.
          </li>
        </ul>
        <div className="mb-8">
          <Chips items={equipmentTypes} />
        </div>

        <p className="font-semibold text-portfolio-text-dark mb-2">Admin: the Equipment builder</p>
        <p className="text-sm text-portfolio-text-light leading-relaxed mb-3">
          Administration → Collateral Management → Equipment uses the same drag-and-drop component
          builder as every other category, with policy fields at the top (Collateral Code such as
          VE-101 for vehicles, Recovery Rate %, Maximum Lien Limit, Policy LTV %, Policy Collateral
          Discount %). Equipment is assembled from <Strong>one details component per equipment
          family</Strong>, each with an "X Type" selector and an "X Details" section. A Vehicle path
          covers <Quote>Cars: Sedans, SUVs, trucks, etc.</Quote>
        </p>
        <div className="mb-4">
          <Chips items={adminFamilies} />
        </div>
        <p className="text-sm text-portfolio-text-light leading-relaxed mb-3">
          Fields are organized into collapsible sections:
        </p>
        <div className="mb-3">
          <Chips items={adminSections} />
        </div>
        <p className="text-sm text-portfolio-text-light leading-relaxed mb-8">
          The field pool includes Make, Model, Year, Operating Hours, Power Requirements, Weight,
          Capacity/Performance Metrics, Equipment Condition, Condition Description, Functional
          Description, Damage Type, Purchase Price, Purchase Date, Market Value, Warranty
          Information, Maintenance History, Valuation Type, Value Estimation Method, Appraisal Firm,
          Appraiser, Appraisal Date, and Appraisal Effective Date. Saving confirms{' '}
          <Quote>Equipment Component successfully edited.</Quote>
        </p>

        <p className="font-semibold text-portfolio-text-dark mb-2">Deposit administration</p>
        <p className="text-sm text-portfolio-text-light leading-relaxed">
          In Administration → Collateral Management → Deposit, the category is built in the same
          drag-and-drop component builder as other categories: sub-types{' '}
          <Strong>Checking, Savings, Money Market, CD, Cash Management</Strong>; policy fields
          (Collateral Code, Recovery Rate %, Maximum Lien Limit, Advance Rate %, Policy Collateral
          Discount %); and a <Strong>Deposit Details</Strong> component with Holder/Signer Name,
          Holder/Signer Title, Account Number, Financial Institution Name, Deposit Type, Account
          Balance, As Of Date, an address block, and Book Entry / Certificated. Shared components
          (Appraisal, Environmental, Title, Insurance, Flood, Land, and other category field sets)
          are available from the same library. A Liquid Assets type selector spans
          Deposits/Certificates of Deposit, Securities, Letter of Credit, and Life Insurance.
        </p>
      </>
    ),
  },
  {
    title: 'Related Work',
    content: (
      <p className="text-sm text-portfolio-text-light leading-relaxed">
        Linking equipment to a loan follows the model in{' '}
        <Link to="/work/collateral-pledge-link" className="text-portfolio-accent underline hover:no-underline">
          Linking Collateral to Loans: Pledge, Link, and Unlink
        </Link>
        . The same builder assembles{' '}
        <Link to="/work/agriculture-collateral" className="text-portfolio-accent underline hover:no-underline">
          Agriculture Collateral
        </Link>{' '}
        and{' '}
        <Link to="/work/commercial-real-estate-collateral" className="text-portfolio-accent underline hover:no-underline">
          Commercial Real Estate Collateral
        </Link>
        .
      </p>
    ),
  },
  {
    title: 'Role',
    content: (
      <p className="text-sm text-portfolio-text-light leading-relaxed">
        Designer of the Equipment and Deposit collateral flows shown in the CYNC Figma file.
      </p>
    ),
  },
];

const images = [
  { filename: img.hero, caption: 'Equipment form on a loan' },
  { filename: img.serialCheck, caption: 'Real-time serial check — ERROR! state' },
  { filename: img.linked, caption: '"Collateral successfully linked"' },
  { filename: img.location, caption: 'Equipment Location with map' },
  { filename: img.adminBuilder, caption: 'Equipment admin builder — one component per family' },
  { filename: img.deposit, caption: 'Deposit administration — Deposit Details component' },
];

const closingReflection = [
  'Equipment and deposits sit at opposite ends of tangibility, and the lesson from putting them side by side is that the same patterns hold. Identity is the key field (the serial number for equipment, the account for a deposit), the system checks it as the user types, and a new category is assembled in the same builder with its own details component instead of its own tooling.',
  'The equipment builder reinforced it: one details component per equipment family, with shared sections for condition, pricing, warranty, damage, and appraisal, keeps thirteen families usable without thirteen forms.',
];

const EquipmentDepositCollateralCaseStudyPage = () => {
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
          overviewText="Equipment is financed one asset at a time and identified by what makes it unique: type, year, make, model, serial number, condition, and location. Deposits are secured by a balance held at a financial institution, with a very different set of facts: holder, account number, type, balance, and as-of date."
          problemTitle="Little in Common, Same Patterns"
          problemText="The two categories have little in common, which is the point: the system handles both through the same patterns."
          hardDecisionImage={img.serialCheck}
          hardDecisionIntro="The Serial Number Is the Identity."
          hardDecisionBody="The problem: the same piece of equipment can be financed twice, or pledged on two loans, by mistake or by fraud. The serial number is the only reliable key. The decision: Serial Number is a required field, and the system checks it against collateral in real time, either linking to an existing record or raising an error. The check happens as the analyst types, not after a downstream review."
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

export default EquipmentDepositCollateralCaseStudyPage;
