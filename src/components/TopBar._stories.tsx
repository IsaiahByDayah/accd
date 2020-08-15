import { storiesOf } from "@storybook/react"
import React from "react"
import { text, boolean } from "@storybook/addon-knobs"
import { MenuRounded, StarRounded } from "@material-ui/icons"

import { AppBarBase, LoggedInTopBarBase, LoggedOutTopBarBase } from "components/TopBar"
import { action } from "@storybook/addon-actions"

storiesOf("Components/TopBar", module)
    .add("AppBar", () => (
        <AppBarBase
            title={text("Title", "Home")}
            search={boolean("Search?", false)}
            start={boolean("Has Start?", false) ? <MenuRounded /> : undefined}
            end={boolean("Has End?", false) ? <StarRounded /> : undefined}
        />
    ))
    .add("LoggedIn", () => <LoggedInTopBarBase pathname={text("Pathname", "/")} />)
    .add("LoggedOut", () => (
        <LoggedOutTopBarBase
            onMenuClick={action("On Menu Click!")}
            onSignUpClick={action("On Sign Up Click!")}
            onLogInClick={action("On Log In Click!")}
        />
    ))
