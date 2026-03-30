import { ExternalLink } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  const links = [
    { label: t.nav.home, href: "#" },
    { label: t.nav.procedures, href: "#procedures" },
    { label: t.nav.expertise, href: "#expertise" },
    { label: t.nav.about, href: "#about" },
    { label: t.nav.research, href: "#research" },
    { label: t.nav.resilience, href: "#resilience" },
    { label: t.nav.press, href: "#press" },
    { label: t.nav.contact, href: "#contact" },
  ];

  return (
    <footer className="py-8 sm:py-12 px-4 sm:px-6 border-t border-border bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col items-center gap-6 sm:gap-8">
          <span className="font-display text-lg text-navy-heading tracking-wide">Prof. <span className="text-primary">Barbash</span></span>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-6">
            {links.map((l) => (
              <a
                key={l.href + l.label}
                href={l.href}
                className="text-[10px] sm:text-xs text-muted-foreground hover:text-primary transition-colors font-body uppercase tracking-wider"
              >
                {l.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3 sm:gap-4">
            {[
              ["Scholar", "https://scholar.google.com"],
              ["PubMed", "https://pubmed.ncbi.nlm.nih.gov"],
              ["ResearchGate", "https://www.researchgate.net"],
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] sm:text-xs text-muted-foreground hover:text-primary transition-colors font-body inline-flex items-center gap-1"
              >
                {label} <ExternalLink className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
              </a>
            ))}
          </div>

          <div className="text-center">
            <p className="text-xs sm:text-sm text-muted-foreground font-body">
              {t.footer.copyright}
            </p>
            <p className="text-[10px] sm:text-xs text-muted-foreground/50 font-body mt-2">
              {t.footer.hebrewNote}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}