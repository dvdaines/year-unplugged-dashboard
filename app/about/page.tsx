export default function AboutPage() {
  return (
    <main className="min-h-dvh bg-cream text-ink antialiased">
      <section className="max-w-3xl mx-auto px-6 py-16">

        {/* Title */}
        <h1 className="font-display text-[32px] sm:text-[40px] tracking-[-0.01em] text-center mb-10">
          Why I&apos;m Doing This
        </h1>

        {/* Profile */}
        <div className="flex justify-center mb-8">
          <img
            src="/profile.jpg"
            alt="David"
            width={110}
            height={110}
            className="h-28 w-28 rounded-full object-cover ring-2 ring-[rgba(47,42,37,0.25)] shadow-sm"
          />
        </div>

        <div className="prose prose-lg max-w-none text-muted-ink">
          <p>
            I&apos;ve known nothing but a life with the internet. When I was 14, my dad
            gave me my first computer and I became obsessed with technology and coding.
          </p>

          <p>
            When I turned 20, I moved to Silicon Valley to chase a dream. My apartment
            became a startup office (
            <a className="underline" href="https://www.coindesk.com/business/2021/11/17/a16z-leads-31m-funding-round-for-mems-social-media-protocol" target="_blank" rel="noopener noreferrer">
              my first product launch
            </a>
            ).
          </p>

          <p>
            But over time, I started to feel like a frog who had been slowly boiled. My
            cognition wasn&apos;t right — even though I ate well, worked out, and tried to
            optimize my sleep. It felt like the more time I spent on devices, the worse
            it got.
          </p>

          <p>
            I even built a hardware prototype to <em>lock up</em> all my devices (
            <a className="underline" href="https://m.youtube.com/watch?v=-dAzeY-s4Ic&source_ve_path=MjM4NTE&embeds_referring_euri=https%3A%2F%2Fsiliconvault.io%2F" target="_blank" rel="noopener noreferrer">
              YouTube demo
            </a>
            ). I once put everything away for a week — and my brain felt like it
            <strong> turned back on</strong>.
          </p>

          <p>
            That proved a scary realization: maybe we&apos;ve all been boiled like frogs,
            just slowly enough to not notice.
          </p>

          <p>
            I became obsessed with one question:
          </p>

          <blockquote>
            <strong>What would a year without screens do to my brain and my body?</strong>
          </blockquote>

          <p>
            This isn&apos;t my first public experiment. I ran a documented microplastics
            reduction trial (
            <a className="underline" href="https://davidd.org/experiments/microplastics-trial-i" target="_blank" rel="noopener noreferrer">
              Microplastics Trial I
            </a>
            ), which helped scientists identify new questions to pursue.
          </p>

          <p>
            I&apos;m not an institutional scientist — but I do have some background:
            running rat experiments in my parents&apos; basement in high school and
            working as a medical researcher for an ex-Stanford professor.
          </p>

          <p>
            So now, I&apos;m running what might be the most comprehensive experiment yet
            on screenless living — and releasing <strong>open data</strong> so real
            scientists can make sense of it.
          </p>

          <p>
            No phone. No computer. No TV. No screens at all.
            <br />For a year.
          </p>

          <p className="text-ink font-semibold">
            I want to discover what we&apos;ve left behind.
          </p>

          {/* CTA */}
          <div className="mt-8 text-center">
            <a
              href="mailto:david@davidd.org?subject=Year%20Unplugged%20%E2%80%94%20Research%20Collaboration"
              className="btn btn-primary"
            >
              Research collaboration inquiries
            </a>
          </div>
        </div>

      </section>
    </main>
  );
}
