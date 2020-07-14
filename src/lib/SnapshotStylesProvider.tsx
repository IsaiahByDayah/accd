import { StylesProvider } from "@material-ui/styles"
import { GenerateId } from "jss"
import React, { FunctionComponent } from "react"
import { slugify } from "./utils"

interface SnapshotStylesProviderProps {
    kind: string
    story: string
}

const counts: { [key: string]: number } = {}

/*
	Generates a cascading unique classname per rule & per stylesheet & PER STORY
	Solves issue of generating ALL new storyshots due to changing 1 story
*/
const getGenerateClassName = ({ kind, story }: SnapshotStylesProviderProps): GenerateId => (rule, styleSheet) => {
    const key = slugify(
        `${kind}-${story}-${(styleSheet && styleSheet.options.classNamePrefix) || "NO STYLESHEET PROVIDED"}-${rule.key}`
    )
    const currentCount = counts[key] || 0
    const id = `${key}-${currentCount + 1}`
    counts[key] = currentCount + 1
    return id
}

const SnapshotStylesProvider: FunctionComponent<SnapshotStylesProviderProps> = ({ children, ...rest }) => {
    return <StylesProvider generateClassName={getGenerateClassName(rest)}>{children}</StylesProvider>
}

export default SnapshotStylesProvider
