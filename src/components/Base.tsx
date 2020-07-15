import { CssBaseline } from "@material-ui/core"
import React, { FunctionComponent } from "react"
import { BrowserRouter } from "react-router-dom"

import ProjectThemeProvider from "providers/ProjectThemeProvider"

const Base: FunctionComponent = ({ children }) => (
    <ProjectThemeProvider>
        <CssBaseline />
        <BrowserRouter>{children}</BrowserRouter>
    </ProjectThemeProvider>
)

export default Base
