
import React from 'react';
import { useTranslation } from '../hooks/useTranslation';
import { Github, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const { t } = useTranslation();

  const socialLinks = [
    { icon: Github, href: 'https://github.com/LopesHPedro', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/LopesHPedro/', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://www.instagram.com/lopesh_pedro/', label: 'Instagram' }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-dark-100 border-t border-dark-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo & Description */}
          <div>
            <button
              onClick={scrollToTop}
              className="text-2xl font-bold gradient-text hover:scale-105 transition-transform mb-4"
            >
              Pedro H. Lopes
            </button>
            <p className="text-gray-400 text-sm">
              Data Science • Machine Learning • Analytics
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Navegação</h3>
            <ul className="space-y-2">
              {[
                { key: 'nav.home', href: '#home' },
                { key: 'nav.about', href: '#about' },
                { key: 'nav.services', href: '#services' },
                { key: 'nav.portfolio', href: '#portfolio' },
                { key: 'nav.contact', href: '#contact' }
              ].map((item) => (
                <li key={item.key}>
                  <button
                    onClick={() => {
                      const element = document.querySelector(item.href);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="text-gray-400 hover:text-neon-green transition-colors text-sm"
                  >
                    {t(item.key)}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Conecte-se</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-neon-green transition-colors hover:scale-110 transform"
                  aria-label={social.label}
                >
                  <social.icon size={24} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-dark-300 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Pedro H. Lopes. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
