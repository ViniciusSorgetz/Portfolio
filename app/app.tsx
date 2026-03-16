import { tv } from "tailwind-variants";
import Navbar from "./components/navbar";
import { useContext } from "react";
import { ThemeContext } from "./contexts/theme";
import Sidebar from "./components/sidebar";

const app = tv({
  slots: {
    base: " flex justify-center min-h-screen transition-colors duration-150 text-white/75",
    layout: "fixed w-[95%] max-w-341.5",
    content: "w-100 mt-25",
    sidebars: "flex justify-between",
  },
  variants: {
    theme: {
      light: { base: "bg-white" },
      dark: { base: "bg-[#17181D]" },
    },
  },
});

export default function App() {
  const { theme } = useContext(ThemeContext);
  const { base, content, layout, sidebars } = app({
    theme,
  });

  return (
    <div id="app" className={base()}>
      <div className={layout()}>
        <Navbar />
        <div className={sidebars()}>
          <Sidebar className="left-0" />
          <Sidebar className="right-0" />
        </div>
      </div>
      <main className={content()}>
        <h1>Title</h1>
        <p>hello</p>
        <p>hello</p> {/* ... muitos hello ... */}
        <p>hello</p> {/* ... muitos hello ... */}
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
      </main>
    </div>
  );
}
