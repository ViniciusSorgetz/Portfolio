"use client";

import "./globals.css";
import { ThemeProvider } from "./contexts/theme";
import { LanguageProvider } from "./contexts/language";
import Navbar from "./components/navbar";
import { Container } from "./components/container";

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
          <LanguageProvider>
            <Container>
              <Navbar />
              {children}
            </Container>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
