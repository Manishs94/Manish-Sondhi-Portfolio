import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700 transition-colors duration-300">
      <div className="section-container">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#home" className="text-2xl font-bold text-portfolio-text-dark dark:text-white">
              MS
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#home" className="nav-link">Home</a>
              <a href="#portfolio" className="nav-link">Portfolio</a>
              <a href="#about" className="nav-link">About</a>
              <a href="#experience" className="nav-link">Experience</a>
              <a href="#testimonials" className="nav-link">Testimonials</a>
              <a href="#contact" className="nav-link">Contact</a>
            </div>
          </div>

          {/* Theme Toggle and Mobile Menu Button */}
          <div className="flex items-center gap-2">
            <ThemeToggle />
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-portfolio-text-dark dark:text-white hover:text-portfolio-accent hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-portfolio-accent transition-colors duration-300"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 transition-colors duration-300">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#home" className="block px-3 py-2 text-portfolio-text-dark dark:text-white hover:text-portfolio-accent transition-colors duration-300">Home</a>
            <a href="#portfolio" className="block px-3 py-2 text-portfolio-text-dark dark:text-white hover:text-portfolio-accent transition-colors duration-300">Portfolio</a>
            <a href="#about" className="block px-3 py-2 text-portfolio-text-dark dark:text-white hover:text-portfolio-accent transition-colors duration-300">About</a>
            <a href="#experience" className="block px-3 py-2 text-portfolio-text-dark dark:text-white hover:text-portfolio-accent transition-colors duration-300">Experience</a>
            <a href="#testimonials" className="block px-3 py-2 text-portfolio-text-dark dark:text-white hover:text-portfolio-accent transition-colors duration-300">Testimonials</a>
            <a href="#contact" className="block px-3 py-2 text-portfolio-text-dark dark:text-white hover:text-portfolio-accent transition-colors duration-300">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
