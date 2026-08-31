import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import { SEOHead } from '@/components/SEOHead';
import { Link } from 'react-router-dom';
import {
  Ruler,
  Loader,
  Users,
  Trash2,
  Info,
  Repeat,
} from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { caseStudies } from '@/utils/data/caseStudies';

const project = caseStudies.find((p) => p.id === 2)!;

const SectionEyebrow: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-portfolio-accent mb-3">
    {children}
  </p>
);

const timelineSteps = [
  { title: 'Introduction', body: 'New Bill Pay feature launched in 2022' },
  { title: 'Identification', body: 'Customer needs and pain points addressed' },
  { title: 'Improvement', body: 'User experience enhanced for intuitive bill payments' },
];

const teamItems = [
  { icon: Ruler, title: 'Product Designer', body: 'Led research and design efforts' },
  { icon: Loader, title: 'Lead Designer', body: 'Guiding the project' },
  { icon: Users, title: 'UX Team', body: 'Four designers and researchers' },
];

const challenges = [
  { title: 'Payment Scheduling', body: 'Users struggled with complex bill payment management and scheduling.' },
  { title: 'Limited Flexibility', body: 'Modifying options and delivery dates proved challenging for many users.' },
  { title: 'Confusing Formats', body: 'Payment formats and schedules were not clear to users.' },
  { title: 'History Tracking', body: 'Users faced difficulties in tracking and viewing their payment history.' },
];

const goals = [
  { title: 'Simplify Payments', body: 'Make bill scheduling and management easier' },
  { title: 'Improve History', body: 'Enhance visibility of payment history' },
  { title: 'Empower Users', body: 'Create a smoother banking experience' },
];

const researchMethods = [
  { title: 'User Feedback Analysis', body: 'Gathered insights from app store reviews, highlighting common issues with payment scheduling and history tracking.' },
  { title: 'Surveys', body: 'Conducted to capture a wide range of user preferences and experiences with the Bill Pay feature.' },
  { title: 'User Interviews', body: 'In-depth sessions allowed us to delve into user frustrations, uncovering specific areas for improvement in the Bill Pay feature.' },
];

const personas = [
  { title: 'Individual Users', body: 'Rely on the app for personal bill payments, need to schedule payments and track transactions easily.' },
  { title: 'Business Owners', body: 'Handle multiple transactions, require robust features for managing complex payment schedules and tracking.' },
];

const solutions = [
  { title: 'Improved Management', body: 'Streamlined UI for easier bill payment setup and management' },
  { title: 'Enhanced Flexibility', body: 'Greater control over payment scheduling with real-time notifications' },
  { title: 'Better Tracking', body: 'Upgraded payment history with detailed, searchable transactions' },
];

const usabilityRounds = [
  { title: 'Participant Selection', body: 'Previous interview participants were invited to test the new features, ensuring familiarity with the project context.' },
  { title: 'Test Execution', body: 'Realistic scenarios were created to simulate tasks like scheduling payments and reviewing payment history, providing a comprehensive testing environment.' },
  { title: 'Feedback Collection', body: 'Comprehensive feedback was gathered through video recordings, screen captures, and detailed notes, offering deep insights into user interactions and areas for improvement.' },
];

const iterations = [
  { icon: Trash2, title: 'Delete Button', body: 'Added for easier management of scheduled payments' },
  { icon: Info, title: 'Help Text', body: 'Included for clear guidance throughout the payment process' },
  { icon: Repeat, title: 'Repeat Payment', body: 'Button added to enable easy repetition of bill payments' },
];

const spotlights = [
  { caption: 'A Delete Button to improve user experience.', src: 'https://cdn.gamma.app/avmi4uurdte9tfh/268db20f59874576849b495397ef8d98/original/Image-31.png' },
  { caption: 'Help Text to facilitate clear and concise communication.', src: 'https://cdn.gamma.app/avmi4uurdte9tfh/14e63707a2d343c6aa1f5085440b6f3b/original/Image-32.png' },
  { caption: 'Repeat Bill Payment button to provide a more user-friendly and convenient experience.', src: 'https://cdn.gamma.app/avmi4uurdte9tfh/195ca6c4f81f4fea84771e323fb7ce1a/original/Image-33.png' },
];

const takeaways = [
  { title: 'User-Centric Design', body: 'Actively incorporating user feedback significantly improved app usability and satisfaction.' },
  { title: 'Enhanced User Experience', body: 'User-centered design principles contributed to positive feedback on payment scheduling and history tracking.' },
  { title: 'Collaborative Precision', body: 'Successful app redesigns depend on teamwork and attention to detail.' },
  { title: 'Personal Development', body: 'This project strengthened my design skills and highlighted the importance of focus and dedication in UX/UI projects.' },
];

