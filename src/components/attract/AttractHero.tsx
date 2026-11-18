import { COPY } from '../../config/copy.config';

export function AttractHero() {
  return (
    <div className="mx-auto flex max-w-5xl flex-col items-center justify-center gap-8 text-center text-white">
      <div className="rounded-full border border-white/20 bg-white/10 px-6 py-2 text-sm font-semibold uppercase tracking-[0.25em] shadow-kiosk md:text-base">
	  <img src="/assets/brand/qrcode2.jpg" width={150} height={150} />
      </div>
	   <p className="max-w-3xl text-xl font-medium leading-relaxed opacity-100 drop-shadow-[0_4px_20px_rgba(0,0,0,0.55)] md:text-3xl">
	   Registrati al sito</p>

      <h1 className="text-5xl font-black tracking-tight drop-shadow-[0_8px_30px_rgba(0,0,0,0.55)] md:text-7xl">
        {COPY.attractTitle}
      </h1>

      <p className="max-w-3xl text-xl font-medium leading-relaxed opacity-100 drop-shadow-[0_4px_20px_rgba(0,0,0,0.55)] md:text-3xl">
        Metti alla prova la tua memoria: abbina le carte e supera i livelli!
      </p>

      <div className="mt-4 rounded-full bg-brand-blue px-8 py-4 text-2xl font-bold text-white shadow-kiosk">
        {COPY.attractSubtitle}
      </div>
    </div>
  );
}