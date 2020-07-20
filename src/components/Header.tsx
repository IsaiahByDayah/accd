import React from "react"
import { AppBar, Toolbar, Typography, Box, makeStyles, Container, useTheme } from "@material-ui/core"

import SearchBar from "components/SearchBar"

const useStyles = makeStyles(({ palette }) => ({
    root: {
        // backgroundColor: palette.primary.main,
        // color: palette.common.white,
        backgroundColor: palette.background.default,
        color: palette.primary.main,
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
    const theme = useTheme()
    return (
        <AppBar className={classes.root} elevation={0} position="static">
            <Toolbar className={classes.toolbar}>
                <Typography className={classes.title} variant="h6">
                    AC Designs
                </Typography>

                <Box className={classes.rightContainer}>
                    {/* <SearchBar tint={theme.palette.primary.main} /> */}
                    {/* <SearchBar tint={theme.palette.background.paper} /> */}
                    <SearchBar opacity={1} />
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default Header
