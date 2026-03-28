import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const milestones = [
  { year: "1997", title: "Medical Degree", desc: "Ben-Gurion University of the Negev" },
  { year: "2003–09", title: "Residency", desc: "Internal Medicine & Cardiology, Sheba Medical Center" },
  { year: "2009–11", title: "NIH Fellowship", desc: "NHLBI, National Institutes of Health, Bethesda, MD" },
  { year: "2011–13", title: "Interventional Fellowship", desc: "MedStar Washington Hospital Center / Cleveland Clinic" },
  { year: "Present", title: "Director, Cath Lab Services", desc: "Leviev Heart Center, Sheba Medical Center" },
  { year: "Present", title: "Associate Professor", desc: "Sackler Faculty of Medicine, Tel Aviv University" },
];

export default function AboutSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-24 md:py-32 px-6">
      <div ref={ref} className={`container mx-auto max-w-6xl transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="grid md:grid-cols-5 gap-12 md:gap-16 items-start">
          {/* Timeline - left */}
          <div className="md:col-span-3 order-2 md:order-1">
            <p className="text-xs uppercase tracking-[0.25em] text-primary mb-3 font-body">Biography</p>
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-10">
              A Career Defined by <span className="text-gold-gradient italic">Excellence</span>
            </h2>

            <div className="space-y-0 relative">
              {/* Vertical line */}
              <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border" />
              {milestones.map((m, i) => (
                <div key={i} className="flex gap-5 pb-7 last:pb-0 relative">
                  <div className="mt-1.5 w-[15px] h-[15px] rounded-full border-2 border-primary bg-background flex-shrink-0 z-10" />
                  <div>
                    <span className="text-xs font-body text-primary tracking-wider">{m.year}</span>
                    <h3 className="font-display text-lg text-foreground mt-0.5">{m.title}</h3>
                    <p className="text-sm text-muted-foreground font-body">{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-10 text-sm md:text-base text-muted-foreground leading-relaxed font-body max-w-xl">
              Professor Barbash is among the world's leading experts in transcatheter aortic valve replacement (TAVR) and structural heart interventions. With training at the National Institutes of Health and Cleveland Clinic, and over two decades of clinical and research excellence, he leads one of the largest catheterization laboratories in Israel — performing over 3,000 procedures annually at Sheba Medical Center, ranked #7 in the world by Newsweek.
            </p>
          </div>

          {/* Photo placeholder - right */}
          <div className="md:col-span-2 order-1 md:order-2 flex justify-center">
            <div className="w-56 h-56 md:w-72 md:h-72 rounded-full gold-border-circle bg-secondary flex items-center justify-center">
              <div className="text-center">
                <svg className="w-16 h-16 mx-auto text-primary/40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
                <p className="text-xs text-muted-foreground mt-2 font-body">Professional Photo</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
