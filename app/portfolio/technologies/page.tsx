"use client";

import { useContext } from "react";
import { LanguageContext } from "@/app/contexts/language";
import { RenderSessions } from "@/app/components/ui/render-sessions";
import { ContentTitle } from "@/app/components/ui/content-title";

export default function TechnologiesPage() {
  const { text } = useContext(LanguageContext);

  return (
    <div>
      <ContentTitle>{text.portfolioPages[0].items[1].title}</ContentTitle>
      <RenderSessions sessions={text.portfolioPages[0].items[1].sessions} />
    </div>
  );
}
