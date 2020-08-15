import { BrowserRouter } from "react-router-dom"

import { decorator } from "utils"

import SnapshotStylesProvider from "providers/SnapshotStylesProvider"
import ProjectThemeProvider from "providers/ProjectThemeProvider"

import CSSBaselined from "components/CSSBaselined"

export const decorators = [
    decorator(SnapshotStylesProvider),
    decorator(ProjectThemeProvider),
    decorator(CSSBaselined),
    decorator(BrowserRouter),
]

export const parameters = {
    actions: { argTypesRegex: "^on[A-Z].*" },
}
