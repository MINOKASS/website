import { FadeInImage } from "./fade-in-image";
import { SectionIntro } from "./section-intro";

const skills = [
  {
    name: "产品设计",
    level: "Expert",
    description: "擅长梳理复杂需求、构建信息架构与设计产品交互路径。",
    tags: ["信息架构", "交互设计", "产品策略"],
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 fill-none stroke-current stroke-[1.8]">
        <path d="M4 17.5 17.5 4 20 6.5 6.5 20H4v-2.5Z" />
        <path d="M14.5 7 17 9.5" />
      </svg>
    ),
  },
  {
    name: "智慧城市 / 文旅",
    level: "Advanced",
    description: "理解场景运营、服务链路与空间数字化体验之间的关系。",
    tags: ["场景规划", "数字空间", "服务链路"],
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 fill-none stroke-current stroke-[1.8]">
        <path d="M3.5 20.5h17" />
        <path d="M6 20.5v-8l4-2.5v10.5" />
        <path d="M10 8.5 15 5v15.5" />
        <path d="M15 10.5 19 8v12.5" />
      </svg>
    ),
  },
  {
    name: "AI Agent 理解",
    level: "Growing",
    description: "关注 Agent 工作方式、任务流设计以及产品化应用场景。",
    tags: ["工作流", "任务拆解", "Agent 场景"],
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 fill-none stroke-current stroke-[1.8]">
        <rect x="4" y="4" width="6" height="6" rx="2" />
        <rect x="14" y="4" width="6" height="6" rx="2" />
        <rect x="9" y="14" width="6" height="6" rx="2" />
        <path d="M10 7h4" />
        <path d="M12 10v4" />
      </svg>
    ),
  },
  {
    name: "数据分析",
    level: "Applied",
    description: "能够结合行为数据与业务指标辅助方向判断与方案优化。",
    tags: ["指标分析", "洞察提炼", "方案优化"],
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 fill-none stroke-current stroke-[1.8]">
        <path d="M4 19.5h16" />
        <path d="M7 16.5v-5" />
        <path d="M12 16.5v-9" />
        <path d="M17 16.5v-3" />
      </svg>
    ),
  },
];

const levelDots: Record<string, number> = {
  Expert: 4,
  Advanced: 3,
  Growing: 3,
  Applied: 2,
};

export function SkillsSection() {
  return (
    <section id="skills" className="space-y-10">
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
        <div className="animate-in-up scroll-reveal">
          <SectionIntro
            eyebrow="Skills"
            title="技能与优势"
            description="用结构化的方法解决复杂问题，用产品视角连接业务目标、用户体验和未来技术。"
          />
        </div>

        <div className="animate-in-up scroll-reveal [animation-delay:100ms]">
          <div className="group relative overflow-hidden rounded-[1.8rem] border border-black/8 bg-zinc-100 shadow-[0_18px_40px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_54px_rgba(15,23,42,0.12)]">
            <div className="relative aspect-[16/7]">
              <FadeInImage
                src="/skills-visual.svg"
                alt="抽象数据与技能结构视觉图"
                fill
                sizes="(max-width: 1024px) 100vw, 52vw"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white/28 via-transparent to-black/8" />
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {skills.map((skill, index) => (
          <article
            key={skill.name}
            className="animate-in-up scroll-reveal rounded-[1.75rem] border border-black/8 bg-white/88 p-6 shadow-[0_20px_44px_rgba(15,23,42,0.06)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_58px_rgba(15,23,42,0.1)] [animation-fill-mode:both]"
            style={{ animationDelay: `${index * 100 + 80}ms` }}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-black/8 bg-zinc-950 text-white shadow-[0_10px_24px_rgba(15,23,42,0.12)] transition-all duration-300 hover:scale-105 hover:bg-sky-500 hover:text-zinc-950">
                  {skill.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold tracking-tight text-zinc-950">
                    {skill.name}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-zinc-600">
                    {skill.description}
                  </p>
                </div>
              </div>

              <div className="flex shrink-0 items-center gap-1.5 pt-1">
                {Array.from({ length: 4 }).map((_, dotIndex) => (
                  <span
                    key={`${skill.name}-${dotIndex}`}
                    className={`h-2.5 w-2.5 rounded-full ${
                      dotIndex < levelDots[skill.level] ? "bg-zinc-950" : "bg-zinc-200"
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {skill.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-xs font-medium tracking-[0.02em] text-zinc-600 transition-colors duration-300 hover:border-sky-300 hover:bg-sky-50 hover:text-sky-700"
                >
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
