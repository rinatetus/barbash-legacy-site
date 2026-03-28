import { ExternalLink } from "lucide-react";

const links = [
  { label: "About", href: "#about" },
  { label: "Expertise", href: "#expertise" },
  { label: "Research", href: "#research" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-muted-foreground font-body">
            © 2026 Prof. Israel M. Barbash, MD
          </p>

          <div className="flex items-center gap-6">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-xs text-muted-foreground hover:text-primary transition-colors font-body uppercase tracking-wider"
              >
                {l.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            {[
              ["Scholar", "https://scholar.google.com"],
              ["PubMed", "https://pubmed.ncbi.nlm.nih.gov"],
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
        </div>
      </div>
    </footer>
  );
}
