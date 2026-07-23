// Përgatit asetet e brand-it nga photos/MRentals(Logo).png:
//  - logo.webp / logo.png  → wordmark i trimuar me sfond transparent (public/photos/)
//  - favicon-32 / apple-touch-icon(180) / icon-512  → ikona katrore (public/)
//  - og-image.jpg          → 1200x630 (foto Audi + gradient + logo) për preview në WhatsApp/Facebook (public/)
// Ekzekuto vetëm kur ndryshon logoja: `npm run prepare:brand`.
import sharp from 'sharp';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const photosSrc = join(root, 'photos', 'MRentals(Logo).png');
const heroSrc = join(root, 'public', 'photos', 'Audi A5(1).jpg');
const pub = join(root, 'public');
const pubPhotos = join(pub, 'photos');

const BG = '#182521'; // sfondi jeshil i errët i brand-it

// Heq sfondin uniform: trim në bbox, pastaj chroma-key (zero alpha te pikselat afër ngjyrës së sfondit).
async function makeTransparentWordmark() {
  const trimmed = await sharp(photosSrc).trim({ threshold: 30 }).png().toBuffer();
  const { data, info } = await sharp(trimmed).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const kr = data[0], kg = data[1], kb = data[2]; // ngjyra e këndit = sfondi
  const threshold = 70;
  for (let i = 0; i < data.length; i += 4) {
    const dr = data[i] - kr, dg = data[i + 1] - kg, db = data[i + 2] - kb;
    if (Math.sqrt(dr * dr + dg * dg + db * db) < threshold) data[i + 3] = 0;
  }
  const keyed = await sharp(data, { raw: { width: info.width, height: info.height, channels: 4 } })
    .png()
    .toBuffer();
  return { keyed, width: info.width, height: info.height };
}

async function main() {
  console.log('🎨 Duke përgatitur asetet e brand-it...\n');
  const { keyed } = await makeTransparentWordmark();

  // 1) Logo transparente për header/footer/menu (lartësi 96px ≈ 2× e madhësisë maksimale të shfaqjes)
  await sharp(keyed).resize({ height: 96 }).webp({ quality: 92 }).toFile(join(pubPhotos, 'logo.webp'));
  await sharp(keyed).resize({ height: 96 }).png().toFile(join(pubPhotos, 'logo.png'));
  const logoMeta = await sharp(join(pubPhotos, 'logo.webp')).metadata();
  console.log(`✅ logo.webp / logo.png  (${logoMeta.width}×${logoMeta.height}, transparent)`);

  // 2) Favicons — wordmark transparent i qendërzuar mbi katror me sfondin e brand-it
  const wm = await sharp(keyed).metadata();
  const side = Math.round(wm.width * 1.12);
  const squareIcon = await sharp({
    create: { width: side, height: side, channels: 4, background: BG },
  })
    .composite([{ input: keyed, gravity: 'center' }])
    .png()
    .toBuffer();

  for (const [name, size] of [['favicon-32.png', 32], ['apple-touch-icon.png', 180], ['icon-512.png', 512]]) {
    await sharp(squareIcon).resize(size, size).png().toFile(join(pub, name));
    console.log(`✅ ${name} (${size}×${size})`);
  }

  // 3) OG image 1200×630 — foto Audi + gradient poshtë + logo në këndin poshtë-majtas
  const ogBase = await sharp(heroSrc).resize(1200, 630, { fit: 'cover' }).toBuffer();
  const gradSvg = Buffer.from(
    `<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="g" x1="0" y1="0" x2="0" y2="1"><stop offset="0.35" stop-color="${BG}" stop-opacity="0"/><stop offset="1" stop-color="${BG}" stop-opacity="0.88"/></linearGradient></defs><rect width="1200" height="630" fill="url(#g)"/></svg>`
  );
  const ogLogo = await sharp(keyed).resize({ width: 340 }).png().toBuffer();
  const ogLogoMeta = await sharp(ogLogo).metadata();
  await sharp(ogBase)
    .composite([
      { input: gradSvg, top: 0, left: 0 },
      { input: ogLogo, left: 56, top: 630 - ogLogoMeta.height - 56 },
    ])
    .jpeg({ quality: 80 })
    .toFile(join(pub, 'og-image.jpg'));
  const ogSize = (await sharp(join(pub, 'og-image.jpg')).metadata());
  console.log(`✅ og-image.jpg (${ogSize.width}×${ogSize.height})`);

  console.log('\n🎉 Asetet e brand-it u gjeneruan. Kontrollo public/photos/logo.png me sy para deploy-it.');
}

main().catch(console.error);
