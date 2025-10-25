// app/page.tsx
export default function Home() {
  return (
    <main className="min-h-dvh bg-cream text-ink antialiased">
      <section className="flex min-h-dvh items-center justify-center px-6">
        <div className="w-full max-w-2xl text-center">
          {/* Logo + Wordmark */}
          <div className="flex items-center justify-center gap-3 mb-5">
            <img
              src="/yu-mark.svg"
              alt="Year Unplugged mark"
              width={36}
              height={36}
              className="inline-block align-middle select-none"
              decoding="async"
            />
            <h1
              className="font-display text-[32px] leading-tight sm:text-[40px] md:text-[44px] tracking-[-0.01em] text-ink/95 m-0"
            >
              Year Unplugged
            </h1>
          </div>

          {/* One-liner (clinical tone, open-data emphasized) */}
          <p className="text-base sm:text-lg leading-relaxed text-muted-ink">
            A prospective, year-long digital-abstinence study with dense physiologic
            and behavioral phenotyping—targeting an open-data,
            researcher-accessible dataset on the health effects of eliminating screens
            for one year.
          </p>

          {/* Simple details table (prevents awkward wrapping) */}
          <div className="mt-6 flex justify-center">
            <table className="details-table">
              <tbody>
                <tr>
                  <th scope="row">Start</th>
                  <td>Q1, 2026</td>
                </tr>
                <tr>
                  <th scope="row">Design</th>
                  <td>Single-participant, longitudinal</td>
                </tr>
                <tr>
                  <th scope="row">Measures</th>
                  <td>Monthly blood panels; continuous sleep + more TBD</td>
                </tr>
                <tr>
                  <th scope="row">Data</th>
                  <td>Open-data for qualified research</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* CTAs (no icon) */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="mailto:research@yearunplugged.com?subject=Year%20Unplugged%20—%20Research%20Collaboration"
              className="btn btn-primary"
            >
              Research collaboration inquiries
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