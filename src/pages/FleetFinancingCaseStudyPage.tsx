import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import { SEOHead } from '@/components/SEOHead';
import CaseStudyPageLayout from '@/components/CaseStudyPageLayout';
import FleetRulesDiagram from '@/components/motion/FleetRulesDiagram';
import ImagePlaceholder from '@/components/ImagePlaceholder';
import { caseStudies } from '@/utils/data/caseStudies';

const project = caseStudies.find((p) => p.id === 10)!;

// Local filenames under /case-studies/ — ImagePlaceholder shows an "Export Needed" box
// with the expected filename until the Figma frame is exported to that path.
const img = {
  advanceRules: 'fleet-screens/01-advance-rules.png',
  concentration: 'fleet-screens/02-concentration-limits.png',
  versionDiff: 'fleet-screens/03-version-history-diff.png',
};

const Strong: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="font-semibold text-portfolio-text-dark">{children}</span>
);

const Quote: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="font-medium text-portfolio-text-dark">"{children}"</span>
);

const ruleObjects: { name: string; body: React.ReactNode }[] = [
  {
    name: 'Eligibility Rules',
    body: (
      <>
        Each rule is a set of condition rows (Field / Operator / Value). Confirmed fields: Days in
        Stock, Mileage, Title Status, Vehicle Age, EV Battery Health, Location. Confirmed operators
        include &lt;=, &lt;, =, &gt;, &gt;=, and "contains". Rules attach to an asset category (New
        Vehicles, Used Vehicles, EV) and carry Override Permissions and Effective Dates.
      </>
    ),
  },
  {
    name: 'Advance Rules',
    body: (
      <>
        Minimum, Default, and Maximum Advance %, a Valuation Basis (Cost, Market Value, Invoice,
        Wholesale, Book Value, MSRP, Appraisal), an Overridable flag, and an Effective Date. A
        summary row reports Total Advance Rules, Average Advance %, Overrideable Rules, and Pending
        Effective.
      </>
    ),
  },
  {
    name: 'Concentration Rules',
    body: (
      <>
        Exposure limits by Dimension Type (confirmed: OEM, Geographic Region) and Dimension Value,
        each with Maximum % and Maximum Amount plus a separate Warning % and Warning Amount, shown
        next to Current Exposure and Current Percentage.
      </>
    ),
  },
  {
    name: 'Curtailment Schedules',
    body: (
      <>
        Five stepped paydown percentages (First, Second, Third, Fourth, Final Curtailment %) per
        asset category (New, Used, EV, Commercial Truck, Mixed Fleet), with named schedules such as{' '}
        <Quote>New Vehicles - Standard</Quote> and <Quote>EV - Accelerated</Quote>.
      </>
    ),
  },
  {
    name: 'Rule Packages',
    body: (
      <>
        A named bundle of the rules above with parameters, a Package Type (for example{' '}
        <Quote>Used Vehicle Dealers</Quote>, <Quote>All Dealers</Quote>), and a description.
        Confirmed examples: <Quote>Standard Dealer Package</Quote> (default rule set for all
        standard dealer relationships) and <Quote>High Risk/Probation</Quote> (restricted rules for
        dealers on probation or in high-risk segments).
      </>
    ),
  },
];

const aiRuleExamples = [
  'New vehicles from 2024-2025 get 100% advance up to $50k based on invoice price',
  'Used cars max 5 years old with under 100k miles get 80% of NADA retail value, minimum $3k',
  'Commercial trucks require CDL documentation and get 90% advance on wholesale value',
  'Luxury vehicles over $75k need additional appraisal and 70% advance rate',
];

const keyDecisions = [
  {
    title: 'One Rule Anatomy, Four Rule Types',
    body: 'The Problem: four rule types could have become four unrelated screens.\n\nThe Decision: every rule type shares the same skeleton: a named rule, an asset category, settings specific to its type (conditions, advance bands, exposure limits, or curtailment steps), Effective Dates, and Override Permissions, listed in a searchable table with an ON/OFF toggle per rule. A user who learns Advance Rules already knows how to read Concentration and Curtailment.',
    image: img.advanceRules,
  },
  {
    title: 'Eligibility as Composable Conditions, Not a Fixed Checklist',
    body: 'Eligibility is built from Field / Operator / Value rows the administrator adds and removes, so lenders define their own tests (for example Title Status = Clean, Vehicle Age and Mileage ceilings, an EV Battery Health floor, a Location restriction) instead of the product hardcoding one lender\'s policy.',
  },
  {
    title: 'Warning Thresholds Before Hard Limits',
    body: 'Concentration pairs each Maximum with a Warning % and Warning Amount, so a portfolio manager sees an exposure approaching a limit before it breaches it.',
    image: img.concentration,
  },
  {
    title: 'Rule Packages Turn Many Rules Into One Decision',
    body: 'Instead of assigning dozens of rules to every dealer relationship, an administrator assigns a package ("Standard Dealer", "High Risk/Probation"), which keeps a high-risk dealer\'s tighter terms one selection away.',
  },
  {
    title: 'A Full Lifecycle for Every Rule, Including History',
    body: 'The file contains dedicated flows for Add, Edit, Copy, Delete (with a confirmation warning), and Version History across all five rule objects. Version History is entry-based (version number, action such as "Added Rule", author and date, description) with a View Before/After Diff control, so a reviewer can see exactly what a change did to a rule or package. Because advance rates and limits drive real lending exposure, changes are treated as auditable events.',
    image: img.versionDiff,
  },
];

