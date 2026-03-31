"use client";

import { ThemeContext } from "@/app/contexts/theme";
import { useContext } from "react";
import { twMerge } from "tailwind-merge";
import { tv } from "tailwind-variants";

const p = tv({
  base: "mb-10 transition-colors figtree",
  variants: {
    theme: {
      light: "text-black",
      dark: "text-white/75",
    },
  },
});

export function ContentParagraph({
  paragraph,
  className,
}: {
  paragraph: string;
  className?: string;
}) {
  const { theme } = useContext(ThemeContext);

  return <p className={twMerge(p({ theme }), className)}>{paragraph}</p>;
}
