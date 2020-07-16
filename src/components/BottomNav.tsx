import React, { FC } from "react"
import { BottomNavigation, BottomNavigationAction, Button, makeStyles, BottomNavigationProps } from "@material-ui/core"
import { HomeRounded, FavoriteRounded, ExploreRounded } from "@material-ui/icons"
import cx from "classnames"
import { useRouteMatch, useHistory } from "react-router-dom"

const useStyles = makeStyles(({ palette }) => ({
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

interface BottomNavProps extends BottomNavigationProps {
    onTabChange?: (value: any) => void
}

const BottomNav: FC<BottomNavProps> = ({ className, onTabChange, ...rest }) => {
    const classes = useStyles()
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

export const RoutedBottomNav = () => {
    const history = useHistory()
    // const homeMatch = useRouteMatch({
    //     path: "/",
    //     exact: true,
    // })
    const exploreMatch = useRouteMatch({
        path: "/explore",
    })
    const favoritesMatch = useRouteMatch({
        path: "/favorites",
    })

    const getValue = () => {
        if (exploreMatch) return 1
        if (favoritesMatch) return 2
        return 0
    }

    const onTabChange = (value: any) => {
        if (value === 0) history.push("/")
        if (value === 1) history.push("/explore")
        if (value === 2) history.push("/favorites")
    }

    return <BottomNav value={getValue()} onTabChange={onTabChange} />
}

export default BottomNav
