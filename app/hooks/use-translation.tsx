"use client";

import { useContext } from "react";
import { LanguageContext } from "../contexts/language";
import { Text } from "../utils/types/text";
import { Replace } from "../utils/replace";

export function useTranslation() {
  const { language } = useContext(LanguageContext);

  function gt({ en, pt, emoji }: Replace<Text, { emoji?: string }>): string {
    let result = "";

    switch (language) {
      case "en":
        result += en;
        break;
      case "pt":
        result += pt;
        break;
      default:
        result += en;
    }

    return emoji ? `${result} ${emoji}` : result;
  }

  return { gt };
}
