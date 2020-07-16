import React from "react"
import { AppBar, Toolbar, Typography, Box, makeStyles, Container } from "@material-ui/core"

import SearchBar from "components/SearchBar"

const useStyles = makeStyles(({ palette }) => ({
    root: {
        backgroundColor: palette.primary.main,
        color: palette.common.white,
        maxWidth: "100%",
    },
    toolbar: {
        justifyContent: "space-between",
    },
    title: {
        fontWeight: "bold",
    },
    rightContainer: {
        flexBasis: "40%",
    },
}))

const Header = () => {
    const classes = useStyles()
    return (
        <AppBar className={classes.root} elevation={0} position="static">
            <Toolbar className={classes.toolbar}>
                <Typography className={classes.title} variant="h6">
                    AC Designs
                </Typography>

                <Box className={classes.rightContainer}>
                    <SearchBar />
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default Header
