import React from "react"
import { Meta, Story } from "@storybook/react/types-6-0"

import { BottomNavBase, BottomNavBaseProps } from "components/layout/BottomNav"

export default {
    component: BottomNavBase,
    title: "Layout/BottomNav",
} as Meta

export const Basic: Story<BottomNavBaseProps> = args => <BottomNavBase {...args} />
