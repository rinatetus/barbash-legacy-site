import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useCounter } from "@/hooks/useCounter";
import { Shield } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const statValues = [319, 766, 233, 50];
const statSuffixes = ["", "", "%", "%"];

export default function ResilienceSection() {
  const { ref, isVisible } = useScrollAnimation();
  const { t } = useLanguage();

  return (
    <section id="resilience" className="py-24 md:py-32 px-6 bg-deep-section text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cardiac/30 to-transparent" />

      <div ref={ref} className={`container mx-auto max-w-5xl transition-all duration-1000 relative z-10 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="text-center mb-12">
          <Shield className="w-10 h-10 text-cardiac mx-auto mb-4" />
          <h2 className="font-display text-3xl md:text-4xl text-white mb-2">
            {t.resilience.heading} <span className="text-accent-gradient italic">{t.resilience.headingAccent}</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto mb-12">
          <p className="text-sm md:text-base font-body text-white/80 leading-relaxed mb-6">
            {t.resilience.body}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {t.resilience.stats.map((s, i) => (
            <StatBlock key={i} end={statValues[i]} suffix={statSuffixes[i]} label={s.label} active={isVisible} />
          ))}
          <div className="text-center">
            <div className="font-display text-4xl md:text-5xl text-workshop-blue-light font-semibold">24/7</div>
            <div className="mt-2 text-xs font-body text-white/60 uppercase tracking-wider">{t.resilience.continuous}</div>
          </div>
          <div className="text-center">
            <div className="font-display text-4xl md:text-5xl text-workshop-blue-light font-semibold">100+</div>
            <div className="mt-2 text-xs font-body text-white/60 uppercase tracking-wider">{t.resilience.countries}</div>
          </div>
        </div>

        <div className="max-w-2xl mx-auto text-center border-t border-white/20 pt-10">
          <blockquote className="font-display text-lg md:text-xl text-white/90 italic leading-relaxed mb-4">
            {t.resilience.quote}
          </blockquote>
          <p className="text-xs text-workshop-blue-light font-body tracking-wider uppercase">{t.resilience.quoteSource}</p>
        </div>

        <div className="max-w-3xl mx-auto mt-10">
          <p className="text-sm font-body text-white/70 leading-relaxed text-center">
            {t.resilience.closing}
          </p>
        </div>
      </div>
    </section>
  );
}

function StatBlock({ end, suffix = "", label, active }: { end: number; suffix?: string; label: string; active: boolean }) {
  const count = useCounter(end, 2000, 0, active);
  return (
    <div className="text-center">
      <div className="font-display text-4xl md:text-5xl text-workshop-blue-light font-semibold">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="mt-2 text-xs font-body text-white/60 uppercase tracking-wider">{label}</div>
    </div>
  );
}
