import { FadeInImage } from "./fade-in-image";
import { SectionIntro } from "./section-intro";

const capabilities = [
  "产品设计：从需求梳理到信息架构与体验设计",
  "系统规划：面向复杂业务场景搭建可演进的产品框架",
  "AI 应用理解：关注 Agent、工作流与场景落地方式",
];

export function AboutSection() {
  return (
    <section id="about" className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16">
      <div className="space-y-6 animate-in-up scroll-reveal">
        <SectionIntro
          eyebrow="About"
          title="关于我"
          description="以系统化思维理解业务，以克制而清晰的设计推进产品落地，持续关注智慧城市、文旅服务与 AI 工具化应用。"
        />

        <div className="group relative overflow-hidden rounded-[1.9rem] border border-black/8 bg-zinc-100 shadow-[0_18px_40px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_54px_rgba(15,23,42,0.12)]">
          <div className="relative aspect-[4/5] sm:aspect-[16/10] lg:aspect-[4/5]">
            <FadeInImage
              src="/about-visual.svg"
              alt="抽象建筑与系统规划视觉图"
              fill
              sizes="(max-width: 1024px) 100vw, 30vw"
              className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/12 via-transparent to-white/20" />
          </div>
        </div>
      </div>

      <div className="grid gap-5 animate-in-up scroll-reveal [animation-delay:120ms]">
        <article className="rounded-[1.75rem] border border-black/8 bg-white/86 p-6 shadow-[0_18px_40px_rgba(15,23,42,0.06)] backdrop-blur-sm">
          <p className="text-sm font-medium text-zinc-500">教育背景</p>
          <h3 className="mt-3 text-xl font-semibold tracking-tight text-zinc-950">
            城市、设计与数字产品交叉背景
          </h3>
          <p className="mt-3 leading-8 text-zinc-600">
            具备与城市空间、服务体验、产品策略相关的学习与研究经历，关注复杂场景中的信息组织与用户体验优化。
          </p>
        </article>

        <article className="rounded-[1.75rem] border border-black/8 bg-white/86 p-6 shadow-[0_18px_40px_rgba(15,23,42,0.06)] backdrop-blur-sm">
          <p className="text-sm font-medium text-zinc-500">经历概述</p>
          <h3 className="mt-3 text-xl font-semibold tracking-tight text-zinc-950">
            面向智慧城市与文旅场景的产品实践
          </h3>
          <p className="mt-3 leading-8 text-zinc-600">
            参与过从前期研究、产品方案、流程设计到协同推进的多类项目，更关注方向判断、系统能力搭建和长期价值。
          </p>
        </article>

        <article className="rounded-[1.75rem] border border-black/8 bg-white/86 p-6 shadow-[0_18px_40px_rgba(15,23,42,0.06)] backdrop-blur-sm">
          <p className="text-sm font-medium text-zinc-500">核心能力</p>
          <div className="mt-4 grid gap-3">
            {capabilities.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-zinc-200/80 bg-zinc-50 px-4 py-3 text-sm leading-7 text-zinc-700"
              >
                {item}
              </div>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}
