import { tv } from "tailwind-variants";
import Navbar from "./components/navbar";
import { useContext } from "react";
import {
  Sidebar,
  SidebarGroup,
  SidebarItem,
  SidebarLine,
  SidebarTitle,
} from "./components/sidebar";
import { ThemeContext } from "./contexts/theme";
import { ContentParagraph } from "./components/ui/content-paragraph";
import { LanguageContext } from "./contexts/language";
import { ContentTitle } from "./components/ui/content-title";

const app = tv({
  slots: {
    base: " flex justify-center min-h-screen transition-colors duration-150 text-white/75",
    layout: "fixed w-[95%] max-w-341.5",
    content:
      "w-[95%] mx-0 lg:mx-70 md:mx-15 md:ml-70 xl:w-200  mt-20 p-5 px-0 md:px-10",
    sidebars: "flex justify-between mt-5",
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
  const { text } = useContext(LanguageContext);
  const { base, content, layout, sidebars } = app({
    theme,
  });

  return (
    <div id="app" className={base()}>
      <div className={layout()}>
        <Navbar />
        <div className={sidebars()}>
          <Sidebar position="left">
            {text.sidebarLeft.groups.map((group, index) => (
              <SidebarGroup key={index}>
                <SidebarTitle>{group.title}</SidebarTitle>
                {group.items.map((item, itemIndex) => (
                  <SidebarItem key={itemIndex} item={item}>
                    {item}
                  </SidebarItem>
                ))}
                {index + 1 < text.sidebarLeft.groups.length && <SidebarLine />}
              </SidebarGroup>
            ))}
          </Sidebar>
          <Sidebar position="right">h</Sidebar>
        </div>
      </div>
      <main className={content()}>
        <ContentTitle>{text.aboutMe.aboutMe.title}</ContentTitle>
        <ContentParagraph paragraphs={text.aboutMe.aboutMe.paragraphs} />
      </main>
    </div>
  );
}
