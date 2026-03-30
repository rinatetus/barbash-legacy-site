import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ExternalLink, MapPin, Building2, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useLanguage } from "@/i18n/LanguageContext";

export default function ContactSection() {
  const { ref, isVisible } = useScrollAnimation();
  const [submitted, setSubmitted] = useState(false);
  const { t } = useLanguage();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 md:py-32 px-4 sm:px-6 bg-card">
      <div ref={ref} className={`container mx-auto max-w-5xl transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="text-center mb-10 md:mb-16">
          <p className="text-xs uppercase tracking-[0.25em] text-primary mb-3 font-body">{t.contact.sectionLabel}</p>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-navy-heading">
            <span className="text-accent-gradient italic">{t.contact.heading}</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          <div>
            {submitted ? (
              <div className="text-center py-12 card-luxury p-6 sm:p-8">
                <p className="font-display text-lg sm:text-xl text-navy-heading mb-2">{t.contact.thankYou}</p>
                <p className="text-sm text-muted-foreground font-body">{t.contact.messageReceived}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                <Input placeholder={t.contact.placeholders.name} required className="bg-background border-border focus:border-primary" />
                <Input type="email" placeholder={t.contact.placeholders.email} required className="bg-background border-border focus:border-primary" />
                <Input type="tel" placeholder={t.contact.placeholders.phone} className="bg-background border-border focus:border-primary" />
                <Input placeholder={t.contact.placeholders.institution} className="bg-background border-border focus:border-primary" />
                <Textarea placeholder={t.contact.placeholders.message} rows={4} required className="bg-background border-border focus:border-primary resize-none" />
                <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-workshop-blue-dark">
                  {t.contact.sendButton}
                </Button>
              </form>
            )}
          </div>

          <div className="space-y-6 sm:space-y-8">
            <div className="flex gap-3 sm:gap-4">
              <Building2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-display text-base sm:text-lg text-navy-heading">{t.contact.heartCenter}</h3>
                <p className="text-sm text-muted-foreground font-body">{t.contact.shebaCenter}</p>
              </div>
            </div>
            <div className="flex gap-3 sm:gap-4">
              <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <p className="text-sm text-muted-foreground font-body">{t.contact.location}</p>
            </div>
            <div className="flex gap-3 sm:gap-4">
              <Globe className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <p className="text-sm text-muted-foreground font-body">{t.contact.languages}</p>
            </div>

            <div className="pt-4 border-t border-border">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4 font-body">{t.contact.academicProfiles}</p>
              <div className="flex flex-wrap gap-3">
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
                    className="inline-flex items-center gap-1.5 text-sm text-primary hover:text-workshop-blue-dark transition-colors font-body"
                  >
                    {label} <ExternalLink className="w-3 h-3" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}