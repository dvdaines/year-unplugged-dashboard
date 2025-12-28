import Header from '../components/Header';
import Footer from '../components/Footer';
import EmailProtection from '../components/email-protection';

export default function DisclaimerPage() {
  return (
    <main className="min-h-dvh bg-cream text-ink antialiased">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <Header />

        <section className="max-w-3xl mx-auto py-16">
          <h1 className="font-display text-[32px] sm:text-[40px] tracking-[-0.01em] text-center mb-10">
            Disclaimer
          </h1>

          <div className="text-muted-ink text-base sm:text-lg leading-relaxed space-y-6">
            <p className="text-sm text-muted-ink mb-6">
              Effective date: December 27, 2025
            </p>

            <p>
              Year Unplugged: 1 year, 0 screens, 100s of biomarkers (the &quot;Project&quot;) is a personal, self-directed experiment created and operated by David Daines (&quot;I,&quot; &quot;me,&quot; &quot;my&quot;). The website located at yearunplugged.com (the &quot;Site&quot;) exists to document and share observations, measurements, and media from that experiment.
            </p>

            <h2 className="font-display text-xl text-ink mt-8 mb-4">Not medical advice</h2>
            <p>
              The Site provides information for general educational and informational purposes only. Nothing on the Site is medical advice, health advice, diagnosis, treatment, or a substitute for professional medical care. Always seek the advice of a qualified health professional with any questions you may have regarding a medical condition or changes to diet, exercise, supplements, medications, or lifestyle.
            </p>

            <h2 className="font-display text-xl text-ink mt-8 mb-4">N-of-1, not generalizable</h2>
            <p>
              This is an N-of-1 (single-person) experiment. Any biomarker values, trends, protocols, or interpretations are specific to me and may not apply to anyone else. Outcomes can vary widely due to genetics, baseline health, environment, behavior, measurement timing, lab methods, and countless other factors.
            </p>

            <h2 className="font-display text-xl text-ink mt-8 mb-4">Data limitations</h2>
            <p>
              The Site may include lab results, wearable metrics, subjective ratings, and other measurements. These can be inaccurate, incomplete, delayed, or presented with errors. Lab reference ranges and methodologies vary by provider and may change over time. I make no guarantees that any data on the Site is correct, current, complete, or suitable for any particular purpose.
            </p>

            <h2 className="font-display text-xl text-ink mt-8 mb-4">No doctor–patient relationship</h2>
            <p>
              Using the Site or contacting me does not create a doctor–patient relationship or any other professional relationship.
            </p>

            <h2 className="font-display text-xl text-ink mt-8 mb-4">Assumption of risk</h2>
            <p>
              If you choose to apply anything you read or watch on the Site, you do so at your own risk. You are solely responsible for your decisions and outcomes.
            </p>

            <h2 className="font-display text-xl text-ink mt-8 mb-4">External links and third-party content</h2>
            <p>
              The Site may link to third-party websites or embed third-party content (for example, video or social media). I do not control those third parties and am not responsible for their content, policies, or practices.
            </p>

            <h2 className="font-display text-xl text-ink mt-8 mb-4">Contact</h2>
            <p>
              Questions about this disclaimer: <EmailProtection />
            </p>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}

