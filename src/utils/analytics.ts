// Simple analytics utility for tracking user interactions
declare global {
  interface Window {
    gtag?: (command: 'event', eventName: string, params?: Record<string, unknown>) => void;
  }
}
export const trackEvent = (eventName: string, properties?: Record<string, unknown>) => {
  // In a real app, you'd send this to your analytics service
  console.log('Analytics Event:', eventName, properties);
  
  // Example: Google Analytics 4
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, properties);
  }
};

export const trackPageView = (pageName: string) => {
  trackEvent('page_view', { page_name: pageName });
};

export const trackProjectView = (projectName: string) => {
  trackEvent('project_view', { project_name: projectName });
};

export const trackContactClick = (method: string) => {
  trackEvent('contact_click', { contact_method: method });
};

export const trackResumeDownload = () => {
  trackEvent('resume_download');
};

// Performance monitoring
export const measurePerformance = (name: string, fn: () => void) => {
  const start = performance.now();
  fn();
  const end = performance.now();
  
  console.log(`Performance [${name}]: ${(end - start).toFixed(2)}ms`);
  trackEvent('performance_measure', { 
    name, 
    duration: end - start 
  });
}; 