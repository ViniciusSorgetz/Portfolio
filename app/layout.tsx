"use client";

import "./globals.css";
import { ThemeProvider } from "./contexts/theme";
import App from "./app";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Vinícius Sorgetz - Portfólio</title>
      </head>
      <body>
        <ThemeProvider>
          <App>{children}</App>
        </ThemeProvider>
      </body>
    </html>
  );
}
