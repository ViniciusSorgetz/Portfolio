import { tv } from "tailwind-variants";

const paragraph = tv({
  base: "mb-10",
});

export function ContentParagraph({ paragraphs }: { paragraphs: string[] }) {
  return (
    <p className={paragraph()}>
      {paragraphs.map((paragraph, index) => (
        <span key={index}>{paragraph}</span>
      ))}
    </p>
  );
}
