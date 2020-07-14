import { storiesOf } from "@storybook/react"
import React from "react"
import { text } from "@storybook/addon-knobs"

import HelloWorld from "./HelloWorld"

storiesOf("Example", module).add("HelloWorld", () => <HelloWorld name={text("Name", "World")} />)
