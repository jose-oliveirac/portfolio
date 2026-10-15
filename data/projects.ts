import type { StaticImageData } from "next/image";
import cruzeiro from "@/public/projects/cruzeiro.png";
import tera from "@/public/projects/tera.png";
import hidrolink from "@/public/projects/hidrolink.png";
import type { Localized } from "./experience";

export type Project = {
  title: string;
  description: Localized;
  stack: string[];
  /** GitHub repository */
  repo?: string;
  /** Deployed version */
  live?: string;
  image?: StaticImageData;
  /** Shown as a wide card above the others */
  featured?: boolean;
  /** Still being built: shows an "Em andamento" badge */
  inProgress?: boolean;
};

export const projects: Project[] = [
  {
    title: "Landing page Cruzeiro",
    description: {
      pt: "Exposição virtual sobre a história do Cruzeiro Esporte Clube, com sala de troféus e galeria de lendas. Landing page responsiva, com estrutura semântica e atenção à tipografia e ao espaçamento.",
      en: "A virtual exhibition about the history of Cruzeiro Esporte Clube, with a trophy room and a gallery of legends. A responsive landing page with semantic markup and careful typography and spacing.",
    },
    stack: ["React", "TypeScript", "Vite", "CSS"],
    repo: "https://github.com/jose-oliveirac/Landing-page-Cruzeiro",
    live: "https://jose-oliveirac.github.io/Landing-page-Cruzeiro/",
    image: cruzeiro,
    featured: true,
  },
  {
    title: "TERA",
    description: {
      pt: "Plataforma institucional da TERA — Gestão e Negócios. Desenvolvi toda a interface e a arquitetura front-end, fiel ao protótipo do Figma, em dupla com um desenvolvedor back-end, e dockerizei o front-end.",
      en: "Corporate platform for TERA — Gestão e Negócios. I built the whole interface and front-end architecture, faithful to the Figma prototype, alongside a back-end developer, and containerized the front-end with Docker.",
    },
    stack: ["React", "TypeScript", "Vite", "React Router", "Docker"],
    repo: "https://github.com/jose-oliveirac/TERA-Front",
    image: tera,
    featured: true,
  },
  {
    title: "HidroLink",
    description: {
      pt: "Sistema web de monitoramento de irrigação para pequenos produtores rurais de Goiás, feito em equipe. Fui co-líder e idealizador, responsável pela arquitetura e por todo o front-end: rotas, navegação e login.",
      en: "A web system for monitoring irrigation for small farmers in Goiás, built as a team. I was co-lead and came up with the idea, owning the architecture and the whole front-end: routing, navigation and login.",
    },
    stack: ["React", "TypeScript", "Vite"],
    repo: "https://github.com/jose-oliveirac/HidroLink",
    image: hidrolink,
    featured: true,
  },
  {
    title: "Netflix Clone",
    description: {
      pt: "Clone da Netflix com autenticação e banco de dados no Firebase, catálogo vindo da API do TMDB e assinatura via Stripe Checkout.",
      en: "A Netflix clone with Firebase authentication and database, a catalog from the TMDB API and subscriptions through Stripe Checkout.",
    },
    stack: ["React", "Redux", "Firebase", "Stripe"],
    inProgress: true,
  },
];
