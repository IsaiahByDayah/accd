import { createMuiTheme, MuiThemeProvider, responsiveFontSizes } from "@material-ui/core"
import React, { FunctionComponent } from "react"

const ProjectThemeProvider: FunctionComponent = ({ children }) => {
    const theme = responsiveFontSizes(
        createMuiTheme({
            // MARK: Create your own Material-UI Theme here
            // See: https://material-ui.com/customization/default-theme/ for more on creating your own theme

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
