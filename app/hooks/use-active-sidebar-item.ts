"use client";

import { useState } from "react";
import { SidebarItem } from "@languages/text";
import { usePathname } from "next/navigation";

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

export function useActiveSidebarItem(groups: { items: SidebarItem[] }[]) {
  const path = usePathname();

  const [activeItem, setActiveItem] = useState<ActiveItem | null>(() =>
    getActiveItemFromUrl(groups, path),
  );

  return { activeItem, setActiveItem };
}
