
import React from 'react';
import { ArrowDown, Mail, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ResumeDownload from '@/components/ResumeDownload';

const Hero = () => {
  const scrollToPortfolio = () => {
    const portfolioSection = document.getElementById('portfolio');
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20 dark:opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-40 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="section-container text-center relative z-10 pt-20">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image */}
          <div className="w-32 h-32 rounded-full bg-gradient-to-r from-portfolio-accent to-blue-600 p-1 mx-auto mb-8 animate-fade-in opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            <div className="w-full h-full rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-2xl font-bold text-portfolio-text-dark dark:text-white">
              MS
            </div>
          </div>
          
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-portfolio-text-dark dark:text-white mb-6 animate-fade-in opacity-0" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
            Design that
            <span className="block text-portfolio-accent">Transforms</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-portfolio-text-light dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in opacity-0" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
            Senior UX Designer crafting intuitive digital experiences that bridge user needs with business goals. 
            Specializing in <span className="text-portfolio-accent font-semibold">user research</span>, 
            <span className="text-portfolio-accent font-semibold"> design systems</span>, and 
            <span className="text-portfolio-accent font-semibold"> product strategy</span>.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in opacity-0" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
            <Button 
              onClick={scrollToPortfolio}
              className="portfolio-button-primary text-lg px-8 py-3 transition-all duration-300 hover:scale-105"
            >
              View My Work
              <ArrowDown className="ml-2 w-5 h-5" />
            </Button>
            
            <ResumeDownload className="text-lg px-8 py-3" />
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center gap-6 animate-fade-in opacity-0" style={{ animationDelay: '1s', animationFillMode: 'forwards' }}>
            <a 
              href="mailto:hello@manishsondhi.com" 
              className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 text-portfolio-text-dark dark:text-white"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
            <a 
              href="https://github.com/manishsondhi" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 text-portfolio-text-dark dark:text-white"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://linkedin.com/in/manishsondhi" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 text-portfolio-text-dark dark:text-white"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 animate-fade-in opacity-0" style={{ animationDelay: '1.2s', animationFillMode: 'forwards' }}>
            <div>
              <div className="text-3xl font-bold text-portfolio-accent mb-2">5+</div>
              <div className="text-portfolio-text-light dark:text-gray-300">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-portfolio-accent mb-2">50+</div>
              <div className="text-portfolio-text-light dark:text-gray-300">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-portfolio-accent mb-2">20+</div>
              <div className="text-portfolio-text-light dark:text-gray-300">Happy Clients</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-portfolio-text-light dark:border-gray-300 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-portfolio-text-light dark:bg-gray-300 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
