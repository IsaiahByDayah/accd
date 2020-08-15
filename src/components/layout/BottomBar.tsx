import React, { FC } from "react"
import {
    makeStyles,
    useTheme,
    BottomNavigation,
    BottomNavigationAction,
    BottomNavigationProps,
    Box,
} from "@material-ui/core"
import { FavoriteRounded, ExploreRounded } from "@material-ui/icons"
import Icon from "@mdi/react"
import { mdiBeehiveOutline } from "@mdi/js"
import cx from "classnames"
import { useRouteMatch, useHistory } from "react-router-dom"

import { useAuth } from "providers/AuthProvider"

import Button from "components/common/Button"

const useBottomNavStyles = makeStyles(({ palette, breakpoints, spacing }) => ({
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
}))

export interface BottomNavBaseProps extends BottomNavigationProps {
    onTabChange?: (value: any) => void
}

export const BottomNavBase: FC<BottomNavBaseProps> = ({ className, onTabChange, ...rest }) => {
    const classes = useBottomNavStyles()

    return (
        <BottomNavigation
            className={cx(classes.root, className)}
            {...rest}
            onChange={(_, value) => onTabChange?.(value)}
        >
            <BottomNavigationAction
                classes={{ label: classes.label }}
                label="Home"
                icon={<Icon className={classes.icon} path={mdiBeehiveOutline} size={1} />}
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
    const { user } = useAuth()

    if (!Boolean(user)) return null

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

    return <BottomNavBase value={getValue()} onTabChange={onTabChange} />
}

const useBottomLoginStyles = makeStyles(({ palette, breakpoints, spacing }) => ({
    root: {
        backgroundColor: palette.primary.main,
        color: palette.common.white,
        maxWidth: "100%",

        [breakpoints.up("md")]: {
            display: "none",
        },
    },
    button: {
        flexGrow: 1,

        "&:not(:first-child)": {
            marginLeft: spacing(),
        },
    },
}))

export type BottomLoginBaseProps = {
    className?: string
    onLogin: () => void
    onSignup: () => void
}

export const BottomLoginBase: FC<BottomLoginBaseProps> = ({ className, onLogin, onSignup }) => {
    const classes = useBottomLoginStyles()
    const theme = useTheme()

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

export const BottomLogin = () => {
    const { login } = useAuth()

    return <BottomLoginBase onLogin={login} onSignup={login} />
}

const BottomBar = () => {
    const { user } = useAuth()

    if (user) return <BottomNav />

    return <BottomLogin />
}

export default BottomBar
