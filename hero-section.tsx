import { FadeInImage } from "./fade-in-image";

const stats = [
  { label: "聚焦方向", value: "智慧城市 / 文旅产品" },
  { label: "方法论", value: "策略、体验、系统协同" },
  { label: "工作状态", value: "持续探索 AI 与产品结合" },
];

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative overflow-hidden rounded-[2rem] border border-black/8 bg-white/88 px-6 py-16 shadow-[0_30px_80px_rgba(15,23,42,0.08)] backdrop-blur-xl sm:px-10 sm:py-20 lg:px-14"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-black/20 to-transparent" />
      <div className="absolute -right-24 top-10 h-56 w-56 rounded-full bg-[radial-gradient(circle,_rgba(99,102,241,0.16),_transparent_70%)] blur-2xl" />
      <div className="absolute -left-16 bottom-0 h-48 w-48 rounded-full bg-[radial-gradient(circle,_rgba(14,165,233,0.12),_transparent_70%)] blur-2xl" />

      <div className="relative grid gap-10 xl:grid-cols-[1.05fr_0.95fr] xl:items-center">
        <div className="space-y-8 animate-in-up">
          <div className="space-y-4">
            <span className="inline-flex items-center rounded-full border border-black/10 bg-black px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.32em] text-white shadow-lg shadow-black/10">
              Portfolio Website
            </span>
            <h1 className="max-w-4xl text-5xl font-semibold tracking-[-0.06em] text-zinc-950 sm:text-6xl lg:text-7xl">
              张三
            </h1>
            <p className="text-lg font-medium tracking-[-0.02em] text-zinc-700 sm:text-xl">
              智慧城市 / 文旅方向产品设计者
            </p>
          </div>

          <div className="max-w-2xl space-y-4 text-base leading-8 text-zinc-600 sm:text-lg">
            <p>
              我专注于将复杂系统梳理成清晰、可落地、可持续迭代的产品方案，关注城市空间、文旅体验与数字服务之间的连接。
            </p>
            <p>
              在策略与执行之间，我更擅长搭建产品结构、明确业务路径，并把 AI 新能力转化为真正可用的体验设计。
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href="#about"
              className="inline-flex h-12 items-center justify-center rounded-full bg-zinc-950 px-6 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-zinc-800 hover:shadow-lg hover:shadow-zinc-950/20"
            >
              关于我
            </a>
            <a
              href="#contact"
              className="inline-flex h-12 items-center justify-center rounded-full border border-zinc-300 bg-white/80 px-6 text-sm font-medium text-zinc-900 transition-all duration-300 hover:-translate-y-0.5 hover:border-zinc-900 hover:bg-white hover:shadow-lg"
            >
              联系我
            </a>
          </div>
        </div>

        <div className="grid gap-4 animate-in-up [animation-delay:160ms]">
          <div className="group relative overflow-hidden rounded-[1.8rem] border border-black/8 bg-zinc-100 shadow-[0_18px_40px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_26px_60px_rgba(15,23,42,0.12)]">
            <div className="relative aspect-[16/11] overflow-hidden">
              <FadeInImage
                src="/hero-visual.svg"
                alt="抽象城市与科技感视觉封面"
                fill
                priority
                sizes="(max-width: 1280px) 100vw, 42vw"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-white/24" />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {stats.map((item) => (
              <div
                key={item.label}
                className="rounded-[1.5rem] border border-black/8 bg-gradient-to-br from-zinc-50 to-white p-5 shadow-[0_12px_30px_rgba(15,23,42,0.06)] transition-transform duration-300 hover:-translate-y-1"
              >
                <p className="text-sm text-zinc-500">{item.label}</p>
                <p className="mt-2 text-lg font-semibold tracking-tight text-zinc-950">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
