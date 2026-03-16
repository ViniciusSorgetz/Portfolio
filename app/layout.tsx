"use client";

import "./globals.css";
import { ThemeProvider } from "./contexts/theme";
import App from "./app";

export default function RootLayout() {
  return (
    <html lang="en">
      <head>
        <title>Vinícius Sorgetz - Portfólio</title>
      </head>
      <body className="overflow-x-hidden">
        <ThemeProvider>
          <App></App>
        </ThemeProvider>
      </body>
    </html>
  );
}
