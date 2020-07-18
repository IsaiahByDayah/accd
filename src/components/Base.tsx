import { CssBaseline } from "@material-ui/core"
import React, { FunctionComponent } from "react"
import { BrowserRouter } from "react-router-dom"

import ProjectThemeProvider from "providers/ProjectThemeProvider"
import PromptProvider from "providers/PromptProvider"

const Base: FunctionComponent = ({ children }) => (
    <ProjectThemeProvider>
        <CssBaseline />
        <BrowserRouter>
            <PromptProvider>{children}</PromptProvider>
        </BrowserRouter>
    </ProjectThemeProvider>
)

export default Base
