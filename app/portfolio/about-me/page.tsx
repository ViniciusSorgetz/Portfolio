import profile from "@/public/profile.png";
import { PreviewCode } from "@/app/components/ui/preview-code";
import { ContentTitle } from "@/app/components/ui/content-title";
import { ContentParagraph } from "@/app/components/ui/content-paragraph";

export default function AboutMePage() {
  return (
    <div>
      <ContentTitle>Sobre mim</ContentTitle>
      <ContentParagraph
        paragraphs={[
          "Me chamo Vinícius, tenho 20 anos e sou um desenvolvedor full stack atualmente procurando oportunidades na área de tecnologia. Fui aluno de informática na Escola Técnica Monteiro Lobato, em Taquara. Atualmente aprimoro meus conhecimentos através do curso.dev e com projetos pessoais.",
        ]}
      ></ContentParagraph>
      <PreviewCode img={profile} code='console.log("hello world")' />
      <ContentParagraph
        paragraphs={[
          "Me chamo Vinícius, tenho 20 anos e sou um desenvolvedor full stack atualmente procurando oportunidades na área de tecnologia. Fui aluno de informática na Escola Técnica Monteiro Lobato, em Taquara. Atualmente aprimoro meus conhecimentos através do curso.dev e com projetos pessoais.",
        ]}
      ></ContentParagraph>
    </div>
  );
}
