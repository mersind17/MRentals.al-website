# MRentals.al — Makina me Qera

Faqja zyrtare e biznesit **MRentals**, shërbim i makinave me qera me bazë në **Elbasan**, që shërben edhe **Tiranën** dhe **Aeroportin Ndërkombëtar të Tiranës (Rinas / TIA)**.

- **Website:** https://mrentals.al
- **Rezervime:** vetëm përmes WhatsApp (+355 69 516 9873)
- **Instagram:** [@mrentals_al](https://www.instagram.com/mrentals_al)

## Stack

Vite 6 + React 19 + TypeScript + Tailwind CSS v4. Single-page app, dygjuhëshe (Shqip / English) me toggle në client. Deploy në Vercel.

## Zhvillimi lokal

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # output në dist/
npm run preview    # preview i build-it
```

## Pipeline i imazheve

Origjinalet e fotove qëndrojnë në `photos/` (nuk deployohen). Skedarët e optimizuar për web gjenerohen në `public/photos/` me sharp:

```bash
npm run optimize:images    # resize + webp (800/1600w karta, 1280/1920w hero) + jpg fallback
npm run prepare:brand      # logo (trim+transparent), favicons, og-image — vetëm kur ndryshon logoja
```

Shto foto të reja në `public/photos/` (si burim JPEG/JPG), pastaj rifresko `optimize:images`. Emrat e output-it janë të slugifikuar (pa hapësira) që `srcset` të jetë i vlefshëm.

## Rregullat e biznesit (të rëndësishme)

- **Sigurimi i plotë (kasko) është OPSION** — asnjëherë mos shkruaj "sigurim i përfshirë".
- Çmimet: 25–55 €/ditë. Rezervimi bëhet vetëm me WhatsApp (pa backend).

## Deploy

Push në `main` → Vercel bën rebuild automatik. Domaini `mrentals.al` është canonical për SEO (sitemap, robots, JSON-LD janë konfiguruar për këtë domain).
