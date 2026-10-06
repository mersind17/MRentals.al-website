// Gjeneron pllakën e sfondit "logo pattern" nga Figma (logo e rrotulluar -32.52°, rreshta të zhvendosur).
// Mobile: logo 96×11, hap 150×156 · Desktop: logo 110×13, hap 180×184. Render @2x.
import sharp from 'sharp';

async function tile(out, { lw, lh, tw, th, centers }) {
  const S = 2;
  const logo = await sharp('raw/pattern-logo.png')
    .resize(lw * S, lh * S, { fit: 'fill' })
    .rotate(-32.52, { background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png().toBuffer();
  const { width: rw, height: rh } = await sharp(logo).metadata();
  const W = tw * S, H = th * S;
  const comps = [];
  for (const [cx, cy] of centers)
    for (const dx of [-1, 0, 1]) for (const dy of [-1, 0, 1])
      comps.push({ input: logo, left: Math.round((cx + dx * tw) * S - rw / 2 + W), top: Math.round((cy + dy * th) * S - rh / 2 + H) });
  await sharp({ create: { width: W * 3, height: H * 3, channels: 4, background: { r: 0, g: 0, b: 0, alpha: 0 } } })
    .composite(comps).png().toBuffer()
    .then((b) => sharp(b).extract({ left: W, top: H, width: W, height: H }).webp({ quality: 80, alphaQuality: 80 }).toFile(out));
  console.log(out);
}

await tile('public/img/pattern-m.webp', { lw: 96, lh: 11, tw: 150, th: 156, centers: [[75, 52], [0, 130]] });
await tile('public/img/pattern-d.webp', { lw: 110, lh: 13, tw: 180, th: 184, centers: [[90, 151.14], [0, 59.14]] });
