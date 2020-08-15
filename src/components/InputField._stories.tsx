import { storiesOf } from "@storybook/react"
import React from "react"
import { color, number, boolean, text } from "@storybook/addon-knobs"
import { AcUnitRounded, ZoomOutRounded } from "@material-ui/icons"

import InputField from "components/InputField"

storiesOf("Components", module).add("InputField", () => (
    <InputField
        tint={color("Tint", "#FFFFFF")}
        opacity={number("Opacity", 0.5, { min: 0, max: 1, step: 0.1 })}
        placeholder={text("Placeholder", "")}
        start={boolean("Has Start?", false) ? <AcUnitRounded /> : null}
        end={boolean("Has End?", false) ? <ZoomOutRounded /> : null}
    />
))
