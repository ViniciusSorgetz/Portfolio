"use client";

import Image from "next/image";
import profilePicture from "@/public/images/icons/profile-home.svg";
import { tv } from "tailwind-variants";
import { useContext } from "react";
import { ThemeContext } from "./contexts/theme";
import { ContentParagraph } from "./components/ui/content-paragraph";
import externalLink from "@/public/images/icons/external-link.svg";
import arrowDown from "@/public/images/icons/arrow-down.svg";
import { ContentTitle } from "./components/ui/content-title";
import { twMerge } from "tailwind-merge";
import coffee from "@/public/images/pictures/coffee.png";
import puzzle from "@/public/images/pictures/puzzle.png";
import Link from "next/link";

const home = tv({
  slots: {
    base: "flex flex-col gap-25 items-center justify-center mt-30",
    hero: "flex flex-col justify-center items-center md:w-180 w-[90%] gap-10",
    row: "flex md:w-180 w-[90%] gap-20",
    paragraph: "text-lg text-center ",
  },
});

const h1 = tv({
  base: "font-black figtree text-5xl text-center mb-5",
  variants: {
    theme: {
      light: "text-black",
      dark: "text-white",
    },
  },
});

const button = tv({
  base: "font-semibold px-5 py-2 rounded-lg cursor-pointer pointer-events-auto transition-transform",
  variants: {
    style: {
      primary: "bg-galaxy text-white  flex flex-col gap-5",
      secondary: "bg-zinc-800 text-white/75 flex gap-2 border border-zinc-700",
    },
  },
});

const buttonOutline = tv({
  base: twMerge("border transition-colors", button()),
  variants: {
    theme: {
      dark: "border-white text-white",
      light: "border-black, text-black",
    },
  },
});

const image = tv({
  base: "w-60",
});

export default function Home() {
  const { theme } = useContext(ThemeContext);
  const { base, hero, row, paragraph } = home();

  return (
    <div className={base()}>
      <div className={hero()}>
        <Image src={profilePicture} alt="profile picture" />
        <div>
          <h1 className={h1({ theme })}>Vinícius Sorgetz</h1>
          <ContentParagraph
            paragraphs={[
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            ]}
            className={paragraph()}
          ></ContentParagraph>
          <div className="flex justify-center gap-5">
            <button className={button({ style: "primary" })}>
              Ver portfólio
            </button>
            <button className={button({ style: "secondary" })}>
              <span>Github</span>
              <Image
                src={externalLink}
                alt="github icon"
                className="scale-80 invert opacity-75"
              />
            </button>
          </div>
        </div>
      </div>
      <Image src={arrowDown} alt="arrow down" />
      <div className={row()}>
        <div className=" flex flex-col items-center ">
          <ContentTitle className="mb-5">Linguagens</ContentTitle>
          <ContentParagraph
            paragraphs={[
              "Já trabalhei com algumas linguagens em minha carreira, mas de longe meu foco atualmente está no uso de TypeScript.",
            ]}
            className={twMerge(paragraph(), "mb-5")}
          ></ContentParagraph>
          <Link href="/">
            <button className={buttonOutline({ theme })}>Ver linguagens</button>
          </Link>
        </div>
        <Image src={coffee} alt="coffee" className={image()} />
      </div>
      <Image src={arrowDown} alt="arrow down" />
      <div className={twMerge(row(), "mb-30")}>
        <Image src={puzzle} alt="puzzle" className={image()} />
        <div className=" flex flex-col items-center ">
          <ContentTitle className="mb-5">Linguagens</ContentTitle>
          <ContentParagraph
            paragraphs={[
              "Já trabalhei com algumas linguagens em minha carreira, mas de longe meu foco atualmente está no uso de TypeScript.",
            ]}
            className={twMerge(paragraph(), "mb-5")}
          ></ContentParagraph>
          <Link href="/">
            <button className={buttonOutline({ theme })}>Ver linguagens</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
