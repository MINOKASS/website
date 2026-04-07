"use client";

import { useMemo, useState } from "react";
import { FadeInImage } from "./fade-in-image";
import { SectionIntro } from "./section-intro";

const experiences = [
  {
    period: "2024 — Now",
    title: "AI 场景探索 / 产品研究",
    summary: "持续研究 AI Agent 与工作流产品的结合方式，关注真实业务中的使用价值与产品落地逻辑。",
    image: "/experience-agent.svg",
    alt: "抽象科技感 AI 产品研究视觉图",
  },
  {
    period: "2022 — 2024",
    title: "智慧城市 / 文旅项目实践",
    summary: "参与城市服务、文化旅游与数字平台相关项目，负责需求梳理、方案组织与体验路径设计。",
    image: "/experience-urban.svg",
    alt: "抽象城市与数字系统视觉图",
  },
  {
    period: "2020 — 2022",
    title: "产品与体验方向积累",
    summary: "围绕体验优化、系统规划与跨团队协同，形成以结构化思维驱动的工作方式。",
    image: "/contact-visual.svg",
    alt: "抽象数据分析与产品能力成长视觉图",
  },
];

export function ExperienceSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const prevIndex = useMemo(
    () => (activeIndex - 1 + experiences.length) % experiences.length,
    [activeIndex],
  );
  const nextIndex = useMemo(
    () => (activeIndex + 1) % experiences.length,
    [activeIndex],
  );

  const goPrev = () => setActiveIndex(prevIndex);
  const goNext = () => setActiveIndex(nextIndex);

  return (
    <section id="experience" className="space-y-10">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="animate-in-up scroll-reveal">
          <SectionIntro
            eyebrow="Experience"
            title="精选经历"
            description="用更具画面感的方式展示关键阶段，让项目方向、时间与成果表达更清晰。"
          />
        </div>

        <div className="animate-in-up scroll-reveal flex items-center gap-3 [animation-delay:100ms]">
          <button
            type="button"
            onClick={goPrev}
            aria-label="上一段经历"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white/88 text-lg text-zinc-900 shadow-[0_12px_28px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-0.5 hover:scale-105 hover:shadow-[0_18px_38px_rgba(15,23,42,0.12)]"
          >
            ←
          </button>
          <button
            type="button"
            onClick={goNext}
            aria-label="下一段经历"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-zinc-950 text-lg text-white shadow-[0_14px_32px_rgba(15,23,42,0.14)] transition-all duration-300 hover:-translate-y-0.5 hover:scale-105 hover:bg-zinc-800"
          >
            →
          </button>
        </div>
      </div>

      <div className="grid gap-5 lg:grid-cols-[0.24fr_1fr_0.24fr] lg:items-center">
        {[prevIndex, activeIndex, nextIndex].map((index, slotIndex) => {
          const item = experiences[index];
          const isActive = slotIndex === 1;

          return (
            <article
              key={`${item.title}-${slotIndex}`}
              className={`animate-in-up scroll-reveal group overflow-hidden rounded-[2rem] border border-black/8 bg-white/88 backdrop-blur-sm transition-all duration-500 ease-out [animation-fill-mode:both] ${
                isActive
                  ? "scale-100 shadow-[0_28px_80px_rgba(15,23,42,0.14)]"
                  : "hidden scale-[0.94] opacity-65 shadow-[0_16px_36px_rgba(15,23,42,0.06)] lg:block"
              }`}
              style={{ animationDelay: `${slotIndex * 90 + 80}ms` }}
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-zinc-100">
                <FadeInImage
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes={isActive ? "(max-width: 1024px) 100vw, 66vw" : "22vw"}
                  className={`object-cover transition-transform duration-700 ${
                    isActive ? "group-hover:scale-[1.02]" : "group-hover:scale-105"
                  }`}
                  priority={isActive}
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/18 via-transparent to-white/18" />
              </div>

              <div className="space-y-3 p-5 sm:p-6">
                <div className="flex flex-wrap items-center gap-3 text-sm text-zinc-500">
                  <span className="rounded-full border border-black/10 bg-black px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-white">
                    {item.period}
                  </span>
                  {!isActive && <span>Preview</span>}
                </div>
                <h3 className={`tracking-tight text-zinc-950 ${isActive ? "text-2xl" : "text-lg"}`}>
                  {item.title}
                </h3>
                <p className={`leading-8 text-zinc-600 ${isActive ? "text-base" : "text-sm"}`}>
                  {item.summary}
                </p>
              </div>
            </article>
          );
        })}
      </div>

      <div className="animate-in-up scroll-reveal flex items-center justify-center gap-2 [animation-delay:180ms]">
        {experiences.map((item, index) => (
          <button
            key={item.title}
            type="button"
            aria-label={`切换到 ${item.title}`}
            onClick={() => setActiveIndex(index)}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              index === activeIndex ? "w-10 bg-zinc-950" : "w-2.5 bg-zinc-300 hover:bg-zinc-400"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
