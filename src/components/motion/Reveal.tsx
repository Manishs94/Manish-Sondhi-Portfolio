import React from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface RevealProps {
  children: React.ReactNode;
  variant?: 'up' | 'left' | 'right' | 'scale';
  /** Milliseconds to wait after the element scrolls into view; use for staggering siblings. */
  delay?: number;
  className?: string;
}

// Fades and slides its children in the first time they scroll into view. It triggers when the
// element's top edge enters the viewport (not on a visible fraction), so blocks taller than
// the screen still reveal.
const Reveal: React.FC<RevealProps> = ({ children, variant = 'up', delay = 0, className = '' }) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0, rootMargin: '0px 0px -10% 0px' });

  return (
    <div
      ref={ref}
      className={`reveal reveal-${variant} ${isVisible ? 'visible' : ''} ${className}`}
      style={delay ? ({ '--reveal-delay': `${delay}ms` } as React.CSSProperties) : undefined}
    >
      {children}
    </div>
  );
};

export default Reveal;
