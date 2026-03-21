import { tv } from "tailwind-variants";
import { ThemeContext } from "../contexts/theme";
import { LanguageContext } from "../contexts/language";
import { useContext } from "react";
import {
  Sidebar,
  SidebarGroup,
  SidebarItem,
  SidebarLine,
  SidebarTitle,
} from "../components/sidebar";

const sidebar = tv({
  base: "flex justify-between mt-5",

  variants: {
    theme: {
      light: { base: "bg-white" },
      dark: { base: "bg-zinc-950" },
    },
  },
});

export function PortfolioLayout() {
  const { theme } = useContext(ThemeContext);
  const { text } = useContext(LanguageContext);

  return (
    <div className={sidebar({ theme })}>
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
  );
}
