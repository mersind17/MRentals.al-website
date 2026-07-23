// Të dhënat SEO per route për prerender-in (scripts/prerender.mjs).
// SINKRON me: lib/locations.ts (lokacionet) dhe constants.ts (FLEET + seoText).
// Nëse shton/ndryshon një makinë ose lokacion, përditëso këtu DHE te public/sitemap.xml.

export const SITE = 'https://mrentals.al';

export const LOCATION_ROUTES = [
  {
    path: 'makina-me-qera-elbasan',
    title: 'Makina me Qera në Elbasan — Çmime nga 25€/ditë | MRentals',
    description:
      'Makina me qera në Elbasan me çmime transparente nga 25€ deri 55€ në ditë. Flotë moderne, rezervim i shpejtë me WhatsApp, shërbim 24/7.',
    h1: 'Makina me Qera në Elbasan',
    name: 'Elbasan',
    intro:
      'MRentals është shërbimi juaj lokal i makinave me qera në Elbasan. Me bazë në qytet, ju ofrojmë marrje të shpejtë të mjetit, çmime të qarta pa kosto të fshehura dhe një flotë të mirëmbajtur për çdo nevojë.',
    sections: [
      {
        title: 'Pse të zgjidhni MRentals në Elbasan',
        body: 'Jemi biznes lokal me njohuri të thella të zonës: marrje dhe dorëzim fleksibël brenda Elbasanit, këshilla reale për rrugët dhe mbështetje të drejtpërdrejtë gjatë gjithë qerasë.',
      },
      {
        title: 'Eksploroni Elbasanin dhe rrethinat',
        body: 'Vizitoni Kalanë e Elbasanit, Liqenin e Belshit ose Parkun Kombëtar të Shebenikut. Tirana është rreth 45 minuta larg me autostradë.',
      },
      {
        title: 'Rezervimi është i thjeshtë',
        body: 'Na shkruani në WhatsApp me datat dhe makinën që dëshironi. Ju duhen vetëm patenta e vlefshme dhe një dokument identifikimi. Sigurimi i plotë (kasko) ofrohet si opsion me pagesë shtesë.',
      },
    ],
  },
  {
    path: 'makina-me-qera-tirane',
    title: 'Makina me Qera në Tiranë — Dorëzim Falas në Qytet | MRentals',
    description:
      'Makina me qera në Tiranë me dorëzim në adresën tuaj. Çmime 25–55€/ditë, flotë moderne dhe rezervim i shpejtë përmes WhatsApp. Shërbim 24/7.',
    h1: 'Makina me Qera në Tiranë',
    name: 'Tiranë',
    intro:
      'Ju sjellim makinën me qera direkt në Tiranë — në hotelin, banesën ose zyrën tuaj. Pa radhë në sportele dhe pa procedura të gjata.',
    sections: [
      {
        title: 'Dorëzim kudo në Tiranë',
        body: 'Operojmë në të gjithë Tiranën — nga Blloku dhe qendra, te Kombinati, Astiri, Farka apo zonat periferike. Caktoni orën dhe vendin dhe ne jemi atje.',
      },
      {
        title: 'Ideale për punë dhe turizëm',
        body: 'Sedanët automatikë si Audi A5 ose VW Passat për udhëtime pune; makinat ekonomike si VW Golf ose VW Polo për lëvizje të lehtë në qytet.',
      },
      {
        title: 'Nga Tirana drejt gjithë Shqipërisë',
        body: 'Durrësi është 40 minuta larg, Kruja 45 minuta, Berati rreth 2 orë dhe Shkodra rreth 1 orë e 45 minuta.',
      },
    ],
  },
  {
    path: 'makina-me-qera-rinas',
    title: 'Makina me Qera Aeroporti Rinas (TIA) — Marrje 24/7 | MRentals',
    description:
      'Makina me qera në Aeroportin Ndërkombëtar të Tiranës (Rinas). Ju presim në terminal 24/7, pa radhë. Çmime 25–55€/ditë, rezervim me WhatsApp.',
    h1: 'Makina me Qera në Aeroportin e Rinasit (TIA)',
    name: 'Aeroporti i Rinasit',
    intro:
      'Mbërrini në Rinas dhe makina ju pret. Ofrojmë marrje dhe dorëzim në Aeroportin Ndërkombëtar të Tiranës (TIA) 24 orë në ditë, 7 ditë të javës.',
    sections: [
      {
        title: 'Si funksionon takimi në aeroport',
        body: 'Na dërgoni numrin e fluturimit kur rezervoni. Ne e ndjekim fluturimin tuaj, kështu që edhe me vonesë dikush do t\'ju presë pranë daljes së terminalit të mbërritjeve.',
      },
      {
        title: 'Pa radhë, pa pritje',
        body: 'Punojmë me takime individuale, jo me sportele me radhë. Merrni çelësat dhe niseni menjëherë drejt destinacionit tuaj.',
      },
      {
        title: 'Rinasi si pikënisje',
        body: 'Aeroporti ndodhet rreth 17 km nga qendra e Tiranës (afërsisht 25 minuta) dhe rreth 30 minuta nga Durrësi.',
      },
    ],
  },
];

