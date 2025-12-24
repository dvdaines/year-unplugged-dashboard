// app/components/progress-bar.tsx
'use client';

import { useEffect, useMemo, useState } from 'react';

interface ProgressBarProps {
  startDate: Date;
  totalDays: number;
}

interface Phase {
  name: string;
  days: number;
  vividColor: string;
  mutedColor: string;
  description: string;
}

const PHASES: Phase[] = [
  {
    name: 'Prep',
    days: 30,
    vividColor: '#ef4444',
    mutedColor: '#fca5a5',
    description: 'Finish setting up experiment',
  },
  {
    name: 'Baseline',
    days: 60,
    vividColor: '#f97316',
    mutedColor: '#fdba74',
    description:
      'Record two months of baseline data including first set of neuroimaging, audiology exam, vision exam, 100+ blood markers, sleep data, and cognitive tests. Publish kickoff video.',
  },
  {
    name: 'No Screens',
    days: 365,
    vividColor: '#22c55e',
    mutedColor: '#86efac',
    description:
      'Completely eliminate screens, releasing biomarkers as more data comes in. Sleep: daily. Blood markers + more: monthly. Neuroimaging: performed again at month six. Video updates published regularly.',
  },
  {
    name: 'Post-experiment',
    days: 60,
    vividColor: '#3b82f6',
    mutedColor: '#93c5fd',
    description:
      'Final neuroimaging. Continue gathering data post-experiment to see what shifts as screens are reintroduced. Continue with video updates.',
  },
];

