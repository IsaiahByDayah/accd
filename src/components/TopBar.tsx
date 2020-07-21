import React, { FC, ReactNode } from "react"
import { makeStyles, AppBar, Toolbar, Typography, Box, Grid } from "@material-ui/core"
import { useLocation } from "react-router-dom"
import cx from "classnames"

import { useAuth } from "providers/AuthProvider"

import SearchBar from "components/SearchBar"
import TopContainer from "components/TopContainer"
import LeftPanel from "components/LeftPanel"
import MiddlePanel from "components/MiddlePanel"
import RightPanel from "components/RightPanel"
import SideNavigation from "components/SideNavigation"

const useStyles = makeStyles(({ palette }) => ({
    root: {
        backgroundColor: palette.background.default,
        color: palette.primary.main,
        maxWidth: "100%",
    },
    toolbar: {
        // justifyContent: "space-between",
    },
    title: {
        fontWeight: "bold",
        textTransform: "capitalize",
        flexGrow: 1,
    },
    rightContainer: {
        flexBasis: "40%",
    },
    searchBar: {
        flexBasis: "40%",
    },
    grow: {
        flexGrow: 1,
    },
}))

interface AppBarBaseProps {
    start?: ReactNode
    title?: string
    search?: boolean
    end?: ReactNode
}

export const AppBarBase: FC<AppBarBaseProps> = ({ start, title, search, end }) => {
    const classes = useStyles()
    return (
        <AppBar className={classes.root} elevation={0} position="static">
            <Toolbar className={classes.toolbar}>
                {start && (
                    <Box mr={2} display="flex" alignItems="center">
                        {start}
                    </Box>
                )}

                {title && (
                    <Typography className={classes.title} variant="h6">
                        {title}
                    </Typography>
                )}

                {search && (
                    // <Box className={classes.rightContainer}>
                    <SearchBar className={cx(classes.searchBar, { [classes.grow]: !title })} opacity={1} />
                    // </Box>
                )}

                {end && (
                    <Box ml={2} display="flex" alignItems="center">
                        {end}
                    </Box>
                )}
            </Toolbar>
        </AppBar>
    )
}

interface LoggedInTopBarBaseProps {
    pathname: string
}

export const LoggedInTopBarBase: FC<LoggedInTopBarBaseProps> = ({ pathname }) => {
    let title: string | undefined
    switch (pathname) {
        case "/":
            title = "Home"
            break
        case "/explore":
            title = "Explore"
            break
    }

    return (
        <TopContainer>
            <Grid container>
                <LeftPanel>
                    <SideNavigation />
                </LeftPanel>
                <MiddlePanel>
                    <AppBarBase title={title} search={pathname === "/explore"} />
                </MiddlePanel>
                <RightPanel>Logged In Right Panel</RightPanel>
            </Grid>
        </TopContainer>
    )
}
const LoggedInTopBar = () => {
    const location = useLocation()

    return <LoggedInTopBarBase pathname={location.pathname} />
}

const LoggedOutTopBar = () => {
    return (
        <TopContainer>
            <Grid container>
                {/* <LeftPanel>
                    <SideNavigation />
                </LeftPanel> */}
                <MiddlePanel>
                    <AppBarBase />
                </MiddlePanel>
                <RightPanel>Logged Out Right Panel</RightPanel>
            </Grid>
        </TopContainer>
    )
}

const TopBar = () => {
    const { user } = useAuth()

    if (user) return <LoggedInTopBar />

    return <LoggedOutTopBar />
}

export default TopBar
