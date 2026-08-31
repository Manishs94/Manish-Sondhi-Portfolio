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

const project = caseStudies.find((p) => p.id === 6)!;

// Temporary stand-in stock photography — not real product screenshots. Swap for actual
// Figma exports once available (see "Open Items"); ImagePlaceholder will pick them up
// automatically once local files exist at these paths.
const img = {
  hero: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&q=80&w=1600',
  multiProperty: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=1600',
  floodDetails: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1600',
  appraisalTab: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600',
  comparable: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&q=80&w=1600',
};

// Verified tab list — same 13-tab collateral record structure confirmed for the platform,
// annotated here with the CRE-specific notes given in this brief.
const verifiedTabs = [
  { name: 'Overview', body: 'Name, type/sub-type, valuation (AVM run button), ownership table, property address and attributes.' },
  { name: 'Collateral Files', body: 'Document storage for the record.' },
  { name: 'Pledged Loans', body: 'Internal / External / In-Process sub-tabs — lien type, lien position, maturity, original amount, outstanding balance.' },
  { name: '[Property-Type] Details', body: 'e.g. Office Details — the specific sub-tab varies by sub-type (office, retail, industrial, land, etc.).' },
  { name: 'Appraisal Details', body: 'Appraisal / evaluation / review sub-tabs — see full breakdown below.' },
  { name: 'Comparable Details', body: 'Sale/lease comps — see full breakdown below.' },
  { name: 'Flood Details', body: 'Flood zone and certification status, sourced from Dataverify where integrated, manual where not.' },
  { name: 'Environmental Screening', body: 'Environmental risk review.' },
  { name: 'Insurance Details', body: 'Coverage and policy tracking.' },
  { name: 'Tax Assessed Details', body: 'Assessed value and tax records.' },
  { name: 'Title Search Details', body: 'Title search results.' },
  { name: 'Lien & Perfection', body: 'UCC search/filing.' },
  { name: 'Encumbrance & Risk', body: 'Open liens, tax liens, PACE/HOA liens, foreclosure history — via on-demand encumbrance search.' },
];

const keyDecisions = [
  {
    title: 'Flood Details as a Dual-Mode Tab',
    body: "Carried over from the main Collateral Management case study, specific to this category: Flood Details runs in two modes off the same tab structure — auto-populated from Dataverify where that integration is active for a given institution, fully manual where it isn't — so an analyst moving between institutions with different integration states doesn't have to relearn the layout.",
    image: img.floodDetails,
  },
];

