import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import { SEOHead } from '@/components/SEOHead';
import CaseStudyPageLayout from '@/components/CaseStudyPageLayout';
import CollateralPlatformDiagram from '@/components/motion/CollateralPlatformDiagram';
import { caseStudies } from '@/utils/data/caseStudies';

const project = caseStudies.find((p) => p.id === 3)!;

const gammaImages = {
  hero: 'https://cdn.gamma.app/avmi4uurdte9tfh/generated-images/eJyl7yzRc4FhENyKkRTp1.png',
  hardDecision: 'https://cdn.gamma.app/avmi4uurdte9tfh/generated-images/9RJJ9ro7MYlvRi52n_HTE.png',
  floodDetails: 'https://cdn.gamma.app/avmi4uurdte9tfh/generated-images/iM7e3oIoi73D5aVEDhKid.png',
  designSystem: 'https://cdn.gamma.app/avmi4uurdte9tfh/generated-images/UHt_APlBO2jLYrS9mD7C7.png',
  closing: 'https://cdn.gamma.app/avmi4uurdte9tfh/generated-images/8DFGrHgybl9uMIoyzUXqE.png',
};

const collateralCategories = [
  'Commercial Real Estate', 'NAV', 'Investment', 'Deposit', 'Accounts Receivable', 'Inventory',
  'Equipment', 'Agriculture', 'Subscription', 'Automobiles', 'Business',
];

const verifiedTabs = [
  { name: 'Overview', body: 'Name, type/sub-type, valuation (AVM run), ownership table, property address/attributes.' },
  { name: 'Collateral Files', body: 'Document storage for the record.' },
  { name: 'Pledged Loans', body: 'Internal / External / In-Process — lien type, lien position, maturity, original amount, outstanding balance.' },
  { name: '[Property-Type] Details', body: 'e.g. Office Details — varies per sub-type.' },
  { name: 'Appraisal Details', body: 'Appraisal / evaluation / review sub-tabs.' },
  { name: 'Comparable Details', body: 'Sale/lease comps.' },
  { name: 'Flood Details', body: 'Flood zone and certification status.' },
  { name: 'Environmental Screening', body: 'Environmental risk review.' },
  { name: 'Insurance Details', body: 'Coverage and policy tracking.' },
  { name: 'Tax Assessed Details', body: 'Assessed value and tax records.' },
  { name: 'Title Search Details', body: 'Title search results.' },
  { name: 'Lien & Perfection', body: 'UCC search/filing.' },
  { name: 'Encumbrance & Risk', body: 'Open liens, tax liens, PACE/HOA liens, foreclosure history — via on-demand search.' },
];

const headerMetrics = [
  'Policy LTV%', 'Policy Collateral Discount%', 'Collateral Discount Value',
  'Discounted Collateral Value', 'Discounted Collateral Coverage', 'Proposed LTV%',
  'Current Collateral LTV', 'Current/Third-Party/Total Loan Commitments', 'Available Equity',
  'Available Equity to Margin', 'Recovery Rate%',
];

const keyDecisions = [
  {
    title: 'Distinct Information Architecture Per Collateral Category',
    body: "The Problem: Commercial Real Estate, NAV, Investment, Deposit, Accounts Receivable, Inventory, Equipment, Agriculture, Subscription, Automobiles, and Business collateral don't just differ in field values — they differ in data model and structure. A Commercial Real Estate record centers on appraisal, flood certification, title search, and environmental screening. An Investment record centers on pricing, ISIN/CUSIP, advance rate, and eligibility status pulled from a securities master. These aren't the same shape of record with different fields switched on — they're different records.\n\nThe Decision: Each of the 11 collateral categories gets its own information architecture — its own tab set, its own field structure, its own third-party integration points (Dataverify for Real Estate's flood data, EODHD for Investment pricing) — unified only at the record-chrome level: shared header metrics (Policy LTV%, Discounted Collateral Value, Available Equity, etc.), shared action patterns, and shared audit behavior across every category. What's consistent is the record's outer behavior and governance layer, not its internal structure.\n\nFlood Details, within the Commercial Real Estate category specifically, runs in two modes off the same tab structure — auto-populated from Dataverify where that integration is active for a given institution, fully manual where it isn't — so an analyst moving between institutions with different integration states doesn't have to relearn that one tab's layout. This is a mode-switch within one category's architecture, not a pattern that generalizes across all 11 categories.",
    image: gammaImages.floodDetails,
  },
];

