import slugify from "slugify";
import languagesSvg from "public/images/pictures/languages.svg";

const portfolioPages = [
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
            rows: [
              {
                type: "subtitle",
                value: {
                  en: "Languages",
                  pt: "Linguagens",
                },
              },
              {
                type: "paragraph",
                value: {
                  en: "I've worked with several languages throughout my career, but my current focus is primarily on using TypeScript, both for frontend and backend development.",
                  pt: "",
                },
              },
              {
                type: "preview-code",
                value: {
                  en: {
                    code: '<img src="public/images/pictures/languages.svg"/>',
                    codeMode: false,
                    previewImg: languagesSvg,
                  },
                  pt: {
                    code: '<img src="public/images/pictures/languages.svg"/>',
                    codeMode: false,
                    previewImg: languagesSvg,
                  },
                },
              },
            ],
          },
          {
            title: {
              en: "Backend",
              pt: "Backend",
            },
            rows: [],
          },
          {
            title: {
              en: "Frontend",
              pt: "Frontend",
            },
            rows: [],
          },
          {
            title: {
              en: "Tests",
              pt: "Testes",
            },
            rows: [],
          },
          {
            title: {
              en: "Devops",
              pt: "Devops",
            },
            rows: [],
          },
          {
            title: {
              en: "Tools",
              pt: "Ferramentas",
            },
            rows: [],
          },
          {
            title: {
              en: "Architectures",
              pt: "Arquiteturas",
            },
            rows: [],
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

export const text = {
  navbar: {
    pages: [
      { label: { en: "Showcase", pt: "Apresentação" }, path: "/" },
      { label: { en: "Portfolio", pt: "Portfólio" }, path: "/portfolio/about-me" },
      { label: { en: "Contact", pt: "Contato" }, path: "/contact/" },
    ],
    language: { en: "en", pt: "pt" },
  },
  aboutMe: {
    aboutMe: {
      title: {
        en: "About Me",
        pt: "Sobre mim 🦊",
      },
      paragraphs: {
        en: [""],
        pt: [
          "Me chamo Vinícius, tenho 20 anos e sou um desenvolvedor full stack atualmente procurando oportunidades na área de tecnologia. Fui aluno de informática na Escola Técnica Monteiro Lobato, em Taquara. Atualmente aprimoro meus conhecimentos através do curso.dev e com projetos pessoais.",
        ],
      },
    },
    trajectory: {
      title: {
        en: "Trajectory",
        pt: "Trajetória",
      },
      paragraphs: {
        en: ["", ""],
        pt: [""],
      },
      code: {
        en: "",
        pt: "",
      },
    },
  },

  portfolioPages: portfolioPages.map((group, groupIndex) => ({
    title: group.title,
    items: group.items.map((item, itemIndex) => ({
      id: `${groupIndex}-${itemIndex}`,
      title: item.title,
      path: slugify(item.title.en, { lower: true }),
      sessions: item.sessions,
    })),
  })),
};
