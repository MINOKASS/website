import { AboutSection } from "@/components/about-section";
import { ContactSection } from "@/components/contact-section";
import { ExperienceSection } from "@/components/experience-section";
import { HeroSection } from "@/components/hero-section";
import { SkillsSection } from "@/components/skills-section";

const navItems = [
  { label: "关于", href: "#about" },
  { label: "技能", href: "#skills" },
  { label: "经历", href: "#experience" },
  { label: "联系", href: "#contact" },
];

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-0 h-[34rem] bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.9),rgba(244,244,245,0.7)_35%,rgba(244,244,245,0)_70%)]" />
        <div className="absolute left-1/2 top-0 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.10),rgba(255,255,255,0)_68%)] blur-3xl" />
        <div className="absolute right-0 top-64 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(56,189,248,0.10),rgba(255,255,255,0)_72%)] blur-3xl" />
      </div>

      <header className="sticky top-0 z-30 border-b border-black/6 bg-white/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-8 lg:px-10">
          <a href="#home" className="text-sm font-semibold tracking-[0.24em] text-zinc-950 uppercase">
            ZHANG SAN
          </a>
          <nav className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-zinc-600 transition-colors duration-300 hover:text-zinc-950"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <div className="mx-auto flex w-full max-w-7xl flex-col gap-24 px-6 py-8 sm:px-8 sm:py-10 lg:px-10 lg:gap-28">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ContactSection />
      </div>
    </main>
  );
}
