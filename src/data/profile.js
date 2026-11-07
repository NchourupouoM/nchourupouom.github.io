export const PROFILE = {
  name: 'Nchourupouo Mohamed',
  shortName: 'Mohamed N.',
  avatarUrl: 'https://github.com/NchourupouoM.png',
  role: {
    fr: 'AI/ML Engineer, Data Scientist & Python Developer',
    en: 'AI/ML Engineer, Data Scientist & Python Developer',
  },
  tagline: {
    fr: 'Des modèles mathématiques et agents IA jusqu’aux systèmes en production.',
    en: 'From mathematical models and AI agents to production systems.',
  },
  location: {
    fr: 'Yaoundé, Cameroun',
    en: 'Yaoundé, Cameroon',
  },
  phones: ['+237 698 919 105', '+237 683 522 524'],
  phoneDisplay: '+237 698 919 105 / 683 522 524',
  email: 'nchourupouom@gmail.com',
  linkedin: 'https://www.linkedin.com/in/mohamed-nchourupouo-9530a6279',
  github: 'https://github.com/NchourupouoM',
  cvUrl: '/CV_Nchourupouo_mohamed.pdf',
  bio: {
    fr: "Ingénieur titulaire d'un Master (BAC+5) en Intelligence Artificielle et Big Data, passionné par la transformation digitale et la valorisation de données à fort impact. Animé par une forte rigueur éthique et un sens aigu de la confidentialité, je conçois des architectures de flux de données massives, des modèles de Deep Learning et des agents intelligents pour l'optimisation des processus métiers, la détection d'anomalies et l'aide à la décision stratégique.",
    en: "Engineer with a Master’s degree (BAC+5) in Artificial Intelligence and Big Data, passionate about digital transformation and high-impact data valorization. Driven by strong ethical rigor and a keen sense of confidentiality, I design massive data flow architectures, Deep Learning models, and intelligent agents for business process optimization, anomaly detection, and strategic decision support.",
  },
  aboutIntro: {
    title: {
      fr: "De l'analyse de la donnée à l'IA en production",
      en: 'From data analysis to production AI',
    },
    subtitle: {
      fr: "Deux fils conducteurs qui se nourrissent mutuellement : une base rigoureuse en mathématiques, statistiques et Data Science, et l'ingénierie de systèmes logiciels et d'agents IA déployés sur le terrain.",
      en: 'Two threads that feed each other: a rigorous foundation in mathematics, statistics, and Data Science, and hands-on engineering of software systems and AI agents deployed in the real world.',
    },
  },
  specializations: [
    {
      id: 'spec-agents',
      title: {
        fr: 'Agents IA Autonomes, LLMs & NLP',
        en: 'Autonomous AI Agents, LLMs & NLP',
      },
      lead: {
        fr: 'Concevoir des systèmes intelligents capables de raisonner, rechercher et agir.',
        en: 'Building intelligent systems that reason, retrieve, and act reliably.',
      },
      body: {
        fr: "Développement et déploiement d'agents IA autonomes, passerelles de sécurité (Aegis Gateway) et solutions NLP via LangChain, LangGraph, LlamaIndex, CrewAI et FastAPI. Fine-tuning de modèles open-weight (LLMs) via Hugging Face et Unsloth avec monitoring continu sous LangSmith.",
        en: 'Development and deployment of autonomous AI agents, security gateways (Aegis Gateway), and NLP solutions via LangChain, LangGraph, LlamaIndex, CrewAI, and FastAPI. Fine-tuning open-weight LLMs via Hugging Face & Unsloth with continuous reliability monitoring in LangSmith.',
      },
      tags: ['LangChain', 'LangGraph', 'Unsloth', 'Hugging Face', 'LangSmith', 'CrewAI', 'LlamaIndex'],
    },
    {
      id: 'spec-dl',
      title: {
        fr: 'Deep Learning, Vision & Séries Temporelles',
        en: 'Deep Learning, Computer Vision & Time Series',
      },
      lead: {
        fr: 'Détecter les anomalies et anticiper les tendances à partir de données complexes.',
        en: 'Detecting anomalies and forecasting trends from complex signals.',
      },
      body: {
        fr: "Conception et entraînement de modèles de Deep Learning sous PyTorch, TensorFlow et Scikit-learn. Applications concrètes à la détection automatisée d'anomalies et de fraudes documentaires (BUNEC) ainsi qu'à la modélisation prédictive de séries temporelles financières et industrielles (LSTM, NeuralProphet).",
        en: 'Design and training of Deep Learning models using PyTorch, TensorFlow, and Scikit-learn. Applied to automated document fraud and anomaly detection (BUNEC) as well as financial and industrial time-series forecasting (LSTM, NeuralProphet).',
      },
      tags: ['PyTorch', 'TensorFlow', 'Scikit-learn', 'Computer Vision', 'LSTM', 'NeuralProphet'],
    },
    {
      id: 'spec-data-backend',
      title: {
        fr: 'Data Analytics, Power BI & Backend Python',
        en: 'Data Analytics, Power BI & Python Backends',
      },
      lead: {
        fr: 'Des données fiables d’abord : les collecter, les sécuriser et les transformer en décisions.',
        en: 'Reliable data first: collect it, secure it, and turn it into decisions.',
      },
      body: {
        fr: "Traitement et orchestration de données à grande échelle (PySpark, PostgreSQL, MongoDB, Azure Cloud), conception de tableaux de bord décisionnels interactifs sous Power BI (DAX, Power Query) et déploiement d'APIs robustes et sécurisées (FastAPI, Django, Flask, Docker).",
        en: 'Large-scale data processing and orchestration (PySpark, PostgreSQL, MongoDB, Azure Cloud), interactive decision-support dashboards in Power BI (DAX, Power Query), and deployment of robust APIs (FastAPI, Django, Flask, Docker).',
      },
      tags: ['Python', 'Power BI (DAX)', 'SQL', 'PySpark', 'FastAPI', 'Django', 'PostgreSQL', 'Docker'],
    },
  ],
};

