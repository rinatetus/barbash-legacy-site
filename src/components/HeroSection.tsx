import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useCounter } from "@/hooks/useCounter";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

function StatCounter({ end, suffix = "", prefix = "", label, sublabel, active }: { end: number; suffix?: string; prefix?: string; label: string; sublabel?: string; active: boolean }) {
  const count = useCounter(end, 2200, 0, active);
  return (
    <div className="text-center">
      <div className="font-display text-4xl md:text-5xl lg:text-6xl text-primary font-semibold">
        {prefix}{count.toLocaleString()}{suffix}
      </div>
      <div className="mt-2 text-xs md:text-sm font-body text-muted-foreground uppercase tracking-[0.15em]">
        {label}
      </div>
      {sublabel && (
        <div className="text-[10px] font-body text-muted-foreground/60 tracking-wide mt-0.5">{sublabel}</div>
      )}
    </div>
  );
}

export default function HeroSection() {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden bg-background">
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, hsl(230, 35%, 40%) 0.5px, transparent 0)`,
        backgroundSize: '48px 48px'
      }} />

      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div ref={ref} className={`relative z-10 text-center max-w-6xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>

        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold leading-[1.05] text-navy-heading mb-4">
          {t.hero.slogan1}
        </h1>
        <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.05] mb-8">
          <span className="text-cardiac-gradient italic">{t.hero.slogan2}</span>
        </h2>

        <p className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-navy-heading tracking-wide mb-3">
          {t.hero.name}
        </p>

        <p className="font-display text-lg sm:text-xl md:text-2xl text-primary tracking-[0.08em] uppercase mb-2">
          {t.hero.title}
        </p>
        <p className="font-body text-base md:text-lg text-muted-foreground tracking-[0.1em] uppercase mb-4">
          {t.hero.institution}
        </p>

        <div className="relative inline-block mb-16">
          <div className="absolute inset-0 bg-primary/8 rounded-lg -m-3" />
          <p className="relative font-display text-base md:text-lg lg:text-xl text-primary font-semibold italic tracking-wide max-w-2xl mx-auto px-4 py-2">
            {t.hero.tagline}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-8">
          <StatCounter end={284} suffix="+" label={t.hero.stats.publications} active={isVisible} />
          <StatCounter end={9000} suffix="+" label={t.hero.stats.citations} active={isVisible} />
          <StatCounter end={7000} suffix="+" label={t.hero.stats.annualProcedures} active={isVisible} />
          <StatCounter end={23} suffix="+" label={t.hero.stats.yearsExperience} active={isVisible} />
          <div className="col-span-2 md:col-span-1">
            <StatCounter end={7} prefix="#" label={t.hero.stats.worldBest} sublabel={t.hero.stats.newsweek} active={isVisible} />
          </div>
        </div>
      </div>

      <a href="#procedures" className="absolute bottom-10 left-1/2 -translate-x-1/2 text-primary/40 hover:text-primary transition-colors" style={{ animation: 'scroll-indicator 2s ease-in-out infinite' }}>
        <ChevronDown className="w-6 h-6" />
      </a>
    </section>
  );
}
