// MARK: Load bootstrap imports here if you have any
// import "../src/lib/bootstrap"

import { configure, addDecorator, addParameters } from "@storybook/react"
import { withKnobs } from "@storybook/addon-knobs"
import { withA11y } from "@storybook/addon-a11y"
import { withConsole } from "@storybook/addon-console"
import requireContext from "require-context.macro"

import { decorator } from "../src/lib/utils"
import Base from "../src/lib/Base"
import SnapshotStylesProvider from "../src/lib/SnapshotStylesProvider"

const req = requireContext("../src", true, /.stories.tsx$/)
function loadStories() {
    req.keys().forEach(filename => req(filename))
}

addDecorator(withKnobs)
addDecorator(withA11y)
addDecorator(decorator(Base))
addDecorator(decorator(SnapshotStylesProvider))
addDecorator((storyFn, context) => withConsole()(storyFn)(context))

configure(loadStories, module)
