// src/analytics.js

// Replace with your Measurement ID
const MEASUREMENT_ID = "G-G6KNS5BNJ6";

// Initialize Google Analytics
export const initGA = () => {
  // Load the GA script dynamically
  if (!window.dataLayer) {
    window.dataLayer = window.dataLayer || [];
    function gtag(){ window.dataLayer.push(arguments); }
    window.gtag = gtag;
    gtag("js", new Date());
    gtag("config", MEASUREMENT_ID);
    
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`;
    document.head.appendChild(script);
  }
};

// Track page views
export const trackPageView = (url) => {
  if (window.gtag) {
    window.gtag("config", MEASUREMENT_ID, {
      page_path: url,
    });
  }
};

// Track custom events
export const trackEvent = (action, params = {}) => {
  if (window.gtag) {
    window.gtag("event", action, params);
  }
};
