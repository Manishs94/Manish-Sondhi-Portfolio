
import React, { useState, useEffect } from 'react';

const ScrollProgress = () => {
  return null;

  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollPx = document.documentElement.scrollTop;
      const winHeightPx = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = scrollPx / winHeightPx;
      const progress = Math.min(scrolled * 100, 100);
      
      setScrollProgress(progress);
      setIsVisible(scrollPx > 200); // Show after scrolling 200px
    };

    window.addEventListener('scroll', updateScrollProgress);
    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  return (
    <div 
      className={`fixed left-0 w-full h-1 bg-gray-200 dark:bg-gray-800 z-40 pointer-events-none top-14 sm:top-14 lg:top-16 transition-opacity duration-300 hidden md:block ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div 
        className="h-full bg-gradient-to-r from-portfolio-accent to-blue-600 transition-all duration-300 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
};

export default ScrollProgress;
