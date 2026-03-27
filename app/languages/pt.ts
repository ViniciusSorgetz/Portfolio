import slugify from "slugify";
import { Text } from "./text";
import { en } from "./en";

const sidebarLabels = [
  {
    title: "Começando",
    items: [
      {
        label: "Sobre mim",
        sessions: [""],
      },
      {
        label: "Tecnologias",
        sessions: ["JavaScript", "TypeScript"],
      },
      {
        label: "Habilidades",
        sessions: [""],
      },
    ],
  },
  {
    title: "Projetos",
    items: [
      {
        label: "Lockers System",
        sessions: [""],
      },
      {
        label: "E-Commerce",
        sessions: [""],
      },
      {
        label: "Clone Tabnews",
        sessions: [""],
      },
      {
        label: "Stocotoon",
        sessions: [""],
      },
    ],
  },
  {
    title: "Currículo",
    items: [
      {
        label: "Formação",
        sessions: [""],
      },
      {
        label: "Experiência",
        sessions: [""],
      },
      {
        label: "Certificados",
        sessions: [""],
      },
    ],
  },
];

const navbarPages = ["Apresentação", "Portfílio", "Contato"];

export const pt: Text = {
  navbar: {
    pages: navbarPages.map((page, index) => {
      return {
        label: page,
        path: en.navbar.pages[index].path,
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
      paragraphs: ["", ""],
      code: "",
    },
  },
  sidebarLeft: {
    groups: sidebarLabels.map((group, groupIndex) => ({
      title: group.title,
      items: group.items.map((item, itemIndex) => ({
        label: item.label,
        path: slugify(
          en.sidebarLeft.groups[groupIndex].items[itemIndex].label,
          {
            lower: true,
          },
        ),
        sessions: item.sessions,
        id: `${groupIndex}-${itemIndex}`,
      })),
    })),
  },
};
