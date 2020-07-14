import { createMuiTheme, MuiThemeProvider, responsiveFontSizes } from "@material-ui/core"
import React, { FunctionComponent } from "react"

const ProjectThemeProvider: FunctionComponent = ({ children }) => {
    const theme = responsiveFontSizes(
        createMuiTheme({
            // MARK: Create your own Material-UI Theme here
            // See: https://material-ui.com/customization/default-theme/ for more on creating your own theme
        })
    )

    return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
}

export default ProjectThemeProvider
