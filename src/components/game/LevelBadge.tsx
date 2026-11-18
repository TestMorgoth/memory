type Props = { title: string };

export function LevelBadge({ title }: Props) {
  return <div className="rounded-full bg-brand-blue px-5 py-2 text-lg font-bold text-white">{title}</div>;
}