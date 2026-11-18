import { COPY } from '../../config/copy.config';

type Props = {
  onStart: () => void;
};

export function RulesPanel({ onStart }: Props) {
  return (
    <div className="mx-auto flex max-w-4xl flex-col gap-8 rounded-kiosk border border-white/15 bg-black/35 p-10 text-white shadow-kiosk backdrop-blur-sm">
      <h2 className="text-4xl font-black md:text-5xl">Come si gioca</h2>

      <ul className="space-y-4 text-xl leading-relaxed md:text-2xl">
        {COPY.rules.map((rule) => (
          <li key={rule} className="flex items-start gap-3">
            <span className="mt-1 text-brand-ice">•</span>
            <span>{rule}</span>
          </li>
        ))}
      </ul>

      <button
        type="button"
        onClick={onStart}
        className="mt-4 self-start rounded-full bg-brand-blue px-8 py-4 text-xl font-bold text-white shadow-kiosk transition-transform active:scale-[0.98] md:text-2xl"
      >
        {COPY.ctaStart}
      </button>
    </div>
  );
}