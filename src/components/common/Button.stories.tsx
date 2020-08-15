import React from "react"
import { Meta, Story } from "@storybook/react/types-6-0"

import Button, { ButtonProps } from "components/common/Button"

export default {
    component: Button,
    title: "Common/Button",
} as Meta

const Template: Story<ButtonProps> = args => <Button {...args} />

export const Basic = Template.bind({})
Basic.args = {
    children: "Hello",
}

export const Emoji = Template.bind({})
Emoji.args = {
    children: "🙂🍕",
}
