// app/page.tsx
'use client';

import EpisodeSlider from './components/episode-slider';
import ProgressBar from './components/progress-bar';
import HealthMetric from './components/health-metric';
import Script from 'next/script';

export default function Home() {
  // Start date: July 26, 2025
  const startDate = new Date('2025-07-26');
  const totalDays = 365;

  return (
    <main className="min-h-dvh bg-cream text-ink antialiased">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Header */}
        <header className="flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-3">
            <img
              src="/yu-mark.svg"
              width={40}
              height={40}
              alt="Year Unplugged logo"
              className="inline-block select-none"
              decoding="async"
            />
            <h1 className="font-display text-[34px] leading-tight sm:text-[42px] tracking-[-0.01em] whitespace-nowrap">
              Year Unplugged
            </h1>
          </div>
          <p className="text-base sm:text-lg text-muted-ink font-medium text-right sm:text-left whitespace-nowrap">
            <i>One year, zero screens, hundreds of biomarkers</i>
          </p>
        </header>

        {/* Send a letter box */}
        <div className="bg-panel border border-[rgba(30,27,22,0.08)] rounded-[var(--r-xl)] p-4 mb-8">
          <p className="text-base sm:text-md text-ink">
            <strong>Send a letter:</strong> PO Box 12345, Salt Lake City, UT 84101
          </p>
        </div>

        {/* Main content: Latest episode + Progress/Feed */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Latest Episode - YouTube Video */}
          <div className="lg:col-span-2">
            <h2 className="font-display text-2xl mb-4">Latest Episode</h2>
            <div className="aspect-video bg-panel rounded-[var(--r-xl)] overflow-hidden border border-[rgba(30,27,22,0.08)]">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/Wl_LIUhei5E"
                title="Latest Episode"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>

          {/* Progress Bar + Live Feed */}
          <div className="space-y-6">
            {/* Progress Bar */}
            <div>
              <h3 className="font-display text-xl mb-5">Progress</h3>
              <ProgressBar startDate={startDate} totalDays={totalDays} />
            </div>

            {/* Curator.io Feed */}
            <div>
              <h3 className="font-display text-xl mb-3">Posts From My Fax Machine</h3>
              <div className="bg-panel border border-[rgba(30,27,22,0.08)] rounded-[var(--r-lg)] p-6 min-h-[300px] flex flex-col overflow-hidden lg:max-h-[300px] lg:overflow-y-auto">
                {/* Curator Widget */}
                <div id="curator-feed-default-feed-layout">
                  <a
                    href="https://curator.io"
                    target="_blank"
                    className="crt-logo crt-tag"
                  >
                    Powered by Curator.io
                  </a>
                </div>

                <Script id="curator-script" strategy="afterInteractive">
                  {`
                    (function(){
                      var i,e,d=document,s="script";
                      i=d.createElement("script");
                      i.async=1;
                      i.charset="UTF-8";
                      i.src="https://cdn.curator.io/published/47c9d202-b03a-4886-838f-2a6129e33b43.js";
                      e=d.getElementsByTagName(s)[0];
                      e.parentNode.insertBefore(i, e);
                    })();
                  `}
                </Script>
              </div>
            </div>
          </div>
        </div>

        {/* Health Metrics Section */}
        <div className="mb-12">
          <h2 className="font-display text-2xl mb-6">Biomarkers</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <HealthMetric
              title="Testosterone Level"
              value={685}
              unit="ng/dL"
              change={+12.3}
              baseline="610 ng/dL"
            />
            <HealthMetric
              title="IQ Score"
              value={118}
              unit="Standard score"
              change={+5.4}
              baseline="112"
            />
            <HealthMetric
              title="Sleep Quality"
              value={87}
              unit="Score (30 Day Avg)"
              change={+15.2}
              baseline="75.5"
            />
            <HealthMetric
              title="Pace of Aging"
              value={0.92}
              unit="DunedinPACE"
              change={-8.7}
              baseline="1.01"
              lowerIsBetter={true}
            />
          </div>
          <div className="flex justify-center">
            <button className="btn btn-ghost">
              See All Biomarkers
            </button>
          </div>
        </div>

        {/* Past Episodes Slider */}
        <div className="mb-12">
          <h2 className="font-display text-2xl mb-6">Past Episodes</h2>
          <EpisodeSlider />
        </div>
      </div>
    </main>
  );
}
