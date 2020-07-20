import React, { FunctionComponent } from "react"
import { BrowserRouter } from "react-router-dom"

import ProjectThemeProvider from "providers/ProjectThemeProvider"
import PromptProvider from "providers/PromptProvider"
import AuthProvider from "providers/AuthProvider"

import CSSBaselined from "components/CSSBaselined"

const Base: FunctionComponent = ({ children }) => (
    <ProjectThemeProvider>
        <CSSBaselined>
            <AuthProvider>
                <BrowserRouter>
                    <PromptProvider>{children}</PromptProvider>
                </BrowserRouter>
            </AuthProvider>
        </CSSBaselined>
    </ProjectThemeProvider>
)

export default Base
