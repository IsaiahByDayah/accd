import { storiesOf } from "@storybook/react"
import React from "react"
import { color, number } from "@storybook/addon-knobs"

import SearchBar from "components/SearchBar"

storiesOf("Components", module).add("SearchBar", () => (
    <SearchBar tint={color("Tint", "#FFFFFF")} opacity={number("Opacity", 0.5, { min: 0, max: 1, step: 0.1 })} />
))
