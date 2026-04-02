"use client";

import { tv } from "tailwind-variants";
import { ThemeContext } from "@contexts/theme";
import { useContext } from "react";
import { SidebarLeft } from "@components/sidebar-left";
import { ContainerFixed } from "@components/container-fixed";
import { SidebarRight } from "@components/sidebar-right";

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

  const { base, container } = content();

  return (
    <div>
      <ContainerFixed>
        <div className={sidebars({ theme })}>
          <SidebarLeft />
          <SidebarRight />
        </div>
      </ContainerFixed>
      <div className={container()}>
        <div className={base()}>{children}</div>
      </div>
    </div>
  );
}
