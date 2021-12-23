import {createContext} from 'react'


export const themes = {
    dark: {
      color: "white",
      background: "black",
    },
    light: {
      color: "black",
      background: "white",
    },
  };

export const ThemeContext = createContext(themes.dark);