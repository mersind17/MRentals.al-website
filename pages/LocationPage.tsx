import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Language } from '../types';
import { FLEET, WHATSAPP_NUMBER } from '../constants';
import { getLocationBySlug } from '../lib/locations';
import CarCard from '../components/CarCard';
import NotFound from './NotFound';

interface LocationPageProps {
  lang: Language;
  t: (key: string) => string;
}

const LocationPage: React.FC<LocationPageProps> = ({ lang, t }) => {
  const { pathname } = useLocation();
  const location = getLocationBySlug(pathname.replace(/^\/|\/$/g, ''));

  // Titulli/description per faqe — prerenderi i shkruan statikisht, kjo mbulon navigimin në client.
  useEffect(() => {
    if (!location) return;
    document.title = location.metaTitle[lang];
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute('content', location.metaDescription[lang]);
  }, [location, lang]);

  if (!location) return <NotFound t={t} />;

  const handleBooking = () => {
    const message = `Përshëndetje MRentals! Dua të marr me qera një makinë në ${location.name.sq}.`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="bg-[#182521]">
      {/* Hero i faqes */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#acc8a2]/5 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="container mx-auto px-6 relative z-10 max-w-4xl">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-xs text-white/40">
              <li>
                <Link to="/" className="hover:text-[#acc8a2] transition-colors">
                  {t('nav_home')}
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-[#acc8a2]">{location.name[lang]}</li>
            </ol>
          </nav>

          <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-white mb-8 leading-[1.1]">
            {location.h1[lang]}
          </h1>
          <p className="text-lg text-white/70 leading-relaxed mb-10">{location.intro[lang]}</p>

          <button
            onClick={handleBooking}
            className="bg-[#acc8a2] hover:bg-[#9db893] text-[#182521] px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-[0.2em] transition-all hover:scale-105"
          >
            {t('btn_book_now')}
          </button>
        </div>
      </section>

      {/* Përmbajtja unike */}
      <section className="py-16">
        <div className="container mx-auto px-6 max-w-4xl space-y-12">
          {location.sections.map((section, i) => (
            <article key={i}>
              <h2 className="text-2xl md:text-3xl font-black text-[#acc8a2] mb-4 tracking-tight">
                {section.title[lang]}
              </h2>
              <p className="text-white/60 leading-relaxed">{section.body[lang]}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Flota */}
      <section className="py-20 bg-[#1d2d28]/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-white mb-4">
              {t('fleet_discover_title')} <span className="text-[#acc8a2]">{t('fleet_discover_fleet')}</span>
            </h2>
            <p className="text-white/50 max-w-2xl mx-auto">{t('fleet_subtitle')}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {FLEET.map((car) => (
              <CarCard key={car.id} car={car} t={t} />
            ))}
          </div>
        </div>
      </section>

      {/* Lidhje te lokacionet e tjera (internal linking) */}
      <section className="py-16">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-[11px] font-black uppercase tracking-[0.3em] text-[#acc8a2] mb-6">
            {t('footer_locations_title')}
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {['makina-me-qera-elbasan', 'makina-me-qera-tirane', 'makina-me-qera-rinas']
              .filter((s) => s !== location.slug)
              .map((s) => {
                const other = getLocationBySlug(s)!;
                return (
                  <Link
                    key={s}
                    to={`/${s}`}
                    className="bg-white/5 hover:bg-[#acc8a2] hover:text-[#182521] border border-white/10 hover:border-[#acc8a2] px-6 py-3 rounded-xl text-sm font-bold transition-all"
                  >
                    {other.h1[lang]}
                  </Link>
                );
              })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default LocationPage;
