import slugify from "slugify";
import { en, Language } from "./en";
import { Page } from "./language";

const portfolioPages: Page[] = [
  {
    title: "Começando",
    items: [
      {
        title: "Sobre mim",
        sessions: [],
      },
      {
        title: "Tecnologias",
        sessions: [
          {
            title: "JavaScript",
            rows: [],
          },
        ],
      },
      {
        title: "Habilidades",
        sessions: [],
      },
    ],
  },
  {
    title: "Projetos",
    items: [
      {
        title: "Lockers System",
        sessions: [],
      },
      {
        title: "E-Commerce",
        sessions: [],
      },
      {
        title: "Clone Tabnews",
        sessions: [],
      },
      {
        title: "Stocotoon",
        sessions: [],
      },
    ],
  },
  {
    title: "Currículo",
    items: [
      {
        title: "Formação",
        sessions: [],
      },
      {
        title: "Experiência",
        sessions: [],
      },
      {
        title: "Certificados",
        sessions: [],
      },
    ],
  },
];

const navbarPages = ["Apresentação", "Portfílio", "Contato"];

export const pt: Language = {
  navbar: {
    pages: navbarPages.map((page, index) => {
      const paths = ["/", "/portfolio/about-me", "/contact/"];
      return {
        label: page,
        path: paths[index],
      };
    }),
    language: "pt",
  },
  aboutMe: {
    aboutMe: {
      title: "Sobre mim 🦊",
      paragraphs: [
        "Me chamo Vinícius, tenho 20 anos e sou um desenvolvedor full stack atualmente procurando oportunidades na área de tecnologia. Fui aluno de informática na Escola Técnica Monteiro Lobato, em Taquara. Atualmente aprimoro meus conhecimentos através do curso.dev e com projetos pessoais.",
      ],
    },
    trajectory: {
      title: "Trajetória",
      paragraphs: [""],
      code: "",
    },
  },
  portfolioPages: portfolioPages.map((group, groupIndex) => ({
    title: group.title,
    items: group.items.map((item, itemIndex) => {
      if (!en.portfolioPages[groupIndex].items[itemIndex].path) {
        throw new Error(
          `Path not found for item in group ${groupIndex} item ${itemIndex}`,
        );
      }
      return {
        id: `${groupIndex}-${itemIndex}`,
        title: item.title,
        path: en.portfolioPages[groupIndex].items[itemIndex].path,
        sessions: item.sessions,
      };
    }),
  })),
};
