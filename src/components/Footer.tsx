import React from 'react';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-portfolio-text-dark text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-8">
          <div className="flex-1">
            <a href="#" className="text-2xl font-bold">Manish <span className="text-portfolio-accent">Sondhi</span></a>
            <p className="text-gray-300 mt-3 max-w-md font-medium">
              Designing enterprise fintech and AI-assisted platforms that scale, comply, and convert.
            </p>
            <p className="text-gray-400 mt-2 text-sm">
              8+ years designing complex workflows, accessibility-first systems, and regulatory-compliant platforms.
            </p>
            
            {/* Secondary CTAs */}
            <div className="flex flex-wrap gap-4 mt-4 text-sm">
              <a href="#portfolio" className="text-portfolio-accent hover:text-white transition-colors font-medium">View Case Studies</a>
              <span className="text-gray-600">•</span>
              <a href="#contact" className="text-portfolio-accent hover:text-white transition-colors font-medium">Book Consultation</a>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-12">
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a></li>
                <li><a href="#portfolio" className="text-gray-400 hover:text-white transition-colors">Portfolio</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Product Design</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">UX Consultation</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Design Systems</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Accessibility</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Manish Sondhi. All rights reserved.
          </p>
          
          {/* Social Icons */}
          <div className="flex gap-4">
            <a 
              href="https://linkedin.com/in/manish-sondhi" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 bg-gray-800 rounded-full hover:bg-portfolio-accent transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a 
              href="https://github.com/manishsondhi" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 bg-gray-800 rounded-full hover:bg-portfolio-accent transition-colors"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a 
              href="mailto:Manishsondhi94@gmail.com"
              className="p-2 bg-gray-800 rounded-full hover:bg-portfolio-accent transition-colors"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>
          
          <button 
            onClick={scrollToTop}
            className="p-3 bg-gray-800 rounded-full hover:bg-portfolio-accent transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
