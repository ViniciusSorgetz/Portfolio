import { tv } from "tailwind-variants";

export const container = tv({
  base: "border-2 rounded-lg px-5 py-15 md:px-15  md:py-10 md:justify-normal flex justify-center items-center mb-10 bg-white/2",
  variants: {
    theme: {
      light: "border-black/15",
      dark: "border-white/15",
    },
  },
});

export const image = tv({
  base: " w-[80%] rounded-xl",
});

export const button = tv({
  base: "cursor-pointer pointer-events-auto  px-4 py-1 textmsm ",
  variants: {
    selected: {
      true: "bg-white/10 rounded-lg",
    },
  },
});
