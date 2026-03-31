"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { FinalItem, Item } from "../languages/language";
import { Replace } from "../utils/replace";

interface ActiveItem {
  groupIndex: number;
  item: FinalItem;
}

function getActiveItemFromUrl(
  groups: { items: FinalItem[] }[],
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

export function useActiveSidebarItem(groups: { items: FinalItem[] }[]) {
  const path = usePathname();

  const [activeItem, setActiveItem] = useState<ActiveItem | null>(() =>
    getActiveItemFromUrl(groups, path),
  );

  return { activeItem, setActiveItem };
}
