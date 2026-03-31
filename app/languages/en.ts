import slugify from "slugify";
import { Page } from "./language";

const portfolioPages: Page[] = [
  {
    title: "Getting Started",
    items: [
      {
        title: "About me",
        sessions: [],
      },
      {
        title: "Technologies",
        sessions: [
          {
            title: "Languages",
            rows: [],
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
