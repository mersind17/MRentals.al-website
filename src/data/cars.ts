// Flota. id = slug-u i URL-së (/makina/<id>) — I NJËJTË me faqen live, mos e ndrysho (SEO).
// Çmimet/specifikimet vijnë nga constants.ts i faqes live; taglines nga Figma.
// Gjeometria e "showcase" është në px të Figma-s: mobile mbi 390px, desktop mbi 560px (karta).
import type { ImageMetadata } from 'astro';
import audi from '../assets/cars/audi.png';
import passat from '../assets/cars/passat.png';
import jetta from '../assets/cars/jetta.png';
import skoda from '../assets/cars/skoda.png';
import golfBlu from '../assets/cars/golf-blu.png';
import golfZi from '../assets/cars/golf-zi.png';
import polo from '../assets/cars/polo.png';

type Box = [left: number, top: number, width: number, height: number];
/** Hija "ambient": qendra, madhësia e elipsës dhe rrotullimi (gradë). */
type Shadow = [cx: number, cy: number, w: number, h: number, rot: number];
interface Layout {
  name: [left: number, top: number, size: number];
  car: Box;
  shadow: Shadow;
  /** Ku nis blloku i informacionit (= lartësia e skenës). */
  infoTop: number;
}

export interface Car {
  id: string;
  name: string;
  /** Emri i madh në sfond (League Gothic). */
  display: string;
  tagline: { sq: string; en: string };
  price: number;
  transmission: 'Automatik' | 'Manual';
  fuel: 'Naftë';
  seats: number;
  year: number;
  engine: string;
  image: ImageMetadata;
  nameColor: string;
  m: Layout;
  d: Layout;
}

const PLUM = '#45334a';
const SLATE = '#33333d';

export const CARS: Car[] = [
  {
    id: 'audi-a5', name: 'Audi A5', display: 'AUDI A5',
    tagline: { sq: 'Elegancë sportive për çdo udhëtim.', en: 'Sporty elegance for every trip.' },
    price: 55, transmission: 'Automatik', fuel: 'Naftë', seats: 5, year: 2013, engine: '2.0 TDI',
    image: audi, nameColor: PLUM,
    m: { name: [19, 8, 152], car: [46, 79, 298, 150], shadow: [204.55, 218.37, 262.7, 29.54, -4.12], infoTop: 279 },
    d: { name: [20, 50, 224], car: [56, 151, 448, 225], shadow: [294.35, 360.25, 394.93, 44.44, -4.12], infoTop: 424 },
  },
  {
    id: 'vw-passat-sel', name: 'VW Passat SEL', display: 'PASSAT',
    tagline: { sq: 'Komoditet për rrugë të gjata.', en: 'Comfort for long drives.' },
    price: 45, transmission: 'Automatik', fuel: 'Naftë', seats: 5, year: 2015, engine: '2.0 TDI',
    image: passat, nameColor: SLATE,
    m: { name: [19, 7, 162], car: [46, 85, 298, 153], shadow: [201.64, 227.34, 260.62, 31.0, -4.61], infoTop: 288 },
    d: { name: [20, 33, 239], car: [56, 145, 448, 231], shadow: [289.97, 358.97, 391.81, 46.58, -4.61], infoTop: 424 },
  },
  {
    id: 'vw-jetta', name: 'VW Jetta', display: 'JETTA',
    tagline: { sq: 'Sedan i besueshëm për punë dhe familje.', en: 'A reliable sedan for work and family.' },
    price: 40, transmission: 'Automatik', fuel: 'Naftë', seats: 5, year: 2013, engine: '1.6 TDI',
    image: jetta, nameColor: SLATE,
    m: { name: [18, -1, 217], car: [46, 124, 298, 155], shadow: [205.09, 268.28, 263.27, 30.06, -4.23], infoTop: 329 },
    d: { name: [29, -28, 308], car: [56, 144, 448, 232], shadow: [295.15, 360.31, 395.79, 45.18, -4.23], infoTop: 424 },
  },
  {
    id: 'skoda-octavia', name: 'Skoda Octavia', display: 'SKODA',
    tagline: { sq: 'Praktike, e gjerë dhe ekonomike.', en: 'Practical, roomy and economical.' },
    price: 30, transmission: 'Automatik', fuel: 'Naftë', seats: 5, year: 2009, engine: '1.9 TDI',
    image: skoda, nameColor: PLUM,
    m: { name: [18, 5, 185], car: [46, 103, 298, 151], shadow: [203.87, 242.5, 260.51, 32.13, -3.85], infoTop: 304 },
    d: { name: [20, 6, 272], car: [56, 149, 448, 227], shadow: [293.33, 359.32, 391.64, 48.31, -3.85], infoTop: 424 },
  },
  {
    id: 'vw-golf-6-auto', name: 'VW Golf 6', display: 'GOLF 6',
    tagline: { sq: 'Kompakte dhe e shkathët për qytetin.', en: 'Compact and nimble in the city.' },
    price: 35, transmission: 'Automatik', fuel: 'Naftë', seats: 5, year: 2013, engine: '2.0 TDI',
    image: golfBlu, nameColor: SLATE,
    m: { name: [18, 5, 185], car: [46, 97, 298, 164], shadow: [204.76, 250.64, 268.73, 28.11, -3.58], infoTop: 311 },
    d: { name: [20, -5, 272], car: [56, 130, 448, 246], shadow: [294.67, 361.32, 403.99, 42.27, -3.58], infoTop: 424 },
  },
  {
    id: 'vw-golf-6-manual', name: 'VW Golf 6', display: 'GOLF 6',
    tagline: { sq: 'Stil i thjeshtë, komoditet çdo ditë.', en: 'Simple style, everyday comfort.' },
    price: 30, transmission: 'Manual', fuel: 'Naftë', seats: 5, year: 2009, engine: '1.6 TDI',
    image: golfZi, nameColor: PLUM,
    m: { name: [18, 5, 185], car: [46, 102, 298, 154], shadow: [205.9, 245.44, 265.93, 29.57, -3.88], infoTop: 306 },
    d: { name: [20, 4, 272], car: [56, 145, 448, 231], shadow: [296.39, 360.39, 399.78, 44.49, -3.88], infoTop: 424 },
  },
  {
    id: 'vw-polo', name: 'VW Polo', display: 'POLO',
    tagline: { sq: 'E vogël, ekonomike, e lehtë për qytetin.', en: 'Small, economical and easy in the city.' },
    price: 25, transmission: 'Manual', fuel: 'Naftë', seats: 4, year: 2008, engine: '1.4 TDI',
    image: polo, nameColor: SLATE,
    m: { name: [46, 2, 210], car: [46, 120, 298, 157], shadow: [206.54, 265.98, 266.59, 29.96, -4.08], infoTop: 327 },
    d: { name: [61, -30, 308], car: [56, 141, 448, 235], shadow: [297.35, 360.48, 400.78, 45.06, -4.08], infoTop: 424 },
  },
];

export const carById = (id: string) => CARS.find((c) => c.id === id)!;
