import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const institutions = [
  "Sheba Medical Center — #7 World's Best Hospital",
  "NIH / NHLBI",
  "Cleveland Clinic",
  "Johns Hopkins University",
  "Tel Aviv University — Sackler Faculty of Medicine",
  "EAPCI / ESC",
  "Newsweek Top 10",
  "Israel Heart Society",
  "Sanofi Center of Excellence",
  "Talpiot Medical Leadership Program",
];

export default function InstitutionsSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-16 px-6 overflow-hidden bg-background border-y border-border">
      <div ref={ref} className={`transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <p className="text-xs uppercase tracking-[0.25em] text-primary mb-10 font-body text-center">Institutional Excellence</p>

        <div className="relative">
          <div className="flex gap-6 animate-marquee whitespace-nowrap">
            {[...institutions, ...institutions].map((inst, i) => (
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
