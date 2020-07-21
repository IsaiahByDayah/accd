import React, { FC } from "react"
import { Grid, Box, makeStyles } from "@material-ui/core"

const useStyles = makeStyles(({ breakpoints }) => ({
    root: {
        display: "none",

        [breakpoints.up("md")]: {
            display: "block",
        },
    },
}))

const RightPanel: FC = ({ children }) => {
    const classes = useStyles()
    return (
        <Grid className={classes.root} item xs={12} md={3}>
            {children}
            {/* <Box display="flex" flexDirection="column" alignItems="center">
                Right Panel
            </Box> */}
        </Grid>
    )
}

export default RightPanel
