
import React, { useState, useEffect } from 'react';
import { useTranslation } from '../hooks/useTranslation';
import LanguageSelector from './LanguageSelector';
import { Menu, X } from 'lucide-react';

const navItems = [
  { key: 'nav.home', href: '#home' },
  { key: 'nav.about', href: '#about' },
  { key: 'nav.services', href: '#services' },
  { key: 'nav.portfolio', href: '#portfolio' },
  { key: 'nav.contact', href: '#contact' }
];

const Navigation = () => {
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('#home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      let currentSection = '#home';

      for (const item of navItems) {
        const section = document.querySelector(item.href);
        if (section && section.getBoundingClientRect().top <= 120) {
          currentSection = item.href;
        }
      }

      setActiveSection(currentSection);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      setActiveSection(href);
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'bg-dark-50/95 backdrop-blur-xl border-b border-dark-300 shadow-lg shadow-dark-50/30' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection('#home')}
              className="text-xl font-bold gradient-text transition-transform duration-300 hover:scale-105"
            >
              PH
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.key}
                  onClick={() => scrollToSection(item.href)}
                  className={`group relative px-3 py-2 text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 hover:text-neon-green ${
                    activeSection === item.href ? 'text-neon-green' : 'text-gray-300'
                  }`}
                >
                  {t(item.key)}
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 bg-neon-green transition-all duration-300 ${
                      activeSection === item.href ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  ></span>
                </button>
              ))}
            </div>
          </div>

          {/* Language Selector & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <LanguageSelector />
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-300 transition-all duration-300 hover:scale-110 hover:text-neon-green focus:outline-none focus:text-neon-green"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
          <div
            className={`md:hidden overflow-hidden transition-all duration-300 ease-out ${
              isMobileMenuOpen ? 'max-h-80 opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-2'
            }`}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 bg-dark-100/95 backdrop-blur-lg rounded-lg mt-2 border border-dark-300">
              {navItems.map((item) => (
                <button
                  key={item.key}
                  onClick={() => scrollToSection(item.href)}
                  className={`block w-full rounded-md px-3 py-2 text-left text-base font-medium transition-all duration-300 hover:bg-dark-200 hover:text-neon-green ${
                    activeSection === item.href ? 'bg-dark-200 text-neon-green' : 'text-gray-300'
                  }`}
                >
                  {t(item.key)}
                </button>
              ))}
            </div>
          </div>
      </div>
    </nav>
  );
};

export default Navigation;
