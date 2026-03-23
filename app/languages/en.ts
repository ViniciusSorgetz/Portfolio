import slugify from "slugify";
import { Text } from "./text";

const sidebarGroups = [
  {
    title: "Getting Started",
    labels: ["About me", "Technologies", "Skills"],
  },
  {
    title: "Projects",
    labels: ["Lockers System", "E-Commerce", "Clone Tabnews", "Stocotoon"],
  },
  {
    title: "Resume",
    labels: ["Training", "Experience", "Certificates"],
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
    groups: sidebarGroups.map((group) => ({
      title: group.title,
      items: group.labels.map((label) => ({
        label,
        path: slugify(label, { lower: true }),
      })),
    })),
  },
};
