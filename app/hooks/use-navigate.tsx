"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";

function getCurrentPageFromUrl(path: string): number {
  if (path.includes("portfolio")) {
    return 1;
  } else if (path.includes("contact")) {
    return 2;
  }
  return 0;
}

export function useNavigate() {
  const path = usePathname();

  const [currentPage, setCurrentPage] = useState<number>(() =>
    getCurrentPageFromUrl(path),
  );

  return { currentPage, setCurrentPage };
}
