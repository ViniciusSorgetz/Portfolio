import { ThemeContext } from "@/app/contexts/theme";
import { TocContext } from "@/app/contexts/toc";
import { useContext } from "react";
import { tv } from "tailwind-variants";

const tocElement = tv({
  base: "text-sm figtree transition-all",
  variants: {
    theme: {
      light: "text-black opacity-50 flex",
      dark: "text-white opacity-50",
    },
    currentSection: {
      true: "font-semibold opacity-100 border-l-2 pl-2 ",
    },
  },
});

export function TocElement({ label }: { label: string }) {
  const { theme } = useContext(ThemeContext);
  const { currentSession } = useContext(TocContext);

  return (
    <li className="pb-5">
      <span
        className={tocElement({
          theme,
          currentSection: label === currentSession,
        })}
      >
        {label}
      </span>
    </li>
  );
}
