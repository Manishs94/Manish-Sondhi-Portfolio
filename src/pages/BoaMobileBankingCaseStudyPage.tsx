import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import { SEOHead } from '@/components/SEOHead';
import ScrollProgress from '@/components/ScrollProgress';
import { Link } from 'react-router-dom';
import { caseStudies } from '@/utils/data/caseStudies';

const project = caseStudies.find((p) => p.id === 2)!;

// Exports from the Bank of America Design Figma file, under /case-studies/boa-screens/.
const img = {
  cover: '/case-studies/boa-screens/01-cover-redesigned-screens.png',
  reviews: '/case-studies/boa-screens/02-app-store-reviews-individual.png',
  reviewsCollage: '/case-studies/boa-screens/03-app-store-reviews-collage.png',
  beforePay: '/case-studies/boa-screens/05-before-pay-individual-flow.png',
  afterPay: '/case-studies/boa-screens/06-after-pay-individual-flow.png',
  beforeSchedule: '/case-studies/boa-screens/07-before-company-schedule-flow.png',
  afterSchedule: '/case-studies/boa-screens/08-after-company-schedule-flow.png',
  beforeHistory: '/case-studies/boa-screens/09-before-activity-history.png',
  afterHistory: '/case-studies/boa-screens/10-after-activity-history.png',
  deleteAction: '/case-studies/boa-screens/11-delete-action-before-after.png',
  helpText: '/case-studies/boa-screens/12-help-text-before-after.png',
  repeatPayment: '/case-studies/boa-screens/13-repeat-payment-before-after.png',
};

const SectionEyebrow: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-portfolio-accent mb-3">
    {children}
  </p>
);

const H2: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="text-3xl font-bold text-portfolio-text-dark font-display mb-6">{children}</h2>
);

const P: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <p className="text-lg text-portfolio-text-light leading-relaxed mb-4">{children}</p>
);

const Strong: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="font-semibold text-portfolio-text-dark">{children}</span>
);

const Figure: React.FC<{ src: string; caption: string; className?: string }> = ({
  src,
  caption,
  className = '',
}) => (
  <figure className={`my-8 ${className}`}>
    <img
      src={src}
      alt={caption}
      loading="lazy"
      className="w-full h-auto rounded-2xl border border-gray-100 bg-white shadow-sm"
    />
    <figcaption className="text-xs text-portfolio-text-light mt-2">{caption}</figcaption>
  </figure>
);

const BeforeAfter: React.FC<{ before: string; after: string; beforeCaption: string; afterCaption: string }> = ({
  before,
  after,
  beforeCaption,
  afterCaption,
}) => (
  <div className="grid md:grid-cols-2 gap-8 items-start my-8">
    <div>
      <p className="text-sm font-semibold uppercase tracking-[0.14em] text-portfolio-text-light mb-3">
        Before
      </p>
      <Figure src={before} caption={beforeCaption} className="my-0" />
    </div>
    <div>
      <p className="text-sm font-semibold uppercase tracking-[0.14em] text-portfolio-accent mb-3">
        After
      </p>
      <Figure src={after} caption={afterCaption} className="my-0" />
    </div>
  </div>
);

const projectFacts = [
  { label: 'Role', value: 'Senior UI/UX Designer' },
  { label: 'Type', value: 'Concept redesign' },
  { label: 'Platform', value: 'Mobile (iOS)' },
  { label: 'Tools', value: 'Figma' },
];

const scope = [
  'App-store review analysis',
  'Personas',
  'Competitive review',
  'User flows',
  'UI design',
  'Design refinements',
];

const problems = [
  {
    title: 'Scheduling',
    body: 'One reviewer reports that choosing "fixed amount" locks the frequency to "one time". Another can\'t set up a monthly payment and uses an alarm instead.',
  },
  {
    title: 'Flexibility',
    body: 'Editing an autopay is fragile; one reviewer had to re-enter payee information.',
  },
  {
    title: 'Clarity',
    body: 'Users can\'t tell whether a payment is scheduled, pending, or failed.',
  },
  {
    title: 'History',
    body: 'Scheduled payments and history are hard to find.',
  },
];

const goals = [
  { title: 'Simplify', body: 'Make scheduling and managing payments easier.' },
  { title: 'Make history usable', body: 'Make payment history visible and easy to read.' },
  { title: 'Feel faster', body: 'Make the flow feel faster and clearer.' },
];

const personas = [
  {
    title: 'Individual user',
    body: 'A tech lawyer who uses the mobile app to manage her finances, schedule bills on time, and track her transactions in one place.',
  },
  {
    title: 'Business owner',
    body: 'A furniture-making business owner who pays suppliers and business bills and relies on timely payments to keep operations running.',
  },
];

const frequencies = [
  'Once', 'Weekly', 'Every 2 Weeks', 'Monthly', 'Every 2 Months', 'Every 3 Months', 'Every 6 Months', 'Annually',
];

