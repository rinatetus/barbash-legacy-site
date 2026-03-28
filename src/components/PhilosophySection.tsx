import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function PhilosophySection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-24 md:py-32 px-6 bg-background relative">
      {/* Gold dividers */}
      <div className="gold-divider" />
      
      <div ref={ref} className={`container mx-auto max-w-3xl text-center py-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <blockquote className="font-display text-xl md:text-2xl lg:text-3xl text-navy-heading leading-relaxed italic mb-8">
          "The numbers tell one story. But behind every statistic is a person — a father, a mother, a grandparent — who was given more time. That is the only metric that truly matters."
        </blockquote>

        <p className="text-sm text-primary font-body tracking-[0.15em] uppercase">
          — Prof. Israel M. Barbash
        </p>

        <p className="text-xs text-muted-foreground/50 mt-4 font-body italic">
          Note: This is an aspirational quote for the website. The actual quote should be confirmed with Prof. Barbash.
        </p>
      </div>

      <div className="gold-divider" />
    </section>
  );
}
