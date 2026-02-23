import React from 'react';

const slides = [
  {
    eyebrow: 'Problem',
    title: 'Fragmented lending systems slowed decisions and increased operational risk.',
    body: 'Origination, underwriting, collateral review, and risk monitoring lived in disconnected tools. Teams lost context between handoffs, duplicated work, and struggled to maintain consistent decision quality under regulatory pressure.',
    image: 'https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&q=80&w=1800',
  },
  {
    eyebrow: 'Strategy',
    title: 'Design a unified operating model, not isolated feature screens.',
    body: 'The product strategy centered on workflow continuity: a single platform architecture with role-specific surfaces, shared data context, and predictable decision states across the lending lifecycle.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1800',
  },
  {
    eyebrow: 'Solution',
    title: 'A full-platform UX system for origination, underwriting, and risk infrastructure.',
    body: 'Implemented workflow-first interfaces for analysts, risk leads, and operations teams, with AI-assisted decision support, integrated analytics, and compliance-ready interaction patterns built into core tasks.',
    image: 'https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&q=80&w=1800',
  },
  {
    eyebrow: 'Impact',
    title: 'Faster decisions, clearer accountability, stronger platform scalability.',
    body: 'The unified system improved credit-decision velocity, reduced workflow rework, and increased visibility across teams. It established a platform foundation that supports long-term enterprise growth and governance.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1800',
  },
];

const stats = [
  { value: '42%', label: 'Faster credit decision cycles' },
  { value: '31%', label: 'Reduction in workflow rework' },
  { value: '28%', label: 'Lower exception-handling overhead' },
  { value: '100%', label: 'Critical flows aligned to WCAG 2.1 standards' },
];

const CyncCaseStudyPage = () => {
  return (
    <div className="min-h-screen bg-[#f6f9fe] text-[#0f2035]">
      <main>
        <section className="min-h-screen border-b border-[#d8e3f2] bg-gradient-to-b from-[#0f2743] via-[#163a61] to-[#1f5082] text-white">
          <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-col justify-between px-6 py-12 lg:px-10 lg:py-16">
            <div>
              <p className="inline-flex rounded-full border border-white/30 bg-white/10 px-4 py-1 text-sm tracking-wide">
                Enterprise Platform Case Study
              </p>
              <h1 className="mt-8 max-w-5xl text-4xl font-semibold leading-tight md:text-6xl">
                CYNC Enterprise Lending Platform – Unified Loan Origination &amp; Risk Infrastructure
              </h1>
              <p className="mt-6 max-w-3xl text-lg text-blue-100 md:text-xl">
                End-to-end platform design for enterprise lending operations spanning origination, underwriting, portfolio risk, and compliance workflows.
              </p>
            </div>

            <div className="grid gap-4 border-t border-white/20 pt-8 md:grid-cols-3">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-blue-200">Industry</p>
                <p className="mt-2 text-sm text-blue-50">Enterprise Fintech / Lending Infrastructure</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-blue-200">Role</p>
                <p className="mt-2 text-sm text-blue-50">Lead Product Designer, Platform Architecture</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-blue-200">Timeline</p>
                <p className="mt-2 text-sm text-blue-50">2022 – Present</p>
              </div>
            </div>
          </div>
        </section>

        {slides.map((slide, index) => (
          <section
            key={slide.eyebrow}
            className={`min-h-screen border-b border-[#d8e3f2] ${index % 2 === 0 ? 'bg-white' : 'bg-[#f2f7fd]'}`}
          >
            <div className="mx-auto grid min-h-screen w-full max-w-6xl items-center gap-10 px-6 py-16 lg:grid-cols-2 lg:px-10">
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-[#2b5d92]">{slide.eyebrow}</p>
                <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">{slide.title}</h2>
                <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#314b69]">{slide.body}</p>
              </div>
              <div>
                <img
                  src={slide.image}
                  alt={slide.eyebrow}
                  className="h-[420px] w-full rounded-2xl object-cover shadow-2xl ring-1 ring-[#d9e4f2]"
                />
              </div>
            </div>
          </section>
        ))}

        <section className="min-h-screen bg-[#0f243b] text-white">
          <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-col justify-center px-6 py-16 lg:px-10">
            <p className="text-xs uppercase tracking-[0.24em] text-blue-200">Measurable Impact</p>
            <h2 className="mt-4 text-4xl font-semibold md:text-5xl">Platform outcomes tied to business performance.</h2>
            <div className="mt-10 grid gap-4 md:grid-cols-2">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-xl border border-white/20 bg-white/10 p-6">
                  <p className="text-4xl font-semibold text-[#85b8ff]">{stat.value}</p>
                  <p className="mt-2 text-base text-blue-100">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default CyncCaseStudyPage;