const additionalSections = [
  {
    title: 'The System — Collateral Record: Commercial Real Estate',
    content: (
      <>
        <p className="text-sm text-portfolio-text-light mb-6 -mt-2">
          This is the widest tab set of any collateral category — a direct consequence of how many
          independent data sources a CRE underwriting decision depends on.
        </p>
        <div className="grid sm:grid-cols-2 gap-4">
          {verifiedTabs.map((tab) => (
            <div key={tab.name} className="rounded-xl bg-portfolio-bg-light p-5">
              <p className="font-semibold text-portfolio-text-dark mb-1 text-sm">{tab.name}</p>
              <p className="text-xs text-portfolio-text-light leading-relaxed">{tab.body}</p>
            </div>
          ))}
        </div>
      </>
    ),
  },
  {
    title: 'Appraisal Details — Three-Tab Structure',
    content: (
      <>
        <p className="text-sm text-portfolio-text-light leading-relaxed mb-6">
          Confirmed field-level detail, from direct product screenshots.
        </p>
        <div className="mb-6">
          <ImagePlaceholder filename={img.appraisalTab} caption="Appraisal Details — three-tab structure" aspect="wide" />
        </div>

        <div className="space-y-6">
          <div className="rounded-xl border border-gray-200 p-6">
            <p className="font-semibold text-portfolio-text-dark mb-2">Appraisal tab</p>
            <p className="text-sm text-portfolio-text-light leading-relaxed">
              Appraisal Company Name/Source, Appraiser's Name, Property Stage (dropdown), Appraisal
              Date. A repeatable <span className="font-medium text-portfolio-text-dark">Valuation Approach</span> table
              (Value, Area/Total Sq. Ft., Net Area/Sq. Ft., Date, Actions) supporting multiple
              valuation approaches per appraisal via "Add Valuation Approach," plus a Final
              Valuation Approach selector and Appraisal Effective Date — separating the individual
              approaches considered from the one ultimately relied on.
            </p>
          </div>

          <div className="rounded-xl border border-gray-200 p-6">
            <p className="font-semibold text-portfolio-text-dark mb-2">Review tab</p>
            <p className="text-sm text-portfolio-text-light leading-relaxed mb-4">
              A structured compliance checklist mapping directly to appraisal regulatory standards
              (USPAP, FIRREA) rather than a free-text sign-off. Organized into named sections —
              Appraisal Report Completeness, Appraisal Methodology, Market Analysis, Property
              Description, Comparable Sales, Income Analysis, Final Value Conclusion, Regulatory
              Compliance, Overall Assessment — each a set of Yes/No determinations with a comment
              field, plus an Internal/External Third-Party reviewer designation and an Approved
              Appraiser List check.
            </p>
            <NeedsAnswerFlag>
              Design status: reflected in a Figma frame rather than confirmed live-product
              screenshots — noted as designed, not yet confirmed shipped, pending clarification.
            </NeedsAnswerFlag>
          </div>

          <div className="rounded-xl border border-gray-200 p-6">
            <p className="font-semibold text-portfolio-text-dark mb-2">Evaluation tab</p>
            <p className="text-sm text-portfolio-text-light leading-relaxed">
              Evaluation Type (e.g. Third-Party External), Evaluation Value, Evaluation Date,
              Evaluation Effective Date, Evaluation Company Name, Evaluation Completed By,
              Evaluation Reviewed By, Evaluation Review Date, Evaluation Accepted (Yes/No), Comment.
            </p>
          </div>
        </div>

        <p className="text-sm text-portfolio-text-light leading-relaxed mt-6">
          <span className="font-semibold text-portfolio-text-dark">Design decision embedded here:</span>{' '}
          Appraisal, Review, and Evaluation are kept as separate tabs rather than one long form —
          separating the raw appraisal data entry (Appraisal), the regulatory-compliance review of
          that appraisal (Review), and an independent evaluation record (Evaluation) that can exist
          alongside or instead of a full appraisal. This reflects that these are three distinct
          workflows with different owners and different regulatory weight, not three sections of
          one task.
        </p>
      </>
    ),
  },
  {
    title: 'Comparable Property Integration',
    content: (
      <>
        <p className="text-sm text-portfolio-text-light leading-relaxed mb-4">
          <span className="font-semibold text-portfolio-text-dark">The problem:</span> finding
          similar recently sold or leased properties to support a valuation depends on both spatial
          context (where comparables are relative to the subject property) and structured data
          comparison (price per square foot, transaction type, size, building class). Neither a map
          alone nor a list alone serves both needs.
        </p>
        <div className="mb-4">
          <ImagePlaceholder filename={img.comparable} caption="Synchronized map/list comparable view" aspect="wide" />
        </div>
        <p className="text-sm text-portfolio-text-light leading-relaxed mb-4">
          <span className="font-semibold text-portfolio-text-dark">The decision:</span> a
          synchronized dual view — map and list shown together, not as separate tabs — where
          selecting a property in one view highlights it in the other. Paired with a persistent,
          always-visible filter panel rather than filters hidden behind a button, since comparable
          analysis involves frequent, iterative filter adjustment. Confirmed real filter fields:{' '}
          <span className="font-medium text-portfolio-text-dark">
            Radius, Property type, Transaction type, Building class, Size range.
          </span>
        </p>
        <p className="text-xs text-portfolio-text-light italic leading-relaxed border-l-2 border-gray-300 pl-4">
          Scope note: this section reflects the confirmed real components of the feature — the
          synchronized map/list view, the persistent filter panel, and the five filter fields above.
          It does not include a specific measured time-savings figure or a formal research/testing
          methodology; if a real number becomes available, it belongs here.
        </p>
      </>
    ),
  },
  {
    title: 'Datatree Integration',
    content: (
      <p className="text-sm text-portfolio-text-light leading-relaxed">
        Confirmed as a real third-party integration within the Commercial Real Estate category,
        alongside Dataverify (flood) and the UCC search/filing already covered under Lien &amp;
        Perfection. Specific function within the record not yet detailed — see Open Items.
      </p>
    ),
  },
  {
    title: 'Role',
    content: (
      <p className="text-sm text-portfolio-text-light leading-relaxed">
        Foundational designer and de facto business analyst for the Commercial Real Estate
        collateral category — translating appraisal, title, flood, tax, and environmental
        due-diligence requirements into the record's tab structure and field specs, in addition to
        the UI/UX design work itself.
      </p>
    ),
  },
  {
    title: "Scope of What's Confirmed Here",
    content: (
      <div className="rounded-2xl border-2 border-gray-200 bg-portfolio-bg-light p-6 sm:p-8">
        <ShieldCheck className="w-5 h-5 text-portfolio-text-dark mb-3" />
        <p className="text-sm text-portfolio-text-light leading-relaxed mb-3">
          This page describes the Commercial Real Estate tab structure and the multi-property
          loan-linking pattern as confirmed. It does not yet include field-level detail within each
          due-diligence tab beyond Appraisal Details (e.g. what specific fields Tax Assessed
          Details or Title Search Details capture) — those are named as tabs, not specified in
          depth.
        </p>
        <p className="text-sm text-portfolio-text-light leading-relaxed">
          It also does not claim the multi-property linking pattern is unique to CRE; it may apply
          to other categories capable of multi-asset pledges, but that hasn't been confirmed and
          isn't asserted here.
        </p>
      </div>
    ),
  },
  {
    title: 'Open Items — Pending Confirmation Before Use',
    content: (
      <div className="space-y-4">
        <NeedsAnswerFlag>
          Whether the Review tab (USPAP/FIRREA compliance checklist) is confirmed shipped in
          production, or reflects design work not yet live — currently sourced from a Figma frame
          rather than a live-product screenshot.
        </NeedsAnswerFlag>
        <NeedsAnswerFlag>
          Field-level detail within Tax Assessed Details, Title Search Details, Environmental
          Screening — currently named as tabs only.
        </NeedsAnswerFlag>
        <NeedsAnswerFlag>
          Whether the loan-side multi-property aggregation view existed in any form before this
          design, or is new functionality.
        </NeedsAnswerFlag>
        <NeedsAnswerFlag>
          Any specific design decision behind the Office Details / property-type-specific sub-tab
          pattern (why that particular tab varies by sub-type, what problem that solved).
        </NeedsAnswerFlag>
        <NeedsAnswerFlag>
          Real time-savings figure for the Comparable Property Integration, if one exists — not yet
          provided.
        </NeedsAnswerFlag>
        <NeedsAnswerFlag>
          What Datatree specifically provides within the CRE record (title records, property/parcel
          data, ownership history, or something else) — confirmed real, function not yet specified.
        </NeedsAnswerFlag>
        <NeedsAnswerFlag>
          No screenshots yet — pending Figma access.
        </NeedsAnswerFlag>
      </div>
    ),
  },
];

