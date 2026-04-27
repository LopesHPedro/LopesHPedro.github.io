
import React from 'react';
import { useTranslation } from '../hooks/useTranslation';

const AboutSection = () => {
  const { t } = useTranslation();

  const skills = [
    { category: '📊 Data Analysis', items: ['Excel', 'SQL', 'Python (pandas)'] },
    { category: '📈 Data Visualization', items: ['Power BI', 'Matplotlib'] },
    { category: '🧠 Business Skills', items: ['Análise de métricas', 'Geração de insights', 'Tomada de decisão orientada a dados'] },
    { category: '🛠️ Tools', items: ['Jupyter', 'Git'] }
  ];

  return (
    <section id="about" className="section-padding bg-dark-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t('about.title')}
          </h2>
          <div className="w-24 h-1 bg-neon-green mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Profile Image */}
          <div className="animate-slide-in">
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
          <div className="animate-fade-in">
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
                    <span className="font-medium">Graduação em Sistemas de Informação</span>
                    <br />
                    <span className="text-sm text-gray-400">2023 - Atualmente - UNIFEI(Universidade Federal de Itajubá)</span>
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
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center mb-12 gradient-text">
            {t('about.skills')}
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skillGroup, index) => (
              <div
                key={skillGroup.category}
                className="glass-effect rounded-lg p-6 hover-lift"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h4 className="text-lg font-semibold text-neon-green mb-4">
                  {skillGroup.category}
                </h4>
                <ul className="space-y-2">
                  {skillGroup.items.map((skill) => (
                    <li
                      key={skill}
                      className="text-gray-300 flex items-center"
                    >
                      <span className="w-2 h-2 bg-neon-green rounded-full mr-3"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