const additionalSections = [
  {
    title: 'Rules Once, Loans Inherit',
    content: <FleetRulesDiagram />,
  },
  {
    title: 'The System',
    content: (
      <>
        <p className="text-xs text-portfolio-text-light italic mb-6">
          Source: designed flows in the CYNC Figma file (about 54 loan-side frames, 58 admin
          collateral frames, and roughly 130 rule-lifecycle frames). Values shown in the screens
          (OEM names, dollar limits, dates) are sample data, not real client figures.
        </p>

        <p className="font-semibold text-portfolio-text-dark mb-2">
          Admin: Loan Type &amp; Loan Product Management → Fleet Financing → Multi-Pricing Term Loan
        </p>
        <p className="text-sm text-portfolio-text-light leading-relaxed mb-6">
          Rules are configured at the loan-product level, not per loan. The Fleet Financing loan
          type carries a Fleet component alongside Loan Request, Metadata Configuration, Fees,
          Covenant &amp; Ticklers, and Loan Team. Within it, five rule objects:
        </p>
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          {ruleObjects.map((rule) => (
            <div key={rule.name} className="rounded-xl bg-portfolio-bg-light p-5">
              <p className="font-semibold text-portfolio-text-dark mb-1 text-sm">{rule.name}</p>
              <p className="text-xs text-portfolio-text-light leading-relaxed">{rule.body}</p>
            </div>
          ))}
        </div>

        <p className="font-semibold text-portfolio-text-dark mb-2">The loan record</p>
        <p className="text-sm text-portfolio-text-light leading-relaxed mb-6">
          On the loan record, a Fleet section sits in the loan's left navigation beside Transaction
          Details, Borrowing Structure, Compliance, and Approval. It exposes the same four rule
          types as applied to this loan, plus an <Strong>Inventory</Strong> table: VIN, Make,
          Model, Year, Location/Lot, Title Status, Invoice Cost, Invoice Date, Advance Rate, and
          Adjusted Advance Amount, with <Quote>Add Inventory</Quote> and{' '}
          <Quote>Add Custom Concentration</Quote> actions.
        </p>

        <p className="font-semibold text-portfolio-text-dark mb-2">The collateral record</p>
        <p className="text-sm text-portfolio-text-light leading-relaxed">
          A fleet collateral record supports <Quote>Add Fleet</Quote> and{' '}
          <Quote>Upload Fleet</Quote> with Fleet Details, and the admin collateral taxonomy lists
          Fleet with sub-types such as Aircraft, Watercraft, and Auto.
        </p>
      </>
    ),
  },
  {
    title: 'Advance Rules Can Be Written in Plain Language (AI Rule)',
    content: (
      <>
        <p className="text-sm text-portfolio-text-light leading-relaxed mb-4">
          Alongside the structured form (Asset Type, Valuation basis, Advance Rate, Minimum and
          Maximum Advance, Curtailment Timeline with Days After Funding and Curtailment
          Percentage), there is an <Strong>AI Rule</Strong> entry:{' '}
          <Quote>
            Describe your advance rules in plain language. Our AI will interpret and structure them
            for you.
          </Quote>{' '}
          It offers quick examples and a Describe Your Rule field:
        </p>
        <ul className="space-y-2 mb-4">
          {aiRuleExamples.map((example) => (
            <li
              key={example}
              className="text-sm text-portfolio-text-light leading-relaxed bg-portfolio-bg-light rounded-lg px-4 py-2"
            >
              "{example}"
            </li>
          ))}
        </ul>
        <p className="text-sm text-portfolio-text-light leading-relaxed mb-4">
          The result lands in the same structured table as a manually built rule (for example New
          Vehicle Sublimit and Used Vehicle Sublimit, with a Primary Facility Type and Max 5 years
          old, &lt;100k miles conditions), and has its own delete confirmation (
          <Quote>This will delete the AI Rule</Quote>).
        </p>
        <p className="text-sm text-portfolio-text-light leading-relaxed mb-4">
          <Strong>Why it matters:</Strong> policy documents are written in sentences, and the
          structured form is a translation step. Letting the administrator start from the sentence
          and confirm the structured output removes the translation work while keeping the stored
          rule inspectable and editable.
        </p>
        <p className="text-xs text-portfolio-text-light italic leading-relaxed border-l-2 border-gray-300 pl-4">
          What the frames do not show is how the interpretation is validated or how errors are
          caught, so this case study does not claim the AI output was accurate or shipped. A Credit
          Limits view (Requested Limit, Proposed Limit, Final Pending Approval) also appears next to
          the rules in the loan flow.
        </p>
      </>
    ),
  },
  {
    title: 'Screens',
    content: (
      <>
        <p className="text-xs text-portfolio-text-light italic mb-6">Values shown are sample data.</p>
        <div className="space-y-8">
          <div>
            <ImagePlaceholder filename={img.advanceRules} caption="Advance Rules" aspect="wide" />
            <p className="text-sm text-portfolio-text-light leading-relaxed mt-3">
              <Strong>Advance Rules</Strong> — Administration → Loan Type &amp; Loan Product
              Management → Fleet Financing → Multi-Pricing Term Loan → Fleet. Summary tiles (Total
              Advance Rules, Average Advance %, Overrideable Rules, Pending Effective) above a
              searchable rule table with Valuation Basis, Minimum/Default/Maximum Advance,
              Overridable, and an ON/OFF toggle per rule.
            </p>
          </div>
          <div>
            <ImagePlaceholder filename={img.concentration} caption="Concentration Limits" aspect="wide" />
            <p className="text-sm text-portfolio-text-light leading-relaxed mt-3">
              <Strong>Concentration Limits</Strong> — Maximum and Warning thresholds (percentage and
              amount) alongside Current Percentage and Current Exposure, with an explanatory tooltip
              on the Current Percentage column.
            </p>
          </div>
          <div>
            <ImagePlaceholder filename={img.versionDiff} caption="Rule Package Version History" aspect="wide" />
            <p className="text-sm text-portfolio-text-light leading-relaxed mt-3">
              <Strong>Rule Package Version History</Strong> — entry-based history (v1.0,{' '}
              <Quote>Added Rule</Quote>, author and date) with a Before/After diff showing exactly
              what changed.
            </p>
          </div>
        </div>
      </>
    ),
  },
  {
    title: 'Related Work',
    content: (
      <p className="text-sm text-portfolio-text-light leading-relaxed">
        The same configure-upstream, inherit-downstream model governs securities collateral — see{' '}
        <Link to="/work/investment-collateral" className="text-portfolio-accent underline hover:no-underline">
          Investment Collateral
        </Link>{' '}
        and{' '}
        <Link to="/work/equity-stock-management" className="text-portfolio-accent underline hover:no-underline">
          Equity Stock Management
        </Link>
        .
      </p>
    ),
  },
  {
    title: 'Role',
    content: (
      <p className="text-sm text-portfolio-text-light leading-relaxed">
        Designer of the Fleet Financing rule flows shown in the CYNC Figma file: the admin rule
        configuration, the loan-record rule and inventory views, and the lifecycle (add, edit,
        copy, version, delete) for each rule type.
      </p>
    ),
  },
];

