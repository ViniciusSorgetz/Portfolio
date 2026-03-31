"use client";

import React, { createContext, useState } from "react";
import { Language } from "../languages";

interface TocContextType {
  currentSession: string;
  setCurrentSession: React.Dispatch<React.SetStateAction<string>>;
  sessions: string[];
  setSessions: React.Dispatch<React.SetStateAction<string[]>>;
  itemId: string;
  setItemId: React.Dispatch<React.SetStateAction<string>>;
  updateSessions: (language: Language) => void;
}

export const TocContext = createContext<TocContextType>({
  currentSession: "Session 1",
  setCurrentSession: () => {},
  sessions: [],
  setSessions: () => {},
  itemId: "",
  setItemId: () => {},
  updateSessions: (en) => {},
});

export function TocContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [currentSession, setCurrentSession] = useState("Session 1");
  const [sessions, setSessions] = useState([
    "Session 1",
    "Session 2",
    "Session 3",
    "Session 4",
    "Session 5",
  ]);
  const [itemId, setItemId] = useState("");

  function updateSessions(language: Language) {
    const indexes = itemId.split("-");
    const groupIndex = parseInt(indexes[0]);
    const itemIndex = parseInt(indexes[1]);
    const item = language.portfolioPages[groupIndex].items[itemIndex];
    const mappedSessions = item.sessions.map((session) => session.title);
    setSessions(mappedSessions);
  }

  return (
    <TocContext.Provider
      value={{
        setCurrentSession,
        currentSession,
        sessions,
        setSessions,
        itemId,
        setItemId,
        updateSessions,
      }}
    >
      {children}
    </TocContext.Provider>
  );
}
