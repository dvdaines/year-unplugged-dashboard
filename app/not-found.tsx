import Link from 'next/link';
import Header from './components/Header';

export default function NotFound() {
  return (
    <main className="min-h-dvh bg-cream text-ink antialiased">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <Header />

        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
          <h1 className="font-display text-6xl sm:text-7xl mb-4">404</h1>
          <p className="text-xl sm:text-2xl text-muted-ink mb-8 max-w-md">
            This page doesn't exist. It might have been unplugged.
          </p>
          
          <Link
            href="/"
            className="btn inline-flex items-center justify-center bg-panel border border-[rgba(30,27,22,0.08)] hover:bg-[rgba(237,230,218,0.8)] transition-colors shadow-sm"
          >
            Return Home
          </Link>
        </div>
      </div>
    </main>
  );
}