const images = [
  { filename: 'cre-collateral-record-overview.png', caption: 'CRE collateral record — Overview tab' },
  { filename: 'cre-multi-property-loan-linking.png', caption: 'Loan-side view — exposure aggregated across linked properties' },
  { filename: 'cre-appraisal-review-checklist.png', caption: 'Review tab — USPAP/FIRREA compliance checklist' },
  { filename: 'cre-evaluation-tab.png', caption: 'Evaluation tab' },
  { filename: 'cre-comparable-map-list-view.png', caption: 'Synchronized map/list comparable view with persistent filter panel' },
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
          overviewText="Commercial Real Estate is the collateral category with the most third-party integration surface area and the most compliance-driven due-diligence structure of any type in the platform."
          problemTitle="The Highest-Integration Collateral Category"
          problemText="Unlike Investment collateral — where value comes from a live pricing feed and one admin screen governs eligibility — a CRE record has to assemble evidence from multiple independent sources (appraisal, title, flood certification, tax assessment, environmental screening, lien search) into a single, auditable record, and a single loan may be secured by more than one CRE property at once."
          hardDecisionImage={img.multiProperty}
          hardDecisionIntro="The problem this shaped: a single commercial loan is often secured by more than one property — not one collateral record mapped one-to-one to one loan, but a loan whose exposure spreads across several linked CRE records simultaneously. Showing the loan officer only a single property's numbers would misrepresent the loan's actual coverage and risk position."
          hardDecisionBody="The Decision: the pledge/link relationship (shared across the platform) supports many-to-many linking — a loan can pledge multiple CRE collateral records, and a single CRE property can, in turn, be pledged toward more than one loan. This is the same mechanism that makes cross-collateralization visible in the Relationships module, viewed here from the loan side rather than the borrower/entity side."
          hardDecisionPoints={[
            "The loan-side view aggregates exposure across every linked property rather than requiring the loan officer to open each property's record individually and total the numbers by hand.",
          ]}
          keyDecisions={keyDecisions}
          additionalSections={additionalSections}
          images={images}
        />
      </div>
      <Footer />
    </div>
  );
};

export default CreComparableCaseStudyPage;
