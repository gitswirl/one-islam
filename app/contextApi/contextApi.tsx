"use client";

import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  useRef,
} from "react";

interface ContextType {
  theme: string;
  handleThemeLight: () => void;
  handleThemeDark: () => void;
}

const GContext = createContext<ContextType | undefined>(undefined);

export const GContextProvider = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  const [theme, setTheme] = useState<string>("light");

  const handleThemeLight = () => setTheme("light");
  const handleThemeDark = () => setTheme("dark");

  return (
    <GContext.Provider
      value={{
        // theme--
        theme,
        handleThemeLight,
        handleThemeDark,
      }}
    >
      {children}
    </GContext.Provider>
  );
};

export const useGContext = () => {
  const context = useContext(GContext);
  if (!context) {
    throw new Error("useGContext must be used within a GContextProvider");
  }
  return context;
};
