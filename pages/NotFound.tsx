import React from 'react';
import { Link } from 'react-router-dom';

interface NotFoundProps {
  t: (key: string) => string;
}

const NotFound: React.FC<NotFoundProps> = ({ t }) => (
  <div className="bg-[#182521] min-h-[70vh] flex items-center justify-center px-6 pt-32 pb-20">
    <div className="text-center max-w-md">
      <p className="text-[#acc8a2] text-7xl font-black tracking-tighter mb-4">404</p>
      <h1 className="text-2xl font-black text-white mb-4">Faqja nuk u gjet</h1>
      <p className="text-white/50 mb-10">
        Kjo faqe nuk ekziston ose është zhvendosur. Kthehuni te kryefaqja për të parë flotën tonë.
      </p>
      <Link
        to="/"
        className="inline-block bg-[#acc8a2] hover:bg-[#9db893] text-[#182521] px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-[0.2em] transition-all"
      >
        {t('nav_home')}
      </Link>
    </div>
  </div>
);

export default NotFound;
