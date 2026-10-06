// Faqet e lokacioneve (SEO). Slug-u shqip është I NJËJTË me faqen live — mos e ndrysho.
// Teksti vjen nga lib/locations.ts i faqes live (ku kjo faqe sjell ~90 klikime / 6 muaj).
import type { Lang } from '../i18n';

type L = Record<Lang, string>;

export interface Location {
  key: string;
  /** Path-i për secilën gjuhë. */
  path: Record<Lang, string>;
  name: L;
  metaTitle: L;
  metaDescription: L;
  eyebrow: L;
  h1: L;
  intro: L;
  highlights: Record<Lang, string[]>;
  fleetEyebrow: L;
  fleetTitle: L;
  sections: { title: L; body: L }[];
}

export const ELBASAN: Location = {
  key: 'elbasan',
  path: { sq: '/makina-me-qera-elbasan', en: '/en/car-rental-elbasan' },
  name: { sq: 'Elbasan', en: 'Elbasan' },
  metaTitle: {
    sq: 'Makina me Qera në Elbasan — Çmime nga 25€/ditë | MRentals',
    en: 'Car Rental in Elbasan — From €25/day | MRentals',
  },
  metaDescription: {
    sq: 'Makina me qera në Elbasan me çmime transparente nga 25€ deri 55€ në ditë. Flotë e mirëmbajtur, rezervim i shpejtë me WhatsApp, shërbim 24/7.',
    en: 'Rent a car in Elbasan with transparent prices from €25 to €55 per day. Well-maintained fleet, fast WhatsApp booking, 24/7 service.',
  },
  eyebrow: { sq: 'Elbasan · Hapur 24/7', en: 'Elbasan · Open 24/7' },
  h1: { sq: 'Makina me Qera në Elbasan', en: 'Car Rental in Elbasan' },
  intro: {
    sq: 'MRentals është shërbimi juaj lokal i makinave me qera në Elbasan. Me bazë në qytet, ju ofrojmë marrje të shpejtë të mjetit, çmime të qarta pa kosto të fshehura dhe një flotë të mirëmbajtur për çdo nevojë — nga makina ekonomike deri te sedanë premium.',
    en: 'MRentals is your local car rental service in Elbasan. Based in the city, we offer fast vehicle pick-up, clear pricing with no hidden costs and a well-maintained fleet for every need — from economy cars to premium sedans.',
  },
  highlights: {
    sq: ['Nga 25€/ditë', 'Rezervim me WhatsApp', 'Marrje në Rinas 24/7'],
    en: ['From €25/day', 'Book on WhatsApp', 'Rinas airport pick-up 24/7'],
  },
  fleetEyebrow: { sq: 'Çmimet', en: 'Prices' },
  fleetTitle: { sq: 'Çmimet e makinave me qera në Elbasan.', en: 'Car rental prices in Elbasan.' },
  sections: [
    {
      title: { sq: 'Pse të zgjidhni MRentals në Elbasan', en: 'Why choose MRentals in Elbasan' },
      body: {
        sq: 'Jemi biznes lokal me njohuri të thella të zonës. Kjo do të thotë marrje dhe dorëzim fleksibël brenda Elbasanit, këshilla reale për rrugët dhe destinacionet, si dhe mbështetje të drejtpërdrejtë në telefon gjatë gjithë qerasë. Çdo makinë kalon kontrolle të rregullta teknike dhe pastrohet para çdo dorëzimi.',
        en: 'We are a local business with deep knowledge of the area. That means flexible pick-up and drop-off within Elbasan, real advice on routes and destinations, and direct phone support throughout your rental. Every car undergoes regular technical checks and is cleaned before each handover.',
      },
    },
    {
      title: { sq: 'Eksploroni Elbasanin dhe rrethinat', en: 'Explore Elbasan and its surroundings' },
      body: {
        sq: 'Me një makinë me qera nga Elbasani mund të vizitoni lehtësisht Kalanë e Elbasanit, Liqenin e Belshit, Parkun Kombëtar të Shebenikut ose të nisni drejt bregdetit. Distanca deri në Tiranë është rreth 45 minuta me autostradë, çka e bën Elbasanin bazë ideale për të eksploruar Shqipërinë e Mesme.',
        en: 'With a rental car from Elbasan you can easily visit Elbasan Castle, Belsh Lake, Shebenik National Park, or head to the coast. Tirana is roughly 45 minutes away by motorway, making Elbasan an ideal base for exploring central Albania.',
      },
    },
    {
      title: { sq: 'Rezervimi është i thjeshtë', en: 'Booking is simple' },
      body: {
        sq: 'Nuk ka formularë të gjatë. Na shkruani në WhatsApp me datat dhe makinën që dëshironi, dhe ju konfirmojmë disponueshmërinë menjëherë. Ju duhen vetëm patenta e vlefshme dhe një dokument identifikimi. Sigurimi i plotë (kasko) ofrohet si opsion me pagesë shtesë.',
        en: 'No lengthy forms. Message us on WhatsApp with your dates and preferred car, and we confirm availability right away. All you need is a valid driving licence and an ID document. Full insurance (kasko) is available as an optional add-on at extra cost.',
      },
    },
  ],
};
