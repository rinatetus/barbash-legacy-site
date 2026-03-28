import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Heart, Activity, Zap, Database } from "lucide-react";

const cards = [
  {
    icon: Heart,
    title: "TAVR / TAVI",
    desc: "Transcatheter Aortic Valve Replacement — pioneering minimally invasive valve therapy for severe aortic stenosis, contributing to national registry data spanning 6,191+ patients.",
  },
  {
    icon: Activity,
    title: "Structural Heart Interventions",
    desc: "Advanced catheter-based treatments for mitral, tricuspid, and aortic valve diseases using cutting-edge techniques including transcaval access.",
  },
  {
    icon: Zap,
    title: "Complex Coronary Interventions",
    desc: "Expert management of complex coronary artery disease, including chronic total occlusions (CTO) and high-risk PCI procedures.",
  },
  {
    icon: Database,
    title: "Cardiovascular Big Data Research",
    desc: "Leading the SHEBAHEART registry — Israel's largest cardiovascular big data initiative — driving evidence-based insights from 115,000+ annual admissions.",
  },
];

export default function ExpertiseSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="expertise" className="py-24 md:py-32 px-6 bg-section-alt">
      <div ref={ref} className={`container mx-auto max-w-6xl transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.25em] text-primary mb-3 font-body">Specializations</p>
          <h2 className="font-display text-3xl md:text-4xl text-foreground">
            Areas of <span className="text-gold-gradient italic">Expertise</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {cards.map((c, i) => (
            <div
              key={i}
              className="card-hover p-8 rounded-lg border border-border bg-background/50 group cursor-default"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <c.icon className="w-8 h-8 text-primary mb-5 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="font-display text-xl text-foreground mb-3">{c.title}</h3>
              <p className="text-sm text-muted-foreground font-body leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
