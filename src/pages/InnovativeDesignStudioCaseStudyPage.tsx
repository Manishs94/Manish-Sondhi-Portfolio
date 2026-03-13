import React from 'react';

const sectionImages = {
  overview: 'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&q=80&w=1800',
  challenge: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&q=80&w=1800',
  contributions: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1800',
  process: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=1800',
  impact: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1800',
  learnings: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80&w=1800',
  reflection: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=1800',
};

const FeaturedImage = ({ src, alt }: { src: string; alt: string }) => (
  <div className="mt-8 overflow-hidden rounded-2xl border border-[#d8e3f2] shadow-lg sm:mt-10">
    <img
      src={src}
      alt={alt}
      loading="lazy"
      className="aspect-[16/10] w-full object-cover sm:aspect-[16/9]"
    />
  </div>
);

const SectionContainer = ({
  id,
  title,
  children,
  dark = false,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
  dark?: boolean;
}) => (
  <section
    id={id}
    className={`scroll-mt-28 border-b border-[#d8e3f2] ${dark ? 'bg-[#f2f7fd]' : 'bg-white'}`}
  >
    <div className="mx-auto w-full max-w-5xl px-4 py-12 sm:px-6 sm:py-14 lg:px-10 lg:py-20">
      <h2 className="text-2xl font-semibold leading-tight sm:text-3xl md:text-4xl lg:text-5xl">{title}</h2>
      {children}
    </div>
  </section>
);

const bodyClass = 'mt-6 text-base leading-relaxed text-[#314b69] sm:text-lg';

