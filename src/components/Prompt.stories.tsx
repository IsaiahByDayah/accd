import { storiesOf } from "@storybook/react"
import React from "react"
import { boolean, text } from "@storybook/addon-knobs"
import { action } from "@storybook/addon-actions"

import { PromptBase } from "components/Prompt"

storiesOf("Components", module).add("Prompt", () => (
    <PromptBase
        open={boolean("Open?", false)}
        title={text("Title", "Prompt Title")}
        description={text("Description", "Description for this prompt is displayed here.")}
        onClose={action("On Close")}
    />
))
