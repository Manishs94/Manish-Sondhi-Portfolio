import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import { SEOHead } from '@/components/SEOHead';
import CaseStudyPageLayout from '@/components/CaseStudyPageLayout';
import NeedsAnswerFlag from '@/components/NeedsAnswerFlag';
import { caseStudies } from '@/utils/data/caseStudies';

const project = caseStudies.find((p) => p.id === 3)!;

const gammaImages = {
  hero: 'https://cdn.gamma.app/avmi4uurdte9tfh/generated-images/eJyl7yzRc4FhENyKkRTp1.png',
  discovery: 'https://cdn.gamma.app/avmi4uurdte9tfh/generated-images/wGsvSENT-n3wbsc0VdmAa.png',
  hardDecision: 'https://cdn.gamma.app/avmi4uurdte9tfh/generated-images/9RJJ9ro7MYlvRi52n_HTE.png',
  oneShell: 'https://cdn.gamma.app/avmi4uurdte9tfh/generated-images/bclwHmuA5ecSOrsS_Uunl.png',
  twoModeValuation: 'https://cdn.gamma.app/avmi4uurdte9tfh/generated-images/CN60JGh_jcpYspsCUvo58.png',
  floodDetails: 'https://cdn.gamma.app/avmi4uurdte9tfh/generated-images/iM7e3oIoi73D5aVEDhKid.png',
  lifecycleTracking: 'https://cdn.gamma.app/avmi4uurdte9tfh/generated-images/e2vlWmaParH3NQK7nN-C0.png',
  designSystem: 'https://cdn.gamma.app/avmi4uurdte9tfh/generated-images/UHt_APlBO2jLYrS9mD7C7.png',
  closing: 'https://cdn.gamma.app/avmi4uurdte9tfh/generated-images/8DFGrHgybl9uMIoyzUXqE.png',
};

// Verified tab list — Section 1 of the data brief. 13 collateral-record tabs, exact names.
const verifiedTabs = [
  { name: 'Overview', body: 'Name, type/sub-type, valuation (AVM run button), ownership table, property address and attributes.' },
  { name: 'Collateral Files', body: 'Document storage for the record.' },
  { name: 'Pledged Loans', body: 'Internal / External / In-Process sub-tabs — lien type, lien position, maturity, original amount, outstanding balance.' },
  { name: '[Property-Type] Details', body: 'e.g. Office Details — varies per sub-type.' },
  { name: 'Appraisal Details', body: 'Appraisal / evaluation / review sub-tabs.' },
  { name: 'Comparable Details', body: 'Sale/lease comps.' },
  { name: 'Flood Details', body: 'Flood zone and certification status.' },
  { name: 'Environmental Screening', body: 'Environmental risk review.' },
  { name: 'Insurance Details', body: 'Coverage and policy tracking.' },
  { name: 'Tax Assessed Details', body: 'Assessed value and tax records.' },
  { name: 'Title Search Details', body: 'Title search results.' },
  { name: 'Lien & Perfection', body: 'UCC search/filing.' },
  { name: 'Encumbrance & Risk', body: 'Open liens, tax liens, PACE/HOA liens, foreclosure history — via on-demand encumbrance search.' },
];

const roleOwned = [
  'End-to-end UX for collateral record types across the platform',
  'Information architecture for 50+ collateral categories — 1,798 granular types and 2,344 sub-types configured in Admin',
  'Third-party integration design (Dataverify, EODHD)',
  'AI-assisted valuation interface design',
  'Design system component creation (60+ components)',
];

const roleContext = [
  { label: 'Company', value: 'Cync Software (LOS)' },
  { label: 'Timeline', value: '2022–2026' },
  { label: 'Platform', value: 'Enterprise Web (Angular)' },
  { label: 'Loan Products', value: 'Commercial, Consumer, ABL, Warehouse, Specialty Lending' },
];

const problemDetails = [
  {
    title: 'Asset Complexity',
    body: 'Every collateral type has unique fields, validation rules, and lifecycle events. Real estate needs appraisals and flood certification. Equipment needs depreciation schedules. Securities need real-time market pricing. One UI cannot naively serve all of these.',
  },
  {
    title: 'Integration Complexity',
    body: 'Flood data (Dataverify), market valuations (EODHD), insurance tracking, and UCC lien services are all separate third-party systems with different data structures, failure modes, and trust levels. Analysts need to see this data without knowing it came from 4 different sources.',
  },
  {
    title: 'Compliance Complexity',
    body: 'Every collateral decision must be auditable. Appraisals expire. UCC filings lapse. Insurance policies renew. A lender who misses a lifecycle event faces regulatory exposure. The system must track this proactively — not reactively.',
  },
];

