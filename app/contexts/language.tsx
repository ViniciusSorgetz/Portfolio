"use client";

import React, { createContext, useContext, useState } from "react";
import { Text, en, pt } from "@languages/.";
import { languageType } from "@utils/types/language";
import { TocContext } from "./toc";

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
  const { updateSessions } = useContext(TocContext);

  function switchLanguage() {
    const newLanguage = language == "en" ? "pt" : "en";
    setLanguage(newLanguage);

    let newText: Text;

    switch (newLanguage) {
      case "en":
        newText = en;
        break;
      case "pt":
        newText = pt;
        break;
      default:
        newText = deafultText;
        break;
    }

    setText(newText);
    updateSessions(newText);
  }

  return (
    <LanguageContext value={{ text, switchLanguage }}>
      {children}
    </LanguageContext>
  );
}
