export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || '';

// Analytics runs only on live deployed environments in the browser
export const isLiveEnvironment =
  process.env.NODE_ENV === 'production' &&
  typeof window !== 'undefined' &&
  !window.location.hostname.includes('localhost') &&
  !window.location.hostname.includes('127.0.0.1');

/**
 * Tracks a page view across client-side route changes in Next.js
 */
export const pageview = (url: string) => {
  if (isLiveEnvironment && GA_TRACKING_ID && typeof window.gtag === 'function') {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
    });
  }
};

export interface GTagEvent {
  action: string;
  category: string;
  label?: string;
  value?: number;
}

/**
 * Dispatches custom conversion and interaction events to GA4
 */
export const trackEvent = ({ action, category, label, value }: GTagEvent) => {
  if (isLiveEnvironment && GA_TRACKING_ID && typeof window.gtag === 'function') {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};
