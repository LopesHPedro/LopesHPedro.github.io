
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
          <h2 className="mb-6 text-3xl font-bold sm:text-4xl md:text-5xl">
            {t('about.title')}
          </h2>
          <div className="w-24 h-1 bg-neon-green mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Profile Image */}
          <div className="slow-reveal">
            <div className="relative mx-auto max-w-[20rem]">
              <img
                src="https://github.com/LopesHPedro.png?size=400"
                alt="Pedro H. Lopes"
                className="mx-auto aspect-square w-56 rounded-full border border-neon-green/30 object-cover shadow-lg shadow-neon-green/10 sm:w-72 lg:w-80"
              />
              <div className="absolute -right-2 -top-4 h-20 w-20 rounded-full bg-neon-green/20 blur-xl sm:-right-4 sm:h-24 sm:w-24"></div>
              <div className="absolute -bottom-4 -left-2 h-24 w-24 rounded-full bg-neon-blue/20 blur-xl sm:-left-4 sm:h-32 sm:w-32"></div>
            </div>
          </div>

          {/* About Content */}
          <div className="slow-reveal" style={{ '--reveal-delay': '120ms' } as React.CSSProperties}>
            <div className="space-y-6">
              <p className="text-base leading-relaxed text-gray-300 sm:text-lg">
                {t('about.bio')}
              </p>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-neon-green">
                  {t('about.education')}
                </h3>
                <div className="rounded-lg border border-dark-300 bg-dark-200 p-4">
                  <p className="text-gray-300">
                    <span className="font-medium">{t('about.degree')}</span>
                    <br />
                    <span className="text-sm text-gray-400">{t('about.degreePeriod')}</span>
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-20 slow-reveal">
          <h3 className="text-2xl font-bold text-center mb-12 gradient-text">
            {t('about.skills')}
          </h3>
          
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {skills.map((skillGroup, index) => {
              const Icon = skillGroup.icon;

              return (
              <div
                key={skillGroup.categoryKey}
                className="glass-effect rounded-lg p-5 hover-lift slow-reveal sm:p-6"
                style={{ '--reveal-delay': `${index * 120}ms` } as React.CSSProperties}
              >
                <div className="mb-4 flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-md border border-neon-green/30 bg-dark-200 text-neon-green">
                    <Icon size={20} strokeWidth={1.8} />
                  </span>
                  <h4 className="text-base font-semibold text-neon-green sm:text-lg">
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
