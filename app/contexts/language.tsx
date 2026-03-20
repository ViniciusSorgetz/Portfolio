"use client";

import React, { createContext, useState } from "react";
import { Text, en, pt } from "@languages/.";
import { languageType } from "@utils/types/language";

const deafultText: Text = en;

interface LanguageContextType {
  text: Text;
  switchLanguage: () => void;
}

export const LanguageContext = createContext({
  text: deafultText,
} as LanguageContextType);

export function LanguageProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [text, setText] = useState<Text>(deafultText);
  const [language, setLanguage] = useState<languageType>("en");

  function switchLanguage() {
    const newLanguage = language == "en" ? "pt" : "en";
    setLanguage(newLanguage);

    switch (newLanguage) {
      case "en":
        setText(en);
        break;
      case "pt":
        setText(pt);
        break;
      default:
        setText(deafultText);
        break;
    }
  }

  return (
    <LanguageContext value={{ text, switchLanguage }}>
      {children}
    </LanguageContext>
  );
}
