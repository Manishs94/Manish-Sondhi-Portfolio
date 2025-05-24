
import { trackPerformance } from '@/components/Analytics';

// Performance monitoring utilities
export class PerformanceMonitor {
  private static instance: PerformanceMonitor;
  private observers: Map<string, PerformanceObserver> = new Map();

  static getInstance(): PerformanceMonitor {
    if (!PerformanceMonitor.instance) {
      PerformanceMonitor.instance = new PerformanceMonitor();
    }
    return PerformanceMonitor.instance;
  }

  init() {
    this.observeWebVitals();
    this.observeResourceTiming();
    this.observeUserTiming();
  }

  private observeWebVitals() {
    // Largest Contentful Paint (LCP)
    const lcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];
      trackPerformance('lcp', Math.round(lastEntry.startTime));
    });
    
    try {
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
      this.observers.set('lcp', lcpObserver);
    } catch (e) {
      console.warn('LCP observer not supported');
    }

    // First Input Delay (FID)
    const fidObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry: any) => {
        trackPerformance('fid', Math.round(entry.processingStart - entry.startTime));
      });
    });

    try {
      fidObserver.observe({ entryTypes: ['first-input'] });
      this.observers.set('fid', fidObserver);
    } catch (e) {
      console.warn('FID observer not supported');
    }

    // Cumulative Layout Shift (CLS)
    let clsValue = 0;
    const clsObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry: any) => {
        if (!entry.hadRecentInput) {
          clsValue += entry.value;
        }
      });
      trackPerformance('cls', Math.round(clsValue * 1000) / 1000);
    });

    try {
      clsObserver.observe({ entryTypes: ['layout-shift'] });
      this.observers.set('cls', clsObserver);
    } catch (e) {
      console.warn('CLS observer not supported');
    }
  }

  private observeResourceTiming() {
    const resourceObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry: any) => {
        if (entry.initiatorType === 'img') {
          trackPerformance('image_load_time', Math.round(entry.duration));
        } else if (entry.initiatorType === 'script') {
          trackPerformance('script_load_time', Math.round(entry.duration));
        } else if (entry.initiatorType === 'link') {
          trackPerformance('css_load_time', Math.round(entry.duration));
        }
      });
    });

    try {
      resourceObserver.observe({ entryTypes: ['resource'] });
      this.observers.set('resource', resourceObserver);
    } catch (e) {
      console.warn('Resource timing observer not supported');
    }
  }

  private observeUserTiming() {
    const userTimingObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        trackPerformance(entry.name, Math.round(entry.duration || entry.startTime));
      });
    });

    try {
      userTimingObserver.observe({ entryTypes: ['measure', 'mark'] });
      this.observers.set('user-timing', userTimingObserver);
    } catch (e) {
      console.warn('User timing observer not supported');
    }
  }

  // Manual performance marking
  mark(name: string) {
    if (performance.mark) {
      performance.mark(name);
    }
  }

  measure(name: string, startMark: string, endMark?: string) {
    if (performance.measure) {
      performance.measure(name, startMark, endMark);
    }
  }

  // Get current performance metrics
  getMetrics() {
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    
    return {
      // Navigation timing
      ttfb: Math.round(navigation.responseStart - navigation.fetchStart),
      domComplete: Math.round(navigation.domComplete - navigation.fetchStart),
      loadComplete: Math.round(navigation.loadEventEnd - navigation.fetchStart),
      
      // Memory (if available)
      ...(performance.memory && {
        usedJSHeapSize: Math.round(performance.memory.usedJSHeapSize / 1048576), // MB
        totalJSHeapSize: Math.round(performance.memory.totalJSHeapSize / 1048576), // MB
      }),
      
      // Connection (if available)
      ...(navigator.connection && {
        effectiveType: navigator.connection.effectiveType,
        downlink: navigator.connection.downlink,
        rtt: navigator.connection.rtt
      })
    };
  }

  disconnect() {
    this.observers.forEach(observer => observer.disconnect());
    this.observers.clear();
  }
}

// Utility functions for performance optimization
export const preloadResource = (href: string, as: 'script' | 'style' | 'image' | 'font') => {
  const link = document.createElement('link');
  link.rel = 'preload';
  link.href = href;
  link.as = as;
  if (as === 'font') {
    link.crossOrigin = 'anonymous';
  }
  document.head.appendChild(link);
};

export const prefetchResource = (href: string) => {
  const link = document.createElement('link');
  link.rel = 'prefetch';
  link.href = href;
  document.head.appendChild(link);
};

export const debounce = <T extends (...args: any[]) => void>(
  func: T, 
  wait: number, 
  immediate = false
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout | null = null;
  
  return function executedFunction(...args: Parameters<T>) {
    const later = () => {
      timeout = null;
      if (!immediate) func(...args);
    };
    
    const callNow = immediate && !timeout;
    
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    
    if (callNow) func(...args);
  };
};

export const throttle = <T extends (...args: any[]) => void>(
  func: T, 
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean;
  
  return function executedFunction(...args: Parameters<T>) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
};

// Initialize performance monitoring
export const initPerformanceMonitoring = () => {
  const monitor = PerformanceMonitor.getInstance();
  monitor.init();
  
  // Track initial page load metrics
  window.addEventListener('load', () => {
    setTimeout(() => {
      const metrics = monitor.getMetrics();
      Object.entries(metrics).forEach(([key, value]) => {
        if (typeof value === 'number') {
          trackPerformance(key, value);
        }
      });
    }, 1000);
  });
};
