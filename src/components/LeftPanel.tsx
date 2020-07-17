import React from "react"
import { Grid, Box, makeStyles } from "@material-ui/core"

const useStyles = makeStyles(({ breakpoints }) => ({
    root: {
        display: "none",

        [breakpoints.up("sm")]: {
            display: "block",
        },
    },
}))

const LeftPanel = () => {
    const classes = useStyles()
    return (
        <Grid className={classes.root} item xs={12} sm={2} md={3}>
            <Box bgcolor="red">Left Panel</Box>
        </Grid>
    )
}

export default LeftPanel
