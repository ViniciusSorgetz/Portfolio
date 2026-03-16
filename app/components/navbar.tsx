"use client";

import { useContext } from "react";
import { tv } from "tailwind-variants";
import { ThemeContext } from "../contexts/theme";
import logo from "@/public/logo.svg";
import dark from "@/public/dark.svg";
import light from "@/public/light.svg";
import linkedin from "@/public/linkedin.svg";
import Image from "next/image";
import Link from "next/link";

const navbar = tv({
  slots: {
    base: "py-3 px-2 md:px:10 text-sm font-figree flex items-center justify-center z-5",
    left: "flex items-center gap-x-15 w-full h-ful",
    pages: " gap-x-10 hidden md:flex",
    menu: "flex gap-x-5 items-center",
  },
  variants: {
    theme: {
      light: {
        base: "bg-white text-black/75",
      },
      dark: {
        base: "bg-zinc-950 text-white/75",
      },
    },
  },
});

const navItem = tv({
  base: "hover:cursor-pointer transition-transform duration-150 active:scale-80",
  variants: {
    selected: {
      true: "font-bold text-galaxy",
    },
    theme: {
      dark: "",
      light: "invert-75",
    },
  },
});

export default function Navbar() {
  const { theme, setTheme } = useContext(ThemeContext);
  const { base, left, pages, menu } = navbar({ theme });

  function switchTheme() {
    setTheme(theme == "dark" ? "light" : "dark");
  }

  return (
    <nav className={base()}>
      <div className={left()}>
        <Image src={logo} alt="logo"></Image>
        <div className={pages()}>
          <span className={navItem()}>Apresentação</span>
          <span className={navItem({ selected: true })}>Portfólio</span>
          <span className={navItem()}>Contato</span>
        </div>
      </div>
      <div className={menu()}>
        <span className={navItem({ className: "text-lg" })}>EN</span>
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
  );
}
