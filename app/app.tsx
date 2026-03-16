import { tv } from "tailwind-variants";
import Navbar from "./components/navbar";
import { useContext } from "react";
import { ThemeContext } from "./contexts/theme";
import Sidebar from "./components/sidebar";

const app = tv({
  slots: {
    base: "w-screen min-h-screen transition-colors duration-150 text-white/75",
    wrapper: "w-341.5 mx-auto px-16",
    layout: "flex gap-6",
    sidebarLeft:
      "sticky top-17 h-[calc(100vh-5rem)] overflow-y-auto w-64 shrink-0",
    content: "flex-1 min-w-0",
    sidebarRight:
      "sticky top-17 h-[calc(100vh-5rem)] overflow-y-auto w-64 shrink-0",
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
  const { base, wrapper, layout, sidebarLeft, content, sidebarRight } = app({
    theme,
  });

  return (
    <div id="app" className={base()}>
      <Navbar />
      <div className={wrapper()}>
        <div className={layout()}>
          <aside className={sidebarLeft()}>
            <Sidebar />
          </aside>

          <main className={content()}>
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

          <aside className={sidebarRight()}>
            <Sidebar />
          </aside>
        </div>
      </div>
    </div>
  );
}
