"use client";

import { useContext } from "react";
import { LanguageContext } from "../contexts/language";
import { Text } from "../utils/types/text";

export function useTranslation() {
  const { language } = useContext(LanguageContext);

  function gt({ en, pt }: Text): string {
    switch (language) {
      case "en":
        return en;
      case "pt":
        return pt;
      default:
        return en;
    }
  }

  return { gt };
}