export const EXPERIENCES = [
  {
    id: 'exp-cleeroute',
    role: {
      fr: 'AI Engineer',
      en: 'AI Engineer',
    },
    company: 'Cleeroute',
    location: 'Yaoundé, Cameroon',
    period: {
      fr: 'Depuis Août 2025',
      en: 'Since August 2025',
    },
    current: true,
    summary: {
      fr: "Développement et déploiement d'agents IA autonomes et de solutions NLP pour l'éducation et la recherche scientifique.",
      en: 'Development and deployment of autonomous AI agents and NLP solutions for applications in education and scientific research.',
    },
    highlights: {
      fr: [
        "Développement et déploiement d'agents IA autonomes et de solutions NLP via LangChain, LangGraph et FastAPI pour l'éducation et la recherche scientifique.",
        "Fine-tuning de modèles open-weight (LLMs) via l'écosystème Hugging Face et accélération de l'entraînement avec Unsloth.",
        'Évaluation, monitoring continu et assurance de la fiabilité des réponses via LangSmith.',
      ],
      en: [
        'Development and deployment of autonomous AI agents and NLP solutions via LangChain, LangGraph, and FastAPI for applications in education and scientific research.',
        'Fine-tuning of open-weight models (LLMs) via the Hugging Face ecosystem and training acceleration with Unsloth.',
        'Evaluation, continuous monitoring, and response reliability assurance via LangSmith.',
      ],
    },
    tags: ['Python', 'LangChain', 'LangGraph', 'FastAPI', 'Hugging Face', 'Unsloth', 'LangSmith', 'Docker'],
  },
  {
    id: 'exp-bunec',
    role: {
      fr: 'AI Engineer Intern',
      en: 'AI Engineer Intern',
    },
    company: 'BUNEC (National Civil Status Office)',
    location: 'Yaoundé, Cameroon',
    period: {
      fr: 'Avril – Septembre 2025',
      en: 'April – September 2025',
    },
    current: false,
    summary: {
      fr: 'Conception de modèles de Deep Learning pour la détection automatisée de fraudes documentaires et la sécurisation de bases de données sensibles.',
      en: 'Design of Deep Learning models for automated document fraud detection and securing sensitive databases.',
    },
    highlights: {
      fr: [
        "Conception et entraînement de modèles de Deep Learning sous PyTorch pour la détection automatisée d'anomalies et de fraudes documentaires.",
        'Traitement et sécurisation de bases de données sensibles selon des normes strictes de confidentialité.',
      ],
      en: [
        'Design and training of Deep Learning models using PyTorch for automated anomaly and document fraud detection.',
        'Processing and securing sensitive databases under strict confidentiality standards.',
      ],
    },
    tags: ['PyTorch', 'Deep Learning', 'Computer Vision', 'Python', 'PostgreSQL', 'Data Security'],
  },
  {
    id: 'exp-nanabouba',
    role: {
      fr: 'Computer Science & Algorithms Teacher',
      en: 'Computer Science & Algorithms Teacher',
    },
    company: 'Collège Nana Bouba',
    location: 'Yaoundé, Cameroon',
    period: {
      fr: '2024 – 2025',
      en: '2024 – 2025',
    },
    current: false,
    summary: {
      fr: "Enseignement structuré des fondamentaux de l'algorithmique et de la programmation.",
      en: 'Structured teaching of algorithmic fundamentals and programming.',
    },
    highlights: {
      fr: [
        "Enseignement structuré des fondamentaux de l'algorithmique et de la programmation Python.",
        'Pédagogie, animation de groupes et vulgarisation de concepts techniques complexes.',
      ],
      en: [
        'Structured teaching of algorithmic fundamentals and programming.',
        'Pedagogy, group facilitation, and simplifying technical concepts.',
      ],
    },
    tags: ['Algorithms', 'Python', 'Pedagogy', 'Technical Communication'],
  },
  {
    id: 'exp-hydromekin',
    role: {
      fr: 'Data Analyst – BI & Modeling',
      en: 'Data Analyst – BI & Modeling',
    },
    company: 'Hydro-Mekin',
    location: 'Cameroon',
    period: {
      fr: 'Juillet – Octobre 2024',
      en: 'July – October 2024',
    },
    current: false,
    summary: {
      fr: 'Analyse exploratoire et modélisation de séries temporelles industrielles complexes et création de dashboards Power BI.',
      en: 'Exploratory data analysis and modeling of complex industrial time series and interactive Power BI dashboards.',
    },
    highlights: {
      fr: [
        'Analyse exploratoire des données et modélisation de séries temporelles industrielles complexes.',
        'Conception de tableaux de bord interactifs sous Power BI pour le suivi des performances.',
        "Développement d'un système d'archivage sécurisé sous Django et PostgreSQL.",
      ],
      en: [
        'Exploratory data analysis and modeling of complex industrial time series.',
        'Design of interactive dashboards using Power BI for performance tracking.',
        'Developed a secure archiving system using Django and PostgreSQL.',
      ],
    },
    tags: ['Power BI', 'DAX', 'Power Query', 'Time Series', 'Python', 'Django', 'PostgreSQL'],
  },
];

