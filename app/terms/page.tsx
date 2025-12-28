import Header from '../components/Header';
import Footer from '../components/Footer';
import EmailProtection from '../components/email-protection';

export default function TermsPage() {
  return (
    <main className="min-h-dvh bg-cream text-ink antialiased">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <Header />

        <section className="max-w-3xl mx-auto py-16">
          <h1 className="font-display text-[32px] sm:text-[40px] tracking-[-0.01em] text-center mb-10">
            Terms of Use
          </h1>

          <div className="text-muted-ink text-base sm:text-lg leading-relaxed space-y-6">
            <p className="text-sm text-muted-ink mb-6">
              Effective date: December 27, 2025
            </p>

            <p>
              These Terms of Use (&quot;Terms&quot;) govern your access to and use of yearunplugged.com (the &quot;Site&quot;). The Site and the &quot;Year Unplugged: 1 year, 0 screens, 100s of biomarkers&quot; project (the &quot;Project&quot;) are operated by David Daines (&quot;I,&quot; &quot;me,&quot; &quot;my&quot;).
            </p>

            <p>
              By using the Site, you agree to these Terms. If you do not agree, do not use the Site.
            </p>

            <h2 className="font-display text-xl text-ink mt-8 mb-4">1) What this site is (and isn&apos;t)</h2>
            <p>
              The Site documents a personal self-experiment. It is provided for informational purposes only and does not provide medical advice. Please read the <a href="/disclaimer" className="underline underline-offset-4 hover:opacity-80">Disclaimer</a> (incorporated into these Terms by reference).
            </p>

            <h2 className="font-display text-xl text-ink mt-8 mb-4">2) Acceptable use</h2>
            <p>You agree not to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>use the Site for unlawful purposes</li>
              <li>attempt to disrupt or compromise the Site (e.g., hacking, scraping in a way that degrades performance, probing, or bypassing access controls)</li>
              <li>misrepresent the Project, the data, or my identity</li>
              <li>use the Site to transmit malware, spam, or abusive content</li>
            </ul>
            <p className="mt-4">
              I may restrict or block access if I believe you are abusing the Site.
            </p>

            <h2 className="font-display text-xl text-ink mt-8 mb-4">3) Intellectual property</h2>
            <p>
              Unless otherwise stated, I own the Site content, including text, graphics, videos, and the Project&apos;s compilation/presentation of data (&quot;Content&quot;). You may view and share links to the Site for personal, non-commercial purposes.
            </p>
            <p className="mt-4">You may not:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>copy, reproduce, redistribute, or commercially exploit Content without permission</li>
              <li>represent the Content as your own</li>
              <li>use the Content in a misleading way (including altering context in a way that implies medical endorsement)</li>
            </ul>
            <p className="mt-4">
              If you want to reuse Content (media clips, charts, datasets, etc.), contact: <EmailProtection />.
            </p>

            <h2 className="font-display text-xl text-ink mt-8 mb-4">4) No affiliation</h2>
            <p>
              The Project is independent and is not affiliated with, endorsed by, sponsored by, or connected to any similarly titled books, programs, media, or other works.
            </p>

            <h2 className="font-display text-xl text-ink mt-8 mb-4">5) Third-party links and embeds</h2>
            <p>
              The Site may link to or embed third-party services (e.g., video or social platforms). I&apos;m not responsible for third-party sites, content, availability, or policies. Your use of third-party services is subject to their terms.
            </p>

            <h2 className="font-display text-xl text-ink mt-8 mb-4">6) Affiliate relationships and disclosures</h2>
            <p>
              In the future, the Site may include affiliate links or relationships. That means I may earn a commission if you click a link and make a purchase—at no additional cost to you. I will try to disclose affiliate links in context where they appear, but you should assume any outbound product or service link may be affiliate unless stated otherwise.
            </p>

            <h2 className="font-display text-xl text-ink mt-8 mb-4">7) No warranties</h2>
            <p>
              The Site and Content are provided &quot;as is&quot; and &quot;as available.&quot; I make no warranties, express or implied, including warranties of accuracy, completeness, non-infringement, merchantability, or fitness for a particular purpose.
            </p>

            <h2 className="font-display text-xl text-ink mt-8 mb-4">8) Limitation of liability</h2>
            <p>
              To the fullest extent permitted by law, I will not be liable for any indirect, incidental, consequential, special, or punitive damages, or any loss of profits, revenues, data, or goodwill, arising from or related to your use of the Site or reliance on any Content.
            </p>

            <h2 className="font-display text-xl text-ink mt-8 mb-4">9) Indemnity</h2>
            <p>
              You agree to indemnify and hold me harmless from any claims, liabilities, damages, and expenses (including reasonable attorneys&apos; fees) arising out of your use of the Site, your violation of these Terms, or your violation of any rights of another.
            </p>

            <h2 className="font-display text-xl text-ink mt-8 mb-4">10) Changes to the Site or Terms</h2>
            <p>
              I may update the Site and these Terms at any time. The &quot;Effective date&quot; indicates the latest version. Continued use of the Site after changes means you accept the updated Terms.
            </p>

            <h2 className="font-display text-xl text-ink mt-8 mb-4">11) Governing law and venue</h2>
            <p>
              These Terms are governed by the laws of the State of Utah, USA, without regard to conflict-of-law rules. You agree that any dispute will be brought in state or federal courts located in Utah, unless applicable law requires otherwise.
            </p>

            <h2 className="font-display text-xl text-ink mt-8 mb-4">12) Contact</h2>
            <p>
              Questions about these Terms: <EmailProtection />
            </p>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}

