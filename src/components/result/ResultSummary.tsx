import { COPY } from '../../config/copy.config';
import { formatSeconds } from '../../lib/time';

type Props = {
  totalElapsedSec: number;
  attempts: number;
  message: string;
};

export function ResultSummary({ totalElapsedSec, attempts, message }: Props) {
  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-6 rounded-kiosk bg-white/10 p-10 text-white shadow-kiosk">
      <h2 className="text-6xl font-black">Risultato finale</h2>
      <div className="text-3xl">Tempo: {formatSeconds(totalElapsedSec)}</div>
      <div className="text-3xl">Tentativi: {attempts}</div>
      <p className="text-4xl font-semibold">{message}</p>
      <div className="pt-4 text-xl opacity-80">{COPY.finalRestart}</div>
    </div>
  );
}