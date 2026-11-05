import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import { SEOHead } from '@/components/SEOHead';
import CaseStudyPageLayout from '@/components/CaseStudyPageLayout';
import { caseStudies } from '@/utils/data/caseStudies';

const project = caseStudies.find((p) => p.id === 16)!;

const dir = 'design-system-screens';

// Wide screens render full width; tall style-guide pages render at natural height in a
// two-column grid so they aren't cropped by the layout's fixed-aspect image frame.
const wideScreens = [
  { file: '01-introduction.png', caption: 'Introduction' },
  { file: '03-typography.png', caption: 'Typography' },
];

const tallScreens = [
  { file: '02-colors.png', caption: 'Colors' },
  { file: '04-buttons.png', caption: 'Buttons' },
  { file: '05-grid.png', caption: 'Grid and breakpoints' },
  { file: '06-alerts-and-errors.png', caption: 'Alerts and errors, including the toast copy pattern' },
  { file: '07-progress-and-steppers.png', caption: 'Progress bars and steppers' },
  { file: '08-menus-and-submenus.png', caption: 'Menus and submenus' },
];

const appliedScreens = [
  { file: '09-spreading-system.png', caption: 'The system applied: Spreading' },
  { file: '10-risk-rating-concepts.png', caption: 'The system applied: Risk Rating' },
  { file: '11-loan-concepts.png', caption: 'The system applied: Loans' },
];

const Screenshot: React.FC<{ file: string; caption: string }> = ({ file, caption }) => (
  <figure>
    <a
      href={`/case-studies/${dir}/${file}`}
      target="_blank"
      rel="noopener noreferrer"
      className="block rounded-2xl overflow-hidden border border-gray-200 bg-white hover:border-portfolio-accent/40 transition-colors"
    >
      <img
        src={`/case-studies/${dir}/${file}`}
        alt={caption}
        loading="lazy"
        className="w-full h-auto"
      />
    </a>
    <figcaption className="text-sm text-portfolio-text-light mt-3">
      <span className="font-semibold text-portfolio-text-dark">{caption}.</span>
    </figcaption>
  </figure>
);

const Strong: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="font-semibold text-portfolio-text-dark">{children}</span>
);

const keyDecisions = [
  {
    title: 'Meaning Carried by Color, With Ramps for State',
    body: 'Color is semantic first (green success, red error, orange warning, blue action) and each hue has a ramp of tints for hover, selected, and disabled, so a state change is a step along the ramp, not a new color. In a lending product, where a red or green badge can mean approve or decline, the meaning must be the same on every screen.',
    image: `${dir}/02-colors.png`,
  },
  {
    title: 'One Feedback Pattern, Written Down',
    body: 'Toasts come in four types (Success, Error, Warning, Information) with a documented copy pattern: "[Noun] successfully [verbed]." The consequence is visible across the platform. "Equipment successfully edited," "Limited partners successfully added," "Role successfully deleted," and "Overview successfully edited" are the same sentence applied to different modules. Users learn one confirmation once, and writers don\'t invent new ones.',
  },
  {
    title: 'Build to One Default Screen and a Fixed Scale',
    body: 'Designs are composed at 1344×768, on a 12-column grid with 16px gutters, with a fixed base-unit scale for sizing and spacing. The collateral, borrowing base, and fund screens in the Figma file are all composed to those proportions, which is why they read as one product.',
  },
  {
    title: 'Components Are the Unit, Not Screens',
    body: 'Forms, buttons, tables, steppers, and toasts are defined once and composed into screens. This is the same principle that governs the collateral builder, where sub-types are assembled from reusable components. The design system and the product architecture reinforce each other.',
  },
  {
    title: 'Prove the System on Real Modules',
    body: 'The file shows the system applied to Risk Rating, Loans, and Spreading, not just swatches and specimens. A style guide earns trust when its parts can be seen working together under real data density: a table with per-column search, a score card with overrides, a template picker in a modal.',
    image: `${dir}/10-risk-rating-concepts.png`,
  },
  {
    title: 'Keep Improving It in the Open',
    body: 'The guide records its own pending changes. One annotation notes that the drop shadow used throughout the application is to be updated to X:0, Y:1, B:2. A system that tracks what it will change next is easier to trust than one that claims to be finished.',
  },
];

