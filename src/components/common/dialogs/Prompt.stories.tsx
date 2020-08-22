import React, { ReactNode } from "react"
import { Meta, Story } from "@storybook/react/types-6-0"
import { StarRounded } from "@material-ui/icons"

import Centered from "components/common/Centered"
import Prompt, { PromptProps } from "components/common/dialogs/Prompt"
import AuthPrompt, { AuthPromptProps } from "components/common/dialogs/AuthPrompt"
import ConfirmationPrompt, { ConfirmationPromptProps } from "components/common/dialogs/ConfirmationPrompt"
import LoginPrompt, { LoginPromptProps } from "components/common/dialogs/LoginPrompt"
import SignupPrompt, { SignupPromptProps } from "components/common/dialogs/SignupPrompt"

export default {
    title: "Common/Prompts",
} as Meta

interface Args extends PromptProps {
    children?: ReactNode
}

const BasicTemplate: Story<Args> = args => <Prompt {...args} />
BasicTemplate.argTypes = {
    open: { control: "boolean" },
    title: { control: "string" },
    description: { control: "string" },
    onClose: {},
}
BasicTemplate.args = {
    open: true,
    title: "Elit minim veniam",
    description: "Occaecat sint eiusmod excepteur ea cillum Lorem nulla exercitation nostrud sit.",
}

export const Basic = BasicTemplate.bind({})
Basic.argTypes = {
    ...BasicTemplate.argTypes,
}
Basic.args = {
    ...BasicTemplate.args,
}

export const BasicWithChildren = BasicTemplate.bind({})
BasicWithChildren.argTypes = {
    ...BasicTemplate.argTypes,
}
BasicWithChildren.args = {
    ...BasicTemplate.args,
    children: (
        <Centered>
            <StarRounded />
        </Centered>
    ),
}

export const BasicWithHeader = BasicTemplate.bind({})
BasicWithHeader.argTypes = {
    ...BasicTemplate.argTypes,
}
BasicWithHeader.args = {
    ...BasicTemplate.args,
    header: (
        <Centered>
            <StarRounded />
        </Centered>
    ),
}

export const Auth: Story<AuthPromptProps> = args => <AuthPrompt {...args} />
Auth.storyName = "Auth Prompt"
Auth.argTypes = {
    open: { control: "boolean" },
    user: { control: "string" },
    reason: {
        control: {
            type: "select",
            options: ["like", "comment"],
        },
    },
    onClose: {},
}
Auth.args = {
    open: true,
    user: "Otto",
    reason: "like",
}

export const Confirmation: Story<ConfirmationPromptProps> = args => <ConfirmationPrompt {...args} />
Confirmation.storyName = "Confirmation Prompt"
Confirmation.argTypes = {
    open: { control: "boolean" },
    title: { control: "string" },
    description: { control: "string" },
    onConfirm: {},
    onClose: {},
}
Confirmation.args = {
    open: true,
}

export const Login: Story<LoginPromptProps> = args => <LoginPrompt {...args} />
Login.storyName = "Login Prompt"
Login.argTypes = {
    open: { control: "boolean" },
    onLogin: {},
    onClose: {},
}
Login.args = {
    open: true,
}

export const Signup: Story<SignupPromptProps> = args => <SignupPrompt {...args} />
Signup.storyName = "Signup Prompt"
Signup.argTypes = {
    open: { control: "boolean" },
    onSignup: {},
    onClose: {},
}
Signup.args = {
    open: true,
}