const InnovativeDesignStudioCaseStudyPage = () => {
  return (
    <div className="min-h-screen bg-[#f6f9fe] text-[#0f2035]">
      <main>
        <section className="min-h-[62vh] border-b border-[#d8e3f2] bg-gradient-to-b from-[#0f2743] via-[#163a61] to-[#1f5082] text-white sm:min-h-[70vh]">
          <div className="mx-auto flex min-h-[62vh] w-full max-w-5xl flex-col justify-center px-4 py-12 sm:min-h-[70vh] sm:px-6 sm:py-14 lg:px-10 lg:py-20">
            <h1 className="max-w-5xl text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl lg:text-6xl">
              Innovative Design Studio — Foundational Product Design for Early-Stage Teams
            </h1>
            <p className="mt-5 max-w-4xl text-lg text-blue-100 sm:text-xl md:text-2xl">
              Designing scalable product foundations for startups and mission-driven organizations working under tight timelines, limited resources, and evolving product requirements.
            </p>
          </div>
        </section>

        <SectionContainer id="overview" title="Overview">
          <p className={bodyClass}>
            At Innovative Design Studio, I worked on early-stage digital products for startups and nonprofit organizations that needed clear, usable product experiences but often lacked mature design processes, research depth, or reusable design foundations.
          </p>
          <p className={bodyClass}>
            These projects spanned web and mobile experiences and required balancing speed, clarity, and scalability. My role focused on helping teams translate early ideas into structured product flows, validate usability quickly, and create design directions that engineering teams could build from with confidence.
          </p>
          <FeaturedImage src={sectionImages.overview} alt="Team collaboration during product design" />
        </SectionContainer>

        <SectionContainer id="product-context" title="Product Context" dark>
          <p className={bodyClass}>
            Most client teams were working toward MVP launches or early product releases. They needed practical product design support to clarify user journeys, define core flows, and establish lightweight design systems that could evolve over time.
          </p>
          <p className={bodyClass}>
            The work typically involved early-stage web applications, mobile product concepts, and internal operational tools where usability and speed to market were both critical.
          </p>
          <FeaturedImage src={sectionImages.challenge} alt="Small team planning around startup constraints" />
        </SectionContainer>

        <SectionContainer id="my-role" title="My Role">
          <p className={bodyClass}>
            As a UI/UX Designer, I contributed across multiple parts of the product design process, including:
          </p>

          <ul className="mt-8 list-disc space-y-4 pl-6 text-base leading-relaxed text-[#314b69] sm:text-lg">
            <li>user flow mapping</li>
            <li>wireframing and interaction design</li>
            <li>usability-focused interface decisions</li>
            <li>reusable UI pattern creation</li>
            <li>design collaboration with developers and stakeholders</li>
          </ul>

          <p className={bodyClass}>
            My focus was on helping small teams move from rough ideas to clearer product experiences that could support launch and iteration.
          </p>
          <FeaturedImage src={sectionImages.contributions} alt="Wireframing and UI design artifacts" />
        </SectionContainer>

        <SectionContainer id="problem" title="Problem" dark>
          <p className={bodyClass}>
            Early-stage teams often lacked structured product workflows, validated user journeys, and clear interface foundations. Many were trying to move quickly toward MVP launches while balancing limited time, budget, and internal design maturity.
          </p>
          <p className={bodyClass}>
            As a result, product decisions were often reactive, handoff quality varied, and teams risked building experiences that were hard to scale or difficult for users to navigate.
          </p>
          <FeaturedImage src={sectionImages.process} alt="Design process from sketches to handoff" />
        </SectionContainer>

        <SectionContainer id="design-approach" title="Design Approach">
          <p className={bodyClass}>
            The design work focused on creating strong product foundations without slowing down delivery. Rather than over-designing early concepts, the approach emphasized clarity, iteration, and scalable structure.
          </p>

          <p className={bodyClass}>Key activities included:</p>
          <ul className="mt-8 list-disc space-y-4 pl-6 text-base leading-relaxed text-[#314b69] sm:text-lg">
            <li>mapping user flows before screen design</li>
            <li>using low-fidelity wireframes to align quickly</li>
            <li>refining interaction patterns around core user tasks</li>
            <li>creating reusable UI components where appropriate</li>
            <li>supporting developer handoff with clear design intent</li>
          </ul>
          <FeaturedImage src={sectionImages.impact} alt="Analytics and product impact dashboard" />
        </SectionContainer>

        <SectionContainer id="solution" title="Solution" dark>
          <p className={bodyClass}>
            Designed foundational product experiences that helped early-stage teams define clear user flows, improve usability, and create more consistent interfaces under tight delivery constraints.
          </p>
          <p className={bodyClass}>
            The work emphasized practical design systems thinking, clearer interaction patterns, and product structures that could support future iteration rather than one-off screens.
          </p>
          <FeaturedImage src={sectionImages.learnings} alt="Team workshop and collaborative learning" />
        </SectionContainer>

        <SectionContainer id="example-workflow" title="Example Workflow">
          <p className={bodyClass}>
            A typical engagement involved helping a team clarify one of its most important early product flows.
          </p>

          <div className="mt-8 rounded-2xl border border-[#d8e3f2] bg-[#f6f9fe] p-6 sm:p-8">
            <p className="text-base font-medium leading-relaxed text-[#0f2035] sm:text-lg">
              Example:
            </p>
            <p className="mt-4 text-base leading-relaxed text-[#314b69] sm:text-lg">
              User enters the product for the first time
              <br />
              → onboarding introduces the core value of the product
              <br />
              → user completes an initial setup or primary action
              <br />
              → interface guides the user toward the next meaningful task
              <br />
              → team uses this foundation to validate and iterate on the experience
            </p>
          </div>

          <p className={bodyClass}>
            This approach helped clients move from vague concepts to more testable and buildable product experiences.
          </p>
        </SectionContainer>

        <SectionContainer id="impact" title="Impact" dark>
          <ul className="mt-8 list-disc space-y-4 pl-6 text-base leading-relaxed text-[#314b69] sm:text-lg">
            <li>Improved clarity and usability across core early-stage product flows</li>
            <li>Faster developer handoff through more structured interaction design</li>
            <li>Stronger alignment between founders, stakeholders, and delivery teams</li>
            <li>More scalable design foundations for future product iteration</li>
          </ul>
          <FeaturedImage src={sectionImages.impact} alt="Analytics and product impact dashboard" />
        </SectionContainer>

        <section id="reflection" className="scroll-mt-28 bg-[#0f243b] text-white">
          <div className="mx-auto w-full max-w-5xl px-4 py-12 sm:px-6 sm:py-14 lg:px-10 lg:py-20">
            <h2 className="text-2xl font-semibold leading-tight sm:text-3xl md:text-4xl lg:text-5xl">What I Learned</h2>
            <p className="mt-8 text-base leading-relaxed text-blue-100 sm:text-lg">
              Working with early-stage teams reinforced the importance of designing for momentum as well as usability. In startup environments, the best design solution is often the one that helps teams move forward confidently while still creating a solid product foundation.
            </p>
            <p className="mt-6 text-base leading-relaxed text-blue-100 sm:text-lg">
              This experience taught me how to balance speed, ambiguity, and scalability — skills that continue to shape how I approach product design today.
            </p>
            <FeaturedImage src={sectionImages.reflection} alt="Reflective team session on design outcomes" />
          </div>
        </section>
      </main>
    </div>
  );
};

export default InnovativeDesignStudioCaseStudyPage;
