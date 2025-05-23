
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
        gtag('config', '${trackingId}');
      `;
      document.head.appendChild(script2);

      // Track page views
      if (window.gtag) {
        window.gtag('config', trackingId, {
          page_title: document.title,
          page_location: window.location.href,
        });
      }
    }
  }, [trackingId]);

  return null;
};

// Analytics tracking functions
export const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, parameters);
  }
};

export const trackProjectView = (projectId: number, projectTitle: string) => {
  trackEvent('project_view', {
    project_id: projectId,
    project_title: projectTitle,
  });
};

export const trackContactFormSubmit = () => {
  trackEvent('contact_form_submit');
};

export const trackDownloadCV = () => {
  trackEvent('download_cv');
};
