import { createContext, useState, useMemo } from "react";
import {createTheme} from "@mui/material/styles";

export const tokens = (mode) => ({
...(mode === "dark" ? {
    primary: {
        100: "#111a2f",
        200: "#bbccf6",
        300: "#9ab3f2",
        400: "#7899ed",
        500: "#5680e9",
        600: "#4566ba",
        700: "#344d8c",
        800: "#22335d",
        900: "dde6fb"
    },
    tealAccent: {
        100: "#def1fb",
        200: "#bde3f7",
        300: "#9cd5f2",
        400: "#7bc7ee",
        500: "#5ab9ea",
        600: "#4894bb",
        700: "#366f8c",
        800: "#244a5e",
        900: "#12252f"
    },
    gray: {
        100: "#f3f4fa",
        200: "#e6e9f4",
        300: "#dadeef",
        400: "#cdd3e9",
        500: "#c1c8e4",
        600: "#9aa0b6",
        700: "#747889",
        800: "#4d505b",
        900: "#27282e"
    },
    purpleAccent: {
        100: "#e7dff6",
        200: "#cfbfec",
        300: "#b8a0e3",
        400: "#a080d9",
        500: "#8860d0",
        600: "#6d4da6",
        700: "#523a7d",
        800: "#362653",
        900: "#1b132a"
    },
    indigo: {
        100: "#080e17",
        200: "#101b2e",
        300: "#172944",
        400: "#1f365b",
        500: "#274472",
        600: "#52698e",
        700:  "#7d8faa",
        800: "#a9b4c7",
        900: "#d4dae3",
    },
} : {
    primary: {
        900: "#111a2f",
        800: "#22335d",
        700: "#344d8c",
        600: "#4566ba",
        500: "#5680e9",
        400: "#7899ed",
        300: "#9ab3f2",
        200: "#bbccf6",
        100: "#dde6fb",
    },
    tealAccent: {
        900: "#12252f",
        800: "#244a5e",
        700: "#366f8c",
        600: "#4894bb",
        500: "#5ab9ea",
        400: "#7bc7ee",
        300: "#9cd5f2",
        200: "#bde3f7",
        100: "#def1fb",
    },
    gray: {
        900: "#27282e",
        800: "#4d505b",
        700: "#747889",
        600: "#9aa0b6",
        500: "#c1c8e4",
        400: "#cdd3e9",
        300: "#dadeef",
        200: "#e6e9f4",
        100: "#f3f4fa"
    },
    purpleAccent: {
        900: "#1b132a",
        800: "#362653",
        700: "#523a7d",
        600: "#6d4da6",
        500: "#8860d0",
        400: "#a080d9",
        300: "#b8a0e3",
        200: "#cfbfec",
        100: "#e7dff6"
    },
    indigo: {
        100: "#52698e",
        200: "#a9b4c7",
        300: "#7d8faa",
        400: "#d4dae3",
        500: "#274472",
        600: "#1f365b",
        700: "#172944",
        800: "#101b2e",
        900: "#080e17"
    },

}
 )
})




//mui theme settings

export const themeSettings =(mode) => {
    const colors = tokens(mode);

    return {
        palette: {
            mode: mode,
            ...(mode === 'dark' ? {
                primary: {
                    main: colors.primary[500],
                },
                secoondary: {
                    main: colors.tealAccent[500],
                },
                neutral: {
                    dark: colors.gray[700],
                    main: colors.gray[500],
                    light: colors.gray[100]
                },
                background: {
                    default: colors.purpleAccent[500]
                }
            }: {
                primary: {
                    main: colors.primary[100],
                },
                secoondary: {
                    main: colors.tealAccent[500],
                },
                neutral: {
                    dark: colors.gray[500],
                    main: colors.gray[300],
                    light: colors.gray[100]
                },
                background: {
                    default: colors.purpleAccent[200]
                }
            })
        },
        typography: {
            fontFamily: ["Poppins", "sans-serif"].join(","),
            fontSize: 12,
            h1: {
                fontFamily: ["Poppins", "sans-serif"].join(","),
            fontSize: 40,
            },
            h2: {
                fontFamily: ["Poppins", "sans-serif"].join(","),
            fontSize: 32,
            },
            h3: {
                fontFamily: ["Poppins", "sans-serif"].join(","),
            fontSize: 24,
            },
            h4: {
                fontFamily: ["Poppins", "sans-serif"].join(","),
            fontSize: 20,
            },
            h5: {
                fontFamily: ["Poppins", "sans-serif"].join(","),
            fontSize: 16,
            },
            h6: {
                fontFamily: ["Poppins", "sans-serif"].join(","),
            fontSize: 14,
            }
        }
    }
}

export const ColorModeContext = createContext({
    toggleColorMode: () => {}
});

export const useMode = () => {
    const [mode, setMode] = useState("dark");

    const colorMode = useMemo(
        () => ({
            toggleColorMode: () => setMode((prev) => (prev === "light" ? "dark" : "light"))
        }), []
    );

    const theme = useMemo(() => createTheme(themeSettings(mode)), [mode])

    return [theme, colorMode];
}