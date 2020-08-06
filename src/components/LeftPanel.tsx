import React, { FC } from "react"
import { Grid, makeStyles } from "@material-ui/core"
import cx from "classnames"

import { useAuth } from "providers/AuthProvider"

const useStyles = makeStyles(({ breakpoints }) => ({
    root: {
        display: "none",

        [breakpoints.up("sm")]: {
            display: "block",
        },
    },
}))

type LeftPanelProps = {
    className?: string
    simulateUser?: boolean
}

const LeftPanel: FC<LeftPanelProps> = ({ className, children, simulateUser }) => {
    const classes = useStyles()
    const { user } = useAuth()

    if (user || simulateUser)
        return (
            <Grid className={cx(classes.root, className)} item xs={12} sm={2} md={1} lg={3}>
                {children}
            </Grid>
        )

    return null
}

export default LeftPanel
