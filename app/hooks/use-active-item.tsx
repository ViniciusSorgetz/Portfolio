"use client";

import { usePathname } from "next/navigation";
import slugify from "slugify";
import { Item, pages } from "@/app/(pages)/portfolio/portfolio";
import { useContext, useEffect, useState } from "react";
import { TocContext } from "../contexts/toc";

function getActiveItemFromUrl(path: string): Item | null {
  const pathParts = path.split("/");
  const currentPath = pathParts[pathParts.length - 1];

  for (let groupIndex = 0; groupIndex < pages.length; groupIndex++) {
    const page = pages[groupIndex];
    for (const item of page.items) {
      if (slugify(item.title.en, { lower: true }) == currentPath) {
        return item;
      }
    }
  }
  return null;
}

export function useActiveItem() {
  const path = usePathname();
  const { updateSessions } = useContext(TocContext);

  const [activeItem, setActiveItem] = useState<Item | null>(() =>
    getActiveItemFromUrl(path),
  );

  useEffect(() => {
    if (activeItem) {
      updateSessions(activeItem.sessions);
    }
  }, [activeItem]);

  return { activeItem, setActiveItem, activeSessions: activeItem?.sessions };
}
