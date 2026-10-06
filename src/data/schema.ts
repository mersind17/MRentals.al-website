// Të dhënat e strukturuara (schema.org / JSON-LD) që i përdorin të gjitha faqet.
import { CARS } from './cars';
import { REVIEWS, RATING, PHONE, INSTAGRAM, MAPS_URL, SITE_URL } from './site';
import { T, type Lang } from '../i18n';

export const BUSINESS_ID = `${SITE_URL}/#business`;

export const business = () => ({
  '@type': 'AutoRental',
  '@id': BUSINESS_ID,
  name: 'MRentals',
  url: `${SITE_URL}/`,
  image: `${SITE_URL}/og-image.jpg`,
  logo: `${SITE_URL}/icon-512.png`,
  telephone: PHONE,
  priceRange: '€25 - €55',
  currenciesAccepted: 'EUR',
  knowsLanguage: ['sq', 'en'],
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Bulevardi Qemal Stafa',
    addressLocality: 'Elbasan',
    addressCountry: 'AL',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 41.1125, longitude: 20.0822 },
  hasMap: MAPS_URL,
  areaServed: [
    { '@type': 'City', name: 'Elbasan' },
    { '@type': 'City', name: 'Tiranë' },
    { '@type': 'Airport', name: 'Tirana International Airport (Rinas)', iataCode: 'TIA' },
  ],
  openingHoursSpecification: [{
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    opens: '00:00',
    closes: '23:59',
  }],
  sameAs: [INSTAGRAM, MAPS_URL],
  aggregateRating: { '@type': 'AggregateRating', ratingValue: RATING.value, reviewCount: String(RATING.count) },
  review: REVIEWS.map((r) => ({
    '@type': 'Review',
    author: { '@type': 'Person', name: r.name },
    reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
    reviewBody: r.text,
  })),
});

export const fleet = (lang: Lang, pageUrl: string) => ({
  '@type': 'OfferCatalog',
  '@id': `${pageUrl}#fleet`,
  name: lang === 'en' ? 'MRentals fleet' : 'Flota MRentals',
  itemListElement: CARS.map((c) => ({
    '@type': 'Offer',
    url: `${pageUrl}#flota`,
    price: String(c.price),
    priceCurrency: 'EUR',
    priceSpecification: { '@type': 'UnitPriceSpecification', price: String(c.price), priceCurrency: 'EUR', unitCode: 'DAY' },
    itemOffered: {
      '@type': 'Car',
      name: c.name,
      description: c.tagline[lang],
      modelDate: String(c.year),
      vehicleTransmission: c.transmission === 'Automatik' ? 'Automatic' : 'Manual',
      fuelType: 'Diesel',
      seatingCapacity: String(c.seats),
    },
  })),
});

export const faq = (lang: Lang, pageUrl: string) => ({
  '@type': 'FAQPage',
  '@id': `${pageUrl}#faq`,
  inLanguage: lang,
  mainEntity: T[lang].faq.items.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
});

export const website = () => ({
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  url: `${SITE_URL}/`,
  name: 'MRentals',
  inLanguage: ['sq', 'en'],
});

export const breadcrumb = (items: { name: string; url: string }[]) => ({
  '@type': 'BreadcrumbList',
  itemListElement: items.map((it, i) => ({ '@type': 'ListItem', position: i + 1, name: it.name, item: it.url })),
});
