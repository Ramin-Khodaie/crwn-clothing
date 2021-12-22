import { ThemeContext } from "./themeContext";
import { useState } from "react";

export const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState(true);

  const handleToggle = () => setMode((previousState) => !previousState);
  return (
    <ThemeContext.Provider value={{mode, handleToggle}}>
      {children}
    </ThemeContext.Provider>
  );
};
