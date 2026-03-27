"use client";

import React, { createContext, useState } from "react";
import { Text } from "../languages";
import { en } from "../languages";

interface TocContextType {
  currentSession: string;
  setCurrentSession: React.Dispatch<React.SetStateAction<string>>;
  sessions: string[];
  setSessions: React.Dispatch<React.SetStateAction<string[]>>;
  itemId: string;
  setItemId: React.Dispatch<React.SetStateAction<string>>;
  updateSessions: (language: Text) => void;
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

  function updateSessions(language: Text) {
    for (const group of language.sidebarLeft.groups) {
      for (const item of group.items) {
        if (item.id == itemId) {
          setSessions(item.sessions);
        }
      }
    }
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
