import React, { createContext, useContext } from "react";  

//crate context
export const ThemeContext = createContext({
    themeMode : 'Light',
    darktheme : () => {},
    lightTheme : () => {}
})

 

export const ThemeProvider = ThemeContext.Provider

//custm hook
export function useTheme() {
    return useContext(ThemeContext)
}

