import { AttractHero } from '../components/attract/AttractHero';

type Props = { onStart: () => void };

export function AttractScreen({ onStart }: Props) {
  return (
    <button
      type="button"
      onClick={onStart}
      className="relative h-screen w-screen overflow-hidden bg-brand-dark text-white"
    >
      <div
        className="absolute inset-0 bg-cover bg-center opacity-60"
        style={{ backgroundImage: "url('/assets/brand/bg-attract.jpg')" }}
        aria-hidden="true"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-brand-dark/35 to-brand-dark/85" aria-hidden="true" />

      <div className="relative z-10 flex h-full w-full items-center justify-center px-8">
        <AttractHero />
      </div>
    </button>
  );
}