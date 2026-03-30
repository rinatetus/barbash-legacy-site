import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useState } from "react";
import { ExternalLink } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

export default function PressSection() {
  const { ref, isVisible } = useScrollAnimation();
  const { t } = useLanguage();
  const [activeIdx, setActiveIdx] = useState(0);

  const filtered = activeIdx === 0
    ? t.press.items
    : t.press.items.filter(item => item.category === t.press.categories[activeIdx]);

  return (
    <section id="press" className="py-24 md:py-32 px-6 bg-card">
      <div ref={ref} className={`container mx-auto max-w-6xl transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-[0.25em] text-primary mb-3 font-body">{t.press.sectionLabel}</p>
          <h2 className="font-display text-3xl md:text-4xl text-navy-heading">
            {t.press.heading} <span className="text-accent-gradient italic">{t.press.headingAccent}</span>
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {t.press.categories.map((cat, i) => (
            <button
              key={cat}
              onClick={() => setActiveIdx(i)}
              className={`px-4 py-2 rounded-full text-xs font-body tracking-wider uppercase transition-all duration-300 ${
                activeIdx === i
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted text-muted-foreground hover:text-primary'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((item, i) => (
            <div key={i} className="card-luxury p-6 flex flex-col">
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2 py-0.5 text-[10px] font-body uppercase tracking-wider bg-primary/10 text-primary rounded">{item.source}</span>
                <span className="px-2 py-0.5 text-[10px] font-body uppercase tracking-wider bg-muted text-muted-foreground rounded">{item.category}</span>
              </div>
              <h3 className="font-display text-base text-navy-heading mb-2 leading-snug">{item.title}</h3>
              <p className="text-xs font-body text-muted-foreground leading-relaxed mb-4 flex-1">{item.desc}</p>
              {item.link && (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-body text-primary hover:text-workshop-blue-dark transition-colors"
                >
                  {t.press.readMore} <ExternalLink className="w-3 h-3" />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
