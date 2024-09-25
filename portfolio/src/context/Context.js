import { createContext, useContext } from "react";

export const ThemeContext = createContext({
    thememode: "light",
    darkTheme: () => { },
    lightTheme: () => { }
})
// custom hook that return usecontext
export default function useTheme() {
    return useContext(ThemeContext);
}

export const ThemeProvider = ThemeContext.Provider;