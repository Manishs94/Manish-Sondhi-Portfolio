import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import { SEOHead } from '@/components/SEOHead';
import CaseStudyPageLayout from '@/components/CaseStudyPageLayout';
import ImagePlaceholder from '@/components/ImagePlaceholder';
import { caseStudies } from '@/utils/data/caseStudies';

const project = caseStudies.find((p) => p.id === 23)!;

// Exports from the Veteran Portal page of the Figma file, under /case-studies/veteran-portal-screens/.
// Client logos, headers, footers, the support phone number, and brand text are cropped or masked;
// sign-in screens show only the form card, without the background photograph.
const img = {
  login: 'veteran-portal-screens/01-login.png',
  authCode: 'veteran-portal-screens/02-authentication-code.png',
  accountDisabled: 'veteran-portal-screens/03-account-disabled.png',
  scheduled: 'veteran-portal-screens/06-scheduled-appointments.png',
  unscheduled: 'veteran-portal-screens/07-unscheduled-appointments.png',
  travel: 'veteran-portal-screens/08-travel-reimbursements.png',
  preferences: 'veteran-portal-screens/09-scheduling-preferences.png',
  reviewModal: 'veteran-portal-screens/10-review-account-information.png',
  notifications: 'veteran-portal-screens/12-notifications.png',
  mobileScheduled: 'veteran-portal-screens/14-mobile-scheduled.png',
  past: 'veteran-portal-screens/16-past-appointments.png',
  scheduledLight: 'veteran-portal-screens/06-scheduled-appointments-light.png',
  unscheduledLight: 'veteran-portal-screens/07-unscheduled-appointments-light.png',
  travelLight: 'veteran-portal-screens/08-travel-reimbursements-light.png',
  preferencesLight: 'veteran-portal-screens/09-scheduling-preferences-light.png',
  reviewModalLight: 'veteran-portal-screens/10-review-account-information-light.png',
  notificationsDark: 'veteran-portal-screens/12-notifications-dark.png',
  pastLight: 'veteran-portal-screens/16-past-appointments-light.png',
};

const Strong: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="font-semibold text-portfolio-text-dark">{children}</span>
);

const Quote: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="font-medium text-portfolio-text-dark">"{children}"</span>
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