const statusActions = [
  { status: 'Scheduled', action: 'Edit and Delete, plus Pay now' },
  { status: 'Successful', action: 'Share receipt and Repeat bill payment' },
  { status: 'Pending', action: 'Details only' },
  { status: 'Failed', action: 'Try again' },
  { status: 'Cancelled', action: 'Details only' },
];

const reflections = [
  'Reviews gave a clear map of problems, and mapping each problem to a flow kept the redesign focused.',
  'Matching each payment status to the action it needs (retry, repeat, edit, delete) was the most useful structural idea.',
  "Next step I'd take: test the redesigned scheduling flow with real users and measure completion and errors.",
];

const BoaMobileBankingCaseStudyPage = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <ScrollProgress />
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

        {/* Hero */}
        <section className="py-24 bg-portfolio-bg-light">
          <div className="section-container">
            <SectionEyebrow>Concept Redesign</SectionEyebrow>
            <h1 className="section-heading">Bank of America Bill Pay: Mobile Redesign</h1>
            <p className="section-subheading">{project.subtitle}</p>
            <Figure src={img.cover} caption="Redesigned screens: activity, scheduling, Pay & Transfer home, activity details, and confirmation." />
          </div>
        </section>

        {/* Overview + Role */}
        <section className="py-24 bg-white">
          <div className="section-container max-w-3xl mx-auto">
            <SectionEyebrow>Overview</SectionEyebrow>
            <H2>Overview</H2>
            <P>
              This is a concept redesign. It is not affiliated with or commissioned by Bank of
              America.
            </P>
            <P>
              Bill Pay is a core job in a banking app, and public app-store reviews of the Bank of
              America mobile app show people struggling with it. This project redesigns three
              flows: adding a payee and paying (individual or company), scheduling a payment, and
              reviewing payment history.
            </P>
            <div className="mt-10 rounded-xl bg-portfolio-bg-light p-6">
              <div className="grid sm:grid-cols-4 gap-6 mb-6">
                {projectFacts.map((fact) => (
                  <div key={fact.label}>
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-portfolio-text-light mb-1">
                      {fact.label}
                    </p>
                    <p className="font-semibold text-portfolio-text-dark">{fact.value}</p>
                  </div>
                ))}
              </div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-portfolio-text-light mb-2">
                What I did
              </p>
              <div className="flex flex-wrap gap-2">
                {scope.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 bg-white text-portfolio-text-dark rounded-full text-xs font-medium"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Problem */}
        <section className="py-24 bg-portfolio-bg-light">
          <div className="section-container max-w-3xl mx-auto">
            <SectionEyebrow>Problem</SectionEyebrow>
            <H2>What the reviews say</H2>
            <P>Reviews collected from the app stores point to four problems:</P>
            <div className="grid sm:grid-cols-2 gap-6 my-8">
              {problems.map((item) => (
                <div key={item.title} className="rounded-xl bg-white p-6 shadow-sm">
                  <p className="font-semibold text-portfolio-text-dark mb-2">{item.title}</p>
                  <p className="text-sm text-portfolio-text-light leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
            <p className="text-portfolio-text-dark font-medium leading-relaxed italic">
              Research question: how can users manage bill payments, schedule future ones, and
              track history more effectively in the Bank of America app?
            </p>
          </div>
          <div className="section-container max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <Figure src={img.reviewsCollage} caption="Public app-store reviews of the Bank of America mobile app." />
              <Figure src={img.reviews} caption="Selected reviews about scheduling, autopay, and payment history." />
            </div>
          </div>
        </section>

        {/* Goals */}
        <section className="py-24 bg-white">
          <div className="section-container max-w-3xl mx-auto">
            <SectionEyebrow>Goals</SectionEyebrow>
            <H2>Goals</H2>
            <div className="grid sm:grid-cols-3 gap-6">
              {goals.map((item) => (
                <div key={item.title} className="rounded-xl bg-portfolio-bg-light p-6">
                  <p className="font-semibold text-portfolio-text-dark mb-2">{item.title}</p>
                  <p className="text-sm text-portfolio-text-light">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Research */}
        <section className="py-24 bg-portfolio-bg-light">
          <div className="section-container max-w-3xl mx-auto">
            <SectionEyebrow>Research</SectionEyebrow>
            <H2>Research</H2>
            <P>
              The research was an analysis of app-store reviews, two personas built from what the
              reviews describe, and a review of how other banking apps handle bill payments.
            </P>
            <div className="grid sm:grid-cols-2 gap-6 mt-8">
              {personas.map((item) => (
                <div key={item.title} className="rounded-xl bg-white p-6 shadow-sm">
                  <p className="font-semibold text-portfolio-text-dark mb-2">{item.title}</p>
                  <p className="text-sm text-portfolio-text-light leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
            <p className="text-sm text-portfolio-text-light leading-relaxed mt-6">
              Both personas share the same needs: an efficient way to manage bill payments,
              flexibility in changing scheduled payments, and clear payment history.
            </p>
          </div>
        </section>

        {/* Solutions */}
        <section className="py-24 bg-white">
          <div className="section-container max-w-3xl mx-auto">
            <SectionEyebrow>Solutions</SectionEyebrow>
            <H2>1. Add and pay in a guided flow</H2>
            <P>
              A bottom sheet asks <Strong>"Who do you want to make payment to?"</Strong>{' '}
              (Individual or Company), then short steps for basic information and address, a
              review sheet, payment details, a security PIN, and a confirmation.
            </P>
          </div>
          <div className="section-container max-w-6xl mx-auto">
            <BeforeAfter
              before={img.beforePay}
              after={img.afterPay}
              beforeCaption="The current app: adding a person as a payee, then paying them."
              afterCaption="Redesign: paying an individual, from Pay & Transfer to activity details."
            />
          </div>

          <div className="section-container max-w-3xl mx-auto mt-16">
            <H2>2. Scheduling as its own step</H2>
            <P>
              Scheduling gets its own screen, with frequency, a start date, an end date, and an
              email notification toggle. Under the start date, a plain-language note says when the
              money goes out: <Strong>"Payment will be sent weekly by 09:00AM every Friday."</Strong>
            </P>
            <div className="flex flex-wrap gap-2 mb-4">
              {frequencies.map((f) => (
                <span
                  key={f}
                  className="px-3 py-1 bg-portfolio-bg-light text-portfolio-text-dark rounded-full text-xs font-medium"
                >
                  {f}
                </span>
              ))}
            </div>
          </div>
          <div className="section-container max-w-6xl mx-auto">
            <BeforeAfter
              before={img.beforeSchedule}
              after={img.afterSchedule}
              beforeCaption="The current app: finding a company payee and setting up an AutoPay."
              afterCaption="Redesign: paying a company, with scheduling as a separate step."
            />
          </div>

          <div className="section-container max-w-3xl mx-auto mt-16">
            <H2>3. Payment history by status</H2>
            <P>
              Activity has tabs for <Strong>All, Transfer, Bill Pay and Zelle</Strong>, and a
              status filter (Scheduled, Successful, Pending, Failed, Cancelled). Each status opens a
              details screen with the action that fits it:
            </P>
            <div className="rounded-xl border border-gray-200 overflow-hidden my-6">
              {statusActions.map((row, i) => (
                <div
                  key={row.status}
                  className={`grid grid-cols-[8rem_1fr] gap-4 px-5 py-3 text-sm ${i % 2 ? 'bg-portfolio-bg-light' : 'bg-white'}`}
                >
                  <span className="font-semibold text-portfolio-text-dark">{row.status}</span>
                  <span className="text-portfolio-text-light">{row.action}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="section-container max-w-6xl mx-auto">
            <BeforeAfter
              before={img.beforeHistory}
              after={img.afterHistory}
              beforeCaption="The current app: Bill Pay activity filtered by date range and status."
              afterCaption="Redesign: activity by transaction type and status, with a details screen for each status."
            />
          </div>
        </section>

        {/* Iteration */}
        <section className="py-24 bg-portfolio-bg-light">
          <div className="section-container max-w-3xl mx-auto">
            <SectionEyebrow>Iteration</SectionEyebrow>
            <H2>Design refinements</H2>
            <P>
              Three refinements came out of the review analysis. They were design decisions and were
              not tested with users.
            </P>
            <P>
              <Strong>Delete.</Strong> Users could not delete a pre-filled bill payment, so a Delete
              button sits beside Edit and Pay now.
            </P>
            <Figure src={img.deleteAction} caption="Payee details before and after: Delete added beside Edit and Pay now." />
            <P>
              <Strong>Help text.</Strong> Short notes under key fields say what will happen, such
              as when a scheduled payment will be sent.
            </P>
            <Figure src={img.helpText} caption="Help text added under the scheduling fields." />
            <P>
              <Strong>Repeat bill payment.</Strong> From a successful payment, Repeat bill payment
              pre-fills a new payment with the previous details, which the user can change before
              sending. Recurring payments are set up in the Schedule step.
            </P>
            <Figure src={img.repeatPayment} caption="Repeat bill payment on a successful payment's details." />
          </div>
        </section>

        {/* Reflection */}
        <section className="py-24 bg-portfolio-text-dark text-white">
          <div className="section-container max-w-3xl mx-auto">
            <SectionEyebrow>Reflection</SectionEyebrow>
            <h2 className="text-3xl font-bold font-display mb-8 text-white">Reflection</h2>
            <div className="space-y-5">
              {reflections.map((text) => (
                <div key={text} className="flex items-start gap-3">
                  <span className="text-portfolio-accent font-bold mt-0.5">—</span>
                  <p className="text-white/85 leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
            <p className="text-xs text-white/50 leading-relaxed mt-12">
              "Before" screens are captures of the Bank of America Android app from April 2023,
              with personal details blurred. Names, amounts, and dates in the redesigned screens are
              sample data.
            </p>
          </div>
        </section>

        {/* Closing CTA */}
        <section className="py-16 bg-white border-t border-gray-100">
          <div className="section-container flex justify-center">
            <Link to="/portfolio" className="portfolio-button-outline">
              Back to Portfolio
            </Link>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default BoaMobileBankingCaseStudyPage;
