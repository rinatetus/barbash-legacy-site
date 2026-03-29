import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import HeartbeatIcon from "./HeartbeatIcon";

export default function PhilosophySection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-24 md:py-32 px-6 bg-background relative">
      <div className="accent-divider" />
      
      <div ref={ref} className={`container mx-auto max-w-3xl text-center py-16 transition-all duration-1000 relative ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        {/* Background heart */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.04]">
          <HeartbeatIcon className="w-[300px] h-[300px] text-cardiac" />
        </div>

        <blockquote className="relative font-display text-xl md:text-2xl lg:text-3xl text-navy-heading leading-relaxed italic mb-8">
          "The numbers tell one story. But behind every statistic is a person — a father, a mother, a grandparent — who was given more time. That is the only metric that truly matters."
        </blockquote>

        <p className="text-sm text-primary font-body tracking-[0.15em] uppercase">
          — Prof. Israel M. Barbash
        </p>

        <p className="text-xs text-muted-foreground/50 mt-4 font-body italic">
          Note: This is an aspirational quote for the website. The actual quote should be confirmed with Prof. Barbash.
        </p>
      </div>

      <div className="accent-divider" />
    </section>
  );
}
