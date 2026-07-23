// Faqet per-lokacion (SEO). SINKRON me scripts/seo-routes.mjs — nëse ndryshon slug-un
// ose meta-t këtu, përditëso edhe atje (prerender) dhe te public/sitemap.xml.

export interface Bilingual {
  sq: string;
  en: string;
}

export interface LocationData {
  slug: string;
  name: Bilingual;
  h1: Bilingual;
  metaTitle: Bilingual;
  metaDescription: Bilingual;
  intro: Bilingual;
  /** Paragrafë unikë (titull + tekst) për përmbajtje SEO të veçantë per faqe. */
  sections: { title: Bilingual; body: Bilingual }[];
}

export const LOCATIONS: LocationData[] = [
  {
    slug: 'makina-me-qera-elbasan',
    name: { sq: 'Elbasan', en: 'Elbasan' },
    h1: { sq: 'Makina me Qera në Elbasan', en: 'Car Rental in Elbasan' },
    metaTitle: {
      sq: 'Makina me Qera në Elbasan — Çmime nga 25€/ditë | MRentals',
      en: 'Car Rental in Elbasan — From €25/day | MRentals',
    },
    metaDescription: {
      sq: 'Makina me qera në Elbasan me çmime transparente nga 25€ deri 55€ në ditë. Flotë moderne, rezervim i shpejtë me WhatsApp, shërbim 24/7.',
      en: 'Car rental in Elbasan with transparent pricing from €25 to €55 per day. Modern fleet, fast WhatsApp booking, 24/7 service.',
    },
    intro: {
      sq: 'MRentals është shërbimi juaj lokal i makinave me qera në Elbasan. Me bazë në qytet, ju ofrojmë marrje të shpejtë të mjetit, çmime të qarta pa kosto të fshehura dhe një flotë të mirëmbajtur për çdo nevojë — nga makina ekonomike deri te sedanë premium.',
      en: 'MRentals is your local car rental service in Elbasan. Based in the city, we offer fast vehicle pick-up, clear pricing with no hidden costs, and a well-maintained fleet for every need — from economy cars to premium sedans.',
    },
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
  },
  {
    slug: 'makina-me-qera-tirane',
    name: { sq: 'Tiranë', en: 'Tirana' },
    h1: { sq: 'Makina me Qera në Tiranë', en: 'Car Rental in Tirana' },
    metaTitle: {
      sq: 'Makina me Qera në Tiranë — Dorëzim Falas në Qytet | MRentals',
      en: 'Car Rental in Tirana — Free City Delivery | MRentals',
    },
    metaDescription: {
      sq: 'Makina me qera në Tiranë me dorëzim në adresën tuaj. Çmime 25–55€/ditë, flotë moderne dhe rezervim i shpejtë përmes WhatsApp. Shërbim 24/7.',
      en: 'Car rental in Tirana with delivery to your address. Prices €25–55/day, modern fleet and fast WhatsApp booking. 24/7 service.',
    },
    intro: {
      sq: 'Ju sjellim makinën me qera direkt në Tiranë — në hotelin, banesën ose zyrën tuaj. Pa radhë në sportele dhe pa procedura të gjata: takohemi ku ju është më komode, ju dorëzojmë çelësat dhe ju nisni rrugën.',
      en: 'We bring your rental car directly to you in Tirana — at your hotel, apartment or office. No counter queues and no lengthy procedures: we meet where it suits you, hand over the keys, and you are on your way.',
    },
    sections: [
      {
        title: { sq: 'Dorëzim kudo në Tiranë', en: 'Delivery anywhere in Tirana' },
        body: {
          sq: 'Operojmë në të gjithë Tiranën — nga Blloku dhe qendra, te Kombinati, Astiri, Farka apo zonat periferike. Caktoni orën dhe vendin dhe ne jemi atje. I njëjti fleksibilitet vlen edhe për kthimin e mjetit në fund të qerasë.',
          en: 'We operate across all of Tirana — from Blloku and the centre to Kombinat, Astir, Farka and the outskirts. Set a time and place and we will be there. The same flexibility applies when returning the vehicle.',
        },
      },
      {
        title: { sq: 'Ideale për punë dhe turizëm', en: 'Ideal for business and tourism' },
        body: {
          sq: 'Nëse jeni në Tiranë për punë, sedanët tanë automatikë si Audi A5 ose VW Passat ofrojnë komoditet dhe paraqitje profesionale. Për turizëm, makinat ekonomike si VW Golf ose VW Polo janë zgjedhja e duhur për lëvizje të lehtë në trafikun e qytetit dhe konsum të ulët karburanti.',
          en: 'If you are in Tirana for business, our automatic sedans such as the Audi A5 or VW Passat offer comfort and a professional look. For tourism, economy cars like the VW Golf or VW Polo are the right choice for easy movement in city traffic and low fuel consumption.',
        },
      },
      {
        title: { sq: 'Nga Tirana drejt gjithë Shqipërisë', en: 'From Tirana to all of Albania' },
        body: {
          sq: 'Tirana është pika ideale e nisjes: Durrësi është 40 minuta larg, Kruja 45 minuta, Berati rreth 2 orë dhe Shkodra rreth 1 orë e 45 minuta. Të gjitha makinat tona janë të përshtatshme për udhëtime të gjata dhe të pajisura me kondicioner.',
          en: 'Tirana is the ideal starting point: Durrës is 40 minutes away, Kruja 45 minutes, Berat around 2 hours and Shkodra about 1 hour 45 minutes. All our cars are suitable for long journeys and equipped with air conditioning.',
        },
      },
    ],
  },
  {
    slug: 'makina-me-qera-rinas',
    name: { sq: 'Aeroporti i Rinasit', en: 'Tirana Airport' },
    h1: {
      sq: 'Makina me Qera në Aeroportin e Rinasit (TIA)',
      en: 'Car Rental at Tirana Airport (TIA)',
    },
    metaTitle: {
      sq: 'Makina me Qera Aeroporti Rinas (TIA) — Marrje 24/7 | MRentals',
      en: 'Car Rental Tirana Airport (TIA) — 24/7 Pick-up | MRentals',
    },
    metaDescription: {
      sq: 'Makina me qera në Aeroportin Ndërkombëtar të Tiranës (Rinas). Ju presim në terminal 24/7, pa radhë. Çmime 25–55€/ditë, rezervim me WhatsApp.',
      en: 'Car rental at Tirana International Airport (Rinas). We meet you at the terminal 24/7, no queues. Prices €25–55/day, WhatsApp booking.',
    },
    intro: {
      sq: 'Mbërrini në Rinas dhe makina ju pret. Ofrojmë marrje dhe dorëzim në Aeroportin Ndërkombëtar të Tiranës (TIA) 24 orë në ditë, 7 ditë të javës — përfshirë fluturimet e natës dhe ato me vonesë.',
      en: 'Land at Rinas and your car is waiting. We offer pick-up and drop-off at Tirana International Airport (TIA) 24 hours a day, 7 days a week — including night and delayed flights.',
    },
    sections: [
      {
        title: { sq: 'Si funksionon takimi në aeroport', en: 'How the airport meeting works' },
        body: {
          sq: 'Na dërgoni numrin dhe orarin e fluturimit kur rezervoni. Ne ndjekim fluturimin tuaj, kështu që edhe nëse ka vonesë, dikush do t\'ju presë. Takimi bëhet pranë daljes së terminalit të mbërritjeve — dorëzimi i çelësave dhe kontrolli i mjetit zgjasin vetëm pak minuta.',
          en: 'Send us your flight number and arrival time when booking. We track your flight, so even if it is delayed someone will be waiting for you. The meeting takes place near the arrivals terminal exit — the key handover and vehicle check take only a few minutes.',
        },
      },
      {
        title: { sq: 'Pa radhë, pa pritje', en: 'No queues, no waiting' },
        body: {
          sq: 'Ndryshe nga sportelet e mëdha me radhë të gjata pas çdo fluturimi, ne punojmë me takime individuale. Kjo do të thotë që ju nuk humbisni kohë pas një udhëtimi të gjatë — merrni çelësat dhe niseni drejt Tiranës, bregdetit ose destinacionit tuaj.',
          en: 'Unlike large rental counters with long queues after every flight, we work with individual appointments. That means you do not waste time after a long journey — take the keys and head for Tirana, the coast, or wherever you are going.',
        },
      },
      {
        title: { sq: 'Rinasi si pikënisje', en: 'Rinas as your starting point' },
        body: {
          sq: 'Aeroporti i Rinasit ndodhet rreth 17 km nga qendra e Tiranës (afërsisht 25 minuta) dhe rreth 30 minuta nga Durrësi. Me makinë me qera nga aeroporti, ju keni liri të plotë të lëvizjes që nga momenti i parë, pa varësi nga taksitë apo transporti publik.',
          en: 'Rinas Airport is about 17 km from central Tirana (roughly 25 minutes) and around 30 minutes from Durrës. With a rental car from the airport you have complete freedom of movement from the very first moment, with no dependence on taxis or public transport.',
        },
      },
    ],
  },
];

export const getLocationBySlug = (slug: string): LocationData | undefined =>
  LOCATIONS.find((l) => l.slug === slug);
