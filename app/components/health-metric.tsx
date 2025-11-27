// app/components/health-metric.tsx
'use client';

interface HealthMetricProps {
  title: string;
  value: string | number;
  unit: string;
  change?: number; // Percentage change from baseline
  baseline?: string | number;
  lowerIsBetter?: boolean; // For metrics where lower values are better (e.g., Pace of Aging)
}

export default function HealthMetric({ title, value, unit, change, baseline, lowerIsBetter = false }: HealthMetricProps) {
  const isPositive = change !== undefined && change > 0;
  const isNegative = change !== undefined && change < 0;
  
  // For metrics where lower is better, flip the color logic
  const isGoodChange = lowerIsBetter 
    ? (isNegative) // Lower value is better
    : (isPositive); // Higher value is better
    
  const changeColor = change !== undefined
    ? (isGoodChange ? 'text-green-600' : 'text-red-600')
    : 'text-muted-ink';

  return (
    <div className="bg-panel border border-[rgba(30,27,22,0.08)] rounded-[var(--r-lg)] p-6">
      <h3 className="text-sm font-semibold text-muted-ink mb-2">{title}</h3>
      <div className="flex items-baseline gap-2 mb-1">
        <p className="text-3xl font-display text-ink">{value}</p>
        {change !== undefined && (
          <span className={`text-sm font-semibold ${changeColor}`}>
            {isPositive ? '↑' : isNegative ? '↓' : ''} {Math.abs(change).toFixed(1)}%
          </span>
        )}
      </div>
      <div className="flex items-center justify-between">
        <p className="text-xs text-muted-ink">{unit}</p>
        {baseline !== undefined && (
          <p className="text-xs text-muted-ink">
            Baseline: {baseline}
          </p>
        )}
      </div>
    </div>
  );
}
