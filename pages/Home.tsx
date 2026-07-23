import React from 'react';
import { Language } from '../types';
import { FLEET, REVIEWS } from '../constants';
import Hero from '../components/Hero';
import CarFleet from '../components/CarFleet';
import WhyUs from '../components/WhyUs';
import Reviews from '../components/Reviews';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';
import SEOSection from '../components/SEOSection';

interface HomeProps {
  lang: Language;
  t: (key: string) => string;
}

const Home: React.FC<HomeProps> = ({ lang, t }) => (
  <>
    <Hero t={t} />

    <div id="cars" className="scroll-mt-24">
      <CarFleet lang={lang} t={t} fleet={FLEET} />
    </div>

    <div id="why-us" className="scroll-mt-24">
      <WhyUs t={t} />
    </div>

    <div id="reviews" className="scroll-mt-24">
      <Reviews t={t} reviews={REVIEWS} />
    </div>

    <div id="faq" className="scroll-mt-24">
      <FAQ t={t} />
    </div>

    <div id="contact" className="scroll-mt-24">
      <Contact t={t} />
    </div>

    <SEOSection t={t} />
  </>
);

export default Home;
