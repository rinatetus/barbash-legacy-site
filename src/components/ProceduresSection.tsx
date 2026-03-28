import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Stethoscope, HeartPulse, Activity, CircleDot, ArrowRight } from "lucide-react";

const categories = [
  {
    icon: Stethoscope,
    title: "Diagnostic",
    items: ["Coronary Angiography", "Right & Left Heart Catheterization", "FFR/iFR", "IVUS", "OCT"],
  },
  {
    icon: HeartPulse,
    title: "Coronary Interventions (PCI)",
    items: ["PCI with Drug-Eluting Stents", "CTO PCI", "Left Main PCI", "Bifurcation Stenting", "Rotational Atherectomy", "Intravascular Lithotripsy", "Balloon Angioplasty", "Drug-Coated Balloons", "Thrombectomy"],
  },
  {
    icon: Activity,
    title: "Structural Heart",
    items: ["TAVR/TAVI", "Transcaval Access", "Balloon Aortic Valvuloplasty", "MitraClip/TEER", "Tricuspid Interventions", "ASD/PFO Closure", "Left Atrial Appendage Closure (Watchman)", "Alcohol Septal Ablation"],
  },
  {
    icon: CircleDot,
    title: "Hemodynamic Support",
    items: ["IABP", "Impella", "ECMO (100+/year)", "Pericardiocentesis", "Endomyocardial Biopsy"],
  },
  {
    icon: ArrowRight,
    title: "Peripheral Vascular",
    items: ["Peripheral Angiography & PTA", "Carotid Stenting", "Renal Artery Intervention"],
  },
];

export default function ProceduresSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="procedures" className="py-24 md:py-32 px-6 bg-teal-section text-secondary-foreground relative overflow-hidden">
      {/* Gold accents */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div ref={ref} className={`container mx-auto max-w-6xl transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.25em] text-primary mb-3 font-body">Catheterization Laboratories</p>
          <h2 className="font-display text-3xl md:text-4xl text-secondary-foreground mb-4">
            <span className="text-gold-gradient">6,500+</span> Life-Saving Procedures Annually
          </h2>
          <p className="font-body text-sm text-secondary-foreground/70 tracking-wide">
            5 State-of-the-Art Catheterization Laboratories — The Largest in Israel
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <div
              key={i}
              className="p-6 rounded-lg border border-primary/20 bg-teal-light/30 backdrop-blur-sm hover:border-primary/50 transition-all duration-300"
            >
              <cat.icon className="w-7 h-7 text-primary mb-4" />
              <h3 className="font-display text-lg text-secondary-foreground mb-4">{cat.title}</h3>
              <ul className="space-y-1.5">
                {cat.items.map((item, j) => (
                  <li key={j} className="text-xs font-body text-secondary-foreground/70 flex items-start gap-2">
                    <span className="w-1 h-1 rounded-full bg-primary flex-shrink-0 mt-1.5" />
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
