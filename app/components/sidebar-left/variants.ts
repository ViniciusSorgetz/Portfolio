import { tv } from "tailwind-variants";

export const sidebarTitle = tv({
  base: "font-bold",
  variants: {
    theme: {
      dark: "text-white",
      light: "text-black",
    },
  },
});

export const sidebarItem = tv({
  base: "text-sm/8",
  variants: {
    theme: {
      dark: "text-white/75",
      light: "text-black/75",
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
