import { storiesOf } from "@storybook/react"
import React from "react"
import { text, array } from "@storybook/addon-knobs"

import DesignCard from "./DesignCard"

storiesOf("Components", module).add("DesignCard", () => (
    <DesignCard
        title={text("Title", "Some Title")}
        tags={array("Tags", ["tag1", "tag2"])}
        creatorName={text("Creator Name", "John Doe")}
    />
))
