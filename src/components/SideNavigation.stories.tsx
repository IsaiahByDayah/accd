import { storiesOf } from "@storybook/react"
import React from "react"
import { StarRounded } from "@material-ui/icons"
import { text, boolean } from "@storybook/addon-knobs"
import { action } from "@storybook/addon-actions"

import SideNavigation, { SideNavigationItem } from "components/SideNavigation"

storiesOf("Components/SideNavigate", module)
    .add("Navigation", () => <SideNavigation />)
    .add("Item", () => (
        <SideNavigationItem
            getIcon={(active, tint, activeTint) => <StarRounded htmlColor={active ? activeTint : tint} />}
            label={text("Label", "Item Label")}
            shrink={boolean("Shrink?", false)}
            active={boolean("Active?", false)}
            onClick={action("On Click!")}
        />
    ))