// SINKRON me FLEET te constants.ts (id, name, year, pricePerDay, transmission, fuel, seats, seoText.sq).
export const CAR_ROUTES = [
  {
    id: 'audi-a5', name: 'Audi A5', year: 2013, price: 55, transmission: 'Automatic', fuel: 'Diesel', seats: 5, image: 'audi-a5-1',
    seoText: 'Audi A5 2.0 TDI automatik është zgjedhja jonë premium për ata që duan stil dhe komoditet. Me paketë S-Line, navigim, sensorë parkimi dhe motor diesel ekonomik, është ideale për udhëtime pune në Tiranë ose rrugë të gjata nëpër Shqipëri.',
  },
  {
    id: 'hyundai-grandeur', name: 'HYUNDAI GRANDEUR', year: 2014, price: 45, transmission: 'Automatic', fuel: 'LPG', seats: 5, image: 'hyundai-1',
    seoText: 'Hyundai Grandeur 3.0 me sistem 100% LPG bashkon hapësirën e një sedani të madh me kosto shumë të ulët karburanti. Interier lëkure, kondicioner dhe kambio automatike.',
  },
  {
    id: 'vw-passat-sel', name: 'VW PASSAT SEL', year: 2015, price: 45, transmission: 'Automatic', fuel: 'Diesel', seats: 5, image: 'passat-1',
    seoText: 'VW Passat SEL 2.0 TDI automatik është sedani klasik i biznesit: bagazh i madh, interier lëkure, navigim dhe konsum i ulët diesel.',
  },
  {
    id: 'vw-golf-6-auto', name: 'VW Golf 6', year: 2013, price: 35, transmission: 'Automatic', fuel: 'Diesel', seats: 5, image: 'golf-blue-1',
    seoText: 'VW Golf 6 2.0 TDI automatik është ekuilibri perfekt midis rehatisë dhe ekonomisë. Kambio automatike për trafikun e Tiranës dhe konsum shumë i ulët diesel.',
  },
  {
    id: 'vw-golf-6-manual', name: 'VW Golf 6', year: 2009, price: 30, transmission: 'Manual', fuel: 'Diesel', seats: 5, image: 'golf-black-1',
    seoText: 'VW Golf 6 1.6 TDI manual është opsioni ynë më ekonomik në kategorinë kompakte. I lehtë për t\'u drejtuar, i besueshëm dhe me konsum minimal karburanti.',
  },
  {
    id: 'skoda-octavia', name: 'Skoda Octavia', year: 2009, price: 30, transmission: 'Automatic', fuel: 'Diesel', seats: 5, image: 'skoda-1',
    seoText: 'Skoda Octavia 1.9 TDI automatike njihet për bagazhin e saj të jashtëzakonshëm. Komode, e qëndrueshme dhe ekonomike për pushime familjare.',
  },
  {
    id: 'vw-jetta', name: 'VW Jetta', year: 2013, price: 40, transmission: 'Automatic', fuel: 'Diesel', seats: 5, image: 'jetta-1',
    seoText: 'VW Jetta 1.6 TDI automatike ofron rehatinë e një sedani me çmimin e një makine kompakte. Hapësirë e bollshme, bagazh i madh dhe kambio automatike.',
  },
  {
    id: 'vw-polo', name: 'VW Polo', year: 2008, price: 25, transmission: 'Manual', fuel: 'Diesel', seats: 4, image: 'polo-1',
    seoText: 'VW Polo 1.4 TDI manual është makina jonë më e lirë, me vetëm 25€ në ditë. Kompakte, e lehtë për parkim dhe me konsum karburanti minimal.',
  },
];
