import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useCounter } from "@/hooks/useCounter";
import { ChevronDown } from "lucide-react";

function StatCounter({ end, suffix = "", label, active }: { end: number; suffix?: string; label: string; active: boolean }) {
  const count = useCounter(end, 2200, 0, active);
  return (
    <div className="text-center">
      <div className="font-display text-4xl md:text-5xl lg:text-6xl text-primary">
        {suffix === "#" ? `#${count}` : `${count.toLocaleString()}${suffix}`}
      </div>
      <div className="mt-2 text-xs md:text-sm font-body text-muted-foreground uppercase tracking-[0.2em]">
        {label}
      </div>
    </div>
  );
}

export default function HeroSection() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--warm-white)) 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }} />

      <div ref={ref} className={`relative z-10 text-center max-w-5xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        {/* Decorative line */}
        <div className="w-12 h-px bg-primary mx-auto mb-8" />

        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.1] text-foreground mb-6">
          Saving Lives Through{" "}
          <span className="text-gold-gradient italic">Innovation</span>
        </h1>

        <p className="font-body text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-4">
          Prof. Israel M. Barbash, MD
        </p>
        <p className="font-body text-sm text-muted-foreground/70 tracking-[0.15em] uppercase mb-16">
          Interventional Cardiologist &nbsp;·&nbsp; Sheba Medical Center &nbsp;·&nbsp; Tel Aviv University
        </p>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          <StatCounter end={284} suffix="+" label="Publications" active={isVisible} />
          <StatCounter end={9000} suffix="+" label="Citations" active={isVisible} />
          <StatCounter end={23} suffix="+" label="Years Experience" active={isVisible} />
          <StatCounter end={7} suffix="#" label="World's Best Hospital" active={isVisible} />
        </div>

        <div className="mt-4 text-xs text-muted-foreground/50 tracking-wide">
          Newsweek 2026
        </div>
      </div>

      {/* Scroll indicator */}
      <a href="#about" className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground/40 hover:text-primary transition-colors" style={{ animation: 'scroll-indicator 2s ease-in-out infinite' }}>
        <ChevronDown className="w-6 h-6" />
      </a>
    </section>
  );
}
