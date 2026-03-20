"use client";

import React, { createContext, useState } from "react";
import { themeType } from "../utils/types/theme";

const defaultTheme: themeType = "dark";

interface ThemeContextType {
  theme: themeType;
  setTheme: React.Dispatch<React.SetStateAction<themeType>>;
}

export const ThemeContext = createContext({
  theme: defaultTheme,
  setTheme: () => {},
} as ThemeContextType);

export function ThemeProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [theme, setTheme] = useState<themeType>(defaultTheme);

  return <ThemeContext value={{ theme, setTheme }}>{children}</ThemeContext>;
}