const discoveryFindings = [
  {
    title: 'Analysts were context-switching constantly',
    body: 'Before the redesign, analysts working a Real Estate collateral record had to move across multiple separate tabs to see appraisal status, flood certification, insurance coverage, and lien position, with no single view surfacing all of it at once.',
  },
  {
    title: 'Asset type differences were mostly field-level',
    body: 'Through workflow mapping, I found that most collateral types share the same structural workflow — they differ only in which fields are required, which integrations are active, and which compliance events apply. This insight drove the configurable architecture decision.',
  },
  {
    title: 'API data had no source labeling',
    body: "When valuation data came from EODHD's market data API, analysts couldn't tell it apart from manually entered data. This was a compliance risk — overrides needed to be explicit and auditable.",
  },
  {
    title: 'Lifecycle events were managed manually',
    body: 'Appraisal renewals, UCC expirations, and insurance updates were tracked in spreadsheets. Analysts discovered expired documentation reactively — after a compliance finding, not before.',
  },
];

const keyDecisions = [
  {
    title: 'Two-Mode Valuation with Explicit Source Labeling',
    body: "The Problem: Valuation data can come from three sources — manual entry, an EODHD API pull, or a hybrid. Analysts couldn't tell which source a value came from, a compliance risk since regulators require manual overrides to be explicitly documented.\n\nThe Decision: API-populated fields display in teal with a lock icon — visually distinct, read-only by default. A Manual/API toggle at the top of the Valuation area switches the section between modes, alongside the AVM run button on the record's Overview tab. Override requires an explicit action that generates an audit log entry.\n\nWhy It Matters: The teal field color is a compliance signal, not a UI decoration — the design had to make that behavior feel natural, not like a burden.",
    image: gammaImages.twoModeValuation,
  },
  {
    title: 'Same Tab, Two Modes — Flood Details',
    body: 'The Problem: Flood certification data from Dataverify works differently depending on whether a client institution has the integration enabled. Building two separate tabs creates a training problem for analysts moving between clients.\n\nThe Decision: One Flood Details tab with two modes — integrated (auto-populated, Dataverify badge, read-only) and non-integrated (same layout, all fields editable, no badge). Field positions never change between modes — only editability and the data source indicator change.',
    image: gammaImages.floodDetails,
  },
  {
    title: 'Proactive Lifecycle Event Tracking',
    body: 'Appraisals expire, UCC filings lapse, insurance renews — all on fixed schedules, but tracked only in analyst spreadsheets. Missed events were discovered reactively, after a compliance finding.\n\nThe Decision: Lifecycle events built into the collateral record as first-class objects, with configurable Due Soon thresholds and proactive alerts sent before expiration, not after.',
    image: gammaImages.lifecycleTracking,
  },
];