const BoaMobileBankingCaseStudyPage = () => {
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

        {/* Hero */}
        <section className="py-24 bg-portfolio-bg-light">
          <div className="section-container">
            <SectionEyebrow>Case Study</SectionEyebrow>
            <h1 className="section-heading">Bank of America Bill Payment Case Study</h1>
            <p className="section-subheading">
              Enhancing digital banking experience for over 68 million customers through an
              intuitive and user-friendly Bill Pay feature redesign.
            </p>
          </div>
        </section>

        {/* Project Overview */}
        <section className="py-24 bg-white">
          <div className="section-container max-w-3xl mx-auto">
            <SectionEyebrow>Overview</SectionEyebrow>
            <h2 className="text-3xl font-bold text-portfolio-text-dark font-display mb-6">
              Project Overview
            </h2>
            <p className="text-lg text-portfolio-text-light leading-relaxed mb-4">
              Bank of America, serving over 68 million customers, introduced a new Bill Pay
              feature in 2022. This feature allows users to handle payments for utilities, cable,
              phone services, and more through electronic transactions, available as early as the
              next working day.
            </p>
            <p className="text-lg text-portfolio-text-light leading-relaxed mb-10">
              The project focused on improving the user experience of the Bill Pay feature on the
              Bank of America mobile app. By addressing real customer needs and pain points, the
              team aimed to make the process more intuitive and user-friendly.
            </p>
            <div className="grid sm:grid-cols-3 gap-6">
              {timelineSteps.map((step) => (
                <div key={step.title} className="rounded-xl bg-portfolio-bg-light p-6">
                  <p className="font-semibold text-portfolio-text-dark mb-2">{step.title}</p>
                  <p className="text-sm text-portfolio-text-light">{step.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Project Team */}
        <section className="py-24 bg-portfolio-text-dark text-white">
          <div className="section-container max-w-3xl mx-auto">
            <SectionEyebrow>Team</SectionEyebrow>
            <h2 className="text-3xl font-bold font-display mb-6 text-white">Project Team</h2>
            <p className="text-white/80 leading-relaxed mb-4">
              The project was led by a collaborative team working remotely to enhance the Bill Pay
              feature. As the product designer and researcher, I worked alongside the lead product
              designer, and a dedicated team of four UX designers and researchers.
            </p>
            <p className="text-white/80 leading-relaxed mb-10">
              Our collective goal was to simplify and improve the bill payment scheduling process,
              enhance payment history visibility, and create a seamless user experience for Bank of
              America customers.
            </p>
            <div className="grid sm:grid-cols-3 gap-6">
              {teamItems.map((item) => (
                <div key={item.title} className="flex items-start gap-3">
                  <item.icon className="w-5 h-5 text-portfolio-accent mt-1 shrink-0" />
                  <div>
                    <p className="font-semibold text-white mb-1">{item.title}</p>
                    <p className="text-sm text-white/70">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Identifying Challenges */}
        <section className="py-24 bg-white">
          <div className="section-container max-w-3xl mx-auto">
            <SectionEyebrow>Problem</SectionEyebrow>
            <h2 className="text-3xl font-bold text-portfolio-text-dark font-display mb-6">
              Identifying Challenges
            </h2>
            <p className="text-lg text-portfolio-text-light leading-relaxed mb-4">
              Despite Bank of America's app aiming to simplify financial management, many users
              expressed dissatisfaction with the Bill Pay feature. Key issues identified included
              complexity in managing and scheduling bill payments, limited flexibility in modifying
              options and delivery dates, confusion around payment formats and schedules, and
              challenges in tracking and viewing payment history.
            </p>
            <p className="text-portfolio-text-dark font-medium leading-relaxed mb-10 italic">
              Our research question became: "How can we help users manage bill payments, schedule
              future payments, and track payment histories more effectively within the Bank of
              America app?"
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              {challenges.map((item) => (
                <div key={item.title} className="rounded-xl border border-gray-200 p-6">
                  <p className="font-semibold text-portfolio-text-dark mb-2">{item.title}</p>
                  <p className="text-sm text-portfolio-text-light">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Project Goals */}
        <section className="py-24 bg-portfolio-bg-light">
          <div className="section-container max-w-3xl mx-auto">
            <SectionEyebrow>Goals</SectionEyebrow>
            <h2 className="text-3xl font-bold text-portfolio-text-dark font-display mb-6">
              Project Goals
            </h2>
            <p className="text-lg text-portfolio-text-light leading-relaxed mb-4">
              The project aimed to refine and enhance the Bill Pay feature in the Bank of America
              mobile app. Our primary objectives were to simplify scheduling and management of bill
              payments, improve visibility and usability of the payment history, and empower users
              with a smoother and more efficient banking experience.
            </p>
            <p className="text-lg text-portfolio-text-light leading-relaxed mb-10">
              These goals were set to address the key pain points identified during our initial
              research and to create a more user-friendly Bill Pay feature that would meet the
              needs of Bank of America's diverse customer base.
            </p>
            <div className="grid sm:grid-cols-3 gap-6">
              {goals.map((item) => (
                <div key={item.title} className="rounded-xl bg-white p-6 shadow-sm">
                  <p className="font-semibold text-portfolio-text-dark mb-2">{item.title}</p>
                  <p className="text-sm text-portfolio-text-light">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* User Research */}
        <section className="py-24 bg-white">
          <div className="section-container max-w-3xl mx-auto">
            <SectionEyebrow>Research</SectionEyebrow>
            <h2 className="text-3xl font-bold text-portfolio-text-dark font-display mb-6">
              User Research
            </h2>
            <p className="text-lg text-portfolio-text-light leading-relaxed mb-4">
              To understand users' pain points, we conducted comprehensive research involving user
              feedback analysis from app stores, surveys to capture a wide range of user preferences
              and experiences, and in-depth user interviews to delve into user frustrations and
              uncover areas for improvement.
            </p>
            <p className="text-lg text-portfolio-text-light leading-relaxed mb-10">
              Key insights revealed that users desire a simpler and more flexible bill payment
              system, and that clearer payment tracking and real-time notifications are essential
              for a better experience.
            </p>
            <div className="grid sm:grid-cols-3 gap-8">
              {researchMethods.map((item) => (
                <div key={item.title}>
                  <p className="font-semibold text-portfolio-text-dark mb-2">{item.title}</p>
                  <p className="text-sm text-portfolio-text-light leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Target User Persona */}
        <section className="py-24 bg-portfolio-accent text-white">
          <div className="section-container max-w-3xl mx-auto">
            <SectionEyebrow>Personas</SectionEyebrow>
            <h2 className="text-3xl font-bold font-display mb-6 text-white">
              Target User Persona
            </h2>
            <p className="text-white/85 leading-relaxed mb-4">
              Our research identified two main user groups for the Bill Pay feature. The first
              group consists of individual users who rely on the app for personal bill payments and
              often need to schedule payments and track transactions. These users value simplicity
              and convenience in managing their personal finances.
            </p>
            <p className="text-white/85 leading-relaxed mb-10">
              The second group comprises business owners who handle multiple transactions and
              depend on the app's convenience for managing various financial tasks. These users
              require more robust features for managing complex payment schedules and tracking
              multiple transactions efficiently.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              {personas.map((item) => (
                <div key={item.title} className="rounded-xl bg-white/10 border border-white/20 p-6">
                  <p className="font-semibold text-white mb-2">{item.title}</p>
                  <p className="text-sm text-white/80">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Solutions */}
        <section className="py-24 bg-white">
          <div className="section-container max-w-3xl mx-auto">
            <SectionEyebrow>Solutions</SectionEyebrow>
            <h2 className="text-3xl font-bold text-portfolio-text-dark font-display mb-6">
              Solutions
            </h2>
            <p className="text-lg text-portfolio-text-light leading-relaxed mb-4">
              Our user-centered solutions addressed the identified pain points through three key
              improvements. First, we improved bill payment management with a streamlined UI
              design, making it easier for users to set up and manage payments. Second, we enhanced
              scheduling flexibility, allowing users to specify payment dates, amounts, and
              recipients, with options to modify or cancel scheduled payments. Real-time
              notifications and intuitive prompts were added to keep users informed and reduce
              errors.
            </p>
            <p className="text-lg text-portfolio-text-light leading-relaxed mb-10">
              Lastly, we upgraded the payment history feature to provide a searchable, detailed view
              of past transactions, enabling users to filter by date, recipient, and payment type
              for precise tracking.
            </p>
            <div className="grid sm:grid-cols-3 gap-6">
              {solutions.map((item, idx) => (
                <div key={item.title} className="flex gap-4">
                  <div className="shrink-0 w-8 h-8 rounded-full bg-portfolio-accent text-white flex items-center justify-center text-sm font-bold">
                    {idx + 1}
                  </div>
                  <div>
                    <p className="font-semibold text-portfolio-text-dark mb-1">{item.title}</p>
                    <p className="text-sm text-portfolio-text-light">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Before / After */}
        <section className="py-24 bg-portfolio-bg-light">
          <div className="section-container">
            <div className="grid md:grid-cols-2 gap-10">
              <div>
                <h3 className="text-xl font-bold text-portfolio-text-dark font-display mb-6 text-center">
                  Before
                </h3>
                <img
                  src="https://cdn.gamma.app/avmi4uurdte9tfh/2579a424a7b9439989762de58208bc09/original/Image-28.png"
                  alt="Bill Pay flow before redesign"
                  className="w-full rounded-2xl shadow-md"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-portfolio-text-dark font-display mb-6 text-center">
                  After
                </h3>
                <img
                  src="https://cdn.gamma.app/avmi4uurdte9tfh/d5613e9618774b288511ba401f891982/original/Image-29.png"
                  alt="Bill Pay flow after redesign"
                  className="w-full rounded-2xl shadow-md"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Usability Testing */}
        <section className="py-24 bg-white">
          <div className="section-container max-w-3xl mx-auto">
            <SectionEyebrow>Validation</SectionEyebrow>
            <h2 className="text-3xl font-bold text-portfolio-text-dark font-display mb-6">
              Usability Testing
            </h2>
            <p className="text-lg text-portfolio-text-light leading-relaxed mb-4">
              To validate the redesigned features and gauge user responses, we conducted thorough
              usability testing. We invited previous interview participants to test the new
              features, ensuring continuity in our research. The test execution involved realistic
              scenarios that allowed participants to simulate tasks like scheduling payments and
              reviewing payment history.
            </p>
            <p className="text-lg text-portfolio-text-light leading-relaxed mb-10">
              Comprehensive feedback was collected through video recordings, screen captures, and
              notes, providing deep insights into user interactions and areas for further
              refinement. This approach allowed us to identify any remaining pain points and
              validate the effectiveness of our solutions.
            </p>
            <Accordion type="single" collapsible className="w-full">
              {usabilityRounds.map((round) => (
                <AccordionItem key={round.title} value={round.title}>
                  <AccordionTrigger className="text-portfolio-text-dark font-semibold">
                    {round.title}
                  </AccordionTrigger>
                  <AccordionContent className="text-portfolio-text-light">
                    {round.body}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Iterative Design & Validation */}
        <section className="py-24 bg-portfolio-bg-light">
          <div className="section-container max-w-3xl mx-auto">
            <SectionEyebrow>Iteration</SectionEyebrow>
            <h2 className="text-3xl font-bold text-portfolio-text-dark font-display mb-6">
              Iterative Design &amp; Validation
            </h2>
            <p className="text-lg text-portfolio-text-light leading-relaxed mb-4">
              Based on the valuable feedback received during usability testing, we made several
              iterations to further improve the Bill Pay feature. We added a delete button to allow
              for easier management of scheduled payments, addressing users' need for more control
              over their payment schedules.
            </p>
            <p className="text-lg text-portfolio-text-light leading-relaxed mb-10">
              Help text was included throughout the payment process to provide clear guidance and
              reduce user confusion. Additionally, we introduced a repeat bill payment button,
              enabling users to easily set up recurring payments and adding to the overall
              convenience of the feature. These iterations were crucial in refining the user
              experience and ensuring that the redesigned Bill Pay feature met user needs
              effectively.
            </p>
            <div className="grid sm:grid-cols-3 gap-6">
              {iterations.map((item) => (
                <div key={item.title} className="flex items-start gap-3">
                  <item.icon className="w-5 h-5 text-portfolio-accent mt-1 shrink-0" />
                  <div>
                    <p className="font-semibold text-portfolio-text-dark mb-1">{item.title}</p>
                    <p className="text-sm text-portfolio-text-light">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Spotlights */}
        {spotlights.map((spot) => (
          <section key={spot.caption} className="py-16 bg-white border-t border-gray-100">
            <div className="section-container">
              <div className="grid md:grid-cols-2 gap-10 items-center">
                <img src={spot.src} alt={spot.caption} className="w-full rounded-2xl shadow-md" />
                <p className="text-2xl font-semibold text-portfolio-text-dark font-display">
                  {spot.caption}
                </p>
              </div>
            </div>
          </section>
        ))}

        {/* Key Takeaways */}
        <section className="py-24 bg-portfolio-text-dark text-white">
          <div className="section-container max-w-3xl mx-auto">
            <SectionEyebrow>Reflection</SectionEyebrow>
            <h2 className="text-3xl font-bold font-display mb-8 text-white">Key Takeaways</h2>
            <div className="space-y-5 mb-10">
              {takeaways.map((item) => (
                <div key={item.title} className="flex items-start gap-3">
                  <span className="text-portfolio-accent font-bold mt-0.5">—</span>
                  <p className="text-white/85 leading-relaxed">
                    <span className="font-semibold text-white">{item.title}:</span> {item.body}
                  </p>
                </div>
              ))}
            </div>
            <p className="text-white/70 leading-relaxed">
              The key takeaways from this project emphasize the power of user-centric design, the
              impact of enhanced user experiences, the value of collaborative precision, and the
              personal growth that can occur through dedicated UX/UI work. These insights will guide
              future design efforts and contribute to the ongoing success of the Bank of America
              Bill Pay feature.
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