const additionalSections = [
  {
    title: 'Two Services, One Explicit Link',
    content: <CollateralPlatformDiagram />,
  },
  {
    title: 'Admin → Collateral Management (Taxonomy Layer)',
    content: (
      <>
        <p className="text-sm text-portfolio-text-light leading-relaxed mb-4">
          <span className="font-semibold text-portfolio-text-dark">
            11 collateral categories, each with a distinct information architecture and data model
          </span>{' '}
          — not a shared template with toggled fields:
        </p>
        <div className="flex flex-wrap gap-2 mb-6">
          {collateralCategories.map((cat) => (
            <span
              key={cat}
              className="px-3 py-1 bg-portfolio-bg-light text-portfolio-text-dark rounded-full text-xs font-medium"
            >
              {cat}
            </span>
          ))}
        </div>
        <p className="text-sm text-portfolio-text-light leading-relaxed mb-4">
          Each category carries its own sub-types beneath it, totaling{' '}
          <span className="font-semibold text-portfolio-text-dark">1,798 configured collateral types</span>{' '}
          and <span className="font-semibold text-portfolio-text-dark">2,344 sub-types</span> across
          the taxonomy — a granular configuration layer built up over years of institutional use,
          distinct from the 11 structural categories themselves. Full audit trail per type/sub-type
          (created-by/date, updated-by/date). Admin actions: Create Collateral Type, Create
          Collateral Sub-Type.
        </p>
        <p className="text-xs text-portfolio-text-light italic leading-relaxed border-l-2 border-gray-300 pl-4">
          For comparison: the lending industry broadly recognizes a small set of standard collateral
          categories — real estate, equipment, inventory, accounts receivable, and a handful of
          others. Cync's 11-category, 1,798-type taxonomy reflects the granular configuration depth
          needed to serve those categories consistently across many institutions and loan products,
          not 1,798 conceptually distinct kinds of collateral.
        </p>
      </>
    ),
  },
  {
    title: 'Admin → Investments Management',
    content: (
      <p className="text-sm text-portfolio-text-light leading-relaxed">
        The taxonomy layer's securities-specific counterpart — a securities master used wherever a
        Financial Asset is pledged as collateral. Investment collateral (securities) is structurally
        distinct enough from the record types above that it gets its own dedicated write-up —{' '}
        <Link to="/work/investment-collateral" className="text-portfolio-accent underline hover:no-underline">
          Investment Collateral: Securities as a Distinct Collateral Category
        </Link>
        . In short: eligibility, advance rate, and pricing live on the security record itself in
        Admin, and are inherited automatically by every loan that pledges it — not duplicated per
        loan, per borrower, or per collateral record.
      </p>
    ),
  },
  {
    title: 'Collateral Record — Commercial Real Estate (Worked Example)',
    content: (
      <>
        <p className="text-sm text-portfolio-text-light leading-relaxed mb-6">
          The Commercial Real Estate category's record structure —{' '}
          <span className="font-semibold text-portfolio-text-dark">
            one of 11 category-specific structures, not a universal template
          </span>
          . See the full{' '}
          <Link to="/work/commercial-real-estate-collateral" className="text-portfolio-accent underline hover:no-underline">
            Commercial Real Estate Collateral
          </Link>{' '}
          case study for the complete breakdown; verified tabs:
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
          <span className="font-semibold text-portfolio-text-dark">Header-level metrics</span>{' '}
          carried on the record: {headerMetrics.join(', ')}.
        </p>
      </>
    ),
  },
  {
    title: 'Relationships Module',
    content: (
      <p className="text-sm text-portfolio-text-light leading-relaxed">
        Each relationship (borrower/entity) record has a Collateral tab rolling up every piece of
        collateral pledged by that relationship and its affiliations — name, type, sub-type, value,
        ID, status — with a "Create Collateral" action scoped to that relationship. This is where
        cross-collateralization becomes visible: a single relationship's full collateral exposure,
        across every loan it's pledged against, in one grid.
      </p>
    ),
  },
  {
    title: 'Individual Loan Record',
    content: (
      <p className="text-sm text-portfolio-text-light leading-relaxed">
        Carries a "Collateral Information" tab surfacing whatever collateral is pledged specifically
        to that loan.
      </p>
    ),
  },
  {
    title: "How This Project Built the Foundation for Cync's Design System",
    content: (
      <>
        <p className="text-sm text-portfolio-text-light mb-6 -mt-2">
          The collateral platform didn't just need components — it created them.
        </p>
        <img
          src={gammaImages.designSystem}
          alt="Design system foundation"
          className="w-full h-48 sm:h-64 object-cover rounded-2xl mb-6"
        />
        <div className="grid sm:grid-cols-3 gap-6">
          <div>
            <p className="font-semibold text-portfolio-text-dark mb-3">What the Platform Required</p>
            <ul className="space-y-2 text-sm text-portfolio-text-light">
              <li>Configurable tab navigation</li>
              <li>Two-density data tables (Normal and Small)</li>
              <li>API/Manual field state distinction</li>
              <li>Status badge variants (6 locked states)</li>
              <li>Collapsible panel containers for 13-tab records</li>
              <li>Integration status indicators</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-portfolio-text-dark mb-3">What Became System Components</p>
            <p className="text-sm text-portfolio-text-light leading-relaxed mb-3">
              Every pattern built for collateral was abstracted into a reusable component and
              documented with usage rules, an interaction spec, engineering implementation notes,
              and accessibility requirements.
            </p>
            <p className="text-sm text-portfolio-text-light leading-relaxed">
              Total: 60+ components built from this and adjacent work — now used across the Cync
              LOS suite.
            </p>
          </div>
          <div>
            <p className="font-semibold text-portfolio-text-dark mb-3">Why This Matters for Design Leadership</p>
            <blockquote className="text-sm text-portfolio-text-light leading-relaxed italic border-l-2 border-portfolio-accent pl-4">
              "Building components while shipping features requires discipline. Every shortcut taken
              in the component architecture creates debt that compounds across every future feature
              that uses it. The collateral platform was the moment I had to decide: build fast, or
              build right. We built right."
            </blockquote>
          </div>
        </div>
      </>
    ),
  },
  {
    title: 'Role',
    content: (
      <p className="text-sm text-portfolio-text-light leading-relaxed">
        Foundational designer and de facto business analyst across the collateral module —
        translating compliance and lending-policy requirements (advance rates, eligibility rules,
        audit requirements) into field-level record and admin specs, in addition to the UI/UX
        design work itself.
      </p>
    ),
  },
];

