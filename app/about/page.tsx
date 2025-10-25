// app/about/page.tsx
export default function AboutPage() {
  return (
    <main className="min-h-dvh bg-cream text-ink antialiased">
      <section className="max-w-3xl mx-auto px-6 py-16">

        {/* Title */}
        <h1 className="font-display text-[32px] sm:text-[40px] tracking-[-0.01em] text-center mb-10">
          Why I&apos;m Doing This
        </h1>

        {/* Profile */}
        <div className="flex justify-center mb-10">
          <img
            src="/profile.jpg"
            alt="David"
            width={110}
            height={110}
            className="h-28 w-28 rounded-full object-cover ring-2 ring-[rgba(47,42,37,0.25)] shadow-sm"
          />
        </div>

        <div className="text-muted-ink text-base sm:text-lg leading-relaxed space-y-6">

          <p className="text-ink font-semibold">
            My name is David Daines.
          </p>

          <p>
            I&apos;ve known nothing but a life with screens and internet. As a kid, I played online games constantly. When I was 14, my dad
            gave me my first computer, and I became obsessed with technology and coding. These days, I&apos;m logging 12 hours a day.
          </p>

          <p>
            When I turned 20, I moved to Silicon Valley to chase a dream. My apartment on Ocean Beach
            became a startup office, and I designed the first product (
            <a
              className="underline"
              href="https://www.coindesk.com/business/2021/11/17/a16z-leads-31m-funding-round-for-mems-social-media-protocol"
              target="_blank"
              rel="noopener noreferrer"
            >
              press link
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
            I even built a hardware prototype to <em>lock up</em> all my devices on a timer (
            <a
              className="underline"
              href="https://m.youtube.com/watch?v=-dAzeY-s4Ic&source_ve_path=MjM4NTE&embeds_referring_euri=https%3A%2F%2Fsiliconvault.io%2F"
              target="_blank"
              rel="noopener noreferrer"
            >
              YouTube demo
            </a>
            ). I once put everything away for a week, and my brain felt like it
            <strong> turned back on</strong>. I slept well. I could think again.
          </p>

          <p>
            That proved a scary realization: maybe we&apos;ve all been boiled like frogs,
            just slowly enough to not notice. And I started to wonder...
          </p>

          <blockquote className="border-l-4 border-ink/20 pl-4 italic text-ink my-2 py-1">
            <strong>What would a year without screens do to my brain and my body?</strong>
          </blockquote>
<br />

          <p>
            This isn&apos;t my first public experiment. I ran a documented microplastics
            reduction trial (
            <a
              className="underline"
              href="https://davidd.org/experiments/microplastics-trial-i"
              target="_blank"
              rel="noopener noreferrer"
            >
              Microplastics Trial I
            </a>
            ), and realized there was value in public N=1 experiments when
            research institutions started reaching out to me. That was an epiphany.
          </p>

          <p>
            I&apos;m not an institutional scientist — though I did work as a medical researcher for an ex-Stanford physician and ran rat experiments in my parent&apos;s basement as a teen. Point being? I love this stuff, and I know where I fit in.
          </p>

          <p>
            So now, I&apos;m running what might be the most comprehensive experiment yet
            on screenless living — and releasing <strong>open data</strong> (including two months of baseline) so real
            scientists can investigate further: continuous sleep data, 100+ blood markers, etc.
          </p>

          <p className="text-ink font-semibold leading-snug">
            No phone.<br />
            No computer.<br />
            No TV.<br />
            No screens at all.<br />
            <br />
            For a year. <br />
            With public video updates.
          </p>

          <p className="text-ink font-semibold">
            I want to discover what we&apos;ve left behind.
          </p>
        </div>

        {/* CTA */}
<div className="mt-12 text-center space-y-4">
  <p className="text-muted-ink text-base sm:text-lg leading-relaxed">
    Target start is Q1, 2026. If you’re a researcher who wants to gather data, I’ll consider it.
  </p>

  <a
    href="mailto:david@davidd.org?subject=Year%20Unplugged%20%E2%80%94%20Research%20Collaboration"
    className="btn btn-primary"
  >
    Research collaboration inquiries
  </a>
</div>

      </section>
    </main>
  );
}