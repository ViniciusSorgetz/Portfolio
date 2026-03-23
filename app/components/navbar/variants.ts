import { tv } from "tailwind-variants";

export const navbar = tv({
  slots: {
    base: "py-3 md:px:10 text-sm  flex items-center justify-center z-5 transition-colors pointer-events-auto",
    left: "flex items-center gap-x-15 w-full h-ful ",
    pages: " gap-x-10 hidden md:flex",
    menu: "flex gap-x-5 items-center",
  },
  variants: {
    theme: {
      light: {
        base: "bg-white text-black/75",
      },
      dark: {
        base: "bg-zinc-950 text-white/75",
      },
    },
  },
});

export const navItem = tv({
  base: "hover:cursor-pointer transition-transform duration-150 active:scale-80 figree",
  variants: {
    selected: { true: "font-bold text-galaxy" },
    theme: {
      dark: "",
      light: "invert-75",
    },
  },
});
