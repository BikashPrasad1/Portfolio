/* ================================
   Project Types (Immutable)
================================ */
const PROJECT_TYPES = Object.freeze({
  PORTFOLIO: "portfolio",
  ECOMMERCE: "ecommerce",
  LANDINGPAGE: "LANDING-PAGE",
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
      live: "",
      github: "https://github.com/BikashPrasad1/Portfolio.git",
    },

    aria: {
      label: "View Portfolio Website project",
    },
  },

  {
    id: "E-commerce",
    title: "E-commerce",
    description:
      "Responsive E-commerce UI with product cards, filters, and a checkout flow focused on conversion and performance.",

    image: "/projects/commerce.png",
    year: 2025,
    featured: true,

    type: PROJECT_TYPES.ECOMMERCE,
    technologies: ["React", "Tailwind CSS", "JavaScript"],

    links: {github: "https://github.com/BikashPrasad1/E-commerce.git",},

    aria: {
      label: "View Commerce Studio E-commerce UI project",
    },
  },

  {
    id: "Landing-Page",
    title: "LANDING-PAGE",
    description:
      "A landing page is a standalone, focused web page created specifically for a marketing or advertising campaign.",

    image: "/projects/saas.png",
    year: 2024,
    featured: true,

    type: PROJECT_TYPES.LANDINGPAGE,
    technologies: ["React", "Tailwind CSS", "JavaScript"],

    links: {},

    aria: {
      label: "View LANDING-PAGE project",
    },
  },
]);
