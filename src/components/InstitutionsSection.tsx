import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const institutions = [
  "Sheba Medical Center — #7 World's Best Hospital",
  "Top 10 Smart Hospital Globally",
  "National Heart, Lung, and Blood Institute (NIH)",
  "Cleveland Clinic",
  "EAPCI",
  "Tel Aviv University — Sackler Faculty of Medicine",
  "Israeli National TAVR Registry",
];

export default function InstitutionsSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-20 px-6 overflow-hidden border-y border-border">
      <div ref={ref} className={`transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <p className="text-xs uppercase tracking-[0.25em] text-primary mb-10 font-body text-center">Institutional Excellence</p>

        {/* Scrolling marquee */}
        <div className="relative">
          <div className="flex gap-8 animate-marquee whitespace-nowrap">
            {[...institutions, ...institutions].map((inst, i) => (
              <span
                key={i}
                className="inline-flex items-center px-6 py-3 rounded-full border border-border text-sm text-muted-foreground font-body tracking-wide flex-shrink-0"
              >
                {inst}
              </span>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
