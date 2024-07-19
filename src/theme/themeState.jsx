import React, { createContext, useState } from "react";
import WithThemeProvider from "./theme";

const dmkey = 'DARK-MODE'
const ThemeStateContext = createContext(null)

const ThemeStateProvider = ({children}) => {
    const [isDark, setDark] = useState(localStorage.getItem(dmkey) == 'true' )
    const switchTheme = () => {
        localStorage.setItem(dmkey, !isDark)
        setDark(!isDark)
    }

    return(
        <ThemeStateContext.Provider value={{isDark, switchTheme}}>
            <WithThemeProvider>
                {children}
            </WithThemeProvider>
        </ThemeStateContext.Provider>
    )
}

export { ThemeStateContext, ThemeStateProvider }
