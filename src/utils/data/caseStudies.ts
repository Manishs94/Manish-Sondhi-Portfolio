import { Project } from '../types/project';

// Case studies - in-depth projects
export const caseStudies: Project[] = [
  {
    id: 7,
    title: 'Investment Collateral — Securities as a Distinct Collateral Category',
    subtitle: 'One of 11 structurally distinct collateral categories in Cync\'s platform — securities-backed lending, with policy (advance rate, eligibility) set once at the admin level and inherited automatically wherever that security is pledged to a loan.',
    description: 'Securities behave differently as collateral than physical assets: value changes with the market, eligibility is a policy decision made at the security level, and one security can secure more than one loan. Designed Admin → Investments Management as the securities master, with advance rate and eligibility inherited automatically by every loan referencing that security.',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=1080',
    category: ['Enterprise Fintech', 'Information Architecture', 'Compliance UX'],
    metrics: [
      { icon: 'activity', value: '11', label: 'Structurally Distinct Collateral Categories' }
    ],
    tools: ['Figma', 'Miro', 'Analytics'],
    link: '/work/investment-collateral',
    overview: {
      challenge: 'Investment collateral (securities) is different in kind, not just in fields, from most collateral types: value changes with the market, eligibility is a policy decision made at the security level rather than the loan level, and a single security can sit behind more than one loan at once.',
      solution: 'Designed Admin → Investments Management as the securities master — the source of truth for every security that can be pledged as collateral, with eligibility, advance rate, and pricing living on the security record itself and inherited automatically wherever that security is linked to a loan.',
      impact: 'Collateral and Loan are independent modules, linked by an explicit pledge action. Once linked, the loan side inherits the policy already set on the collateral side — advance rate and eligibility flow through automatically, and updates in Admin propagate to every loan referencing that security.'
    },
    challenge: 'Most collateral types in the system — Commercial Real Estate, Equipment, Agriculture — represent a physical or slow-changing asset priced by appraisal and tied to a single, mostly-static record. Investment collateral needed a genuinely separate data model and admin surface, not a few securities-specific fields bolted onto the existing record.',
    process: 'Mapped how securities behave differently as collateral, designed the Investments Management admin surface as the securities master, and designed the pledge/link mechanism connecting a security to a loan with automatic policy inheritance.',
    status: 'Completed',
    isCaseStudy: true,
    productType: 'Enterprise Collateral Management Platform',
    platforms: 'Web (Enterprise SaaS · Angular)',
    timeline: '2022 – 2026',
    role: 'Senior Product Designer · Product Owner · Business Analyst',
    team: ['Product', 'Engineering', 'Risk', 'Compliance'],
    responsibilities: [
      'Designed Admin → Investments Management as the securities master for every security eligible to be pledged as collateral.',
      'Designed the explicit Eligible for Collateral flag and Advance Rate% as policy fields living on the security record, not duplicated per loan.',
      'Designed the pledge/link mechanism connecting Collateral and Loan as independent modules, with automatic policy inheritance on the loan side.',
      'Designed individual and bulk ("Investment Update" file upload) security creation, plus per-row ON/OFF availability toggling.',
      'Designed an aggregate eligibility-testing panel (concentration, market cap, sector, issuer, diversification, coverage, penny stock) surfacing current value, threshold, and next action per test.',
      'Designed the link/pledge/unlink flows showing linked accounts and positions with summary totals (Total Availability, Total Market Value, Outstanding Loan, Coverage Ratio).'
    ],
    outcomes: [
      'Eligibility, advance rate, and pricing centralized on the security record in Admin — not duplicated per loan, per borrower, or per collateral record.',
      'Policy updates in Admin propagate automatically to every loan referencing that security, rather than requiring manual updates per loan.',
      'Bulk operations (Investment Update upload, per-row ON/OFF toggle) allow policy changes across every affected loan from a single point of control.',
      'Portfolio-level eligibility modeled as a set of auditable tests rather than a single pass/fail flag, each with a current value, threshold, and next action.'
    ]
  },
  {
    id: 8,
    title: 'Equity Stock Management',
    subtitle: 'An administrator\'s master list of stocks that can be pledged as collateral, with a policy LTV per stock, bulk upload, real-time price support, history, and guarded delete versus deactivate.',
    description: 'Securities-backed lending needs a source of truth for which stocks the lender will accept and at what policy margin. Designed the admin surface where that decision is made and maintained — built around blast radius, because an edit here reaches every loan that uses the stock.',
    image: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80&w=1080',
    category: ['Enterprise Fintech', 'Admin UX', 'Compliance UX'],
    tools: ['Figma'],
    link: '/work/equity-stock-management',
    overview: {
      challenge: 'Before a stock can be pledged on a loan, the lender has to decide it is acceptable, classify it, and set a policy LTV. One master list feeds many loans, so it has to be safe to change.',
      solution: 'An Administration surface for the stock master list: Policy LTV set once per stock, create/edit/bulk-import with a review step, duplicate checks at entry, View Stock History, and deactivate offered in place of delete for any stock in use.',
      impact: '• Policy LTV set once per stock and inherited downstream — two officers cannot treat the same stock differently\n• Stocks in use cannot be deleted; deactivation removes them from future use without touching existing records\n• Bulk upload reports what it found before writing\n• Every change is visible in stock history'
    },
    challenge: 'A stock that falls out of favor (delisted, downgraded, too volatile) still sits on existing loans. Deleting it would corrupt those records, and duplicate symbols in a policy table create ambiguity about which margin applies.',
    process: 'Designed about 55 frames in the CYNC Figma file across Equity Stock Management, Stock Management, Stock Update, and Create Stock — list, create/edit, bulk upload, export, history, and guarded lifecycle states.',
    isCaseStudy: true,
    productType: 'Enterprise Collateral Management Platform',
    platforms: 'Web (Enterprise SaaS)',
    role: 'Senior Product Designer',
    team: ['Product', 'Engineering', 'Risk', 'Compliance'],
    responsibilities: [
      'Designed the stock list with Symbol, Name, Country, Category, Policy LTV (%), price source, and audit fields, plus its empty state.',
      'Designed Create New Stock, Edit Stock, and Stock Update flows with required-field and duplicate validation.',
      'Designed bulk upload with a review step, export (XLS or PDF), and View Stock History.',
      'Designed the guarded lifecycle: delete blocked while a stock is in use, with deactivation offered instead and its effect stated before confirming.'
    ],
    outcomes: [
      'Policy LTV lives on the stock, not on the loan — configured upstream, inherited downstream.',
      'Existing loan records cannot be broken by deleting a stock that is in use.',
      'Bulk imports are reviewed before they write.',
      'A margin change is attributable, and "what was the policy when this loan closed" is answerable from history.'
    ]
  },
  {
    id: 9,
    title: 'Linking Collateral to Loans: Pledge, Link, and Unlink',
    subtitle: 'Designing the relationship between two independent modules, Collateral and Loans, so that policy lives with the asset and exposure is visible from both sides.',
    description: 'Collateral and loans are separate modules: one collateral record can secure many loans, and one loan can be secured by many collateral records. Designed the pledge as its own object — amount pledged, lien position, discount, assignment — reachable from the borrower relationship, the loan, or the collateral itself.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1080',
    category: ['Enterprise Fintech', 'Information Architecture', 'Compliance UX'],
    tools: ['Figma'],
    link: '/work/collateral-pledge-link',
    overview: {
      challenge: 'The relationship between a collateral record and a loan has its own data — how much is pledged, at what lien position, with what discount — and must be reachable from wherever the user already is: a borrower relationship, a loan, or the collateral itself.',
      solution: 'Made the pledge its own object, pledgeable from either side, with roll-ups that update during the pledge, separate Internal / External / In-Process loan groups, a working view for in-process loans and a monitoring view for booked loans, required reasons for every override, and release as an approval workflow.',
      impact: '• The same property can be first lien on one loan and second on another\n• Effect of a pledge (Proposed LTV, Current Collateral LTV, Coverage Ratio) visible before saving\n• Every credit exception captured with a stated reason\n• Releasing collateral from a booked loan gated by a named approver'
    },
    challenge: 'Storing pledge facts on either the collateral or the loan would be wrong for one of them. Prior third-party liens and pending pledges affect equity differently, and removing collateral from a booked loan changes coverage and may breach policy.',
    process: 'Designed about 450 frames in the CYNC Figma file across Relationship – Collateral, Create Collateral, Link Collateral, Pledge Collateral, Pledged Loans (Internal, In Process, External), In Process and Booked Loan Collateral views, Release Collateral approvals, and Security – Unlink.',
    isCaseStudy: true,
    productType: 'Enterprise Collateral Management Platform',
    platforms: 'Web (Enterprise SaaS)',
    role: 'Senior Product Designer',
    team: ['Product', 'Engineering', 'Risk', 'Compliance'],
    responsibilities: [
      'Designed the pledge as a relationship object carrying Amount Pledged, Collateral Discount Applied %, Lien Position, Lien Type, and Assignment.',
      'Designed pledging from the collateral side (Pledged Loans tab) and linking from the loan side, showing the same relationship from both.',
      'Designed separate Internal, In Process, and External loan flows, including full capture of third-party liens.',
      'Designed the in-process loan collateral view (policy metrics, equity and margins, overrides with required reasons) and the booked loan monitoring view.',
      'Designed the Release Collateral approval workflow and the Security – Unlink view.'
    ],
    outcomes: [
      'Lien position, amount pledged, and discount stored on the pledge — not on the asset or the loan.',
      'Loan officers start from the loan and collateral analysts start from the asset; both see the same relationship.',
      'Discount, partial pledge, and policy LTV overrides each require a reason before saving.',
      'Release is a request with a reason, a pending state, and a named approver — never a one-click delete.'
    ]
  },
  {
    id: 10,
    title: 'Fleet Financing — A Configurable Lending-Rules Engine',
    subtitle: 'Eligibility, advance, concentration, and curtailment rules defined once at the loan-product level, bundled into reusable packages, and applied (or deliberately overridden) on each loan.',
    description: 'Fleet financing (dealer floor-plan and vehicle inventory lending) is governed by rules applied to every vehicle. Designed the system that lets an administrator define four kinds of rules once, bundle them into packages, and have each loan inherit the right package — with permissioned, recorded overrides on a specific loan.',
    image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=1080',
    category: ['Enterprise Fintech', 'Rules Engine UX', 'Compliance UX', 'AI-Assisted UX'],
    metrics: [
      { icon: 'activity', value: '4', label: 'Rule Types, One Shared Anatomy' }
    ],
    tools: ['Figma'],
    link: '/work/fleet-financing',
    overview: {
      challenge: 'Lenders apply rules to every vehicle: whether it qualifies, how much can be advanced, how concentrated the portfolio may become, and how fast the advance must be paid down. If every loan officer typed their own percentages and limits, two loans on the same product would disagree and nobody could audit why.',
      solution: 'Rules authored once in Administration under the loan product, sharing one anatomy across Eligibility, Advance, Concentration, and Curtailment, bundled into Rule Packages, and inherited by each loan — with explicit Override Allowed settings, loan-specific custom rules, version history with a before/after diff, and a plain-language AI Rule entry.',
      impact: '• Policy stays central; exceptions are visible and permissioned rather than silent\n• A user who learns one rule type can read the other three\n• A dealer\'s whole rule set assigned in one selection via Rule Packages\n• Every rule change is an auditable event with a before/after diff'
    },
    challenge: 'Four rule types could have become four unrelated screens, and a fixed eligibility checklist would hardcode one lender\'s policy into the product.',
    process: 'Designed about 54 loan-side frames, 58 admin collateral frames, and roughly 130 rule-lifecycle frames in the CYNC Figma file — admin rule configuration, the loan-record rule and inventory views, and add / edit / copy / version / delete for each rule type.',
    isCaseStudy: true,
    productType: 'Enterprise Loan Origination & Collateral Management',
    platforms: 'Web (Enterprise SaaS)',
    role: 'Senior Product Designer',
    team: ['Product', 'Engineering', 'Risk', 'Compliance'],
    responsibilities: [
      'Designed admin configuration for Eligibility Rules, Advance Rules, Concentration Rules, Curtailment Schedules, and Rule Packages under the Fleet Financing loan product.',
      'Designed the loan-record Fleet section: applied rules, override states, custom rules, and the vehicle Inventory table.',
      'Designed the full rule lifecycle — add, edit, copy, delete, and version history with a before/after diff — across all five rule objects.',
      'Designed the AI Rule entry that turns a plain-language advance policy into a structured, editable rule.'
    ],
    outcomes: [
      'Rules live at the product level; loans inherit them, with Edit Rule, No Override, and custom-rule states made explicit.',
      'Eligibility built from composable Field / Operator / Value conditions instead of a hardcoded checklist.',
      'Concentration limits paired with warning thresholds, so exposure is visible before it breaches.',
      'Rule changes recorded as versioned, attributable events.'
    ]
  },
  {
    id: 11,
    title: 'Agriculture Collateral — Thirteen Sub-Types, Each With Its Own Information',
    subtitle: 'Modeling commodity crops, livestock, orchards, timber, fisheries, vineyards, and equine operations in one collateral category by giving each sub-type its own configured information component.',
    description: 'A cattle operation, a vineyard, a timber stand, and a commodity-crop farm are valued by different measures, carry different risks, and use different vocabulary. Designed Agriculture as one category with thirteen sub-types, each with its own information component, assembled in the same administration builder as the rest of the collateral system.',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=1080',
    category: ['Enterprise Fintech', 'Information Architecture', 'Form Design'],
    metrics: [
      { icon: 'activity', value: '13', label: 'Agriculture Sub-Types' }
    ],
    tools: ['Figma'],
    link: '/work/agriculture-collateral',
    overview: {
      challenge: 'Agricultural lending does not secure one kind of asset. A single "Agriculture" form with every field would be unusable; thirteen unrelated screens would be unmaintainable.',
      solution: 'One category with thirteen sub-types, each owning an information component with only its own fields and vocabulary, built in the shared administration builder from the same component library as every other collateral category.',
      impact: '• Each sub-type asks only the questions that make sense for it\n• Controlled vocabularies with an "Other" path keep data reportable without blocking unusual records\n• Every yield and volume carries an explicit unit of measurement\n• Builder, shared components, and record header identical to the rest of the system'
    },
    challenge: 'Head count and breeding purpose matter for livestock and mean nothing for timber; merchantable board-feet matter for timber and mean nothing for a vineyard.',
    process: 'Designed about 220 Agriculture frames in the CYNC Figma file — the largest single group in the file — covering the administration builder and the collateral-record views for all thirteen sub-types.',
    isCaseStudy: true,
    productType: 'Enterprise Collateral Management Platform',
    platforms: 'Web (Enterprise SaaS)',
    role: 'Senior Product Designer',
    team: ['Product', 'Engineering', 'Risk', 'Compliance'],
    responsibilities: [
      'Designed the Agriculture section of the collateral administration builder: sub-type policy, drag-in components, Available/Selected field transfer, and live preview.',
      'Designed information components for thirteen sub-types, from Commodity Crops to Stables.',
      'Designed shared entity and ownership, Buyer Information, and Unit of Measurement sections.',
      'Designed the unsaved-changes exit guard and save confirmations.'
    ],
    outcomes: [
      'Thirteen sub-types modeled in one category without thirteen bespoke screens.',
      'Type fields as extendable pick lists with an "Other" path.',
      'Explicit units on every yield and volume.',
      'Agriculture records reuse Appraisal, Insurance, Flood, Land, Equipment, and Real Estate components from the shared library.'
    ]
  },
  {
    id: 12,
    title: 'Borrowing Base Certificate and Accounts Receivable Collateral',
    subtitle: 'Turning a periodic, spreadsheet-shaped lender certificate into a calculated, auditable workflow: select collateral, apply policy and eligibility, override with a recorded reason, calculate availability, keep history, and drive the next due date.',
    description: 'An asset-based loan is only as safe as its borrowing base. Designed the Borrowing Base Certificate as a workflow with arithmetic in the middle — every step from gross to available visible, every override reasoned, every calculation saved as a dated event — plus invoice-level Accounts Receivable collateral and the tickler that asks for the next certificate.',
    image: 'https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&q=80&w=1080',
    category: ['Enterprise Fintech', 'Asset-Based Lending', 'Compliance UX'],
    tools: ['Figma'],
    link: '/work/borrowing-base-certificate',
    overview: {
      challenge: 'The borrower reports the borrowing base on a recurring certificate, and the lender must test it, adjust it, and decide what is actually available to advance. Done by hand, that is a spreadsheet exercise with weak audit trails.',
      solution: 'A BBC workflow that lets the user choose which collateral counts, see exactly why items are ineligible, override a policy rate with a recorded reason, trust a visible calculation, retrieve any past certificate, and be reminded when the next one is due.',
      impact: '• Every step from gross to available shown as a column or row\n• Overrides keep both policy and override values visible, with a required reason\n• Each calculation saved with as-of date, timestamp, submitter, and status\n• Next certificate requested from the same system that will test it'
    },
    challenge: 'A borrowing base number a credit officer cannot trace is a number they will not defend to an examiner. Eligibility depends on aging and credits, so a single receivables balance hides what an asset-based lender tests.',
    process: 'Designed about 145 frames in the CYNC Figma file across the Borrowing Base Certificate, Account Receivable, and the BBC tickler and field-exam flows.',
    isCaseStudy: true,
    productType: 'Enterprise Loan Origination & Collateral Management',
    platforms: 'Web (Enterprise SaaS)',
    role: 'Senior Product Designer',
    team: ['Product', 'Engineering', 'Risk', 'Compliance'],
    responsibilities: [
      'Designed the BBC Summary: collateral selection, overrides with reasons, ineligibles, availability columns, calculation, and export / Send to ABL.',
      'Designed the AR, Inventory, Other Collateral, and Borrowing Base Availability sections of the certificate.',
      'Designed BBC History and certificate setup: frequency, document and account type, field exam, and tickler assignment.',
      'Designed the Accounts Receivable collateral record at the account, invoice, and credit-memo level with aging and per-line eligibility.'
    ],
    outcomes: [
      'The path from what the borrower reported to what is advanceable is traceable dollar by dollar.',
      'Ineligibility chosen from a defined reason list by collateral type, with an Other path and notes.',
      'Recalculations visible as recalculations; any prior certificate retrievable.',
      'Frequency, tickler, and due dates live with the certificate, with an option to send the request to the customer portal.'
    ]
  },
  {
    id: 13,
    title: 'NAV and Subscription Lending Collateral',
    subtitle: 'Modeling fund-based collateral, where the asset is not a thing but a pool of other people\'s commitments, in a way a credit officer can test line by line.',
    description: 'Subscription facilities are secured by limited partners\' uncalled commitments; NAV facilities by a fund\'s portfolio value. Designed both so the headline number (eligible uncalled, eligible NAV) sits above a fully auditable table, with side letters, LP status, and concentration captured as structured data.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1080',
    category: ['Enterprise Fintech', 'Fund Finance', 'Compliance UX'],
    tools: ['Figma'],
    link: '/work/nav-subscription-collateral',
    overview: {
      challenge: 'In fund finance the headline number is a roll-up of many rows, and each row can be excluded, discounted, or flagged for reasons that live in a side letter or a status. The user has to see the total and be able to audit what is inside it.',
      solution: 'A summary strip (eligible figure, exclusion count, Top-1 Concentration) above a fully searchable table per LP or portfolio investment, with required side-letter data, separate eligibility and status fields, per-row advance rate and last-verified date, and sourced, dated, netted NAV.',
      impact: '• Exclusions visible before the table is opened ("34 / 2 excl")\n• Concentration shown on both products, with its formula on screen\n• Side-letter impact captured from a defined vocabulary, not a note\n• Every destructive action guarded and confirmed'
    },
    challenge: 'A credit officer approving an advance needs one number, but will be asked by a committee or examiner why it is that number. Side letters can change what an LP actually owes without changing anything on the face of the commitment.',
    process: 'Designed about 125 frames in the CYNC Figma file across NAV Collateral, Subscription Collateral, and their add, edit, and delete use cases.',
    isCaseStudy: true,
    productType: 'Enterprise Collateral Management Platform',
    platforms: 'Web (Enterprise SaaS)',
    role: 'Senior Product Designer',
    team: ['Product', 'Engineering', 'Risk', 'Compliance'],
    responsibilities: [
      'Designed the Subscription & LP Pool record: summary strip, Subscription tab, and per-LP table with eligibility, advance rate, side letter, and status.',
      'Designed the NAV & Portfolio record: NAV Snapshot, Portfolio Investment table, and roll-ups with stated formulas.',
      'Designed add, edit, and delete flows for limited partners and portfolio investments, with delete guards and confirmations.'
    ],
    outcomes: [
      'Eligible Uncalled and Eligible NAV traceable to the individual rows behind them.',
      'Side Letter Flag required, with a defined impact vocabulary.',
      'Lender eligibility decisions kept separate from facts about the LP or investment.',
      'NAV shown with source, date, and frequency, and netted against fund liabilities.'
    ]
  },
  {
    id: 14,
    title: 'Roles and Permissions',
    subtitle: 'A two-layer access model for a lending platform: reusable Permission Sets composed into Roles, with license tiers, hierarchy, and safe role deletion.',
    description: 'Access for a regulated lending platform has to be precise, yet flexible enough that an administrator can add a new job function without engineering. Designed a two-layer model — reusable Permission Sets composed into Roles — with license tiers beside permissions, effective-permission views, and role deletion that cannot orphan users.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1080',
    category: ['Enterprise Fintech', 'Admin UX', 'Access Control'],
    tools: ['Figma'],
    link: '/work/roles-and-permissions',
    overview: {
      challenge: 'A lending platform has many modules and many job types. If every role defines its own permissions, ten similar roles drift apart and an audit becomes a comparison of ten lists.',
      solution: 'Permissions live in reusable Permission Sets; Roles compose them, optionally starting from an existing role. License type sits beside permissions, parent checks imply their children, effective permissions and hierarchy are visible before saving, and deleting a role is a guided reassignment.',
      impact: '• Changing a Permission Set updates every role that uses it\n• A new job function is mostly a selection task\n• Granting a module always grants the objects inside it\n• No user is left without a role when one is deleted'
    },
    challenge: 'Access has to be precise enough for a regulated institution, and deleting a role with users attached would leave people without access or force engineering to clean up.',
    process: 'Designed about 70 frames in the CYNC Figma file across Create Role, Edit Role, Delete Role, and Create / Edit / View Permission Set.',
    isCaseStudy: true,
    productType: 'Enterprise Loan Origination & Collateral Management',
    platforms: 'Web (Enterprise SaaS)',
    role: 'Senior Product Designer',
    team: ['Product', 'Engineering', 'Risk', 'Compliance'],
    responsibilities: [
      'Designed the Roles tab and the Create / Edit Role builder: Base or Custom type, license type, Use Existing Role as Base, attached Permission Sets, Document Type access, and View Hierarchy.',
      'Designed the Permission Sets tab and its Create / View / Other permission matrix with module sub-permissions.',
      'Designed Delete Role with batch or individual user reassignment.'
    ],
    outcomes: [
      'Two-layer model keeps similar roles from drifting apart.',
      'Parent permissions select their sub-permissions automatically.',
      'Entitlement and permission configured in the same place.',
      'Every role and permission set carries Created By, Date Created, Date Modified, and Last Modified By.'
    ]
  },
  {
    id: 15,
    title: 'Equipment and Deposit Collateral',
    subtitle: 'Two categories at opposite ends of tangibility: serial-numbered equipment verified against the collateral record in real time, and deposit accounts configured from the same component builder as every other category.',
    description: 'Equipment is identified by type, year, make, model, and serial number; deposits by holder, account, balance, and as-of date. Designed both through the same patterns — identity as the key field checked as the user types, and each category assembled in the shared builder with its own details component instead of its own tooling.',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1080',
    category: ['Enterprise Fintech', 'Information Architecture', 'Form Design'],
    tools: ['Figma'],
    link: '/work/equipment-deposit-collateral',
    overview: {
      challenge: 'The same piece of equipment can be financed twice, or pledged on two loans, by mistake or by fraud, and the serial number is the only reliable key. Deposits share almost nothing with equipment, yet both have to fit one system.',
      solution: 'A required serial number checked against collateral in real time, linking to the existing record or raising an error; forms shaped by equipment or vehicle type; generated readable record names; structured, mapped locations; one admin details component per equipment family; and Deposit assembled in the same builder.',
      impact: '• Duplicate or conflicting serials caught as the analyst types\n• Adding equipment to a loan links to the existing asset instead of retyping it\n• Equipment families share one flow without a giant form\n• Deposit needed its own data model, not its own tooling'
    },
    challenge: 'Equipment and deposits have little in common — one is a movable, serial-numbered asset, the other a balance held at a financial institution — and both have to be handled through the same patterns.',
    process: 'Designed about 25 frames in the CYNC Figma file covering Equipment on a loan, the Equipment admin builder, and Deposit administration.',
    isCaseStudy: true,
    productType: 'Enterprise Collateral Management Platform',
    platforms: 'Web (Enterprise SaaS)',
    role: 'Senior Product Designer',
    team: ['Product', 'Engineering', 'Risk', 'Compliance'],
    responsibilities: [
      'Designed the loan-side Equipment flow: empty state, type selection, equipment form, location with map, photos, and real-time serial check.',
      'Designed the Equipment admin builder with one details component per equipment family and shared sections for serial, dimensions, condition, pricing, maintenance and warranty, damage, and appraisal.',
      'Designed Deposit administration: sub-types, policy fields, and the Deposit Details component.'
    ],
    outcomes: [
      'Serial Number required and checked in real time against existing collateral.',
      'Matched equipment fills from the collateral record and confirms "Collateral successfully linked."',
      'Record titles generated from year, make, model, and type.',
      'A new liquid-asset category assembled from the shared builder without custom tooling.'
    ]
  },
  {
    id: 6,
    title: 'Commercial Real Estate Collateral',
    subtitle: 'One of 11 structurally distinct collateral categories in Cync\'s platform — the highest-integration category, assembling appraisal, comparable, flood, title, tax, environmental, insurance, and lien data into one auditable record, administered through a component-based record builder, and linked to loans that may spread exposure across more than one property.',
    description: 'The collateral category with the most third-party integration surface and the most compliance-driven due diligence in the platform. Twelve property sub-types are assembled in Admin from a shared due-diligence component library rather than built as bespoke screens, with a many-to-many loan-to-property pledge/link mechanism for loans secured by more than one CRE property.',
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&q=80&w=1080',
    category: ['Enterprise Fintech', 'Commercial Real Estate', 'Compliance UX'],
    metrics: [
      { icon: 'activity', value: '12', label: 'Property Sub-Types, One Component Library' },
      { icon: 'check', value: '13', label: 'Collateral Record Tabs — Widest of Any Category' }
    ],
    tools: ['Figma'],
    link: '/work/commercial-real-estate-collateral',
    overview: {
      challenge: 'A CRE record has to assemble evidence from independent sources — appraisal, comparables, flood certification, title, tax assessment, environmental screening, insurance, and lien search — into a single record a credit officer, a compliance reviewer, and an examiner can all rely on. Twelve property sub-types mostly need the same due-diligence data but different property facts.',
      solution: 'Designed a component-based record builder in Admin — due-diligence components (Appraisal, Flood, Title, Tax, Insurance, Environmental) shared across all twelve sub-types, with only the property-facts component varying — plus a many-to-many loan-to-property pledge/link mechanism, a three-tab Appraisal/Review/Evaluation structure, a UCC filing register with its own lifecycle, and a synchronized map/list comparable-property view.'
    },
    challenge: 'Commercial Real Estate is the collateral category with the most third-party integration surface and the most compliance-driven due diligence of any type in the platform.',
    process: 'Translated appraisal, title, flood, tax, and environmental due-diligence requirements into the record structure, the sub-type component builder, and the field specs, as foundational designer and de facto business analyst for the category.',
    status: 'Completed',
    isCaseStudy: true,
    productType: 'Enterprise Collateral Management Platform',
    platforms: 'Web (Enterprise SaaS · Angular)',
    role: 'Foundational Designer · De Facto Business Analyst',
    team: ['Product', 'Engineering', 'Risk', 'Compliance'],
    responsibilities: [
      'Translated appraisal, title, flood, tax, and environmental due-diligence requirements into the CRE record structure and field specs.',
      'Designed the component-based sub-type builder in Admin — shared due-diligence components plus a variable property-facts component, supporting at least twelve CRE sub-types from one library.',
      'Designed the many-to-many loan-to-property pledge/link mechanism supporting loans secured by more than one CRE property.',
      'Designed the Appraisal Details three-tab structure separating raw appraisal data entry, regulatory-compliance review, and independent evaluation records.',
      'Designed the UCC filing register (Lien & Perfection) modeling liens as filings with their own lifecycle rather than a status field.',
      'Designed the synchronized map/list comparable-property view with a persistent filter panel (radius, property type, transaction type, building class, size range).'
    ],
    outcomes: [
      'Twelve property sub-types assembled from one shared due-diligence component library, rather than built as bespoke screens — adding a new sub-type is a configuration task.',
      'Widest tab set of any collateral category in the platform — a direct consequence of how many independent data sources a CRE underwriting decision depends on.',
      'Loan-side exposure aggregation across every linked property, rather than requiring manual totaling across individually opened property records.',
      'Appraisal, Review, and Evaluation kept as separate tabs reflecting three distinct workflows with different owners and regulatory weight.',
      'The same due-diligence components (Environmental, Insurance, Title Search) confirmed reused on non-CRE collateral records, validating the shared-library design.'
    ]
  },
  {
    id: 3,
    title: 'Cync Collateral Platform',
    subtitle: 'Designing distinct information architecture across 11 structurally different collateral categories — spanning a real, in-production taxonomy of 1,798 collateral types and 2,344 sub-types — connected to loans through an explicit pledge/link relationship between two independent services.',
    description: 'Collateral and Loan are separate, independently operable modules. The design problem was the connective layer between them: how a single collateral record gets pledged or linked to one or more loans, and how policy set once in Admin (advance rates, eligibility) flows through to what a loan officer sees, without re-entry.',
    image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    category: ['Enterprise Fintech', 'Information Architecture', 'Design Systems', 'Compliance UX', 'Angular'],
    metrics: [
      { icon: 'activity', value: '11', label: 'Structurally Distinct Collateral Categories' },
      { icon: 'check', value: '1,798', label: 'Collateral Types Configured' },
      { icon: 'trending-up', value: '2,344', label: 'Sub-Types Configured' }
    ],
    tools: ['Figma', 'Miro', 'Analytics', 'Protopie'],
    link: '/work/cync-collateral-platform',
    overview: {
      challenge: 'Collateral and Loan are independent services that don\'t share a lifecycle — an asset can be assessed, appraised, and priced before it\'s ever attached to a loan, and a loan progresses through underwriting independent of which collateral ends up securing it. Eleven collateral categories also differ in data model and structure, not just field values.',
      solution: 'Kept Collateral and Loan separate, connected by an explicit pledge/link action. Gave each of the 11 collateral categories its own information architecture — tab set, field structure, integration points — unified only at the record-chrome level: shared header metrics, action patterns, and audit behavior.',
      impact: '• 11 collateral categories, each with a distinct information architecture\n• 1,798 configured collateral types and 2,344 sub-types in the production taxonomy\n• Advance rate and eligibility set once on the collateral side and inherited by every linked loan — no re-entry\n• Cross-collateralization visible per relationship in a single rollup grid'
    },
    challenge: 'Commercial Real Estate, NAV, Investment, Deposit, Accounts Receivable, Inventory, Equipment, Agriculture, Subscription, Automobiles, and Business collateral don\'t just differ in field values — they differ in data model and structure. They aren\'t the same shape of record with different fields switched on; they\'re different records. And each has to connect to loans owned by a separate, independent module.',
    process: 'Translated compliance and lending-policy requirements (advance rates, eligibility rules, audit requirements) into field-level record and admin specs, designed a category-specific architecture for each collateral type, and designed the pledge/link relationship connecting collateral records to loans.',
    status: 'Completed',
    isCaseStudy: true,
    productType: 'Enterprise Collateral Management Platform',
    platforms: 'Web (Enterprise SaaS · Angular)',
    timeline: '2022 – Present',
    role: 'Senior Product Designer · Product Owner · Business Analyst',
    team: ['Product', 'Engineering', 'Risk', 'Compliance'],
    responsibilities: [
      'Foundational designer and de facto business analyst across the collateral module.',
      'Designed distinct information architecture for each of the 11 collateral categories, unified by shared header metrics, action patterns, and audit behavior.',
      'Designed the pledge/link relationship between independent Collateral and Loan modules — Pledged Loans (Internal / External / In-Process) on the collateral side, Collateral Information on the loan side.',
      'Designed the Admin taxonomy layer (Collateral Management) and securities master (Investments Management), with full audit trail per type and sub-type.',
      'Translated compliance and lending-policy requirements into field-level record and admin specs.'
    ],
    outcomes: [
      '11 collateral categories, each with its own tab set, field structure, and third-party integration points (Dataverify, EODHD).',
      '1,798 configured collateral types and 2,344 sub-types across the in-production taxonomy.',
      'Policy (advance rate, eligibility) set once in Admin and inherited automatically by every loan the collateral is linked to.',
      'A single relationship\'s full collateral exposure, across every loan it\'s pledged against, visible in one grid.',
      'Flood Details runs in integrated (Dataverify) and manual modes off the same tab structure — no relearning between institutions.'
    ]
  },
  {
    id: 4,
    title: 'Cync Advance Analytics',
    subtitle: 'A consolidated reporting and dashboard layer for Cync\'s application suite, built around HMDA and lending-compliance data — conceptually similar to Google Analytics in role, but for Cync\'s own products. Shipped and integrated with LOS and Financial Analyzer.',
    description: 'Built from scratch, not a redesign of a prior tool: a single application aggregating reports, dashboards, self-service SQL access, and a lending-compliance glossary from individual Cync applications, rather than requiring users to check each source system separately. Currently shipped and integrated with the Loan Origination System (LOS) and Financial Analyzer, with the stated intent to extend coverage to additional Cync applications over time.',
    image: '/case-studies/advance-analytics-screens/01-overview.png',
    category: ['Enterprise Fintech', 'Data Visualization', 'Compliance UX'],
    metrics: [
      { icon: 'activity', value: '7', label: 'Confirmed Top-Level Sections' },
      { icon: 'check', value: '2', label: 'Integrated Source Systems (LOS, Financial Analyzer)' }
    ],
    tools: ['Figma'],
    link: '/work/cync-advance-analytics',
    overview: {
      challenge: 'Cync application data lived in separate source systems, requiring users to check each one individually rather than viewing reports and dashboards in one consolidated place — with no prior in-house analytics product to build from.',
      solution: 'Built a consolidated analytics application from scratch — Overview, Dashboards, Reports, DWH Query (self-service SQL against the source data warehouse), Metadata (a built-in lending-compliance glossary), Document & Data, and Administration — aggregating LOS and Financial Analyzer into one interface, with the stated intent to extend to additional Cync applications over time.'
    },
    status: 'Completed',
    isCaseStudy: true,
    productType: 'Enterprise Web',
    platforms: 'Web (Enterprise SaaS)',
    role: 'Lead Product Designer'
  },
  {
    id: 2,
    title: 'Bank of America Bill Pay Redesign',
    subtitle: 'Enhancing digital banking experience for over 68 million customers through an intuitive and user-friendly Bill Pay feature redesign.',
    description: 'Redesigned the Bill Pay feature on the Bank of America mobile app — simplifying payment scheduling, improving payment history visibility, and creating a smoother experience for individual and business banking customers.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    category: ['Consumer Banking', 'Mobile UX', 'Fintech'],
    metrics: [
      { icon: 'users2', value: '68M+', label: 'Customers Served' }
    ],
    tools: ['Figma', 'UserTesting', 'App Store Review Analysis'],
    link: '/work/bank-of-america-mobile-banking',
    overview: {
      challenge: 'Users found the Bill Pay feature complex and inflexible: difficult scheduling and management, limited ability to modify options and delivery dates, confusing payment formats, and difficulty tracking payment history.',
      solution: 'Streamlined the bill payment UI, added scheduling flexibility with real-time notifications, and upgraded payment history to a searchable, filterable view — validated through two rounds of usability testing with returning participants.',
      impact: '• Streamlined UI for setting up and managing bill payments\n• Greater scheduling flexibility with real-time notifications and intuitive prompts\n• Searchable, detailed payment history with filtering by date, recipient, and payment type\n• Delete button, in-flow help text, and a repeat-payment button added after usability testing feedback'
    },
    challenge: 'Users expressed dissatisfaction with the Bill Pay feature: complexity in managing and scheduling payments, limited flexibility in modifying delivery dates, confusing payment formats, and difficulty tracking payment history.',
    process: 'Conducted app store feedback analysis, surveys, and in-depth user interviews. Designed solutions for two user groups (individual and business), then validated with two rounds of usability testing using returning participants and realistic task scenarios.',
    team: [
      'Product Designer (Researcher)',
      'Lead Product Designer',
      'UX Designers & Researchers (4)'
    ],
    timeline: '2022',
    role: 'Product Designer & Researcher',
    keyFeatures: [
      'Streamlined bill payment scheduling and management UI',
      'Real-time notifications and intuitive prompts for scheduled payments',
      'Searchable, filterable payment history',
      'Delete button for managing scheduled payments',
      'In-flow help text throughout the payment process',
      'Repeat bill payment button for recurring payments'
    ],
    status: 'Completed',
    isCaseStudy: true,
    productType: 'Consumer Banking Mobile Application',
    platforms: 'Bank of America Mobile App',
    responsibilities: [
      'Conducted user feedback analysis, surveys, and interviews to identify Bill Pay pain points.',
      'Designed solutions for two user groups: individual users and business owners.',
      'Ran two rounds of usability testing with returning participants using realistic task scenarios.',
      'Iterated the design based on usability findings — added a delete button, help text, and a repeat-payment button.'
    ],
    outcomes: [
      'Streamlined UI for setting up and managing bill payments.',
      'Enhanced scheduling flexibility with real-time notifications.',
      'Upgraded, searchable payment history with filtering by date, recipient, and payment type.',
      'Iterative refinements (delete button, help text, repeat payment) added directly from usability testing feedback.'
    ]
  }
];
