"use client";

import { TrackedSession } from "@/app/components/toc/tracked-session";
import { ContentParagraph } from "@/app/components/ui/content-paragraph";
import { ContentSubtitle } from "@/app/components/ui/content-subtitle";
import { ContentTitle } from "@/app/components/ui/content-title";
import { PreviewCode } from "@/app/components/ui/preview-code";
import { LanguageContext } from "@/app/contexts/language";
import { useTranslation } from "@/app/hooks/use-translation";
import { useContext } from "react";
import { pages } from "../portfolio";

export default function TechnologiesPage() {
  const { gt } = useTranslation();
  const { language } = useContext(LanguageContext);

  const sessions = pages[0].items[1].sessions;
  let sessionId = 0;

  return (
    <div>
      <ContentTitle>
        {gt({ en: "Technologies", pt: "Tecnologias", emoji: "🚀" })}
      </ContentTitle>
      <TrackedSession
        title={sessions[0].title[language]}
        sessionId={sessionId++}
        isFirst={true}
      >
        <ContentSubtitle>
          {gt({ en: "Languages", pt: "Linguagens", emoji: "🔷" })}
        </ContentSubtitle>
        <ContentParagraph
          paragraph={gt({
            en: "I've worked with some languages in my carrear, but by far my focus currently is on Typescript, for both the frontend and the backend ",
            pt: "Já trabalhei com algumas linguagens em minha carreira, mas de longe meu foco atualmente está no uso de TypeScript, tanto para o frontend quanto backend.",
          })}
        />
        <PreviewCode
          preview={{
            url: "https://skillicons.dev/icons?i=ts,js",
            alt: "TypeScript and JavaScript logos",
            width: 100,
            height: 20,
          }}
          code={""}
        />
      </TrackedSession>
      <TrackedSession
        title={sessions[1].title[language]}
        sessionId={sessionId++}
      >
        <ContentSubtitle>Backend 💻</ContentSubtitle>
        <ContentParagraph
          paragraph={gt({
            en: "I've worked with some languages in my carrear, but by far my focus currently is on Typescript, for both the frontend and the backend ",
            pt: "Já trabalhei com algumas linguagens em minha carreira, mas de longe meu foco atualmente está no uso de TypeScript, tanto para o frontend quanto backend.",
          })}
        />
        <PreviewCode
          preview={{
            url: "https://skillicons.dev/icons?i=ts,js",
            alt: "TypeScript and JavaScript logos",
            width: 100,
            height: 20,
          }}
          code={""}
        />
      </TrackedSession>
    </div>
  );
}
