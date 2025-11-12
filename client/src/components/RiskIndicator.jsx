export default function RiskIndicator({ level, percentage, label }) {
  const getRiskColor = () => {
    if (percentage <= 25) return 'text-emerald-500';
    if (percentage <= 50) return 'text-amber-400';
    if (percentage <= 75) return 'text-amber-500';
    return 'text-red-600';
  };

  const circumference = 2 * Math.PI * 45;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className="flex flex-col items-center gap-2" data-testid="risk-indicator">
      <div className="relative w-28 h-28">
        <svg className="w-full h-full transform -rotate-90">
          <circle
            cx="56"
            cy="56"
            r="45"
            stroke="currentColor"
            strokeWidth="8"
            fill="none"
            className="text-muted/30"
          />
          <circle
            cx="56"
            cy="56"
            r="45"
            stroke="currentColor"
            strokeWidth="8"
            fill="none"
            className={getRiskColor()}
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className={`text-2xl font-bold ${getRiskColor()}`} data-testid="text-percentage">
            {percentage}%
          </span>
        </div>
      </div>
      {label && (
        <span className="text-sm font-medium text-foreground text-center" data-testid="text-label">
          {label}
        </span>
      )}
    </div>
  );
}
