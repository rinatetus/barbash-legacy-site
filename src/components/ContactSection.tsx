import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ExternalLink, MapPin, Building2, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactSection() {
  const { ref, isVisible } = useScrollAnimation();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 md:py-32 px-6 bg-card">
      <div ref={ref} className={`container mx-auto max-w-5xl transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.25em] text-gold mb-3 font-body">Get in Touch</p>
          <h2 className="font-display text-3xl md:text-4xl text-navy-heading">
            <span className="text-gold-gradient italic">Contact</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Form */}
          <div>
            {submitted ? (
              <div className="text-center py-12 card-luxury p-8">
                <p className="font-display text-xl text-navy-heading mb-2">Thank you</p>
                <p className="text-sm text-muted-foreground font-body">Your message has been received.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <Input placeholder="Full Name" required className="bg-background border-border focus:border-gold" />
                <Input type="email" placeholder="Email Address" required className="bg-background border-border focus:border-gold" />
                <Input type="tel" placeholder="Phone (optional)" className="bg-background border-border focus:border-gold" />
                <Input placeholder="Institution (optional)" className="bg-background border-border focus:border-gold" />
                <Textarea placeholder="Your Message" rows={5} required className="bg-background border-border focus:border-gold resize-none" />
                <Button type="submit" className="w-full bg-gold text-white hover:bg-gold-dark">
                  Send Message
                </Button>
              </form>
            )}
          </div>

          {/* Info */}
          <div className="space-y-8">
            <div className="flex gap-4">
              <Building2 className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-display text-lg text-navy-heading">Leviev Heart Center</h3>
                <p className="text-sm text-muted-foreground font-body">Sheba Medical Center</p>
              </div>
            </div>
            <div className="flex gap-4">
              <MapPin className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
              <p className="text-sm text-muted-foreground font-body">Ramat Gan, Israel</p>
            </div>
            <div className="flex gap-4">
              <Globe className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
              <p className="text-sm text-muted-foreground font-body">Languages: Hebrew, English</p>
            </div>

            <div className="pt-4 border-t border-border">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4 font-body">Academic Profiles</p>
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
                    className="inline-flex items-center gap-1.5 text-sm text-gold hover:text-gold-dark transition-colors font-body"
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
