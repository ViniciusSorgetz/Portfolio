"use client";

import { ThemeContext } from "@contexts/theme";
import { useContext } from "react";
import { twMerge } from "tailwind-merge";
import { tv } from "tailwind-variants";

const subTitle = tv({
  base: "mb-10 font-semibold figtree transition-colors",
  variants: {
    theme: {
      light: "text-black",
      dark: " text-white",
    },
  },
});

export function ContentSubtitle({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const { theme } = useContext(ThemeContext);

  return (
    <h2 className={twMerge(subTitle({ theme }), className)}>{children}</h2>
  );
}
