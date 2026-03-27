import slugify from "slugify";
import { Text } from "./text";

const sidebarGroups = [
  {
    title: "Getting Started",
    items: [
      {
        label: "About me",
        sessions: [""],
      },
      {
        label: "Technologies",
        sessions: [
          "Languages",
          "Backend",
          "Frontend",
          "Tests",
          "Devops",
          "Tools",
          "Archtectures",
        ],
      },
      {
        label: "Skills",
        sessions: [""],
      },
    ],
  },
  {
    title: "Projects",
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
    title: "Resume",
    items: [
      {
        label: "Training",
        sessions: [""],
      },
      {
        label: "Experience",
        sessions: [""],
      },
      {
        label: "Certificates",
        sessions: [""],
      },
    ],
  },
];

export const en: Text = {
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
  sidebarLeft: {
    groups: sidebarGroups.map((group, groupIndex) => ({
      title: group.title,
      items: group.items.map((item, itemIndex) => ({
        label: item.label,
        path: slugify(item.label, { lower: true }),
        sessions: item.sessions,
        id: `${groupIndex}-${itemIndex}`,
      })),
    })),
  },
};
