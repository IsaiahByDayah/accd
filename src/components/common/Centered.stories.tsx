import React from "react"
import { Typography, Button } from "@material-ui/core"
import { Story, Meta } from "@storybook/react/types-6-0"

import Centered, { CenteredProps } from "components/common/Centered"

export default {
    component: Centered,
    title: "Common/Centered",
} as Meta

const Template: Story<CenteredProps> = args => <Centered {...args} />

export const WithText = Template.bind({})
WithText.args = {
    width: 300,
    height: 300,
    bgcolor: "primary.light",
    children: <Typography style={{ color: "#fff" }}>Hello, World!</Typography>,
}

export const WithButton = Template.bind({})
WithButton.args = {
    width: 300,
    height: 300,
    bgcolor: "primary.light",
    children: <Button variant="contained">Hello, World!</Button>,
}
