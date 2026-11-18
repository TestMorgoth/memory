import { RulesPanel } from '../components/intro/RulesPanel';

type Props = { onStartLevel: () => void };

export function IntroScreen({ onStartLevel }: Props) {
  return (
    <div className="relative flex h-screen items-center justify-center overflow-hidden bg-brand-dark px-8">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-35"
        style={{ backgroundImage: "url('/assets/brand/bg-game.jpg')" }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/60 to-brand-dark/90" aria-hidden="true" />

      <div className="relative z-10 w-full">
        <RulesPanel onStart={onStartLevel} />
      </div>
    </div>
  );
}