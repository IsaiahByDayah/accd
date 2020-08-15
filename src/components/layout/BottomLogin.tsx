import React, { FC } from "react"
import { makeStyles, useTheme, Box } from "@material-ui/core"
import cx from "classnames"

import { useAuth } from "providers/AuthProvider"

import Button from "components/common/Button"

const useBaseStyles = makeStyles(({ palette, spacing }) => ({
    root: {
        backgroundColor: palette.primary.main,
        color: palette.common.white,
        maxWidth: "100%",
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
    const classes = useBaseStyles()
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

const useStyles = makeStyles(({ breakpoints }) => ({
    root: {
        [breakpoints.up("md")]: {
            display: "none",
        },
    },
}))

const BottomLogin = () => {
    const classes = useStyles()
    const { login } = useAuth()

    return <BottomLoginBase className={classes.root} onLogin={login} onSignup={login} />
}

export default BottomLogin
