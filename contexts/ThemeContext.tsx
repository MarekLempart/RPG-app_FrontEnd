    // contexts/ThemeContext.tsx
    import React, { createContext, useState, ReactNode } from "react";
    import { lightTheme, darkTheme } from "@/src/styles/theme";

    export type ThemeType = typeof lightTheme;

    interface ThemeContextProps {
    theme: ThemeType;
    toggleTheme: () => void;
    }

    export const ThemeContext = createContext<ThemeContextProps>({
    theme: lightTheme,
    toggleTheme: () => {}
    });

    interface Props {
    children: ReactNode;
    }

    export const ThemeProvider = ({ children }: Props): JSX.Element => {
    const [theme, setTheme] = useState<ThemeType>(lightTheme);

    const toggleTheme = (): void => {
        setTheme((prev) => (prev === lightTheme ? darkTheme : lightTheme));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
        {children}
        </ThemeContext.Provider>
    );
    };
