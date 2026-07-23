
export enum Language {
  SQ = 'sq',
  EN = 'en'
}

export enum Transmission {
  AUTO = 'Auto',
  MANUAL = 'Manual'
}

export enum Fuel {
  DIESEL = 'Diesel',
  PETROL = 'Petrol',
  HYBRID = 'Hybrid',
  LPG = '100% LPG'
}

export interface Car {
  /** Përdoret edhe si slug i URL-së: /makina/<id>. SINKRON me scripts/seo-routes.mjs + sitemap. */
  id: string;
  name: string;
  engine: string;
  transmission: Transmission;
  fuel: Fuel;
  year: number;
  pricePerDay: number;
  // Path bazë pa suffix (p.sh. 'photos/audi-a5-1'); variantet -800/-1600.webp + -800.jpg gjenerohen nga scripts/optimize-images.mjs
  images: string[];
  seats: number;
  features: string[];
  isAvailable: boolean;
  category: 'Premium' | 'Standard' | 'SUV';
  /** Përshkrim unik SEO për faqen /makina/<id>. */
  seoText: { sq: string; en: string };
}

export interface TranslationSet {
  [key: string]: {
    en: string;
    sq: string;
  };
}

export interface Review {
  id: number;
  name: string;
  rating: number;
  comment: string;
  date: string;
}
