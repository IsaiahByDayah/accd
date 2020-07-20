import React from "react"
import { Box } from "@material-ui/core"
import { storiesOf } from "@storybook/react"
import { text, select, color } from "@storybook/addon-knobs"
import { action } from "@storybook/addon-actions"

import Button from "components/Button"

storiesOf("Components", module).add("Button", () => (
    <Box p={5}>
        <Button
            onClick={action("On Click")}
            variant={select("Variant", ["text", "outlined", "contained"], "text")}
            tint={color("Tint", "#38B3BF")}
            textContrastTint={color("Text Contrast Tint", "#FFFFFF")}
        >
            {text("Label", "Hello, World!")}
        </Button>
    </Box>
))
