// Pret fotot nga Figma (1080×1920 / 2000×2000) te zona që shihet në dizajn.
// Përqindjet vijnë nga get_design_context (left/top/width/height e <img> brenda kutisë).
import sharp from 'sharp';

const jobs = [
  ['raw/passat.png',   'src/assets/cars/passat.png',   -10.87, -192.37, 121.08, 418.3],
  ['raw/golf-blu.png', 'src/assets/cars/golf-blu.png', -11.22, -207.63, 122.45, 395.88],
  ['raw/audi.png',     'src/assets/cars/audi.png',     -8.8,   -192.21, 117.39, 415.58],
  ['raw/skoda.png',    'src/assets/cars/skoda.png',    -8.04,  -187.79, 117.39, 411.13],
  ['raw/jetta.png',    'src/assets/cars/jetta.png',    -9.32,  -198.31, 118.42, 405.92],
  ['raw/golf-zi.png',  'src/assets/cars/golf-zi.png',  -9.33,  -190.64, 118.55, 408.51],
  ['raw/polo.png',     'src/assets/cars/polo.png',     -9.7,   -186.56, 119.16, 406.5],
  ['raw/logo.png',     'src/assets/brand/logo.png',    -38.81, -711.45, 177.62, 1526.72],
];

for (const [src, out, l, t, w, h] of jobs) {
  const { width: W, height: H } = await sharp(src).metadata();
  const left = Math.round((-l / w) * W);
  const top = Math.round((-t / h) * H);
  const cw = Math.round((100 / w) * W);
  const ch = Math.round((100 / h) * H);
  await sharp(src).extract({ left, top, width: Math.min(cw, W - left), height: Math.min(ch, H - top) }).png().toFile(out);
  const m = await sharp(out).metadata();
  console.log(out, m.width + '×' + m.height);
}