export const EDUCATION = [
  {
    id: 'edu-master',
    degree: {
      fr: 'Master en Intelligence Artificielle & Big Data (BAC+5)',
      en: 'Master in Artificial Intelligence & Big Data (BAC+5)',
    },
    institution:
      'Institut Universitaire des Grandes Écoles Européennes, Keyce Informatique et IA · Yaoundé',
    period: '2024 – 2025',
    details: {
      fr: 'Spécialisation en modélisation prédictive, Deep Learning, NLP, optimisation de LLMs open-weight et traitement de données massives à grande échelle.',
      en: 'Specialization in predictive modeling, Deep Learning, NLP, open-weight LLM optimization, and large-scale big data processing.',
    },
  },
  {
    id: 'edu-licence',
    degree: {
      fr: 'Licence en Informatique — Option Data Science',
      en: "Bachelor's Degree in Computer Science — Data Science Option",
    },
    institution: 'Université de Yaoundé I · Yaoundé',
    period: '2022 – 2023',
    details: {
      fr: 'Fondamentaux en informatique, mathématiques appliquées, probabilités, statistiques, structures de données et génie logiciel.',
      en: 'Core foundations in computer science, applied mathematics, probability, statistics, data structures, and software engineering.',
    },
  },
  {
    id: 'edu-bac',
    degree: {
      fr: 'Baccalauréat Scientifique (Série C)',
      en: 'Scientific Baccalaureate (Series C)',
    },
    institution: 'Collège Privé Laïc de la Paix · Foumban',
    period: '2019 – 2020',
    details: {
      fr: 'Mathématiques et sciences physiques : les bases analytiques qui structurent la suite du parcours.',
      en: 'Mathematics and physical sciences: the analytical foundation of everything that followed.',
    },
  },
];

