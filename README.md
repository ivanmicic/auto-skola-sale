# Auto škola Sale — website

Modern bilingual (SR/EN) website for **Auto škola Sale d.o.o. Kostolac**.

## Stack

- Next.js (App Router) + TypeScript
- next-intl (`/sr`, `/en`)
- Tailwind CSS
- `@next/third-parties` (GA4)
- Deploy: Vercel

## Setup

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — redirects to `/sr`.

### Environment

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Canonical / sitemap / OG base URL |
| `NEXT_PUBLIC_GA_ID` | GA4 Measurement ID (`G-XXXXXXXX`) |
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | Search Console meta tag |

## Owner TODOs

- Real logo, photos (all `ImagePlaceholder` / `TODO: IMAGE` spots)
- Confirm opening hours, prices, years of experience, instructor names
- Social profile URLs in `src/lib/business.ts`
- Wire contact form to email/CRM
- Replace GA and Search Console placeholders
