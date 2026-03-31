import { Rows } from "@/app/languages/language";
import { ContentSubtitle } from "./content-subtitle";
import { ContentParagraph } from "./content-paragraph";
import { PreviewCode } from "./preview-code";

export function RenderRows({ rows }: { rows: Rows }) {
  return (
    <>
      {rows.map((row) => {
        switch (row.type) {
          case "subtitle":
            return <ContentSubtitle>{row.value}</ContentSubtitle>;
          case "paragraph":
            return <ContentParagraph paragraph={row.value}></ContentParagraph>;
          case "preview-code":
            if ("previewImg" in row.value) {
              return (
                <PreviewCode
                  code={row.value.code}
                  codeMode={row.value.codeMode}
                  preview={{
                    imgUrl: row.value.previewImg,
                    className: "",
                  }}
                ></PreviewCode>
              );
            } else {
              return (
                <PreviewCode
                  code={row.value.code}
                  codeMode={row.value.codeMode}
                  preview={row.value.previewText}
                ></PreviewCode>
              );
            }
          default:
            return null;
        }
      })}
    </>
  );
}
