"use client";

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
import { ContainerFixed } from "../components/container-fixed";

const sidebars = tv({
  base: "flex justify-between mt-20 pointer-events-none",

  variants: {
    theme: {
      light: { base: "bg-white" },
      dark: { base: "bg-zinc-950" },
    },
  },
});

const content = tv({
  slots: {
    base: "w-[95%] max-w-screen mx-0 lg:mx-70 md:mx-15 md:ml-70 xl:w-200  mt-20 p-5 px-0 md:px-10",
    container:
      "flex justify-center min-h-screen transition-colors duration-150 text-white/75",
  },
});

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { theme } = useContext(ThemeContext);
  const { text } = useContext(LanguageContext);

  const { base, container } = content();

  return (
    <div>
      <ContainerFixed>
        <div className={sidebars({ theme })}>
          <Sidebar position="left">
            {text.sidebarLeft.groups.map((group, index) => (
              <SidebarGroup key={index}>
                <SidebarTitle>{group.title}</SidebarTitle>
                {group.items.map((item, itemIndex) => (
                  <SidebarItem key={itemIndex} item={item} />
                ))}
                {index + 1 < text.sidebarLeft.groups.length && <SidebarLine />}
              </SidebarGroup>
            ))}
          </Sidebar>
          <Sidebar position="right">h</Sidebar>
        </div>
      </ContainerFixed>
      <div className={container()}>
        <div className={base()}>{children}</div>
      </div>
    </div>
  );
}
