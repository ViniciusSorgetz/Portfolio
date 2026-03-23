import { tv } from "tailwind-variants";

export const sidebarTitle = tv({
  base: "font-bold figtree",
  variants: {
    theme: {
      dark: "text-white",
      light: "text-black",
    },
  },
});

export const sidebarItem = tv({
  base: "text-sm/8 figtree",
  variants: {
    theme: {
      dark: "text-white/75",
      light: "text-black/75",
    },
    active: {
      true: "font-semibold text-green-300",
    },
  },
});

export const sidebarLine = tv({
  base: "h-0.5 rounded-full w-auto my-6",
  variants: {
    theme: {
      dark: "bg-white/20",
      light: "bg-black/20",
    },
  },
});
