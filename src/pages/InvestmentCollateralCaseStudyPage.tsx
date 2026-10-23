import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import { SEOHead } from '@/components/SEOHead';
import CaseStudyPageLayout from '@/components/CaseStudyPageLayout';
import InvestmentPolicyDiagram from '@/components/motion/InvestmentPolicyDiagram';
import NeedsAnswerFlag from '@/components/NeedsAnswerFlag';
import ImagePlaceholder from '@/components/ImagePlaceholder';
import { caseStudies } from '@/utils/data/caseStudies';

const project = caseStudies.find((p) => p.id === 7)!;

// Temporary stand-in stock photography — not real product screenshots. Swap for actual
// Figma exports once available; ImagePlaceholder will pick them up automatically once
// local files exist at these paths (just replace the URL with the local filename, e.g.
// 'ic-hero.png').
const img = {
  hero: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=1600',
  securitiesMaster: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600',
  eligibleFlag: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1600',
  advanceRate: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=1600',
  bulkUpdate: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&q=80&w=1600',
  connection: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600',
  eligibilityTesting: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1600',
  linkPledge: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&q=80&w=1600',
};

const securitiesMasterFields = [
  { name: 'Symbol, Name', body: 'Security identification.' },
  { name: 'Security Type / Sub-Type', body: 'Classification within the securities taxonomy.' },
  { name: 'Advance Rate%', body: 'The policy value governing how much can be lent against this security.' },
  { name: 'Exchange, Country', body: 'Where the security trades and its country of origin.' },
  { name: 'Category, Asset Class', body: 'Higher-level classification fields.' },
  { name: 'Liquidity Category', body: 'How readily the security can be converted to cash.' },
  { name: 'Tradability Status', body: 'Whether the security is currently tradable.' },
  { name: 'Restricted Security flag', body: 'Marks securities subject to trading restrictions.' },
  { name: 'Eligible for Collateral (Yes/No)', body: 'An explicit, standalone toggle — not inferred from other fields.' },
  { name: 'ISIN, CUSIP, Currency', body: 'Standard security identifiers and denomination.' },
  { name: 'Issuer / Fund House', body: 'Who issues or manages the security.' },
  { name: 'Pricing (EODHD)', body: 'Closing price, price date, ingestion status — sourced from EODHD.' },
];

const eligibilityTests = [
  'Single Security Concentration', 'Market Cap Requirement', 'Sector Concentration Limit',
  'Issuer Eligibility', 'Minimum Diversification', 'Collateral Coverage Requirement',
  'Penny Stock Exclusion',
];

const investmentSubTypes = [
  '401a', 'Brokerage', '529', '403b', '457b', 'IRA', 'Roth 401k', 'Pension', 'Trust',
  'Life Insurance', 'Crypto', 'and others',
];

const securityTypes = ['Stock', 'Bonds', 'ETFs', 'Stock Option', 'Mutual Funds', 'Crypto'];

const problemDetails = [
  {
    title: 'Physical / Slow-Changing Collateral',
    body: 'Commercial Real Estate, Equipment, Agriculture: value is set by appraisal, updated infrequently, and tied to a single, mostly-static record.',
  },
  {
    title: 'Investment Collateral (Securities)',
    body: 'Value changes with the market, eligibility is a policy decision made at the security level rather than the loan level, and a single security can sit behind more than one loan at once.',
  },
];

const keyDecisions = [
  {
    title: 'Eligible for Collateral as an Explicit, Standalone Flag',
    body: 'Rather than inferring whether a security can be pledged from other fields (type, restriction status, liquidity), eligibility is its own explicit Yes/No toggle on the security record. A security can be fully cataloged in the system — priced, classified, restricted-flagged — without being usable as collateral until this flag is set.',
    image: img.eligibleFlag,
  },
  {
    title: 'Advance Rate as a Policy Value, Not a Loan-Level Input',
    body: "Advance Rate% lives on the security record in Admin, not as a field a loan officer sets per loan. This means the policy governing how much can be lent against a given security is defined once, by whoever owns Investments Management, and applies consistently everywhere that security is pledged — it can't drift between loans or get re-negotiated informally at the point of origination.",
    image: img.advanceRate,
  },
  {
    title: 'Individual and Bulk Creation, Independently Toggleable',
    body: 'Securities can be created one at a time or in bulk via an "Investment Update" file upload, and each row can be toggled ON/OFF for availability independently. This supports both the one-off case (a new security needs to be added) and the operational case (updating pricing or eligibility across many securities at once).',
    image: img.bulkUpdate,
  },
];

