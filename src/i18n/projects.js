const projects = {
  en: {
    heading: "Projects",
    live: "Live Demo",
    github: "GitHub",

    telecomAutomation: {
      title: "Telecom Test Automation Framework",
      description:
        "Telecom style test automation framework for a containerized two service distributed system, with end to end integration testing, fault injection, timeout handling, log scanning, and CI based validation.",
    },

    ranKpi: {
      title: "5G RAN Log Analytics and KPI Validation Tool",
      description:
        "CLI based analytics framework for simulated gNB and UE logs that computes KPIs, validates configurable thresholds, produces reports, and returns CI friendly PASS or FAIL results.",
    },

    expTrack: {
      title: "ExpTrack",
      description:
        "A B test tracking platform with CSV upload, conversion metrics, and significance testing. Built with FastAPI, React, and Docker.",
    },

    shwsTrivia: {
      title: "SHWS Trivia",
      description:
        "Interactive trivia game with staged difficulty progression, custom game logic, metrics tracking, and a responsive dark and light user interface. Integrates an external API with retry and timeout handling.",
    },

    anomalyExpenses: {
      title: "Anomaly Expenses",
      description:
        "Fraud detection pipeline using EDA, logistic regression, and random forest. Deployed with Streamlit.",
    },

    eHotels: {
      title: "eHotels",
      description:
        "Collaborative backend for hotel booking with authentication, reservations, and search using Flask and raw SQL.",
    },

    suppliesPro: {
      title: "SuppliesPro",
      description:
        "A responsive e commerce showcase site for sport equipment and supplements. Built with React and React Router.",
    },
  },

  fr: {
    heading: "Projets",
    live: "Démo",
    github: "GitHub",

    telecomAutomation: {
      title: "Telecom Test Automation Framework",
      description:
        "Framework d’automatisation de tests de style télécom pour un système distribué containerisé à deux services, avec tests d’intégration de bout en bout, injection de pannes, gestion des délais, analyse des logs et validation en CI.",
    },

    ranKpi: {
      title: "5G RAN Log Analytics and KPI Validation Tool",
      description:
        "Framework analytique en ligne de commande pour des logs simulés de gNB et UE qui calcule des KPI, valide des seuils configurables, génère des rapports et retourne des résultats PASS ou FAIL compatibles CI.",
    },

    expTrack: {
      title: "ExpTrack",
      description:
        "Plateforme de suivi de tests A B avec import CSV, métriques de conversion et tests de signification. Construite avec FastAPI, React et Docker.",
    },

    shwsTrivia: {
      title: "SHWS Trivia",
      description:
        "Jeu de trivia interactif avec progression de difficulté par étapes, logique de jeu personnalisée, suivi de métriques et interface utilisateur responsive avec mode clair et sombre. Intègre une API externe avec gestion des délais et des tentatives de reprise.",
    },

    anomalyExpenses: {
      title: "Anomaly Expenses",
      description:
        "Pipeline de détection de fraude utilisant EDA, régression logistique et forêt aléatoire. Déployé avec Streamlit.",
    },

    eHotels: {
      title: "eHotels",
      description:
        "Backend collaboratif pour une application de réservation d’hôtel avec authentification, recherche et réservations utilisant Flask et SQL brut.",
    },

    suppliesPro: {
      title: "SuppliesPro",
      description:
        "Site vitrine réactif pour du matériel sportif et des suppléments, construit avec React et React Router.",
    },
  },
};

export default projects;