import { useEffect, useRef, useState } from 'react';
import { mountSite } from './app.js';

export default function App() {
  const siteRoot = useRef(null);
  const [showSplash, setShowSplash] = useState(true);
  const [splashExiting, setSplashExiting] = useState(false);

  useEffect(() => mountSite(siteRoot.current), []);

  useEffect(() => {
    const exitTimer = window.setTimeout(() => setSplashExiting(true), 600);
    const removeTimer = window.setTimeout(() => setShowSplash(false), 900);

    return () => {
      window.clearTimeout(exitTimer);
      window.clearTimeout(removeTimer);
    };
  }, []);

  return (
    <>
      {showSplash && (
        <div className={`siet-logo-splash${splashExiting ? ' is-exiting' : ''}`} role="status" aria-label="Loading Sri Shakthi website">
          <div className="siet-logo-preloader">
            <img src="/brand/siet-logo.png" alt="Sri Shakthi college emblem" />
          </div>
        </div>
      )}
      <div ref={siteRoot} className={`site-application${showSplash ? ' is-splash-loading' : ' is-splash-ready'}${splashExiting ? ' is-splash-exiting' : ''}`} />
    </>
  );
}
