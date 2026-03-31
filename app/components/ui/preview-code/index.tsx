"use client";

import Image from "next/image";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { ContentParagraph } from "../content-paragraph";
import { useHighlighter } from "@/app/hooks/use-highlighter";
import { button, container, image } from "./variants";
import { pre } from "motion/react-m";

interface PreviewCodeProps {
  preview:
    | {
        imgUrl: string;
        className?: string;
      }
    | string;
  code: string;
  codeMode?: boolean;
}

export function PreviewCode({ preview, code, codeMode }: PreviewCodeProps) {
  const [previewMode, setPreviewMode] = useState(!codeMode);
  const highlightedCode = useHighlighter(code);

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
          typeof preview === "string" ? (
            <ContentParagraph paragraph={preview}></ContentParagraph>
          ) : (
            <Image
              src={preview.imgUrl}
              alt={preview.imgUrl}
              width={20}
              height={20}
              className={twMerge(image(), preview.className)}
            />
          )
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
