// app/page.tsx
export default function Home() {
    return (
        <main className="min-h-dvh bg-cream text-ink antialiased">
            <section className="flex min-h-dvh items-center justify-center px-6 py-16">
                <div className="w-full max-w-3xl">

                    {/* Header */}
                    <div className="text-center mb-8">
                        <div className="flex items-center justify-center gap-3 mb-4">
                            <img
                                src="/yu-mark.svg"
                                width={40}
                                height={40}
                                alt="Year Unplugged logo"
                                className="inline-block select-none"
                                decoding="async"
                            />
                            <h1 className="font-display text-[34px] leading-tight sm:text-[42px] md:text-[46px] tracking-[-0.01em]">
                                Year Unplugged x Continue
                            </h1>
                        </div>
                        <p className="text-muted-ink">
                            One year, zero screens, hundreds of biomarkers.
                            How do our devices impact our health?
                        </p>
                    </div>

                    {/* ===== 1. Applicant Information ===== */}
                    <section className="mb-10">
                        <h2 className="text-xl font-semibold mb-3">1. Applicant Information</h2>
                        <div className="grid sm:grid-cols-2 gap-3 text-sm">
                            <Field label="Full Name (Primary Applicant)" value="David Daines" />
                            <Field label="Affiliation / Institution (if any)" value={<em>—</em>} />
                            <Field label="Position / Title" value="Independent Researcher" />
                            <Field label="Nationality & Country of Residence" value="American, USA" />
                            <Field label="Contact Email" value="david@davidd.org" />
                            <Field label="Contact Number" value="+1-415-463-9264" />
                            <div className="sm:col-span-2">
                                <Field label="Mailing Address" value="215 Edgehill Dr, Providence, UT 84332 (USA)" />
                            </div>
                        </div>
                    </section>

                    {/* ===== 2. Project Overview ===== */}
                    <section className="mb-10">
                        <h2 className="text-xl font-semibold mb-3">2. Project Overview</h2>
                        <KV label="Project Title" value="Year Unplugged: An Open N=1, Year-Long Screen Abstinence Study on Healthspan" />
                        <KV label="Duration (Start–End)" value="Dec 1, 2025 – Apr 1, 2027 (2 mo baseline → 12 mo unplug → 2 mo re-introduction)" />
                        <KV label="Requested Grant Amount (USD)" value="$350,000 (Deep Dive track, 1–3 years)" />
                        <KV label="Primary URL" value={<a className="underline underline-offset-4" href="https://yearunplugged.com">yearunplugged.com</a>} />
                        <div className="mt-3 text-sm leading-relaxed bg-white/50 rounded-md p-4 ring-1 ring-[rgba(47,42,37,0.12)]">
                            <h3 className="font-semibold mb-1">Summary Abstract (≤250 words)</h3>
                            <p>
                                <strong>Year Unplugged</strong> is a 16-month, open N=1 experiment to test whether eliminating
                                modern screens for 12 months acts as a simple upstream lever on sleep, mood, cognition,
                                metabolic health, and biological aging pace. Phases: 2-month baseline (normal use),
                                12-month complete abstinence, 2-month structured re-introduction. Outcomes include redundant
                                Oura sleep/circadian measures; weekly mood scales; a monthly paper cognition battery; quarterly
                                clinical labs; and <em>DunedinPACE</em> at four timepoints (start, 6 mo, 12 mo, post-reintro).
                                A part-time operator handles filming, digitization, and publishing so the participant remains
                                truly off screens. All protocols, raw data, code, and negatives will be released in plain language
                                to enable replication and meta-analysis. If a single low-cost behavior measurably improves multiple
                                systems, it suggests a practical path to population-level healthspan gains; if effects are null,
                                we publish that too to set realistic priors.
                            </p>
                        </div>
                    </section>

                    {/* ===== 3. Scientific Merit ===== */}
                    <section className="mb-10">
                        <h2 className="text-xl font-semibold mb-3">3. Scientific Merit</h2>

                        <Block title="a. Research Background (≤500 words)">
                            <p>
                                Screens bundle bright light, arousal, and reward loops that influence circadian timing, sleep,
                                attention, and stress. Evidence links evening screen exposure and blue-enriched light to melatonin
                                suppression and delayed sleep; consumer wearables (e.g., Oura Gen3) are sufficiently reliable for
                                longitudinal within-person changes. Aging-pace biomarkers like <em>DunedinPACE</em> provide a
                                whole-organism readout sensitive enough for small studies. Despite intense public interest, there is
                                little prospective, high-resolution, open data on long-term screen removal in adults.
                                <strong> Year Unplugged</strong> fills this gap with a preregistered, 3-phase time series and open releases.
                            </p>
                        </Block>

                        <Block title="b. Research Objectives & Hypothesis (≤400 words)">
                            <ul className="list-disc ml-5">
                                <li>Quantify change in sleep regularity/quality during abstinence vs. baseline and re-intro.</li>
                                <li>Measure downstream mood, attention/executive function, and metabolic markers.</li>
                                <li>Estimate change in biological aging pace via DunedinPACE (4 timepoints).</li>
                                <li>Publish a low-friction, open protocol and ops playbook others can reuse.</li>
                            </ul>
                            <p className="mt-2">
                                <strong>Primary hypothesis:</strong> Removing screens for 12 months improves sleep regularity and
                                consolidated sleep. <strong>Secondary:</strong> sleep improvements mediate better mood/attention and
                                favorable shifts in metabolic markers; DunedinPACE slows vs. baseline with partial rebound on re-intro.
                            </p>
                        </Block>

                        <Block title="c. Methodology & Plan (≤800 words)">
                            <p>
                                <strong>Design.</strong> Prospective single-participant study with Baseline (Dec 2025–Jan 2026),
                                Intervention (Feb 2026–Jan 2027; complete screen abstinence), Re-introduction (Feb–Mar 2027).
                                <strong> Intervention.</strong> No phones, laptops, tablets, TVs, e-readers, or display wearables.
                                Allowed: voice calls on a data-less feature phone, paper tools, audio players. Third-party operator
                                manages publishing and digitization.
                            </p>
                            <p>
                                <strong>Outcomes.</strong> Redundant Oura metrics (TST, onset/offset, efficiency, latency, WASO,
                                HRV, RHR, temp deviation); derived Sleep Regularity Index and social jetlag; weekly PHQ-9/GAD-7/PSS-10;
                                monthly paper cognition (e.g., TMT-A/B, digit span, symbol search-style tasks); quarterly labs
                                (glucose, insulin/HOMA-IR, lipids, triglycerides, hs-CRP, CBC/CMP, thyroid, vitamin D); DunedinPACE
                                at start, 6 mo, 12 mo, post; optional pilot neuroimaging contingent on collaborator.
                            </p>
                            <p>
                                <strong>Adherence & ops.</strong> Timed lockbox + third-party custody; daily paper attestation and
                                spot-checks; display removal/covering; public commitment; operator scans/QCs paper → CSV/JSON with
                                codebooks. <strong>Analysis.</strong> Interrupted time-series with autocorrelation-aware models;
                                effect sizes + compatibility intervals; sensitivity: exclude illness/travel weeks, per-protocol vs ITT.
                            </p>
                        </Block>
                    </section>

                    {/* ===== 4. Impact & Vision ===== */}
                    <section className="mb-10">
                        <h2 className="text-xl font-semibold mb-3">4. Impact &amp; Vision</h2>
                        <Block title="a. Expected Scientific Impact (≤300 words)">
                            <p>
                                Produces a rare, high-resolution time series isolating one large behavioral lever with open data/code.
                                Positive effects motivate targeted RCTs and mechanistic work; nulls set realistic priors and prevent
                                wasted effort. Methods template lowers friction for clinics and individuals to run similar protocols.
                            </p>
                        </Block>
                        <Block title="b. Broader Societal or Health Impact (≤200 words)">
                            <p>
                                If year-long removal meaningfully improves sleep and second-order outcomes, it points to a low-cost,
                                scalable lever for schools, workplaces, and households (e.g., time-boxed screen windows, evening
                                light/content policies). Results—positive or null—are directly actionable through plain-language posts
                                and a replication playbook.
                            </p>
                        </Block>
                        <Block title="c. Post-Grant Plan (≤200 words)">
                            <p>
                                Publish final dataset/code and playbook; host one open workshop; recruit partners to test targeted
                                variants (evening screens only; content vs. light timing) and small multi-site replications. Maintain
                                the repo and dashboard for at least 24 months post-grant.
                            </p>
                        </Block>
                    </section>

                    {/* ===== 5. Feasibility & Infrastructure ===== */}
                    <section className="mb-10">
                        <h2 className="text-xl font-semibold mb-3">5. Feasibility &amp; Infrastructure</h2>
                        <Block title="a. Available Infrastructure (≤300 words)">
                            <p>
                                Home base in Salt Lake City; quiet workspace; feature phone workflow; lockbox hardware; two Oura rings;
                                local draw sites for quarterly labs; cloud storage + repo automation managed by operator.
                            </p>
                        </Block>
                        <Block title="b. Collaborations / Partnerships">
                            <p>
                                Clinical Lab Partner: <strong>Superpower (or equivalent local draw site)</strong>. Videographer/Operations
                                Lead: <strong>TBD</strong>. Advisors (sleep/statistics/aging): <strong>TBD</strong>.
                            </p>
                        </Block>
                        <Block title="c. Risk Assessment (≤250 words)">
                            <ul className="list-disc ml-5">
                                <li>Adherence drift → lockbox, third-party custody, public audits; log deviations for ITT.</li>
                                <li>Seasonality/travel/illness → segmented time-series; covariates; sensitivity exclusions.</li>
                                <li>Device/measure failure → redundant rings; manual diary; predefined backups.</li>
                                <li>Ops failure → SOPs for scan/OCR/QC; budgeted buffer; weekly ops checklist.</li>
                                <li>Privacy → de-identification; consent for any identifiable media; offline raw storage.</li>
                            </ul>
                        </Block>
                    </section>

                    {/* ===== 6. Capability & Track Record ===== */}
                    <section className="mb-10">
                        <h2 className="text-xl font-semibold mb-3">6. Capability &amp; Track Record</h2>
                        <Block title="a. Prior Work or Publications (up to 5)">
                            <ul className="list-disc ml-5">
                                <li>
                                    <a className="underline underline-offset-4" href="https://davidd.org/experiments/microplastics-trial-i">
                                        Six-month N=1 microplastics reduction trial (2025) with BodyBio
                                    </a>
                                </li>
                                <li>Custom physical device to lock away screens (design + build)</li>
                                <li>Public drafts &amp; ops plan for Year Unplugged</li>
                            </ul>
                        </Block>
                        <Block title="b. Past Projects or Grants">
                            <p>None for this project.</p>
                        </Block>
                        <Block title="c. Project Delivery Record">
                            <p>
                                Bias-to-action; disciplined routine; documented protocols; willingness to do sustained, “boring” work;
                                prior self-research and device build demonstrate follow-through.
                            </p>
                        </Block>
                    </section>

                    {/* ===== 7. Open Science & Ethics ===== */}
                    <section className="mb-10">
                        <h2 className="text-xl font-semibold mb-3">7. Open Science &amp; Ethics</h2>
                        <Block title="a. Data Sharing & Open Access Plan (≤250 words)">
                            <p>
                                Monthly rolling releases (CSV/Parquet + codebook) and final cleaned dataset with reproducible
                                pipelines (R/Python). Public preregistration; protocol; SOPs; analysis scripts; plain-language posts.
                                Licenses: text CC BY 4.0; data ODC-BY 1.0; code MIT. De-identify (no GPS; redacted serials; blurred
                                third parties); hashed, versioned releases; offline storage for raw identifiable files.
                            </p>
                        </Block>
                        <Block title="b. Declaration of Non-Commercial Interest">
                            <p>
                                The project is strictly non-commercial. No product, app, or paid program is being developed or
                                marketed; all outputs are open and free to reuse.
                            </p>
                        </Block>
                    </section>

                    {/* ===== 8. Budget & Timeline ===== */}
                    <section className="mb-10">
                        <h2 className="text-xl font-semibold mb-3">8. Budget &amp; Timeline</h2>

                        <div className="overflow-x-auto rounded-md ring-1 ring-[rgba(47,42,37,0.12)]">
                            <table className="w-full text-sm">
                                <thead className="bg-white/60">
                                    <tr>
                                        <th className="px-3 py-2 text-left">Category</th>
                                        <th className="px-3 py-2 text-left">Description</th>
                                        <th className="px-3 py-2 text-right">Amount (USD)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <Row cat="Personnel" desc="Content ops / videography (part-time, 16 mo)" amt="$120,000" />
                                    <Row cat="Personnel" desc="Living expenses (Salt Lake City, 16 mo)" amt="$56,000" />
                                    <Row cat="Equipment" desc="Redundant Oura rings + memberships/replacements" amt="$2,000" />
                                    <Row cat="Consumables" desc="Clinical labs (quarterly panels, add-ons as indicated)" amt="$30,000" />
                                    <Row cat="Data/Software" desc="Open-data infra, transcription, storage, repo automation" amt="$30,000" />
                                    <Row cat="Travel/Fieldwork" desc="Lab visits, collaborator meetings, backup sites" amt="$30,000" />
                                    <Row cat="Miscellaneous" desc="Insurance, legal/consent, lockbox hardware, supplies" amt="$10,000" />
                                    <Row cat="Optional (Stretch)" desc="Neuroimaging pilot (research-rate slots)" amt="$20,000" />
                                    <Row cat="Contingency" desc="Buffer for device failures, extra labs, slippage" amt="$52,000" />
                                    <tr className="border-t">
                                        <td className="px-3 py-2 font-semibold" colSpan={2}>Total</td>
                                        <td className="px-3 py-2 text-right font-semibold">$350,000</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="mt-6 overflow-x-auto rounded-md ring-1 ring-[rgba(47,42,37,0.12)]">
                            <table className="w-full text-sm">
                                <thead className="bg-white/60">
                                    <tr>
                                        <th className="px-3 py-2 text-left">Milestone</th>
                                        <th className="px-3 py-2 text-left">Description</th>
                                        <th className="px-3 py-2 text-left">Target Date</th>
                                        <th className="px-3 py-2 text-left">Deliverable</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <Milestone m="Preregistration" d="Protocol + analysis plan" t="Dec 2025" v="Public prereg + repo" />
                                    <Milestone m="Baseline complete" d="2-mo baseline + labs + DunedinPACE #1" t="Jan 2026" v="Dataset v0 + QA note" />
                                    <Milestone m="Unplug start" d="Day-0 adherence setup" t="Feb 2026" v="Ops memo + video" />
                                    <Milestone m="Quarterly drop #1" d="First intervention quarter + labs" t="May 2026" v="Dataset v1 + mini-report" />
                                    <Milestone m="Midline" d="DunedinPACE #2, interim sleep analysis" t="Jul 2026" v="Midline report + code" />
                                    <Milestone m="Quarterly drop #2" d="Second intervention quarter + labs" t="Sep 2026" v="Dataset v2 + memo" />
                                    <Milestone m="Quarterly drop #3" d="Third intervention quarter + labs" t="Dec 2026" v="Dataset v3 + memo" />
                                    <Milestone m="Unplug complete" d="DunedinPACE #3" t="Jan 2027" v="Year summary note" />
                                    <Milestone m="Re-intro complete" d="Labs + DunedinPACE #4" t="Mar 2027" v="Dataset v4 + memo" />
                                    <Milestone m="Final release" d="Cleaned dataset + paper-style report + playbook" t="Apr 2027" v="v1.0 data/code/report" />
                                </tbody>
                            </table>
                        </div>
                    </section>

                    {/* ===== 9. Declarations ===== */}
                    <section className="mb-10">
                        <h2 className="text-xl font-semibold mb-3">9. Declarations</h2>
                        <ul className="space-y-2 text-sm">
                            <li>☑ I certify that all information provided is true and accurate.</li>
                            <li>☑ I agree to acknowledge the research fund in all publications.</li>
                            <li>☑ I certify that this proposal doesn’t overlap with existing projects or proposals submitted to other funding organisations.</li>
                            <li>☑ I commit to submitting progress reports and final results as per the fund guidelines.</li>
                        </ul>
                        {/* Sign-off */}
                        <div className="mt-4 text-sm text-muted-ink">
                        <div className="mt-6 flex items-center justify-between text-sm text-muted-ink">
  <div className="flex items-center gap-3">
    <span>Signature:</span>
    <img
      src="/signature.png"
      alt="Signature of David Daines"
      className="h-[18px] sm:h-1 md:h-1 w-auto -mb-1 opacity-90"
      decoding="async"
      loading="lazy"
    />
  </div>
  <div>Date: Oct 28, 2025</div>
</div>
                        </div>
                    </section>

                    {/* Footer / Links */}
                    <footer className="pt-6 border-t border-[rgba(47,42,37,0.12)] text-sm text-muted-ink">
                        <p>
                            Primary link: <a className="underline underline-offset-4" href="https://yearunplugged.com">yearunplugged.com</a> ·
                            Personal site: <a className="underline underline-offset-4" href="https://davidd.org">davidd.org</a> ·
                            Updates: <a className="underline underline-offset-4" href="https://x.com/daviddorg">x.com/daviddorg</a>
                        </p>
                    </footer>

                </div>
            </section>
        </main>
    );
}

