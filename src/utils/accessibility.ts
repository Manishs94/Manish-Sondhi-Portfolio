
// Accessibility utilities for WCAG compliance

export const trapFocus = (element: HTMLElement) => {
  const focusableElements = element.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key === 'Tab') {
      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          lastElement.focus();
          e.preventDefault();
        }
      } else {
        if (document.activeElement === lastElement) {
          firstElement.focus();
          e.preventDefault();
        }
      }
    }
  };

  element.addEventListener('keydown', handleTabKey);
  firstElement?.focus();

  return () => {
    element.removeEventListener('keydown', handleTabKey);
  };
};

export const announceToScreenReader = (message: string, priority: 'polite' | 'assertive' = 'polite') => {
  const announcement = document.createElement('div');
  announcement.setAttribute('aria-live', priority);
  announcement.setAttribute('aria-atomic', 'true');
  announcement.className = 'sr-only';
  announcement.textContent = message;
  
  document.body.appendChild(announcement);
  
  setTimeout(() => {
    document.body.removeChild(announcement);
  }, 1000);
};

export const getContrastRatio = (foreground: string, background: string): number => {
  const getLuminance = (color: string): number => {
    const rgb = color.match(/\d+/g);
    if (!rgb) return 0;
    
    const [r, g, b] = rgb.map(c => {
      const val = parseInt(c) / 255;
      return val <= 0.03928 ? val / 12.92 : Math.pow((val + 0.055) / 1.055, 2.4);
    });
    
    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
  };

  const l1 = getLuminance(foreground);
  const l2 = getLuminance(background);
  const lighter = Math.max(l1, l2);
  const darker = Math.min(l1, l2);
  
  return (lighter + 0.05) / (darker + 0.05);
};

export const checkAccessibility = {
  contrastRatio: (foreground: string, background: string) => {
    const ratio = getContrastRatio(foreground, background);
    return {
      ratio,
      wcagAA: ratio >= 4.5,
      wcagAAA: ratio >= 7,
      wcagAALarge: ratio >= 3
    };
  },
  
  focusVisible: (element: HTMLElement) => {
    const style = getComputedStyle(element);
    return style.outline !== 'none' || style.boxShadow.includes('focus');
  },
  
  altText: (img: HTMLImageElement) => {
    return img.alt && img.alt.trim().length > 0;
  },
  
  labelAssociation: (input: HTMLInputElement) => {
    return input.labels && input.labels.length > 0 || 
           input.getAttribute('aria-label') || 
           input.getAttribute('aria-labelledby');
  }
};

export const keyboardNavigation = {
  handleArrowKeys: (
    event: KeyboardEvent, 
    items: HTMLElement[], 
    currentIndex: number,
    orientation: 'horizontal' | 'vertical' = 'horizontal'
  ) => {
    let newIndex = currentIndex;
    
    const keys = orientation === 'horizontal' 
      ? ['ArrowLeft', 'ArrowRight'] 
      : ['ArrowUp', 'ArrowDown'];
    
    if (event.key === keys[0]) {
      newIndex = currentIndex > 0 ? currentIndex - 1 : items.length - 1;
    } else if (event.key === keys[1]) {
      newIndex = currentIndex < items.length - 1 ? currentIndex + 1 : 0;
    }
    
    if (newIndex !== currentIndex) {
      items[newIndex]?.focus();
      event.preventDefault();
    }
    
    return newIndex;
  },
  
  handleEnterSpace: (event: KeyboardEvent, callback: () => void) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      callback();
    }
  }
};

export const reduceMotion = () => {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

export const highContrast = () => {
  return window.matchMedia('(prefers-contrast: high)').matches;
};

export const darkMode = () => {
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
};
