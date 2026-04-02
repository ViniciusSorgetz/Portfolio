"use client";

import React, { createContext, useContext, useState } from "react";
import { LanguageContext } from "./language";
import { Session } from "./navigation/pages";
import { languageType } from "../utils/types/language";

interface TocContextType {
  currentSession: string;
  setCurrentSession: React.Dispatch<React.SetStateAction<string>>;
  sessions: string[];
  setSessions: React.Dispatch<React.SetStateAction<string[]>>;
  itemId: string;
  setItemId: React.Dispatch<React.SetStateAction<string>>;
  updateSessions: (sessions: Session[]) => void;
  updateSessionsLanguage: (language: languageType) => void;
}

export const TocContext = createContext<TocContextType>({
  currentSession: "",
  setCurrentSession: () => {},
  sessions: [],
  setSessions: () => {},
  itemId: "",
  setItemId: () => {},
  updateSessions: () => {},
  updateSessionsLanguage: () => {},
});

export function TocContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [currentSession, setCurrentSession] = useState("");
  const [rawSessions, setRawSessions] = useState<Session[]>([]);
  const [sessions, setSessions] = useState<string[]>([]);
  const [itemId, setItemId] = useState("");
  const { language } = useContext(LanguageContext);

  function updateSessions(sessions: Session[]) {
    const mappedSessions = sessions.map((session) => session.title[language]);
    setSessions(mappedSessions);
    setRawSessions(sessions);
  }

  function updateSessionsLanguage(language: languageType) {
    const mappedSessions = rawSessions.map(
      (session) => session.title[language],
    );
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
        updateSessionsLanguage,
      }}
    >
      {children}
    </TocContext.Provider>
  );
}
