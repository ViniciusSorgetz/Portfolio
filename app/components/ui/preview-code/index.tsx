"use client";

import Image from "next/image";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { ContentParagraph } from "../content-paragraph";
import { useHighlighter } from "@/app/hooks/use-highlighter";
import { button, container, image } from "./variants";

interface PreviewImage {
  url: string;
  alt: string;
  width: number;
  height: number;
}

interface PreviewText {
  text: string;
}

type PreviewCodeProps = {
  preview: PreviewText | PreviewImage;
  code: string;
  codeMode?: boolean;
};

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
          "text" in preview ? (
            <ContentParagraph paragraph={preview.text}></ContentParagraph>
          ) : (
            <Image
              src={preview.url}
              alt={preview.alt}
              width={preview.width}
              height={preview.height}
              unoptimized={true}
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
