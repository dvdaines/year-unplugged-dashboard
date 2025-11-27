// app/components/progress-bar.tsx
'use client';

import { useState, useEffect } from 'react';

interface ProgressBarProps {
  startDate: Date;
  totalDays: number;
}

export default function ProgressBar({ startDate, totalDays }: ProgressBarProps) {
  const [progress, setProgress] = useState(0);
  const [daysElapsed, setDaysElapsed] = useState(0);

  useEffect(() => {
    const calculateProgress = () => {
      const now = new Date();
      const diffTime = now.getTime() - startDate.getTime();
      const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
      
      const elapsed = Math.max(0, Math.min(diffDays, totalDays));
      const percentage = Math.min(100, (elapsed / totalDays) * 100);
      
      setProgress(percentage);
      setDaysElapsed(elapsed);
    };

    // Calculate immediately
    calculateProgress();

    // Update every minute for live feel
    const interval = setInterval(calculateProgress, 60000);
    return () => clearInterval(interval);
  }, [startDate, totalDays]);

  return (
    <div className="bg-panel border border-[rgba(30,27,22,0.08)] rounded-[var(--r-lg)] p-4">
      <div className="w-full bg-[rgba(30,27,22,0.1)] rounded-full h-3 mb-2 overflow-hidden relative">
        <div 
          className="h-3 rounded-full transition-all duration-500 relative overflow-hidden"
          style={{ 
            width: `${progress}%`,
            background: 'linear-gradient(90deg, #22c55e 0%, #16a34a 100%)',
          }}
        >
          {/* Shimmer effect */}
          <div 
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
            style={{
              animation: 'shimmer 2s infinite',
            }}
          />
        </div>
      </div>
      <p className="text-sm text-muted-ink">
        {daysElapsed} / {totalDays} days ({progress.toFixed(1)}%)
      </p>
    </div>
  );
}
