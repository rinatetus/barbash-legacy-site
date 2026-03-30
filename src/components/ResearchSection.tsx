import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useCounter } from "@/hooks/useCounter";
import { ExternalLink } from "lucide-react";
import barbashBlueShirt from "@/assets/barbash-blue-shirt.webp";
import { useLanguage } from "@/i18n/LanguageContext";

export default function ResearchSection() {
  const { ref, isVisible } = useScrollAnimation();
  const pubCount = useCounter(284, 2400, 0, isVisible);
  const { t } = useLanguage();

  return (
    <section id="research" className="py-24 md:py-32 px-6 bg-background relative overflow-hidden">
      <div className="accent-divider mb-24" />

      <div ref={ref} className={`container mx-auto max-w-6xl transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="grid md:grid-cols-3 gap-12 items-center mb-16">
          <div className="md:col-span-2 text-center md:text-left">
            <p className="text-xs uppercase tracking-[0.25em] text-primary mb-3 font-body">{t.research.sectionLabel}</p>
            <h2 className="font-display text-3xl md:text-4xl text-navy-heading mb-12">
              {t.research.heading} <span className="text-accent-gradient italic">{t.research.headingAccent}</span>
            </h2>

            <div className="font-display text-7xl md:text-8xl text-primary mb-2 font-semibold">{pubCount}</div>
            <p className="text-sm text-muted-foreground uppercase tracking-[0.2em] mb-10 font-body">{t.research.pubLabel}</p>

            <div className="flex flex-wrap justify-center md:justify-start gap-8 md:gap-14">
              {t.research.stats.map(([val, label]) => (
                <div key={label} className="text-center">
                  <div className="font-display text-2xl md:text-3xl text-navy-heading">{val}</div>
                  <div className="text-xs text-muted-foreground tracking-wider uppercase mt-1 font-body">{label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center">
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-2xl overflow-hidden shadow-lg border-2 border-primary/30">
              <img
                src={barbashBlueShirt}
                alt={t.research.photoAlt}
                className="w-full h-full object-cover object-top"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {t.research.highlights.map((h, i) => (
            <div key={i} className="card-luxury p-6">
              <h3 className="font-display text-base text-navy-heading mb-3 leading-snug">{h.title}</h3>
              <p className="text-sm text-muted-foreground font-body leading-relaxed">{h.detail}</p>
            </div>
          ))}
        </div>

        <div className="max-w-2xl mx-auto mb-12">
          <h3 className="font-display text-2xl text-navy-heading text-center mb-8">
            {t.research.qualityHeading} <span className="text-accent-gradient italic">{t.research.qualityAccent}</span>
          </h3>
          <div className="relative">
            <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border" />
            {t.research.timeline.map((q, i) => (
              <div key={i} className="flex gap-5 pb-5 last:pb-0 relative">
                <div className="mt-1.5 w-[15px] h-[15px] rounded-full border-2 border-cardiac bg-background flex-shrink-0 z-10" />
                <div>
                  <span className="text-xs font-body text-primary tracking-wider font-bold">{q.year}</span>
                  <p className="text-sm text-muted-foreground font-body mt-0.5">{q.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

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
