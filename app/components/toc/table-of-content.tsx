"use client";

import { tv } from "tailwind-variants";
import { TocElement } from "./toc-element";
import { useContext } from "react";
import { ThemeContext } from "@/app/contexts/theme";
import { TocContext } from "@/app/contexts/toc";

const tableOfContent = tv({
  base: "text-base font-semibold border-b-2 w-[80%] pb-2",
  variants: {
    theme: {
      light: "text-black opacity-50 border-black/50",
      dark: "text-white opacity-50  border-white/50",
    },
  },
});

export function TableOfContent() {
  const { theme } = useContext(ThemeContext);
  const { sessions } = useContext(TocContext);

  return (
    <div className="flex flex-col gap-5">
      <span className={tableOfContent({ theme })}>On this page</span>
      <ul>
        {sessions.map((item) => (
          <TocElement key={item} label={item} />
        ))}
      </ul>
    </div>
  );
}