const closingReflection = [
  "Fleet financing showed that rules are the product. Eligibility, advance, concentration, and curtailment all share one anatomy, so a user who learns one already understands the others, and bundling them into packages turns many rules into one decision. Warning thresholds before hard limits, version history with a diff, and overrides that are permissioned instead of forbidden all follow the same principle: lenders make exceptions, and the system's job is to make them visible and attributable.",
  'The AI Rule adds a forward-looking lesson. Policy is written in sentences, and the form is a translation step. Starting from the sentence and showing the structured result keeps the stored rule inspectable, which is what a regulated user needs before trusting an automated step.',
];

const FleetFinancingCaseStudyPage = () => {
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
          company="Cync Software"
          heroImage={img.advanceRules}
          overviewText="Fleet financing (dealer floor-plan and vehicle inventory lending) is governed by rules a lender applies to every vehicle: whether it qualifies, how much can be advanced against it, how concentrated the portfolio may become in one manufacturer or region, and how fast the advance must be paid down."
          problemTitle="A System, Not a Screen"
          problemText="The design problem was not a screen. It was a system: let an administrator define those four kinds of rules once, bundle them, and have each loan inherit the right package, while still letting an authorized user override a rule on a specific loan, with a record of what changed."
          hardDecisionIntro="Rules Live at the Product Level; Loans Inherit and Override."
          hardDecisionBody={'The problem: if every loan officer typed their own advance percentages and limits, two loans on the same product would disagree and nobody could audit why. The decision: rules are authored once in Administration under the loan product, then applied to loans. Each rule carries an explicit Override Allowed setting with Override Permissions, and the loan record has distinct states for a rule that can be edited ("Edit Rule"), one that cannot ("No Override"), and a loan-specific addition ("Add Custom Advance Rule", "Add Custom Concentration"). Policy stays central; exceptions are visible and permissioned rather than silent.'}
          keyDecisions={keyDecisions}
          additionalSections={additionalSections}
          closingReflection={closingReflection}
        />
      </div>
      <Footer />
    </div>
  );
};

export default FleetFinancingCaseStudyPage;
