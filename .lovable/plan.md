

## New Premium Color Palette — Medical Luxury

The current cream/gold/teal palette feels washed-out and muddy. The new direction: a palette that conveys **cardiac medicine**, **luxury**, **power**, and **life** — think deep rich navy (authority), vibrant crimson-red (heart/life/blood), pure white (clinical precision), and refined silver-gold accents.

### New Color System

| Role | Color | HSL | Why |
|------|-------|-----|-----|
| **Background** | Pure warm white | `0 0% 99%` | Clean, clinical, premium |
| **Card** | Soft cool white | `220 20% 97%` | Subtle depth |
| **Primary accent** | Deep crimson red | `350 72% 45%` | Heart, life, blood, power |
| **Primary light** | Warm rose | `350 65% 58%` | Hover states |
| **Secondary** | Deep navy | `220 50% 14%` | Authority, trust, strength |
| **Headings** | Rich dark navy | `220 55% 10%` | Strong, commanding |
| **Muted text** | Steel gray | `220 10% 46%` | Readable, refined |
| **Gold accent** | Warm champagne gold | `40 55% 55%` | Luxury highlights, dividers |
| **Teal sections** | Deep medical navy | `215 45% 16%` | Dark contrast sections |
| **Slate sections** | Midnight blue | `220 40% 12%` | Emotional/resilience sections |
| **Border** | Light silver | `220 15% 90%` | Subtle structure |

### What Changes

**1. `src/index.css`** — Replace all CSS custom properties with the new palette. Update `.text-gold-gradient` to a crimson-to-rose gradient. Update `.bg-teal-section` and `.bg-slate-section` to new navy tones. Update `.card-luxury` hover to crimson border. Update `.gold-divider` to crimson gradient. Keep `.gold-border-circle` but rename conceptually to use crimson.

**2. `tailwind.config.ts`** — Update the custom color tokens (`gold` → keep name but new values, update teal, slate-deep, navy-heading, sage).

**3. All components** — The color classes (`text-primary`, `text-navy-heading`, `bg-teal-section`, etc.) will automatically update via CSS variables, so most components need zero changes. Only places with hardcoded HSL values (like the hero dot pattern, gold-border-circle in CSS) need updates.

**4. `src/index.css` utility classes** — Update hardcoded HSL values in gradients and box-shadows to match the new crimson/navy palette.

### Design Philosophy
- **Crimson red** = heart, life, cardiac medicine, urgency, vitality
- **Deep navy** = authority, trust, medical professionalism, power
- **Gold accents** = prestige, excellence, luxury (used sparingly)
- **White space** = clinical precision, breathing room, premium feel

The site will feel like a **world-class cardiac center's executive brochure** — powerful, alive, and unmistakably medical luxury.

