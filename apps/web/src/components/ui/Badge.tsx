type BadgeTone = 'green' | 'yellow' | 'neutral' | 'red' | 'blue';

type BadgeProps = {
  tone?: BadgeTone;
  children: React.ReactNode;
  className?: string;
};

const toneClasses: Record<BadgeTone, string> = {
  green: 'bg-green-500/15 text-green-300 border border-green-500/30',
  yellow: 'bg-yellow-500/15 text-yellow-300 border border-yellow-500/30',
  neutral: 'bg-neutral-800 text-neutral-200 border border-neutral-700',
  red: 'bg-red-500/15 text-red-300 border border-red-500/30',
  blue: 'bg-blue-500/15 text-blue-300 border border-blue-500/30',
};

export default function Badge({ tone = 'neutral', children, className = '' }: BadgeProps) {
  return (
    <span className={`inline-flex items-center rounded-full px-2 py-1 text-[10px] font-semibold ${toneClasses[tone]} ${className}`}>
      {children}
    </span>
  );
}

type EventTypeBadgeProps = {
  type: string;
};

const typeLabels: Record<string, string> = {
  show: 'Show',
  cinema: 'Cinema',
  theater: 'Teatro',
  festival: 'Festival',
  sport: 'Esporte',
};

const typeColors: Record<string, string> = {
  show: 'bg-rose-500/15 text-rose-300 border border-rose-500/30',
  cinema: 'bg-blue-500/15 text-blue-300 border border-blue-500/30',
  theater: 'bg-violet-500/15 text-violet-300 border border-violet-500/30',
  festival: 'bg-amber-500/15 text-amber-300 border border-amber-500/30',
  sport: 'bg-emerald-500/15 text-emerald-300 border border-emerald-500/30',
};

export function EventTypeBadge({ type }: EventTypeBadgeProps) {
  const label = typeLabels[type] ?? 'Evento';
  return (
    <span className={`inline-flex items-center rounded-full px-2 py-1 text-[10px] font-semibold ${typeColors[type] ?? 'bg-neutral-800 text-neutral-200 border border-neutral-700'}`}>
      {label}
    </span>
  );
}
