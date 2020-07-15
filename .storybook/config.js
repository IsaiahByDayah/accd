import "bootstrap"

import { configure, addDecorator } from "@storybook/react"
import { withKnobs } from "@storybook/addon-knobs"
import { withA11y } from "@storybook/addon-a11y"
import { withConsole } from "@storybook/addon-console"
import requireContext from "require-context.macro"

import { decorator } from "utils"

import Base from "components/Base"

import SnapshotStylesProvider from "providers/SnapshotStylesProvider"
import ProjectThemeProvider from "providers/ProjectThemeProvider"

const req = requireContext("../src", true, /.stories.tsx$/)
function loadStories() {
    req.keys().forEach(filename => req(filename))
}

addDecorator(withKnobs)
addDecorator(withA11y)
addDecorator(decorator(ProjectThemeProvider))
addDecorator(decorator(Base))
addDecorator(decorator(SnapshotStylesProvider))
addDecorator((storyFn, context) => withConsole()(storyFn)(context))

configure(loadStories, module)
