import { ContentParagraph } from "@/app/components/ui/content-paragraph";
import { ContentTitle } from "@/app/components/ui/content-title";
import { TrackedSession } from "@/app/components/ui/tracked-session";

export default function TechnologiesPage() {
  return (
    <div>
      <TrackedSession sessionId={0} title="Session 1" isFirst={true}>
        <ContentTitle>Session 1</ContentTitle>
        <ContentParagraph
          paragraphs={[
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          ]}
        />
      </TrackedSession>

      <TrackedSession sessionId={1} title="Session 2">
        <ContentTitle>Session 2</ContentTitle>
        <ContentParagraph
          paragraphs={[
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          ]}
        />
      </TrackedSession>

      <TrackedSession sessionId={2} title="Session 3">
        <ContentTitle>Session 3</ContentTitle>
        <ContentParagraph
          paragraphs={[
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          ]}
        />
      </TrackedSession>

      <TrackedSession sessionId={3} title="Session 4">
        <ContentTitle>Session 4</ContentTitle>
        <ContentParagraph
          paragraphs={[
            "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          ]}
        />
      </TrackedSession>

      <TrackedSession sessionId={4} title="Session 5" isLast={true}>
        <ContentTitle>Session 5</ContentTitle>
        <ContentParagraph
          paragraphs={[
            "Curabitur pretium tincidunt lacus. Nulla gravida orci a odio, et dapibus turpis facilisis.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          ]}
        />
      </TrackedSession>
    </div>
  );
}
