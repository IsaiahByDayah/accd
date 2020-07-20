import { storiesOf } from "@storybook/react"
import React from "react"
import { number, boolean } from "@storybook/addon-knobs"
import { action } from "@storybook/addon-actions"

import { BottomNavBase } from "components/BottomNav"

storiesOf("Components", module).add("BottomNav", () => (
    <BottomNavBase
        value={number("Selected Index", 0, { min: 0, max: 2 })}
        loggedIn={boolean("Logged In?", false)}
        onLogin={action("On Log in!")}
        onSignup={action("On Sign up!")}
    />
))
