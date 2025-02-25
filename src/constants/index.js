import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  paulsabatier,
  starbucks,
  tesla,
  capitole,
  intence,
  uman,
  odoo,
  automate,
  threejs,
  postgresql,
  python,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "Présentation",
  },
  {
    id: "work",
    title: "Expérience",
  },
  {
    id: "project",
    title: "Projets",
  },
  {
    id: "contact",
    title: "Contactez-moi",
  },
];

const services = [
  {
    title: "Développement Front-End",
    icon: web,
  },
  {
    title: "Développement Back-End",
    icon: backend,
  },
  {
    title: "Développement d'Applications",
    icon: mobile,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Postgresql",
    icon: postgresql,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Développeur web",
    company_name: "Intence",
    icon: intence,
    iconBg: "#383E56",
    date: "Septembre 2022 - Octobre 2024",
    points: [
      "Développement de modules Odoo : Création de modules personnalisés en Python pour le backend, avec intégration de XML et JavaScript pour l'affichage.",
      "Optimisation des processus : Mise en place de workflows automatisés pour améliorer l'efficacité interne et répondre aux besoins spécifiques des clients.",
      "Gestion des données : Utilisation de PostgreSQL pour structurer et optimiser la base de données d'Odoo.",
      "API & interopérabilité : Conception et implémentation d'une API REST pour assurer une communication fluide avec des systèmes externes.",
    ],
  },
  {
    title: "Alternant développeur web",
    company_name: "Intence",
    icon: intence,
    iconBg: "#383E56",
    date: "Juillet 2021 - Septembre 2022",
    points: [
      "Développement de modules back-office : Création de modules personnalisés en JavaScript pour améliorer l'interface et les fonctionnalités internes de l'entreprise.",
      "Communication avec le backend : Intégration avec un webservice Python, assurant une interaction efficace entre le front et le back-end.",
      "Gestion des données : Connexion et manipulation des informations via une base de données PostgreSQL, garantissant performance et fiabilité.",
      "Conception orientée utilisateur : Développement de fonctionnalités adaptées aux besoins des utilisateurs, avec une intégration fluide et un fonctionnement optimisé.",
    ],
  },
  {
    title:
      "Licence professionnelle RTAI (Responsable Technique d'Applications Internet)",
    company_name: "Université Toulouse Capitole",
    icon: capitole,
    iconBg: "#383E56",
    date: "Septembre 2021 - Septembre 2022",
    points: [
      "Conception et réalisation d'applications Internet.",
      "Suivi de conduite de projets.",
      "Maintenance du système d'information de l'entreprise .",
      "Production de contenus interactifs.",
    ],
  },
  {
    title: "DUT (Diplôme Universitaire de Technologie) Informatique",
    company_name: "Université Toulouse Paul Sabatier",
    icon: paulsabatier,
    iconBg: "#383E56",
    date: "Septembre 2019 - Septembre 2021",
    points: [
      "Déployer et adapter les applications logicielles avec différents langages (C, Java, ...).",
      "Mettre en œuvre des applications réparties ou distribuées (Http, ftp, SMTP, ...).",
      "Mettre en œuvre une base de données et maîtriser le langage de requête associé (SQL, ...).",
      "concevoir un site web en utilisant différentes technologies(HTML, CSS, PHP, Javascript, ...).",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Uman",
    description:
      "Uman est une application web permettant la gestion des rendez-vous médicaux en ligne. Inspirée de solutions comme Doctolib, elle propose une interface complète pour les patients et les praticiens.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: uman,
    source_code_link: "https://github.com/",
  },
  {
    name: "Modules Odoo",
    description:
      "Développement de modules personnalisés sous Odoo. Réalisation de workflows automatisés pour optimiser les processus internes et répondre aux besoins spécifiques des clients. Conception et mise en place d'une API REST pour permettre une communication fluide avec des systèmes externes.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "python",
        color: "green-text-gradient",
      },
      {
        name: "postgresql",
        color: "pink-text-gradient",
      },
    ],
    image: odoo,
    source_code_link: "https://github.com/",
  },
  {
    name: "Application Automate",
    description:
      "Développement d'une application Java avec une WebView en JavaScript permettant la vente de QR codes pour l'accès à une télécabine. Intégration d'un terminal de paiement pour la gestion des transactions et d'une imprimante connectée pour l'impression des QR codes. Conception d'une interface utilisateur optimisée pour une utilisation sur borne interactive, garantissant une expérience fluide et intuitive.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "java",
        color: "green-text-gradient",
      },
      {
        name: "api",
        color: "pink-text-gradient",
      },
    ],
    image: automate,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
