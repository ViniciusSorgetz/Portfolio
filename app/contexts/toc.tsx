"use client";

import React, { createContext, useState } from "react";

interface TocContextType {
  currentSession: string;
  setCurrentSession: React.Dispatch<React.SetStateAction<string>>;
}

export const TocContext = createContext<TocContextType>({
  currentSession: "Session 1",
  setCurrentSession: () => {},
});

export function TocContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [currentSession, setCurrentSession] = useState("Session 1");

  return (
    <TocContext.Provider value={{ setCurrentSession, currentSession }}>
      {children}
    </TocContext.Provider>
  );
}
