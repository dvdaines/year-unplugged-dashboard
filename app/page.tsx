// app/page.tsx
export default function Home() {
  return (
    <main className="min-h-dvh bg-cream text-ink antialiased">
      <section className="flex min-h-dvh items-center justify-center px-6">
        <div className="w-full max-w-2xl text-center">
          {/* Wordmark + Logo */}
          <img
  src="/yu-mark.svg"
  alt=""
  aria-hidden="true"
  className="mr-3 h-7 w-7 sm:h-9 sm:w-9"
/>
<h1 className="font-display text-[32px] sm:text-[40px] tracking-[-0.01em]">
  Year Unplugged
</h1>
          {/* One-liner (clinical tone) */}
          <p className="text-base sm:text-lg leading-relaxed text-muted-ink">
            A prospective, year-long digital-abstinence study with dense physiologic
            and behavioral phenotyping—aiming to create the most comprehensive dataset
            to date on the health effects of eliminating screens for one year.
          </p>

          {/* Meta row */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm text-muted-ink">
            <span>Target start: Jan 1, 2026</span>
            <span>•</span>
            <span>Design: single-participant, longitudinal</span>
            <span>•</span>
            <span>Measures: monthly blood panels; continuous sleep & activity</span>
          </div>

          {/* CTAs (kept minimal; pill buttons, subtle) */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="mailto:research@yearunplugged.com?subject=Year%20Unplugged%20—%20Research%20Collaboration"
              className="btn btn-primary"
            >
              Book a research call
              <svg
                className="ml-2 h-4 w-4 opacity-90"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12.293 2.293a1 1 0 011.414 0l4 4a.997.997 0 01.293.704V7a1 1 0 01-1 1h-.586a1 1 0 01-.707-.293L13 4.414V13a1 1 0 11-2 0V3a1 1 0 011-1h.293z" />
                <path d="M4 5a1 1 0 00-1 1v9a2 2 0 002 2h9a1 1 0 100-2H6a1 1 0 01-1-1V6a1 1 0 00-1-1z" />
              </svg>
            </a>

            <a href="/YearUnplugged_1pager.pdf" className="btn btn-ghost">
              1-page overview (PDF)
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}