"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";

type SidebarItem = {
  title: string;
  path: string;
  id: string;
  sessions: { title: string; rows: unknown[] }[];
};

type Group = {
  title: string;
  items: SidebarItem[];
};

interface ActiveItem {
  groupIndex: number;
  item: SidebarItem;
}

function getActiveItemFromUrl(
  groups: { items: SidebarItem[] }[],
  path: string,
): ActiveItem | null {
  const pathParts = path.split("/");
  const currentPath = pathParts[pathParts.length - 1];

  for (let groupIndex = 0; groupIndex < groups.length; groupIndex++) {
    const group = groups[groupIndex];
    for (const item of group.items) {
      if (item.path === currentPath) {
        return { groupIndex, item };
      }
    }
  }
  return null;
}

export function useActiveSidebarItem(groups: Group[]) {
  const path = usePathname();

  const [activeItem, setActiveItem] = useState<ActiveItem | null>(() =>
    getActiveItemFromUrl(groups, path),
  );

  return { activeItem, setActiveItem };
}
