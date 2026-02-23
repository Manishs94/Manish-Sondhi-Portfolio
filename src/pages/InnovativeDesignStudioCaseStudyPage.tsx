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
              UI/UX Case Study: Innovative Design Studio
            </h1>
            <p className="mt-5 max-w-4xl text-lg text-blue-100 sm:text-xl md:text-2xl">
              Foundational Product Design for Early-Stage Clients: A UI/UX Case Study
            </p>
          </div>
        </section>

        <SectionContainer id="overview" title="Overview: Delivering Impactful User Experiences">
          <p className={bodyClass}>
            As a UI/UX Designer, I collaborated with senior designers to deliver impactful user experiences for startups and nonprofit organizations. The projects spanned mobile and web platforms, and my core focus was on wireframing, research support, and building UI assets.
          </p>
          <p className={bodyClass}>
            This role introduced me to human-centered design and allowed me to contribute across all stages of the design process while learning to balance business needs with user goals. Gaining experience with wireframing, user research, and UI development was crucial to my growth as a designer. I learned how to translate user needs into functional designs, contributing to the success of multiple projects.
          </p>
          <FeaturedImage src={sectionImages.overview} alt="Team collaboration during product design" />
        </SectionContainer>

        <SectionContainer id="challenge" title="Challenge: Scaling UX on Limited Resources" dark>
          <p className={bodyClass}>
            Startups and nonprofits often face limited resources for design cycles, a lack of user insight at the outset, and a need to iterate quickly and launch MVPs. Our team&apos;s challenge was to create foundational UX solutions that could scale, all while working within budget and time constraints.
          </p>

          <div className="mt-8 space-y-7 sm:mt-10 sm:space-y-8">
            <div>
              <h3 className="text-xl font-semibold sm:text-2xl">Limited resources</h3>
              <p className="mt-3 text-base leading-relaxed text-[#314b69] sm:text-lg">
                Startups and nonprofits often face financial constraints that limit the resources available for design cycles.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold sm:text-2xl">Lack of user insight</h3>
              <p className="mt-3 text-base leading-relaxed text-[#314b69] sm:text-lg">
                Many early-stage companies lack comprehensive user data, making it challenging to create informed design decisions.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold sm:text-2xl">Need to iterate quickly</h3>
              <p className="mt-3 text-base leading-relaxed text-[#314b69] sm:text-lg">
                The fast-paced nature of startups requires rapid iteration and the ability to launch Minimum Viable Products (MVPs) efficiently.
              </p>
            </div>
          </div>
          <FeaturedImage src={sectionImages.challenge} alt="Small team planning around startup constraints" />
        </SectionContainer>

        <SectionContainer id="contributions" title="My Contributions: A Multifaceted Approach">
          <div className="mt-8 space-y-8 sm:mt-10 sm:space-y-10">
            <div>
              <h3 className="text-xl font-semibold sm:text-2xl">UX Research Support</h3>
              <p className="mt-4 text-base leading-relaxed text-[#314b69] sm:text-lg">
                I helped define early assumptions and user goals, conducted user interviews and online surveys using Google Forms, and documented usability issues from feedback and heuristic evaluations.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold sm:text-2xl">Wireframing &amp; User Flows</h3>
              <p className="mt-4 text-base leading-relaxed text-[#314b69] sm:text-lg">
                I created low-fidelity wireframes to map out user journeys for donation forms for a nonprofit platform and onboarding flows for a fintech MVP. I also participated in brainstorming sessions to help shape product features.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold sm:text-2xl">UI &amp; Visual Design</h3>
              <p className="mt-4 text-base leading-relaxed text-[#314b69] sm:text-lg">
                Designed UI mockups for responsive mobile and desktop views, built UI components and iconography using Sketch and Illustrator, and developed mini style guides to ensure brand consistency across pages.
              </p>
            </div>
          </div>
          <FeaturedImage src={sectionImages.contributions} alt="Wireframing and UI design artifacts" />
        </SectionContainer>

        <SectionContainer id="process" title="Process Snapshot: From Research to Handoff" dark>
          <p className={bodyClass}>
            Our design process was iterative, ensuring that we delivered effective and scalable UX solutions within budget and time constraints.
          </p>

          <div className="mt-8 space-y-7 sm:mt-10 sm:space-y-8">
            <div>
              <h3 className="text-xl font-semibold sm:text-2xl">Kickoff &amp; Research</h3>
              <p className="mt-3 text-base leading-relaxed text-[#314b69] sm:text-lg">
                Stakeholder calls to identify pain points, simple surveys and interviews to capture user behavior.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold sm:text-2xl">Sketching &amp; Wireframing</h3>
              <p className="mt-3 text-base leading-relaxed text-[#314b69] sm:text-lg">
                Created task flows and page layouts, iterated based on mentor feedback.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold sm:text-2xl">UI Design &amp; Prototyping</h3>
              <p className="mt-3 text-base leading-relaxed text-[#314b69] sm:text-lg">
                Built polished mockups and clickable prototypes, conducted quick internal tests for usability.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold sm:text-2xl">Client Handoff</h3>
              <p className="mt-3 text-base leading-relaxed text-[#314b69] sm:text-lg">
                Shared design files and visual documentation, delivered responsive assets for developers.
              </p>
            </div>
          </div>
          <FeaturedImage src={sectionImages.process} alt="Design process from sketches to handoff" />
        </SectionContainer>

        <SectionContainer id="impact" title="Impact: Enhancing Usability and Streamlining Development">
          <div className="mt-8 grid gap-4 sm:grid-cols-3 sm:mt-10">
            <div className="rounded-xl border border-[#d8e3f2] bg-[#f6f9fe] p-4">
              <p className="text-sm font-medium text-[#2b5d92]">Improved usability</p>
            </div>
            <div className="rounded-xl border border-[#d8e3f2] bg-[#f6f9fe] p-4">
              <p className="text-sm font-medium text-[#2b5d92]">Faster dev handoffs</p>
            </div>
            <div className="rounded-xl border border-[#d8e3f2] bg-[#f6f9fe] p-4">
              <p className="text-sm font-medium text-[#2b5d92]">Stronger product vision</p>
            </div>
          </div>

          <div className="mt-8 space-y-7 sm:space-y-8">
            <div>
              <h3 className="text-xl font-semibold sm:text-2xl">Improved usability</h3>
              <p className="mt-3 text-base leading-relaxed text-[#314b69] sm:text-lg">
                Clearer navigation and layout resulted in more intuitive interfaces, enhancing the overall user experience.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold sm:text-2xl">Faster dev handoffs</h3>
              <p className="mt-3 text-base leading-relaxed text-[#314b69] sm:text-lg">
                Style guides minimized back-and-forth during development, accelerating the development process.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold sm:text-2xl">Stronger product vision</h3>
              <p className="mt-3 text-base leading-relaxed text-[#314b69] sm:text-lg">
                Design exploration shaped product ideas at an early stage, contributing to a more cohesive product vision.
              </p>
            </div>
          </div>
          <FeaturedImage src={sectionImages.impact} alt="Analytics and product impact dashboard" />
        </SectionContainer>

        <SectionContainer id="learnings" title="What I Learned: Key Takeaways from the Experience" dark>
          <p className={bodyClass}>
            This experience provided invaluable insights into the world of UI/UX design, shaping my approach to future projects.
          </p>

          <ul className="mt-8 list-disc space-y-4 pl-6 text-base leading-relaxed text-[#314b69] sm:text-lg">
            <li>How to translate abstract ideas into visual workflows.</li>
            <li>The power of low-fidelity wireframes to spark conversation.</li>
            <li>The importance of team collaboration and mentorship in delivering successful UX.</li>
          </ul>
          <FeaturedImage src={sectionImages.learnings} alt="Team workshop and collaborative learning" />
        </SectionContainer>

        <section id="reflection" className="scroll-mt-28 bg-[#0f243b] text-white">
          <div className="mx-auto w-full max-w-5xl px-4 py-12 sm:px-6 sm:py-14 lg:px-10 lg:py-20">
            <h2 className="text-2xl font-semibold leading-tight sm:text-3xl md:text-4xl lg:text-5xl">Reflection: Building a Foundation for Future Success</h2>
            <p className="mt-8 text-base leading-relaxed text-blue-100 sm:text-lg">
              This experience helped build the foundation of my UX skillset, from research to prototyping. Working under senior guidance gave me a clear understanding of best practices and instilled a commitment to user-first thinking that I carry forward in every project.
            </p>
            <p className="mt-6 text-base leading-relaxed text-blue-100 sm:text-lg">
              I developed a deep appreciation for the importance of user-centered design, which has become a guiding principle in my approach to every project. The mentorship and collaborative environment enabled me to refine my skills and cultivate a user-first mindset.
            </p>
            <FeaturedImage src={sectionImages.reflection} alt="Reflective team session on design outcomes" />
          </div>
        </section>
      </main>
    </div>
  );
};

export default InnovativeDesignStudioCaseStudyPage;
