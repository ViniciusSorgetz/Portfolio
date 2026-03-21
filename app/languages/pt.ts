import slugify from "slugify";
import { Text } from "./text";
import { en } from "./en";

const sidebarLabels = [
  {
    title: "Começando",
    labels: ["Sobre mim", "Tecnologias", "Habilidades"],
  },
  {
    title: "Projetos",
    labels: ["Lockers System", "E-Commerce", "Clone Tabnews", "Stocotoon"],
  },
  {
    title: "Currículo",
    labels: ["Formação", "Experiência", "Certificados"],
  },
];

export const pt: Text = {
  navbar: {
    pages: ["Apresentação", "Portfílio", "Contato"],
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
    groups: sidebarLabels.map((group, index) => ({
      title: group.title,
      items: group.labels.map((label, itemIndex) => ({
        label,
        path: slugify(en.sidebarLeft.groups[index].items[itemIndex].label, {
          lower: true,
        }),
      })),
    })),
  },
};
