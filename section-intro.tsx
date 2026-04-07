export function SectionIntro({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="max-w-2xl space-y-4">
      <span className="inline-flex items-center rounded-full border border-black/10 bg-white/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500 shadow-sm backdrop-blur-sm">
        {eyebrow}
      </span>
      <h2 className="text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl">
        {title}
      </h2>
      <p className="text-base leading-8 text-zinc-600 sm:text-lg">{description}</p>
    </div>
  );
}
