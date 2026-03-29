import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useCounter } from "@/hooks/useCounter";
import { Shield } from "lucide-react";
import HeartbeatIcon from "./HeartbeatIcon";

const stats = [
  { end: 319, label: "Wounded Treated After Oct 7" },
  { end: 766, label: "Open-Heart Procedures in 2023" },
  { end: 233, suffix: "%", label: "Increase in Heart Transplants" },
  { end: 50, suffix: "%", label: "Surgeons Called to Duty" },
];

export default function ResilienceSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="resilience" className="py-24 md:py-32 px-6 bg-deep-section text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cardiac/30 to-transparent" />

      {/* Background heart */}
      <div className="absolute bottom-0 right-0 pointer-events-none opacity-[0.05]">
        <HeartbeatIcon className="w-[400px] h-[400px] text-cardiac" />
      </div>

      <div ref={ref} className={`container mx-auto max-w-5xl transition-all duration-1000 relative z-10 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="text-center mb-12">
          <Shield className="w-10 h-10 text-cardiac mx-auto mb-4" />
          <h2 className="font-display text-3xl md:text-4xl text-white mb-2">
            When Rockets Fell, <span className="text-accent-gradient italic">The Cath Lab Never Closed</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto mb-12">
          <p className="text-sm md:text-base font-body text-white/80 leading-relaxed mb-6">
            On October 7, 2023, Israel faced its most devastating attack. As rockets flew overhead and sirens wailed, Sheba Medical Center — the nation's largest hospital — became the frontline of healing. Prof. Barbash and his team in the catheterization laboratories never stopped. While 50% of cardiac surgeons were recruited to military service, Sheba's cardiac department performed MORE procedures than the previous year — 766 open-heart operations in 2023, compared to 732 in 2022. The cath lab continued its mission: ~7,000 procedures, saving lives every single day.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {stats.map((s, i) => (
            <StatBlock key={i} {...s} active={isVisible} />
          ))}
          <div className="text-center">
            <div className="font-display text-4xl md:text-5xl text-workshop-blue-light font-semibold">24/7</div>
            <div className="mt-2 text-xs font-body text-white/60 uppercase tracking-wider">Continuous Operations</div>
          </div>
          <div className="text-center">
            <div className="font-display text-4xl md:text-5xl text-workshop-blue-light font-semibold">100+</div>
            <div className="mt-2 text-xs font-body text-white/60 uppercase tracking-wider">Countries Served</div>
          </div>
        </div>

        {/* Quote */}
        <div className="max-w-2xl mx-auto text-center border-t border-white/20 pt-10">
          <blockquote className="font-display text-lg md:text-xl text-white/90 italic leading-relaxed mb-4">
            "In times of peace and in moments of turmoil, Sheba has been there through it all — a symbol of resilience and dedication."
          </blockquote>
          <p className="text-xs text-workshop-blue-light font-body tracking-wider uppercase">— Sheba Medical Center</p>
        </div>

        <div className="max-w-3xl mx-auto mt-10">
          <p className="text-sm font-body text-white/70 leading-relaxed text-center">
            This is the unit Prof. Barbash leads — the most demanding department in one of the world's highest-ranked hospitals. A unit that didn't just survive wartime — it thrived. Treating soldiers and civilians, Jews and Arabs, Israelis and Palestinians — because in the cath lab, the only thing that matters is the heartbeat on the monitor.
          </p>
        </div>
      </div>
    </section>
  );
}

function StatBlock({ end, suffix = "", label, active }: { end: number; suffix?: string; label: string; active: boolean }) {
  const count = useCounter(end, 2000, 0, active);
  return (
    <div className="text-center">
      <div className="font-display text-4xl md:text-5xl text-workshop-blue-light font-semibold">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="mt-2 text-xs font-body text-white/60 uppercase tracking-wider">{label}</div>
    </div>
  );
}
