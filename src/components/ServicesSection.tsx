
import React from 'react';
import { useTranslation } from '../hooks/useTranslation';
import { BarChart3, BriefcaseBusiness, Lightbulb, LineChart, type LucideIcon } from 'lucide-react';

type Service = {
  titleKey: string;
  descriptionKey: string;
  icon: LucideIcon;
  gradient: string;
};

const ServicesSection = () => {
  const { t } = useTranslation();

  const services: Service[] = [
    {
      titleKey: 'service.eda.title',
      descriptionKey: 'service.eda.description',
      icon: BarChart3,
      gradient: 'from-neon-green/20 to-neon-blue/20'
    },
    {
      titleKey: 'service.visualization.title',
      descriptionKey: 'service.visualization.description',
      icon: LineChart,
      gradient: 'from-purple-500/20 to-neon-green/20'
    },
    {
      titleKey: 'service.bi.title',
      descriptionKey: 'service.bi.description',
      icon: BriefcaseBusiness,
      gradient: 'from-neon-blue/20 to-purple-500/20'
    },
    {
      titleKey: 'service.insights.title',
      descriptionKey: 'service.insights.description',
      icon: Lightbulb,
      gradient: 'from-purple-500/20 to-neon-green/20'
    }
  ];

  return (
    <section id="services" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 slow-reveal">
          <h2 className="mb-6 text-3xl font-bold sm:text-4xl md:text-5xl">
            {t('services.title')}
          </h2>
          <p className="mx-auto max-w-3xl text-base leading-relaxed text-gray-400 sm:text-xl">
            {t('services.subtitle')}
          </p>
          <div className="w-24 h-1 bg-neon-green mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
            <div
              key={service.titleKey}
              className={`slow-reveal bg-gradient-to-br ${service.gradient} rounded-xl border border-dark-300/30 p-6 hover-lift group transition-all duration-300 hover:border-neon-green/40 sm:p-8`}
              style={{ '--reveal-delay': `${index * 130}ms` } as React.CSSProperties}
            >
              <div className="text-center">
                <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-lg border border-neon-green/30 bg-dark-100/60 text-neon-green transition-all duration-300 group-hover:scale-110 group-hover:bg-neon-green group-hover:text-dark-50">
                  <Icon size={28} strokeWidth={1.8} />
                </div>
                <h3 className="mb-4 text-lg font-bold text-white transition-colors group-hover:text-neon-green sm:text-xl">
                  {t(service.titleKey)}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {t(service.descriptionKey)}
                </p>
              </div>
            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
