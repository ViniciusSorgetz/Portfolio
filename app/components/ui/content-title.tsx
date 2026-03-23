"use client";

import { ThemeContext } from "@contexts/theme";
import { useContext } from "react";
import { twMerge } from "tailwind-merge";
import { tv } from "tailwind-variants";

const title = tv({
  base: "text-3xl mb-10 font-black figtree transition-colors",
  variants: {
    theme: {
      light: "text-black",
      dark: " text-white",
    },
  },
});

export function ContentTitle({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const { theme } = useContext(ThemeContext);

  return <h2 className={twMerge(title({ theme }), className)}>{children}</h2>;
}
