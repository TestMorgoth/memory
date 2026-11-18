type Props = {
  remainingSec: number;
  totalSec: number;
};

export function TimerBar({ remainingSec, totalSec }: Props) {
  const percentage = Math.max(0, Math.min(100, (remainingSec / totalSec) * 100));

  return (
    <div className="h-4 w-full overflow-hidden rounded-full bg-white/10">
      <div className="h-full rounded-full bg-brand-electric transition-all duration-500" style={{ width: `${percentage}%` }} />
    </div>
  );
}