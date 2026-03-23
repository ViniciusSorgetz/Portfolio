"use client";

import { useEffect, useState } from "react";
import { SidebarItem } from "@languages/text";

interface ActiveItem {
  groupIndex: number;
  item: SidebarItem;
}

export function useActiveSidebarItem(groups: { items: SidebarItem[] }[]) {
  const [activeItem, setActiveItem] = useState<ActiveItem | null>(null);

  useEffect(() => {
    updateActiveItem();
  }, []);

  function updateActiveItem() {
    const url = window.location.href;
    const pathParts = url.split("/");
    const currentPath = pathParts[pathParts.length - 1];

    for (let groupIndex = 0; groupIndex < groups.length; groupIndex++) {
      const group = groups[groupIndex];
      for (const item of group.items) {
        if (item.path === currentPath) {
          setActiveItem({ groupIndex, item });
          return;
        }
      }
    }
  }

  return { activeItem, setActiveItem };
}