const images = [
  { filename: 'frame-01-overview.png', caption: 'Collateral record — Overview tab' },
  { filename: 'frame-02-configurable-shell.png', caption: 'Admin → Collateral Management — taxonomy layer' },
  { filename: 'frame-03-valuation-modes.png', caption: 'Admin → Investments Management — securities master' },
  { filename: 'frame-04-flood-details.png', caption: 'Flood Details dual-mode (integrated vs non-integrated)' },
  { filename: 'frame-05-record-header.png', caption: 'Collateral record header — policy and coverage metrics' },
  { filename: 'frame-07-relationships-collateral.png', caption: 'Relationships module — collateral rollup grid' },
];

const outcomeHighlights = [
  {
    title: 'One Governance Layer, Eleven Architectures',
    body: 'Shared header metrics, action patterns, and audit behavior unify the record experience across all 11 collateral categories, even though each category\'s internal structure — tabs, fields, integrations — is genuinely different.',
  },
  {
    title: 'Compliance Built In, Not Bolted On',
    body: 'Source labeling and override mechanisms are structural — not features added after the fact. Regulators can trace every valuation decision to its source.',
  },
  {
    title: 'Policy Set Once, Inherited Everywhere',
    body: 'Advance rate and eligibility, set once on the collateral side, flow through automatically to every loan that pledges it — no re-entry, no drift between loans.',
  },
  {
    title: 'Design System Foundation',
    body: 'Components built for collateral are now used across other modules in the Cync LOS suite — a platform investment, not just a feature delivery.',
  },
];

