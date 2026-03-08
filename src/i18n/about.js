const about = {
  en: {
    heading: "About Me",
    intro:
      "I am a bilingual software engineering student at the University of Ottawa focused on building reliable and user centered systems across web development, automation, and applied AI.",
    experienceTitle: "Work Experience",
    timelineTitle: "Career Timeline",
    timelineSubtitle: "Hover the timeline to explore each role",
    timelineLegendActive: "Active period",
    timelineLegendInactive: "Outside role",
    monthsLabel: "Months",
    experience: [
      {
        role: "Data and Observability Engineer",
        type: "Co-op/Internship",
        company: "Deloitte",
        duration: "Winter 2024",
        timeline: {
          start: { year: 2024, month: 1 },
          end: { year: 2024, month: 4 },
        },
        tech: ["Java", "Python", "AppDynamics", "UML", "VS Code", "Eclipse"],
      },
      {
        role: "Data Analyst",
        type: "Co-op/Internship",
        company: "Transportation Safety Board of Canada",
        duration: "Fall 2024 to Summer 2025",
        terms: ["Fall 2024", "Winter 2025", "Summer 2025"],
        timeline: {
          start: { year: 2024, month: 9 },
          end: { year: 2025, month: 8 },
        },
        tech: ["Power BI", "Power Apps", "Excel", "Power Query", "SharePoint"],
      },
      {
        role: "Teaching Assistant - Python",
        type: "Part time",
        company: "University of Ottawa",
        duration: "Fall 2025 to Winter 2026",
        terms: ["Fall 2025", "Winter 2026"],
        timeline: {
          start: { year: 2025, month: 9 },
          end: { year: 2026, month: 4 },
        },
        tech: ["Python", "Teaching", "Debugging", "Communication", "Mentoring"],
      },
      {
        role: "Software Developer",
        type: "Part time",
        company: "University of Ottawa",
        duration: "Winter 2026 to Present",
        timeline: {
          start: { year: 2026, month: 1 },
          end: "present",
        },
        tech: [
          "React",
          "Vite",
          "Node.js",
          "REST APIs",
          "JavaScript",
          "SQL",
          "GitLab",
          "CI CD",
          "JIRA",
          "Confluence",
        ],
      },
    ],
    viewProjects: "View Projects",
  },

  fr: {
    heading: "À propos de moi",
    intro:
      "Je suis un étudiant bilingue en génie logiciel à l’Université d’Ottawa, axé sur la création de systèmes fiables et centrés sur l’utilisateur dans le développement web, l’automatisation et l’IA appliquée.",
    experienceTitle: "Expérience professionnelle",
    timelineTitle: "Parcours",
    timelineSubtitle: "Survolez la timeline pour explorer chaque rôle",
    timelineLegendActive: "Période active",
    timelineLegendInactive: "Hors rôle",
    monthsLabel: "Mois",
    experience: [
      {
        role: "Ingénieur en données et observabilité",
        type: "Co-op/Internship",
        company: "Deloitte",
        duration: "Hiver 2024",
        timeline: {
          start: { year: 2024, month: 1 },
          end: { year: 2024, month: 4 },
        },
        tech: ["Java", "Python", "AppDynamics", "UML", "VS Code", "Eclipse"],
      },
      {
        role: "Analyste de données",
        type: "Co-op/Internship",
        company: "Bureau de la sécurité des transports du Canada",
        duration: "Automne 2024 à Été 2025",
        terms: ["Automne 2024", "Hiver 2025", "Été 2025"],
        timeline: {
          start: { year: 2024, month: 9 },
          end: { year: 2025, month: 8 },
        },
        tech: ["Power BI", "Power Apps", "Excel", "Power Query", "SharePoint"],
      },
      {
        role: "Assistant d’enseignement - Python",
        type: "Temps partiel",
        company: "Université d’Ottawa",
        duration: "Automne 2025 à Hiver 2026",
        terms: ["Automne 2025", "Hiver 2026"],
        timeline: {
          start: { year: 2025, month: 9 },
          end: { year: 2026, month: 4 },
        },
        tech: ["Python", "Enseignement", "Débogage", "Communication", "Mentorat"],
      },
      {
        role: "Développeur logiciel",
        type: "Temps partiel",
        company: "Université d’Ottawa",
        duration: "Hiver 2026 à Présent",
        timeline: {
          start: { year: 2026, month: 1 },
          end: "present",
        },
        tech: [
          "React",
          "Vite",
          "Node.js",
          "API REST",
          "JavaScript",
          "SQL",
          "GitLab",
          "CI CD",
          "JIRA",
          "Confluence",
        ],
      },
    ],
    viewProjects: "Voir les projets",
  },
};

export default about;