"use client";

import { useContext, useEffect } from "react";
import { LanguageContext } from "@contexts/language";
import { ThemeContext } from "@contexts/theme";
import Link from "next/link";
import { Sidebar } from "../sidebar";
import { sidebarItem, sidebarLine, sidebarTitle } from "./variants";
import { useActiveSidebarItem } from "@hooks/use-active-sidebar-item";
import { TocContext } from "@/app/contexts/toc";
import { FinalItem, Item } from "@/app/languages/language";

export function SidebarLeft() {
  const { theme } = useContext(ThemeContext);
  const { text } = useContext(LanguageContext);
  const { setSessions } = useContext(TocContext);
  const { activeItem, setActiveItem } = useActiveSidebarItem(
    text.portfolioPages,
  );
  const { setItemId } = useContext(TocContext);
  useEffect(() => {
    const sessions = activeItem?.item.sessions ?? [];
    const mappedSessions = sessions.map((session) => session.title);
    setSessions(mappedSessions);
    setItemId(activeItem?.item.id ?? "");
  }, []);

  function changeItem(groupIndex: number, item: FinalItem) {
    setActiveItem({ groupIndex, item });
    const mappedSessions = item.sessions.map((session) => session.title);
    setSessions(mappedSessions);
    setItemId(item.id);
  }

  return (
    <Sidebar position="left">
      {text.portfolioPages.map((group, index) => (
        <div key={index}>
          <div className={sidebarTitle({ theme })}>{group.title}</div>
          {group.items.map((item, itemIndex) => {
            const isActive =
              activeItem?.groupIndex === index &&
              activeItem?.item.path === item.path;

            return (
              <Link
                key={item.id}
                href={`/portfolio/${item.path}`}
                onClick={() => changeItem(index, item)}
              >
                <div className={sidebarItem({ theme, active: isActive })}>
                  {item.title}
                </div>
              </Link>
            );
          })}
          {index + 1 < text.portfolioPages.length && (
            <div className={sidebarLine({ theme })} />
          )}
        </div>
      ))}
    </Sidebar>
  );
}
