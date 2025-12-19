const about = {
  en: {
    heading: "About Me",
    intro:
      "I'm a bilingual software engineering student at the University of Ottawa with a passion for intelligent systems, clean architecture, and data-driven design. I enjoy building elegant tools that solve real problem. Whether through dashboards, automation, or machine learning workflows.",
    skillsTitle: "Skills",
    skills: {
      "Languages": ["Python", "SQL", "JavaScript", "Java", "R"],

      "Libraries & Frameworks": [
        "React",
        "TensorFlow",
        "PyTorch",
        "Scikit-Learn",
        "Pandas",
        "NumPy",
        "Matplotlib",
      ],

      "Tools & Platforms": [
        "Git",
        "Docker",
        "Power BI",
        "AWS (EC2, S3)",
        "Azure",
        "Kubernetes",
      ],

      "Other": ["Fluent in English & French (Bilingual)"],
    },

    experienceTitle: "Work Experience",
    experience: [
      {
        role: "Data & Observability Engineer",
        type: "Co-op/Internship",
        company: "Deloitte",
        duration: "Winter 2024",
        bullets: [
          "Built a Java tool to automate AppDynamics application comparison",
          "Developed Python scripts for system monitoring and log parsing",
          "Designed API extraction pipelines using UML and pseudo-code",
        ],
        tech: ["Java", "Python", "AppDynamics", "UML", "VS Code", "Eclipse"],
      },
      {
        role: "Data Analyst",
        type: "Co-op/Internship",
        company: "Transportation Safety Board of Canada",
        duration: "Fall 2024",
        bullets: [
          "Built 4 bilingual Power BI dashboards using semantic models and filters",
          "Maintained Excel records for 500+ engines with full data integrity",
          "Created SharePoint page to centralize internal datasets",
        ],
        tech: ["Power BI", "Excel", "SharePoint", "Data Modeling"],
      },
      {
        role: "Data Analyst",
        type: "Part-time",
        company: "Transportation Safety Board of Canada",
        duration: "Winter 2025",
        bullets: [
          "Designed and maintained 2 SharePoint sites to centralize datasets",
          "Collaborated on Power Apps project for the data lifecycle",
          "Onboarded new interns and guided them on dashboard creation",
        ],
        tech: ["SharePoint", "Power Apps", "Excel", "Documentation"],
      },
      {
        role: "Data Analyst",
        type: "Co-op/Internship",
        company: "Transportation Safety Board of Canada",
        duration: "Summer 2025",
        bullets: [
          "Co-documented 4 Power BI dashboards for maintainability",
          "Built a Power Apps-based tracker to replace Excel workflows",
          "Used Power Query to manipulate datasets for internal needs",
        ],
        tech: ["Power BI", "Power Apps", "Excel", "Power Query", "Version Control"],
      },
      {
        role: "Teaching Assistant - Python",
        type: "Part-time",
        company: "University of Ottawa",
        duration: "Fall 2025 - Winter 2026",
        bullets: [
          "Led weekly Python lab sessions (ITI 1520), explaining core programming concepts and debugging strategies",
          "Supported students during office hours by reviewing code and guiding problem-solving approaches",
          "Collaborated with the instructor and TA team to ensure consistent grading and clear lab instructions",
        ],
        tech: ["Python", "Teaching", "Debugging", "Communication", "Mentoring"],
      },
    ],
    viewProjects: "View Projects",
  },

  fr: {
    heading: "À propos de moi",
    intro:
      "Je suis un étudiant bilingue en génie logiciel à l’Université d’Ottawa, passionné par les systèmes intelligents, les architectures soignées et les solutions pilotées par les données. J’aime créer des outils élégants qui résolvent des problèmes concrets. Que ce soit par des tableaux de bord, l’automatisation ou des workflows en machine learning.",
    skillsTitle: "Compétences",
    skills: {
      "Langages": ["Python", "SQL", "JavaScript", "Java", "R"],

      "Bibliothèques & Frameworks": [
        "React",
        "TensorFlow",
        "PyTorch",
        "Scikit-Learn",
        "Pandas",
        "NumPy",
        "Matplotlib",
      ],

      "Outils & Plateformes": [
        "Git",
        "Docker",
        "Power BI",
        "AWS (EC2, S3)",
        "Azure",
        "Kubernetes",
      ],

      "Autres": ["Bilingue : anglais et français"],
    },

    experienceTitle: "Expérience professionnelle",
    experience: [
      {
        role: "Ingénieur en Données & Observabilité",
        type: "Stage coop",
        company: "Deloitte",
        duration: "Hiver 2024",
        bullets: [
          "Créé un outil Java pour automatiser la comparaison d'applications AppDynamics",
          "Développé des scripts Python pour la surveillance système et l'analyse de logs",
          "Conçu des pipelines d’extraction d’API avec UML et pseudo-code",
        ],
        tech: ["Java", "Python", "AppDynamics", "UML", "VS Code", "Eclipse"],
      },
      {
        role: "Analyste de Données",
        type: "Stage coop",
        company: "Bureau de la sécurité des transports du Canada",
        duration: "Automne 2024",
        bullets: [
          "Créé 4 tableaux de bord Power BI bilingues avec modèles sémantiques et filtres",
          "Maintenu des données Excel pour 500+ moteurs avec intégrité totale",
          "Centralisé les jeux de données internes via une page SharePoint",
        ],
        tech: ["Power BI", "Excel", "SharePoint", "Modélisation de données"],
      },
      {
        role: "Analyste de Données",
        type: "Temps partiel",
        company: "Bureau de la sécurité des transports du Canada",
        duration: "Hiver 2025",
        bullets: [
          "Conçu et maintenu 2 sites SharePoint pour centraliser les données",
          "Contribué à un projet Power Apps couvrant le cycle de vie des données",
          "Encadré les nouveaux stagiaires dans la création de tableaux de bord",
        ],
        tech: ["SharePoint", "Power Apps", "Excel", "Documentation"],
      },
      {
        role: "Analyste de Données",
        type: "Stage coop",
        company: "Bureau de la sécurité des transports du Canada",
        duration: "Été 2025",
        bullets: [
          "Documenté 4 tableaux de bord Power BI pour assurer la continuité",
          "Mis en place un tracker Power Apps remplaçant Excel",
          "Manipulé les données avec Power Query pour les besoins internes",
        ],
        tech: ["Power BI", "Power Apps", "Excel", "Power Query", "Contrôle de version"],
      },
      {
        role: "Assistant d’enseignement - Python",
        type: "Temps partiel",
        company: "Université d’Ottawa",
        duration: "Automne 2025 - Hiver 2026",
        bullets: [
          "Animé des laboratoires hebdomadaires de Python (ITI 1520) en expliquant les concepts clés et les stratégies de débogage",
          "Soutenu les étudiants en heures de bureau en révisant leur code et en guidant leur démarche de résolution",
          "Collaboré avec le professeur et l’équipe de TA pour assurer une correction cohérente et des consignes claires",
        ],
        tech: ["Python", "Enseignement", "Débogage", "Communication", "Mentorat"],
      },
    ],
    viewProjects: "Voir les projets",
  },
};

export default about;
