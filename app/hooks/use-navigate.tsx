"use client";

import { useEffect, useState } from "react";

export function useNavigate() {
  const [currentPage, setCurrentPage] = useState<number>(0);

  useEffect(() => {
    getCurrentPage();
  }, []);

  function getCurrentPage() {
    const url = window.location.href;
    if (url.includes("portfolio")) {
      setCurrentPage(1);
    } else if (url.includes("contact")) {
      setCurrentPage(2);
    }
  }

  return { currentPage, setCurrentPage };
}
