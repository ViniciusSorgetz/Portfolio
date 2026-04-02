import { languageType } from "./types/language";

interface text {
  en: string;
  pt: string;
}

export function gt(language: languageType, { en, pt }: text): string {
  switch (language) {
    case "en":
      return en;
    case "pt":
      return pt;
    default:
      return en;
  }
}
