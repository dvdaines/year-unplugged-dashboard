// app/components/lite-youtube.tsx
'use client';

import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

interface LiteYouTubeProps {
  id: string;
  title: string;
  subtitle?: string;
}

export default function LiteYouTube({
  id,
  title,
  subtitle = 'Video update',
}: LiteYouTubeProps) {
  return (
    <div className="space-y-3">
      {/* Title */}
      <div>
        <h3 className="font-display text-xl leading-snug">{title}</h3>
        <p className="text-sm text-muted-ink">{subtitle}</p>
      </div>

      {/* Video */}
      <div className="relative aspect-video bg-panel rounded-lg overflow-hidden border border-[rgba(30,27,22,0.08)] shadow-sm group">
        <LiteYouTubeEmbed
          id={id}
          title={title}
          poster="maxresdefault"
          params="rel=0&modestbranding=1&playsinline=1"
        />

        {/* Custom play overlay */}
        <div className="lite-play-overlay pointer-events-none absolute inset-0 flex items-center justify-center transition-opacity duration-200">
          <div className="btn btn-ghost text-sm backdrop-blur-sm">
            ▶ Play Video
          </div>
        </div>

        {/* Soft vignette */}
        <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_0_1px_rgba(0,0,0,0.03)]" />
      </div>
    </div>
  );
}
