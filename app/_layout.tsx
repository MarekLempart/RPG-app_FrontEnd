// app/_layout.tsx
import React from "react";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

import { Provider as ReduxProvider } from "react-redux";
import store from "@/store";
import { ThemeProvider as CustomThemeProvider } from "@/contexts/ThemeContext";
import { LanguageProvider } from "@/contexts/LanguageContext";

// Zapobiegamy automatycznemu ukryciu splash screena
SplashScreen.preventAutoHideAsync();

export default function RootLayout(): JSX.Element {
    const [loaded] = useFonts({
        Caveat: require("../assets/fonts/Caveat-Regular.ttf")
    });

    useEffect(() => {
        if (loaded) {
            SplashScreen.hideAsync();
        }
    }, [loaded]);

    if (!loaded) {
        return <></>;
    }

    return (
        <ReduxProvider store={store}>
            <CustomThemeProvider>
                <LanguageProvider>
                    <Stack>
                        <Stack.Screen
                            name="(tabs)"
                            options={{ title: "Home", headerShown: false }}
                        />
                        <Stack.Screen name="+not-found" options={{ title: "Not Found" }} />
                    </Stack>
                    <StatusBar style="auto" />
                </LanguageProvider>
            </CustomThemeProvider>
        </ReduxProvider>
    );
}
