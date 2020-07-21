import React, { FC } from "react"
import { Grid, Box, makeStyles } from "@material-ui/core"
import Icon from "@mdi/react"
import { mdiLeaf } from "@mdi/js"

import { useAuth } from "providers/AuthProvider"

const useStyles = makeStyles(({ breakpoints, palette }) => ({
    root: {
        display: "none",

        [breakpoints.up("sm")]: {
            display: "block",
        },
    },
    icon: {
        color: palette.primary.main,
    },
}))

const LeftPanel: FC = ({ children }) => {
    const classes = useStyles()
    const { user } = useAuth()

    if (!user) return null

    return (
        <Grid className={classes.root} item xs={12} sm={2} md={1} lg={3}>
            {children}
            {/* <Box py={2} display="flex" flexDirection="column" alignItems="center">
                <Icon className={classes.icon} path={mdiLeaf} size={1.5} />
            </Box> */}
        </Grid>
    )
}

export default LeftPanel
