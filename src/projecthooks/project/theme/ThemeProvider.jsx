import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material'
import React from 'react'
import { ThemeContext } from '../store/Context';

const ThemeProvider = ({ children }) => {
      const [mode, setMode] = React.useState('light')

      const toggleMode = () => {
            const newMode = mode === 'light' ? 'dark' : 'light'
            setMode(newMode);
      }

      const ThemeLight = createTheme({
            palette: {
                  mode: 'light',
                  primary: {
                        main: "#0330fc",
                  },
                  secondary: {
                        main: "#cc0",
                  },
                  background: {
                        default: "#fff",
                  }
            }
      })

      const ThemeDark = createTheme({
            palette: {
                  mode: 'dark',
                  primary: {
                        main: "#f4f4f4",
                  },
                  background: {
                        default: "#000",
                  }
            }
      })

      const theme = mode === 'light' ? ThemeLight : ThemeDark;

      return (
            <ThemeContext.Provider value={{ mode, toggleMode }}>
                  <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
            </ThemeContext.Provider>
      )
}

export default ThemeProvider
