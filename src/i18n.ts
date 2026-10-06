// Të gjitha tekstet e faqes në shqip (/) dhe anglisht (/en).
// Një komponent merr `lang` dhe lexon `T[lang]` — dizajni mbetet i njëjtë për të dyja gjuhët.
import { PHONE_DISPLAY } from './data/site';

export type Lang = 'sq' | 'en';
export const LANGS: Lang[] = ['sq', 'en'];

/** Path-i i kryefaqes për secilën gjuhë. */
export const homePath = (lang: Lang) => (lang === 'en' ? '/en' : '/');
/** Link drejt një seksioni të kryefaqes, p.sh. section('en','flota') → /en#flota */
export const section = (lang: Lang, id: string) => `${lang === 'en' ? '/en' : '/'}#${id}`;

const sq = {
  htmlLang: 'sq',
  ogLocale: 'sq_AL',
  meta: {
    title: 'Makina me Qera në Elbasan nga 25€/ditë | MRentals',
    description:
      'Makina me qera në Elbasan, Tiranë dhe Aeroportin e Rinasit (TIA). Flotë e mirëmbajtur, çmime transparente 25–55€/ditë, rezervim i shpejtë me WhatsApp, 24/7.',
  },
  wa: {
    default: 'Përshëndetje! Dua të rezervoj një makinë.',
    question: 'Përshëndetje! Kam një pyetje.',
    car: (name: string, trans: string, price: number) => `Përshëndetje! Dua të rezervoj ${name} (${trans.toLowerCase()}, ${price}€/ditë).`,
  },
  nav: [
    { label: 'Flota', id: 'flota' },
    { label: 'Pse ne', id: 'pse-ne' },
    { label: 'FAQ', id: 'faq' },
    { label: 'Kontakti', id: 'kontakti' },
  ],
  header: {
    home: 'MRentals – Kryefaqja',
    navLabel: 'Kryesore',
    book: 'Rezervo',
    bookWa: 'Rezervo në WhatsApp',
    open: 'Hap menunë',
    close: 'Mbyll menunë',
    switchLabel: 'English',
    switchShort: 'EN',
  },
  hero: {
    title: ['Makina me qera', 'Elbasan.'],
    sub: 'Marrje dhe dorëzim në Aeroportin e Rinasit',
    book: 'Rezervo tani',
    fleet: 'Shiko flotën',
  },
  fleet: {
    eyebrow: 'Flota jonë',
    title: 'Zgjidh makinën tënde.',
    price: (p: number) => `${p}€/ditë`,
    seats: 'vende',
    trans: { Automatik: 'Automatik', Manual: 'Manual' } as Record<string, string>,
    fuel: 'Naftë',
    book: 'Rezervo',
    alt: (name: string) => `${name} me qera në Elbasan`,
  },
  steps: {
    eyebrow: 'Si funksionon',
    title: 'Rezervo në tre hapa.',
    items: [
      { title: 'Zgjidh makinën', text: 'Shfleto flotën dhe zgjidh makinën që të përshtatet, nga Polo deri te Audi A5.' },
      { title: 'Na shkruaj në WhatsApp', text: 'Dërgo datat dhe makinën. Ta konfirmojmë disponueshmërinë menjëherë.' },
      { title: 'Merre makinën', text: 'Në Elbasan ose direkt në Aeroportin e Rinasit, 24/7.' },
    ],
    note: 'Të duhet vetëm patenta e vlefshme dhe karta e identitetit ose pasaporta.',
  },
  why: {
    eyebrow: 'Avantazhi MRentals',
    title: 'Pse të na zgjidhni.',
    items: [
      { icon: '€', title: 'Çmime transparente', text: 'Ajo që sheh është ajo që paguan. Pa kosto të fshehura.' },
      { icon: '✦', title: 'Flotë e mirëmbajtur', text: 'Makina të kontrolluara rregullisht, gati për çdo udhëtim.' },
      { icon: '24/7', title: 'Gjithmonë në dispozicion', text: 'Na gjen në WhatsApp çdo orë, edhe për marrje në aeroport natën.' },
    ],
  },
  reviews: {
    eyebrow: 'Vlerësime nga Google',
    title: 'Çfarë thonë klientët.',
    count: (n: number) => `Bazuar në ${n} vlerësime në Google`,
    stars: (v: string) => `${v} nga 5 yje`,
    more: 'Shiko të gjitha në Google',
  },
  faq: {
    eyebrow: 'Pyetje të shpeshta',
    title: 'Gjithçka para rezervimit.',
    leadShort: 'Keni pyetje të tjera? Na shkruani në WhatsApp.',
    leadLong: 'Keni pyetje të tjera? Na shkruani në WhatsApp, ju përgjigjemi shpejt.',
    cta: 'Shkruaj në WhatsApp',
    items: [
      {
        q: 'Si mund të rezervoj një makinë?',
        a: `Rezervimi bëhet i gjithi përmes WhatsApp në ${PHONE_DISPLAY}. Na dërgoni datat dhe makinën që dëshironi dhe ju konfirmojmë disponueshmërinë menjëherë.`,
      },
      {
        q: 'Çfarë dokumentesh më duhen?',
        a: 'Një patentë e vlefshme dhe një dokument identifikimi (kartë identiteti ose pasaportë). Për detaje mbi rastin tuaj konkret, na shkruani në WhatsApp.',
      },
      {
        q: 'A bëni dorëzim në Aeroportin e Rinasit?',
        a: 'Po. Ofrojmë marrje dhe dorëzim në Aeroportin Ndërkombëtar të Tiranës (TIA) 24/7, si dhe kudo në Tiranë e Elbasan. Na tregoni orarin e fluturimit dhe ju presim atje.',
      },
      {
        q: 'Sa kushton qeraja në ditë?',
        a: 'Çmimet variojnë nga 25€ deri në 55€ në ditë, në varësi të makinës. Çmimet janë transparente pa kosto të fshehura — ajo që shihni është ajo që paguani.',
      },
      {
        q: 'A ofrohet sigurim i plotë (kasko)?',
        a: 'Sigurimi i plotë (kasko) ofrohet si opsion me pagesë shtesë — nuk është i përfshirë si standard. Na kontaktoni në WhatsApp dhe ju shpjegojmë opsionet.',
      },
      {
        q: 'A ka kërkesa të tjera (depozitë, moshë minimale)?',
        a: 'Kushtet mund të ndryshojnë sipas mjetit dhe periudhës së qerasë. Na shkruani në WhatsApp dhe ju dërgojmë menjëherë kushtet e plota.',
      },
    ],
  },
  map: {
    eyebrow: 'Zyra jonë',
    title: 'Na gjeni në Elbasan.',
    mapLabel: 'Hap vendndodhjen në Google Maps',
    alt: 'Harta e zyrës MRentals në Bulevardin Qemal Stafa, Elbasan',
    address: 'Adresa',
    hours: 'Orari',
    open: 'Hapur 24/7, çdo ditë',
    openMaps: 'Hap në Google Maps',
    directions: 'Merr udhëzimet e rrugës',
  },
  loc: {
    home: 'Kryefaqja',
    breadcrumb: 'Ku ndodhesh',
    prices: 'Shiko çmimet',
    photoAlt: 'Audi A5 me qera në Elbasan',
  },
  contact: {
    kicker: 'Hapur 24/7',
    title: ['Gati për të nisur', 'udhëtimin?'],
    lead: 'Na shkruani datat dhe makinën që dëshironi. Ju konfirmojmë menjëherë.',
    bookWa: 'Rezervo në WhatsApp',
    call: 'Thirr',
    brand: ['Makina me qera në Elbasan', 'dhe Aeroportin e Rinasit.'],
    pages: 'Faqja',
    office: 'Zyra',
    city: 'Elbasan, Shqipëri',
    locLink: 'Makina me qera Elbasan',
    openMaps: 'Hap në Google Maps ↗',
    contactH: 'Kontakt',
    bottom: 'Hapur 24/7 · WhatsApp',
  },
};

