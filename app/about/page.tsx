// app/about/page.tsx
export default function AboutPage() {
  return (
    <main className="min-h-dvh bg-cream text-ink antialiased">
      <section className="max-w-3xl mx-auto px-6 py-16">

        {/* Title */}
        <h1 className="font-display text-[32px] sm:text-[40px] tracking-[-0.01em] text-center mb-10">
          Why I&apos;m Going A Year Without Screens
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

          <p>
            I&apos;ve known nothing but a life with screens and the internet. As a kid, I played online games constantly. When I was 14, my dad
            gave me my first computer, and I became obsessed with technology and coding.
          </p>

          <p>
            When I turned 20, I moved to Silicon Valley to chase a dream. My apartment near Ocean Beach soon
            became a startup office, and it was off to the races (
            <a
              className="underline underline-offset-4 hover:opacity-80"
              href="https://www.coindesk.com/business/2021/11/17/a16z-leads-31m-funding-round-for-mems-social-media-protocol"
              target="_blank"
              rel="noopener noreferrer"
            >
              press link
            </a>
            ).
          </p>

          <p>
            I didn&apos;t stick with the startup long, but I kept working in tech, and over time, I started to feel like a frog who had been slowly boiled. My
            brain felt like it wasn&apos;t working like it should be — even though I ate well, worked out, and tried to
            optimize my sleep. My doctor also said I was doing everything right.
          </p>

          <p>But the more time I spent on devices, the worse it got.</p>

          <p>
            It got so bad, I even built a hardware device to <em>lock up</em> all my devices on a timed basis (demo below).
          </p>

          <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full shadow-xl"
              src="https://www.youtube.com/embed/Q_vfB84xvdk?vq=hd1080"
              title="Silicon Vault Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>

          <p>I once locked all my devices up for a week, and my brain felt like it
            <strong> turned back on</strong>. I slept well. I could think again.</p>

          <p>
            That proved a scary realization: maybe we&apos;ve all been boiled like frogs,
            just slowly enough to not notice. And I started to wonder...
          </p>

          <blockquote className="border-l-4 border-ink/20 pl-4 italic text-ink my-2 py-1">
            <strong>What would a year without screens do to my brain and my body?</strong>
          </blockquote>

          <br />

          <p>Finally, years later, I&apos;ve positioned myself to make it happen: one year, zero screens, hundreds of biomarkers.</p>

          <p>
            This isn&apos;t my first public N=1 experiment. I ran a six month microplastics
            reduction trial (
            <a
              className="underline underline-offset-4 hover:opacity-80"
              href="https://davidd.org/experiments/microplastics-trial-i"
              target="_blank"
              rel="noopener noreferrer"
            >
              Microplastics Trial I
            </a>
            ) and realized there is real value in public N=1 experiments after
            institutional researchers started reaching out to me. That was an epiphany.
          </p>

          <p>
            So now, I&apos;m running what might be the most comprehensive experiment yet
            on screenless living — and releasing <strong>open data</strong> (including two months of baseline + 1 month after) so real
            scientists can investigate further:{' '}
            <a
              href="https://www.whoop.com/us/en/"
              className="underline underline-offset-4 hover:opacity-80"
              target="_blank"
              rel="noopener noreferrer"
            >
              continuous sleep data
            </a>
            ,{' '}
            <a
              href="https://www.functionhealth.com/whats-included"
              className="underline underline-offset-4 hover:opacity-80"
              target="_blank"
              rel="noopener noreferrer"
            >
              100+ monthly biomarkers
            </a>
            , video updates, etc. all shared on a public dashboard.
          </p>

          <p className="text-ink font-semibold leading-snug">
            No phone.<br />
            No computer.<br />
            No TV.<br />
            No screens at all.<br />
            <br />
            For a year. <br />
          </p>

          <p className="text-ink font-semibold">
            One year, zero screens, hundreds of biomarkers. What will we discover?
          </p>

        </div>

        {/* CTA */}
        <div className="mt-12 text-center space-y-4">
          <p className="text-muted-ink text-base sm:text-lg leading-relaxed">
            Target start is Q1, 2026. If you’re a researcher in the SF Bay Area who wants to gather data (in any specialty), let&apos;s talk.
          </p>

          <a
            href="mailto:david@davidd.org?subject=Year%20Unplugged%20%E2%80%94%20Research%20Collaboration"
            className="btn btn-primary"
          >
            Research collaboration inquiries
          </a>

          <p className="mt-6 text-sm text-gray-600">Created by <a href="https://davidd.org" className="text-sm font-semibold underline underline-offset-4 hover:opacity-80 transition-opacity">David Daines</a>.</p>

        </div>

      </section>
    </main>
  );
}