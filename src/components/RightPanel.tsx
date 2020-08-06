import React, { FC } from "react"
import { makeStyles, Grid, GridProps } from "@material-ui/core"
import cx from "classnames"

import { useAuth } from "providers/AuthProvider"

const useStyles = makeStyles(({ breakpoints }) => ({
    root: {
        display: "none",

        [breakpoints.up("md")]: {
            display: "block",
        },
    },
}))

type RightPanelProps = {
    className?: string
    simulateUser?: boolean
}

const RightPanel: FC<RightPanelProps> = ({ className, children, simulateUser }) => {
    const classes = useStyles()
    const { user } = useAuth()

    let gridProps: GridProps
    if (user || simulateUser) {
        gridProps = {
            xs: 12,
            md: 4,
        }
    } else {
        gridProps = {
            xs: 12,
            md: 4,
        }
    }

    return (
        <Grid className={cx(classes.root, className)} item {...gridProps}>
            {children}
        </Grid>
    )
}

export default RightPanel
