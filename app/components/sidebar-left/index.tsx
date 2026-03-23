import { useContext } from "react";
import { LanguageContext } from "@contexts/language";
import { ThemeContext } from "@contexts/theme";
import Link from "next/link";
import { Sidebar } from "../sidebar";
import {
  sidebarItem,
  sidebarLine,
  sidebarTitle,
} from "./variants";
import { useActiveSidebarItem } from "@hooks/use-active-sidebar-item";

export function SidebarLeft() {
  const { theme } = useContext(ThemeContext);
  const { text } = useContext(LanguageContext);
  const { activeItem, setActiveItem } = useActiveSidebarItem(text.sidebarLeft.groups);

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
                onClick={() => setActiveItem({ groupIndex: index, item })}
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
