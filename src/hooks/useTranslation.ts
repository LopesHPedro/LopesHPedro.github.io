
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
    pt: 'Graduando em Sistemas de Informação com foco em Análise de Dados',
    en: 'Information Systems Student focused on Data Analysis',
    es: 'Estudiante de Sistemas de Información con enfoque en Análisis de Datos',
    fr: 'Étudiant en Systèmes d\'Information axé sur l\'Analyse de Données'
  },
  'hero.description': {
    pt: 'Ajudo clientes a entender seus dados e tomar decisões melhores através de análise prática e dashboards.',
    en: 'I help clients understand their data and make better decisions through practical analysis and dashboards.',
    es: 'Ayudo a clientes a entender sus datos y tomar mejores decisiones a través de análisis práctico y dashboards.',
    fr: 'J\'aide les clients à comprendre leurs données et à prendre de meilleures décisions grâce à des analyses pratiques et des tableaux de bord.'
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
  'about.degree': {
    pt: 'Graduação em Sistemas de Informação',
    en: 'Bachelor\'s Degree in Information Systems',
    es: 'Grado en Sistemas de Información',
    fr: 'Licence en Systèmes d\'Information'
  },
  'about.degreePeriod': {
    pt: '2023 - Atualmente - UNIFEI (Universidade Federal de Itajubá)',
    en: '2023 - Present - UNIFEI (Federal University of Itajubá)',
    es: '2023 - Actualmente - UNIFEI (Universidad Federal de Itajubá)',
    fr: '2023 - Présent - UNIFEI (Université Fédérale d\'Itajubá)'
  },
  'skills.dataAnalysis': {
    pt: 'Análise de Dados',
    en: 'Data Analysis',
    es: 'Análisis de Datos',
    fr: 'Analyse de Données'
  },
  'skills.dataVisualization': {
    pt: 'Visualização de Dados',
    en: 'Data Visualization',
    es: 'Visualización de Datos',
    fr: 'Visualisation de Données'
  },
  'skills.business': {
    pt: 'Habilidades de Negócio',
    en: 'Business Skills',
    es: 'Habilidades de Negocio',
    fr: 'Compétences Métier'
  },
  'skills.tools': {
    pt: 'Ferramentas',
    en: 'Tools',
    es: 'Herramientas',
    fr: 'Outils'
  },
  'skills.metrics': {
    pt: 'Análise de métricas',
    en: 'Metrics analysis',
    es: 'Análisis de métricas',
    fr: 'Analyse des métriques'
  },
  'skills.insights': {
    pt: 'Geração de insights',
    en: 'Insight generation',
    es: 'Generación de insights',
    fr: 'Génération d\'insights'
  },
  'skills.decision': {
    pt: 'Tomada de decisão orientada a dados',
    en: 'Data-driven decision making',
    es: 'Toma de decisiones basada en datos',
    fr: 'Prise de décision basée sur les données'
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
    pt: 'Visualização',
    en: 'Visualization',
    es: 'Visualización',
    fr: 'Visualisation'
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
  'portfolio.sales.title': {
    pt: 'Sales Analysis - Olist Dataset',
    en: 'Sales Analysis - Olist Dataset',
    es: 'Sales Analysis - Dataset Olist',
    fr: 'Sales Analysis - Dataset Olist'
  },
  'portfolio.sales.description': {
    pt: 'Análise exploratória de dados de e-commerce usando Python e Pandas para identificar padrões de receita, categorias com melhor desempenho e tendências de vendas ao longo do tempo.',
    en: 'Exploratory analysis of e-commerce data using Python and Pandas to identify revenue patterns, top-performing categories and sales trends over time.',
    es: 'Análisis exploratorio de datos de e-commerce usando Python y Pandas para identificar patrones de ingresos, categorías con mejor desempeño y tendencias de ventas a lo largo del tiempo.',
    fr: 'Analyse exploratoire de données e-commerce avec Python et Pandas pour identifier les tendances de revenus, les catégories les plus performantes et l\'évolution des ventes dans le temps.'
  },
  'portfolio.tech.dataAnalysis': {
    pt: 'Análise de Dados',
    en: 'Data Analysis',
    es: 'Análisis de Datos',
    fr: 'Analyse de Données'
  },
  'portfolio.tech.olistDataset': {
    pt: 'Dataset Olist',
    en: 'Olist Dataset',
    es: 'Dataset Olist',
    fr: 'Dataset Olist'
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
    pt: 'Seu aplicativo de e-mail foi aberto com a mensagem pronta para envio.',
    en: 'Your email app was opened with the message ready to send.',
    es: 'Tu aplicación de email se abrió con el mensaje listo para enviar.',
    fr: 'Votre application e-mail a été ouverte avec le message prêt à envoyer.'
  },
  'contact.sending': {
    pt: 'Enviando...',
    en: 'Sending...',
    es: 'Enviando...',
    fr: 'Envoi...'
  },
  'contact.social': {
    pt: 'Redes Sociais',
    en: 'Social Media',
    es: 'Redes Sociales',
    fr: 'Réseaux Sociaux'
  },
  'contact.emailProtected': {
    pt: 'Use o formulário para entrar em contato.',
    en: 'Use the form to get in touch.',
    es: 'Usa el formulario para entrar en contacto.',
    fr: 'Utilisez le formulaire pour me contacter.'
  },
  'contact.errorRequired': {
    pt: 'Preencha todos os campos obrigatórios.',
    en: 'Please fill in all required fields.',
    es: 'Completa todos los campos obligatorios.',
    fr: 'Veuillez remplir tous les champs obligatoires.'
  },
  'contact.errorEmail': {
    pt: 'Digite apenas um e-mail válido.',
    en: 'Enter only one valid email address.',
    es: 'Ingresa solo un email válido.',
    fr: 'Saisissez une seule adresse e-mail valide.'
  },
  'contact.errorSpam': {
    pt: 'Sua mensagem parece spam. Revise o conteúdo e tente novamente.',
    en: 'Your message looks like spam. Please review it and try again.',
    es: 'Tu mensaje parece spam. Revísalo e inténtalo de nuevo.',
    fr: 'Votre message ressemble à du spam. Vérifiez-le puis réessayez.'
  },
  'contact.errorCooldown': {
    pt: 'Aguarde um pouco antes de enviar outra mensagem.',
    en: 'Please wait before sending another message.',
    es: 'Espera un poco antes de enviar otro mensaje.',
    fr: 'Veuillez attendre avant d\'envoyer un autre message.'
  },

  // Footer
  'footer.tagline': {
    pt: 'Análise de Dados • Business Intelligence • Analytics',
    en: 'Data Analysis • Business Intelligence • Analytics',
    es: 'Análisis de Datos • Business Intelligence • Analytics',
    fr: 'Analyse de Données • Business Intelligence • Analytics'
  },
  'footer.navigation': {
    pt: 'Navegação',
    en: 'Navigation',
    es: 'Navegación',
    fr: 'Navigation'
  },
  'footer.connect': {
    pt: 'Conecte-se',
    en: 'Connect',
    es: 'Conéctate',
    fr: 'Se Connecter'
  },
  'footer.rights': {
    pt: 'Todos os direitos reservados.',
    en: 'All rights reserved.',
    es: 'Todos los derechos reservados.',
    fr: 'Tous droits réservés.'
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
