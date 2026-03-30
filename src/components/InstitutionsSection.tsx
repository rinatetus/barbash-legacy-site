import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useLanguage } from "@/i18n/LanguageContext";

export default function InstitutionsSection() {
  const { ref, isVisible } = useScrollAnimation();
  const { t } = useLanguage();

  return (
    <section className="py-16 px-6 overflow-hidden bg-background border-y border-border">
      <div ref={ref} className={`transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <p className="text-xs uppercase tracking-[0.25em] text-primary mb-10 font-body text-center">{t.institutions.sectionLabel}</p>

        <div className="relative">
          <div className="flex gap-6 animate-marquee whitespace-nowrap">
            {[...t.institutions.items, ...t.institutions.items].map((inst, i) => (
              <span
                key={i}
                className="inline-flex items-center px-6 py-3 rounded-full border border-border text-sm text-muted-foreground font-body tracking-wide flex-shrink-0 hover:border-primary/50 transition-colors"
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
