import { storiesOf } from "@storybook/react"
import React from "react"
import { number } from "@storybook/addon-knobs"
import { action } from "@storybook/addon-actions"

import { BottomNavBase, BottomLoginBase } from "components/BottomBar"

storiesOf("Components/BottomBar", module)
    .add("LoggedIn", () => (
        <BottomNavBase value={number("Selected Index", 0, { min: 0, max: 2 })} onTabChange={action("On Tab Change!")} />
    ))
    .add("LoggedOut", () => <BottomLoginBase onLogin={action("On Log in!")} onSignup={action("On Sign up!")} />)
