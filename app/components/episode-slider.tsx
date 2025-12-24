// app/components/episode-slider.tsx
'use client';

import { useState, useEffect, useMemo } from 'react';

// Placeholder episode data - replace with real data later
const episodes = [
  { id: 1, title: 'Intro: TBD', thumbnail: '/thumbnail.PNG' },
  { id: 2, title: 'Month 1: TBD', thumbnail: '/thumbnail.PNG' },
  { id: 3, title: 'Month 2: TBD', thumbnail: '/thumbnail.PNG' },
  { id: 4, title: 'Month 3: TBD', thumbnail: '/thumbnail.PNG' },
  { id: 5, title: 'Month 4: TBD', thumbnail: '/thumbnail.PNG' },
  { id: 6, title: 'Month 5: TBD', thumbnail: '/thumbnail.PNG' },
];

export default function EpisodeSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const getItemsPerView = () => {
    if (typeof window === 'undefined') return 4;
  
    // Tailwind-ish breakpoints:
    // <640: 1 (mobile)
    // 640–1023: 2 (tablet)
    // >=1024: 4 (desktop)
    if (window.innerWidth >= 1024) return 4;
    if (window.innerWidth >= 640) return 2;
    return 1;
  };
  

  const [itemsPerView, setItemsPerView] = useState(4);

  useEffect(() => {
    const updateItemsPerView = () => {
      const newItemsPerView = getItemsPerView();
      setItemsPerView(newItemsPerView);

      const newMaxIndex = Math.max(0, episodes.length - newItemsPerView);
      setCurrentIndex((prev) => Math.min(prev, newMaxIndex));
    };

    updateItemsPerView();
    window.addEventListener('resize', updateItemsPerView);
    return () => window.removeEventListener('resize', updateItemsPerView);
  }, []);

  const maxIndex = Math.max(0, episodes.length - itemsPerView);

  const goPrevious = () => setCurrentIndex((prev) => Math.max(0, prev - 1));
  const goNext = () => setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));

  const visibleEpisodes = useMemo(
    () => episodes.slice(currentIndex, currentIndex + itemsPerView),
    [currentIndex, itemsPerView]
  );

  return (
    <div className="relative">
      {/* Navigation Arrows */}
      <button
        onClick={goPrevious}
        disabled={currentIndex === 0}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-4 z-10 bg-panel border border-[rgba(30,27,22,0.08)] rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center hover:bg-[rgba(237,230,218,0.8)] transition-colors disabled:opacity-30 disabled:cursor-not-allowed shadow-sm cursor-pointer"
        aria-label="Previous episodes"
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12.5 15L7.5 10L12.5 5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <button
        onClick={goNext}
        disabled={currentIndex >= maxIndex}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-4 z-10 bg-panel border border-[rgba(30,27,22,0.08)] rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center hover:bg-[rgba(237,230,218,0.8)] transition-colors disabled:opacity-30 disabled:cursor-not-allowed shadow-sm cursor-pointer"
        aria-label="Next episodes"
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M7.5 15L12.5 10L7.5 5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {/* Single-row track (never wraps) */}
      <div className="px-10 sm:px-10">
        <div className="flex flex-nowrap gap-4 overflow-hidden">
          {visibleEpisodes.map((episode) => (
            <div
              key={episode.id}
              className="shrink-0"
              style={{ width: `calc((100% - ${(itemsPerView - 1) * 16}px) / ${itemsPerView})` }}
            >
              <div className="bg-panel border border-[rgba(30,27,22,0.08)] rounded-lg overflow-hidden hover:opacity-80 transition-opacity cursor-pointer h-full">
                <div className="aspect-video bg-[rgba(30,27,22,0.05)]">
                  <img
                    src={episode.thumbnail}
                    alt={episode.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-2">
                  <h3 className="text-sm font-semibold text-ink">{episode.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
