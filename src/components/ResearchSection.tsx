import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useCounter } from "@/hooks/useCounter";
import { ExternalLink } from "lucide-react";

const highlights = [
  {
    title: "Contemporary Life Expectancy Following TAVR — Israeli National Registry",
    detail: "5-year survival: 70%  |  10-year survival: 42%  |  8-year survival improved from 39% to 71% in modern era",
  },
  {
    title: "Transcaval Access Safety for TAVR",
    detail: "Shorter hospital stay (6.3 vs 14.4 days), lower kidney injury risk (5% vs 12%)",
  },
  {
    title: "Gender Paradox in TAVR",
    detail: "Investigating why women have higher complication rates but superior long-term outcomes",
  },
];

export default function ResearchSection() {
  const { ref, isVisible } = useScrollAnimation();
  const pubCount = useCounter(284, 2400, 0, isVisible);

  return (
    <section id="research" className="py-24 md:py-32 px-6 bg-navy-gradient relative overflow-hidden">
      {/* Gold accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div ref={ref} className={`container mx-auto max-w-6xl transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.25em] text-primary mb-3 font-body">Impact</p>
          <h2 className="font-display text-3xl md:text-4xl text-foreground mb-12">
            Research & <span className="text-gold-gradient italic">Publications</span>
          </h2>

          <div className="font-display text-7xl md:text-8xl text-primary mb-2">{pubCount}</div>
          <p className="text-sm text-muted-foreground uppercase tracking-[0.2em] mb-10 font-body">Peer-Reviewed Publications</p>

          <div className="flex flex-wrap justify-center gap-8 md:gap-14 mb-16">
            {[
              ["9,000+", "Citations"],
              ["245", "Research Works"],
              ["NIH", "Fellowship Alumni"],
            ].map(([val, label]) => (
              <div key={label} className="text-center">
                <div className="font-display text-2xl md:text-3xl text-foreground">{val}</div>
                <div className="text-xs text-muted-foreground tracking-wider uppercase mt-1 font-body">{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Highlight cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {highlights.map((h, i) => (
            <div key={i} className="p-6 rounded-lg border border-border bg-card/50 hover:border-primary/40 transition-colors duration-300">
              <h3 className="font-display text-base text-foreground mb-3 leading-snug">{h.title}</h3>
              <p className="text-sm text-muted-foreground font-body leading-relaxed">{h.detail}</p>
            </div>
          ))}
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-4">
          {[
            ["Google Scholar", "https://scholar.google.com"],
            ["PubMed", "https://pubmed.ncbi.nlm.nih.gov"],
          ].map(([label, href]) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md border border-primary/30 text-primary hover:bg-primary/10 transition-colors duration-300 text-sm font-body tracking-wide"
            >
              {label} <ExternalLink className="w-3.5 h-3.5" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
