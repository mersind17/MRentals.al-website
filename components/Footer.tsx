import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import { WHATSAPP_NUMBER, GOOGLE_MAPS_URL } from '../constants';
import { LOCATIONS } from '../lib/locations';
import { Language } from '../types';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface FooterProps {
  t: (key: string) => string;
  lang: Language;
}

const Footer: React.FC<FooterProps> = ({ t, lang }) => {
  const { ref: footerRef, isVisible } = useScrollAnimation<HTMLElement>({ threshold: 0.05 });

  const handleBooking = () => {
    const message = 'Përshëndetje MRentals! Dua të bëj një rezervim.';
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const navLinks = [
    { name: t('nav_home'), href: '/#home' },
    { name: t('nav_cars'), href: '/#cars' },
    { name: t('nav_why'), href: '/#why-us' },
    { name: t('faq_badge'), href: '/#faq' },
    { name: t('nav_contact'), href: '/#contact' },
  ];

  const reveal = (delay: number) =>
    `transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`;

  return (
    <footer ref={footerRef} className="bg-[#182521] border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#acc8a2]/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* CTA WhatsApp */}
        <div className={`pt-20 pb-16 flex justify-center ${reveal(0)}`}>
          <button
            onClick={handleBooking}
            className="group flex items-center space-x-4 bg-[#acc8a2] hover:bg-[#9db893] text-[#182521] px-12 py-6 rounded-[24px] font-black text-sm uppercase tracking-[0.25em] transition-all duration-500 transform hover:scale-105 shadow-[0_20px_50px_rgba(172,200,162,0.2)]"
          >
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            <span>{t('btn_book_now')}</span>
          </button>
        </div>

        {/* 3 kolona */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 pb-16 border-t border-white/5 pt-16">
          {/* Kolona 1 — brand */}
          <div className={reveal(0)}>
            <Link to="/" className="inline-block mb-6">
              <Logo className="h-9" />
            </Link>
            <p className="text-white/50 text-sm leading-relaxed mb-6 max-w-xs">{t('footer_tagline')}</p>
            <div className="inline-flex items-center gap-2 bg-[#acc8a2]/10 text-[#acc8a2] px-4 py-2 rounded-full">
              <span className="w-2 h-2 bg-[#acc8a2] rounded-full animate-pulse"></span>
              <span className="text-[10px] font-black uppercase tracking-[0.2em]">{t('footer_hours_title')}</span>
            </div>
          </div>

          {/* Kolona 2 — navigim + lokacione */}
          <div className={reveal(1)} style={{ transitionDelay: '100ms' }}>
            <h3 className="text-[11px] font-black uppercase tracking-[0.3em] text-[#acc8a2] mb-6">
              {t('footer_links_title')}
            </h3>
            <ul className="space-y-3 mb-8">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-white/50 hover:text-[#acc8a2] transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            <h3 className="text-[11px] font-black uppercase tracking-[0.3em] text-[#acc8a2] mb-4">
              {t('footer_locations_title')}
            </h3>
            <ul className="space-y-3">
              {LOCATIONS.map((loc) => (
                <li key={loc.slug}>
                  <Link to={`/${loc.slug}`} className="text-sm text-white/50 hover:text-[#acc8a2] transition-colors">
                    {loc.name[lang]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kolona 3 — kontakt */}
          <div className={reveal(2)} style={{ transitionDelay: '200ms' }}>
            <h3 className="text-[11px] font-black uppercase tracking-[0.3em] text-[#acc8a2] mb-6">
              {t('footer_contact_title')}
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 text-white/70 hover:text-[#acc8a2] transition-colors"
                >
                  <span className="w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-[#acc8a2]/10 transition-colors">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                  </span>
                  <span className="text-sm font-bold">+355 69 516 9873</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/mrentals_al"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 text-white/70 hover:text-[#acc8a2] transition-colors"
                >
                  <span className="w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-[#acc8a2]/10 transition-colors">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                  </span>
                  <span className="text-sm font-bold">@mrentals_al</span>
                </a>
              </li>
              <li>
                <a
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 text-white/70 hover:text-[#acc8a2] transition-colors"
                >
                  <span className="w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-[#acc8a2]/10 transition-colors">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </span>
                  <span className="text-sm font-bold">{t('contact_address')}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-gray-500 font-black uppercase tracking-[0.3em] text-center md:text-left">
            &copy; {new Date().getFullYear()} MRENTALS. {t('footer_rights')}
          </p>
          <p className="text-[10px] text-gray-600 font-bold uppercase tracking-[0.3em] flex items-center">
            DESIGNED WITH
            <span className="text-[#acc8a2] mx-2 text-lg animate-pulse">♥</span>
            BY MRDEV TEAM
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
