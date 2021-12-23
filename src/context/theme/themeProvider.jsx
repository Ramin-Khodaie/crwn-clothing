import { ThemeContext, themes } from "./themeContext";
import { useState } from "react";

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(themes.dark);

  const handleToggleMode = () =>
    theme === themes.dark ? setTheme(themes.light) : setTheme(themes.light);
  return (
    <ThemeContext.Provider value={{ theme, handleToggleMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
