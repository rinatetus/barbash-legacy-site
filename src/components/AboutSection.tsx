import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ChevronDown, Download } from "lucide-react";
import { useState } from "react";
import barbashPhoto from "@/assets/barbash-stethoscope.jpg";
import { useLanguage } from "@/i18n/LanguageContext";

function CVAccordion({ section }: { section: { title: string; content: string[] } }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-start group"
      >
        <span className="font-display text-base sm:text-lg text-navy-heading group-hover:text-primary transition-colors">{section.title}</span>
        <ChevronDown className={`w-5 h-5 text-primary transition-transform duration-300 flex-shrink-0 ${open ? 'rotate-180' : ''}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-500 ${open ? 'max-h-[600px] opacity-100 pb-5' : 'max-h-0 opacity-0'}`}>
        <ul className="space-y-2">
          {section.content.map((item, i) => (
            <li key={i} className="text-sm font-body text-muted-foreground leading-relaxed ps-4 border-s-2 border-primary/20">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function AboutSection() {
  const { ref, isVisible } = useScrollAnimation();
  const { t } = useLanguage();

  return (
    <section id="about" className="py-16 md:py-32 px-4 sm:px-6 bg-background">
      <div ref={ref} className={`container mx-auto max-w-6xl transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="text-center mb-10 md:mb-16">
          <p className="text-xs uppercase tracking-[0.25em] text-primary mb-3 font-body">{t.about.sectionLabel}</p>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-navy-heading">
            {t.about.heading} <span className="text-accent-gradient italic">{t.about.headingAccent}</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-5 gap-8 md:gap-16 items-start">
          <div className="md:col-span-3 order-2 md:order-1">
            <div className="space-y-0 relative">
              <div className="absolute start-[7px] top-2 bottom-2 w-px bg-border" />
              {t.about.milestones.map((m, i) => (
                <div key={i} className="flex gap-4 sm:gap-5 pb-6 last:pb-0 relative">
                  <div className="mt-1.5 w-[15px] h-[15px] rounded-full border-2 border-cardiac bg-background flex-shrink-0 z-10" />
                  <div className="min-w-0">
                    <span className="text-xs font-body text-primary tracking-wider font-bold">{m.year}</span>
                    <h3 className="font-display text-base sm:text-lg text-navy-heading mt-0.5">{m.title}</h3>
                    <p className="text-sm text-muted-foreground font-body">{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-8 md:mt-10 text-sm md:text-base text-muted-foreground leading-relaxed font-body max-w-xl">
              {t.about.bio}
            </p>
          </div>

          <div className="md:col-span-2 order-1 md:order-2 flex justify-center">
            <div className="w-44 h-44 sm:w-56 sm:h-56 md:w-72 md:h-72 rounded-full accent-border-circle overflow-hidden">
              <img
                src={barbashPhoto}
                alt={t.about.photoAlt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        <div className="mt-14 md:mt-20 max-w-3xl mx-auto">
          <div className="text-center mb-8 md:mb-10">
            <p className="text-xs uppercase tracking-[0.25em] text-primary mb-3 font-body">{t.about.cvLabel}</p>
            <h3 className="font-display text-xl sm:text-2xl md:text-3xl text-navy-heading">
              {t.about.cvHeading} <span className="text-accent-gradient italic">{t.about.cvAccent}</span>
            </h3>
          </div>

          <div className="card-luxury p-4 sm:p-6 md:p-8">
            {t.about.cvSections.map((section, i) => (
              <CVAccordion key={i} section={section} />
            ))}
          </div>

          <div className="text-center mt-6 md:mt-8">
            <button className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 rounded-md border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 font-body text-sm tracking-wider uppercase">
              <Download className="w-4 h-4" />
              {t.about.downloadCV}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}