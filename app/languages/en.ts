import slugify from "slugify";
import { Page } from "./language";
<<<<<<< HEAD
import languagesSvg from "public/images/pictures/languages.svg";
=======
>>>>>>> c086e2c61590d1e50b306f20e795bd14b28ce89f

const portfolioPages: Page[] = [
  {
    title: "Getting Started",
    items: [
      {
        title: "About me",
        sessions: [],
      },
      {
<<<<<<< HEAD
        title: "Technologies 🚀",
        sessions: [
          {
            title: "Languages",
            rows: [
              {
                type: "subtitle",
                value: "Languages",
              },
              {
                type: "paragraph",
                value:
                  "I’ve worked with several languages throughout my career, but my current focus is primarily on using TypeScript, both for frontend and backend development.",
              },
              {
                type: "preview-code",
                value: {
                  code: '<img src="public/images/pictures/languages.svg"/>',
                  codeMode: false,
                  previewImg: languagesSvg,
                },
              },
            ],
=======
        title: "Technologies",
        sessions: [
          {
            title: "Languages",
            rows: [],
>>>>>>> c086e2c61590d1e50b306f20e795bd14b28ce89f
          },
          {
            title: "Backend",
            rows: [],
          },
          {
            title: "Frontend",
            rows: [],
          },
          {
            title: "Tests",
            rows: [],
          },
          {
            title: "Devops",
            rows: [],
          },
          {
            title: "Tools",
            rows: [],
          },
          {
            title: "Archtectures",
            rows: [],
          },
        ],
      },
      {
        title: "Skills",
        sessions: [],
      },
    ],
  },
  {
    title: "Projects",
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
    title: "Resume",
    items: [
      {
        title: "Training",
        sessions: [],
      },
      {
        title: "Experience",
        sessions: [],
      },
      {
        title: "Certificates",
        sessions: [],
      },
    ],
  },
];

export const en = {
  navbar: {
    pages: [
      { label: "Showcase", path: "/" },
      { label: "Portfolio", path: "/portfolio/about-me" },
      { label: "Contact", path: "/contact/" },
    ],
    language: "en",
  },
  aboutMe: {
    aboutMe: {
      title: "About Me",
      paragraphs: [""],
    },
    trajectory: {
      title: "Trajectory",
      paragraphs: ["", ""],
      code: "",
    },
  },

  portfolioPages: portfolioPages.map((group, groupIndex) => ({
    title: group.title,
    items: group.items.map((item, itemIndex) => ({
      id: `${groupIndex}-${itemIndex}`,
      title: item.title,
      path: slugify(item.title, { lower: true }),
      sessions: item.sessions,
    })),
  })),
};

export type Language = typeof en;
