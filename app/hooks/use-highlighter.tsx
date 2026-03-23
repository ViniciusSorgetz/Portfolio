"use client";

import { useContext, useEffect, useState } from "react";
import { codeToHtml } from "shiki";
import { ThemeContext } from "../contexts/theme";

export function useHighlighter(code: string) {
  const [highlightedCode, setHighlightedCode] = useState<undefined | string>();
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    async function highlightCode() {
      const html = await codeToHtml(code, {
        lang: "javascript",
        theme: theme == "dark" ? "min-dark" : "min-light",
      });
      setHighlightedCode(html);
    }

    highlightCode();
  }, [theme, code]);

  return highlightedCode;
}
