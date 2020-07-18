import { storiesOf } from "@storybook/react"
import React from "react"
import { boolean, text, select } from "@storybook/addon-knobs"
import { action } from "@storybook/addon-actions"

import { PromptBase, LoginPrompt, ConfirmationPrompt } from "components/Prompt"

storiesOf("Components/Prompt", module)
    .add("Base", () => (
        <PromptBase
            open={boolean("Open?", false)}
            title={text("Title", "Prompt Title")}
            description={text("Description", "Description for this prompt is displayed here.")}
            onClose={action("On Close")}
        />
    ))
    .add("Login", () => (
        <LoginPrompt user={text("User", "John Doe")} reason={select("Reason", ["like", "comment"], "like")} />
    ))
    .add("Confirmation", () => (
        <ConfirmationPrompt
            title={text("Title", "Are you sure?")}
            description={text("Description", "")}
            onConfirm={action("On Confirm")}
            onClose={boolean("Can Close?", false) ? action("On Close") : undefined}
        />
    ))
