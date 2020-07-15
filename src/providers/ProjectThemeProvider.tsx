import { createMuiTheme, MuiThemeProvider, responsiveFontSizes } from "@material-ui/core"
import React, { FunctionComponent } from "react"

const ProjectThemeProvider: FunctionComponent = ({ children }) => {
    const theme = responsiveFontSizes(
        createMuiTheme({
            // MARK: Create your own Material-UI Theme here
            // See: https://material-ui.com/customization/default-theme/ for more on creating your own theme
            typography: {
                fontFamily: "'Nunito', sans-serif",
                h1: {
                    fontFamily: "'Roboto Slab', sans-serif",
                },
                h2: {
                    fontFamily: "'Roboto Slab', sans-serif",
                },
                h3: {
                    fontFamily: "'Roboto Slab', sans-serif",
                },
                h4: {
                    fontFamily: "'Roboto Slab', sans-serif",
                },
                h5: {
                    fontFamily: "'Roboto Slab', sans-serif",
                },
                h6: {
                    fontFamily: "'Roboto Slab', sans-serif",
                },
            },
            palette: {
                primary: {
                    // main: "#2EC4B6",
                    // main: "#14C3B4",
                    main: "#38B3BF",
                    // contrastText: "#FFFFFF",
                    // contrastText: "#5C523C",
                },
                secondary: {
                    // main: "#FF9F1C",
                    main: "#F6AAAF",
                },
                background: {
                    // default: "#EEE8CC",
                    // paper: "#EEE8CC",
                    default: "#FBF8E5",
                    paper: "#F9EEAE",
                },
                text: {
                    primary: "#5C523C",
                    secondary: "#F9A9AD",
                },
            },

            overrides: {
                MuiCssBaseline: {
                    /**
                     * MARK: Add any global styles you might want on the page here...
                     * Example:
                     */
                    "@global": {
                        // a: {
                        //     textDecoration: "none",
                        //     color: "inherit",
                        //     transition: "text-decoration 0.5s ease",
                        // },
                        // "a:visited": {
                        //     color: "inherit",
                        // },
                        // "a:hover": {
                        //     textDecoration: "underline",
                        // },
                    },
                },
            },
        })
    )

    return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
}

export default ProjectThemeProvider
