import { SectionIntro } from "./section-intro";

const contacts = [
  {
    label: "Email",
    value: "hello@example.com",
    href: "mailto:hello@example.com",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-7 w-7 fill-none stroke-current stroke-[1.8]">
        <path d="M3.75 6.75h16.5v10.5H3.75z" rx="2" />
        <path d="m4.5 7.5 7.5 6 7.5-6" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    value: "github.com/yourname",
    href: "https://github.com/yourname",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-7 w-7 fill-current">
        <path d="M12 .5a12 12 0 0 0-3.794 23.39c.6.111.82-.26.82-.577v-2.02c-3.338.726-4.042-1.416-4.042-1.416-.546-1.388-1.333-1.757-1.333-1.757-1.09-.745.082-.73.082-.73 1.204.085 1.837 1.237 1.837 1.237 1.07 1.833 2.807 1.303 3.492.996.108-.776.419-1.304.762-1.603-2.665-.304-5.467-1.332-5.467-5.927 0-1.309.468-2.381 1.236-3.22-.124-.303-.536-1.526.117-3.18 0 0 1.008-.322 3.3 1.23a11.46 11.46 0 0 1 6.008 0c2.291-1.552 3.297-1.23 3.297-1.23.655 1.654.243 2.877.12 3.18.77.839 1.234 1.911 1.234 3.22 0 4.607-2.807 5.619-5.48 5.917.43.37.814 1.102.814 2.22v3.29c0 .32.216.694.825.576A12.002 12.002 0 0 0 12 .5Z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/yourname",
    href: "https://linkedin.com/in/yourname",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-7 w-7 fill-current">
        <path d="M4.98 3.5a1.74 1.74 0 1 1 0 3.48 1.74 1.74 0 0 1 0-3.48ZM3.5 8.5h2.96v12H3.5v-12ZM9.02 8.5h2.84v1.64h.04c.4-.75 1.36-1.88 3.42-1.88 3.66 0 4.34 2.4 4.34 5.52v6.72H16.7v-5.96c0-1.42-.03-3.24-1.98-3.24-1.98 0-2.28 1.55-2.28 3.14v6.06H9.02v-12Z" />
      </svg>
    ),
  },
];

export function ContactSection() {
  return (
    <section id="contact" className="space-y-10">
      <div className="animate-in-up scroll-reveal">
        <SectionIntro
          eyebrow="Contact"
          title="联系与协作"
          description="用更直接的方式建立连接。如果你正在寻找产品设计、智慧城市 / 文旅或 AI 场景方向的合作，欢迎联系我。"
        />
      </div>

      <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
        <article className="animate-in-up scroll-reveal relative overflow-hidden rounded-[2rem] border border-black/8 bg-zinc-950 px-6 py-8 text-white shadow-[0_24px_60px_rgba(15,23,42,0.16)] sm:px-8">
          <div className="absolute inset-y-0 right-0 w-[52%] bg-[radial-gradient(circle_at_center,rgba(125,211,252,0.20),transparent_68%)]" />
          <div className="relative">
            <p className="text-sm uppercase tracking-[0.28em] text-white/50">Connect</p>
            <h3 className="mt-4 max-w-xl text-3xl font-semibold tracking-tight sm:text-4xl">
              保持清晰表达，也保持开放连接。
            </h3>
            <p className="mt-4 max-w-2xl text-base leading-8 text-white/72">
              可用于商务合作、项目交流、职位机会或关于 AI 应用与复杂系统产品设计的进一步讨论。
            </p>
          </div>
        </article>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
          {contacts.map((item, index) => (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noreferrer" : undefined}
              className="animate-in-up scroll-reveal group rounded-[1.75rem] border border-black/8 bg-white/88 p-5 text-zinc-900 shadow-[0_18px_40px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_26px_54px_rgba(15,23,42,0.12)] [animation-fill-mode:both]"
              style={{ animationDelay: `${index * 120 + 100}ms` }}
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-black/8 bg-zinc-950 text-white transition-all duration-300 group-hover:scale-110 group-hover:bg-sky-500 group-hover:text-zinc-950">
                {item.icon}
              </div>
              <p className="mt-5 text-sm text-zinc-500">{item.label}</p>
              <p className="mt-2 text-base font-semibold tracking-tight text-zinc-950">
                {item.value}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
