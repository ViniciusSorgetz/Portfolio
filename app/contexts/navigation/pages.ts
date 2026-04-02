import { Text } from "@/app/utils/types/text";

export type Pages = {
  title: Text;
  items: Item[];
}[];

export type Item = {
  title: Text;
  sessions: Session[];
};

export type Session = {
  title: Text;
};

export const pages: Pages = [
  {
    title: {
      en: "Getting Started",
      pt: "Começando",
    },
    items: [
      {
        title: {
          en: "About me",
          pt: "Sobre mim",
        },
        sessions: [],
      },
      {
        title: {
          en: "Technologies 🚀",
          pt: "Tecnologias",
        },
        sessions: [
          {
            title: {
              en: "Languages",
              pt: "Linguagens",
            },
          },
          {
            title: {
              en: "Backend",
              pt: "Backend",
            },
          },
          {
            title: {
              en: "Frontend",
              pt: "Frontend",
            },
          },
          {
            title: {
              en: "Tests",
              pt: "Testes",
            },
          },
          {
            title: {
              en: "Devops",
              pt: "Devops",
            },
          },
          {
            title: {
              en: "Tools",
              pt: "Ferramentas",
            },
          },
          {
            title: {
              en: "Architectures",
              pt: "Arquiteturas",
            },
          },
        ],
      },
      {
        title: {
          en: "Skills",
          pt: "Habilidades",
        },
        sessions: [],
      },
    ],
  },
  {
    title: {
      en: "Projects",
      pt: "Projetos",
    },
    items: [
      {
        title: {
          en: "Lockers System",
          pt: "Lockers System",
        },
        sessions: [],
      },
      {
        title: {
          en: "E-Commerce",
          pt: "E-Commerce",
        },
        sessions: [],
      },
      {
        title: {
          en: "Clone Tabnews",
          pt: "Clone Tabnews",
        },
        sessions: [],
      },
      {
        title: {
          en: "Stocotoon",
          pt: "Stocotoon",
        },
        sessions: [],
      },
    ],
  },
  {
    title: {
      en: "Resume",
      pt: "Currículo",
    },
    items: [
      {
        title: {
          en: "Training",
          pt: "Formação",
        },
        sessions: [],
      },
      {
        title: {
          en: "Experience",
          pt: "Experiência",
        },
        sessions: [],
      },
      {
        title: {
          en: "Certificates",
          pt: "Certificados",
        },
        sessions: [],
      },
    ],
  },
];
