"use client";

import { useContext } from "react";
import { LanguageContext } from "@contexts/language";
import { ThemeContext } from "@contexts/theme";
import Link from "next/link";
import { Sidebar } from "../sidebar";
import { sidebarItem, sidebarLine, sidebarTitle } from "./variants";
import { Item, pages } from "@/app/(pages)/portfolio/portfolio";
import slugify from "slugify";
import { TocContext } from "@/app/contexts/toc";
import { useActiveItem } from "@/app/hooks/use-active-item";

export function SidebarLeft() {
  const { theme } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);
  const { updateSessions } = useContext(TocContext);
  const { activeItem, setActiveItem } = useActiveItem();

  function changeItem(item: Item) {
    updateSessions(item.sessions);
    setActiveItem(item);
  }

  return (
    <Sidebar position="left">
      {pages.map((group, index) => (
        <div key={index}>
          <div className={sidebarTitle({ theme })}>{group.title[language]}</div>
          {group.items.map((item, itemIndex) => {
            return (
              <Link
                key={itemIndex}
                href={`/portfolio/${slugify(item.title[language], { lower: true })}`}
                onClick={() => changeItem(item)}
              >
                <div
                  className={sidebarItem({
                    theme,
                    active: item === activeItem,
                  })}
                >
                  {item.title[language]}
                </div>
              </Link>
            );
          })}
          {index + 1 < pages.length && (
            <div className={sidebarLine({ theme })} />
          )}
        </div>
      ))}
    </Sidebar>
  );
}
