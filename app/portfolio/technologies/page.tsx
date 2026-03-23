import { ContentParagraph } from "@/app/components/ui/content-paragraph";
import { ContentTitle } from "@/app/components/ui/content-title";
import { TrackedSession } from "@/app/components/toc/tracked-session";
import { useContext } from "react";
import { LanguageContext } from "@/app/contexts/language";

export default function TechnologiesPage() {
  const { text } = useContext(LanguageContext);

  return (
    <div>
      <TrackedSession sessionId={0} title="Session 1" isFirst={true}>
        <ContentParagraph
          paragraphs={[
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          ]}
        />
      </TrackedSession>
    </div>
  );
}
