import { storiesOf } from "@storybook/react"
import React from "react"
import { text, color } from "@storybook/addon-knobs"

import Tag from "components/Tag"

storiesOf("Components", module).add("Tag", () => (
    <Tag backgroundColor={color("Background Color", "#38B3BF")} textColor={color("Text Color", "#ffffff")}>
        {text("Tag", "Some Tag")}
    </Tag>
))
