import { useContext } from "react";
import { ThemeContext } from "../contexts/theme";
import { tv } from "tailwind-variants";

const container = tv({
  base: "min-h-screen pointer-events-none transition-colors",
  variants: {
    theme: {
      light: "bg-white",
      dark: "bg-zinc-950",
    },
  },
});

export function Container({ children }: { children: React.ReactNode }) {
  const { theme } = useContext(ThemeContext);

  return <div className={container({ theme })}>{children}</div>;
}
