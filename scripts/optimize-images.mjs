// Optimizon fotot e flotës për web: resize + webp (srcset) + jpg fallback.
// Burimi: public/photos/*.{jpg,jpeg}. Output: public/photos/<slug>-<width>.<ext>.
// Përdorim: `npm run optimize:images` ose `node scripts/optimize-images.mjs --clean`.
// Emrat e output-it duhet të përputhen me path-et bazë në constants.ts (FLEET.images).
import sharp from 'sharp';
import { readdir, stat, unlink } from 'fs/promises';
import { join, basename } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const photosDir = join(__dirname, '..', 'public', 'photos');

const CARD_WIDTHS = [800, 1600];
const HERO_WIDTHS = [1280, 1920];

// slug (bazë e output-it) → skedar burimi në public/photos/. `hero: true` shton edhe masat 1280/1920.
const SOURCES = [
  { slug: 'audi-a5-1', src: 'Audi A5(1).jpg', hero: true },
  { slug: 'audi-a5-2', src: 'Audi A5(2).jpg' },
  { slug: 'audi-a5-3', src: 'Audi A5(3).jpg' },
  { slug: 'hyundai-1', src: 'hundai1.jpeg' },
  { slug: 'hyundai-2', src: 'hundai2.jpeg' },
  { slug: 'hyundai-3', src: 'hundai3.jpeg' },
  { slug: 'hyundai-4', src: 'hundai4.jpeg' },
  { slug: 'passat-1', src: 'Passat Sel 1.jpeg' },
  { slug: 'passat-2', src: 'Passat Sel 2.jpeg' },
  { slug: 'passat-3', src: 'Passat Sel 3.jpeg' },
  { slug: 'golf-blue-1', src: 'Golf 6 Blue(1).jpg' },
  { slug: 'golf-blue-2', src: 'Golf 6 Blue(2).jpg' },
  { slug: 'golf-blue-3', src: 'Golf 6 Blue(3).jpg' },
  { slug: 'golf-black-1', src: 'Golf 6 Black(1).jpg' },
  { slug: 'golf-black-2', src: 'Golf 6 Black(2).jpg' },
  { slug: 'golf-black-3', src: 'Golf 6 Black(3).jpg' },
  { slug: 'skoda-1', src: 'Skoda(1).jpg' },
  { slug: 'skoda-2', src: 'Skoda(2).jpg' },
  { slug: 'skoda-3', src: 'Skoda(3).jpg' },
  { slug: 'jetta-1', src: 'Jetta(1).jpg' },
  { slug: 'jetta-2', src: 'Jetta(2).jpg' },
  { slug: 'jetta-3', src: 'Jetta(3).jpg' },
  { slug: 'polo-1', src: 'polo 1.jpeg' },
  { slug: 'polo-2', src: 'polo 2.jpeg' },
  { slug: 'polo-3', src: 'polo 3.jpeg' },
];

async function sizeKB(p) {
  return ((await stat(p)).size / 1024).toFixed(0);
}

async function main() {
  const clean = process.argv.includes('--clean');
  console.log('🔄 Duke optimizuar fotot e flotës...\n');

  const generated = new Set();
  let totalOut = 0;

  for (const { slug, src, hero } of SOURCES) {
    const input = join(photosDir, src);
    try {
      await stat(input);
    } catch {
      console.error(`❌ Mungon burimi: ${src}`);
      continue;
    }

    const widths = hero ? [...CARD_WIDTHS, ...HERO_WIDTHS] : CARD_WIDTHS;

    // webp për çdo masë
    for (const w of widths) {
      const out = join(photosDir, `${slug}-${w}.webp`);
      await sharp(input).resize({ width: w, withoutEnlargement: true }).webp({ quality: 78 }).toFile(out);
      generated.add(`${slug}-${w}.webp`);
      totalOut += (await stat(out)).size;
    }

    // jpg fallback 800w
    const jpgOut = join(photosDir, `${slug}-800.jpg`);
    await sharp(input).resize({ width: 800, withoutEnlargement: true }).jpeg({ quality: 75, mozjpeg: true }).toFile(jpgOut);
    generated.add(`${slug}-800.jpg`);
    totalOut += (await stat(jpgOut)).size;

    console.log(`✅ ${src} → ${slug}-{${widths.join(',')}}.webp + ${slug}-800.jpg (webp 800w: ${await sizeKB(join(photosDir, `${slug}-800.webp`))}KB)`);
  }

  if (clean) {
    console.log('\n🧹 Duke pastruar skedarët e vjetër...');
    const existing = await readdir(photosDir);
    for (const f of existing) {
      // Ruaj output-in e ri dhe asetet e brand-it (logo.*).
      if (generated.has(f) || basename(f).startsWith('logo')) continue;
      await unlink(join(photosDir, f));
      console.log(`   🗑️  ${f}`);
    }
  }

  console.log(`\n🎉 U gjeneruan ${generated.size} skedarë, gjithsej ${(totalOut / 1024 / 1024).toFixed(2)}MB.`);
  console.log('   (Path-et bazë për constants.ts: photos/<slug>, p.sh. photos/audi-a5-1)');
}

main().catch(console.error);
