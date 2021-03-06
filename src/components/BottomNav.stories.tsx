import { storiesOf } from "@storybook/react"
import React from "react"
import { number } from "@storybook/addon-knobs"

import { BottomNavBase } from "components/BottomNav"

storiesOf("Components", module).add("BottomNav", () => (
    <BottomNavBase value={number("Selected Index", 0, { min: 0, max: 2 })} />
))
