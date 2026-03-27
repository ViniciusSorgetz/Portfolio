"use client";

import "./globals.css";
import { ThemeProvider } from "./contexts/theme";
import { LanguageProvider } from "./contexts/language";
import Navbar from "./components/navbar";
import { Container } from "./components/container";
import { TocContextProvider } from "./contexts/toc";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Vinícius Sorgetz - Portfólio</title>
      </head>
      <body>
        <ThemeProvider>
          <TocContextProvider>
            <LanguageProvider>
              <Container>
                <Navbar />
                {children}
              </Container>
            </LanguageProvider>
          </TocContextProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
