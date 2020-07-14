import React, { Fragment, FunctionComponent } from "react"

import { useAdditionalGlobalStyles } from "./hooks/styles"

const AdditionalGlobalStyles: FunctionComponent = ({ children }) => {
    useAdditionalGlobalStyles({})
    return <Fragment>{children}</Fragment>
}

export default AdditionalGlobalStyles
