import { createContext, useState } from "react";

export const DirectionContext = createContext();

export function DirectionProvider({ children }) {
  const [direction, setDirection] = useState("down");
  return (
    <DirectionContext.Provider value={{ direction, setDirection }}>
      {children}
    </DirectionContext.Provider>
  );
}
