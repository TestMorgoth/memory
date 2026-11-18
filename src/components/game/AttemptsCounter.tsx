type Props = { attempts: number };

export function AttemptsCounter({ attempts }: Props) {
  return <div className="rounded-full bg-white/10 px-4 py-2 text-xl font-semibold text-white">Tentativi: {attempts}</div>;
}