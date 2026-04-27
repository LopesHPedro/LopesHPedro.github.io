
import { useState, useEffect } from 'react';

export type Language = 'pt' | 'en' | 'es' | 'fr';

export interface Translations {
  [key: string]: {
    pt: string;
    en: string;
    es: string;
    fr: string;
  };
}

const translations: Translations = {
  // Navigation
  'nav.home': {
    pt: 'Início',
    en: 'Home',
    es: 'Inicio',
    fr: 'Accueil'
  },
  'nav.about': {
    pt: 'Sobre',
    en: 'About',
    es: 'Acerca',
    fr: 'À propos'
  },
  'nav.services': {
    pt: 'Serviços',
    en: 'Services',
    es: 'Servicios',
    fr: 'Services'
  },
  'nav.portfolio': {
    pt: 'Portfólio',
    en: 'Portfolio',
    es: 'Portafolio',
    fr: 'Portfolio'
  },
  'nav.contact': {
    pt: 'Contato',
    en: 'Contact',
    es: 'Contacto',
    fr: 'Contact'
  },
  
  // Hero Section
  'hero.title': {
    pt: 'Graduando em Sistemas de Informação & Aspirante a Analista de Dados',
    en: 'Information Systems Student & Aspiring Data Analyst',
    es: 'Estudiante de Sistemas de Información y Aspirante a Analista de Datos',
    fr: 'Étudiant en Systèmes d\'Information et Aspirant Data Analyst'
  },
  'hero.description': {
    pt: 'Transformo dados em insights valiosos através de análises, dashboards e visualizações claras. Foco em identificar padrões, problemas e oportunidades que apoiam decisões de negócio.',
    en: 'I transform data into valuable insights through analysis, dashboards and clear visualizations. Focused on identifying patterns, problems and opportunities that support business decisions.',
    es: 'Transformo datos en insights valiosos a través de análisis, dashboards y visualizaciones claras. Enfocado en identificar patrones, problemas y oportunidades que apoyan decisiones de negocio.',
    fr: 'Je transforme les données en insights précieux grâce à des analyses, tableaux de bord et visualisations claires. Axé sur l\'identification des tendances, problèmes et opportunités qui soutiennent les décisions métier.'
  },
  'hero.cta': {
    pt: 'Ver Meu Trabalho',
    en: 'View My Work',
    es: 'Ver Mi Trabajo',
    fr: 'Voir Mon Travail'
  },
  'hero.contact': {
    pt: 'Entre em Contato',
    en: 'Get In Touch',
    es: 'Ponerse en Contacto',
    fr: 'Contactez-moi'
  },
  
  // About Section
  'about.title': {
    pt: 'Sobre Mim',
    en: 'About Me',
    es: 'Acerca de Mí',
    fr: 'À Propos de Moi'
  },
  'about.bio': {
    pt: 'Sou um estudante apaixonado por transformar dados complexos em soluções práticas e insights acionáveis. Tenho foco em análise de métricas, tratamento de dados, visualização e apoio à tomada de decisão orientada a dados.',
    en: 'I am a student passionate about transforming complex data into practical solutions and actionable insights. I focus on metrics analysis, data preparation, visualization and supporting data-driven decision making.',
    es: 'Soy un estudiante apasionado por transformar datos complejos en soluciones prácticas e insights accionables. Me enfoco en análisis de métricas, tratamiento de datos, visualización y apoyo a la toma de decisiones basada en datos.',
    fr: 'Je suis un étudiant passionné par la transformation de données complexes en solutions pratiques et insights exploitables. Je me concentre sur l\'analyse des métriques, la préparation des données, la visualisation et l\'aide à la prise de décision basée sur les données.'
  },
  'about.education': {
    pt: 'Formação Acadêmica',
    en: 'Academic Background',
    es: 'Formación Académica',
    fr: 'Formation Académique'
  },
  'about.skills': {
    pt: 'Habilidades Técnicas',
    en: 'Technical Skills',
    es: 'Habilidades Técnicas',
    fr: 'Compétences Techniques'
  },
  'about.downloadCV': {
    pt: 'Baixar Currículo',
    en: 'Download CV',
    es: 'Descargar CV',
    fr: 'Télécharger CV'
  },
  
  // Services Section
  'services.title': {
    pt: 'Meus Serviços',
    en: 'My Services',
    es: 'Mis Servicios',
    fr: 'Mes Services'
  },
  'services.subtitle': {
    pt: 'Soluções especializadas em Análise de Dados para impulsionar seu negócio',
    en: 'Specialized Data Analysis solutions to boost your business',
    es: 'Soluciones especializadas en Análisis de Datos para impulsar su negocio',
    fr: 'Solutions spécialisées en Analyse de Données pour booster votre entreprise'
  },
  
  // Service items
  'service.eda.title': {
    pt: 'Análise de Dados',
    en: 'Data Analysis',
    es: 'Análisis de Datos',
    fr: 'Analyse de Données'
  },
  'service.eda.description': {
    pt: 'Análise de dados para identificar padrões, problemas e oportunidades que apoiam decisões de negócio.',
    en: 'Data analysis to identify patterns, problems and opportunities that support business decisions.',
    es: 'Análisis de datos para identificar patrones, problemas y oportunidades que apoyan decisiones de negocio.',
    fr: 'Analyse de données pour identifier les tendances, problèmes et opportunités qui soutiennent les décisions métier.'
  },
  
  'service.visualization.title': {
    pt: 'Visualização de Dados',
    en: 'Data Visualization',
    es: 'Visualización de Datos',
    fr: 'Visualisation des Données'
  },
  'service.visualization.description': {
    pt: 'Criação de dashboards e relatórios claros para acompanhar métricas e facilitar a tomada de decisão.',
    en: 'Creation of clear dashboards and reports to track metrics and support decision making.',
    es: 'Creación de dashboards e informes claros para monitorear métricas y facilitar la toma de decisiones.',
    fr: 'Création de tableaux de bord et rapports clairs pour suivre les métriques et faciliter la prise de décision.'
  },
  
  'service.bi.title': {
    pt: 'Business Intelligence',
    en: 'Business Intelligence',
    es: 'Business Intelligence',
    fr: 'Business Intelligence'
  },
  'service.bi.description': {
    pt: 'Transformação de dados em informações estratégicas para melhorar resultados e eficiência.',
    en: 'Turning data into strategic information to improve results and efficiency.',
    es: 'Transformación de datos en información estratégica para mejorar resultados y eficiencia.',
    fr: 'Transformation des données en informations stratégiques pour améliorer les résultats et l\'efficacité.'
  },
  
  'service.cleaning.title': {
    pt: 'Limpeza e Tratamento de Dados',
    en: 'Data Cleaning and Preparation',
    es: 'Limpieza y Tratamiento de Datos',
    fr: 'Nettoyage et Préparation des Données'
  },
  'service.cleaning.description': {
    pt: 'Organização e preparação de dados para garantir análises confiáveis e consistentes.',
    en: 'Organizing and preparing data to ensure reliable and consistent analyses.',
    es: 'Organización y preparación de datos para garantizar análisis confiables y consistentes.',
    fr: 'Organisation et préparation des données pour garantir des analyses fiables et cohérentes.'
  },
  
  'service.insights.title': {
    pt: 'Insights de Negócio',
    en: 'Business Insights',
    es: 'Insights de Negocio',
    fr: 'Insights Métier'
  },
  'service.insights.description': {
    pt: 'Identificação de oportunidades e recomendações práticas com base nos dados.',
    en: 'Identification of opportunities and practical recommendations based on data.',
    es: 'Identificación de oportunidades y recomendaciones prácticas basadas en datos.',
    fr: 'Identification d\'opportunités et recommandations pratiques basées sur les données.'
  },
  
  // Portfolio Section
  'portfolio.title': {
    pt: 'Portfólio',
    en: 'Portfolio',
    es: 'Portafolio',
    fr: 'Portfolio'
  },
  'portfolio.subtitle': {
    pt: 'Projetos que demonstram minha experiência em Análise de Dados',
    en: 'Projects that demonstrate my expertise in Data Analysis',
    es: 'Proyectos que demuestran mi experiencia en Análisis de Datos',
    fr: 'Projets qui démontrent mon expertise en Analyse de Données'
  },
  'portfolio.viewProject': {
    pt: 'Ver Projeto',
    en: 'View Project',
    es: 'Ver Proyecto',
    fr: 'Voir le Projet'
  },
  'portfolio.github': {
    pt: 'Ver no GitHub',
    en: 'View on GitHub',
    es: 'Ver en GitHub',
    fr: 'Voir sur GitHub'
  },
  
  // Contact Section
  'contact.title': {
    pt: 'Entre em Contato',
    en: 'Get In Touch',
    es: 'Ponerse en Contacto',
    fr: 'Contactez-moi'
  },
  'contact.subtitle': {
    pt: 'Vamos discutir como posso ajudar com seus projetos de Análise de Dados',
    en: 'Let\'s discuss how I can help with your Data Analysis projects',
    es: 'Discutamos cómo puedo ayudar con sus proyectos de Análisis de Datos',
    fr: 'Discutons de la façon dont je peux vous aider avec vos projets d\'Analyse de Données'
  },
  'contact.name': {
    pt: 'Nome',
    en: 'Name',
    es: 'Nombre',
    fr: 'Nom'
  },
  'contact.email': {
    pt: 'Email',
    en: 'Email',
    es: 'Email',
    fr: 'Email'
  },
  'contact.subject': {
    pt: 'Assunto',
    en: 'Subject',
    es: 'Asunto',
    fr: 'Sujet'
  },
  'contact.message': {
    pt: 'Mensagem',
    en: 'Message',
    es: 'Mensaje',
    fr: 'Message'
  },
  'contact.send': {
    pt: 'Enviar Mensagem',
    en: 'Send Message',
    es: 'Enviar Mensaje',
    fr: 'Envoyer le Message'
  },
  'contact.success': {
    pt: 'Mensagem enviada com sucesso!',
    en: 'Message sent successfully!',
    es: '¡Mensaje enviado con éxito!',
    fr: 'Message envoyé avec succès!'
  },
  
  // Newsletter
  'newsletter.title': {
    pt: 'Newsletter',
    en: 'Newsletter',
    es: 'Newsletter',
    fr: 'Newsletter'
  },
  'newsletter.description': {
    pt: 'Receba insights sobre Análise de Dados e atualizações dos meus projetos',
    en: 'Receive Data Analysis insights and updates on my projects',
    es: 'Reciba insights sobre Análisis de Datos y actualizaciones de mis proyectos',
    fr: 'Recevez des insights sur l\'Analyse de Données et des mises à jour sur mes projets'
  },
  'newsletter.placeholder': {
    pt: 'Seu email',
    en: 'Your email',
    es: 'Tu email',
    fr: 'Votre email'
  },
  'newsletter.subscribe': {
    pt: 'Inscrever-se',
    en: 'Subscribe',
    es: 'Suscribirse',
    fr: 'S\'abonner'
  }
};

