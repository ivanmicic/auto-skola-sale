# Auto škola Sale — plan projekta i changelog

Živi dokument: ovde se beleži struktura sajta, odluke i **sve naredne promene**.  
Kod živi u root-u repozitorijuma (`auto-skola-sale`); ovaj folder služi kao istorija i roadmap.

---

## 1. Pregled

| Stavka | Vrednost |
|--------|----------|
| Klijent | Auto škola Sale d.o.o. Kostolac |
| Vlasnik | Saša Anđelković |
| Stek | Next.js 16 (App Router), TypeScript, Tailwind, next-intl, Vercel |
| Jezici | `sr` (primarni, latinica), `en` (sekundarni) |
| Lokalni URL | http://localhost:3000 → `/sr` |
| Brend | Navy `#1B3A6B` + accent `#D35400`, fontovi Sora + Figtree |

### NAP (konzistentno svuda)

- **Naziv:** Auto škola Sale  
- **Adresa:** Rudarska bb, Kostolac  
- **Telefon:** +381 63 826 8876 (`tel:+381638268876`)  
- **PIB:** 107504491 · **MB:** 20816520  

---

## 2. Struktura koda (trenutno stanje)

```
auto-skola-sale/
├── messages/                 # sr.json, en.json
├── plan/                     # ovaj dokument + budući zapisi
├── src/
│   ├── app/
│   │   ├── [locale]/         # stranice (home, obuka, kondicioni, legal)
│   │   ├── sitemap.ts
│   │   └── robots.ts
│   ├── components/
│   │   ├── layout/           # Header, Footer, CookieNotice, LanguageSwitcher
│   │   ├── sections/         # Hero … Contact
│   │   ├── seo/
│   │   ├── analytics/
│   │   └── ui/
│   ├── i18n/                 # routing, navigation, request
│   ├── lib/                  # business, seo, analytics
│   └── proxy.ts              # next-intl locale middleware (Next 16)
├── .cursor/rules/seo.md
├── .env.example
└── README.md
```

### Rute

| SR | EN |
|----|-----|
| `/sr` | `/en` |
| `/sr/obuka-b-kategorija` | `/en/b-category-training` |
| `/sr/kondicioni-casovi` | `/en/refresher-lessons` |
| `/sr/politika-privatnosti` | `/en/privacy-policy` |
| `/sr/uslovi-koriscenja` | `/en/terms-of-use` |

---

## 3. Owner TODO (čeka potvrdu / materijale)

- [ ] Pravi logo (zameniti "L" mark u headeru)
- [ ] Profesionalne fotografije (svi `TODO: IMAGE` placeholderi)
- [ ] Cene (cenovnik trenutno "Po upitu")
- [ ] Broj godina iskustva (facts traka)
- [ ] Imena i bio instruktora
- [ ] Potvrda radnog vremena (izlog: 8–16h, vikend neradno)
- [ ] Linkovi društvenih mreža (`src/lib/business.ts`)
- [ ] `NEXT_PUBLIC_GA_ID` i Search Console verification u `.env.local`
- [ ] Domainska URL u `NEXT_PUBLIC_SITE_URL`
- [ ] Kontakt forma → email / CRM
- [ ] Stvarne Google / Facebook recenzije umesto placeholder citata

---

## 4. Changelog

### 2026-08-06 — Logo u hero-u

**Dodato**
- Logo (`public/logo.png` iz parent `LOGO.png`) iznad „AUTO ŠKOLA SALE“ u hero-u

**Fajlovi**
- `public/logo.png`
- `src/components/sections/Hero.tsx`

### 2026-08-06 — Hero naslov u dva reda

**Izmenjeno**
- H1 podeljen na `titleLine1` / `titleLine2`; drugi red manji font + `nowrap` (bez siročeta „kategorije“)
- `allowedDevOrigins: ['127.0.0.1']` radi HMR-a u spoljašnjem Chrome-u

**Fajlovi**
- `src/components/sections/Hero.tsx`
- `messages/sr.json`, `messages/en.json`
- `next.config.ts`

### 2026-08-06 — v0.1.0 Inicijalni sajt

**Dodato**

- Kompletan dvojezični sajt (SR/EN) sa next-intl pathnames
- Layout: sticky header, footer (NAP + PIB/MB), cookie notice, language switcher
- Sekcije: Hero, Facts, O nama, Zašto mi, Obuka B, Kondicioni, Cenovnik, Vozni park, Tim, Testimonials, Galerija, FAQ, Kontakt
- Posebne stranice: obuka, kondicioni časovi, politika privatnosti, uslovi/impressum
- SEO: meta, canonical, hreflang, OG, DrivingSchool + FAQPage JSON-LD, sitemap, robots
- GA4 stub + eventi: `contact_click`, `phone_click`, `form_submit`, `chat_click`
- Image placeholdere (bez stock fotki)
- `.cursor/rules/seo.md`, `plan/plan.md`

**Napomene**

- Form submit za sada samo loguje u konzolu (nema backend slanja)
- GA se ne učitava dok je `NEXT_PUBLIC_GA_ID=G-XXXXXXX`

---

## 5. Kako beležiti naredne promene

Za svaku značajnu izmenu dodaj novi blok na vrh sekcije **Changelog** (ispod naslova, iznad starijih unosa):

```md
### YYYY-MM-DD — kratak naslov

**Dodato / Izmenjeno / Uklonjeno / Popravljeno**
- ...

**Fajlovi (opciono)**
- `putanja/fajl.tsx`
```

Ako promena zahteva odluku vlasnika, dodaj checkbox u sekciju **Owner TODO**.
