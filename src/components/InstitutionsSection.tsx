import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useLanguage } from "@/i18n/LanguageContext";

export default function InstitutionsSection() {
  const { ref, isVisible } = useScrollAnimation();
  const { t, lang } = useLanguage();

  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 overflow-hidden bg-background border-y border-border">
      <div ref={ref} className={`transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <p className="text-xs uppercase tracking-[0.25em] text-primary mb-8 sm:mb-10 font-body text-center">{t.institutions.sectionLabel}</p>

        <div className="relative">
          <div className={`flex gap-4 sm:gap-6 whitespace-nowrap ${lang === 'he' ? 'animate-marquee-rtl' : 'animate-marquee'}`}>
            {[...t.institutions.items, ...t.institutions.items].map((inst, i) => (
              <span
                key={i}
                className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 rounded-full border border-border text-xs sm:text-sm text-muted-foreground font-body tracking-wide flex-shrink-0 hover:border-primary/50 transition-colors"
              >
                {inst}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}