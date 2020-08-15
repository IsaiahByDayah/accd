import React, { FC } from "react"
import { makeStyles, BottomNavigation, BottomNavigationAction, BottomNavigationProps } from "@material-ui/core"
import { FavoriteRounded, ExploreRounded } from "@material-ui/icons"
import Icon from "@mdi/react"
import { mdiBeehiveOutline } from "@mdi/js"
import cx from "classnames"
import { useRouteMatch, useHistory } from "react-router-dom"

import { useAuth } from "providers/AuthProvider"

const useBaseStyles = makeStyles(({ palette }) => ({
    root: {
        backgroundColor: palette.primary.main,
        color: palette.common.white,
        maxWidth: "100%",
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
    const classes = useBaseStyles()

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

const useStyles = makeStyles(({ breakpoints }) => ({
    root: {
        [breakpoints.up("sm")]: {
            display: "none",
        },
    },
}))

const BottomNav = () => {
    const classes = useStyles()
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

    return <BottomNavBase className={classes.root} value={getValue()} onTabChange={onTabChange} />
}

export default BottomNav
