import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useCounter } from "@/hooks/useCounter";
import { ChevronDown } from "lucide-react";
import HeartbeatIcon from "./HeartbeatIcon";

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

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden bg-background">
      {/* Subtle geometric pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, hsl(38, 70%, 50%) 0.5px, transparent 0)`,
        backgroundSize: '48px 48px'
      }} />

      {/* Gold accent lines */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div ref={ref} className={`relative z-10 text-center max-w-6xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        
        {/* Heartbeat icon */}
        <HeartbeatIcon className="w-16 h-16 md:w-20 md:h-20 text-primary mx-auto mb-6" />

        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold leading-[1.05] text-navy-heading mb-8">
          Saving Lives.{" "}
          <span className="text-gold-gradient italic">Every Heartbeat Counts.</span>
        </h1>

        {/* Name — big, bold, unmissable */}
        <p className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-navy-heading tracking-wide mb-3">
          Prof. Israel M. Barbash, MD
        </p>

        {/* Title — prominent gold */}
        <p className="font-display text-lg sm:text-xl md:text-2xl text-primary tracking-[0.08em] uppercase mb-2">
          Director of Cath Lab Services
        </p>
        <p className="font-body text-base md:text-lg text-muted-foreground tracking-[0.1em] uppercase mb-2">
          Leviev Heart Center &nbsp;·&nbsp; Sheba Medical Center
        </p>

        {/* Expertise tagline */}
        <p className="font-display text-sm md:text-base text-foreground/70 italic tracking-wide mb-16 max-w-2xl mx-auto">
          Leading the most demanding unit in one of the highest-ranked hospitals in the world
        </p>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-8">
          <StatCounter end={284} suffix="+" label="Publications" active={isVisible} />
          <StatCounter end={9000} suffix="+" label="Citations" active={isVisible} />
          <StatCounter end={6500} suffix="+" label="Annual Procedures" active={isVisible} />
          <StatCounter end={23} suffix="+" label="Years Experience" active={isVisible} />
          <div className="col-span-2 md:col-span-1">
            <StatCounter end={7} prefix="#" label="World's Best Hospital" sublabel="Newsweek 2026" active={isVisible} />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a href="#about" className="absolute bottom-10 left-1/2 -translate-x-1/2 text-primary/40 hover:text-primary transition-colors" style={{ animation: 'scroll-indicator 2s ease-in-out infinite' }}>
        <ChevronDown className="w-6 h-6" />
      </a>
    </section>
  );
}
