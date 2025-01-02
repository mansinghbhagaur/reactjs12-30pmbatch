import { createContext, useContext } from "react";

export const ThemeContext = createContext();

// creating custom hook accessing for store

export const useThemeContext = () => useContext(ThemeContext);

