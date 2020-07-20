import React, { FC, ReactNode } from "react"
import { makeStyles, List, ListItem, ListItemIcon, ListItemText, Theme, useTheme } from "@material-ui/core"
import Icon from "@mdi/react"
import { mdiBeehiveOutline } from "@mdi/js"
import cx from "classnames"

const useItemStyles = makeStyles<Theme, { tint?: string; activeTint?: string }>(({ palette }) => ({
    root: ({ tint }) => ({
        color: tint ?? palette.common.white,
    }),
    active: ({ activeTint }) => ({
        color: activeTint ?? palette.primary.main,
    }),
    primary: {
        fontWeight: 900,
    },
}))

interface SideNavigationItemProps {
    label: string
    icon?: ReactNode
    getIcon?: (active: boolean, tint: string, activeTint: string) => ReactNode
    tint?: string
    activeTint?: string
    shrink?: boolean
    active?: boolean
    onClick?: () => void
}

export const SideNavigationItem: FC<SideNavigationItemProps> = ({
    icon,
    getIcon,
    label,
    tint,
    activeTint,
    shrink,
    active = false,
    onClick,
}) => {
    const classes = useItemStyles({ tint, activeTint })
    const theme = useTheme()

    const _icon =
        icon ?? getIcon?.(active, tint ?? theme.palette.common.white, activeTint ?? theme.palette.primary.main) ?? null

    return (
        <ListItem className={cx(classes.root, { [classes.active]: active })} button onClick={onClick}>
            {_icon && <ListItemIcon>{_icon}</ListItemIcon>}
            {!shrink && <ListItemText primary={label} classes={{ primary: classes.primary }} />}
        </ListItem>
    )
}

const useNavigationStyles = makeStyles(({}) => ({
    root: {},
}))

export const SideNavigationBase: FC = ({ children }) => {
    const classes = useNavigationStyles()
    return <List className={classes.root}>{children}</List>
}

const SideNavigation: FC = () => {
    return (
        <SideNavigationBase>
            <SideNavigationItem
                getIcon={(active, tint, activeTint) => (
                    <Icon path={mdiBeehiveOutline} size={1} color={active ? activeTint : tint} />
                )}
                label="Home"
            />
        </SideNavigationBase>
    )
}

export default SideNavigation
