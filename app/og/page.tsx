// app/og/page.tsx
import { readFileSync } from 'fs';
import { join } from 'path';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { parseCSV } from '../utils/csv-parser';
import TikTokFollowersList from '../components/tiktok-followers-list';

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

          {/* Urgent Note */}
          <div className="bg-panel border border-[rgba(30,27,22,0.08)] rounded-lg p-5 mb-8">
            <p className="text-base text-ink leading-relaxed">
              <strong>URGENT:</strong> Due to an increase of 9,000+ followers overnight, I am updating this as fast as I can. I'm doing my best to get through the thousands of comments. The OG list was also increased to the first 11k (FINAL). Thanks for following!
            </p>
          </div>

          <div className="space-y-6 mb-12">
            <TikTokFollowersList followers={followers} />
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}