/* ---------- tiny presentational helpers ---------- */
function Field({ label, value }: { label: string; value: React.ReactNode }) {
    return (
        <div className="flex flex-col">
            <span className="text-[12px] uppercase tracking-wide text-muted-ink">{label}</span>
            <span className="rounded-md bg-white/50 ring-1 ring-[rgba(47,42,37,0.12)] px-3 py-2">{value}</span>
        </div>
    );
}
function KV({ label, value }: { label: string; value: React.ReactNode }) {
    return (
        <div className="grid sm:grid-cols-[220px,1fr] gap-3 items-start text-sm mb-2">
            <div className="text-[12px] uppercase tracking-wide text-muted-ink">{label}</div>
            <div className="rounded-md bg-white/50 ring-1 ring-[rgba(47,42,37,0.12)] px-3 py-2">{value}</div>
        </div>
    );
}
function Row({ cat, desc, amt }: { cat: string; desc: string; amt: string }) {
    return (
        <tr className="border-t">
            <td className="px-3 py-2 align-top font-medium">{cat}</td>
            <td className="px-3 py-2 align-top">{desc}</td>
            <td className="px-3 py-2 text-right align-top">{amt}</td>
        </tr>
    );
}
function Block({ title, children }: { title: string; children: React.ReactNode }) {
    return (
        <div className="mb-4">
            <h3 className="font-semibold mb-1">{title}</h3>
            <div className="text-sm leading-relaxed rounded-md bg-white/50 p-4 ring-1 ring-[rgba(47,42,37,0.12)]">
                {children}
            </div>
        </div>
    );
}
function Milestone({ m, d, t, v }: { m: string; d: string; t: string; v: string }) {
    return (
        <tr className="border-t">
            <td className="px-3 py-2 font-medium">{m}</td>
            <td className="px-3 py-2">{d}</td>
            <td className="px-3 py-2">{t}</td>
            <td className="px-3 py-2">{v}</td>
        </tr>
    );
}
