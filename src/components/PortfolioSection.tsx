
import React from 'react';
import { useTranslation } from '../hooks/useTranslation';
import { BarChart3, Github } from 'lucide-react';

const PortfolioSection = () => {
  const { t } = useTranslation();

  const projects = [
    {
      id: 1,
      titleKey: 'portfolio.sales.title',
      descriptionKey: 'portfolio.sales.description',
      image: '/placeholder.svg',
      technologies: ['Python', 'Pandas', 'portfolio.tech.dataAnalysis', 'portfolio.tech.olistDataset'],
      githubUrl: 'https://github.com/LopesHPedro/sales-analysis',
      liveUrl: ''
    }
  ];

  return (
    <section id="portfolio" className="section-padding bg-dark-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 slow-reveal">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t('portfolio.title')}
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            {t('portfolio.subtitle')}
          </p>
          <div className="w-24 h-1 bg-neon-green mx-auto mt-6"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 max-w-xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="glass-effect rounded-xl overflow-hidden hover-lift group slow-reveal"
              style={{ '--reveal-delay': `${index * 120}ms` } as React.CSSProperties}
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-neon-green/20 to-neon-blue/20 flex items-center justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-lg border border-neon-green/30 bg-dark-100/60 text-neon-green">
                  <BarChart3 size={34} strokeWidth={1.8} />
                </div>
                <div className="absolute inset-0 bg-dark-50/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex space-x-4">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-neon-green text-dark-50 p-3 rounded-full hover:scale-110 transition-transform"
                      >
                        <Github size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-neon-green transition-colors">
                  {t(project.titleKey)}
                </h3>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                  {t(project.descriptionKey)}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-dark-200 text-neon-green px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {tech.includes('.') ? t(tech) : tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex space-x-4">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-neon-green transition-colors text-sm flex items-center"
                    >
                      <Github size={16} className="mr-2" />
                      {t('portfolio.github')}
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
