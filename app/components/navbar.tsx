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

const nav = tv({
  base: "py-3 px-16 text-sm font-figree  border-b-2 flex items-center justify-center transition-colors duration-150",
  variants: {
    theme: {
      light: "bg-white text-black/75 border-black/15",
      dark: "bg-[#17181D] text-white/75 border-white/15",
    },
  },
});

const navItem = tv({
  base: "hover:cursor-pointer transition-transform duration-150 active:scale-80",
  variants: {
    selected: {
      true: "font-bold text-galaxy",
    },
  },
});

export default function Navbar() {
  const { theme, setTheme } = useContext(ThemeContext);

  function switchTheme() {
    setTheme(theme == "dark" ? "light" : "dark");
  }

  return (
    <nav className={nav({ theme })}>
      <div className=" flex w-[1280]">
        <div className=" flex items-center gap-x-15 w-full h-full">
          <Image src={logo} alt="logo"></Image>
          <div className="flex gap-x-10">
            <span className={navItem()}>Apresentação</span>
            <span className={navItem({ selected: true })}>Portfólio</span>
            <span className={navItem()}>Contato</span>
          </div>
        </div>
        <div className="flex gap-x-8">
          <Image
            src={theme == "dark" ? dark : light}
            alt="theme-icon"
            onClick={switchTheme}
            className={navItem()}
          ></Image>
          <Link
            href="https://www.linkedin.com/in/vinicius-sorgetz"
            target="_blank"
            className="flex justify-center "
          >
            <Image
              src={linkedin}
              alt="theme-icon"
              className={`${navItem()} scale-125`}
            ></Image>
          </Link>
        </div>
      </div>
    </nav>
  );
}
