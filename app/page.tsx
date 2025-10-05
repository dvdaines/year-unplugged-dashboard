'use client';

import { useState } from 'react';

export default function Dashboard() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  return (
    <div className="min-h-screen bg-black text-gray-200">
      <div className="max-w-6xl mx-auto px-5 py-10">
        {/* Header */}
        <header className="mb-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          {/* Left: Logo + tag */}
          <div className="flex-1 min-w-0">
            <img
              src="/logo.svg"
              alt="Year Unplugged"
              className="h-8 mb-2"
            />
            <div className="text-sm text-gray-600">
              What happens to your health when you don&apos;t use screens for a year?
            </div>
          </div>

          {/* Right: Sponsors */}
          <div className="text-right w-full sm:w-auto">
            <div className="text-xs text-gray-600 mb-3 tracking-wider">Sponsored By</div>
            <div className="flex flex-wrap justify-end gap-x-6 gap-y-3">
              <img
                src="/eight-sleep-logo.svg"
                alt="Eight Sleep"
                className="h-6 w-auto opacity-70 hover:opacity-100 transition-opacity"
              />
              <img
                src="/function-logo.png"
                alt="Function"
                className="h-6 w-auto opacity-70 hover:opacity-100 transition-opacity"
              />
              <img
                src="/huberman-lab.webp"
                alt="Huberman Lab"
                className="h-6 w-auto opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>
          </div>
        </header>

        {/* Compact Progress */}
        <div className="bg-gray-950 rounded-2xl p-6 mb-5 border border-gray-900">
          <div className="flex items-center justify-between">
            <div className="flex items-baseline gap-3">
              <div className="text-3xl font-bold text-white tracking-tight">
                154<span className="text-xl text-gray-600">/365</span>
              </div>
              <div className="text-sm text-gray-600">days device-free</div>
            </div>
            <div className="relative w-[60px] h-[60px]"> {/* 1.5x of w-10/h-10 (40px) */}
  <svg className="w-[60px] h-[60px] -rotate-90">
    <circle
      cx="30"
      cy="30"
      r="26.25"
      fill="none"
      stroke="#1a1a1a"
      strokeWidth="4.5"
    />
    <circle
      cx="30"
      cy="30"
      r="26.25"
      fill="none"
      stroke="#00d4aa"
      strokeWidth="4.5"
      strokeLinecap="round"
      strokeDasharray="164.9"
      strokeDashoffset="95.6"
      className="transition-all duration-1000"
    />
  </svg>
  <div className="absolute inset-0 flex items-center justify-center text-sm font-semibold text-emerald-400">
    42%
  </div>
</div>


          </div>
        </div>

        {/* Send me a letter (moved up from footer) */}
        <section className="bg-gray-950 rounded-2xl p-6 mb-6 border border-gray-900">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <div className="text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-1">
                Send me a letter
              </div>
              <div className="text-sm text-gray-500">
                Send letters etc. to:
              </div>
              <div className="text-white font-medium">
                P.O. Box 1754, Salt Lake City, UT 84110
              </div>
            </div>
            <a
              href="https://www.youtube.com/shorts/_dA5i-ki-Yo"
              className="inline-flex items-center justify-center rounded-xl border border-emerald-500/40 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-500/10 transition-colors"
              rel="noopener noreferrer"
              target="_blank"
            >
              How letters work
            </a>
          </div>
        </section>

        {/* Featured Video + Message Side by Side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-8">
          {/* Featured Video */}
          <div className="bg-gray-950 rounded-2xl overflow-hidden border border-gray-900">
            <div className="relative aspect-video bg-black">
              {!isVideoPlaying ? (
                <div
                  className="w-full h-full cursor-pointer relative"
                  onClick={() => setIsVideoPlaying(true)}
                >
                  <img
                    src="https://img.youtube.com/vi/1FK4x84fls8/maxresdefault.jpg"
                    alt="Video thumbnail"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <div className="w-20 h-20 bg-emerald-400/90 rounded-full flex items-center justify-center hover:bg-emerald-400 hover:scale-110 transition-all">
                      <div className="w-0 h-0 border-l-[20px] border-l-black border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent ml-1" />
                    </div>
                  </div>
                </div>
              ) : (
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/1FK4x84fls8?autoplay=1"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              )}
            </div>
            <div className="p-6">
              <div className="text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-2">
                Week 22 • Latest Episode
              </div>
              <div className="text-2xl font-semibold text-white mb-2">
                The Transformation
              </div>
              <div className="text-sm text-gray-600">
                Day 154 • October 4, 2025 • 12:34
              </div>
            </div>
          </div>

          {/* Message (replaces right-side metrics) */}
          <div className="bg-gray-950 rounded-2xl p-6 border border-gray-900">
            <h2 className="text-white text-2xl sm:text-3xl font-bold mb-3">
              I&apos;m going one year without devices.
            </h2>
            <div className="text-sm sm:text-base text-gray-400 leading-relaxed">
              When I was 20, I moved to Silicon Valley because I was obsessed with tech and wanted to work in the industry.
              Now, with 18 hours of screen time per day—and multiple with AI–I find myself asking: <br /> <br />
              <ul>
                <li className="text-gray-300"><em>What is it doing to my physical health?</em></  li>
                <li className="text-gray-300">What is it doing to my life satisfaction?</li>
                <li className="text-gray-300"><em>What is it doing to my sleep?</em></li>
                <li className="text-gray-300"><em>Etc.</em></li>
              </ul>
              <br className="hidden sm:block" /> <br />
              And what if I went without screens for a year?
            </div>
          </div>
        </div>

        {/* Metrics Row (moved beneath video & message) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
          {/* Sleep Card */}
          <div className="bg-gray-950 rounded-2xl p-6 border border-gray-900 hover:border-gray-800 transition-colors">
            <div className="flex items-center mb-5">
              <div className="text-3xl mr-3">😴</div>
              <div className="text-base font-semibold text-white">Sleep</div>
            </div>
            <div className="text-4xl font-bold text-white tracking-tight mb-1">
              8.2<span className="text-base text-gray-600 font-normal"> hrs</span>
            </div>
            <div className="text-sm text-gray-600 mb-5">Average duration</div>
            <div className="space-y-3">
              <div className="flex justify-between items-center pt-3 border-t border-gray-900">
                <span className="text-sm text-gray-500">Quality Score</span>
                <span className="text-sm font-semibold text-emerald-400">87/100</span>
              </div>
              <div className="flex justify-between items-center pt-3 border-t border-gray-900">
                <span className="text-sm text-gray-500">REM Sleep</span>
                <span className="text-sm font-semibold text-white">24%</span>
              </div>
              <div className="flex justify-between items-center pt-3 border-t border-gray-900">
                <span className="text-sm text-gray-500">Deep Sleep</span>
                <span className="text-sm font-semibold text-emerald-400">22%</span>
              </div>
            </div>
          </div>

          {/* Heart Card */}
          <div className="bg-gray-950 rounded-2xl p-6 border border-gray-900 hover:border-gray-800 transition-colors">
            <div className="flex items-center mb-5">
              <div className="text-3xl mr-3">❤️</div>
              <div className="text-base font-semibold text-white">Heart</div>
            </div>
            <div className="text-4xl font-bold text-white tracking-tight mb-1">
              58<span className="text-base text-gray-600 font-normal"> bpm</span>
            </div>
            <div className="text-sm text-gray-600 mb-5">Resting heart rate</div>
            <div className="space-y-3">
              <div className="flex justify-between items-center pt-3 border-t border-gray-900">
                <span className="text-sm text-gray-500">HRV (7-day)</span>
                <span className="text-sm font-semibold text-emerald-400">72 ms</span>
              </div>
              <div className="flex justify-between items-center pt-3 border-t border-gray-900">
                <span className="text-sm text-gray-500">Blood Pressure</span>
                <span className="text-sm font-semibold text-emerald-400">118/76</span>
              </div>
              <div className="flex justify-between items-center pt-3 border-t border-gray-900">
                <span className="text-sm text-gray-500">VO2 Max</span>
                <span className="text-sm font-semibold text-white">48</span>
              </div>
            </div>
          </div>

          {/* Biomarkers Card (now in this row) */}
          <div className="bg-gray-950 rounded-2xl p-6 border border-gray-900 hover:border-gray-800 transition-colors">
            <div className="flex items-center mb-5">
              <div className="text-3xl mr-3">🩺</div>
              <div className="text-base font-semibold text-white">Biomarkers</div>
            </div>
            <div className="text-4xl font-bold text-white tracking-tight mb-1">
              5.1<span className="text-base text-gray-600 font-normal"> %</span>
            </div>
            <div className="text-sm text-gray-600 mb-5">HbA1c level</div>
            <div className="space-y-3">
              <div className="flex justify-between items-center pt-3 border-t border-gray-900">
                <span className="text-sm text-gray-500">Cortisol (AM)</span>
                <span className="text-sm font-semibold text-emerald-400">12.4 μg/dL</span>
              </div>
              <div className="flex justify-between items-center pt-3 border-t border-gray-900">
                <span className="text-sm text-gray-500">Vitamin D</span>
                <span className="text-sm font-semibold text-emerald-400">58 ng/mL</span>
              </div>
              <div className="flex justify-between items-center pt-3 border-t border-gray-900">
                <span className="text-sm text-gray-500">Testosterone</span>
                <span className="text-sm font-semibold text-white">682 ng/dL</span>
              </div>
            </div>
          </div>

          {/* Readiness Card */}
          <div className="bg-gray-950 rounded-2xl p-6 border border-gray-900 hover:border-gray-800 transition-colors">
            <div className="flex items-center mb-5">
              <div className="text-3xl mr-3">📈</div>
              <div className="text-base font-semibold text-white">Readiness</div>
            </div>
            <div className="text-4xl font-bold text-white tracking-tight mb-1">
              86<span className="text-base text-gray-600 font-normal"> /100</span>
            </div>
            <div className="text-sm text-gray-600 mb-5">Overall score</div>
            <div className="h-16 flex items-end gap-1.5 mt-4">
              <div className="flex-1 bg-gradient-to-t from-emerald-400 to-emerald-400/30 rounded-t" style={{ height: '65%' }} />
              <div className="flex-1 bg-gradient-to-t from-emerald-400 to-emerald-400/30 rounded-t" style={{ height: '72%' }} />
              <div className="flex-1 bg-gradient-to-t from-emerald-400 to-emerald-400/30 rounded-t" style={{ height: '68%' }} />
              <div className="flex-1 bg-gradient-to-t from-emerald-400 to-emerald-400/30 rounded-t" style={{ height: '85%' }} />
              <div className="flex-1 bg-gradient-to-t from-emerald-400 to-emerald-400/30 rounded-t" style={{ height: '78%' }} />
              <div className="flex-1 bg-gradient-to-t from-emerald-400 to-emerald-400/30 rounded-t" style={{ height: '82%' }} />
              <div className="flex-1 bg-gradient-to-t from-emerald-400 to-emerald-400/30 rounded-t" style={{ height: '90%' }} />
            </div>
          </div>
        </div>

        {/* Previous Episodes */}
        <div className="text-xl font-semibold text-white mb-5">Previous Episodes</div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {[
            { title: 'Week 21: Testosterone is crazy', day: 'Day 147 • Sep 27' },
            { title: 'Week 20: I miss my phone so much', day: 'Day 140 • Sep 20' },
            { title: 'Week 19: I do not miss my phone at all', day: 'Day 133 • Sep 13' },
            { title: 'Week 18: Sleeping like a baby', day: 'Day 126 • Sep 6' }
          ].map((video, i) => (
            <div key={i} className="bg-gray-950 rounded-xl overflow-hidden border border-gray-900 hover:border-gray-800 hover:-translate-y-0.5 transition-all cursor-pointer">
              <div className="aspect-video bg-gradient-to-br from-gray-900 to-black flex items-center justify-center">
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                  <div className="w-0 h-0 border-l-[10px] border-l-white border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent ml-0.5" />
                </div>
              </div>
              <div className="p-4">
                <div className="text-sm font-semibold text-white mb-1.5">{video.title}</div>
                <div className="text-xs text-gray-600">{video.day}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer (PO Box removed since moved to top) */}
        <footer className="text-center py-10 border-t border-gray-900 mt-10">
          <div className="text-sm text-gray-600">
            New episode every Friday • Started April 3, 2025
          </div>
        </footer>
      </div>
    </div>
  );
}
