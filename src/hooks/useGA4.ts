import { useState } from 'react';
import ReactGA from 'react-ga4';

const useGA4 = () => {
  const [isInitializedGA, setIsInitializedGA] = useState(false);

  // Init GA
  const initializeGA = () => {
    const { hostname } = window.location;
    if (hostname === 'localhost') return;
    const trackingId = process.env.NEXT_PUBLIC_GA_TRACKING_ID;
    if (!trackingId) return;
    ReactGA.initialize(trackingId);
    setIsInitializedGA(true);
  };

  // 페이지 view 추적
  const trackPageView = (page: string) => {
    if (!isInitializedGA || !page) return;
    ReactGA.set({ page });
    ReactGA.send('pageview');
  };

  return { initializeGA, trackPageView };
};

export default useGA4;
