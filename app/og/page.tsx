// app/og/page.tsx
import { readFileSync } from 'fs';
import { join } from 'path';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { parseCSV } from '../utils/csv-parser';

const gemColorMap: Record<string, string> = {
  RED: '#ef4444',
  ORANGE: '#f97316',
  YELLOW: '#eab308',
  GREEN: '#22c55e',
  BLUE: '#3b82f6',
  PURPLE: '#a855f7',
  PINK: '#ec4899',
};

function getGemColorDot(color: string) {
  const normalizedColor = color.trim().toUpperCase();
  const hexColor = gemColorMap[normalizedColor] || '#9ca3af'; // Default gray if color not found
  
  return (
    <span
      className="inline-block ml-2 relative"
      style={{ 
        width: '8px',
        height: '8px',
      }}
      aria-label={`Gem color: ${color || 'none'}`}
    >
      {/* Diamond gem shape */}
      <span
        className="absolute inset-0"
        style={{
          width: '8px',
          height: '8px',
          backgroundColor: hexColor,
          transform: 'rotate(45deg)',
          borderRadius: '1px',
          boxShadow: '0 0 2px rgba(0,0,0,0.3), inset 0 0 2px rgba(255,255,255,0.3)',
        }}
      />
      {/* Highlight shine */}
      <span
        className="absolute"
        style={{
          top: '2px',
          left: '2px',
          width: '3px',
          height: '3px',
          backgroundColor: 'rgba(255, 255, 255, 0.5)',
          borderRadius: '50%',
          transform: 'rotate(-45deg)',
        }}
      />
    </span>
  );
}

export default function OGPage() {
  // Read and parse CSV file
  const csvPath = join(process.cwd(), 'data', 'tiktok-followers.csv');
  const csvContent = readFileSync(csvPath, 'utf-8');
  const followers = parseCSV(csvContent);

  return (
    <main className="min-h-dvh bg-cream text-ink antialiased">
      <div className="max-w-7xl mx-auto px-6 py-6">
        <Header />

        <section className="max-w-4xl mx-auto py-16">
          <h1 className="font-display text-[32px] sm:text-[40px] tracking-[-0.01em] text-center mb-10">
            OG Followers
          </h1>

          <div className="space-y-6 mb-12">
            <div>
              <h2 className="font-display text-2xl mb-4">TikTok</h2>
              <p className="text-muted-ink text-base sm:text-lg leading-relaxed mb-4">
                This is for the first 10,000 people who followed me on TikTok. Thank you for helping me get this started.
              </p>
              <p className="text-muted-ink text-sm leading-relaxed mb-8">
                Updated daily. The gems are given to OGs who commented.
              </p>
            </div>
          </div>

          {/* Followers List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {followers
              .filter(follower => follower.username) // Filter out invalid rows
              .sort((a, b) => {
                const orderA = parseInt(a.order || '0', 10);
                const orderB = parseInt(b.order || '0', 10);
                return orderA - orderB;
              })
              .map((follower, index) => {
                const username = follower.username;
                const userId = follower.user_id || '';
                const profileUrl = `https://www.tiktok.com/share/user/${userId}`;
                const gemColor = follower['Gem Color'] || '';
                const order = follower.order || '';

                return (
                  <div key={follower.user_id || index} className="flex items-center">
                    <a
                      href={profileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-ink transition-colors text-base text-muted-ink hover:underline flex items-center group"
                    >
                      <span className="text-ink/60 mr-2">{order}.</span>
                      <span>@{username}</span>
                      {gemColor && getGemColorDot(gemColor)}
                    </a>
                  </div>
                );
              })}
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}

