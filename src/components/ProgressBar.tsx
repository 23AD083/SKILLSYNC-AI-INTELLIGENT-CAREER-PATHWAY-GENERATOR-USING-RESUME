interface ProgressBarProps {
  progress: number;
  color?: 'blue' | 'emerald' | 'amber' | 'red';
  size?: 'sm' | 'md' | 'lg';
  showLabel?: boolean;
  className?: string;
}

export default function ProgressBar({
  progress,
  color = 'blue',
  size = 'md',
  showLabel = false,
  className = ''
}: ProgressBarProps) {
  const colors = {
    blue: 'bg-blue-600',
    emerald: 'bg-emerald-500',
    amber: 'bg-amber-500',
    red: 'bg-red-500',
  };

  const sizes = {
    sm: 'h-1.5',
    md: 'h-2.5',
    lg: 'h-3',
  };

  const clampedProgress = Math.min(Math.max(progress, 0), 100);

  return (
    <div className={className}>
      {showLabel && (
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-700">Progress</span>
          <span className="text-sm font-semibold text-gray-900">{clampedProgress}%</span>
        </div>
      )}
      <div className={`w-full bg-gray-200 rounded-full overflow-hidden ${sizes[size]}`}>
        <div
          className={`${colors[color]} ${sizes[size]} rounded-full transition-all duration-500 ease-out`}
          style={{ width: `${clampedProgress}%` }}
        ></div>
      </div>
    </div>
  );
}
