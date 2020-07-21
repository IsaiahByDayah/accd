import { storiesOf } from "@storybook/react"
import React from "react"
import { text, boolean } from "@storybook/addon-knobs"
import { MenuRounded, StarRounded } from "@material-ui/icons"

import { AppBarBase, LoggedInTopBarBase } from "components/TopBar"

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
