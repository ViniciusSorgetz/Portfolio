"use client";

import { useState } from "react";
import { SidebarItem } from "@languages/text";

interface ActiveItem {
  groupIndex: number;
  item: SidebarItem;
}

function getActiveItemFromUrl(
  groups: { items: SidebarItem[] }[]
): ActiveItem | null {
  const url = window.location.href;
  const pathParts = url.split("/");
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
  const [activeItem, setActiveItem] = useState<ActiveItem | null>(() =>
    getActiveItemFromUrl(groups)
  );

  return { activeItem, setActiveItem };
}
