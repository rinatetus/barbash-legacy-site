import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Heart, Activity, Zap, Brain } from "lucide-react";

const cards = [
  {
    icon: Heart,
    title: "TAVR / TAVI",
    desc: "Transcatheter Aortic Valve Replacement — pioneering minimally invasive therapy for severe aortic stenosis. Contributing to Israel's National TAVR Registry: 6,191+ patients, 5-year survival 70%, 8-year survival improved from 39% to 71%.",
  },
  {
    icon: Activity,
    title: "Structural Heart Interventions",
    desc: "Advanced catheter-based valve repair and replacement: MitraClip/TEER, tricuspid interventions, ASD/PFO closure, left atrial appendage closure. Pioneer of transcaval access technique developed at NIH.",
  },
  {
    icon: Zap,
    title: "Complex Coronary Interventions",
    desc: "Expert in chronic total occlusion (CTO) PCI, left main interventions, bifurcation stenting, rotational atherectomy, intravascular lithotripsy, and high-risk PCI with mechanical support.",
  },
  {
    icon: Brain,
    title: "Cardiovascular Big Data & AI",
    desc: "Leading SHEBAHEART — Israel's largest cardiovascular big data registry (115,000+ admissions/year). Integrating AI and Large Language Models into clinical decision support for acute coronary syndrome.",
  },
];

export default function ExpertiseSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="expertise" className="py-24 md:py-32 px-6 bg-card relative overflow-hidden">
      <div ref={ref} className={`container mx-auto max-w-6xl transition-all duration-1000 relative z-10 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.25em] text-primary mb-3 font-body">Specializations</p>
          <h2 className="font-display text-3xl md:text-4xl text-navy-heading">
            Areas of <span className="text-accent-gradient italic">Expertise</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {cards.map((c, i) => (
            <div
              key={i}
              className="card-luxury p-8 group cursor-default"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <c.icon className="w-8 h-8 text-cardiac mb-5 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="font-display text-xl text-navy-heading mb-3">{c.title}</h3>
              <p className="text-sm text-muted-foreground font-body leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
