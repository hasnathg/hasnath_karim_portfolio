import React, { useEffect } from 'react';
import { useLocation } from 'react-router';

const ScrollToHash = () => {
   const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) return;
    const id = hash.slice(1);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [pathname, hash]);
  return null;
}

export default ScrollToHash;