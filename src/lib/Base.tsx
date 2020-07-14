import { CssBaseline } from "@material-ui/core"
import React, { FunctionComponent } from "react"
import { BrowserRouter } from "react-router-dom"

import ProjectThemeProvider from "../components/ProjectThemeProvider"
import AdditionalGlobalStyles from "./AdditionalGlobalStyles"

const Base: FunctionComponent = ({ children }) => (
    <ProjectThemeProvider>
        <CssBaseline />
        <AdditionalGlobalStyles>
            <BrowserRouter>{children}</BrowserRouter>
        </AdditionalGlobalStyles>
    </ProjectThemeProvider>
)

export default Base
