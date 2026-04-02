"use client";

import { useContext } from "react";
import { LanguageContext } from "@/app/contexts/language";
import { RenderSessions } from "@/app/components/ui/render-sessions";
import { ContentTitle } from "@/app/components/ui/content-title";

export default function TechnologiesPage() {
  const { text } = useContext(LanguageContext);

  return (
    <div>
<<<<<<< HEAD
      <ContentTitle>{text.portfolioPages[0].items[1].title}</ContentTitle>
      <RenderSessions sessions={text.portfolioPages[0].items[1].sessions} />
=======
      <ContentTitle>Titulo</ContentTitle>
      <TrackedSession sessionId={0} title="Session 1" isFirst={true}>
        <ContentParagraph
          paragraphs={[
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          ]}
        />
      </TrackedSession>
>>>>>>> c086e2c61590d1e50b306f20e795bd14b28ce89f
    </div>
  );
}
