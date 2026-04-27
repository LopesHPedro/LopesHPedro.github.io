
import React, { useEffect, useRef, useState } from 'react';
import { useTranslation, Language } from '../hooks/useTranslation';

const LanguageSelector = () => {
  const { language, changeLanguage } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const selectorRef = useRef<HTMLDivElement>(null);

  const languages: { code: Language; name: string; flag: string }[] = [
    { code: 'pt', name: 'Português', flag: '🇧🇷' },
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' }
  ];

  const handleLanguageChange = (newLanguage: Language) => {
    console.log(`Changing language from ${language} to ${newLanguage}`);
    changeLanguage(newLanguage);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (selectorRef.current && !selectorRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={selectorRef} className="relative">
      <button
        type="button"
        onClick={() => setIsOpen((current) => !current)}
        className="flex h-10 items-center gap-1 rounded-md px-2 transition-colors hover:bg-dark-200"
        aria-expanded={isOpen}
        aria-label="Select language"
      >
        <span className="text-2xl">
          {languages.find(lang => lang.code === language)?.flag}
        </span>
        <span className="text-sm text-gray-300 transition-colors hover:text-neon-green">
          {language.toUpperCase()}
        </span>
      </button>
      
      <div
        className={`absolute right-0 top-full z-50 mt-2 min-w-[150px] rounded-lg border border-dark-300 bg-dark-100 shadow-lg transition-all duration-300 ${
          isOpen ? 'visible translate-y-0 opacity-100' : 'invisible -translate-y-2 opacity-0'
        }`}
      >
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => handleLanguageChange(lang.code)}
            className={`w-full flex items-center space-x-3 px-4 py-2 text-left hover:bg-dark-200 transition-colors first:rounded-t-lg last:rounded-b-lg ${
              language === lang.code ? 'bg-dark-200 text-neon-green' : 'text-gray-300'
            }`}
          >
            <span className="text-lg">{lang.flag}</span>
            <span className="text-sm">{lang.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default LanguageSelector;
