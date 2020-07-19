import React, { FC, createContext, useContext, useState } from "react"

import { LoginPromptProps, ConfirmationPromptProps } from "components/Prompt"

interface LoginPromptOptions extends LoginPromptProps {
    type: "login"
}

interface ConfirmationPromptOptions extends ConfirmationPromptProps {
    type: "confirm"
}

type PromptOptions = LoginPromptOptions | ConfirmationPromptOptions

interface PromptProviderProps {
    current?: PromptOptions
    open: boolean
    prompt: (options: PromptOptions) => void
    close: () => void
}

const PromptContext = createContext<PromptProviderProps>({
    open: false,
    prompt: () => null,
    close: () => null,
})

const PromptProvider: FC = ({ children }) => {
    const [open, setOpen] = useState(false)
    const [current, setCurrent] = useState<PromptOptions>()

    const prompt = (options: PromptOptions) => {
        setCurrent(options)
        setOpen(true)
    }

    const close = () => {
        setOpen(false)
        setCurrent(undefined)
    }

    return <PromptContext.Provider value={{ open, current, prompt, close }}>{children}</PromptContext.Provider>
}

export default PromptProvider

export const usePrompt = () => useContext(PromptContext)
