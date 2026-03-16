import { tv } from "tailwind-variants";
import Navbar from "./components/navbar";
import { useContext } from "react";
import { ThemeContext } from "./contexts/theme";
import Sidebar from "./components/sidebar";

const app = tv({
  slots: {
    base: " flex justify-center min-h-screen transition-colors duration-150 text-white/75",
    layout: "fixed w-[95%] max-w-341.5",
    content:
      "w-[95%] mx-0 lg:mx-70 md:mx-15 md:ml-70 xl:w-200  mt-15 p-5 px-0 md:px-10",
    sidebars: "flex justify-between",
  },
  variants: {
    theme: {
      light: { base: "bg-white" },
      dark: { base: "bg-zinc-950" },
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
          <Sidebar position="left" />
          <Sidebar position="right" />
        </div>
      </div>
      <main className={content()}>
        <h1>Title</h1>
        <p>
          Next.js is a React framework for building full-stack web applications.
          You use React Components to build user interfaces, and Next.js for
          additional features and optimizations. It also automatically
          configures lower-level tools like bundlers and compilers. You can
          instead focus on building your product and shipping quickly. Whether
          youre an individual developer or part of a larger team, Next.js can
          help you build interactive, dynamic, and fast React applications.
        </p>
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
