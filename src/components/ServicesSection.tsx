
import React from 'react';
import { useTranslation } from '../hooks/useTranslation';

const ServicesSection = () => {
  const { t } = useTranslation();

  const services = [
    {
      titleKey: 'service.eda.title',
      descriptionKey: 'service.eda.description',
      icon: '📊',
      gradient: 'from-neon-green/20 to-neon-blue/20'
    },
    {
      titleKey: 'service.ml.title',
      descriptionKey: 'service.ml.description',
      icon: '🤖',
      gradient: 'from-neon-blue/20 to-purple-500/20'
    },
    {
      titleKey: 'service.visualization.title',
      descriptionKey: 'service.visualization.description',
      icon: '📈',
      gradient: 'from-purple-500/20 to-neon-green/20'
    },
    {
      titleKey: 'service.bi.title',
      descriptionKey: 'service.bi.description',
      icon: '💼',
      gradient: 'from-neon-green/20 to-neon-blue/20'
    },
    {
      titleKey: 'service.consulting.title',
      descriptionKey: 'service.consulting.description',
      icon: '💡',
      gradient: 'from-neon-blue/20 to-purple-500/20'
    },
    {
      titleKey: 'service.predictive.title',
      descriptionKey: 'service.predictive.description',
      icon: '🔮',
      gradient: 'from-purple-500/20 to-neon-green/20'
    }
  ];

  return (
    <section id="services" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t('services.title')}
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            {t('services.subtitle')}
          </p>
          <div className="w-24 h-1 bg-neon-green mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.titleKey}
              className={`bg-gradient-to-br ${service.gradient} rounded-xl p-8 border border-dark-300/30 hover-lift group`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-center">
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-neon-green transition-colors">
                  {t(service.titleKey)}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {t(service.descriptionKey)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
