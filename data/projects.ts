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
      pt: "Exposição virtual sobre a história do Cruzeiro, feita por um torcedor: sala de troféus, galeria de lendas em zigue-zague e títulos em degradê. Componentizada em React e TypeScript, responsiva e com HTML semântico.",
      en: "A virtual exhibition about the history of Cruzeiro, built by a fan: a trophy room, a zig-zag gallery of legends and gradient headlines. Componentized in React and TypeScript, responsive and built on semantic HTML.",
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
      pt: "Site institucional de uma consultoria de gestão. Fui responsável por todo o front-end, da arquitetura dos componentes à reprodução fiel do protótipo do Figma, trabalhando em dupla com um desenvolvedor back-end. Também dockerizei a aplicação.",
      en: "Corporate website for a management consultancy. I owned the entire front-end, from the component architecture to a faithful build of the Figma prototype, working alongside a back-end developer. I also containerized the app with Docker.",
    },
    stack: ["React", "TypeScript", "Vite", "React Router", "Docker"],
    repo: "https://github.com/jose-oliveirac/TERA-Front",
    image: tera,
    featured: true,
  },
  {
    title: "HidroLink",
    description: {
      pt: "Painel de irrigação para pequenos produtores rurais de Goiás, com umidade do solo, clima e recomendação de quando irrigar (dados simulados). Idealizei o projeto, fui co-líder do time e construí todo o front-end: arquitetura, rotas, navegação e login.",
      en: "An irrigation dashboard for small farmers in Goiás, Brazil, showing soil moisture, weather and when to water (simulated data). I came up with the idea, co-led the team and built the entire front-end: architecture, routing, navigation and login.",
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
