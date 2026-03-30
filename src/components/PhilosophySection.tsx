import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useLanguage } from "@/i18n/LanguageContext";

export default function PhilosophySection() {
  const { ref, isVisible } = useScrollAnimation();
  const { t } = useLanguage();

  return (
    <section className="py-24 md:py-32 px-6 bg-background relative">
      <div className="accent-divider" />
      
      <div ref={ref} className={`container mx-auto max-w-3xl text-center py-16 transition-all duration-1000 relative ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <blockquote className="relative font-display text-xl md:text-2xl lg:text-3xl text-navy-heading leading-relaxed italic mb-8">
          {t.philosophy.quote}
        </blockquote>

        <p className="text-sm text-primary font-body tracking-[0.15em] uppercase">
          {t.philosophy.source}
        </p>

        <p className="text-xs text-muted-foreground/50 mt-4 font-body italic">
          {t.philosophy.note}
        </p>
      </div>

      <div className="accent-divider" />
    </section>
  );
}
