import { createContext, useContext, useState, useCallback, type ReactNode } from "react";
import { en } from "./translations/en";
import { he } from "./translations/he";
import type { Translations } from "./translations/en";

type Language = "en" | "he";

interface LanguageContextType {
  lang: Language;
  t: Translations;
  toggleLanguage: () => void;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<Language, Translations> = { en, he };

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>(() => {
    const saved = localStorage.getItem("lang");
    return (saved === "he" ? "he" : "en") as Language;
  });

  const toggleLanguage = useCallback(() => {
    setLang((prev) => {
      const next = prev === "en" ? "he" : "en";
      localStorage.setItem("lang", next);
      return next;
    });
  }, []);

  const setLanguage = useCallback((newLang: Language) => {
    localStorage.setItem("lang", newLang);
    setLang(newLang);
  }, []);

  const t = translations[lang];

  return (
    <LanguageContext.Provider value={{ lang, t, toggleLanguage, setLanguage }}>
      <div dir={t.dir} className={lang === "he" ? "font-body-he" : ""}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
