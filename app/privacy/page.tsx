import Header from '../components/Header';
import Footer from '../components/Footer';
import EmailProtection from '../components/email-protection';

export default function PrivacyPage() {
  return (
    <main className="min-h-dvh bg-cream text-ink antialiased">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <Header />

        <section className="max-w-3xl mx-auto py-16">
          <h1 className="font-display text-[32px] sm:text-[40px] tracking-[-0.01em] text-center mb-10">
            Privacy Policy
          </h1>

          <div className="text-muted-ink text-base sm:text-lg leading-relaxed space-y-6">
            <p className="text-sm text-muted-ink mb-6">
              Effective date: December 27, 2025
            </p>

            <p>
              This Privacy Policy explains how Year Unplugged (the &quot;Site&quot;), operated by David Daines, collects, uses, and shares information when you visit yearunplugged.com.
            </p>

            <p>
              If you have questions, contact: <EmailProtection />
            </p>

            <h2 className="font-display text-xl text-ink mt-8 mb-4">Summary</h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>If you subscribe, I collect your email address (via Kit, formerly ConvertKit).</li>
              <li>I use Vercel Analytics to understand basic site usage. I may add Google Analytics in the future.</li>
              <li>I do not sell your personal information.</li>
              <li>Third-party embeds (like video/social) can collect data independently.</li>
            </ul>

            <h2 className="font-display text-xl text-ink mt-8 mb-4">Information I collect</h2>
            
            <h3 className="font-display text-lg text-ink mt-6 mb-3">1) Information you provide</h3>
            <p>
              <strong>Email subscriptions:</strong> If you sign up for email updates, you provide your email address (and any other fields shown on the signup form). Email collection and mailing list management are handled by Kit (ConvertKit).
            </p>

            <h3 className="font-display text-lg text-ink mt-6 mb-3">2) Information collected automatically</h3>
            <p>
              When you browse the Site, certain information may be collected automatically, such as:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>general device and browser information</li>
              <li>approximate location (e.g., city/region inferred from IP)</li>
              <li>pages viewed, time on page, and referral source</li>
              <li>basic performance and traffic analytics</li>
            </ul>
            <p className="mt-4">
              <strong>Analytics providers:</strong>
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Vercel Analytics (currently)</li>
              <li>Google Analytics (may be used in the future)</li>
            </ul>
            <p className="mt-4">
              Depending on configuration, analytics tools may use cookies or similar technologies. Some are capable of operating in a more &quot;cookie-light&quot; mode, but you should assume standard web telemetry may occur.
            </p>

            <h3 className="font-display text-lg text-ink mt-6 mb-3">3) Information from embedded third parties</h3>
            <p>
              If the Site embeds third-party content (e.g., YouTube, X, etc.), those third parties may collect information directly from you (including via cookies or similar technologies) according to their own privacy policies.
            </p>

            <h2 className="font-display text-xl text-ink mt-8 mb-4">How I use information</h2>
            <p>I use information to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>send you email updates you requested</li>
              <li>operate and improve the Site and Project</li>
              <li>measure traffic and understand what content is useful</li>
              <li>prevent fraud, abuse, or security issues</li>
              <li>comply with legal obligations</li>
            </ul>

            <h2 className="font-display text-xl text-ink mt-8 mb-4">How I share information</h2>
            <p>I share information only in limited ways:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Service providers:</strong> I use providers like Kit (email) and Vercel (hosting/analytics) who process information on my behalf.</li>
              <li><strong>Legal/safety:</strong> I may disclose information if required by law, subpoena, or to protect rights, safety, and security.</li>
              <li><strong>Business changes:</strong> If the Project is reorganized (e.g., I form a legal entity) or the Site is transferred, information may be transferred as part of that change.</li>
            </ul>
            <p className="mt-4">
              I do not sell your personal information.
            </p>

            <h2 className="font-display text-xl text-ink mt-8 mb-4">Email communications</h2>
            <p>
              If you subscribe, you can unsubscribe at any time using the link in any email. After unsubscribing, I may retain minimal records to ensure I respect your opt-out and for compliance/logging purposes.
            </p>

            <h2 className="font-display text-xl text-ink mt-8 mb-4">Cookies and similar technologies</h2>
            <p>
              The Site and third-party services may use cookies, pixels, local storage, or similar technologies to:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>enable core functionality</li>
              <li>understand traffic and usage patterns</li>
              <li>support embedded third-party media</li>
            </ul>
            <p className="mt-4">
              You can control cookies through your browser settings. If Google Analytics is enabled in the future, additional cookie-based tracking may occur depending on configuration.
            </p>

            <h2 className="font-display text-xl text-ink mt-8 mb-4">Data retention</h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Email subscription data:</strong> retained until you unsubscribe (and potentially longer for suppression/opt-out records).</li>
              <li><strong>Analytics data:</strong> retained according to the settings of the analytics provider(s) and my configuration.</li>
            </ul>

            <h2 className="font-display text-xl text-ink mt-8 mb-4">International visitors</h2>
            <p>
              The Site is operated from the United States, and your information may be processed in the U.S. and other jurisdictions where my service providers operate. Data protection laws may differ from those in your country.
            </p>

            <h2 className="font-display text-xl text-ink mt-8 mb-4">Your privacy rights</h2>
            <p>
              Depending on where you live, you may have rights to access, correct, delete, or object to certain processing of your personal information.
            </p>
            <p className="mt-4">
              At a minimum, you can:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>unsubscribe from emails at any time</li>
              <li>request deletion of your subscription information (where applicable)</li>
            </ul>
            <p className="mt-4">
              To make a request, contact: <EmailProtection />
            </p>

            <h2 className="font-display text-xl text-ink mt-8 mb-4">Children&apos;s privacy</h2>
            <p>
              The Site is not intended for children under 13, and I do not knowingly collect personal information from children under 13. If you believe a child has provided information, contact me to request deletion.
            </p>

            <h2 className="font-display text-xl text-ink mt-8 mb-4">Changes to this policy</h2>
            <p>
              I may update this Privacy Policy from time to time. The &quot;Effective date&quot; above indicates when it was last updated. Continued use of the Site after changes means you accept the updated policy.
            </p>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}

