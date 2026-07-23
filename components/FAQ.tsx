import React, { useState } from 'react';
import { WHATSAPP_NUMBER } from '../constants';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface FAQProps {
  t: (key: string) => string;
}

// 6 pyetjet — çelësat faq_q1..q6 / faq_a1..a6 te constants.ts.
// SINKRON: të njëjtat pyetje shkojnë te FAQPage JSON-LD në index.html.
const FAQ_KEYS = [1, 2, 3, 4, 5, 6];

const FAQ: React.FC<FAQProps> = ({ t }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { ref: sectionRef, isVisible } = useScrollAnimation<HTMLElement>({ threshold: 0.1 });

  const handleAsk = () => {
    const message = 'Përshëndetje MRentals! Kam një pyetje rreth qerasë së makinës.';
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section ref={sectionRef} className="bg-[#182521] py-24 relative overflow-hidden">
      <div className="absolute top-1/4 -right-24 w-96 h-96 bg-[#acc8a2]/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10 max-w-4xl">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="h-px w-12 bg-[#acc8a2]"></div>
            <span className="text-[#acc8a2] text-xs font-black uppercase tracking-[0.4em]">{t('faq_badge')}</span>
            <div className="h-px w-12 bg-[#acc8a2]"></div>
          </div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white mb-6">
            {t('faq_title')}
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto leading-relaxed">{t('faq_subtitle')}</p>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {FAQ_KEYS.map((n, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={n}
                className={`bg-[#1d2d28] border rounded-2xl overflow-hidden transition-all duration-500 ${
                  isOpen ? 'border-[#acc8a2]/40' : 'border-white/5 hover:border-white/15'
                } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${i * 70}ms` }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-4 p-6 text-left"
                >
                  <span className={`text-lg font-bold transition-colors ${isOpen ? 'text-[#acc8a2]' : 'text-white'}`}>
                    {t(`faq_q${n}`)}
                  </span>
                  <span
                    className={`shrink-0 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isOpen ? 'bg-[#acc8a2] text-[#182521] rotate-45' : 'bg-white/5 text-[#acc8a2]'
                    }`}
                    aria-hidden="true"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 4v16m8-8H4" />
                    </svg>
                  </span>
                </button>

                <div
                  className="grid transition-all duration-500 ease-out"
                  style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 text-white/60 leading-relaxed">{t(`faq_a${n}`)}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div
          className={`mt-12 text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          style={{ transitionDelay: '500ms' }}
        >
          <button
            onClick={handleAsk}
            className="inline-flex items-center gap-3 bg-white/5 hover:bg-[#acc8a2] hover:text-[#182521] border border-white/10 hover:border-[#acc8a2] px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-[0.2em] transition-all"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            WhatsApp
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
