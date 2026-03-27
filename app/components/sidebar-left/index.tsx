"use client";

import { useContext, useEffect } from "react";
import { LanguageContext } from "@contexts/language";
import { ThemeContext } from "@contexts/theme";
import Link from "next/link";
import { Sidebar } from "../sidebar";
import { sidebarItem, sidebarLine, sidebarTitle } from "./variants";
import { useActiveSidebarItem } from "@hooks/use-active-sidebar-item";
import { TocContext } from "@/app/contexts/toc";
import { SidebarItem } from "@/app/languages";

export function SidebarLeft() {
  const { theme } = useContext(ThemeContext);
  const { text } = useContext(LanguageContext);
  const { setSessions } = useContext(TocContext);
  const { activeItem, setActiveItem } = useActiveSidebarItem(
    text.sidebarLeft.groups,
  );
  const { setItemId } = useContext(TocContext);
  useEffect(() => {
    setSessions(activeItem?.item.sessions ?? []);
    setItemId(activeItem?.item.id ?? "");
  }, []);

  function changeItem(groupIndex: number, item: SidebarItem) {
    setActiveItem({ groupIndex, item });
    setSessions(item.sessions);
    setItemId(item.id);
  }

  return (
    <Sidebar position="left">
      {text.sidebarLeft.groups.map((group, index) => (
        <div key={index}>
          <div className={sidebarTitle({ theme })}>{group.title}</div>
          {group.items.map((item, itemIndex) => {
            const isActive =
              activeItem?.groupIndex === index &&
              activeItem?.item.path === item.path;

            return (
              <Link
                key={itemIndex}
                href={`/portfolio/${item.path}`}
                onClick={() => changeItem(index, item)}
              >
                <div className={sidebarItem({ theme, active: isActive })}>
                  {item.label}
                </div>
              </Link>
            );
          })}
          {index + 1 < text.sidebarLeft.groups.length && (
            <div className={sidebarLine({ theme })} />
          )}
        </div>
      ))}
    </Sidebar>
  );
}