const retrospective = [
  {
    title: 'Test the Admin Configuration UX Earlier',
    body: 'The configurability that makes the analyst experience powerful is also complex to set up. Institution admins who configure field sets, integration settings, and lifecycle event rules needed their own UX — and we invested in it later than we should have.',
  },
  {
    title: 'Design API Error States Concurrently',
    body: 'Both Dataverify and EODHD have failure modes — timeout, stale data, partial response. These were designed after the happy path was locked. Error state design should be concurrent with integration design, not a follow-on sprint.',
  },
  {
    title: 'Card Sort for the Tab Architecture',
    body: 'Each category\'s tab structure was designed based on product and domain knowledge. A card sort with analysts would have validated whether our tab groupings matched their mental models — particularly for less common tabs like Environmental Screening and Encumbrance & Risk. This card sort was never run.',
  },
  {
    title: 'Token Layer Before Component Layer',
    body: 'Color, spacing, and type decisions were made at the component level. A semantic token layer (color-status-warning vs a hex value) would have made the system far easier to maintain and theme as the product scaled.',
  },
];

const closingReflection = [
  'Eleven collateral categories do not share one shape, and forcing them into one would have made every category worse. The lesson is to find the smallest set of things that must be common (the pledge/link relationship, the policy metrics, the record header) and let everything else follow the asset. Consistency lives in the structure around the data; the data itself should look the way the lender thinks about that asset.',
  'The second lesson is where to put policy. Setting it once on the collateral side and letting loans inherit it avoids re-entry and drift between loans. When two modules must stay independent, the relationship between them is the thing worth designing most carefully.',
];

const CyncCollateralCaseStudyPage = () => {
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
          timeline={project.timeline}
          status={project.status}
          heroImage={gammaImages.hero}
          overviewText="Collateral and Loan are separate, independently operable modules in Cync's platform. Neither depends on the other to function. The design problem this project solved was the connective layer between them: how a single collateral record — spanning real property, equipment, financial assets (securities), and other business assets — gets pledged or linked to one or more loans, and how policy set once in Admin (advance rates, eligibility) flows through to what a loan officer sees, without re-entry."
          problemTitle="What This Is — and Isn't"
          problemText="This is not a claim about a unified platform replacing multiple systems. It's a description of the actual information architecture connecting two real modules."
          hardDecisionImage={gammaImages.hardDecision}
          hardDecisionIntro="The problem this shaped: Collateral and Loan are architected as independent services. A collateral record needs to exist and be evaluated on its own — an asset can be assessed, appraised, and priced before it's ever attached to a loan. A loan needs to exist and progress through underwriting independent of exactly which collateral ends up securing it. Treating them as a single merged object would have coupled two things that don't share a lifecycle."
          hardDecisionBody="The Decision: Collateral and Loan stay separate. The connection is an explicit action — pledging or linking a specific collateral record to a specific loan — rather than collateral being a sub-object of the loan. This is what the Pledged Loans tab surfaces from the collateral side (Internal / External / In-Process — reflecting different states of that link), and what the Collateral Information tab surfaces from the loan side."
          hardDecisionPoints={[
            "Worked example — Investment collateral: advance rate and eligibility are policy attributes owned by the collateral side, set once in Admin → Investments Management per security.",
            "Linking that security to a loan carries the policy through automatically — the loan side doesn't re-derive or re-enter the advance rate, it inherits it from whichever collateral record has been linked.",
          ]}
          keyDecisions={keyDecisions}
          additionalSections={additionalSections}
          outcomeMetrics={[
            { value: '11', label: 'Collateral Categories' },
            { value: '1,798', label: 'Collateral Types Configured' },
            { value: '2,344', label: 'Sub-Types Configured' },
            { value: '60+', label: 'Design System Components Created' },
          ]}
          outcomeHighlights={outcomeHighlights}
          images={images}
          retrospective={retrospective}
          closingImage={gammaImages.closing}
          closingReflection={closingReflection}
        />
      </div>
      <Footer />
    </div>
  );
};

export default CyncCollateralCaseStudyPage;
