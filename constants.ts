
import { Car, Transmission, Fuel, TranslationSet, Review } from './types';

export const WHATSAPP_NUMBER = "355695169873";
export const GOOGLE_MAPS_URL = "https://maps.app.goo.gl/m6shU3n1ZKna6yLi7";

export const REVIEWS: Review[] = [
  {
    id: 1,
    name: "Adelina Ruci",
    rating: 5,
    comment: "The best service I’ve received in a long time. Very comfortable cars reasonable price and more important very nice and polite people. Highly recommended",
    date: "1 week ago"
  },
  {
    id: 2,
    name: "Adel Redhwan",
    rating: 5,
    comment: "Ailemle birlikte birkaç günlüğüne Elbasan şehrindeydim ve MRentals'tan kiraladığım arabadan çok memnun kaldım. Uygun fiyat ve konforlu",
    date: "2 weeks ago"
  },
  {
    id: 3,
    name: "unejs duka",
    rating: 5,
    comment: "Great prices and very comfortable cars",
    date: "1 month ago"
  }
];

export const FLEET: Car[] = [
  {
    id: 'audi-a5',
    name: 'Audi A5',
    engine: '2.0',
    transmission: Transmission.AUTO,
    fuel: Fuel.DIESEL,
    year: 2013,
    pricePerDay: 55,
    seats: 5,
    features: ['S-Line Package', 'Navigation', 'Bluetooth', 'Parking Sensors'],
    // images = path bazë pa suffix; CarCard/Hero ndërtojnë -800/-1600.webp + -800.jpg (shih scripts/optimize-images.mjs)
    images: [
      '/photos/audi-a5-1',
      '/photos/audi-a5-3',
      '/photos/audi-a5-2'
    ],
    isAvailable: true,
    category: 'Premium',
    seoText: {
      sq: 'Audi A5 2.0 TDI automatik është zgjedhja jonë premium për ata që duan stil dhe komoditet. Me paketë S-Line, navigim, sensorë parkimi dhe motor diesel ekonomik, është ideale për udhëtime pune në Tiranë ose rrugë të gjata nëpër Shqipëri. Merret me qera në Elbasan, Tiranë ose direkt në Aeroportin e Rinasit.',
      en: 'The Audi A5 2.0 TDI automatic is our premium choice for those who want style and comfort. With S-Line package, navigation, parking sensors and an economical diesel engine, it is ideal for business trips in Tirana or long drives across Albania. Available for rent in Elbasan, Tirana or directly at Tirana Airport.'
    }
  },
  {
    id: 'hyundai-grandeur',
    name: 'HYUNDAI GRANDEUR',
    engine: '3.0',
    transmission: Transmission.AUTO,
    fuel: Fuel.LPG,
    year: 2014,
    pricePerDay: 45,
    seats: 5,
    features: ['LPG Economy', 'Leather Interior', 'Bluetooth', 'Parking Sensors'],
    images: [
      '/photos/hyundai-1',
      '/photos/hyundai-2',
      '/photos/hyundai-3',
      '/photos/hyundai-4'
    ],
    isAvailable: true,
    category: 'Premium',
    seoText: {
      sq: 'Hyundai Grandeur 3.0 me sistem 100% LPG bashkon hapësirën e një sedani të madh me kosto shumë të ulët karburanti. Interier lëkure, kondicioner, sensorë parkimi dhe kambio automatike — perfekte për familje ose grupe që udhëtojnë gjatë nëpër Shqipëri pa shpenzime të larta.',
      en: 'The Hyundai Grandeur 3.0 with a 100% LPG system combines the space of a large sedan with very low fuel costs. Leather interior, air conditioning, parking sensors and automatic transmission — perfect for families or groups travelling long distances across Albania without high running costs.'
    }
  },
  {
    id: 'vw-passat-sel',
    name: 'VW PASSAT SEL',
    engine: '2.0',
    transmission: Transmission.AUTO,
    fuel: Fuel.DIESEL,
    year: 2015,
    pricePerDay: 45,
    seats: 5,
    features: ['Automatic', 'Leather Interior', 'Navigation', 'Parking Sensors'],
    images: [
      '/photos/passat-1',
      '/photos/passat-2',
      '/photos/passat-3'
    ],
    isAvailable: true,
    category: 'Premium',
    seoText: {
      sq: 'VW Passat SEL 2.0 TDI automatik është sedani klasik i biznesit: bagazh i madh, interier lëkure, navigim dhe konsum i ulët diesel. Zgjedhja më e kërkuar për ata që udhëtojnë shpesh midis Elbasanit, Tiranës dhe aeroportit, ose për familje me bagazh të shumtë.',
      en: 'The VW Passat SEL 2.0 TDI automatic is the classic business sedan: large boot, leather interior, navigation and low diesel consumption. The most requested choice for those travelling frequently between Elbasan, Tirana and the airport, or for families with plenty of luggage.'
    }
  },
  {
    id: 'vw-golf-6-auto',
    name: 'VW Golf 6',
    engine: '2.0',
    transmission: Transmission.AUTO,
    fuel: Fuel.DIESEL,
    year: 2013,
    pricePerDay: 35,
    seats: 5,
    features: ['Automatic', 'Climate Control', 'Economic', 'Compact'],
    images: [
      '/photos/golf-blue-1',
      '/photos/golf-blue-2',
      '/photos/golf-blue-3'
    ],
    isAvailable: true,
    category: 'Standard',
    seoText: {
      sq: 'VW Golf 6 2.0 TDI automatik është ekuilibri perfekt midis rehatisë dhe ekonomisë. Kambio automatike për trafikun e Tiranës, kondicioner dhe konsum shumë i ulët diesel. Një nga makinat tona më të kërkuara për qera afatgjatë me çmim 35€ në ditë.',
      en: 'The VW Golf 6 2.0 TDI automatic is the perfect balance between comfort and economy. Automatic transmission for Tirana traffic, air conditioning and very low diesel consumption. One of our most requested cars for longer rentals at 35€ per day.'
    }
  },
  {
    id: 'vw-golf-6-manual',
    name: 'VW Golf 6',
    engine: '1.6',
    transmission: Transmission.MANUAL,
    fuel: Fuel.DIESEL,
    year: 2009,
    pricePerDay: 30,
    seats: 5,
    features: ['Manual', 'Very Economic', 'Easy to Drive', 'Reliable'],
    images: [
      '/photos/golf-black-1',
      '/photos/golf-black-2',
      '/photos/golf-black-3'
    ],
    isAvailable: true,
    category: 'Standard',
    seoText: {
      sq: 'VW Golf 6 1.6 TDI manual është opsioni ynë më ekonomik në kategorinë kompakte. I lehtë për t\'u drejtuar, i besueshëm dhe me konsum minimal karburanti — zgjedhja ideale për ata që njohin kambion manuale dhe duan të kursejnë gjatë udhëtimit.',
      en: 'The VW Golf 6 1.6 TDI manual is our most economical option in the compact category. Easy to drive, reliable and with minimal fuel consumption — the ideal choice for those comfortable with a manual gearbox who want to keep travel costs down.'
    }
  },
  {
    id: 'skoda-octavia',
    name: 'Skoda Octavia',
    engine: '1.9',
    transmission: Transmission.AUTO,
    fuel: Fuel.DIESEL,
    year: 2009,
    pricePerDay: 30,
    seats: 5,
    features: ['Huge Trunk', 'Automatic', 'Comfortable', 'Fuel Efficient'],
    images: [
      '/photos/skoda-1',
      '/photos/skoda-2',
      '/photos/skoda-3'
    ],
    isAvailable: true,
    category: 'Standard',
    seoText: {
      sq: 'Skoda Octavia 1.9 TDI automatike njihet për bagazhin e saj të jashtëzakonshëm — një nga më të mëdhenjtë në klasë. Komode, e qëndrueshme dhe ekonomike, është zgjedhja e preferuar për pushime familjare ose udhëtime me shumë valixhe drejt bregdetit shqiptar.',
      en: 'The Skoda Octavia 1.9 TDI automatic is known for its exceptional boot space — one of the largest in its class. Comfortable, durable and economical, it is the preferred choice for family holidays or trips to the Albanian coast with plenty of luggage.'
    }
  },
  {
    id: 'vw-jetta',
    name: 'VW Jetta',
    engine: '1.6',
    transmission: Transmission.AUTO,
    fuel: Fuel.DIESEL,
    year: 2013,
    pricePerDay: 40,
    seats: 5,
    features: ['Automatic', 'Sedan Comfort', 'Large Interior', 'Economic'],
    images: [
      '/photos/jetta-1',
      '/photos/jetta-2',
      '/photos/jetta-3'
    ],
    isAvailable: true,
    category: 'Standard',
    seoText: {
      sq: 'VW Jetta 1.6 TDI automatike ofron rehatinë e një sedani me çmimin e një makine kompakte. Hapësirë e bollshme për pesë persona, bagazh i madh dhe kambio automatike — e përshtatshme si për qytet ashtu edhe për autostradë.',
      en: 'The VW Jetta 1.6 TDI automatic offers sedan comfort at a compact car price. Generous space for five people, a large boot and automatic transmission — equally suited to city driving and motorway trips.'
    }
  },
  {
    id: 'vw-polo',
    name: 'VW Polo',
    engine: '1.4',
    transmission: Transmission.MANUAL,
    fuel: Fuel.DIESEL,
    year: 2008,
    pricePerDay: 25,
    seats: 4,
    features: ['Manual', 'Economic'],
    images: [
      '/photos/polo-1',
      '/photos/polo-2',
      '/photos/polo-3'
    ],
    isAvailable: true,
    category: 'Standard',
    seoText: {
      sq: 'VW Polo 1.4 TDI manual është makina jonë më e lirë, me vetëm 25€ në ditë. Kompakte dhe e lehtë për parkim në rrugët e ngushta të qytetit, me konsum karburanti minimal. Zgjedhja e duhur për çifte ose udhëtarë individualë që duan lëvizje ekonomike.',
      en: 'The VW Polo 1.4 TDI manual is our most affordable car at just 25€ per day. Compact and easy to park on narrow city streets, with minimal fuel consumption. The right choice for couples or solo travellers who want economical mobility.'
    }
  }
];

