
import React from 'react';
import { useTranslation } from '../hooks/useTranslation';
import { ArrowDown, Github, Linkedin, Instagram, Image } from 'lucide-react';

const HeroSection = () => {
  const { t } = useTranslation();

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const socialLinks = [
    { icon: Github, href: 'https://github.com/LopesHPedro', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/LopesHPedro/', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://www.instagram.com/hlopespedro/', label: 'Instagram' },
    { icon: Image, href: 'https://vsco.co/lopeshpedro/gallery', label: 'VSCO' }
  ];

  return (
    <section id="home" className="relative flex min-h-[100svh] items-center justify-center overflow-hidden px-4 pt-20 pb-14 sm:px-6">
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute left-[-4rem] top-1/4 h-48 w-48 rounded-full bg-neon-green/20 blur-3xl animate-pulse sm:left-1/4 sm:h-64 sm:w-64"></div>
        <div className="absolute bottom-1/4 right-[-6rem] h-64 w-64 rounded-full bg-neon-blue/20 blur-3xl animate-pulse delay-1000 sm:right-1/4 sm:h-96 sm:w-96"></div>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl text-center">
        <div className="animate-fade-in">
          <h1 className="mb-5 text-[clamp(2.7rem,13vw,4.8rem)] font-bold leading-[0.95] sm:mb-6">
            <span className="gradient-text">Pedro H. Lopes</span>
          </h1>
          
          <h2 className="mx-auto mb-6 max-w-4xl text-lg leading-relaxed text-gray-300 sm:mb-8 sm:text-xl md:text-2xl">
            {t('hero.title')}
          </h2>
          
          <p className="mx-auto mb-9 max-w-3xl text-base leading-relaxed text-gray-400 sm:mb-12 sm:text-lg">
            {t('hero.description')}
          </p>
          
          <div className="mb-10 flex flex-col items-stretch justify-center gap-4 sm:mb-12 sm:flex-row sm:items-center sm:gap-6">
            <button
              onClick={() => scrollToSection('#portfolio')}
              className="w-full rounded-lg bg-neon-green px-7 py-4 font-semibold text-dark-50 shadow-lg transition-all duration-300 hover:scale-105 hover:bg-neon-green/90 hover:shadow-neon-green/25 sm:w-auto sm:px-8"
            >
              {t('hero.cta')}
            </button>
            
            <button
              onClick={() => scrollToSection('#contact')}
              className="w-full rounded-lg border border-neon-green px-7 py-4 font-semibold text-neon-green transition-all duration-300 hover:scale-105 hover:bg-neon-green hover:text-dark-50 sm:w-auto sm:px-8"
            >
              {t('hero.contact')}
            </button>
          </div>
          
          {/* Social Links */}
          <div className="flex items-center justify-center space-x-6">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-neon-green transition-colors duration-300 hover:scale-110 transform"
                aria-label={social.label}
              >
                <social.icon size={24} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          onClick={() => scrollToSection('#about')}
          className="text-gray-400 hover:text-neon-green transition-colors"
        >
          <ArrowDown size={24} />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
