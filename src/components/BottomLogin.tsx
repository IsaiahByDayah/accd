import React, { FC } from "react"
import { makeStyles, Box, useTheme } from "@material-ui/core"
import cx from "classnames"

import { useAuth } from "providers/AuthProvider"

import Button from "components/Button"

const useStyles = makeStyles(({ palette, breakpoints, spacing }) => ({
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

interface BottomLoginBaseProps {
    className?: string
    onLogin: () => void
    onSignup: () => void
}

export const BottomLoginBase: FC<BottomLoginBaseProps> = ({ className, onLogin, onSignup }) => {
    const classes = useStyles()
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
    const { user, login } = useAuth()

    if (Boolean(user)) return null

    return <BottomLoginBase onLogin={login} onSignup={login} />
}

export default BottomLogin
