
import React from 'react';
import { useTranslation, Language } from '../hooks/useTranslation';

const LanguageSelector = () => {
  const { language, changeLanguage } = useTranslation();

  const languages: { code: Language; name: string; flag: string }[] = [
    { code: 'pt', name: 'Português', flag: '🇧🇷' },
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' }
  ];

  const handleLanguageChange = (newLanguage: Language) => {
    console.log(`Changing language from ${language} to ${newLanguage}`);
    changeLanguage(newLanguage);
  };

  return (
    <div className="relative group">
      <div className="flex items-center space-x-1 cursor-pointer">
        <span className="text-2xl">
          {languages.find(lang => lang.code === language)?.flag}
        </span>
        <span className="text-sm text-gray-300 group-hover:text-neon-green transition-colors">
          {language.toUpperCase()}
        </span>
      </div>
      
      <div className="absolute right-0 top-full mt-2 bg-dark-100 border border-dark-300 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 min-w-[150px]">
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
