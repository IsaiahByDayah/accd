import React from "react"
import { AppBar, Toolbar, Typography, Box, makeStyles } from "@material-ui/core"
import Icon from "@mdi/react"
import { mdiLeaf } from "@mdi/js"

import SearchBar from "components/SearchBar"

const useStyles = makeStyles(({ palette }) => ({
    root: {
        backgroundColor: palette.background.default,
        color: palette.primary.main,
        maxWidth: "100%",
    },
    toolbar: {
        justifyContent: "space-between",
    },
    title: {
        fontWeight: "bold",
        flexGrow: 1,
    },
    rightContainer: {
        flexBasis: "40%",
    },
}))

export const LoginHeaderBase = () => {
    const classes = useStyles()

    return (
        <AppBar className={classes.root} elevation={0} position="static">
            <Toolbar className={classes.toolbar}>
                <Icon path={mdiLeaf} size={1} />

                <Typography className={classes.title} variant="h6">
                    AC Designs
                </Typography>

                <Box className={classes.rightContainer}>
                    <SearchBar opacity={1} />
                </Box>
            </Toolbar>
        </AppBar>
    )
}

const LoginHeader = () => {
    return <LoginHeaderBase />
}

export default LoginHeader