function formatDate(d: Date) {
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

export default function ProgressBar({ startDate }: ProgressBarProps) {
  const [progress, setProgress] = useState(0);
  const [daysElapsed, setDaysElapsed] = useState(0);
  const [currentPhaseName, setCurrentPhaseName] = useState('Prep');
  const [isModalOpen, setIsModalOpen] = useState(false);

  // ✅ Lock body scroll while modal is open (mobile fix)
  useEffect(() => {
    if (!isModalOpen) return;

    const prevOverflow = document.body.style.overflow;
    const prevPaddingRight = document.body.style.paddingRight;

    // Prevent background scrolling
    document.body.style.overflow = 'hidden';

    // Optional: prevent layout shift when scrollbar disappears (desktop)
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    return () => {
      document.body.style.overflow = prevOverflow;
      document.body.style.paddingRight = prevPaddingRight;
    };
  }, [isModalOpen]);

  // Total schedule length driven by phases
  const totalDaysFromPhases = useMemo(() => PHASES.reduce((sum, p) => sum + p.days, 0), []);
  const screenlessDays = 365;

  // To avoid hydration mismatch, initialize with prep phase width
  const prepPhaseWidth = useMemo(
    () => (PHASES[0].days / totalDaysFromPhases) * 100,
    [totalDaysFromPhases]
  );

  const [visualProgressPercent, setVisualProgressPercent] = useState(0);
  const [progressBarWidth, setProgressBarWidth] = useState(prepPhaseWidth);

  useEffect(() => {
    const calculateProgress = () => {
      const now = new Date();

      const prepStart = new Date(startDate);
      prepStart.setHours(0, 0, 0, 0);

      const daysSincePrepStart = Math.max(
        0,
        (now.getTime() - prepStart.getTime()) / (1000 * 60 * 60 * 24)
      );

      // Current phase
      let cumulativeDays = 0;
      let phaseName = 'Prep';
      for (let i = 0; i < PHASES.length; i++) {
        const phaseEnd = cumulativeDays + PHASES[i].days;
        if (daysSincePrepStart < phaseEnd) {
          phaseName = PHASES[i].name;
          break;
        }
        cumulativeDays += PHASES[i].days;
      }
      setCurrentPhaseName(phaseName);

      // Screenless progress
      const daysBeforeScreenless = PHASES[0].days + PHASES[1].days; // 90
      const daysIntoScreenless = Math.max(0, daysSincePrepStart - daysBeforeScreenless);
      const screenlessProgress = Math.min(100, (daysIntoScreenless / screenlessDays) * 100);

      setProgress(screenlessProgress);
      setDaysElapsed(Math.floor(Math.min(daysIntoScreenless, screenlessDays)));

      // Visual progress across all phases
      const calculatedProgress = Math.min(100, (daysSincePrepStart / totalDaysFromPhases) * 100);
      const calculatedBarWidth = Math.max(calculatedProgress, prepPhaseWidth);

      setVisualProgressPercent(Math.round(calculatedProgress * 100) / 100);
      setProgressBarWidth(Math.round(calculatedBarWidth * 100) / 100);
    };

    calculateProgress();
    const interval = setInterval(calculateProgress, 60000);
    return () => clearInterval(interval);
  }, [startDate, totalDaysFromPhases, prepPhaseWidth]);

  const segments = useMemo(() => {
    const now = new Date();
    const prepStart = new Date(startDate);
    prepStart.setHours(0, 0, 0, 0);
    const daysSincePrepStart = Math.max(
      0,
      (now.getTime() - prepStart.getTime()) / (1000 * 60 * 60 * 24)
    );

    let cumulativeDays = 0;
    return PHASES.map((phase, i) => {
      const phaseStart = cumulativeDays;
      const phaseEnd = cumulativeDays + phase.days;

      const isCompleted = daysSincePrepStart >= phaseEnd;
      const isCurrent = daysSincePrepStart >= phaseStart && daysSincePrepStart < phaseEnd;
      const isPrep = i === 0;

      const width = (phase.days / totalDaysFromPhases) * 100;
      const startPercent = (phaseStart / totalDaysFromPhases) * 100;
      const endPercent = (phaseEnd / totalDaysFromPhases) * 100;

      cumulativeDays += phase.days;

      return {
        name: phase.name,
        days: phase.days,
        description: phase.description,
        width,
        startPercent,
        endPercent,
        vividColor: phase.vividColor,
        mutedColor: phase.mutedColor,
        isCompleted,
        isCurrent,
        isPrep,
      };
    });
  }, [startDate, totalDaysFromPhases]);

  const phaseDates = useMemo(() => {
    const prepStart = new Date(startDate);
    prepStart.setHours(0, 0, 0, 0);

    let currentStart = new Date(prepStart);
    return PHASES.map((phase) => {
      const phaseEnd = new Date(currentStart);
      phaseEnd.setDate(phaseEnd.getDate() + phase.days);
      const out = { start: formatDate(currentStart), end: formatDate(phaseEnd) };
      currentStart = phaseEnd;
      return out;
    });
  }, [startDate]);

  return (
    <div>
      <h2 className="font-display text-2xl mb-5">Current Phase: {currentPhaseName}</h2>

      <div className="bg-panel border border-[rgba(30,27,22,0.08)] rounded-lg p-4">
        <div className="w-full bg-[rgba(30,27,22,0.1)] rounded-full h-4 mb-2 overflow-hidden relative">
          {/* Background: All phases with muted colors */}
          <div className="absolute inset-0 flex">
            {segments.map((segment, index) => (
              <div
                key={index}
                className="h-full"
                style={{
                  width: `${segment.width}%`,
                  backgroundColor: segment.mutedColor,
                  opacity: 0.5,
                }}
              />
            ))}
          </div>

          {/* Progress overlay */}
          <div
            className="h-4 rounded-full transition-all duration-500 relative overflow-hidden"
            style={{ width: `${progressBarWidth}%` }}
          >
            {segments.map((segment, index) => {
              if (segment.isPrep) {
                const prepWidthPercent =
                  progressBarWidth > 0 ? (segment.width / progressBarWidth) * 100 : 100;
                return (
                  <div
                    key={index}
                    className="h-full absolute"
                    style={{
                      left: '0%',
                      width: `${prepWidthPercent}%`,
                      background: `linear-gradient(90deg, ${segment.vividColor} 0%, ${segment.vividColor}dd 100%)`,
                    }}
                  />
                );
              }

              const segStart = Math.max(0, segment.startPercent);
              const segEnd = Math.min(segment.endPercent, visualProgressPercent);
              const segWidth = segEnd - segStart;
              if (segWidth <= 0) return null;

              const leftPercent = progressBarWidth > 0 ? (segStart / progressBarWidth) * 100 : 0;
              const widthPercent = progressBarWidth > 0 ? (segWidth / progressBarWidth) * 100 : 0;

              return (
                <div
                  key={index}
                  className="h-full absolute"
                  style={{
                    left: `${leftPercent}%`,
                    width: `${widthPercent}%`,
                    background: `linear-gradient(90deg, ${segment.vividColor} 0%, ${segment.vividColor}dd 100%)`,
                  }}
                />
              );
            })}

            {/* Shimmer */}
            <div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
              style={{ animation: 'shimmer 2s infinite' }}
            />
          </div>
        </div>

        <div className="flex justify-between items-center">
          <p className="text-sm text-muted-ink">
            {daysElapsed} / {screenlessDays} days screenless ({progress.toFixed(1)}%)
          </p>

          <button
            onClick={() => setIsModalOpen(true)}
            className="text-sm text-blue-500 hover:underline cursor-pointer"
          >
            See Timeline
          </button>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50" onClick={() => setIsModalOpen(false)}>
          {/* Backdrop */}
          <div className="absolute inset-0 bg-[rgba(237,230,218,0.72)] backdrop-blur-[2px]" />

          {/* Centering wrapper */}
          <div className="relative flex min-h-dvh items-center justify-center p-4 sm:p-6">
            {/* ✅ Panel becomes a bounded "sheet" that can scroll internally */}
            <div
              className="w-full max-w-2xl bg-panel border border-[rgba(30,27,22,0.08)] rounded-lg shadow-sm overflow-hidden max-h-[85dvh] sm:max-h-[80vh] flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header stays fixed */}
              <div className="p-5 sm:p-6 border-b border-[rgba(30,27,22,0.08)]">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-2xl">Experiment Timeline</h3>
                    <p className="text-sm text-muted-ink mt-1">Baseline period starting in early 2026</p>
                  </div>

                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="btn inline-flex items-center justify-center bg-panel border border-[rgba(30,27,22,0.08)] hover:bg-[rgba(237,230,218,0.8)] transition-colors shadow-sm cursor-pointer text-sm px-3 py-1.5 rounded-lg"
                  >
                    Close
                  </button>
                </div>

                {/* Mini timeline bar */}
                <div className="mt-4">
                  <div className="w-full bg-[rgba(30,27,22,0.1)] rounded-full h-3 overflow-hidden relative">
                    <div className="absolute inset-0 flex">
                      {segments.map((s, idx) => (
                        <div
                          key={idx}
                          className="h-full"
                          style={{
                            width: `${s.width}%`,
                            backgroundColor: s.mutedColor,
                            opacity: 0.55,
                          }}
                        />
                      ))}
                    </div>
                    <div className="absolute inset-0 flex">
                      {segments.map((s, idx) => (
                        <div
                          key={idx}
                          className="h-full"
                          style={{
                            width: `${s.width}%`,
                            background: `linear-gradient(90deg, ${s.vividColor} 0%, ${s.vividColor}dd 100%)`,
                            opacity: 0.95,
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* ✅ Scroll area */}
              <div className="p-5 sm:p-6 overflow-y-auto overscroll-contain">
                <div className="space-y-4">
                  {PHASES.map((phase, index) => (
                    <div
                      key={index}
                      className="rounded-lg border border-[rgba(30,27,22,0.08)] bg-cream/40 p-4"
                    >
                      <div className="flex items-start gap-3">
                        <div
                          className="mt-1 h-3.5 w-3.5 rounded-full shrink-0"
                          style={{ backgroundColor: phase.vividColor }}
                        />
                        <div className="flex-1">
                          <div className="flex flex-col gap-1">
                            <h4 className="font-display text-lg">
                              {phase.name}{' '}
                              <span className="text-sm text-muted-ink font-sans">({phase.days} days)</span>
                            </h4>
                            {/* Optional date line (you already compute phaseDates) */}
                          </div>
                          <p className="text-sm text-ink mt-2">{phase.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Small bottom breathing room so last card isn't jammed against edge */}
                <div className="h-2" />
              </div>
            </div>
          </div>

          <style jsx>{`
            @keyframes shimmer {
              0% {
                transform: translateX(-100%);
              }
              100% {
                transform: translateX(100%);
              }
            }
          `}</style>
        </div>
      )}
    </div>
  );
}
