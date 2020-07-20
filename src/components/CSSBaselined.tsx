import { CssBaseline } from "@material-ui/core"
import React, { FC } from "react"

const CSSBaselined: FC = ({ children }) => (
    <>
        <CssBaseline />
        {children}
    </>
)

export default CSSBaselined
