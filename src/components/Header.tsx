import React from "react"
import { AppBar, Toolbar, Typography, Box, makeStyles } from "@material-ui/core"

import SearchBar from "components/SearchBar"

const useStyles = makeStyles(({ palette }) => ({
    root: {
        backgroundColor: palette.primary.main,
        color: palette.common.white,
        // color: palette.augmentColor({ main: palette.text.primary }).dark,
    },
    title: {
        fontWeight: "bold",
        flexGrow: 1,
    },
}))

const Header = () => {
    const classes = useStyles()
    return (
        <AppBar className={classes.root} elevation={0} position="sticky">
            <Toolbar>
                <Typography className={classes.title} variant="h6">
                    Animal Crossing Custom Designs
                </Typography>

                <Box>
                    <SearchBar />
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default Header
