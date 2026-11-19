import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import { SEOHead } from '@/components/SEOHead';
import CaseStudyPageLayout from '@/components/CaseStudyPageLayout';
import ImagePlaceholder from '@/components/ImagePlaceholder';
import { caseStudies } from '@/utils/data/caseStudies';

const project = caseStudies.find((p) => p.id === 22)!;

// Exports from the design system Figma file, under /case-studies/infinite-screens/.
// Only screens without client brand marks, person names, or case IDs are used; the
// introduction, colors, calendar, and app-shell exports are cropped or masked to remove
// brand text, logos, and the introduction's inaccurate counts.
const img = {
  introduction: 'infinite-screens/01-introduction.png',
  colors: 'infinite-screens/02-colors.png',
  typography: 'infinite-screens/03-typography.png',
  buttons: 'infinite-screens/04-buttons.png',
  appShell: 'infinite-screens/06-app-shell-admin.png',
  progress: 'infinite-screens/12-progress-and-steppers.png',
  packet: 'infinite-screens/13-dual-selection-packet-documents.png',
  calendar: 'infinite-screens/14-availability-calendar.png',
};

const Strong: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="font-semibold text-portfolio-text-dark">{children}</span>
);

const Code: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <code className="text-xs bg-portfolio-bg-light px-1.5 py-0.5 rounded">{children}</code>
);

const P: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <p className="text-sm text-portfolio-text-light leading-relaxed mb-4">{children}</p>
);

const H: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <p className="font-semibold text-portfolio-text-dark mb-2 mt-6">{children}</p>
);

const UL: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <ul className="space-y-2 text-sm text-portfolio-text-light leading-relaxed mb-4 list-disc pl-5">
    {children}
  </ul>
);

const Shot: React.FC<{ file: string; caption: string }> = ({ file, caption }) => (
  <div className="my-6">
    <ImagePlaceholder filename={file} caption={caption} aspect="wide" />
    <p className="text-xs text-portfolio-text-light mt-2">{caption}</p>
  </div>
);

const keyDecisions = [
  {
    title: 'Build Tables From Cells, Not From Screens',
    body: 'Instead of drawing each table, the system defines the parts (cell kinds, header states, row states, pagination, action menus) and two axes: type and density. Normal rows have a 40px minimum and Small rows 32px, with the title and pagination bands at 48px. The file states these are minimums, since clinical content wraps. The five recipes are assembled from the same parts, so a new table starts as a recipe rather than a blank canvas.',
  },
  {
    title: 'Two Input Styles for Two Jobs',
    body: 'Text field, dropdown, date picker and search each come in Framed and Frameless forms. Framed suits forms. Frameless suits cells inside tables, where the editable-cell states (hover, editing, error) borrow the same fields.',
  },
  {
    title: 'Put the Business Rule in the Empty State',
    body: 'In Packet documents, the empty packet message reads: "A CLIN billed to VA needs at least one document." The move arrows are disabled until something is selected. "Send to VA" is shown as a read-only status, "set by the system on accept", so the user is not asked to set what the system decides. The pattern teaches the rule at the moment it matters.',
  },
  {
    title: 'Show Availability States, Not Just Availability',
    body: 'The slot cell has seven states: Available, Selected, Booked, Event, Holiday, Unavailable and Closed. The day column has Open, Closed and Holiday forms. The calendar states its slot duration (45 minutes) and notes that times display in the facility time zone. Scheduling errors in a multi-facility setting usually come from time-zone ambiguity, so the system surfaces it on the component.',
  },
  {
    title: 'Document Where Each Example Came From',
    body: 'Table recipes carry notes citing their source screens and caveats, for example that one source shows no pagination, and that one inner header label was kept as in the source rather than normalized. The documentation separates what the design asserts from what it merely illustrates.',
  },
];

