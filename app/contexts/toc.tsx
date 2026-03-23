"use client";

import React, { createContext, useState } from "react";

interface TocContextType {
  currentSession: string;
  setCurrentSession: React.Dispatch<React.SetStateAction<string>>;
  sessions: string[];
  setSessions: React.Dispatch<React.SetStateAction<string[]>>;
}

export const TocContext = createContext<TocContextType>({
  currentSession: "Session 1",
  setCurrentSession: () => {},
  sessions: [],
  setSessions: () => {},
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

  return (
    <TocContext.Provider
      value={{ setCurrentSession, currentSession, sessions, setSessions }}
    >
      {children}
    </TocContext.Provider>
  );
}
