import React from "react"
import { Grid, Box, makeStyles } from "@material-ui/core"

const useStyles = makeStyles(({ breakpoints }) => ({
    root: {
        display: "none",

        [breakpoints.up("md")]: {
            display: "block",
        },
    },
}))

const RightPanel = () => {
    const classes = useStyles()
    return (
        <Grid className={classes.root} item xs={12} md={3}>
            <Box bgcolor="blue">Right Panel</Box>
        </Grid>
    )
}

export default RightPanel