const additionalSections = [
  {
    title: 'Foundations',
    content: (
      <>
        <p className="text-xs text-portfolio-text-light italic mb-6">
          Source: the design system's Figma file (a single Design System page with local text
          styles, paint styles, color variables, and component variants). All data in the screens
          is sample data, not production records; the file labels its own examples this way.
          Client brand names are omitted.
        </p>
        <UL>
          <li>
            <Strong>Color.</Strong> The primary blue is documented as derived from VA identity
            guidelines. Primary runs 50 to 900. Default is <Code>#244794</Code>, hover is{' '}
            <Code>#1C3873</Code>, pressed is <Code>#142A57</Code>. Neutral runs White to 900.
            Success, Error and Warning each have their own scale. Every color is published as both a
            paint style and a variable.
          </li>
          <li>
            <Strong>Typography.</Strong> Open Sans throughout, following VA/USWDS standards.
            Headings run H1 36/44 bold down to H6 16/24 semibold. Body is 16/24. Captions, overline
            and all UI text (button, label, helper) are 14/20, so nothing in the interface drops
            below 14px.
          </li>
          <li>
            <Strong>Icons.</Strong> A 20px Lucide set (grid, chevrons, plus, minus, search, file,
            download, maximize, close and their active or danger states).
          </li>
        </UL>
        <Shot file={img.colors} caption="Color: primary, neutral, and semantic scales" />
        <Shot file={img.typography} caption="Typography: Open Sans, 14px minimum for UI text" />
      </>
    ),
  },
  {
    title: 'Components',
    content: (
      <>
        <UL>
          <li>
            <Strong>Buttons.</Strong> Primary, Secondary, Outlined, Danger, icon-led variants
            (primary with icon, text with icon, icon only) and a Split button. Each has Default,
            Hover and Disabled states across five sizes, Large to XXS. A full dark-mode set sits
            beside the light one. Semi Bold 600 throughout, per the file's note on VA standards.
          </li>
          <li>
            <Strong>Form controls.</Strong> Text field (default, with icon, with character count),
            frameless text box, text area, dropdown (framed and frameless, single, multiselect and
            checkbox select), date picker (date, and date and time), calendar with month and year
            views, checkbox, radio, toggle, search, tag input, authentication code, file upload
            (empty, uploading, success, files, error), file row and multi-select chip. States
            include focused, filled, disabled, read-only, error and success.
          </li>
          <li>
            <Strong>Navigation and app shell.</Strong> Navigation tabs (primary, secondary,
            breadcrumb, link bar, top level), appointment and case tabs, section subtabs and a
            section grid. The shell has a header, footer, a side rail with ten states, and two-level
            menu items. A composed "Admin, all configuration permissions" screen shows the shell in
            use.
          </li>
          <li>
            <Strong>Tables.</Strong> Six table types: Primary, Expandable, Inline Edit, Checkbox,
            Radio and Toggle Actions. Each comes in Normal and Small density, populated and empty.
            Built from cell kinds (text, link, number, date and time, badge, actions), six badge
            tones, header cells with sort states, editable cells with error states, row states,
            pagination and action menus.
          </li>
          <li>
            <Strong>Table recipes.</Strong> Five composed tables: Provider Appointment, Final
            Contention Review, Diagnostics, Scheduling and a Grouped Table with expandable case
            detail.
          </li>
          <li>
            <Strong>Overlays and feedback.</Strong> Toasts and modals in four semantic types plus a
            Delete modal, each in light and dark. Form side drawers in three widths. Progress bars
            in three sizes with progress, complete, success and error styles, and progress and
            template steppers in horizontal and vertical forms.
          </li>
        </UL>
        <Shot file={img.buttons} caption="Buttons: types, states, sizes, light and dark" />
        <Shot file={img.appShell} caption="App shell: side rail and two-level menu on the Admin configuration screen" />
        <Shot file={img.progress} caption="Progress bars and steppers" />
      </>
    ),
  },
  {
    title: 'Workflow Patterns',
    content: (
      <>
        <H>Packet documents (dual selection)</H>
        <P>A two-list selector for moving documents into the packet sent to the VA.</P>
        <Shot file={img.packet} caption="Packet documents: default, selected, and empty states" />
        <H>Provider availability calendar</H>
        <P>
          Slot cells, day columns, a provider panel and a week calendar, composed into two pages:
          My Availability and All Facilities and Providers.
        </P>
        <Shot file={img.calendar} caption="Availability calendar parts: slot states, day columns, week calendar, and provider panel" />
        <P>The file holds about 750 component variants across these sections.</P>
      </>
    ),
  },
  {
    title: 'Related Work',
    content: (
      <P>
        The same tables-from-parts and framed / frameless input approach appears in{' '}
        <Link to="/work/cync-design-system" className="text-portfolio-accent underline hover:no-underline">
          The Cync Design System
        </Link>
        , built for a lending platform.
      </P>
    ),
  },
  {
    title: 'Role',
    content: (
      <P>
        Authored the design system in Figma: its foundations, components, table recipes, workflow
        patterns, and documentation.
      </P>
    ),
  },
];

const closingReflection = [
  'This is a working component system for dense enterprise workflows, not a style guide. It shows a designer who anchors decisions to a standard, models state exhaustively (disabled, read-only, error, empty, light, dark), and turns repeated screens into parts plus recipes. The Packet documents and availability calendar show the system handling real operational rules.',
];

const VaOperationsDesignSystemCaseStudyPage = () => {
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
          eyebrow="Healthcare & Federal Systems"
          title={project.title}
          subtitle={project.subtitle}
          role={project.role}
          company="Infinite Computer Solutions"
          heroImage={img.introduction}
          overviewText="The platform is a healthcare-adjacent, VA-facing operations product for exam logistics, provider billing, and compliance reporting. Its screens are dense: case queues, appointment scheduling, document packets, provider availability and billing. The design system's introduction states the goal: a unified design language across the platform's three brands, built for structured, trustworthy, and modern enterprise experiences."
          problemTitle="Three Brands, Many Dense Screens"
          problemText="The problem this system solves is consistency across three brands and many data-heavy screens. A table, a date field or an error state should look and behave the same in every one of them. The system is one Figma page covering foundations, form controls, navigation, tables, overlays, progress, two composed workflow patterns, and a provider availability calendar."
          hardDecisionIntro="Anchor to VA and USWDS Instead of Inventing a Look."
          hardDecisionBody="The color, type and button rules all point back to a public standard: blue from VA identity guidelines, Open Sans, 14px minimum, Semi Bold buttons, and a contrast target noted as WCAG AA. For a platform whose users and stakeholders work in the VA world, that removes taste arguments and makes review easier."
          keyDecisions={keyDecisions}
          additionalSections={additionalSections}
          closingReflection={closingReflection}
        />
      </div>
      <Footer />
    </div>
  );
};

export default VaOperationsDesignSystemCaseStudyPage;
