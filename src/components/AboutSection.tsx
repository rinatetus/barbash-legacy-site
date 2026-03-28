import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ChevronDown, Download } from "lucide-react";
import { useState } from "react";
import barbashPhoto from "@/assets/barbash-photo.png";

const milestones = [
  { year: "1973", title: "Born", desc: "August 11, Israel" },
  { year: "1991–94", title: "Air Force Service", desc: "Israel Defense Forces" },
  { year: "1994–02", title: "MD, Medical Degree", desc: "Ben-Gurion University of the Negev" },
  { year: "2000–01", title: "Research Fellowship", desc: "Neufeld Cardiac Research Institute" },
  { year: "2003–09", title: "Residency", desc: "Internal Medicine & Cardiology (6-year program), Sheba Medical Center. Board Certified Summa Cum Laude." },
  { year: "2009", title: "Cardiac CT Training", desc: "Johns Hopkins University" },
  { year: "2009–11", title: "NIH Fellowship", desc: "NHLBI, National Institutes of Health, Bethesda, MD — Cardiovascular Intervention Program" },
  { year: "2011–13", title: "Interventional Fellowship", desc: "MedStar–Cleveland Clinic, Georgetown University, Washington DC. ECFMG Certified (USMLE Steps 1, 2, 3)." },
  { year: "Present", title: "Director, Cath Lab Services", desc: "Leviev Heart Center, Sheba Medical Center" },
  { year: "Present", title: "Associate Professor", desc: "Sackler Faculty of Medicine, Tel Aviv University" },
  { year: "Present", title: "Chair", desc: "Working Group on Interventional Cardiology, Israel Heart Society" },
];

const cvSections = [
  {
    title: "Patents",
    content: [
      "2008 — Cardiac stem cell isolation methods (PCT/IL2008/000026)",
      "2010 — Closure device for cardiac surgery (61/382,931)",
    ],
  },
  {
    title: "Awards & Honors",
    content: [
      "Klapholtz Award for Cardiovascular Research, Tel Aviv University (2001)",
      "Neufeld Prize, Israel Heart Society (2004)",
      "B. de Rothschild Fund, Israel Academy of Sciences — National Clinician-Investigator Program (2004) — only 3–4 selected per year",
      "Talpiot Medical Leadership Program, Sheba Medical Center (2006)",
      "AHA New Investigator Travel Award (2007)",
      "AiroMedical Rating: 9.80 / 10",
    ],
  },
  {
    title: "Research Grants (Selected)",
    content: [
      "European Commission 7th Framework Programme — €280,000 (€2.7M consortium) — cardiac stem cell therapy",
      "Seymour Fefer Cardiovascular Research Grants — nanoparticle theranostics, cardiac MRI for TAVR",
    ],
  },
  {
    title: "Professional Memberships",
    content: [
      "Israel Society of Cardiology (1998–present)",
      "European Society of Cardiology (2003–present)",
      "American Heart Association",
      "American College of Cardiology",
    ],
  },
  {
    title: "Journal Reviewer",
    content: [
      "American Journal of Cardiology",
      "European Heart Journal",
      "Cardiovascular Revascularization Medicine",
      "EuroIntervention",
      "Catheterization and Cardiovascular Interventions",
    ],
  },
  {
    title: "Publications Summary",
    content: [
      "284 peer-reviewed publications",
      "9,087+ citations (ResearchGate) / ~7,400+ (Google Scholar)",
      "Top journals: Circulation (IF 15.2), JACC (IF 14.1), European Heart Journal (IF 14.1)",
      "3 book chapters, 80+ conference abstracts",
    ],
  },
];

function CVAccordion({ section }: { section: typeof cvSections[0] }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <span className="font-display text-lg text-navy-heading group-hover:text-primary transition-colors">{section.title}</span>
        <ChevronDown className={`w-5 h-5 text-primary transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-500 ${open ? 'max-h-[600px] opacity-100 pb-5' : 'max-h-0 opacity-0'}`}>
        <ul className="space-y-2">
          {section.content.map((item, i) => (
            <li key={i} className="text-sm font-body text-muted-foreground leading-relaxed pl-4 border-l-2 border-primary/20">
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

  return (
    <section id="about" className="py-24 md:py-32 px-6 bg-background">
      <div ref={ref} className={`container mx-auto max-w-6xl transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.25em] text-primary mb-3 font-body">Biography</p>
          <h2 className="font-display text-3xl md:text-4xl text-navy-heading">
            A Career Defined by <span className="text-gold-gradient italic">Excellence</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-5 gap-12 md:gap-16 items-start">
          {/* Timeline - left */}
          <div className="md:col-span-3 order-2 md:order-1">
            <div className="space-y-0 relative">
              {/* Vertical line */}
              <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border" />
              {milestones.map((m, i) => (
                <div key={i} className="flex gap-5 pb-6 last:pb-0 relative">
                  <div className="mt-1.5 w-[15px] h-[15px] rounded-full border-2 border-primary bg-background flex-shrink-0 z-10" />
                  <div>
                    <span className="text-xs font-body text-primary tracking-wider font-bold">{m.year}</span>
                    <h3 className="font-display text-lg text-navy-heading mt-0.5">{m.title}</h3>
                    <p className="text-sm text-muted-foreground font-body">{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-10 text-sm md:text-base text-muted-foreground leading-relaxed font-body max-w-xl">
              Professor Barbash is among the world's leading experts in transcatheter aortic valve replacement (TAVR) and structural heart interventions. With training at the National Institutes of Health and Cleveland Clinic, and over two decades of clinical and research excellence, he leads one of the largest catheterization laboratories in Israel — performing over 6,500 procedures annually at Sheba Medical Center, ranked #7 in the world by Newsweek.
            </p>
          </div>

          {/* Photo - right */}
          <div className="md:col-span-2 order-1 md:order-2 flex justify-center">
            <div className="w-56 h-56 md:w-72 md:h-72 rounded-full gold-border-circle overflow-hidden">
              <img
                src={barbashPhoto}
                alt="Professor Israel M. Barbash, MD — Interventional Cardiologist"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* CV Accordion */}
        <div className="mt-20 max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-xs uppercase tracking-[0.25em] text-primary mb-3 font-body">Curriculum Vitae</p>
            <h3 className="font-display text-2xl md:text-3xl text-navy-heading">
              Full <span className="text-gold-gradient italic">CV</span>
            </h3>
          </div>

          <div className="card-luxury p-6 md:p-8">
            {cvSections.map((section, i) => (
              <CVAccordion key={i} section={section} />
            ))}
          </div>

          <div className="text-center mt-8">
            <button className="inline-flex items-center gap-2 px-8 py-3 rounded-md border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 font-body text-sm tracking-wider uppercase">
              <Download className="w-4 h-4" />
              Download Full CV
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
