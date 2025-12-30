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
  INDIGO: '#6366f1',
  VIOLET: '#8b5cf6',
};

function getGemColorDot(color: string) {
  const normalizedColor = color.trim().toUpperCase();
  const hexColor = gemColorMap[normalizedColor] || '#9ca3af'; // Default gray if color not found
  
  return (
    <span
      className="inline-block w-2 h-2 rounded-full ml-2"
      style={{ backgroundColor: hexColor }}
      aria-label={`Gem color: ${color || 'none'}`}
    />
  );
}

export default function OGPage() {
  // Read and parse CSV file
  const csvPath = join(process.cwd(), 'data', 'tiktok-followers.csv');
  const csvContent = readFileSync(csvPath, 'utf-8');
  const followers = parseCSV(csvContent);

  return (
    <main className="min-h-dvh bg-cream text-ink antialiased">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <Header />

        <section className="max-w-4xl mx-auto py-16">
          <h1 className="font-display text-[32px] sm:text-[40px] tracking-[-0.01em] text-center mb-10">
            OG Followers
          </h1>

          <div className="space-y-6 mb-12">
            <div>
              <h2 className="font-display text-2xl mb-4">TikTok</h2>
              <p className="text-muted-ink text-base sm:text-lg leading-relaxed mb-4">
                This is for the first 10,000 people who followed me on TikTok. I appreciate you for helping get the message out.
              </p>
              <p className="text-muted-ink text-sm leading-relaxed mb-8">
                The colored dots are given to OGs who comment.
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
                const profileUrl = follower.profile_url || `https://www.tiktok.com/@${username}`;
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

