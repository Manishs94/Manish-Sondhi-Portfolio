import React from 'react';
import { ArrowRight, Download, Github, Linkedin, Twitter } from 'lucide-react';
const Hero = () => {
  return <section id="home" className="pt-32 pb-24 md:pt-44 md:pb-32">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="mb-4 animate-fade-in opacity-0" style={{
            animationDelay: '0.2s',
            animationFillMode: 'forwards'
          }}>
              <span className="inline-block px-4 py-2 bg-blue-100 text-portfolio-accent rounded-full font-medium mb-4">
                Product & UX Designer
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-portfolio-text-dark mb-6 animate-fade-in opacity-0" style={{
            animationDelay: '0.4s',
            animationFillMode: 'forwards'
          }}>
              Creating <span className="text-portfolio-accent">delightful experiences</span> that users love
            </h1>
            <p className="text-lg text-portfolio-text-light mb-8 max-w-lg animate-fade-in opacity-0" style={{
            animationDelay: '0.6s',
            animationFillMode: 'forwards'
          }}>
              I design user-centered digital products that solve real problems through research, iteration, and thoughtful UI/UX principles.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8 animate-fade-in opacity-0" style={{
            animationDelay: '0.8s',
            animationFillMode: 'forwards'
          }}>
              <a href="#portfolio" className="portfolio-button-primary flex items-center gap-2 transition-transform hover:scale-105 duration-300">
                View My Work <ArrowRight size={18} />
              </a>
              <a href="#" className="portfolio-button-outline flex items-center gap-2 transition-transform hover:scale-105 duration-300">
                Download CV <Download size={18} />
              </a>
            </div>
            
            <div className="flex items-center gap-6 animate-fade-in opacity-0" style={{
            animationDelay: '1s',
            animationFillMode: 'forwards'
          }}>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-portfolio-text-dark hover:text-portfolio-accent transition-colors duration-300 transform hover:scale-110">
                <Github size={24} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-portfolio-text-dark hover:text-portfolio-accent transition-colors duration-300 transform hover:scale-110">
                <Linkedin size={24} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-portfolio-text-dark hover:text-portfolio-accent transition-colors duration-300 transform hover:scale-110">
                <Twitter size={24} />
              </a>
            </div>
          </div>
          
          <div className="order-1 md:order-2 animate-fade-in opacity-0" style={{
          animationDelay: '0.4s',
          animationFillMode: 'forwards'
        }}>
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-100 rounded-full z-0"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-portfolio-accent opacity-10 rounded-full z-0"></div>
              <div className="relative z-10 overflow-hidden rounded-xl transform transition-transform duration-700 hover:scale-[1.02] hover:shadow-xl">
                <img alt="Designer" className="w-full h-auto rounded-xl object-cover transition-transform duration-700 hover:scale-105" src="/lovable-uploads/3999e1de-e3d3-4f49-8d34-fccee8f17e09.jpg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;