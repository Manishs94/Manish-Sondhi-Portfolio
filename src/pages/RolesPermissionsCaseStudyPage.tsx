import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import { SEOHead } from '@/components/SEOHead';
import CaseStudyPageLayout from '@/components/CaseStudyPageLayout';
import RolesPermissionsDiagram from '@/components/motion/RolesPermissionsDiagram';
import { caseStudies } from '@/utils/data/caseStudies';

const project = caseStudies.find((p) => p.id === 14)!;

// Local filenames under /case-studies/ — ImagePlaceholder shows an "Export Needed" box
// with the expected filename until the Figma frame is exported to that path.
const img = {
  hero: 'rp-roles-list.png',
  roleBuilder: 'rp-create-role.png',
  matrix: 'rp-permission-set-matrix.png',
  effective: 'rp-permission-set-view.png',
  reassign: 'rp-delete-role-reassign.png',
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

const permissionModules = [
  'Audit Logs', 'Loans & Packages', 'Covenant Management', 'Collateral Management',
  'Credit Memorandum Management', 'Covenants & Ticklers', 'Credit Availability Management',
  'Exceptions Management', 'Exposure Management', 'Files Management', 'Forms Template Management',
  'Flexi Forms Template Management', 'Loan Auto Decision Templates Management',
  'Risk Rating Templates', 'Loan Type & Product Management', 'Change Memo Management',
  'Loan Approval Management', 'Team Management', 'Profile Management', 'Spreading Management',
  'Users', 'Roles & Permissions',
];

const keyDecisions = [
  {
    title: 'Parent Checks Imply Their Children',
    body: 'A design note in the Permission Set frames states that when a user selects a main checkbox, its sub-type is selected too (for example, selecting Create on Exposure Management also selects the Exposure Type). This prevents the common admin error of granting a module but not the object inside it, which produces a role that looks right and fails in use.',
    image: img.matrix,
  },
  {
    title: 'License Type Sits Beside Permissions',
    body: 'License Type (Standard, Professional, Premium) is a field on both roles and permission sets, so entitlement and permission are configured in the same place instead of reconciled afterward.',
  },
  {
    title: 'Show the Effective Permissions Before Saving',
    body: 'The role builder includes a Permission Set View and a View Hierarchy, so the administrator can see what a role will actually grant, and where it sits, before assigning it to people.',
    image: img.effective,
  },
  {
    title: 'Deleting a Role Cannot Orphan Users',
    body: 'The Problem: deleting a role with users attached would leave people without access, or force engineering to clean up.\n\nThe Decision: deletion is a guided reassignment. It lists the affected users, offers bulk or per-user reassignment, tracks how many remain, and only completes when nobody is left without a role.',
    image: img.reassign,
  },
  {
    title: 'Auditability by Default',
    body: 'Every role and permission set carries Created By, Date Created, Date Modified, and Last Modified By, and Audit Logs is itself a permissioned module, so who changed access is answerable.',
  },
];

const additionalSections = [
  {
    title: 'Change a Set, Update Every Role',
    content: <RolesPermissionsDiagram />,
  },
  {
    title: 'The System',
    content: (
      <>
        <p className="text-xs text-portfolio-text-light italic mb-6">
          Source: about 70 frames in the CYNC Figma file (Roles &amp; Permissions: Create Role, Edit
          Role, Delete Role, Create/Edit/View Permission Set). Role names, user names, and dates in
          the frames are sample data.
        </p>

        <p className="font-semibold text-portfolio-text-dark mb-2">Roles tab</p>
        <p className="text-sm text-portfolio-text-light leading-relaxed mb-8">
          A list of roles with Role Name, License Type (Standard, Professional, Premium), and Number
          of Users. Sample roles include Relationship Manager, Jr. Credit Analyst, Jr.
          Administrator, Chief Credit Officer, Chief Lending Officer, and Lending Officer. A Create
          Role action opens the builder.
        </p>

        <p className="font-semibold text-portfolio-text-dark mb-2">Create / Edit Role</p>
        <ul className="space-y-2 text-sm text-portfolio-text-light leading-relaxed mb-8 list-disc pl-5">
          <li>
            Role Name, Type (<Strong>Base</Strong> or <Strong>Custom</Strong>), License Type, and an
            optional <Strong>Use Existing Role as Base</Strong> to start from a current role's
            permissions.
          </li>
          <li>
            <Strong>Permission Sets</Strong> attached to the role (for example Permission Set 1, 2,
            3, 4), with a <Strong>Create Permission Sets</Strong> shortcut.
          </li>
          <li>
            A <Strong>Permission Set View</Strong> that expands the permissions in effect.
          </li>
          <li>
            A <Strong>Document Type</Strong> section grouping access by document category (Corporate
            Docs, Financial Docs, Financial Documentation, Individual Docs, Legal/Compliance Docs,
            Property Docs, Real Estate Docs, Unassigned), each with a count.
          </li>
          <li>
            <Strong>View Hierarchy</Strong> with a help affordance, showing where the role sits
            relative to others.
          </li>
          <li>
            Audit fields on edit: Created By, Date Created, Date Modified, Last Modified By.
          </li>
        </ul>

        <p className="font-semibold text-portfolio-text-dark mb-2">Permissions covered</p>
        <p className="text-sm text-portfolio-text-light leading-relaxed mb-3">
          The permission list spans module-level areas, each with Create, View, and Other columns:
        </p>
        <div className="mb-8">
          <Chips items={permissionModules} />
        </div>

        <p className="font-semibold text-portfolio-text-dark mb-2">Permission Sets</p>
        <p className="text-sm text-portfolio-text-light leading-relaxed mb-8">
          A separate tab with Permission Set Name, License Type, and a record of who created and
          modified it. Sample sets: Collateral Record, Loan Administration, Collateral Admin,
          Covenant Evaluations, plus named license tiers (Cync-Maple, Cync-Ash, Cync-Alder). The
          permission matrix has Create, View, and Other columns and sub-permissions under modules
          (for example under Exposure Management: Exposure Type, Exposure, Affiliations, Credit
          Reports; under Users: Unlock User; under Loan Auto Decision Templates: Attributes, Groups,
          Logic; plus Approve Bank Details, Bank Details and Servicing Groups, Lender/Vendor
          Profiles).
        </p>

        <p className="font-semibold text-portfolio-text-dark mb-2">Delete Role with reassignment</p>
        <p className="text-sm text-portfolio-text-light leading-relaxed">
          Deleting a role that has users opens a reassignment step:{' '}
          <Quote>The following records will be affected</Quote>, a user list with search, a choice
          of <Strong>Batch Reassign</Strong> or <Strong>Individual Reassign</Strong>, a role
          selector (<Quote>Assign Jr. Credit Analyst to…</Quote>), a counter (
          <Quote>1 user remaining to reassign</Quote>), and a confirmation (
          <Quote>Role successfully deleted</Quote>).
        </p>
      </>
    ),
  },
  {
    title: 'Related Work',
    content: (
      <p className="text-sm text-portfolio-text-light leading-relaxed">
        The same "know the blast radius before you confirm" principle shapes delete versus
        deactivate in{' '}
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
        Designer of the Roles &amp; Permissions flows shown in the CYNC Figma file.
      </p>
    ),
  },
];

const images = [
  { filename: img.hero, caption: 'Roles tab — role, license type, number of users' },
  { filename: img.roleBuilder, caption: 'Create Role — Permission Sets, Document Type, View Hierarchy' },
  { filename: img.matrix, caption: 'Permission Set matrix — Create, View, Other with sub-permissions' },
  { filename: img.effective, caption: 'Permission Set View — effective permissions' },
  { filename: img.reassign, caption: 'Delete Role — batch or individual reassignment' },
];

const closingReflection = [
  'Access control is a configuration problem, and the lesson is to separate what changes often from what should not. Permission Sets hold the reusable bundles; Roles compose them. That keeps similar roles from drifting apart and makes a new job function a selection task.',
  'The details that prevent errors matter more than the layout: parent permissions that imply their children, an effective-permissions view before saving, and role deletion that cannot orphan users. Good admin design removes the mistakes an administrator would otherwise discover in production.',
];

const RolesPermissionsCaseStudyPage = () => {
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
          company="Cync Software (nCino)"
          heroImage={img.hero}
          overviewText="A lending platform has many modules (loans, collateral, covenants, credit memos, exposure, files, spreading, exceptions, auto-decisioning) and many job types (analysts, relationship managers, credit officers, administrators). Access has to be precise enough for a regulated institution, and flexible enough that an administrator can add a new job function without a request to engineering."
          problemTitle="Two Objects, Not One"
          problemText="The design splits the problem into two objects. Permission Sets are reusable bundles of permissions. Roles are what a user is assigned, and are built from Permission Sets (and, optionally, an existing Role as a base)."
          hardDecisionImage={img.roleBuilder}
          hardDecisionIntro="Two Layers, Not One."
          hardDecisionBody={'The problem: if every role defines its own permissions, ten similar roles drift apart and an audit becomes a comparison of ten lists. The decision: permissions live in Permission Sets; roles compose them. Changing a set updates every role that uses it, and a new role is mostly a selection task. The Base/Custom type and "Use Existing Role as Base" support the common case of "like a Credit Analyst, plus one thing."'}
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

export default RolesPermissionsCaseStudyPage;
