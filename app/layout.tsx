"use client";

import "./globals.css";
import { ThemeProvider } from "./contexts/theme";
import App from "./app";
import { LanguageProvider } from "./contexts/language";

export default function RootLayout() {
  return (
    <html lang="en">
      <head>
        <title>Vinícius Sorgetz - Portfólio</title>
      </head>
      <body>
        <ThemeProvider>
          <LanguageProvider>
            <App></App>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
