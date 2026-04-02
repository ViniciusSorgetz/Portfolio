"use client";

import { ContentParagraph } from "@/app/components/ui/content-paragraph";
import { ContentTitle } from "@/app/components/ui/content-title";
import { useTranslation } from "@/app/hooks/use-translation";

export default function TechnologiesPage() {
  const { gt } = useTranslation();

  return (
    <div>
      <ContentTitle>
        {gt({ en: "Technologies", pt: "Tecnologias" })}
      </ContentTitle>
      <ContentParagraph
        paragraph={gt({ en: "hello world!", pt: "olá mundo!" })}
      />
    </div>
  );
}
