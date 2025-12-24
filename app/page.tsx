// app/page.tsx
'use client';

import { useState, useRef, useEffect } from 'react';
import Script from 'next/script';
import EpisodeSlider from './components/episode-slider';
import ProgressBar from './components/progress-bar';
import HealthMetric from './components/health-metric';
import Header from './components/Header';
import Footer from './components/Footer';
import Link from 'next/link';

export default function Home() {
  // Start date: Dec 23, 2025
  const startDate = new Date('2025-12-23');
  const totalDays = 365;

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showReadMore, setShowReadMore] = useState(false);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const checkScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = container;
      const isAtBottom = scrollTop + clientHeight >= scrollHeight - 5;
      if (isAtBottom && !showReadMore) setShowReadMore(true);
    };

    checkScroll();
    container.addEventListener('scroll', checkScroll);

    const observer = new MutationObserver(checkScroll);
    observer.observe(container, { childList: true, subtree: true });

    return () => {
      container.removeEventListener('scroll', checkScroll);
      observer.disconnect();
    };
  }, [showReadMore]);

  return (
    <main className="min-h-dvh bg-cream text-ink antialiased">
      {/* Elfsight Twitter Feed | Untitled Twitter Feed */}
      <Script src="https://elfsightcdn.com/platform.js" strategy="afterInteractive" />

      <div className="max-w-7xl mx-auto px-6 py-8">
        <Header />

        <div className="mb-8">
          <ProgressBar startDate={startDate} totalDays={totalDays} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <h2 className="font-display text-2xl mb-4">Latest Video</h2>
            <div className="aspect-video bg-panel rounded-[var(--r-xl)] overflow-hidden border border-[rgba(30,27,22,0.08)]">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/Wl_LIUhei5E"
                title="Latest Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <h3 className="font-display text-xl">Send mail</h3>
                <p className="text-base text-sm text-ink">May be read on video</p>
              </div>
              <div className="bg-panel border border-[rgba(30,27,22,0.08)] rounded-[var(--r-xl)] p-4">
                <p className="text-base sm:text-md text-ink">
                  P.O. Box 12345, San Francisco, CA 94122
                </p>
              </div>
            </div>

            <div>
              {/* Change 1: "Posted by screenless phone" inline next to Live Updates */}
              <div className="flex items-center gap-3 mb-3">
                <h3 className="font-display text-xl">Live Updates</h3>
                <p className="text-base text-sm text-ink">
                  Posted by{' '}
                  <a
                    className="italic underline"
                    href="https://x.com/daviddorg/status/2003251001411948770"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    screenless phone
                  </a>
                </p>
              </div>

              <div className="bg-panel border border-[rgba(30,27,22,0.08)] rounded-[var(--r-lg)] p-2 pt-0 min-h-[290px] lg:max-h-[290px] flex flex-col overflow-hidden relative">
                <div
                  ref={scrollContainerRef}
                  className="flex-1 overflow-y-auto curator-scrollable p-2 overscroll-contain"
                >
                  <div
                    className="elfsight-app-cda03ab5-0760-46d9-93db-f31549ed0875"
                    data-elfsight-app-lazy
                  />
                </div>

                <div className="hidden lg:block absolute bottom-0 left-0 right-0 h-20 pointer-events-none bg-gradient-to-t from-panel via-panel/80 to-transparent z-10 rounded-b-[var(--r-lg)]" />
              </div>
            </div>
          </div>
        </div>

        {/* Health Metrics */}
        <div className="mb-12">
          <h2 className="font-display text-2xl mb-2">Featured Biomarkers</h2>

          {/* Change 2: note below heading */}
          <p className="text-base text-sm text-ink mb-6">No data yet, for illustrative purposes</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <HealthMetric
              title="Testosterone Level"
              value={685}
              unit="ng/dL"
              change={+12.3}
              baseline="610 ng/dL"
            />
            <HealthMetric
              title="Working Memory"
              value={97}
              unit="Percentile"
              change={94}
              baseline="50%"
            />
            <HealthMetric
              title="Sleep Quality"
              value={87}
              unit="Score (30 Day Avg)"
              change={+15.2}
              baseline="75.5"
            />
            <HealthMetric
              title="Melatonin (Overnight)"
              value={62}
              unit="pg/mL"
              change={+18.1}
              baseline="52.5 pg/mL"
            />
          </div>

          <div className="flex justify-center">
            <Link
              href="#"
              className="btn inline-flex items-center justify-center bg-panel border border-[rgba(30,27,22,0.08)] flex items-center justify-center hover:bg-[rgba(237,230,218,0.8)] transition-colors shadow-sm cursor-pointer"
            >
              See All 100+ Biomarkers
            </Link>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="font-display text-2xl mb-2">Past Videos</h2>

          {/* Change 3: note below Past Videos */}
          <p className="text-base text-sm text-ink mb-6">Video updates will be released regularly</p>

          <EpisodeSlider />
        </div>

        <Footer />
      </div>
    </main>
  );
}