export const TRANSLATIONS: TranslationSet = {
  nav_home: { en: 'Home', sq: 'Kryefaqja' },
  nav_cars: { en: 'Our Fleet', sq: 'Flota' },
  nav_why: { en: 'Why Us', sq: 'Pse Ne?' },
  nav_reviews: { en: 'Reviews', sq: 'Vlerësimet' },
  nav_contact: { en: 'Contact', sq: 'Kontakti' },
  hero_title: { en: 'Car Rental in Tirana and Elbasan', sq: 'Makina me Qera në Elbasan dhe Tiranë' },
  hero_subtitle: { en: 'Experience the best car rental services in Albania. Modern vehicles, transparent pricing, and 24/7 airport pick-up at TIA.', sq: 'Përjetoni shërbimin më të mirë të makinave me qera në Shqipëri. Mjete moderne, çmime transparente dhe marrje në aeroportin e Rinasit 24/7.' },
  btn_view_cars: { en: 'Browse Fleet', sq: 'Shiko Flotën' },
  btn_book_now: { en: 'Book Now', sq: 'Rezervo Tani' },
  fleet_title: { en: 'Elite Fleet', sq: 'Flota Elite' },
  fleet_subtitle: { en: 'Selected quality and economy vehicles for your ultimate comfort.', sq: 'Automjete cilësore dhe ekonomike të përzgjedhura për rehatinë tuaj maksimale.' },
  fleet_discover_title: { en: 'Discover', sq: 'Zbuloni' },
  fleet_discover_fleet: { en: 'Our Fleet', sq: 'Flotën Tonë' },
  fleet_airport_service: { en: 'Pick-up and Drop-off to TIA (Tirana International Airport)', sq: 'Marrja dhe dorëzimi në Aeroportin e Tiranës (TIA)' },
  fleet_airport_transfer: { en: 'Airport Transfer', sq: 'Transfertë Aeroporti' },
  fleet_available_24_7: { en: 'Available 24/7', sq: 'Disponueshëm 24/7' },
  fleet_ready_to_drive: { en: 'Ready to drive?', sq: 'Gati për të nisur?' },
  fleet_no_cars: { en: 'No cars available', sq: 'Nuk ka makina të disponueshme' },
  fleet_check_later: { en: 'Please check back later for our updated fleet.', sq: 'Ju lutemi na vizitoni përsëri së shpejti për përditësimet më të fundit.' },
  spec_engine: { en: 'Engine', sq: 'Motori' },
  spec_gearbox: { en: 'Gearbox', sq: 'Kambio' },
  spec_fuel: { en: 'Fuel', sq: 'Karburanti' },
  spec_year: { en: 'Year', sq: 'Viti' },
  price_label: { en: '/day', sq: '/dita' },
  car_per_day: { en: 'Per Day', sq: 'Në Ditë' },
  car_seats: { en: 'Seats', sq: 'Vende' },
  why_title: { en: 'The MRentals Advantage', sq: 'Avantazhi MRentals' },
  why_price_title: { en: 'Transparent Pricing', sq: 'Çmime Transparente' },
  why_price_desc: { en: 'What you see is what you pay. No hidden fees, guaranteed.', sq: 'Ajo që shihni është ajo që paguani. Pa kosto të fshehura, e garantuar.' },
  why_fleet_title: { en: 'Modern Fleet', sq: 'Flotë Moderne' },
  why_fleet_desc: { en: 'Our cars are new, well-maintained and equipped with the latest technology.', sq: 'Makinat tona janë të reja, të mirëmbajtura dhe të pajisura si dhe me teknologjinë më të fundit.' },
  why_support_title: { en: 'Customer Service', sq: 'Shërbim Klienti' },
  why_support_desc: { en: 'Our team is always ready to help you and provide support 24/7.', sq: 'Ekipi ynë është gjithmonë i gatshëm t\'ju ndihmojë dhe t\'ju ofrojë mbështetje 24/7.' },
  review_title: { en: 'Google Customer Reviews', sq: 'Vlerësimet nga Klientët' },
  review_official_badge: { en: 'Official Reviews', sq: 'Vlerësime Zyrtare' },
  review_summary_stat: { en: 'Based on 43 Google reviews', sq: 'Bazuar në 43 vlerësime në Google' },
  review_verified_guide: { en: 'Verified Local Guide', sq: 'Udhërrëfyes Lokal' },
  review_highly_recommended: { en: 'Highly Recommended', sq: 'Rekomandohet Shumë' },
  review_write_btn: { en: 'Write a Review', sq: 'Shkruaj një Vlerësim' },
  review_view_all_btn: { en: 'View All Google Reviews', sq: 'Shiko të gjitha në Google' },
  contact_get_in_touch: { en: 'Get in Touch', sq: 'Na Kontaktoni' },
  contact_showroom_title: { en: 'Visit Our Showroom', sq: 'Vizitoni Sallonin Tonë' },
  contact_location_title: { en: 'Our Location', sq: 'Vendndodhja' },
  contact_address: { en: 'Elbasan, Albania', sq: 'Elbasan, Shqipëri' },
  contact_direct_title: { en: 'Direct Contact', sq: 'Kontakt Direkt' },
  contact_direct_desc: { en: 'WhatsApp & Local Call', sq: 'WhatsApp dhe Thirrje' },
  contact_follow_title: { en: 'Follow Us', sq: 'Na Ndiqni' },
  contact_navigation_btn: { en: 'Start Navigation', sq: 'Fillo Navigimin' },
  footer_premium_services: { en: 'Premium Services', sq: 'Shërbime Premium' },
  footer_rights: { en: 'All rights reserved.', sq: 'Të gjitha të drejtat të rezervuara.' },
  // Footer
  footer_tagline: {
    en: 'Car rental in Elbasan, Tirana and Tirana International Airport (Rinas). Modern fleet, transparent pricing.',
    sq: 'Makina me qera në Elbasan, Tiranë dhe Aeroportin e Rinasit (TIA). Flotë moderne, çmime transparente.'
  },
  footer_links_title: { en: 'Navigation', sq: 'Navigim' },
  footer_contact_title: { en: 'Contact', sq: 'Kontakt' },
  footer_hours_title: { en: 'Open 24/7', sq: 'Hapur 24/7' },
  footer_locations_title: { en: 'Locations', sq: 'Lokacionet' },

  // FAQ — vetëm fakte të njohura. Kasko është OPSION, kurrë "e përfshirë".
  faq_badge: { en: 'FAQ', sq: 'Pyetje të Shpeshta' },
  faq_title: { en: 'Frequently Asked Questions', sq: 'Pyetjet më të Shpeshta' },
  faq_subtitle: {
    en: 'Everything you need to know before booking. Still have questions? Message us on WhatsApp.',
    sq: 'Gjithçka që duhet të dini para rezervimit. Keni pyetje të tjera? Na shkruani në WhatsApp.'
  },
  faq_q1: { en: 'How do I book a car?', sq: 'Si mund të rezervoj një makinë?' },
  faq_a1: {
    en: 'Booking is done entirely via WhatsApp at +355 69 516 9873. Send us the dates and the car you want, and we confirm availability right away.',
    sq: 'Rezervimi bëhet i gjithi përmes WhatsApp në +355 69 516 9873. Na dërgoni datat dhe makinën që dëshironi dhe ju konfirmojmë disponueshmërinë menjëherë.'
  },
  faq_q2: { en: 'What documents do I need?', sq: 'Çfarë dokumentesh më duhen?' },
  faq_a2: {
    en: 'A valid driving licence and an identification document (ID card or passport). For details about your specific case, message us on WhatsApp.',
    sq: 'Një patentë e vlefshme dhe një dokument identifikimi (kartë identiteti ose pasaportë). Për detaje mbi rastin tuaj konkret, na shkruani në WhatsApp.'
  },
  faq_q3: { en: 'Do you deliver to Tirana Airport (Rinas)?', sq: 'A bëni dorëzim në Aeroportin e Rinasit?' },
  faq_a3: {
    en: 'Yes. We offer pick-up and drop-off at Tirana International Airport (TIA) 24/7, as well as anywhere in Tirana and Elbasan. Tell us your flight time and we will be waiting.',
    sq: 'Po. Ofrojmë marrje dhe dorëzim në Aeroportin Ndërkombëtar të Tiranës (TIA) 24/7, si dhe kudo në Tiranë e Elbasan. Na tregoni orarin e fluturimit dhe ju presim atje.'
  },
  faq_q4: { en: 'How much does it cost per day?', sq: 'Sa kushton qeraja në ditë?' },
  faq_a4: {
    en: 'Prices range from 25€ to 55€ per day depending on the car. Pricing is transparent with no hidden fees — what you see is what you pay.',
    sq: 'Çmimet variojnë nga 25€ deri në 55€ në ditë, në varësi të makinës. Çmimet janë transparente pa kosto të fshehura — ajo që shihni është ajo që paguani.'
  },
  faq_q5: { en: 'Is full insurance (kasko) available?', sq: 'A ofrohet sigurim i plotë (kasko)?' },
  faq_a5: {
    en: 'Full insurance (kasko) is available as an optional add-on at an extra cost — it is not included by default. Contact us on WhatsApp and we will explain the options.',
    sq: 'Sigurimi i plotë (kasko) ofrohet si opsion me pagesë shtesë — nuk është i përfshirë si standard. Na kontaktoni në WhatsApp dhe ju shpjegojmë opsionet.'
  },
  faq_q6: { en: 'Are there other requirements (deposit, minimum age)?', sq: 'A ka kërkesa të tjera (depozitë, moshë minimale)?' },
  faq_a6: {
    en: 'Conditions may vary depending on the vehicle and rental period. Message us on WhatsApp and we will send you the full terms immediately.',
    sq: 'Kushtet mund të ndryshojnë sipas mjetit dhe periudhës së qerasë. Na shkruani në WhatsApp dhe ju dërgojmë menjëherë kushtet e plota.'
  },

  // SEO Content Blocks
  seo_title: { en: 'Car Rental Albania - Premium Services in Tirana and Elbasan', sq: 'Makina me Qera në Shqipëri - Shërbime Premium në Tiranë dhe Elbasan' },
  seo_intro: {
    en: 'Are you looking for a reliable car rental service in Albania? MRentals offers a premium experience for travelers arriving at Tirana International Airport or staying in Elbasan and Tirana. We provide a diverse fleet of modern vehicles ranging from economic city cars like the VW Golf to luxurious like Audi A5, ensuring comfort for every type of journey.',
    sq: 'Po kërkoni një shërbim të besueshëm makinash me qera në Shqipëri? MRentals ofron një përvojë premium për udhëtarët që mbërrijnë në Aeroportin Ndërkombëtar të Tiranës ose që qëndrojnë në Elbasan dhe Tiranë. Ne ofrojmë një flotë të larmishme mjetesh moderne, nga makinat ekonomike si VW Golf deri te luksoze si Audi A5, duke garantuar komoditet për çdo lloj udhëtimi.'
  },
  seo_elbasan_title: { en: 'Rent a Car in Elbasan - Local Expertise', sq: 'Makina me Qera në Elbasan - Ekspertizë Lokale' },
  seo_elbasan_body: {
    en: 'Based in the heart of Elbasan, MRentals is your primary choice for local car rentals. Whether you are visiting for business or exploring the historic sites of the city, our Elbasan showroom provides quick and easy access to high-quality vehicles. We pride ourselves on transparent pricing with no hidden costs, making us the most trusted "Car rental in Elbasan" provider.',
    sq: 'Me bazë në zemër të Elbasanit, MRentals është zgjedhja juaj parësore për makina me qera lokale. Pavarësisht nëse po vizitoni për biznes ose po eksploroni pikat historike të qytetit, salloni ynë në Elbasan ofron akses të shpejtë dhe të lehtë në mjetet cilësore. Ne krenohemi me çmimet transparente pa kosto të fshehura, duke na bërë ofruesin më të besuar për "Makina me qera ne Elbasan".'
  },
  seo_tirana_title: { en: 'Car Rental Tirana Airport (TIA) - 24/7 Service', sq: 'Makina me Qera Aeroporti Rinas (TIA) - Shërbim 24/7' },
  seo_tirana_body: {
    en: 'Arriving at Rinas? Our "rent a car Tirana airport" service is designed for maximum convenience. We offer 24/7 pick-up and drop-off services directly at Tirana International Airport (TIA). Skip the long queues and start your Albanian adventure immediately with our meet-and-greet service. Our team ensures your vehicle is ready as soon as you land, providing the best "Car rental Tirana Airport" experience available.',
    sq: 'Po mbërrini në Rinas? Shërbimi ynë "makina me qera ne Tirane" dhe Aeroport është projektuar për komoditet maksimal. Ne ofrojmë shërbime marrjeje dhe dorëzimi 24/7 direkt në Aeroportin Ndërkombëtar të Tiranës (TIA). Shmangni radhët e gjata dhe filloni aventurën tuaj shqiptare menjëherë me shërbimin tonë të pritjes. Ekipi ynë siguron që mjeti juaj të jetë gati sapo të uleni, duke ofruar përvojën më të mirë "Makina me qera Aeroporti Rinas".'
  },
  seo_fleet_title: { en: 'Our Diverse and Modern Fleet', sq: 'Flota Jonë e Larmishme dhe Moderne' },
  seo_fleet_body: {
    en: 'At MRentals, we understand that every traveler has different needs. That is why our fleet includes premium sedans, rugged SUVs, and economic hatchbacks. All our cars undergo rigorous safety checks and regular maintenance. From the Audi A5 for a stylish business trip to the Skoda Octavia for a family vacation with plenty of luggage space, we have the perfect match for you.',
    sq: 'Në MRentals, ne kuptojmë që çdo udhëtar ka nevoja të ndryshme. Kjo është arsyeja pse flota jonë përfshin sedana premium, SUV të fuqishëm dhe makina ekonomike. Të gjitha makinat tona i nënshtrohen kontrolleve rigoroze të sigurisë dhe mirëmbajtjes së rregullt. Nga Audi A5 për një udhëtim pune me stil, deri te Skoda Octavia për një pushim familjar me hapësirë të bollshme për bagazhe, ne kemi mjetin perfekt për ju.'
  },
  seo_cta: { en: 'Ready to Explore Albania? Book your car today via WhatsApp for the best rates!', sq: 'Gati për të eksploruar Shqipërinë? Rezervoni makinën tuaj sot përmes WhatsApp për çmimet më të mira!' }
};