// Create a global state for language changes
let globalLanguage: Language = 'pt';
const languageListeners: Set<(lang: Language) => void> = new Set();

export const useTranslation = () => {
  const [language, setLanguage] = useState<Language>(globalLanguage);

  useEffect(() => {
    // Check localStorage on mount
    const savedLanguage = localStorage.getItem('preferred-language') as Language;
    if (savedLanguage && ['pt', 'en', 'es', 'fr'].includes(savedLanguage)) {
      globalLanguage = savedLanguage;
      setLanguage(savedLanguage);
    }

    // Add listener for language changes
    const handleLanguageChange = (newLang: Language) => {
      setLanguage(newLang);
    };
    
    languageListeners.add(handleLanguageChange);

    return () => {
      languageListeners.delete(handleLanguageChange);
    };
  }, []);

  const changeLanguage = (newLanguage: Language) => {
    globalLanguage = newLanguage;
    localStorage.setItem('preferred-language', newLanguage);
    
    // Notify all components about the language change
    languageListeners.forEach(listener => listener(newLanguage));
    
    console.log(`Language changed to: ${newLanguage}`);
  };

  const t = (key: string): string => {
    const translation = translations[key]?.[language];
    if (!translation) {
      console.warn(`Translation missing for key: ${key} in language: ${language}`);
      return key;
    }
    return translation;
  };

  return {
    language,
    changeLanguage,
    t
  };
};
