"use client";

import Image, { StaticImageData } from "next/image";
import { useContext, useEffect, useState } from "react";
import { tv } from "tailwind-variants";
import { codeToHtml } from "shiki";
import { ThemeContext } from "@/app/contexts/theme";

const container = tv({
  base: "border-2 rounded-lg px-5 py-15 md:px-15  md:py-10 md:justify-normal flex justify-center items-center mb-10 bg-white/2",
  variants: {
    theme: {
      light: "border-black/15",
      dark: "border-white/15",
    },
  },
});

const image = tv({
  base: "md:max-w-60 w-[80%] rounded-xl",
});

const button = tv({
  base: "cursor-pointer pointer-events-auto  px-4 py-1 textmsm ",
  variants: {
    selected: {
      true: "bg-white/10 rounded-lg",
    },
  },
});

export function PreviewCode({
  img,
  code,
  codeMode,
}: {
  img: StaticImageData;
  code: string;
  codeMode?: boolean;
}) {
  const [previewMode, setPreviewMode] = useState(!codeMode);
  const [highlightedCode, setHighlightedCode] = useState<undefined | string>();

  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    async function highlightCode() {
      const html = await codeToHtml(code, {
        lang: "javascript",
        theme: theme == "dark" ? "min-dark" : "min-light",
      });
      setHighlightedCode(html);
    }

    highlightCode();
  }, [theme]);

  return (
    <div className="gap-5 flex flex-col">
      <div className="flex gap-4 ">
        <button
          className={button({ selected: previewMode })}
          onClick={() => setPreviewMode(true)}
        >
          Preview
        </button>
        <button
          className={button({ selected: !previewMode })}
          onClick={() => setPreviewMode(false)}
        >
          Code
        </button>
      </div>
      <div className={container({ theme: "dark" })}>
        {previewMode ? (
          <Image src={img} alt={img.src} className={image()} />
        ) : highlightedCode ? (
          <div
            dangerouslySetInnerHTML={{ __html: highlightedCode }}
            className="text-sm"
          />
        ) : (
          <pre>{code}</pre>
        )}
      </div>
    </div>
  );
}
