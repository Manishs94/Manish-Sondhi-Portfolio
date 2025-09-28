
import React, { useEffect } from 'react';

interface AnalyticsProps {
  trackingId?: string;
}

// Type declaration for gtag
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

export const Analytics: React.FC<AnalyticsProps> = ({ trackingId }) => {
  useEffect(() => {
    if (trackingId && typeof window !== 'undefined') {
      // Google Analytics 4
      const script1 = document.createElement('script');
      script1.async = true;
      script1.src = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`;
      document.head.appendChild(script1);

      const script2 = document.createElement('script');
      script2.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${trackingId}', {
          page_title: document.title,
          page_location: window.location.href,
          send_page_view: true,
          anonymize_ip: true,
          cookie_flags: 'SameSite=None;Secure'
        });
      `;
      document.head.appendChild(script2);

      // Enhanced ecommerce and user engagement tracking
      if (window.gtag) {
        window.gtag('config', trackingId, {
          page_title: document.title,
          page_location: window.location.href,
          custom_map: {
            'dimension1': 'user_type',
            'dimension2': 'page_category'
          }
        });
      }

      // Track scroll depth
      let maxScroll = 0;
      const trackScrollDepth = () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        const scrollPercent = Math.round((scrollTop + windowHeight) / documentHeight * 100);
        
        if (scrollPercent > maxScroll && scrollPercent % 25 === 0) {
          maxScroll = scrollPercent;
          trackEvent('scroll_depth', {
            scroll_depth: scrollPercent,
            page_location: window.location.pathname
          });
        }
      };

      window.addEventListener('scroll', trackScrollDepth, { passive: true });

      // Track time on page
      const startTime = Date.now();
      const trackTimeOnPage = () => {
        const timeSpent = Math.round((Date.now() - startTime) / 1000);
        if (timeSpent > 10) { // Only track if user spent more than 10 seconds
          trackEvent('time_on_page', {
            time_spent: timeSpent,
            page_location: window.location.pathname
          });
        }
      };

      window.addEventListener('beforeunload', trackTimeOnPage);

      return () => {
        window.removeEventListener('scroll', trackScrollDepth);
        window.removeEventListener('beforeunload', trackTimeOnPage);
      };
    }
  }, [trackingId]);

  return null;
};

// Enhanced analytics tracking functions
export const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, {
      event_category: 'engagement',
      event_label: window.location.pathname,
      ...parameters
    });
  }
};

export const trackProjectView = (projectId: number, projectTitle: string) => {
  trackEvent('project_view', {
    event_category: 'portfolio',
    project_id: projectId,
    project_title: projectTitle,
    value: 1
  });
};

export const trackContactFormSubmit = () => {
  trackEvent('contact_form_submit', {
    event_category: 'conversion',
    value: 10
  });
};

export const trackDownloadCV = () => {
  trackEvent('download_cv', {
    event_category: 'conversion',
    value: 5
  });
};

export const trackSearchUsage = (searchTerm: string, resultsCount: number) => {
  trackEvent('search', {
    event_category: 'search',
    search_term: searchTerm,
    results_count: resultsCount
  });
};

export const trackFilterUsage = (filterType: string, filterValue: string) => {
  trackEvent('filter_usage', {
    event_category: 'navigation',
    filter_type: filterType,
    filter_value: filterValue
  });
};

export const trackSocialShare = (platform: string, content: string) => {
  trackEvent('share', {
    event_category: 'social',
    method: platform,
    content_type: content
  });
};

export const trackPerformance = (metric: string, value: number) => {
  trackEvent('performance', {
    event_category: 'performance',
    metric_name: metric,
    metric_value: value
  });
};
