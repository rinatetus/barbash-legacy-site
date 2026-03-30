import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";


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

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-16 px-6">
        <a href="#" className="flex items-center gap-2 font-display text-xl tracking-wide text-navy-heading">
          Prof. <span className="text-primary">Barbash</span>
        </a>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-6">
          {links.map((l) => (
            <a
              key={l.href + l.label}
              href={l.href}
              className="text-xs font-body text-muted-foreground hover:text-primary transition-colors duration-300 tracking-[0.12em] uppercase"
            >
              {l.label}
            </a>
          ))}
          <span className="text-xs font-body text-muted-foreground/50 ml-2">EN / HE</span>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-background/98 backdrop-blur-md border-b border-border px-6 pb-6 pt-2">
          {links.map((l) => (
            <a
              key={l.href + l.label}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              className="block py-3 text-sm font-body text-muted-foreground hover:text-primary transition-colors tracking-wide uppercase"
            >
              {l.label}
            </a>
          ))}
          <span className="block py-3 text-xs font-body text-muted-foreground/50">EN / HE</span>
        </div>
      )}
    </nav>
  );
}