type Dict = typeof sq;

const en: Dict = {
  htmlLang: 'en',
  ogLocale: 'en_US',
  meta: {
    title: 'Car Rental Elbasan & Tirana Airport from €25/day | MRentals',
    description:
      'Rent a car in Elbasan, Tirana or at Tirana Airport (Rinas). Well-kept fleet, transparent prices from €25/day, quick WhatsApp booking, open 24/7.',
  },
  wa: {
    default: "Hello! I'd like to rent a car.",
    question: 'Hello! I have a question.',
    car: (name, trans, price) => `Hello! I'd like to book the ${name} (${trans.toLowerCase()}, €${price}/day).`,
  },
  nav: [
    { label: 'Fleet', id: 'flota' },
    { label: 'Why us', id: 'pse-ne' },
    { label: 'FAQ', id: 'faq' },
    { label: 'Contact', id: 'kontakti' },
  ],
  header: {
    home: 'MRentals – Home',
    navLabel: 'Main',
    book: 'Book',
    bookWa: 'Book on WhatsApp',
    open: 'Open menu',
    close: 'Close menu',
    switchLabel: 'Shqip',
    switchShort: 'SQ',
  },
  hero: {
    title: ['Car rental', 'Elbasan.'],
    sub: 'Pick-up and drop-off at Tirana Airport (Rinas)',
    book: 'Book now',
    fleet: 'See the fleet',
  },
  fleet: {
    eyebrow: 'Our fleet',
    title: 'Choose your car.',
    price: (p) => `€${p}/day`,
    seats: 'seats',
    trans: { Automatik: 'Automatic', Manual: 'Manual' },
    fuel: 'Diesel',
    book: 'Book',
    alt: (name) => `${name} car rental in Elbasan, Albania`,
  },
  steps: {
    eyebrow: 'How it works',
    title: 'Book in three steps.',
    items: [
      { title: 'Choose your car', text: 'Browse the fleet and pick the car that suits you, from the Polo to the Audi A5.' },
      { title: 'Message us on WhatsApp', text: 'Send us your dates and the car. We confirm availability right away.' },
      { title: 'Pick up your car', text: 'In Elbasan or directly at Tirana Airport (Rinas), 24/7.' },
    ],
    note: 'All you need is a valid driving licence and an ID card or passport.',
  },
  why: {
    eyebrow: 'The MRentals advantage',
    title: 'Why choose us.',
    items: [
      { icon: '€', title: 'Transparent prices', text: 'What you see is what you pay. No hidden fees.' },
      { icon: '✦', title: 'Well-kept fleet', text: 'Cars checked regularly and ready for any trip.' },
      { icon: '24/7', title: 'Always available', text: 'Reach us on WhatsApp any time, even for night pick-ups at the airport.' },
    ],
  },
  reviews: {
    eyebrow: 'Google reviews',
    title: 'What our customers say.',
    count: (n) => `Based on ${n} reviews on Google`,
    stars: (v) => `${v} out of 5 stars`,
    more: 'See all on Google',
  },
  faq: {
    eyebrow: 'Frequently asked questions',
    title: 'Everything before you book.',
    leadShort: 'More questions? Message us on WhatsApp.',
    leadLong: 'More questions? Message us on WhatsApp, we reply fast.',
    cta: 'Message us on WhatsApp',
    items: [
      {
        q: 'How do I book a car?',
        a: `Booking is done entirely via WhatsApp at ${PHONE_DISPLAY}. Send us the dates and the car you want, and we confirm availability right away.`,
      },
      {
        q: 'What documents do I need?',
        a: 'A valid driving licence and an identification document (ID card or passport). For details about your specific case, message us on WhatsApp.',
      },
      {
        q: 'Do you deliver to Tirana Airport (Rinas)?',
        a: 'Yes. We offer pick-up and drop-off at Tirana International Airport (TIA) 24/7, as well as anywhere in Tirana and Elbasan. Tell us your flight time and we will be waiting.',
      },
      {
        q: 'How much does it cost per day?',
        a: 'Prices range from €25 to €55 per day depending on the car. Pricing is transparent with no hidden fees — what you see is what you pay.',
      },
      {
        q: 'Is full insurance (kasko) available?',
        a: 'Full insurance (kasko) is available as an optional add-on at an extra cost — it is not included by default. Contact us on WhatsApp and we will explain the options.',
      },
      {
        q: 'Are there other requirements (deposit, minimum age)?',
        a: 'Conditions may vary depending on the vehicle and rental period. Message us on WhatsApp and we will send you the full terms immediately.',
      },
    ],
  },
  map: {
    eyebrow: 'Our office',
    title: 'Find us in Elbasan.',
    mapLabel: 'Open the location in Google Maps',
    alt: 'Map of the MRentals office on Qemal Stafa Boulevard, Elbasan',
    address: 'Address',
    hours: 'Opening hours',
    open: 'Open 24/7, every day',
    openMaps: 'Open in Google Maps',
    directions: 'Get directions',
  },
  loc: {
    home: 'Home',
    breadcrumb: 'Breadcrumb',
    prices: 'See prices',
    photoAlt: 'Audi A5 car rental in Elbasan',
  },
  contact: {
    kicker: 'Open 24/7',
    title: ['Ready to start', 'your trip?'],
    lead: 'Send us your dates and the car you want. We confirm right away.',
    bookWa: 'Book on WhatsApp',
    call: 'Call',
    brand: ['Car rental in Elbasan', 'and at Tirana Airport.'],
    pages: 'Pages',
    office: 'Office',
    city: 'Elbasan, Albania',
    locLink: 'Car rental Elbasan',
    openMaps: 'Open in Google Maps ↗',
    contactH: 'Contact',
    bottom: 'Open 24/7 · WhatsApp',
  },
};

export const T: Record<Lang, Dict> = { sq, en };
