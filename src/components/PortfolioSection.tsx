
import React, { useState } from 'react';
import { useTranslation } from '../hooks/useTranslation';
import { Github } from 'lucide-react';

const PortfolioSection = () => {
  const { t } = useTranslation();
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Roadmap Ciência de Dados - Study Journey',
      description: 'Um roadmap completo e estruturado para aprender Ciência de Dados, desde fundamentos até tópicos avançados.',
      image: '/placeholder.svg',
      technologies: ['Python', 'Jupyter', 'Data Science', 'Machine Learning'],
      category: 'education',
      githubUrl: 'https://github.com/LopesHPedro/roadmap-ciencia-dados-study-journey',
      liveUrl: ''
    },
    {
      id: 2,
      title: 'Análise Exploratória - E-commerce',
      description: 'Análise completa de dados de vendas de e-commerce com insights sobre padrões de compra e comportamento do cliente.',
      image: '/placeholder.svg',
      technologies: ['Python', 'Pandas', 'Matplotlib', 'Seaborn'],
      category: 'analysis',
      githubUrl: '#',
      liveUrl: ''
    },
    {
      id: 3,
      title: 'Modelo Preditivo - Churn',
      description: 'Desenvolvimento de modelo de machine learning para prever churn de clientes com 85% de acurácia.',
      image: '/placeholder.svg',
      technologies: ['Python', 'Scikit-learn', 'XGBoost', 'Feature Engineering'],
      category: 'ml',
      githubUrl: '#',
      liveUrl: ''
    }
  ];

  const categories = [
    { key: 'all', label: 'Todos' },
    { key: 'analysis', label: 'Análise' },
    { key: 'ml', label: 'Machine Learning' },
    { key: 'education', label: 'Educação' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="portfolio" className="section-padding bg-dark-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t('portfolio.title')}
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            {t('portfolio.subtitle')}
          </p>
          <div className="w-24 h-1 bg-neon-green mx-auto mt-6"></div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.key}
              onClick={() => setFilter(category.key)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                filter === category.key
                  ? 'bg-neon-green text-dark-50'
                  : 'bg-dark-200 text-gray-300 hover:bg-dark-300 hover:text-neon-green'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="glass-effect rounded-xl overflow-hidden hover-lift group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-neon-green/20 to-neon-blue/20 flex items-center justify-center">
                <div className="text-4xl">🔬</div>
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
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-dark-200 text-neon-green px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {tech}
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
