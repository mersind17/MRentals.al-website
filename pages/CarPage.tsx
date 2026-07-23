import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Language } from '../types';
import { FLEET, WHATSAPP_NUMBER } from '../constants';
import NotFound from './NotFound';

interface CarPageProps {
  lang: Language;
  t: (key: string) => string;
}

const CarPage: React.FC<CarPageProps> = ({ lang, t }) => {
  const { slug } = useParams<{ slug: string }>();
  const car = FLEET.find((c) => c.id === slug);
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    setImageIndex(0);
  }, [slug]);

  // Titulli/description per faqe — prerenderi i shkruan statikisht, kjo mbulon navigimin në client.
  useEffect(() => {
    if (!car) return;
    const title =
      lang === 'sq'
        ? `${car.name} me Qera — ${car.pricePerDay}€/ditë | MRentals`
        : `Rent a ${car.name} — €${car.pricePerDay}/day | MRentals`;
    document.title = title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', car.seoText[lang]);
  }, [car, lang]);

  if (!car) return <NotFound t={t} />;

  const handleBooking = () => {
    const message = `Përshëndetje MRentals! Jam i interesuar për ${car.name} (${car.year}). A është i disponueshëm për qera?`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const specs = [
    { label: t('spec_engine'), value: car.engine },
    { label: t('spec_gearbox'), value: car.transmission },
    { label: t('spec_fuel'), value: car.fuel },
    { label: t('spec_year'), value: String(car.year) },
    { label: t('car_seats'), value: String(car.seats) },
  ];

  const related = FLEET.filter((c) => c.id !== car.id).slice(0, 3);

  return (
    <div className="bg-[#182521]">
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6 max-w-6xl">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-10">
            <ol className="flex items-center gap-2 text-xs text-white/40">
              <li>
                <Link to="/" className="hover:text-[#acc8a2] transition-colors">{t('nav_home')}</Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link to="/#cars" className="hover:text-[#acc8a2] transition-colors">{t('nav_cars')}</Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-[#acc8a2]">{car.name}</li>
            </ol>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Galeria */}
            <div>
              <div className="relative rounded-[32px] overflow-hidden bg-black/20 aspect-[4/3] mb-4">
                <picture>
                  <source
                    srcSet={`${car.images[imageIndex]}-800.webp 800w, ${car.images[imageIndex]}-1600.webp 1600w`}
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    type="image/webp"
                  />
                  <img
                    src={`${car.images[imageIndex]}-800.jpg`}
                    alt={`${car.name} ${car.year} me qera - MRentals`}
                    className="w-full h-full object-cover"
                    width={800}
                    height={600}
                    fetchPriority="high"
                  />
                </picture>
              </div>

              {/* Thumbnails */}
              <div className="grid grid-cols-4 gap-3">
                {car.images.map((img, i) => (
                  <button
                    key={img}
                    onClick={() => setImageIndex(i)}
                    aria-label={`${car.name} — foto ${i + 1}`}
                    className={`relative rounded-2xl overflow-hidden aspect-[4/3] border-2 transition-all ${
                      i === imageIndex ? 'border-[#acc8a2]' : 'border-transparent opacity-60 hover:opacity-100'
                    }`}
                  >
                    <picture>
                      <source srcSet={`${img}-800.webp`} type="image/webp" />
                      <img
                        src={`${img}-800.jpg`}
                        alt=""
                        className="w-full h-full object-cover"
                        loading="lazy"
                        width={200}
                        height={150}
                      />
                    </picture>
                  </button>
                ))}
              </div>
            </div>

            {/* Detajet */}
            <div>
              <span className="inline-block bg-[#acc8a2]/10 text-[#acc8a2] px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-6">
                {car.category}
              </span>

              <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-white mb-6 leading-[1.05]">
                {car.name}
              </h1>

              <div className="flex items-baseline gap-2 mb-8">
                <span className="text-5xl font-black text-[#acc8a2] tracking-tighter">{car.pricePerDay}€</span>
                <span className="text-white/40 text-sm font-black uppercase tracking-widest">{t('price_label')}</span>
              </div>

              <p className="text-white/60 leading-relaxed mb-10">{car.seoText[lang]}</p>

              {/* Specs */}
              <dl className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
                {specs.map((spec) => (
                  <div key={spec.label} className="bg-white/5 border border-white/5 rounded-2xl p-4">
                    <dt className="text-[10px] text-white/40 font-black uppercase tracking-widest mb-1">
                      {spec.label}
                    </dt>
                    <dd className="text-white font-bold">{spec.value}</dd>
                  </div>
                ))}
              </dl>

              {/* Features */}
              <ul className="flex flex-wrap gap-2 mb-10">
                {car.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2 bg-white/5 border border-white/5 px-4 py-2 rounded-xl text-xs text-white/70 font-bold"
                  >
                    <svg className="w-3.5 h-3.5 text-[#acc8a2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                onClick={handleBooking}
                className="w-full bg-[#acc8a2] hover:bg-[#9db893] text-[#182521] py-6 rounded-2xl font-black text-sm uppercase tracking-[0.2em] transition-all hover:scale-[1.02] flex items-center justify-center gap-3"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                {t('btn_book_now')}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Makina të ngjashme */}
      <section className="py-20 bg-[#1d2d28]/30">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-2xl md:text-4xl font-black tracking-tighter text-white mb-10">
            {t('fleet_discover_title')} <span className="text-[#acc8a2]">{t('fleet_discover_fleet')}</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {related.map((rel) => (
              <Link
                key={rel.id}
                to={`/makina/${rel.id}`}
                className="group bg-[#1d2d28] border border-white/5 hover:border-[#acc8a2]/40 rounded-3xl overflow-hidden transition-all"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <picture>
                    <source srcSet={`${rel.images[0]}-800.webp`} type="image/webp" />
                    <img
                      src={`${rel.images[0]}-800.jpg`}
                      alt={`${rel.name} ${rel.year} me qera - MRentals`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                      width={800}
                      height={600}
                    />
                  </picture>
                </div>
                <div className="p-6 flex items-center justify-between">
                  <span className="font-black text-white group-hover:text-[#acc8a2] transition-colors">{rel.name}</span>
                  <span className="font-black text-[#acc8a2]">{rel.pricePerDay}€</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CarPage;
