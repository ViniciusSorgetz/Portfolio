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

export function SidebarLeft() {
  const { theme } = useContext(ThemeContext);
  const { text } = useContext(LanguageContext);

  return (
    <Sidebar position="left">
      {text.sidebarLeft.groups.map((group, index) => (
        <div key={index}>
          <div className={sidebarTitle({ theme })}>{group.title}</div>
          {group.items.map((item, itemIndex) => (
            <Link key={itemIndex} href={`/portfolio/${item.path}`}>
              <div className={sidebarItem({ theme })}>{item.label}</div>
            </Link>
          ))}
          {index + 1 < text.sidebarLeft.groups.length && (
            <div className={sidebarLine({ theme })} />
          )}
        </div>
      ))}
    </Sidebar>
  );
}
