import React, { FC } from "react"
import {
    BottomNavigation,
    BottomNavigationAction,
    makeStyles,
    BottomNavigationProps,
    Box,
    useTheme,
} from "@material-ui/core"
import { HomeRounded, FavoriteRounded, ExploreRounded } from "@material-ui/icons"
import cx from "classnames"
import { useRouteMatch, useHistory } from "react-router-dom"

import { useAuth } from "providers/AuthProvider"

import Button from "components/Button"

const useStyles = makeStyles(({ palette, breakpoints, spacing }) => ({
    root: {
        backgroundColor: palette.primary.main,
        color: palette.common.white,
        maxWidth: "100%",

        [breakpoints.up("sm")]: {
            display: "none",
        },
    },
    label: {
        color: palette.common.white,
    },
    icon: {
        color: palette.common.white,
    },
    button: {
        flexGrow: 1,

        "&:not(:first-child)": {
            marginLeft: spacing(),
        },
    },
}))

interface BottomNavBaseProps extends BottomNavigationProps {
    onTabChange?: (value: any) => void
    loggedIn?: boolean
    onLogin: () => void
    onSignup: () => void
}

export const BottomNavBase: FC<BottomNavBaseProps> = ({
    className,
    onTabChange,
    loggedIn,
    onLogin,
    onSignup,
    ...rest
}) => {
    const classes = useStyles()
    const theme = useTheme()

    if (!loggedIn) {
        return (
            <Box className={cx(classes.root, className)} p={1} display="flex">
                <Button className={classes.button} variant="outlined" tint="#fff" onClick={onLogin}>
                    Log in
                </Button>
                <Button
                    className={classes.button}
                    variant="contained"
                    tint="#fff"
                    textContrastTint={theme.palette.primary.main}
                    onClick={onSignup}
                >
                    Sign up
                </Button>
            </Box>
        )
    }

    return (
        <BottomNavigation
            className={cx(classes.root, className)}
            {...rest}
            onChange={(_, value) => onTabChange?.(value)}
        >
            <BottomNavigationAction
                classes={{ label: classes.label }}
                label="Home"
                icon={<HomeRounded className={classes.icon} />}
            />
            <BottomNavigationAction
                classes={{ label: classes.label }}
                label="Explore"
                icon={<ExploreRounded className={classes.icon} />}
            />
            <BottomNavigationAction
                classes={{ label: classes.label }}
                label="Favorites"
                icon={<FavoriteRounded className={classes.icon} />}
            />
        </BottomNavigation>
    )
}

export const BottomNav = () => {
    const history = useHistory()
    const homeMatch = useRouteMatch({
        path: ["/", "/home"],
        exact: true,
    })
    const exploreMatch = useRouteMatch({
        path: "/explore",
    })
    const favoritesMatch = useRouteMatch({
        path: "/favorites",
    })
    const { user, login } = useAuth()

    const getValue = () => {
        if (homeMatch) return 0
        if (exploreMatch) return 1
        if (favoritesMatch) return 2
    }

    const onTabChange = (value: any) => {
        if (value === 0) history.push("/")
        if (value === 1) history.push("/explore")
        if (value === 2) history.push("/favorites")
    }

    return (
        <BottomNavBase
            value={getValue()}
            onTabChange={onTabChange}
            loggedIn={Boolean(user)}
            onLogin={login}
            onSignup={login}
        />
    )
}

export default BottomNav
