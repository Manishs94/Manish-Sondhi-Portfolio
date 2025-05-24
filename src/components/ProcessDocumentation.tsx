
import React from 'react';
import { Lightbulb, Search, Palette, Code, TestTube, Rocket } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const ProcessDocumentation = () => {
  const { ref: processRef, isVisible } = useScrollAnimation();

  const processSteps = [
    {
      icon: <Search className="w-8 h-8" />,
      title: "1. Discovery & Research",
      description: "Understanding user needs, business goals, and market context through interviews, surveys, and competitive analysis.",
      details: [
        "User interviews and persona development",
        "Competitive analysis and market research",
        "Stakeholder alignment and requirement gathering",
        "Technical feasibility assessment"
      ],
      duration: "1-2 weeks"
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "2. Strategy & Planning",
      description: "Defining the product strategy, user journey mapping, and creating a roadmap for success.",
      details: [
        "User journey mapping and flow definition",
        "Information architecture planning",
        "Feature prioritization and roadmap",
        "Success metrics definition"
      ],
      duration: "1 week"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "3. Design & Prototyping",
      description: "Creating wireframes, mockups, and interactive prototypes to visualize the solution.",
      details: [
        "Low-fidelity wireframes and sketches",
        "High-fidelity mockups and design systems",
        "Interactive prototypes and micro-interactions",
        "Design documentation and handoff"
      ],
      duration: "2-3 weeks"
    },
    {
      icon: <TestTube className="w-8 h-8" />,
      title: "4. Testing & Validation",
      description: "Validating designs through user testing, feedback collection, and iterative improvements.",
      details: [
        "Usability testing with target users",
        "A/B testing for key interactions",
        "Accessibility audit and compliance",
        "Stakeholder review and feedback integration"
      ],
      duration: "1-2 weeks"
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "5. Development Support",
      description: "Collaborating with developers to ensure faithful implementation of the design vision.",
      details: [
        "Design system documentation",
        "Developer handoff and collaboration",
        "Quality assurance and design review",
        "Implementation guidance and support"
      ],
      duration: "Ongoing"
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "6. Launch & Optimization",
      description: "Supporting the product launch and continuously optimizing based on real user data.",
      details: [
        "Launch strategy and rollout planning",
        "Performance monitoring and analytics",
        "User feedback collection and analysis",
        "Continuous improvement and iteration"
      ],
      duration: "Ongoing"
    }
  ];

  return (
    <section ref={processRef} className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className={`inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-portfolio-accent rounded-full font-medium mb-4 transition-all duration-700 ${isVisible ? 'animate-fade-in opacity-100' : 'opacity-0 translate-y-4'}`}>
            Design Process
          </span>
          <h2 className={`section-heading dark:text-white transition-all duration-700 delay-200 ${isVisible ? 'animate-fade-in opacity-100' : 'opacity-0 translate-y-4'}`}>
            My Design Methodology
          </h2>
          <p className={`section-subheading mx-auto dark:text-gray-300 transition-all duration-700 delay-400 ${isVisible ? 'animate-fade-in opacity-100' : 'opacity-0 translate-y-4'}`}>
            A systematic approach to creating user-centered designs that solve real problems and drive business results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {processSteps.map((step, index) => (
            <Card 
              key={index}
              className={`bg-white dark:bg-gray-800 transition-all duration-700 hover:shadow-lg ${isVisible ? 'animate-fade-in opacity-100' : 'opacity-0 translate-y-8'}`}
              style={{ animationDelay: `${600 + index * 100}ms` }}
            >
              <CardHeader className="text-center pb-4">
                <div className="bg-portfolio-accent text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-portfolio-text-dark dark:text-white mb-2">
                  {step.title}
                </h3>
                <div className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-portfolio-accent rounded-full text-sm font-medium">
                  {step.duration}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-portfolio-text-light dark:text-gray-300 mb-4">
                  {step.description}
                </p>
                <ul className="space-y-2">
                  {step.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="text-sm text-portfolio-text-light dark:text-gray-400 flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-portfolio-accent rounded-full mt-2 flex-shrink-0"></div>
                      {detail}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className={`mt-16 bg-white dark:bg-gray-800 rounded-lg p-8 transition-all duration-700 ${isVisible ? 'animate-fade-in opacity-100' : 'opacity-0 translate-y-8'}`} style={{ animationDelay: '1200ms' }}>
          <h3 className="text-2xl font-bold text-portfolio-text-dark dark:text-white mb-4 text-center">
            Key Principles
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <h4 className="font-semibold text-portfolio-text-dark dark:text-white mb-2">User-Centered</h4>
              <p className="text-portfolio-text-light dark:text-gray-300 text-sm">
                Every decision is made with the user's needs and goals in mind
              </p>
            </div>
            <div className="text-center">
              <h4 className="font-semibold text-portfolio-text-dark dark:text-white mb-2">Data-Driven</h4>
              <p className="text-portfolio-text-light dark:text-gray-300 text-sm">
                Validated through research, testing, and real user feedback
              </p>
            </div>
            <div className="text-center">
              <h4 className="font-semibold text-portfolio-text-dark dark:text-white mb-2">Iterative</h4>
              <p className="text-portfolio-text-light dark:text-gray-300 text-sm">
                Continuous improvement based on learning and user insights
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessDocumentation;
