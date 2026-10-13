/** A text written in both languages. */
export type Localized = { pt: string; en: string };

export type Experience = {
  company: string;
  role: Localized;
  location: string;
  /** "YYYY-MM", e.g. "2025-08" */
  start: string;
  /** Leave it out while the job is still current */
  end?: string;
  achievements: Localized[];
  stack: string[];
};

export const experiences: Experience[] = [
  {
    company: "Fábrica de Tecnologias Turing (FTT)",
    role: { pt: "Estagiário de Desenvolvimento Front-end", en: "Front-end Development Intern" },
    location: "Anápolis, GO",
    start: "2025-08",
    achievements: [
      {
        pt: "Desenvolvo aplicações e páginas web voltadas para a UniEvangélica, com carga de 20 horas semanais.",
        en: "I build web applications and pages for UniEvangélica, working 20 hours a week.",
      },
      {
        pt: "Atuo no front-end do VERUN, sistema de locação e organização de salas de provas da UniEvangélica, corrigindo bugs da interface.",
        en: "I work on the front-end of VERUN, UniEvangélica's system for booking and organizing exam rooms, fixing interface bugs.",
      },
    ],
    stack: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Git"],
  },
];
