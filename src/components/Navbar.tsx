
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import GlobalSearch from './GlobalSearch';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Experience', href: '/experience' },
    { label: 'Contact', href: '/contact' }
  ];

  const isActive = (href: string) => {
    if (href === '/' && location.pathname === '/') return true;
    if (href !== '/' && location.pathname === href) return true;
    return false;
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold text-portfolio-text-dark dark:text-white hover:text-portfolio-accent transition-colors">
              Manish Sondhi's Portfolio
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map(item => (
              <Link
                key={item.label}
                to={item.href}
                className={`font-medium transition-colors duration-200 ${
                  isActive(item.href)
                    ? 'text-portfolio-accent'
                    : 'text-portfolio-text-light hover:text-portfolio-accent'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Search and Theme Toggle */}
          <div className="flex items-center gap-3">
            <GlobalSearch />
            <ThemeToggle />
            
            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-portfolio-text-light hover:text-portfolio-accent transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map(item => (
                <Link
                  key={item.label}
                  to={item.href}
                  className={`block px-3 py-2 transition-colors ${
                    isActive(item.href)
                      ? 'text-portfolio-accent'
                      : 'text-portfolio-text-light hover:text-portfolio-accent'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
