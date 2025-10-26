import { useEffect, useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  // Disable automatic scroll restoration
  useLayoutEffect(() => {
    window.history.scrollRestoration = "manual";
  }, []);

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0);
  }, [pathname]);

  useLayoutEffect(() => {
    // Force scroll to top immediately on mount (before render)
    const scrollToTop = () => {
      window.scrollTo(0, 0);
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    };

    scrollToTop();

    // Multiple attempts to ensure it works
    const timeout1 = setTimeout(scrollToTop, 0);
    const timeout2 = setTimeout(scrollToTop, 50);
    const timeout3 = setTimeout(scrollToTop, 100);

    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
      clearTimeout(timeout3);
    };
  }, []);

  return null;
};

export default ScrollToTop;
