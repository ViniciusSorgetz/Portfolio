import { tv } from "tailwind-variants";
import Navbar from "./components/navbar";
import { useContext } from "react";
import { ThemeContext } from "./contexts/theme";

const app = tv({
  base: "w-lvw h-lvh transition-colors duration-150",
  variants: {
    theme: {
      light: "bg-white",
      dark: "bg-[#17181D]",
    },
  },
});

export default function App({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { theme } = useContext(ThemeContext);

  return (
    <div id="app" className={app({ theme })}>
      <Navbar />
      <main>{children}</main>
    </div>
  );
}
