import React from "react";
import { useState } from "react";

const ThemeChanger = () => {
      const [theme, setTheme] = useState("light");
      console.log(theme.charAt(0).toUpperCase() + theme.slice(1))
      const Themes = {
            light: {
                  backgroundColor: "#f0f0f0",
                  color: "#000",
            },
            dark: {
                  backgroundColor: "#000",
                  color: "#fff"
            },
            blue: {
                  backgroundColor: "yellow",
                  color: "#000"
            }
      }

      return (
            <div
                  style={{
                        background: Themes[theme].backgroundColor,
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        minHeight: '97vh',
                        color: Themes[theme].color,
                        flexDirection: 'column'
                  }}
            >
                  <h1>Theme Chanager</h1>
                  <h1>{theme.charAt(0).toUpperCase() + theme.slice(1)} mode</h1>
                  <button style={{ padding: 10, fontSize: 25 }} onClick={() =>
                        // theme === 'light' ?
                        //       setTheme('dark') :
                        //       setTheme('light')
                        setTheme((prevTheme) =>
                              prevTheme === 'light' ?
                                    'dark' :
                                    prevTheme === 'dark' ? 'blue' : 'light')
                  }>Toggle</button>
            </div >
      );
};

export default ThemeChanger;
