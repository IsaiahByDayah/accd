import React, { FC, ReactNode } from "react"
import { makeStyles, AppBar, Toolbar, Typography, Box, Grid, IconButton } from "@material-ui/core"
import { useLocation } from "react-router-dom"
import cx from "classnames"
import Icon from "@mdi/react"
import { mdiLeaf, mdiDotsHorizontal } from "@mdi/js"

import { useAuth } from "providers/AuthProvider"

import useBreakpoint, { Breakpoint } from "hooks/useBreakpoint"

import SearchBar from "components/SearchBar"
import TopContainer from "components/TopContainer"
import LeftPanel from "components/LeftPanel"
import MiddlePanel from "components/MiddlePanel"
import RightPanel from "components/RightPanel"
import SideNavigation from "components/SideNavigation"
import Button from "components/Button"

const useStyles = makeStyles(({ palette, spacing }) => ({
    root: {
        backgroundColor: palette.background.default,
        color: palette.primary.main,
        maxWidth: "100%",
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
    icon: {
        color: palette.primary.main,
    },
    button: {
        "&:not(:last-child)": {
            marginRight: spacing(),
        },
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
            <Toolbar>
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

                {search && <SearchBar className={cx(classes.searchBar, { [classes.grow]: !title })} opacity={1} />}

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

type LoggedOutTopBarBaseProps = {
    onMenuClick: () => void
    onLogInClick: () => void
    onSignUpClick: () => void
}

export const LoggedOutTopBarBase: FC<LoggedOutTopBarBaseProps> = ({ onMenuClick, onLogInClick, onSignUpClick }) => {
    const classes = useStyles()
    const breakpoint = useBreakpoint()

    return (
        <TopContainer>
            <Grid container>
                {/* NOTE: When logged out left panel is never display so don't include in component */}
                {/* <LeftPanel>Logged Out Left Panel</LeftPanel> */}
                <MiddlePanel>
                    <AppBarBase
                        start={<Icon path={mdiLeaf} size={1} />}
                        search
                        end={
                            breakpoint < Breakpoint.md && (
                                <IconButton onClick={onMenuClick}>
                                    <Icon className={classes.icon} path={mdiDotsHorizontal} size={1} />
                                </IconButton>
                            )
                        }
                    />
                </MiddlePanel>
                <RightPanel>
                    <AppBarBase
                        title=" "
                        end={
                            <>
                                <Button className={classes.button} onClick={onLogInClick} variant="outlined">
                                    Log in
                                </Button>
                                <Button
                                    className={classes.button}
                                    onClick={onSignUpClick}
                                    variant="contained"
                                    textContrastTint="#fff"
                                >
                                    Sign up
                                </Button>
                                <IconButton onClick={onMenuClick}>
                                    <Icon
                                        className={cx(classes.icon, classes.button)}
                                        path={mdiDotsHorizontal}
                                        size={1}
                                    />
                                </IconButton>
                            </>
                        }
                    />
                </RightPanel>
            </Grid>
        </TopContainer>
    )
}

const LoggedOutTopBar = () => {
    return <LoggedOutTopBarBase onMenuClick={() => null} onSignUpClick={() => null} onLogInClick={() => null} />
}

const TopBar = () => {
    const { user } = useAuth()

    if (user) return <LoggedInTopBar />

    return <LoggedOutTopBar />
}

export default TopBar