const additionalSections = [
  {
    title: 'One Change, Every Loan',
    content: <InvestmentPolicyDiagram />,
  },
  {
    title: 'The Securities Master — Full Field List',
    content: (
      <>
        <p className="text-sm text-portfolio-text-light mb-6 -mt-2">
          Admin → Investments Management, the source of truth for every security that can be
          pledged as collateral.
        </p>
        <div className="grid sm:grid-cols-2 gap-4">
          {securitiesMasterFields.map((field) => (
            <div key={field.name} className="rounded-xl bg-portfolio-bg-light p-5">
              <p className="font-semibold text-portfolio-text-dark mb-1 text-sm">{field.name}</p>
              <p className="text-xs text-portfolio-text-light leading-relaxed">{field.body}</p>
            </div>
          ))}
        </div>
      </>
    ),
  },
  {
    title: 'Collateral and Loan as Separate Services, Linked by Policy Inheritance',
    content: (
      <>
        <p className="text-sm text-portfolio-text-light leading-relaxed mb-4">
          Collateral and Loan are independent modules — a security can be assessed and priced before
          it's ever pledged, and a loan can progress through underwriting independent of which
          specific security ends up securing it. The connection between them is an explicit
          pledge/link action, not a merged data object.
        </p>
        <p className="text-sm text-portfolio-text-light leading-relaxed mb-4">
          <span className="font-semibold text-portfolio-text-dark">What that link carries:</span>{' '}
          once a security is linked to a loan, the loan side inherits the policy already set on the
          collateral side — advance rate and eligibility flow through automatically. The loan
          officer isn't re-entering or re-deriving the advance rate; they're viewing what's already
          been configured once, upstream, in Investments Management. If the eligibility flag or
          advance rate is later updated in Admin, every loan referencing that security reflects the
          current state — the rule lives in one place.
        </p>
        <div className="mb-4">
          <ImagePlaceholder
            filename={img.connection}
            caption="Policy inheritance from security record to loan"
            aspect="wide"
          />
        </div>
        <p className="text-sm text-portfolio-text-light leading-relaxed">
          This is what makes bulk operations meaningful: the "Investment Update" bulk upload and the
          per-row ON/OFF toggle aren't just data-entry conveniences — they're a way to change policy
          across every affected loan at once, from a single point of control, rather than requiring
          someone to track down and update every loan individually.
        </p>
      </>
    ),
  },
  {
    title: 'Eligibility Is Tested, Not Just Flagged',
    content: (
      <>
        <p className="text-xs text-portfolio-text-light italic mb-4">From the Figma file.</p>
        <div className="mb-6">
          <ImagePlaceholder
            filename={img.eligibilityTesting}
            caption="Security panel — aggregate eligibility tests"
            aspect="wide"
          />
        </div>
        <p className="text-sm text-portfolio-text-light leading-relaxed mb-4">
          The Figma frames add a Security panel on the loan side that evaluates a pledged portfolio
          against a rule set, one row per test, across tabs for{' '}
          <span className="font-semibold text-portfolio-text-dark">
            Concentration, Eligibility, Diversification, and Coverage
          </span>
          :
        </p>
        <div className="flex flex-wrap gap-2 mb-6">
          {eligibilityTests.map((test) => (
            <span
              key={test}
              className="px-3 py-1 bg-portfolio-bg-light text-portfolio-text-dark rounded-full text-xs font-medium"
            >
              {test}
            </span>
          ))}
        </div>
        <p className="text-sm text-portfolio-text-light leading-relaxed mb-4">
          Each row shows Current Value against Threshold, a plain-language Summary, and an Action
          Required. Sample rows read "No single security exceeds the allowed portfolio
          concentration limit" (18.40% against a 25.00% threshold), "47/47 pass" for market cap, a
          Technology exposure warning ("close to the threshold. Keep under review," 38.20% against
          40.00%), and a coverage failure ("Coverage is below the minimum threshold. Additional
          collateral is required") with an Add to Borrower Request action.
        </p>
        <p className="text-sm text-portfolio-text-light leading-relaxed mb-4">
          <span className="font-semibold text-portfolio-text-dark">Why it matters:</span> a
          portfolio can pass every individual-security rule and still fail in aggregate. Showing the
          aggregate tests with a current value, a threshold, and a next step turns a pass/fail flag
          into something an officer can act on.
        </p>
        <NeedsAnswerFlag>
          The values shown are sample data, and whether this panel shipped is not confirmed.
        </NeedsAnswerFlag>
      </>
    ),
  },
  {
    title: 'Link, Pledge, and Unlink Keep the Portfolio Visible',
    content: (
      <>
        <p className="text-xs text-portfolio-text-light italic mb-4">From the Figma file.</p>
        <div className="mb-6">
          <ImagePlaceholder
            filename={img.linkPledge}
            caption="Linked accounts and positions view"
            aspect="wide"
          />
        </div>
        <p className="text-sm text-portfolio-text-light leading-relaxed mb-4">
          The linking flows show the account-level and position-level view together: linked
          accounts (for example by institution and ID), positions with Symbol, Name, Asset Type,
          Quantity, Last Price, Market Value, Advance Rate, and Availability, and a summary of Total
          Availability, Total Market Value, Outstanding Loan, and Coverage Ratio. An Unlink view
          removes an account from the loan without deleting the collateral.
        </p>
        <p className="text-xs text-portfolio-text-light italic leading-relaxed border-l-2 border-gray-300 pl-4 mb-6">
          See{' '}
          <Link to="/work/collateral-pledge-link" className="text-portfolio-accent underline hover:no-underline">
            Linking Collateral to Loans: Pledge, Link, and Unlink
          </Link>{' '}
          for the full relationship model.
        </p>
        <p className="text-sm text-portfolio-text-light leading-relaxed">
          Administration also shows the Investment sub-type list ({investmentSubTypes.join(', ')})
          and security types ({securityTypes.join(', ')}) as configured components.
        </p>
      </>
    ),
  },
  {
    title: 'Role',
    content: (
      <p className="text-sm text-portfolio-text-light leading-relaxed">
        Foundational designer and de facto business analyst for the Investment collateral category
        within the broader collateral module — translating securities-lending policy (advance
        rates, eligibility rules) into the Investments Management admin spec and the loan-side
        inheritance behavior, in addition to the UI/UX design work itself.
      </p>
    ),
  },
];

const images = [
  { filename: 'ic-securities-master-admin.png', caption: 'Admin → Investments Management — securities master list' },
  { filename: 'ic-security-record-detail.png', caption: 'Individual security record — full policy field set' },
  { filename: 'ic-eligible-for-collateral-flag.png', caption: 'Eligible for Collateral toggle' },
  { filename: 'ic-bulk-investment-update.png', caption: 'Bulk Investment Update — file upload flow' },
  { filename: 'ic-availability-toggle.png', caption: 'Per-row ON/OFF availability toggle' },
  { filename: 'ic-policy-inheritance-loan-view.png', caption: 'Loan-side view — inherited advance rate and eligibility' },
  { filename: 'ic-eligibility-testing-panel.png', caption: 'Security panel — aggregate eligibility tests' },
  { filename: 'ic-link-pledge-unlink.png', caption: 'Link, pledge, and unlink flows' },
];

const closingReflection = [
  'The main lesson from securities collateral is that policy belongs upstream. Setting advance rate and eligibility once in Investments Management, and letting every loan inherit it, turns a per-loan data-entry task into a single point of control. Bulk upload and per-row toggles matter for the same reason: they change policy for every affected loan at once.',
  'The Figma work added a second lesson: a flag is not enough. A portfolio can pass every individual-security rule and still fail in aggregate, so showing current value, threshold, and next action for each test turns a pass/fail result into a decision.',
];

const InvestmentCollateralCaseStudyPage = () => {
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
          heroImage={img.hero}
          overviewText="Investment collateral — securities pledged against loans — is one of 11 structurally distinct collateral categories in Cync's enterprise lending platform, each with a genuinely different data model, not just different fields on a shared form."
          problemTitle="Why Investment Collateral Is a Different Design Problem"
          problemText={'Most collateral types in the system represent a physical or slow-changing asset. Investment collateral (securities) is different in kind, not just in fields. The design problem isn\'t "add a few securities-specific fields" — it\'s a genuinely separate data model and admin surface.'}
          problemDetails={problemDetails}
          hardDecisionImage={img.securitiesMaster}
          hardDecisionIntro="The System: Admin → Investments Management — the securities master, and the single source of truth for every security that can be pledged as collateral."
          hardDecisionBody="The design decision embedded here: eligibility, advance rate, and pricing all live on the security record itself, in Admin — not duplicated per loan, per borrower, or per collateral record that happens to reference it. The full field list is broken out below."
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

export default InvestmentCollateralCaseStudyPage;
