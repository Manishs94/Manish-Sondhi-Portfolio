
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, Target, Users, Lightbulb, TrendingUp, BookOpen, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const Overview = () => {
  const philosophyPoints = [
    {
      icon: <Target className="w-6 h-6 text-portfolio-accent" />,
      title: "User-Centered Design",
      description: "Every design decision starts with understanding user needs, behaviors, and pain points through research and empathy."
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-portfolio-accent" />,
      title: "Business Impact Focus",
      description: "Creating solutions that not only delight users but also drive measurable business outcomes and growth."
    },
    {
      icon: <Lightbulb className="w-6 h-6 text-portfolio-accent" />,
      title: "Innovation & Iteration",
      description: "Embracing experimentation and continuous improvement to push the boundaries of digital experiences."
    }
  ];

  const methodologies = [
    {
      phase: "Research & Discovery",
      activities: ["User Interviews", "Competitive Analysis", "Journey Mapping", "Stakeholder Alignment"],
      outcome: "Deep understanding of user needs and business constraints"
    },
    {
      phase: "Ideation & Strategy",
      activities: ["Design Thinking Workshops", "Information Architecture", "User Flow Design", "Wireframing"],
      outcome: "Clear product strategy and validated design direction"
    },
    {
      phase: "Design & Prototyping",
      activities: ["High-fidelity UI Design", "Interactive Prototyping", "Design System Creation", "Usability Testing"],
      outcome: "Polished designs ready for development and user validation"
    },
    {
      phase: "Implementation & Optimization",
      activities: ["Developer Handoff", "Design QA", "A/B Testing", "Performance Monitoring"],
      outcome: "Successfully launched products with measurable improvements"
    }
  ];

  const achievements = [
    { metric: "7+", label: "Years Experience", icon: <Award className="w-5 h-5" /> },
    { metric: "68M+", label: "Users Impacted", icon: <Users className="w-5 h-5" /> },
    { metric: "40%", label: "Avg. Improvement", icon: <TrendingUp className="w-5 h-5" /> },
    { metric: "15+", label: "Projects Delivered", icon: <BookOpen className="w-5 h-5" /> }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-portfolio-text-dark mb-6">
              Product Design <span className="text-portfolio-accent">Overview</span>
            </h1>
            <p className="text-xl text-portfolio-text-light mb-8 max-w-3xl mx-auto">
              Transforming complex financial products into intuitive digital experiences through 
              user-centered design, strategic thinking, and measurable business impact.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/#portfolio">
                <Button className="portfolio-button-primary flex items-center gap-2">
                  View Portfolio <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link to="/#contact">
                <Button variant="outline" className="portfolio-button-outline">
                  Contact Me
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-white">
        <div className="section-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mx-auto mb-4">
                  <div className="text-portfolio-accent">{achievement.icon}</div>
                </div>
                <div className="text-3xl font-bold text-portfolio-text-dark mb-2">{achievement.metric}</div>
                <div className="text-portfolio-text-light">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Philosophy */}
      <section className="py-24 bg-portfolio-bg-light">
        <div className="section-container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="section-heading">Design Philosophy</h2>
              <p className="section-subheading mx-auto">
                My approach to creating meaningful digital experiences
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {philosophyPoints.map((point, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="mb-4">{point.icon}</div>
                  <h3 className="text-xl font-semibold text-portfolio-text-dark mb-4">{point.title}</h3>
                  <p className="text-portfolio-text-light">{point.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* UX Methodology */}
      <section className="py-24 bg-white">
        <div className="section-container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="section-heading">UX Methodology</h2>
              <p className="section-subheading mx-auto">
                A systematic approach to solving complex design challenges
              </p>
            </div>
            
            <div className="space-y-12">
              {methodologies.map((phase, index) => (
                <div key={index} className="relative">
                  <div className="flex flex-col md:flex-row gap-8 items-start">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-portfolio-accent text-white rounded-full flex items-center justify-center font-bold text-lg">
                        {index + 1}
                      </div>
                    </div>
                    
                    <div className="flex-grow">
                      <h3 className="text-2xl font-semibold text-portfolio-text-dark mb-4">{phase.phase}</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                          <h4 className="font-medium text-portfolio-text-dark mb-3">Key Activities</h4>
                          <ul className="space-y-2">
                            {phase.activities.map((activity, actIndex) => (
                              <li key={actIndex} className="flex items-start gap-2">
                                <span className="text-portfolio-accent">•</span>
                                <span className="text-portfolio-text-light">{activity}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium text-portfolio-text-dark mb-3">Outcome</h4>
                          <p className="text-portfolio-text-light">{phase.outcome}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {index < methodologies.length - 1 && (
                    <div className="hidden md:block absolute left-6 top-16 w-0.5 h-12 bg-gray-200"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-portfolio-accent text-white">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Create Something Amazing?</h2>
            <p className="text-xl mb-8 opacity-90">
              Let's discuss how we can bring your product vision to life through thoughtful design and user research.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/#portfolio">
                <Button variant="secondary" className="bg-white text-portfolio-accent hover:bg-gray-100">
                  View My Work
                </Button>
              </Link>
              <Link to="/#contact">
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-portfolio-accent">
                  Get In Touch
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Overview;
