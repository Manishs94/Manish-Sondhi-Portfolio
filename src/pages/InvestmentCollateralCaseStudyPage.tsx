import React from 'react';
import { ShieldCheck } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import { SEOHead } from '@/components/SEOHead';
import CaseStudyPageLayout from '@/components/CaseStudyPageLayout';
import NeedsAnswerFlag from '@/components/NeedsAnswerFlag';
import ImagePlaceholder from '@/components/ImagePlaceholder';
import { caseStudies } from '@/utils/data/caseStudies';

const project = caseStudies.find((p) => p.id === 7)!;

// Temporary stand-in stock photography — not real product screenshots. Swap for actual
// Figma exports once available (see "Open Items"); ImagePlaceholder will pick them up
// automatically once local files exist at these paths (just replace the URL with the
// local filename, e.g. 'ic-hero.png').
const img = {
  hero: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=1600',
  securitiesMaster: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600',
  eligibleFlag: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1600',
  advanceRate: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=1600',
  bulkUpdate: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&q=80&w=1600',
  connection: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600',
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
    title: 'The Connection: Collateral and Loan as Separate Services, Linked by Policy Inheritance',
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
    title: 'Scope of What\'s Confirmed Here',
    content: (
      <div className="rounded-2xl border-2 border-gray-200 bg-portfolio-bg-light p-6 sm:p-8">
        <ShieldCheck className="w-5 h-5 text-portfolio-text-dark mb-3" />
        <p className="text-sm text-portfolio-text-light leading-relaxed">
          This page describes the Investments Management admin surface and the policy-inheritance
          mechanism as they apply to securities specifically. It does not claim this exact mechanism
          is identical across the other 10 collateral categories (Commercial Real Estate, NAV,
          Deposit, Accounts Receivable, Inventory, Equipment, Agriculture, Subscription, Automobiles,
          and general Business collateral) — that comparison hasn't been verified and isn't asserted
          here.
        </p>
      </div>
    ),
  },
  {
    title: 'Open Questions Before This Case Study Is Final',
    content: (
      <div className="space-y-4">
        <NeedsAnswerFlag>
          Was there a distinct manual workaround for eligibility-marking or per-security updates
          before this Admin flow existed, or did it ship as designed from the start?
        </NeedsAnswerFlag>
        <NeedsAnswerFlag>
          Did the loan-side view have any prior state before the policy-inheritance pattern
          shipped?
        </NeedsAnswerFlag>
      </div>
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
        />
      </div>
      <Footer />
    </div>
  );
};

export default InvestmentCollateralCaseStudyPage;