const additionalSections = [
  {
    title: 'The System',
    content: (
      <>
        <p className="font-semibold text-portfolio-text-dark mb-2">Foundations</p>
        <ul className="space-y-2 text-sm text-portfolio-text-light leading-relaxed mb-8 list-disc pl-5">
          <li>
            <Strong>Color.</Strong> A system palette built around brand blue (#0055D5) with a full
            tint scale for hover, selected, and disabled states, plus Green (#00B02D) for success,
            Red (#E31F28) for error, Orange (#F58220) for warning, and a deep navy Dark (#0F1943) for
            text and neutrals. Each hue carries its own ramp, and further hues (Jade, Yellow, Violet,
            Fuchsia) are defined for data and categories.
          </li>
          <li>
            <Strong>Typography.</Strong> Roboto in Bold, Regular, and Light, with a defined size
            scale and a rule to follow "DRY" (don't repeat yourself) so text styles are reused rather
            than redefined.
          </li>
          <li>
            <Strong>Grid.</Strong> Twelve columns with percentage-based widths, 16px gutters, and
            20px margins at the 960dp breakpoint, rising to 32px margins at 1600dp. A fixed base-unit
            scale governs icons, boxes, and spacing. <Strong>1344×768 is the default screen size</Strong>{' '}
            for composing designs.
          </li>
          <li>
            <Strong>Iconography, logos, and loading.</Strong> SVG logos used wherever possible, a
            favicon "minimal space" mark, an animated logo loader, and an icon set.
          </li>
        </ul>

        <p className="font-semibold text-portfolio-text-dark mb-2">Components</p>
        <ul className="space-y-2 text-sm text-portfolio-text-light leading-relaxed mb-8 list-disc pl-5">
          <li>
            <Strong>Buttons.</Strong> Medium, Small, X-Small, and XX-Small, each with and without an
            icon, in Action, Hover, Selected, Error, and Disabled states.
          </li>
          <li>
            <Strong>Form elements.</Strong> Text field, text area, dropdown and dropdown options,
            date picker and calendar, checkbox, radio button, toggle, search, and tag input, each
            with Filled, Focus, Error, and Success states, and a characters-remaining counter on long
            text.
          </li>
          <li>
            <Strong>Navigation.</Strong> Menus and submenus, tabs, accordion, and a main navigation
            bar across the platform's modules.
          </li>
          <li>
            <Strong>Progress.</Strong> Progress bars and steppers, with a stepper menu for
            multi-step flows.
          </li>
          <li>
            <Strong>Feedback.</Strong> Success, Error, Warning, and Information toasts, and error
            messages with a documented copy pattern.
          </li>
          <li>
            <Strong>Data display.</Strong> Tables, graphs, avatars, and badges.
          </li>
        </ul>

        <p className="font-semibold text-portfolio-text-dark mb-2">Design concepts applied</p>
        <p className="text-sm text-portfolio-text-light leading-relaxed">
          The file includes the system applied to real modules as design concepts:{' '}
          <Strong>Risk Rating</Strong> (score cards with Approve / Review / Decline states,
          per-section overrides, and threaded notes), <Strong>Loans</Strong> (an overview table
          with in-process, existing, incomplete, and withdrawn tabs, per-column search, and
          pagination), and <Strong>Spreading</Strong> (a template-driven record creation modal over
          a spreads table). There are also print layouts that carry Style Guide 2.0 into
          documents.
        </p>
      </>
    ),
  },
  {
    title: 'Screens',
    content: (
      <>
        <p className="text-xs text-portfolio-text-light italic mb-6">
          Native exports from the CYNC Figma file. Names and values are sample data. Select any
          screen to open it at full size.
        </p>
        <div className="space-y-8 mb-8">
          {wideScreens.map((s) => (
            <Screenshot key={s.file} {...s} />
          ))}
        </div>
        <div className="grid sm:grid-cols-2 gap-8 items-start mb-8">
          {tallScreens.map((s) => (
            <Screenshot key={s.file} {...s} />
          ))}
        </div>
        <div className="space-y-8">
          {appliedScreens.map((s) => (
            <Screenshot key={s.file} {...s} />
          ))}
        </div>
      </>
    ),
  },
  {
    title: 'Related Work',
    content: (
      <p className="text-sm text-portfolio-text-light leading-relaxed">
        The same components-as-the-unit principle governs the collateral builder in{' '}
        <Link to="/work/agriculture-collateral" className="text-portfolio-accent underline hover:no-underline">
          Agriculture Collateral
        </Link>{' '}
        and{' '}
        <Link to="/work/equipment-deposit-collateral" className="text-portfolio-accent underline hover:no-underline">
          Equipment and Deposit Collateral
        </Link>
        . For the platform the system serves, see the{' '}
        <Link to="/work/cync-collateral-platform" className="text-portfolio-accent underline hover:no-underline">
          Cync Collateral Platform
        </Link>
        .
      </p>
    ),
  },
  {
    title: 'Role',
    content: (
      <p className="text-sm text-portfolio-text-light leading-relaxed">
        Built the Cync design system in Figma and used it across the platform's modules.
      </p>
    ),
  },
];

const closingReflection = [
  'A design system pays off when it removes decisions that nobody should be making twice. Color meaning, confirmation copy, grid, and component states were settled once, so teams spent their time on the genuinely hard problems in lending: how to present a borrowing base, a pledge, or a risk score.',
  'The less obvious lesson is that the rules about exceptions matter as much as the components. Saying "do not modify unless a specific use case requires it" gives the system authority without making it rigid. It also gives a designer a clear standard for when to bend it.',
];

const CyncDesignSystemCaseStudyPage = () => {
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
          eyebrow="Loan Origination System (LOS)"
          title={project.title}
          subtitle={project.subtitle}
          role={project.role}
          company="Cync Software (nCino)"
          heroImage={`${dir}/01-introduction.png`}
          overviewText="Cync is not one product screen. It is a Loan Origination System with Collateral, Loans, Relationships, Spreads, Risk Rating, Covenants, Files, Exceptions, Reports, and Administration, built across many releases. Without a shared language, every module drifts: a different green for success, a different way to confirm a save, a different table layout, a different grid."
          problemTitle="The Layer That Prevents Drift"
          problemText="The design system, published as Style Guide 2.0, is the layer that prevents that. It defines the building blocks, documents the grid they sit on, and states plainly how they are to be used: as an internal, interactive guide, maintained over time, with each element's code spec available next to it."
          hardDecisionImage={`${dir}/09-spreading-system.png`}
          hardDecisionIntro="A Guide That Is Used, Not Just Read."
          hardDecisionBody="The problem: a design system that lives in a PDF gets ignored. Developers need exact values, and designers need to know what they are allowed to change. The decision: Style Guide 2.0 is framed as an interactive tool, published on an ongoing basis, with each element's specs available in the code spec window, and with a stated rule: modifications to the documented elements are not permitted unless required by a specific use case. The guide is internal-use only. It treats the system as something to apply, with an explicit path for the exceptions."
          keyDecisions={keyDecisions}
          additionalSections={additionalSections}
          closingReflection={closingReflection}
        />
      </div>
      <Footer />
    </div>
  );
};

export default CyncDesignSystemCaseStudyPage;
