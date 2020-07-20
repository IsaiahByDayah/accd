import { storiesOf } from "@storybook/react"
import React from "react"
import { action } from "@storybook/addon-actions"

import { BottomLoginBase } from "components/BottomLogin"

storiesOf("Components", module).add("BottomLogin", () => (
    <BottomLoginBase onLogin={action("On Log in!")} onSignup={action("On Sign up!")} />
))
