import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Heart, Activity, Zap, Brain } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const icons = [Heart, Activity, Zap, Brain];

export default function ExpertiseSection() {
  const { ref, isVisible } = useScrollAnimation();
  const { t } = useLanguage();

  return (
    <section id="expertise" className="py-24 md:py-32 px-6 bg-card relative overflow-hidden">
      <div ref={ref} className={`container mx-auto max-w-6xl transition-all duration-1000 relative z-10 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.25em] text-primary mb-3 font-body">{t.expertise.sectionLabel}</p>
          <h2 className="font-display text-3xl md:text-4xl text-navy-heading">
            {t.expertise.heading} <span className="text-accent-gradient italic">{t.expertise.headingAccent}</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {t.expertise.cards.map((c, i) => {
            const Icon = icons[i];
            return (
              <div
                key={i}
                className="card-luxury p-8 group cursor-default"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <Icon className="w-8 h-8 text-cardiac mb-5 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="font-display text-xl text-navy-heading mb-3">{c.title}</h3>
                <p className="text-sm text-muted-foreground font-body leading-relaxed">{c.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
