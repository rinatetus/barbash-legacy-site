import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useCounter } from "@/hooks/useCounter";
import { ExternalLink } from "lucide-react";

const highlights = [
  {
    title: "National TAVR Registry",
    detail: "6,191 patients across 4 centers | 5-year survival: 70% | 10-year survival: 42% | 8-year survival leap: 39% → 71%",
  },
  {
    title: "Transcaval Access Innovation",
    detail: "Developed at NIH. Hospital stay: 6.3 vs 14.4 days | Kidney injury: 5% vs 12%",
  },
  {
    title: "AI & MicroRNA Biomarkers",
    detail: "Prognostic miR-21, miR-1, miR-210 post-TAVR | LLMs achieving 86% accuracy in ACS decision support",
  },
];

const qualityTimeline = [
  { year: "2008", event: "First TAVR at Sheba" },
  { year: "2010–15", event: "Early era — building registry, refining techniques" },
  { year: "2016–23", event: "Modern era — dramatic improvement in outcomes" },
  { year: "Metrics", event: "Pacemaker rates ~18% · Vascular complications significantly decreased · Device success 95%" },
  { year: "2023", event: "766 open-heart procedures performed — increase despite war conditions" },
];

export default function ResearchSection() {
  const { ref, isVisible } = useScrollAnimation();
  const pubCount = useCounter(284, 2400, 0, isVisible);

  return (
    <section id="research" className="py-24 md:py-32 px-6 bg-background relative overflow-hidden">
      <div className="gold-divider mb-24" />

      <div ref={ref} className={`container mx-auto max-w-6xl transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        {/* Part A — Publication Impact */}
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.25em] text-primary mb-3 font-body">Impact</p>
          <h2 className="font-display text-3xl md:text-4xl text-navy-heading mb-12">
            Research & <span className="text-gold-gradient italic">Publications</span>
          </h2>

          <div className="font-display text-7xl md:text-8xl text-primary mb-2 font-semibold">{pubCount}</div>
          <p className="text-sm text-muted-foreground uppercase tracking-[0.2em] mb-10 font-body">Peer-Reviewed Publications</p>

          <div className="flex flex-wrap justify-center gap-8 md:gap-14 mb-16">
            {[
              ["9,000+", "Citations"],
              ["245", "Research Works"],
              ["NIH", "Fellowship Alumni"],
            ].map(([val, label]) => (
              <div key={label} className="text-center">
                <div className="font-display text-2xl md:text-3xl text-navy-heading">{val}</div>
                <div className="text-xs text-muted-foreground tracking-wider uppercase mt-1 font-body">{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Highlight cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {highlights.map((h, i) => (
            <div key={i} className="card-luxury p-6">
              <h3 className="font-display text-base text-navy-heading mb-3 leading-snug">{h.title}</h3>
              <p className="text-sm text-muted-foreground font-body leading-relaxed">{h.detail}</p>
            </div>
          ))}
        </div>

        {/* Part B — Quality Metrics Timeline */}
        <div className="max-w-2xl mx-auto mb-12">
          <h3 className="font-display text-2xl text-navy-heading text-center mb-8">
            Quality Metrics <span className="text-gold-gradient italic">Over the Years</span>
          </h3>
          <div className="relative">
            <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border" />
            {qualityTimeline.map((q, i) => (
              <div key={i} className="flex gap-5 pb-5 last:pb-0 relative">
                <div className="mt-1.5 w-[15px] h-[15px] rounded-full border-2 border-primary bg-background flex-shrink-0 z-10" />
                <div>
                  <span className="text-xs font-body text-primary tracking-wider font-bold">{q.year}</span>
                  <p className="text-sm text-muted-foreground font-body mt-0.5">{q.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-4">
          {[
            ["Google Scholar", "https://scholar.google.com"],
            ["PubMed", "https://pubmed.ncbi.nlm.nih.gov"],
            ["ResearchGate", "https://www.researchgate.net"],
          ].map(([label, href]) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md border border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-sm font-body tracking-wide"
            >
              {label} <ExternalLink className="w-3.5 h-3.5" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
