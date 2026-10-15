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
        pt: "Desenvolvo as interfaces de aplicações e páginas web da UniEvangélica com React e TypeScript, dentro do time da Fábrica de Tecnologias Turing (20 h por semana).",
        en: "I build the interfaces of UniEvangélica’s web applications and pages with React and TypeScript, as part of the Fábrica de Tecnologias Turing team (20 hours a week).",
      },
      {
        pt: "No VERUN, sistema que organiza a reserva de salas de provas da universidade, investigo e corrijo bugs de interface em uma base de código compartilhada com o time.",
        en: "On VERUN, the university’s system for booking exam rooms, I track down and fix interface bugs in a codebase shared with the team.",
      },
    ],
    stack: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Git"],
  },
];