const additionalSections = [
  {
    title: 'The Verified System — Collateral Record Structure',
    content: (
      <>
        <p className="text-sm text-portfolio-text-light mb-6 -mt-2">
          13 tabs on the collateral record, plus a "Collateral Information" tab on individual loan
          records surfacing whatever collateral is pledged to that loan.
        </p>
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          {verifiedTabs.map((tab) => (
            <div key={tab.name} className="rounded-xl bg-portfolio-bg-light p-5">
              <p className="font-semibold text-portfolio-text-dark mb-1 text-sm">{tab.name}</p>
              <p className="text-xs text-portfolio-text-light leading-relaxed">{tab.body}</p>
            </div>
          ))}
        </div>
        <p className="font-semibold text-portfolio-text-dark mb-3">Admin → Collateral Management</p>
        <p className="text-sm text-portfolio-text-light leading-relaxed">
          The taxonomy layer behind every record: a Collateral Type list and a Collateral Sub-Type
          list, organized into 50+ top-level categories — 1,798 granular types and 2,344 sub-types
          configured in total, each tracked with created-by/date and updated-by/date audit fields,
          with "Create Collateral Type" and "Create Collateral Sub-Type" actions.
        </p>
      </>
    ),
  },
  {
    title: 'One Shell, Many Products — What Configurable Actually Means',
    content: (
      <>
        <p className="text-sm text-portfolio-text-light mb-6 -mt-2">Not a claim. A demonstration.</p>
        <img
          src={gammaImages.oneShell}
          alt="One shell, many products comparison"
          className="w-full h-48 sm:h-64 object-cover rounded-2xl mb-6"
        />
        <div className="grid sm:grid-cols-2 gap-6 mb-6">
          <div className="rounded-xl border border-gray-200 p-6">
            <p className="font-semibold text-portfolio-text-dark mb-3">Real Property Collateral</p>
            <ul className="space-y-2 text-sm text-portfolio-text-light">
              <li>— Appraisal Details, Comparable Details tabs active</li>
              <li>— Flood Details, Environmental Screening active</li>
              <li>— Title Search Details, Tax Assessed Details active</li>
              <li>— Valuation via AVM run button + manual entry</li>
            </ul>
          </div>
          <div className="rounded-xl border border-gray-200 p-6">
            <p className="font-semibold text-portfolio-text-dark mb-3">
              Investment / Securities Collateral
            </p>
            <ul className="space-y-2 text-sm text-portfolio-text-light">
              <li>— Configured via Admin → Investments Management, not the record tabs above</li>
              <li>— Symbol, CUSIP, ISIN, Advance Rate%, Eligible for Collateral flag</li>
              <li>— Pricing sourced from EODHD (closing price, price date, ingestion status)</li>
              <li>— No appraisal, flood, or title search tabs needed</li>
            </ul>
          </div>
        </div>
        <p className="text-sm text-portfolio-text-light leading-relaxed">
          Same outer record shell, same action patterns — but which tabs are active, and which
          admin taxonomy governs the record, changes entirely based on collateral type.
        </p>
      </>
    ),
  },
  {
    title: 'Cross-Collateralization — The Relationships Module',
    content: (
      <>
        <p className="text-sm text-portfolio-text-light leading-relaxed mb-4">
          Each relationship/entity record has a Collateral tab that rolls up every piece of
          collateral pledged by that relationship and its affiliations — collateral name, type,
          sub-type, value, ID, and status, in one grid. A "Create Collateral" action scoped to that
          relationship lets teams pledge new collateral directly from the relationship view.
        </p>
        <NeedsAnswerFlag>
          How does the UI actually show that one collateral asset secures multiple loans — visible
          from the collateral record, the relationship record, or both? The Relationships module
          and its Collateral rollup grid are confirmed; the specific cross-collateralization
          visibility mechanism still needs your description before it can be written up here.
        </NeedsAnswerFlag>
      </>
    ),
  },
  {
    title: 'Admin → Investments Management',
    content: (
      <p className="text-sm text-portfolio-text-light leading-relaxed">
        Investment collateral (securities) is structurally distinct enough from the record types
        above that it gets its own dedicated write-up —{' '}
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
    title: 'Open Questions Before This Case Study Is Final',
    content: (
      <div className="space-y-4">
        <NeedsAnswerFlag>
          Origin of the Configurable Architecture Decision — Was building the collateral record as
          a configurable shell (the Hard Decision, above) a call you personally made, or does it
          describe inherited/existing system behavior? This affects how the decision should be
          framed and attributed.
        </NeedsAnswerFlag>
        <NeedsAnswerFlag>
          Lifecycle Event Tracking Status — Is proactive lifecycle event tracking ("Proactive
          Lifecycle Event Tracking," above) actually shipped today, or is it a stated intent /
          in-progress initiative? The current copy is written in the past tense, implying shipped —
          confirm before this goes live.
        </NeedsAnswerFlag>
        <NeedsAnswerFlag>
          Record Header Persistence — Confirm whether the collateral record header (Policy LTV%,
          Policy Collateral Discount%, Collateral Discount Value, Discounted Collateral Value,
          Discounted Collateral Coverage, Proposed LTV%, Current Collateral LTV, Current/Third-Party/
          Total Loan Commitments, Available Equity, Available Equity to Margin, Recovery Rate%) is
          in fact sticky/persistent across tabs, or describe how it actually behaves. Nothing on
          this page currently claims it's sticky — this note is only here so the question doesn't
          get lost.
        </NeedsAnswerFlag>
        <NeedsAnswerFlag>
          Business Analyst / Product Owner Framing — Do you want your BA/requirements-definition
          work reflected in "What I Owned," above? This is a differentiator for regulated-fintech
          roles and is currently absent from the page.
        </NeedsAnswerFlag>
      </div>
    ),
  },
];

const images = [
  { filename: 'frame-01-overview.png', caption: 'Collateral record — Overview tab' },
  { filename: 'frame-02-configurable-shell.png', caption: 'Real property vs. investment collateral, same outer shell' },
  { filename: 'frame-03-valuation-modes.png', caption: 'Manual vs API valuation mode with teal source labeling' },
  { filename: 'frame-04-flood-details.png', caption: 'Flood Details dual-mode (integrated vs non-integrated)' },
  { filename: 'frame-05-record-header.png', caption: 'Collateral record header — policy and coverage metrics' },
  { filename: 'frame-06-lifecycle-events.png', caption: 'Lifecycle event tracking' },
  { filename: 'frame-07-relationships-collateral.png', caption: 'Relationships module — collateral rollup grid' },
  { filename: 'frame-08-investments-management.png', caption: 'Admin → Investments Management — securities master' },
];

const outcomeHighlights = [
  {
    title: 'One Platform, All Asset Types',
    body: 'Previously managed across disconnected workflows. One configurable record architecture handles Commercial, Consumer, ABL, Warehouse, and Specialty Lending collateral in a single consistent UI.',
  },
  {
    title: 'Compliance Built In, Not Bolted On',
    body: 'Source labeling and override mechanisms are structural — not features added after the fact. Regulators can trace every valuation decision to its source.',
  },
  {
    title: 'Consistent Cross-Client Experience',
    body: 'Analysts working across clients with different integration states (some with Dataverify active, some without) operate on the same UI. No retraining when switching clients.',
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
    body: 'The 13-tab structure was designed based on product and domain knowledge. A card sort with analysts would have validated whether our tab groupings matched their mental models — particularly for less common tabs like Environmental Screening and Encumbrance & Risk. This card sort was never run.',
  },
  {
    title: 'Token Layer Before Component Layer',
    body: 'Color, spacing, and type decisions were made at the component level. A semantic token layer (color-status-warning vs a hex value) would have made the system far easier to maintain and theme as the product scaled.',
  },
];

const closingReflection = [
  'Enterprise collateral management is not a glamorous design problem. There are no delightful onboarding animations, no viral sharing moments, no consumer behavior to optimize.',
  'There are analysts managing large, complex loan portfolios, compliance officers who need a full audit trail for every decision, and institutions whose regulatory standing depends on whether the software surfaced an expiring appraisal with enough lead time to act.',
  'These are the systems where design either earns trust or loses it — and where the cost of a bad UX decision is measured in regulatory findings, not app store reviews.',
  "That's the work I find most interesting. And the Cync Collateral Platform is the clearest example of it in my portfolio.",
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
          company="Cync Software (LOS)"
          timeline={project.timeline}
          status={project.status}
          heroImage={gammaImages.hero}
          roleOwned={roleOwned}
          roleContext={roleContext}
          overviewText="Enterprise collateral management sounds like a data problem. It's actually an information architecture problem. Real estate, equipment, vehicles, securities, accounts receivable, and intellectual property all behave differently as collateral — different fields, different validation rules, different compliance requirements, different third-party integrations. The naive solution is to build a separate UI for each type. We had 50+ collateral categories — 1,798 granular types in total. The real challenge: how do you design one system that handles all of them consistently — without hiding complexity from analysts who need it, and without overwhelming them with complexity they don't?"
          problemTitle="What Makes Collateral Hard"
          problemText="Three layers of complexity that shaped every design decision."
          problemDetails={problemDetails}
          discoveryImage={gammaImages.discovery}
          discoveryFindings={discoveryFindings}
          hardDecisionImage={gammaImages.hardDecision}
          hardDecisionIntro="50+ collateral categories — 1,798 granular types — across 5 loan products. Building a separate UI for each would be unmaintainable."
          hardDecisionBody="The Decision: Build the collateral record as a configurable shell — consistent outer structure (tab navigation, status zone, action bar, record header) with field-level customization per asset type and loan product combination."
          hardDecisionPoints={[
            'A Real Estate record and an Investment/Securities record share identical chrome — same tab positions, same header, same action patterns',
            'They differ only in which fields appear, which tabs are active, and which integrations or admin taxonomy govern the record',
            'An analyst who learns one record type can navigate any other without relearning the layout',
          ]}
          hardDecisionRejected="What I Rejected: Separate purpose-built forms per asset type. This would have been faster to build initially but created 50+ separate maintenance burdens — one per collateral category — and an inconsistent analyst experience."
          keyDecisions={keyDecisions}
          additionalSections={additionalSections}
          outcomeMetrics={[
            { value: '50+', label: 'Collateral Categories (1,798 Types)' },
            { value: '2,344', label: 'Sub-Types Configured' },
            { value: '60+', label: 'Design System Components Created' },
            { value: '13', label: 'Collateral Record Tabs' },
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