// DataCamp portfolio links removed while preserving all DataCamp certifications
export const CERTIFICATIONS = [
  {
    id: 'cert-deepmind',
    issuer: 'Google DeepMind (Google Skills)',
    title: 'AI Research Foundations',
    url: null,
  },
  {
    id: 'cert-dc-mls',
    issuer: 'DataCamp',
    title: 'Machine Learning Scientist',
    url: null,
  },
  {
    id: 'cert-dc-ads',
    issuer: 'DataCamp',
    title: 'Associate Data Scientist',
    url: null,
  },
  {
    id: 'cert-dc-da',
    issuer: 'DataCamp',
    title: 'Data Analyst (Python & SQL)',
    url: null,
  },
  {
    id: 'cert-lc-research',
    issuer: 'LangChain Academy',
    title: 'Deep Research with LangGraph',
    url: 'https://academy.langchain.com/certificates/ntd4f8oya7',
  },
  {
    id: 'cert-lc-langgraph',
    issuer: 'LangChain Academy',
    title: 'LangGraph Essentials — Python',
    url: 'https://academy.langchain.com/certificates/xwnmqizkss',
  },
  {
    id: 'cert-lc-langchain',
    issuer: 'LangChain Academy',
    title: 'LangChain Essentials — Python',
    url: 'https://academy.langchain.com/certificates/eidrcto4cf',
  },
  {
    id: 'cert-lc-langsmith',
    issuer: 'LangChain Academy',
    title: 'LangSmith Essentials',
    url: 'https://academy.langchain.com/certificates/nvojtkid4v',
  },
];

export const TECH_STACK_GROUPS = [
  {
    id: 'ai-ml-nlp',
    title: {
      fr: 'IA, Machine Learning & NLP',
      en: 'AI, Machine Learning & NLP',
    },
    items: [
      'Python',
      'R',
      'PyTorch',
      'TensorFlow',
      'Scikit-learn',
      'LangChain',
      'LangGraph',
      'LlamaIndex',
      'CrewAI',
      'Deep Learning',
      'Hugging Face',
      'Unsloth (Fine-tuning)',
      'LangSmith',
    ],
  },
  {
    id: 'bigdata-cloud',
    title: {
      fr: 'Big Data, Données Massives & Cloud',
      en: 'Big Data, Massive Data & Cloud',
    },
    items: [
      'PySpark',
      'SQL (PostgreSQL)',
      'NoSQL (MongoDB)',
      'Azure Cloud',
      'ETL Pipelines',
      'Data Orchestration',
    ],
  },
  {
    id: 'bi-industrialisation',
    title: {
      fr: 'Business Intelligence & Industrialisation',
      en: 'Business Intelligence & Industrialization',
    },
    items: [
      'Power BI (DAX, Power Query)',
      'FastAPI',
      'Django',
      'Flask',
      'Docker',
      'REST API',
      'Streamlit',
    ],
  },
  {
    id: 'governance-pm',
    title: {
      fr: 'Gestion de Projet & Gouvernance',
      en: 'Project Management & Governance',
    },
    items: [
      'Agile Methodologies (SCRUM)',
      'CAPM',
      'AI Ethics',
      'Sensitive Data Security',
      'Git / GitHub',
    ],
  },
];
