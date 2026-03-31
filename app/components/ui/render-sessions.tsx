import { Session } from "@/app/languages/language";
import { TrackedSession } from "../toc/tracked-session";
import { RenderRows } from "./render-rows";

export function RenderSessions({ sessions }: { sessions: Session[] }) {
  return (
    <>
      {sessions.map((session, index) => (
        <TrackedSession
          key={session.title}
          sessionId={index}
          title={session.title}
          isFirst={index === 0}
          isLast={index === sessions.length - 1}
        >
          <RenderRows rows={session.rows} />
        </TrackedSession>
      ))}
    </>
  );
}
