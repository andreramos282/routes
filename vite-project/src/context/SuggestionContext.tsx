import React, { createContext, useContext, useState, ReactNode } from "react";

type SuggestionContextType = {
  suggestions: number[][];
  addSuggestion: (s: number[]) => void;
};

const SuggestionContext = createContext<SuggestionContextType | undefined>(undefined);

export const useSuggestionContext = () => {
  const ctx = useContext(SuggestionContext);
  if (!ctx) throw new Error("SuggestionContext not found!");
  return ctx;
};

export const SuggestionProvider = ({ children }: { children: ReactNode }) => {
  const [suggestions, setSuggestions] = useState<number[][]>([]);

  const addSuggestion = (s: number[]) => setSuggestions(prev => [...prev, s]);

  return (
    <SuggestionContext.Provider value={{ suggestions, addSuggestion }}>
      {children}
    </SuggestionContext.Provider>
  );
};