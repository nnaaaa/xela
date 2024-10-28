"use client";
import apolloClient from "@/api";
import { ApolloProvider } from "@apollo/client";
import { ThemeProvider } from "@/components/providers/theme.provider";
import { Provider as ReduxProvider } from "react-redux";
import { makeStore } from "@/state/store";

export default function Providers({ children }: { children: React.ReactNode }) {
    return (
        <ReduxProvider store={makeStore()}>
            <ApolloProvider client={apolloClient}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="dark"
                    // enableSystem
                    // disableTransitionOnChange
                >
                    {children}
                </ThemeProvider>
            </ApolloProvider>
        </ReduxProvider>
    );
}
