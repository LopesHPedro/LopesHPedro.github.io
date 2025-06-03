
import React from 'react';
import { useTranslation } from '../hooks/useTranslation';
import { Github, Linkedin, Instagram } from 'lucide-react';

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
    { icon: Instagram, href: 'https://www.instagram.com/lopesh_pedro/', label: 'Instagram' }
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-neon-green/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-blue/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="gradient-text">Pedro H. Lopes</span>
          </h1>
          
          <h2 className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            {t('hero.title')}
          </h2>
          
          <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            {t('hero.description')}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
            <button
              onClick={() => scrollToSection('#portfolio')}
              className="bg-neon-green text-dark-50 px-8 py-4 rounded-lg font-semibold hover:bg-neon-green/90 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-neon-green/25"
            >
              {t('hero.cta')}
            </button>
            
            <button
              onClick={() => scrollToSection('#contact')}
              className="border border-neon-green text-neon-green px-8 py-4 rounded-lg font-semibold hover:bg-neon-green hover:text-dark-50 transition-all duration-300 hover:scale-105"
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
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
