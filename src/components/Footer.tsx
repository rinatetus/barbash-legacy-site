import { ExternalLink } from "lucide-react";
import HeartbeatIcon from "./HeartbeatIcon";

const links = [
  { label: "Home", href: "#" },
  { label: "Procedures", href: "#procedures" },
  { label: "Expertise", href: "#expertise" },
  { label: "About & CV", href: "#about" },
  { label: "Research", href: "#research" },
  { label: "Resilience", href: "#resilience" },
  { label: "Press", href: "#press" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-border bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col items-center gap-8">
          {/* Logo */}
          <HeartbeatIcon className="w-10 h-10 text-cardiac" />

          {/* Nav */}
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
            {links.map((l) => (
              <a
                key={l.href + l.label}
                href={l.href}
                className="text-xs text-muted-foreground hover:text-primary transition-colors font-body uppercase tracking-wider"
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* Academic links */}
          <div className="flex items-center gap-4">
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
                className="text-xs text-muted-foreground hover:text-primary transition-colors font-body inline-flex items-center gap-1"
              >
                {label} <ExternalLink className="w-3 h-3" />
              </a>
            ))}
          </div>

          <div className="text-center">
            <p className="text-sm text-muted-foreground font-body">
              © 2026 Prof. Israel M. Barbash, MD — All Rights Reserved
            </p>
            <p className="text-xs text-muted-foreground/50 font-body mt-2 direction-rtl" dir="rtl">
              אתר זה זמין גם בעברית
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
