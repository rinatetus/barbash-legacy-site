import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useState } from "react";
import { ExternalLink } from "lucide-react";

const categories = ["All", "Interviews", "Publications", "Conferences", "News"];

const pressItems = [
  { title: "ICI Meeting — Invited Speaker", source: "ICI Meeting", category: "Conferences", desc: "Innovations in Cardiovascular Interventions, Tel Aviv", link: "https://icimed.org/staff/israel-barbash/" },
  { title: "ESC 365 — Contributor", source: "European Society of Cardiology", category: "Publications", desc: "ESC knowledge hub contributor", link: "https://esc365.escardio.org" },
  { title: "CRT 2013 & 2015 — Invited Lectures", source: "CRT", category: "Conferences", desc: "Cardiovascular Research Technologies, Washington DC" },
  { title: "EAPCI Core Curriculum", source: "EAPCI", category: "Publications", desc: "Committee for Education and Training (2020)" },
  { title: "Cardiac Surgery During Wartime", source: "PMC / NIH", category: "Publications", desc: "Surprising increase in procedures despite 50% surgeon mobilization", link: "https://pubmed.ncbi.nlm.nih.gov" },
  { title: "Sheba Underground Hospital", source: "The Media Line", category: "News", desc: "Safe haven in wartime for critically ill", link: "https://themedialine.org" },
  { title: "Sheba Treating Victims", source: "CNN", category: "News", desc: "Sheba treating victims with severe injuries" },
  { title: "Sheba #7 in World", source: "Newsweek 2026", category: "News", desc: "World's Best Hospitals ranking", link: "https://newsweek.com" },
  { title: "Sanofi Center of Excellence", source: "Sanofi", category: "News", desc: "Leviev Heart Center Clinical Research Unit designation" },
  { title: "AsiaIntervention Publication", source: "AsiaIntervention", category: "Publications", desc: "EAPCI curriculum publication" },
];

export default function PressSection() {
  const { ref, isVisible } = useScrollAnimation();
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All"
    ? pressItems
    : pressItems.filter(item => item.category === activeCategory);

  return (
    <section id="press" className="py-24 md:py-32 px-6 bg-card">
      <div ref={ref} className={`container mx-auto max-w-6xl transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-[0.25em] text-primary mb-3 font-body">Media</p>
          <h2 className="font-display text-3xl md:text-4xl text-navy-heading">
            Press & <span className="text-accent-gradient italic">Publications</span>
          </h2>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-body tracking-wider uppercase transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted text-muted-foreground hover:text-primary'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
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
                  Read More <ExternalLink className="w-3 h-3" />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
