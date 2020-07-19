import React from "react"
import { Box } from "@material-ui/core"
import { storiesOf } from "@storybook/react"
import { text, number, boolean } from "@storybook/addon-knobs"
import { action } from "@storybook/addon-actions"

import { placeholderImage } from "utils"

import DesignCard from "components/DesignCard"

storiesOf("Components", module).add("DesignCard", () => (
    <Box p={5}>
        <DesignCard
            title={text("Title", "Some Title")}
            code={text("Code", "0000-0000-0000")}
            images={new Array(number("Num Images", 4, { min: 0 })).fill(placeholderImage({ h: 900, w: 1600 }))}
            tags={new Array(number("Num Tags", 3, { min: 0 })).fill("Tag")}
            creatorName={text("Creator Name", "John Doe")}
            favorited={boolean("Favorited?", false)}
            onFavoriteClick={action("Favorite Clicked!")}
        />
    </Box>
))
