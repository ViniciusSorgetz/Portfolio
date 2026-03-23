"use client";

import { TocContext } from "@/app/contexts/toc";
import { useMotionValueEvent, useScroll } from "motion/react";
import { useContext, useRef } from "react";

interface TrackedSessionProps {
  isFirst?: boolean;
  isLast?: boolean;
  sessionId: number;
  title: string;
  children: React.ReactNode;
}

export function TrackedSession({
  isFirst = false,
  isLast = false,
  sessionId,
  title,
  children,
}: TrackedSessionProps) {
  const section = useRef(null);
  const { currentSession, setCurrentSession } = useContext(TocContext);

  const offsetStart = isFirst ? "start start" : "start center";
  const offsetEnd = isLast ? "end end" : "end center";

  const { scrollYProgress } = useScroll({
    target: section,
    offset: [offsetStart, offsetEnd],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest > 0 && latest < 1) {
      setCurrentSession(title);
      console.log(latest, title);
    }
  });

  return (
    <section ref={section} className="mb-20">
      {currentSession}
      {children}
    </section>
  );
}
