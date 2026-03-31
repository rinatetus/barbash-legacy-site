import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Stethoscope, HeartPulse, Activity, CircleDot, ArrowRight } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

export default function ProceduresSection() {
  const { ref, isVisible } = useScrollAnimation();
  const { t } = useLanguage();

  const cats = t.procedures.categories;
  const categories = [
    { icon: Stethoscope, ...cats.diagnostic },
    { icon: HeartPulse, ...cats.coronary },
    { icon: Activity, ...cats.structural },
    { icon: CircleDot, ...cats.hemodynamic },
    { icon: ArrowRight, ...cats.peripheral },
  ];

  return (
    <section id="procedures" className="py-16 md:py-32 px-4 sm:px-6 bg-dark-section text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-workshop-blue/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-workshop-blue/30 to-transparent" />

      <div ref={ref} className={`container mx-auto max-w-6xl transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="text-center mb-10 md:mb-16">
          <p className="text-xs uppercase tracking-[0.25em] text-workshop-blue-light mb-3 font-body">{t.procedures.sectionLabel}</p>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-white mb-3 sm:mb-4">
            <span className="text-accent-gradient">~7,000</span> {t.procedures.heading}
          </h2>
          <p className="font-body text-xs sm:text-sm text-white/70 tracking-wide px-2">
            {t.procedures.subheading}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {categories.map((cat, i) => (
            <div
              key={i}
              className={`p-4 sm:p-6 rounded-lg border border-workshop-blue/20 bg-white/5 backdrop-blur-sm hover:border-workshop-blue/50 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-6 scale-[0.97]'}`}
              style={{ transitionDelay: `${i * 120 + 200}ms` }}
            >
              <cat.icon className="w-6 h-6 sm:w-7 sm:h-7 text-cardiac mb-3 sm:mb-4" />
              <h3 className="font-display text-base sm:text-lg text-white mb-3 sm:mb-4">{cat.title}</h3>
              <ul className="space-y-1.5">
                {cat.items.map((item, j) => (
                  <li key={j} className="text-xs font-body text-white/70 flex items-start gap-2">
                    <span className="w-1 h-1 rounded-full bg-cardiac flex-shrink-0 mt-1.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}