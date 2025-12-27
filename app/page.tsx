'use client';

import { useState, useRef, useEffect } from 'react';
import Script from 'next/script';
import EpisodeSlider from './components/episode-slider';
import ProgressBar from './components/progress-bar';
import HealthMetric from './components/health-metric';
import Header from './components/Header';
import Footer from './components/Footer';
import Link from 'next/link';
import { Copy, Check } from 'lucide-react';
import LiteYouTube from './components/lite-youtube';

export default function Home() {
  // Start date: Dec 23, 2025
  const startDate = new Date('2025-12-23');
  const totalDays = 365;

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showReadMore, setShowReadMore] = useState(false);

  // PO Box copy state
  const PO_BOX_ADDRESS = 'P.O. Box 12345, San Francisco, CA 94122';
  const [copied, setCopied] = useState(false);

  const copyAddress = async () => {
    const text = PO_BOX_ADDRESS;
  
    // 1) Modern clipboard API (works in secure contexts + allowed permissions)
    try {
      if (typeof navigator !== 'undefined' && navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
        return;
      }
    } catch (err) {
      // fall through to legacy method
      console.warn('navigator.clipboard failed, falling back', err);
    }
  
    // 2) Legacy fallback (works basically everywhere)
    try {
      const ta = document.createElement('textarea');
      ta.value = text;
      ta.setAttribute('readonly', '');
      ta.style.position = 'fixed';
      ta.style.top = '0';
      ta.style.left = '0';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
  
      ta.focus();
      ta.select();
  
      const ok = document.execCommand('copy');
      document.body.removeChild(ta);
  
      if (!ok) throw new Error('execCommand returned false');
  
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      console.error('Copy failed (all methods)', err);
    }
  };
  

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
      {/* Elfsight Twitter Feed */}
      <Script src="https://elfsightcdn.com/platform.js" strategy="afterInteractive" />

      <div className="max-w-7xl mx-auto px-6 py-8">
        <Header />

        <div className="mb-8">
          <ProgressBar startDate={startDate} totalDays={totalDays} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Latest Video */}
          <div className="lg:col-span-2">
            <LiteYouTube
              id="lA2gLhRkO-0"
              title="Coming Soon"
              subtitle="All in good time"
            />

          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Send Mail */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <h2 className="font-display text-xl">Send Mail</h2>
                <p className="text-sm text-ink">May be read on video</p>
              </div>

              <div
                onClick={copyAddress}
                role="button"
                aria-label="Copy mailing address"
                className="bg-panel border border-[rgba(30,27,22,0.08)] rounded-lg p-4 cursor-pointer hover:bg-[rgba(237,230,218,0.8)] transition-colors select-none flex items-start justify-between gap-3"
              >
                <div>
                  <p className="text-base sm:text-md text-ink">
                    {PO_BOX_ADDRESS}
                  </p>
                  <p className="text-xs text-muted-ink mt-1">
                    {copied ? 'Copied to clipboard' : 'Click to copy'}
                  </p>
                </div>

                <div className="mt-1 text-muted-ink">
                  {copied ? (
                    <Check size={18} className="text-ink" />
                  ) : (
                    <Copy size={18} />
                  )}
                </div>
              </div>
            </div>

            {/* Live Updates */}
            <div>
              <div className="flex items-center gap-3 mb-3">
                <h3 className="font-display text-xl">Live Updates</h3>
                <p className="text-sm text-ink">
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

              <div className="bg-panel border border-[rgba(30,27,22,0.08)] rounded-lg p-2 pt-0 min-h-[265px] lg:max-h-[265px] flex flex-col overflow-hidden relative">
                <div
                  ref={scrollContainerRef}
                  className="flex-1 overflow-y-auto curator-scrollable p-2 overscroll-contain"
                >
                  <div
                    className="elfsight-app-cda03ab5-0760-46d9-93db-f31549ed0875"
                    data-elfsight-app-lazy
                  />
                </div>

                <div className="hidden lg:block absolute bottom-0 left-0 right-0 h-20 pointer-events-none bg-gradient-to-t from-panel via-panel/80 to-transparent z-10 rounded-b-lg" />
              </div>
            </div>
          </div>
        </div>

        {/* Health Metrics */}
        <div className="mb-12">
          <h2 className="font-display text-2xl mb-2">Featured Biomarkers</h2>
          <p className="text-sm text-ink mb-6">No data yet, for illustrative purposes</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <HealthMetric title="Testosterone Level" value={685} unit="ng/dL" change={+12.3} baseline="610 ng/dL" />
            <HealthMetric title="Working Memory" value={77} unit="Percentile" change={+54} baseline="50" />
            <HealthMetric title="Sleep Quality" value={87} unit="Score (30 Day Avg)" change={+15.2} baseline="75.5" />
            <HealthMetric title="Melatonin (Overnight)" value={62} unit="pg/mL" change={+18.1} baseline="52.5 pg/mL" />
          </div>

          <div className="flex justify-center">
            <Link
              href="#"
              className="btn inline-flex items-center justify-center bg-panel border border-[rgba(30,27,22,0.08)] hover:bg-[rgba(237,230,218,0.8)] transition-colors shadow-sm"
            >
              See All 100+ Biomarkers
            </Link>
          </div>
        </div>

        {/* Past Videos */}
        <div className="mb-12">
          <h2 className="font-display text-2xl mb-2">All Videos</h2>
          <EpisodeSlider />
        </div>

        {/* <Footer /> */}
      </div>
    </main>
  );
}
