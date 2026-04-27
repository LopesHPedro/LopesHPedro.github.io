
import React from 'react';
import { useTranslation } from '../hooks/useTranslation';
import { BarChart3, Brain, LineChart, Wrench, type LucideIcon } from 'lucide-react';

type SkillGroup = {
  categoryKey: string;
  icon: LucideIcon;
  items: string[];
};

const AboutSection = () => {
  const { t } = useTranslation();

  const skills: SkillGroup[] = [
    { categoryKey: 'skills.dataAnalysis', icon: BarChart3, items: ['Excel', 'SQL', 'Python (pandas)'] },
    { categoryKey: 'skills.dataVisualization', icon: LineChart, items: ['Power BI', 'Matplotlib'] },
    { categoryKey: 'skills.business', icon: Brain, items: ['skills.metrics', 'skills.insights', 'skills.decision'] },
    { categoryKey: 'skills.tools', icon: Wrench, items: ['Jupyter', 'Git'] }
  ];

  return (
    <section id="about" className="section-padding bg-dark-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 slow-reveal">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t('about.title')}
          </h2>
          <div className="w-24 h-1 bg-neon-green mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Profile Image */}
          <div className="slow-reveal">
            <div className="relative">
              <img
                src="https://github.com/LopesHPedro.png?size=400"
                alt="Pedro H. Lopes"
                className="w-80 h-80 mx-auto rounded-full object-cover border border-neon-green/30 shadow-lg shadow-neon-green/10"
              />
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-neon-green/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-neon-blue/20 rounded-full blur-xl"></div>
            </div>
          </div>

          {/* About Content */}
          <div className="slow-reveal" style={{ '--reveal-delay': '120ms' } as React.CSSProperties}>
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                {t('about.bio')}
              </p>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-neon-green">
                  {t('about.education')}
                </h3>
                <div className="bg-dark-200 p-4 rounded-lg border border-dark-300">
                  <p className="text-gray-300">
                    <span className="font-medium">{t('about.degree')}</span>
                    <br />
                    <span className="text-sm text-gray-400">{t('about.degreePeriod')}</span>
                  </p>
                </div>
              </div>

              <button className="bg-neon-green text-dark-50 px-6 py-3 rounded-lg font-semibold hover:bg-neon-green/90 transition-all duration-300 hover:scale-105">
                {t('about.downloadCV')}
              </button>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-20 slow-reveal">
          <h3 className="text-2xl font-bold text-center mb-12 gradient-text">
            {t('about.skills')}
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skillGroup, index) => {
              const Icon = skillGroup.icon;

              return (
              <div
                key={skillGroup.categoryKey}
                className="glass-effect rounded-lg p-6 hover-lift slow-reveal"
                style={{ '--reveal-delay': `${index * 120}ms` } as React.CSSProperties}
              >
                <div className="mb-4 flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-md border border-neon-green/30 bg-dark-200 text-neon-green">
                    <Icon size={20} strokeWidth={1.8} />
                  </span>
                  <h4 className="text-lg font-semibold text-neon-green">
                    {t(skillGroup.categoryKey)}
                  </h4>
                </div>
                <ul className="space-y-2">
                  {skillGroup.items.map((skill) => (
                    <li
                      key={skill}
                      className="text-gray-300 flex items-center"
                    >
                      <span className="w-2 h-2 bg-neon-green rounded-full mr-3"></span>
                      {skill.includes('.') ? t(skill) : skill}
                    </li>
                  ))}
                </ul>
              </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
