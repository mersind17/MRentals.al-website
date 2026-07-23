import React from 'react';

interface LogoProps {
  className?: string;
}

// Wordmark-i i brand-it si imazh (public/photos/logo.webp — transparent, gjeneruar nga scripts/prepare-brand.mjs).
const Logo: React.FC<LogoProps> = ({ className = 'h-8' }) => {
  return (
    <img
      src="/photos/logo.webp"
      alt="MRentals"
      className={`${className} w-auto`}
      width={834}
      height={96}
      decoding="async"
    />
  );
};

export default Logo;
