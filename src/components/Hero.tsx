
import React from 'react';
import { ArrowRight, Download, Github, Linkedin, Twitter } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="pt-32 pb-24 md:pt-44 md:pb-32">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="mb-4">
              <span className="inline-block px-4 py-2 bg-blue-100 text-portfolio-accent rounded-full font-medium mb-4">
                Product & UX Designer
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-portfolio-text-dark mb-6">
              Creating digital products that <span className="text-portfolio-accent">users love</span>
            </h1>
            <p className="text-lg text-portfolio-text-light mb-8 max-w-lg">
              I design and build beautiful digital experiences that help businesses grow and make users happy.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <a href="#contact" className="portfolio-button-primary flex items-center gap-2">
                Contact Me <ArrowRight size={18} />
              </a>
              <a href="#" className="portfolio-button-outline flex items-center gap-2">
                Download CV <Download size={18} />
              </a>
            </div>
            
            <div className="flex items-center gap-6">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-portfolio-text-dark hover:text-portfolio-accent transition-colors">
                <Github size={24} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-portfolio-text-dark hover:text-portfolio-accent transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-portfolio-text-dark hover:text-portfolio-accent transition-colors">
                <Twitter size={24} />
              </a>
            </div>
          </div>
          
          <div className="order-1 md:order-2 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-100 rounded-full z-0"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-portfolio-accent opacity-10 rounded-full z-0"></div>
              <div className="relative z-10 overflow-hidden rounded-xl">
                <img
                  src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                  alt="Designer"
                  className="w-full h-auto rounded-xl object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
