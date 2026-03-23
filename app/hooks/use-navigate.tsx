"use client";

import { useState } from "react";

function getCurrentPageFromUrl(): number {
  const url = window.location.href;
  if (url.includes("portfolio")) {
    return 1;
  } else if (url.includes("contact")) {
    return 2;
  }
  return 0;
}

export function useNavigate() {
  const [currentPage, setCurrentPage] = useState<number>(() =>
    getCurrentPageFromUrl()
  );

  return { currentPage, setCurrentPage };
}
