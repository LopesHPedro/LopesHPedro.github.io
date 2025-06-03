
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
    pt: 'Graduando em Sistemas de Informação & Aspirante a Cientista de Dados',
    en: 'Information Systems Student & Aspiring Data Scientist',
    es: 'Estudiante de Sistemas de Información y Aspirante a Científico de Datos',
    fr: 'Étudiant en Systèmes d\'Information et Aspirant Data Scientist'
  },
  'hero.description': {
    pt: 'Transformo dados em insights valiosos através de análises avançadas, machine learning e visualizações interativas. Especializado em descobrir padrões ocultos que impulsionam decisões estratégicas.',
    en: 'I transform data into valuable insights through advanced analytics, machine learning and interactive visualizations. Specialized in discovering hidden patterns that drive strategic decisions.',
    es: 'Transformo datos en información valiosa a través de análisis avanzados, machine learning y visualizaciones interactivas. Especializado en descubrir patrones ocultos que impulsan decisiones estratégicas.',
    fr: 'Je transforme les données en insights précieux grâce à des analyses avancées, l\'apprentissage automatique et des visualisations interactives. Spécialisé dans la découverte de modèles cachés qui orientent les décisions stratégiques.'
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
    pt: 'Sou um estudante apaixonado por transformar dados complexos em soluções práticas e insights acionáveis. Com experiência em análise estatística, machine learning e visualização de dados, busco constantemente aprimorar minhas habilidades para entregar resultados excepcionais.',
    en: 'I am a student passionate about transforming complex data into practical solutions and actionable insights. With experience in statistical analysis, machine learning and data visualization, I constantly seek to improve my skills to deliver exceptional results.',
    es: 'Soy un estudiante apasionado por transformar datos complejos en soluciones prácticas e insights accionables. Con experiencia en análisis estadístico, machine learning y visualización de datos, busco constantemente mejorar mis habilidades para entregar resultados excepcionales.',
    fr: 'Je suis un étudiant passionné par la transformation de données complexes en solutions pratiques et insights exploitables. Avec une expérience en analyse statistique, apprentissage automatique et visualisation de données, je cherche constamment à améliorer mes compétences pour livrer des résultats exceptionnels.'
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
    pt: 'Soluções especializadas em Data Science para impulsionar seu negócio',
    en: 'Specialized Data Science solutions to boost your business',
    es: 'Soluciones especializadas en Data Science para impulsar su negocio',
    fr: 'Solutions spécialisées en Data Science pour booster votre entreprise'
  },
  
  // Service items
  'service.eda.title': {
    pt: 'Análise Exploratória de Dados',
    en: 'Exploratory Data Analysis',
    es: 'Análisis Exploratorio de Datos',
    fr: 'Analyse Exploratoire des Données'
  },
  'service.eda.description': {
    pt: 'Investigação profunda dos seus dados para descobrir padrões, anomalias e insights iniciais que orientam estratégias de negócio.',
    en: 'Deep investigation of your data to discover patterns, anomalies and initial insights that guide business strategies.',
    es: 'Investigación profunda de sus datos para descubrir patrones, anomalías e insights iniciales que guían las estrategias de negocio.',
    fr: 'Investigation approfondie de vos données pour découvrir des modèles, des anomalies et des insights initiaux qui guident les stratégies commerciales.'
  },
  
  'service.ml.title': {
    pt: 'Machine Learning',
    en: 'Machine Learning',
    es: 'Machine Learning',
    fr: 'Machine Learning'
  },
  'service.ml.description': {
    pt: 'Desenvolvimento de modelos inteligentes que aprendem com os dados para automatizar decisões e prever comportamentos futuros.',
    en: 'Development of intelligent models that learn from data to automate decisions and predict future behaviors.',
    es: 'Desarrollo de modelos inteligentes que aprenden de los datos para automatizar decisiones y predecir comportamientos futuros.',
    fr: 'Développement de modèles intelligents qui apprennent des données pour automatiser les décisions et prédire les comportements futurs.'
  },
  
  'service.visualization.title': {
    pt: 'Visualização de Dados',
    en: 'Data Visualization',
    es: 'Visualización de Datos',
    fr: 'Visualisation des Données'
  },
  'service.visualization.description': {
    pt: 'Criação de dashboards interativos e gráficos impactantes que comunicam insights complexos de forma clara e acessível.',
    en: 'Creation of interactive dashboards and impactful charts that communicate complex insights clearly and accessibly.',
    es: 'Creación de dashboards interactivos y gráficos impactantes que comunican insights complejos de forma clara y accesible.',
    fr: 'Création de tableaux de bord interactifs et de graphiques percutants qui communiquent des insights complexes de manière claire et accessible.'
  },
  
  'service.bi.title': {
    pt: 'Business Intelligence',
    en: 'Business Intelligence',
    es: 'Business Intelligence',
    fr: 'Business Intelligence'
  },
  'service.bi.description': {
    pt: 'Implementação de soluções de BI que transformam dados brutos em informações estratégicas para tomada de decisões informadas.',
    en: 'Implementation of BI solutions that transform raw data into strategic information for informed decision making.',
    es: 'Implementación de soluciones de BI que transforman datos brutos en información estratégica para la toma de decisiones informadas.',
    fr: 'Implémentation de solutions de BI qui transforment les données brutes en informations stratégiques pour une prise de décision éclairée.'
  },
  
  'service.consulting.title': {
    pt: 'Consultoria em Data Science',
    en: 'Data Science Consulting',
    es: 'Consultoría en Data Science',
    fr: 'Conseil en Data Science'
  },
  'service.consulting.description': {
    pt: 'Orientação estratégica para implementar cultura data-driven na sua organização e maximizar o valor dos seus dados.',
    en: 'Strategic guidance to implement data-driven culture in your organization and maximize the value of your data.',
    es: 'Orientación estratégica para implementar cultura data-driven en su organización y maximizar el valor de sus datos.',
    fr: 'Orientation stratégique pour implémenter une culture axée sur les données dans votre organisation et maximiser la valeur de vos données.'
  },
  
  'service.predictive.title': {
    pt: 'Modelagem Preditiva',
    en: 'Predictive Modeling',
    es: 'Modelado Predictivo',
    fr: 'Modélisation Prédictive'
  },
  'service.predictive.description': {
    pt: 'Desenvolvimento de modelos estatísticos avançados para prever tendências e comportamentos futuros com alta precisão.',
    en: 'Development of advanced statistical models to predict trends and future behaviors with high accuracy.',
    es: 'Desarrollo de modelos estadísticos avanzados para predecir tendencias y comportamientos futuros con alta precisión.',
    fr: 'Développement de modèles statistiques avancés pour prédire les tendances et les comportements futurs avec une grande précision.'
  },
  
  // Portfolio Section
  'portfolio.title': {
    pt: 'Portfólio',
    en: 'Portfolio',
    es: 'Portafolio',
    fr: 'Portfolio'
  },
  'portfolio.subtitle': {
    pt: 'Projetos que demonstram minha expertise em Data Science',
    en: 'Projects that demonstrate my expertise in Data Science',
    es: 'Proyectos que demuestran mi experiencia en Data Science',
    fr: 'Projets qui démontrent mon expertise en Data Science'
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
    pt: 'Vamos discutir como posso ajudar com seus projetos de Data Science',
    en: 'Let\'s discuss how I can help with your Data Science projects',
    es: 'Discutamos cómo puedo ayudar con sus proyectos de Data Science',
    fr: 'Discutons de la façon dont je peux vous aider avec vos projets de Data Science'
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
    pt: 'Receba insights sobre Data Science e atualizações dos meus projetos',
    en: 'Receive Data Science insights and updates on my projects',
    es: 'Reciba insights sobre Data Science y actualizaciones de mis proyectos',
    fr: 'Recevez des insights sur la Data Science et des mises à jour sur mes projets'
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
