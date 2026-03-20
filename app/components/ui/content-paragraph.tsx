export function ContentParagraph({ paragraphs }: { paragraphs: string[] }) {
  return (
    <p>
      {paragraphs.map((paragraph, index) => (
        <span key={index}>{paragraph}</span>
      ))}
    </p>
  );
}
