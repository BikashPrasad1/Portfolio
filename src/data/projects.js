/* ================================
   Project Types (Immutable)
================================ */
const PROJECT_TYPES = Object.freeze({
  PORTFOLIO: "portfolio",
  ECOMMERCE: "ecommerce",
  DASHBOARD: "dashboard",
});

/* ================================
   Projects Data
================================ */
export const projects = Object.freeze([
  {
    id: "portfolio-website",
    title: "Portfolio Website",
    description:
      "Modern personal portfolio built with React, Tailwind CSS, surfacemorphism UI, dark mode, and smooth animations.",

    image: "/projects/portfolio.png",
    year: 2025,
    featured: true,

    type: PROJECT_TYPES.PORTFOLIO,
    technologies: ["React", "Tailwind CSS", "Framer Motion", "Vite"],

    links: {
      live: "https://your-site.netlify.app",
      github: "https://github.com/username/portfolio",
    },

    aria: {
      label: "View Portfolio Website project",
    },
  },

  {
    id: "commerce-studio",
    title: "Commerce Studio",
    description:
      "Responsive ecommerce UI with product cards, filters, and a checkout flow focused on conversion and performance.",

    image: "/projects/commerce.png",
    year: 2025,
    featured: false,

    type: PROJECT_TYPES.ECOMMERCE,
    technologies: ["React", "Tailwind CSS", "JavaScript"],

    links: {},

    aria: {
      label: "View Commerce Studio ecommerce UI project",
    },
  },

  {
    id: "saas-insight",
    title: "SaaS Insight Dashboard",
    description:
      "Admin dashboard UI featuring charts, tables, and reusable layout components.",

    image: "/projects/saas.png",
    year: 2024,
    featured: false,

    type: PROJECT_TYPES.DASHBOARD,
    technologies: ["React", "Redux", "REST API"],

    links: {},

    aria: {
      label: "View SaaS Insight dashboard project",
    },
  },
]);
