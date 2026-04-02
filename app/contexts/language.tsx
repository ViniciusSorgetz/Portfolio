"use client";

import React, { createContext, useContext, useState } from "react";
import { languageType } from "@utils/types/language";
import { TocContext } from "./toc";

interface LanguageContextType {
  language: languageType;
  switchLanguage: () => void;
}

export const LanguageContext = createContext({
  language: "en",
  switchLanguage: () => {},
} as LanguageContextType);

export function LanguageProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [language, setLanguage] = useState<languageType>("en");
  const { updateSessionsLanguage } = useContext(TocContext);

  function switchLanguage() {
    const newLanguage = language == "en" ? "pt" : "en";
    setLanguage(newLanguage);
    updateSessionsLanguage(newLanguage);
  }

  return (
    <LanguageContext value={{ language, switchLanguage }}>
      {children}
    </LanguageContext>
  );
}
