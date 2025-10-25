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
              width={40}
              height={40}
              alt="Year Unplugged logo"
              className="inline-block select-none"
              decoding="async"
            />
            <h1 className="font-display text-[34px] leading-tight sm:text-[42px] md:text-[46px] tracking-[-0.01em]">
              Year Unplugged
            </h1>
          </div>

          {/* Profile */}
          <div className="flex justify-center mb-6">
            <img
              src="/profile.jpg"
              alt="David"
              width={96}
              height={96}
              className="h-24 w-24 rounded-full object-cover ring-2 ring-[rgba(47,42,37,0.25)] shadow-sm"
              decoding="async"
            />
          </div>

          {/* Intro */}
          <div className="text-muted-ink text-base sm:text-lg leading-relaxed mb-6">
            <strong className="text-ink">Hey, I’m David.</strong>
          </div>

          {/* One-liner (slightly rephrased to follow intro) */}
          <p className="text-base sm:text-lg leading-relaxed text-muted-ink">
            This is a prospective, year-long digital-abstinence study with dense physiologic
            and behavioral phenotyping—targeting an <strong>open-data</strong>,
            researcher-accessible dataset on the health effects of eliminating screens
            for one year.
          </p>

          {/* Simple details table */}
          <div className="mt-6 flex justify-center">
            <table className="details-table">
              <tbody>
                <tr>
                  <th scope="row">Start</th>
                  <td>Q1 2026</td>
                </tr>
                <tr>
                  <th scope="row">Design</th>
                  <td>Single-participant, longitudinal</td>
                </tr>
                <tr>
                  <th scope="row">Measures</th>
                  <td>Monthly blood panels; continuous sleep &amp; activity</td>
                </tr>
                <tr>
                  <th scope="row">Data</th>
                  <td>De-identified release; open-data for qualified research</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="mailto:david@davidd.org?subject=Year%20Unplugged%20—%20Research%20Collaboration"
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