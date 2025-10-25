// app/page.tsx
export default function Home() {
  return (
    <main className="min-h-dvh bg-cream text-ink antialiased">
      <section className="flex min-h-dvh items-center justify-center px-6 py-16">
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
            <strong className="text-ink">Hey, I&apos;m David.</strong>
          </div>

          {/* Conversational one-liner */}
          <p className="text-base sm:text-lg leading-relaxed text-muted-ink">
            I spend 12 hours per day on a screen. And soon, I&apos;m going to spend one year with no screens, sharing sleep data and 100+ monthly blood markers + video
updates. This project will generate the richest open dataset documenting the health effects of eliminating screens for one year.
          </p>

          {/* About Me link */}
          <div className="mt-5">
            <a
              href="/about"
              className="text-sm font-semibold text-ink underline underline-offset-4 hover:opacity-80 transition-opacity"
            >
              About Me / Why I&apos;m Doing This
            </a>
          </div>

          {/* Simple details table */}
          <div className="mt-6 flex justify-center">
            <table className="details-table">
              <tbody>
                <tr><th scope="row">Start</th><td>Q1 2026</td></tr>
                <tr><th scope="row">Design</th><td>Single-participant, longitudinal</td></tr>
                <tr><th scope="row">Measures</th><td>Monthly blood panels; continuous sleep; more, TBD</td></tr>
                <tr><th scope="row">Data</th><td>Open Data</td></tr>
              </tbody>
            </table>
          </div>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="mailto:david@davidd.org?subject=Year%20Unplugged%20%E2%80%94%20Research%20Collaboration"
              className="btn btn-primary"
            >
              Research collaboration inquiries
            </a>
            <a href="/YearUnplugged_1pager.pdf" className="btn btn-ghost">
              1-page overview (PDF)
            </a>
          </div>

          <div className="h-6" />

        </div>
      </section>
    </main>
  );
}