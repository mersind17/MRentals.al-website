// Të dhënat e biznesit — numri, linket, vlerësimet. Tekstet e faqes janë te src/i18n.ts.

export const SITE_URL = 'https://mrentals.al';
export const PHONE = '+355695169873';
export const PHONE_DISPLAY = '+355 69 516 9873';
export const WHATSAPP = '355695169873';
export const INSTAGRAM = 'https://www.instagram.com/mrentals_al';
export const INSTAGRAM_HANDLE = '@mrentals_al';
export const MAPS_URL = 'https://maps.app.goo.gl/X39XyEFoc9ii8hGL7';
/** Hap dritaren e vlerësimeve në Google (lrd = ID-ja e biznesit nga linku i Maps). */
export const REVIEWS_URL = 'https://www.google.com/search?q=MRentals+Elbasan#lrd=0x13504311210b58db:0x8b49ecaa97686724,1';
/** Google Maps direkt në modalitetin e udhëzimeve drejt zyrës. */
export const DIRECTIONS_URL = 'https://www.google.com/maps/dir/?api=1&destination=41.1148913,20.0882503';
export const ADDRESS = 'Bulevardi Qemal Stafa, Elbasan';
export const RATING = { value: '5.0', count: 43 };

/** Link WhatsApp me mesazh të parashkruar. */
export const waLink = (text: string) =>
  `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`;

export const REVIEWS = [
  {
    name: 'Adelina Ruci',
    text: 'The best service I’ve received in a long time. Very comfortable cars reasonable price and more important very nice and polite people. Highly recommended',
  },
  {
    name: 'Adel Redhwan',
    text: "Ailemle birlikte birkaç günlüğüne Elbasan şehrindeydim ve MRentals'tan kiraladığım arabadan çok memnun kaldım. Uygun fiyat ve konforlu",
  },
  { name: 'unejs duka', text: 'Great prices and very comfortable cars' },
];
