"use client";

import { ThemeContext } from "@/app/contexts/theme";
import { useContext } from "react";
import { twMerge } from "tailwind-merge";
import { tv } from "tailwind-variants";

const paragraph = tv({
  base: "mb-10 transition-colors figtree",
  variants: {
    theme: {
      light: "text-black",
      dark: "text-white/75",
    },
  },
});

export function ContentParagraph({
  paragraphs,
  className,
}: {
  paragraphs: string[];
  className?: string;
}) {
  const { theme } = useContext(ThemeContext);

  return (
    <p className={twMerge(paragraph({ theme }), className)}>
      {paragraphs.map((paragraph, index) => (
        <span key={index}>{paragraph}</span>
      ))}
    </p>
  );
}
