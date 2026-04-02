"use client";

import { useContext } from "react";
import { ThemeContext } from "@contexts/theme";
import logo from "@/public/images/icons/logo.svg";
import dark from "@/public/images/icons/dark.svg";
import light from "@/public/images/icons/light.svg";
import linkedin from "@/public/images/icons/linkedin.svg";
import Image from "next/image";
import Link from "next/link";
import { LanguageContext } from "@contexts/language";
import { ContainerFixed } from "@components/container-fixed";
import { useNavigate } from "@hooks/use-navigate";
import { navbar, navItem } from "./variants";
import { useTranslation } from "@/app/hooks/use-translation";

export default function Navbar() {
  const { theme, setTheme } = useContext(ThemeContext);
  const { language, switchLanguage } = useContext(LanguageContext);
  const { base, left, pages, menu } = navbar({ theme });

  function switchTheme() {
    setTheme(theme == "dark" ? "light" : "dark");
  }

  const { currentPage, setCurrentPage } = useNavigate();
  const { gt } = useTranslation();

  return (
    <ContainerFixed>
      <nav className={base()}>
        <div className={left()}>
          <Image src={logo} alt="logo"></Image>
          <div className={pages()}>
            {[
              { label: gt({ en: "Showcase", pt: "Apresentação" }), path: "/" },
              {
                label: gt({ en: "Portfolio", pt: "Portfólio" }),
                path: "/portfolio",
              },
              { label: gt({ en: "Contact", pt: "Contato" }), path: "/contact" },
            ].map((page, index) => (
              <Link
                key={index}
                href={page.path}
                className={navItem({ selected: index === currentPage })}
                onClick={() => setCurrentPage(index)}
              >
                {page.label}
              </Link>
            ))}
          </div>
        </div>
        <div className={menu()}>
          <span
            className={navItem({ className: "text-lg" })}
            onClick={switchLanguage}
          >
            {language.toUpperCase()}
          </span>
          <div className="w-5 h-5 relative">
            <Image
              src={theme == "dark" ? dark : light}
              alt="theme-icon"
              onClick={switchTheme}
              fill
              className={navItem({ theme, className: "object-cover" })}
            />
          </div>

          <Link
            href="https://www.linkedin.com/in/vinicius-sorgetz"
            target="_blank"
            className="flex justify-center w-fit"
          >
            <div className="w-5 h-5 relative">
              <Image
                src={linkedin}
                alt="LinkedIn"
                fill
                className={navItem({ theme, className: "object-cover" })}
              />
            </div>
          </Link>
        </div>
      </nav>
    </ContainerFixed>
  );
}
