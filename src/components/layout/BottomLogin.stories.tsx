import React from "react"
import { Meta, Story } from "@storybook/react/types-6-0"

import { BottomLoginBase, BottomLoginBaseProps } from "components/layout/BottomLogin"

export default {
    component: BottomLoginBase,
    title: "Layout/BottomLogin",
} as Meta

export const Basic: Story<BottomLoginBaseProps> = args => <BottomLoginBase {...args} />
