import { createContext, useContext } from "react";

const ThemeContext = createContext();

// custom hooks
export const useThemeContext = () => useContext(ThemeContext);



const ProviderCom = ({ children }) => {
      return (
            <ThemeContext.Provider value={{ name: 'users', age: 20 }}>
                  {children}
            </ThemeContext.Provider>
      )
}

export default ProviderCom;