// The portal lets the Veteran switch between light and dark themes from the header, so each
// screen that exists in both themes is shown with the same switch.
const ThemeShot: React.FC<{ dark: string; light: string; caption: string; initial?: 'dark' | 'light' }> = ({
  dark,
  light,
  caption,
  initial = 'dark',
}) => {
  const [theme, setTheme] = useState<'dark' | 'light'>(initial);
  return (
    <div className="my-6">
      <div className="flex justify-end mb-2">
        <div role="group" aria-label="Theme" className="inline-flex rounded-full border border-gray-200 p-0.5 text-xs">
          {(['dark', 'light'] as const).map((t) => (
            <button
              key={t}
              type="button"
              aria-pressed={theme === t}
              onClick={() => setTheme(t)}
              className={`px-3 py-1 rounded-full capitalize transition-colors ${
                theme === t ? 'bg-portfolio-text-dark text-white' : 'text-portfolio-text-light hover:text-portfolio-text-dark'
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>
      <ImagePlaceholder filename={theme === 'dark' ? dark : light} caption={`${caption} (${theme} theme)`} aspect="wide" />
      <p className="text-xs text-portfolio-text-light mt-2">
        {caption}, {theme} theme
      </p>
    </div>
  );
};

const keyDecisions = [
  {
    title: 'Replace "Call Us to Change This" With In-Portal Control',
    body: 'On the legacy screen, preference status is three lines of plain text ending with an instruction to phone to update them. In the new design, preferences are a form the Veteran can change and save. The out-of-range and telehealth consents are explained in plain language, including the benefit to the Veteran: "we may be able to schedule you sooner."',
    image: img.preferencesLight,
  },
  {
    title: 'Make Required Consent a Gate, Not a Hope',
    body: 'A modal reading "Review Your Account Information" (on mobile, "Set Your Scheduling Preference") says the information is needed to coordinate appointments and availability before the Veteran proceeds. The scheduling team needs those answers to book anyone, so the interface asks for them first.',
    image: img.reviewModalLight,
  },
  {
    title: 'Keep Help in Sight',
    body: 'A contact band with the support number and hours sits under the tabs on every appointments screen, and the footer carries FAQ, Terms, Privacy and About. A Veteran who is stuck never has to hunt for the way out.',
  },
  {
    title: 'Design the Failure States as Carefully as the Happy Path',
    body: 'About 54 frames cover sign-in and recovery. The invalid-credentials message does not say which of username or password was wrong. Inactivity logout says why ("logged out for security reasons … after 15 minutes of inactivity"). The authentication code is sent to a masked address. The "Check your email" screen lists what to try when the reset message does not arrive, and an expired link offers a new one.',
  },
  {
    title: 'Use Status Vocabulary the Veteran Can Act On',
    body: 'Reimbursement status uses Pending Appointment, Pending Issuance, Issued and Cashed. Notification chips use Issued, Scheduled and Reminder. Each label says where the claim or appointment stands, in plain words.',
  },
  {
    title: 'Keep the Layout Predictable Across Themes and Widths',
    body: 'Appointment cards follow one pattern: icon, label in capitals, value below. The same structure carries into the dark theme and the 440px mobile layout.',
    image: img.mobileScheduled,
  },
];

const additionalSections = [
  {
    title: 'The System',
    content: (
      <>
        <p className="text-xs text-portfolio-text-light italic mb-6">
          Source: the Veteran Portal page of the Figma file, about 146 screens (127 desktop, 19
          mobile), including near-duplicate iterations of the same frames. All names, dates, IDs
          and addresses in the screens are placeholder or test data. Client branding and the
          support phone number are removed from the screenshots.
        </p>

        <H>Appointments home</H>
        <UL>
          <li>
            A greeting and "Your Appointments" title, then four tabs:{' '}
            <Strong>Scheduled, Unscheduled, Past Appointments, Travel Reimbursements</Strong>.
          </li>
          <li>A persistent contact band under the tabs: a support phone number and its hours.</li>
          <li>
            Scheduled cards: specialty, in-person or telehealth with duration, a status chip,
            Overview and Details switches, and labeled rows for appointment date, provider,
            address, appointment type and distance. Each card also shows a map, facility remarks
            and a <Strong>View Appointment Letter</Strong> button.
          </li>
          <li>Unscheduled cards: specialty and the exam names still to be booked.</li>
          <li>
            Past appointments, with a disclaimer that a reimbursement is paid out on completion of
            the associated appointment.
          </li>
        </UL>
        <ThemeShot dark={img.scheduled} light={img.scheduledLight} caption="Scheduled appointments" />
        <ThemeShot dark={img.unscheduled} light={img.unscheduledLight} caption="Unscheduled: exam names still to be booked" />
        <ThemeShot dark={img.past} light={img.pastLight} caption="Past appointments, with a Travel Reimbursements switch on each card" />

        <H>Travel Reimbursements</H>
        <UL>
          <li>
            An expandable table by appointment: number of appointments, round-trip mileage and
            claim status (Issued, Cashed, Pending Issuance, Pending Appointment).
          </li>
          <li>
            Expanded rows show claim ID and date, type, claim amount, check number, check date,
            check amount, sent date and check status.
          </li>
          <li>
            Empty state: <Quote>No travel reimbursement is available.</Quote>
          </li>
        </UL>
        <ThemeShot dark={img.travel} light={img.travelLight} caption="Travel Reimbursements: expandable rows with claim and check details" />

        <H>Account and preferences</H>
        <UL>
          <li>A profile with identity, contact details, communication and residency addresses.</li>
          <li>
            Scheduling Preferences with two consents: willingness to travel beyond 50 miles one way
            (non-specialist exams) or 100 miles (specialist exams), and a telehealth opt-in with a
            confirmation of any exclusionary factors.
          </li>
          <li>
            A <Strong>Save Preferences</Strong> action and a review modal that appears before the
            Veteran can proceed.
          </li>
        </UL>
        <ThemeShot dark={img.preferences} light={img.preferencesLight} caption="Scheduling Preferences: out-of-range and telehealth consent" />
        <ThemeShot dark={img.reviewModal} light={img.reviewModalLight} caption="Review Your Account Information, shown before the Veteran proceeds" />

        <H>Sign-in and recovery (about 54 frames)</H>
        <UL>
          <li>
            Login with username, password, terms checkbox, "How to use?" and "Forgot password?".
          </li>
          <li>
            Error states: invalid username or password, required fields, account disabled, session
            expired after inactivity.
          </li>
          <li>
            Authentication: a six-digit code sent to a masked email address, with resend and error
            states.
          </li>
          <li>
            Password reset: request, "Check your email" with troubleshooting steps, and
            expired-link recovery.
          </li>
          <li>Email and phone variants, with mobile versions of login, email and authentication.</li>
        </UL>
        <Shot file={img.login} caption="Login form (brand header and background photograph removed)" />
        <Shot file={img.authCode} caption="Authentication: six-digit code sent to a masked address" />
        <Shot file={img.accountDisabled} caption="Account disabled error state" />

        <H>Everything else</H>
        <UL>
          <li>
            Notifications popover (Issued, Scheduled and Reminder chips, "Mark As Read", "View
            All", empty state), search with results, FAQ, Privacy Policy, Terms of Service, About
            Us.
          </li>
          <li>Light and dark themes, switched from the header. The screenshots on this page carry the same switch.</li>
          <li>440px mobile versions of the scheduled flow and sign-in.</li>
        </UL>
        <ThemeShot dark={img.notificationsDark} light={img.notifications} caption="Notifications popover" />
      </>
    ),
  },
  {
    title: 'Role',
    content: (
      <P>
        Designed the whole portal redesign in Figma: the appointments home, travel reimbursements,
        account and preferences, notifications, search, help pages, sign-in and recovery, and the
        light, dark, and mobile layouts.
      </P>
    ),
  },
];

const closingReflection = [
  'This is a regulated, public-sector-adjacent consumer experience where the user is stressed and the cost of confusion is a missed exam. The work shows a designer who turns a status-driven legacy page into a question-driven one, removes the phone call from routine preference changes, and treats authentication, error and empty states as part of the product.',
  'No outcomes are claimed. The file has no research, usability findings, adoption or call-volume data.',
];

const VeteranPortalCaseStudyPage = () => {
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
          heroImage={img.scheduled}
          overviewText={"The portal is where a Veteran who has been referred for a VA Compensation and Pension (C&P) exam checks what is booked, what still needs scheduling, what has been completed, and whether their travel has been reimbursed. The Veteran is not a daily user. They arrive anxious, often after a gap, and need an answer to “where is my appointment, and what do I owe or get back?” The redesign has launched."}
          problemTitle="A Status Page for an Anxious, Infrequent User"
          problemText="The legacy screen shows a banner announcing a new look “to improve navigation and accessibility”, plain-text status lines at the top, and cards whose fields are labels with no values. The new design replaces that with a task-based home, scannable appointment cards, in-portal preferences, a travel reimbursement tracker, notifications, search, and a complete sign-in and recovery flow, in light and dark themes and at desktop and mobile widths."
          hardDecisionIntro="Organize by the Veteran's Question, Not by the System's Status."
          hardDecisionBody="The legacy tabs were Planned, Scheduled, Completed and Scheduling Preferences. The new home uses Scheduled, Unscheduled, Past Appointments and Travel Reimbursements. Travel reimbursement becomes its own destination instead of a field buried on a card."
          hardDecisionImage={img.travelLight}
          keyDecisions={keyDecisions}
          additionalSections={additionalSections}
          closingReflection={closingReflection}
        />
      </div>
      <Footer />
    </div>
  );
};

export default VeteranPortalCaseStudyPage;
