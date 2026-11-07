export const PROJECT_CATEGORIES = [
  { id: 'all', label: { fr: 'Tous', en: 'All' } },
  { id: 'agents-llm', label: { fr: 'Agents IA & LLMs', en: 'AI Agents & LLMs' } },
  { id: 'deep-learning', label: { fr: 'Deep Learning & ML', en: 'Deep Learning & ML' } },
  { id: 'data-bi', label: { fr: 'Data & Power BI', en: 'Data & Power BI' } },
];

export const PROJECTS = [
  {
    id: 'cleeroute-edtech-agents',
    category: 'agents-llm',
    context: {
      fr: 'Cleeroute · Plateforme EdTech & Agents IA',
      en: 'Cleeroute · EdTech Platform & AI Agents',
    },
    title: {
      fr: "Cleeroute — Agents IA Autonomes & NLP pour l'Éducation",
      en: 'Cleeroute — Autonomous AI Agents & NLP for Education',
    },
    description: {
      fr: "Plateforme éducative propulsée par l'intelligence artificielle et YouTube pour offrir des contenus structurés et un accompagnement personnalisé aux apprenants. Conception des agents autonomes (LangChain, LangGraph), fine-tuning de LLMs open-weight (Unsloth, Hugging Face), backend FastAPI et suivi en production sous LangSmith.",
      en: 'AI-powered educational platform leveraging YouTube and autonomous agents to deliver structured learning paths and personalized tutoring. Built multi-agent workflows (LangChain, LangGraph), fine-tuned open-weight LLMs (Unsloth, Hugging Face), FastAPI backend services, and LangSmith monitoring.',
    },
    simulationMedia: '/images/cleeroute.png',
    fallbackMedia: '/demos/cleeroute.png',
    mediaType: 'png',
    liveUrl: 'https://www.cleeroute.com',
    liveLabel: { fr: 'Visiter cleeroute.com', en: 'Visit cleeroute.com' },
    githubUrl: 'https://github.com/NchourupouoM',
    nodes: ['YouTube & Corpus', 'LangGraph Agent', 'Unsloth LLM', 'FastAPI'],
    techStack: ['Python', 'LangChain', 'LangGraph', 'FastAPI', 'Unsloth', 'Hugging Face', 'LangSmith', 'Docker'],
    architectureDetails: {
      fr: [
        'Extraction et structuration sémantique de ressources éducatives et vidéos YouTube.',
        "Orchestration d'agents autonomes avec LangGraph pour le suivi pédagogique personnalisé.",
        'Fine-tuning de modèles open-weight (Hugging Face, Unsloth) et API asynchrone FastAPI sous Docker.',
      ],
      en: [
        'Semantic extraction and structuring of educational corpora and YouTube streams.',
        'Autonomous multi-agent orchestration with LangGraph for personalized learner guidance.',
        'Open-weight LLM fine-tuning (Hugging Face, Unsloth) served through containerized FastAPI endpoints.',
      ],
    },
  },
  {
    id: 'aegis-gateway-ai-security',
    category: 'agents-llm',
    context: {
      fr: 'Sécurité IA & Backend · Passerelle LLM & API',
      en: 'AI Security & Backend · LLM & API Gateway',
    },
    title: {
      fr: 'Aegis Gateway — Passerelle de Sécurité & Routage pour Systèmes IA',
      en: 'Aegis Gateway — Security & Routing Gateway for AI/LLM Systems',
    },
    description: {
      fr: "Passerelle de sécurité et d'orchestration conçue pour protéger les architectures d'agents IA, les endpoints LLMs et les microservices backend. Assure l'inspection des requêtes, le filtrage de données sensibles (PII/secrets), la limitation de débit, le routage intelligent et la traçabilité d'audit en temps réel.",
      en: 'Security and orchestration gateway engineered to protect AI agent architectures, LLM endpoints, and backend microservices. Enforces request inspection, sensitive data (PII/secrets) guardrails, rate limiting, intelligent routing, and tamper-evident audit telemetry.',
    },
    simulationMedia: null,
    mediaType: 'diagram',
    liveUrl: null,
    githubUrl: 'https://github.com/NchourupouoM/aegis-gateway',
    nodes: ['Client Request', 'PII & Policy Guard', 'Smart Router', 'LLM / API Target'],
    techStack: ['Python', 'FastAPI', 'AI Security', 'LLM Guardrails', 'API Gateway', 'Docker', 'REST API'],
    architectureDetails: {
      fr: [
        'Inspection entrante et sortante des prompts et réponses pour prévenir les fuites de secrets et données personnelles (PII).',
        'Politiques de contrôle d’accès, limitation de débit (rate-limiting) et routage dynamique vers les modèles ou services cibles.',
        'Journalisation structurée et télémétrie pour la gouvernance et la sécurité des systèmes IA en production.',
      ],
      en: [
        'Inbound and outbound inspection of prompts and completions to prevent secret and PII leakage.',
        'Access-control policies, rate limiting, and dynamic routing across downstream LLM providers and microservices.',
        'Structured audit logging and telemetry for production AI governance and security compliance.',
      ],
    },
  },
  {
    id: 'bunec-fraud-detection',
    category: 'deep-learning',
    context: {
      fr: 'BUNEC · Deep Learning & Sécurité Documentaire',
      en: 'BUNEC · Deep Learning & Document Security',
    },
    title: {
      fr: 'Détection Automatisée de Fraude Documentaire & Anomalies',
      en: 'Automated Document Fraud & Anomaly Detection',
    },
    description: {
      fr: "Modèles de Deep Learning et de vision par ordinateur (PyTorch) développés au Bureau National de l'État Civil (BUNEC) pour détecter automatiquement les falsifications et anomalies sur les documents d'état civil, couplés à la sécurisation de bases de données sensibles.",
      en: 'Deep Learning and Computer Vision models (PyTorch) developed at the National Civil Status Office (BUNEC) to automatically detect document forgery and anomalies across civil registration records, paired with sensitive database protection.',
    },
    simulationMedia: null,
    mediaType: 'diagram',
    liveUrl: null,
    githubUrl: 'https://github.com/NchourupouoM',
    nodes: ['Document Input', 'PyTorch Vision Model', 'Anomaly Scoring', 'Secure DB'],
    techStack: ['PyTorch', 'Deep Learning', 'Computer Vision', 'Python', 'PostgreSQL', 'Sensitive Data Security'],
    architectureDetails: {
      fr: [
        "Prétraitement optique et analyse structurelle des actes d'état civil numérisés.",
        "Modèle de vision sous PyTorch évaluant un score d'anomalie sur les champs critiques, tampons et signatures.",
        'Persistance sécurisée et journalisation d’intégrité dans PostgreSQL.',
      ],
      en: [
        'Optical preprocessing and structural verification of digitized civil-status documents.',
        'PyTorch vision model computing anomaly scores across critical fields, stamps, and signatures.',
        'Hardened persistence and integrity logging in PostgreSQL.',
      ],
    },
  },
  {
    id: 'tsla-financial-timeseries',
    category: 'deep-learning',
    context: {
      fr: 'Deep Learning · Séries Temporelles Financières',
      en: 'Deep Learning · Financial Time Series',
    },
    title: {
      fr: 'Prédiction Boursière & Séries Temporelles (Action TSLA)',
      en: 'Stock Price Forecasting & Time Series Modeling (TSLA)',
    },
    description: {
      fr: "Application de prévision de séries temporelles utilisant des architectures LSTM et NeuralProphet. Le système analyse les tendances historiques et la volatilité pour prédire la valeur de clôture de l'action Tesla (TSLA), déployée sur Hugging Face Spaces.",
      en: 'Time-series forecasting application combining LSTM networks and NeuralProphet. Analyzes historical market trends and volatility to predict Tesla (TSLA) closing prices, deployed interactively on Hugging Face Spaces.',
    },
    simulationMedia: '/images/prediction-action%20tsla.png',
    fallbackMedia: '/images/prediction-action-tsla.png',
    mediaType: 'png',
    liveUrl: 'https://huggingface.co/spaces/NchourupouoM/forecast_tsla_action',
    liveLabel: { fr: 'Voir sur Hugging Face', en: 'View on Hugging Face' },
    githubUrl: 'https://github.com/NchourupouoM',
    nodes: ['TSLA History', 'Scikit-learn', 'LSTM & NeuralProphet', 'Streamlit'],
    techStack: ['Python', 'PyTorch', 'TensorFlow', 'Scikit-learn', 'NeuralProphet', 'Time Series', 'Streamlit'],
    architectureDetails: {
      fr: [
        'Préparation des séries temporelles boursières et fenêtrage glissant avec Scikit-learn.',
        'Comparaison et combinaison de réseaux récurrents LSTM et de NeuralProphet.',
        'Interface de visualisation déployée sur Hugging Face Spaces.',
      ],
      en: [
        'Financial time-series preparation and sliding-window feature scaling with Scikit-learn.',
        'Comparative modeling combining recurrent LSTM networks and NeuralProphet.',
        'Interactive visualization interface hosted on Hugging Face Spaces.',
      ],
    },
  },
  {
    id: 'hydro-mekin-industrial-bi',
    category: 'data-bi',
    context: {
      fr: 'Hydro-Mekin · Séries Temporelles & Backend Django',
      en: 'Hydro-Mekin · Time Series & Django Backend',
    },
    title: {
      fr: "Système d'Archivage Sécurisé & Modélisation Hydroélectrique",
      en: 'Secure Archiving Platform & Hydroelectric Time-Series Analytics',
    },
    description: {
      fr: "Conception d'une plateforme robuste sous Django et PostgreSQL dédiée à la sécurisation des informations sensibles du personnel et à l'optimisation des flux RH, accompagnée de la modélisation de séries temporelles de production hydroélectrique sous Power BI.",
      en: 'Built a secure Django and PostgreSQL platform for managing sensitive personnel records and optimizing HR workflows, alongside hydroelectric production time-series modeling and automated Power BI reporting.',
    },
    simulationMedia: null,
    mediaType: 'diagram',
    liveUrl: null,
    githubUrl: 'https://github.com/NchourupouoM',
    nodes: ['Production & HR Data', 'Python & SQL', 'Django PostgreSQL', 'Power BI'],
    techStack: ['Python', 'Django', 'PostgreSQL', 'Power BI', 'DAX', 'Time Series', 'Bootstrap'],
    architectureDetails: {
      fr: [
        'Collecte, nettoyage et modélisation des séries temporelles de production hydroélectrique.',
        'Tableaux de bord automatisés sous Power BI pour le suivi opérationnel.',
        "Interface d'administration Django sur mesure avec contrôle d'accès pour l'archivage sécurisé.",
      ],
      en: [
        'Collection, cleaning, and modeling of hydroelectric generation time series.',
        'Automated Power BI dashboards for operational tracking.',
        'Custom Django administration portal with role-based access control for secure archiving.',
      ],
    },
  },
  {
    id: 'powerbi-india-connectivity',
    category: 'data-bi',
    context: {
      fr: 'Power BI · Analyse Géospatiale (5M Foyers)',
      en: 'Power BI · Geospatial Analytics (5M Households)',
    },
    title: {
      fr: 'Digital Connectivity & Education Index : Population Indienne',
      en: 'Digital Connectivity & Education Index: Indian Population',
    },
    description: {
      fr: "Analyse de l'accès à internet et à l'éducation pour 5 millions de foyers. Identification des disparités régionales et des « zones blanches » via une cartographie interactive pour orienter les politiques d'inclusion numérique.",
      en: 'Analysis of internet access and educational attainment across 5 million households. Identifies regional disparities and connectivity blind spots via interactive geospatial mapping to inform digital inclusion policies.',
    },
    simulationMedia: '/images/power_project_4.gif',
    fallbackMedia: '/demos/power_project_4.gif',
    mediaType: 'gif',
    liveUrl: null,
    githubUrl: 'https://github.com/NchourupouoM',
    nodes: ['5M Households', 'Power Query', 'DAX Model', 'Geospatial BI'],
    techStack: ['Power BI', 'DAX', 'Power Query', 'Geospatial Mapping', 'SQL'],
    architectureDetails: {
      fr: [
        'Traitement et structuration des données démographiques sur 5 millions de foyers.',
        'Calcul d’indicateurs composites DAX croisant connectivité et éducation.',
        'Cartographie interactive permettant d’isoler les zones blanches régionales.',
      ],
      en: [
        'Processed and modeled demographic records covering 5 million households.',
        'Authored composite DAX indices cross-referencing connectivity and education.',
        'Interactive geospatial mapping isolating regional connectivity gaps.',
      ],
    },
  },
  {
    id: 'powerbi-hr-attrition',
    category: 'data-bi',
    context: {
      fr: 'Power BI · HR Analytics (1 400+ Employés)',
      en: 'Power BI · HR Analytics (1,400+ Employees)',
    },
    title: {
      fr: "HR Analytics : Dashboard de l'Attrition",
      en: 'HR Analytics: Employee Attrition Dashboard',
    },
    description: {
      fr: "Outil d'aide à la décision pour la rétention des talents. Analyse des facteurs de départ (1 400+ employés) par département, salaire, ancienneté et niveau d'étude afin de réduire le turnover.",
      en: 'Decision-support dashboard for talent retention. Analyzes turnover factors across 1,400+ employees by department, salary band, tenure, and education level.',
    },
    simulationMedia: '/images/power_project_1.gif',
    fallbackMedia: '/demos/power_project_1.gif',
    mediaType: 'gif',
    liveUrl: null,
    githubUrl: 'https://github.com/NchourupouoM',
    nodes: ['HR Dataset', 'Star Schema', 'DAX Measures', 'Retention BI'],
    techStack: ['Power BI', 'DAX', 'Data Modeling', 'Power Query', 'SQL'],
    architectureDetails: {
      fr: [
        'Modélisation en étoile des données RH sur plus de 1 400 collaborateurs.',
        'Indicateurs DAX de taux de rotation, ancienneté et disparités salariales.',
        'Exploration dynamique par département et profil de poste.',
      ],
      en: [
        'Star-schema data modeling across 1,400+ employee records.',
        'DAX KPIs measuring turnover rate, tenure cohorts, and salary bands.',
        'Dynamic drill-down by department and job role.',
      ],
    },
  },
  {
    id: 'powerbi-maven-sales',
    category: 'data-bi',
    context: {
      fr: 'Power BI · Performance Commerciale (5 Ans)',
      en: 'Power BI · Commercial Performance (5 Years)',
    },
    title: {
      fr: 'Sales Performance : Maven Cycles',
      en: 'Sales Performance: Maven Cycles',
    },
    description: {
      fr: "Analyse multidimensionnelle des ventes sur 5 ans. Segmentation client et suivi de la rentabilité par catégorie de produit pour optimiser les marges bénéficiaires régionales.",
      en: 'Five-year multidimensional sales analysis. Customer segmentation and profitability tracking by product category to optimize regional net margins.',
    },
    simulationMedia: '/images/power_project_2.gif',
    fallbackMedia: '/demos/power_project_2.gif',
    mediaType: 'gif',
    liveUrl: null,
    githubUrl: 'https://github.com/NchourupouoM',
    nodes: ['5-Year History', 'Power Query', 'Time Intelligence DAX', 'Margin BI'],
    techStack: ['Power BI', 'Power Query', 'DAX', 'Financial Analysis', 'SQL'],
    architectureDetails: {
      fr: [
        'Consolidation de 5 années d’historique de ventes et retours produits via Power Query.',
        'Mesures DAX Time-Intelligence (croissance annuelle, marges nettes, paniers moyens).',
        'Comparaison des performances par territoire et segment client.',
      ],
      en: [
        'Consolidated 5 years of sales and product return history via Power Query.',
        'DAX Time-Intelligence measures tracking YoY growth, net margins, and basket size.',
        'Performance benchmarking across territories and customer segments.',
      ],
    },
  },
  {
    id: 'powerbi-product-profitability',
    category: 'data-bi',
    context: {
      fr: 'Power BI · Rentabilité & Gestion des Stocks',
      en: 'Power BI · Profitability & Inventory Optimization',
    },
    title: {
      fr: 'Segmentation & Rentabilité Produits',
      en: 'Product Segmentation & Inventory Profitability',
    },
    description: {
      fr: "Approfondissement de l'analyse Maven Cycles focalisé sur la connaissance client et l'optimisation des stocks en fonction de la saisonnalité et de la demande régionale.",
      en: 'In-depth extension of the Maven Cycles analysis focused on customer behavior and inventory optimization driven by seasonality and regional demand.',
    },
    simulationMedia: '/images/power_project_3.gif',
    fallbackMedia: '/demos/power_project_3.gif',
    mediaType: 'gif',
    liveUrl: null,
    githubUrl: 'https://github.com/NchourupouoM',
    nodes: ['Inventory & Orders', 'Seasonality', 'DAX KPIs', 'ROI Matrix'],
    techStack: ['Power BI', 'DAX', 'Power Query', 'Advanced Visualization'],
    architectureDetails: {
      fr: [
        'Étude de la saisonnalité des ventes et de la rotation des stocks par gamme.',
        'Segmentation comportementale des clients à forte valeur.',
        'Aide à la décision pour ajuster les approvisionnements régionaux.',
      ],
      en: [
        'Seasonality analysis and inventory turnover modeling across product lines.',
        'Behavioral segmentation of high-value customer cohorts.',
        'Decision support for regional stock allocation.',
      ],
    },
  },
];
