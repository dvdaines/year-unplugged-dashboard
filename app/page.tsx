// app/page.tsx
export default function Home() {
  return (
    <main className="min-h-dvh bg-white text-neutral-900 antialiased">
      <section className="flex min-h-dvh items-center justify-center px-6">
        <div className="w-full max-w-2xl text-center">
          {/* Logo */}
          <img
            src="/logo.svg"
            alt="Year Unplugged"
            className="mx-auto h-12 sm:h-16 mb-6"
          />

          {/* Visually hidden H1 for accessibility/SEO */}
          <h1 className="sr-only">Year Unplugged</h1>

          {/* Clinical one-liner */}
          <p className="text-base sm:text-lg leading-relaxed text-neutral-700">
            A prospective, year-long digital-abstinence study with dense physiologic
            and behavioral phenotyping—aiming to create the most comprehensive dataset
            to date on the health effects of eliminating screens for one year.
          </p>

          {/* Tiny meta row */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm text-neutral-500">
            <span>Target start: Jan 1, 2026</span>
            <span>•</span>
            <span>Design: single-participant, longitudinal</span>
            <span>•</span>
            <span>Measures: monthly blood panels; continuous sleep & activity</span>
          </div>

          {/* CTA row (optional now; safe, non-salesy) */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="mailto:research@yearunplugged.com?subject=Year%20Unplugged%20—%20Research%20Collaboration"
              className="inline-flex rounded-lg border border-neutral-300 px-4 py-2 text-sm font-medium hover:bg-neutral-50"
            >
              Research collaboration inquiries
            </a>
            <a
              href="/YearUnplugged_1pager.pdf"
              className="inline-flex rounded-lg border border-neutral-300 px-4 py-2 text-sm font-medium hover:bg-neutral-50"
            >
              1-page overview (PDF)
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}