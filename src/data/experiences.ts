import { WorkExperience } from '../types/experience';

export const experiences: WorkExperience[] = [
  {
    company: "Multi Canal Services",
    title: "Développeur Full Stack - Angular/ERP",
    startDate: "2025-05-12",
    endDate: "Present",
    responsibilities: [
      "Développement d'un système ERP complet pour la logistique du dernier kilomètre avec Angular 19.2.0",
      "Implémentation de composants Standalone et Lazy Loading pour optimiser les performances",
      "Création d'un système de gestion d'état avec RxJS (BehaviorSubjects) pour la synchronisation temps réel",
      "Développement de modules fonctionnels : Dashboard, Gestion Utilisateurs, Courses & Livraisons, Stock",
      "Intégration PrimeNG 19.1.2 avec Tailwind CSS pour une interface moderne et réactive",
      "Mise en place de la sécurité avec AuthGuard et interceptors JWT",
      "Développement du module POS (Point of Sale) pour la prise de commande rapide"
    ],
    technologies: [
      "Angular 19.2.0",
      "PrimeNG 19.1.2",
      "Tailwind CSS",
      "RxJS",
      "TypeScript",
      "JWT Authentication",
      "Chart.js",
      "jsPDF",
      "Excel (xlsx)"
    ],
    logoUrl: "https://multicanalservices.com/wp-content/uploads/2018/10/logo.png",
    projectDetails: {
      description: "Système ERP complet pour la gestion logistique avec modules interconnectés",
      keyFeatures: [
        "Gestion complète des utilisateurs avec rôles et permissions",
        "Suivi en temps réel des courses et livraisons",
        "Gestion multi-sites des stocks et inventaires",
        "Système de traçabilité complet avec logs d'activité",
        "Interface POS pour commandes rapides",
        "Génération de rapports PDF et Excel",
        "Dashboard avec statistiques interactives"
      ],
      architecture: "Architecture modulaire avec composants Standalone Angular, services injectables pour la gestion d'état, et API REST centralisée"
    }
  },
  {
    company: "DA VINCI IT SOLUTIONS",
    title: "Développeur Full Stack",
    startDate: "2024-01-01",
    endDate: "2024-12-31",
    responsibilities: [
      "Développement d'une application de blog avec React.js, Node.js, Express et MongoDB",
      "Création d'une application de gestion des dépenses avec interface réactive",
      "Implémentation de l'authentification OAuth et système CRUD complet",
      "Conception et modélisation du projet Congrès ADNA",
      "Création des maquettes Figma et développement complet avec Laravel API et Vue.js",
      "Intégration Tailwind CSS pour un design moderne et responsive"
    ],
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Laravel",
      "Vue.js",
      "Tailwind CSS",
      "OAuth",
      "Figma"
    ],
    logoUrl: "/images/davinci-logo.png",
    projectDetails: {
      description: "Développement d'applications web modernes avec stack MERN et Laravel/Vue.js",
      keyFeatures: [
        "Blog interactif avec gestion de contenu",
        "Application de gestion des dépenses avec tableaux de bord",
        "Authentification sécurisée OAuth",
        "Interface utilisateur réactive et moderne",
        "API RESTful avec Laravel",
        "Frontend Vue.js avec Tailwind CSS"
      ],
      liveUrls: [
        "https://davinci-blog.onrender.com/",
        "https://expense-davincit.vercel.app"
      ]
    }
  },
  {
    company: "ADAA",
    title: "Développeur Full Stack & Testeur",
    startDate: "2023-01-01",
    endDate: "2024-12-31",
    responsibilities: [
      "Développement et maintenance des plateformes ADAA Learning et ADAA Summit",
      "Tests fonctionnels et d'intégration pendant 2 mois",
      "Développement full stack pendant 6 mois",
      "Participation à la conception de l'architecture des applications",
      "Collaboration étroite avec l'équipe technique dirigée par Monsieur Brice"
    ],
    technologies: [
      "JavaScript",
      "PHP",
      "MySQL",
      "HTML5",
      "CSS3",
      "Bootstrap",
      "Git"
    ],
    logoUrl: "/images/adaa-logo.png",
    projectDetails: {
      description: "Développement de plateformes éducatives et de recrutement",
      keyFeatures: [
        "Plateforme de formation en ligne ADAA Learning",
        "Système de recrutement intégré",
        "Gestion des événements et sommets",
        "Interface utilisateur intuitive",
        "Système de gestion des utilisateurs"
      ],
      liveUrls: [
        "https://jobs.adaalearning.com/",
        "https://jobs.adaalearning.com/become_recruiter",
        "https://adaasummit.com/"
      ]
    }
  },
  {
    company: "GENO CONSULTING",
    title: "Développeur Full Stack",
    startDate: "2022-01-01",
    endDate: "2023-12-31",
    responsibilities: [
      "Développement d'Africa Unity, plateforme de gestion d'événements",
      "Création d'un système de gestion d'articles et formations en ligne",
      "Développement frontend avec Vue.js 3 et backend avec Laravel API",
      "Implémentation de fonctionnalités de mise en relation professionnelle",
      "Collaboration avec l'équipe dirigée par Monsieur YVAN"
    ],
    technologies: [
      "Vue.js 3",
      "Laravel",
      "PHP",
      "MySQL",
      "Tailwind CSS",
      "JavaScript",
      "API REST"
    ],
    logoUrl: "/images/geno-logo.png",
    projectDetails: {
      description: "Plateforme de mise en relation professionnelle pour l'Afrique",
      keyFeatures: [
        "Gestion complète d'événements",
        "Système d'articles et actualités",
        "Formations en ligne intégrées",
        "Mise en relation professionnelle",
        "Interface moderne avec Vue.js 3",
        "API robuste avec Laravel"
      ],
      liveUrls: [
        "https://africaunity.net"
      ]
    }
  }
];
