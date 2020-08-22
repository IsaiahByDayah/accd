import React, { FC } from "react"
import { makeStyles, Box } from "@material-ui/core"
import cx from "classnames"

import Button from "components/common/Button"
import InputField from "components/InputField"
import Prompt from "components/common/dialogs/Prompt"

const useStyles = makeStyles(({ spacing }) => ({
    field: {
        "&:not(:last-child)": {
            marginBottom: spacing(),
        },
    },
    button: {
        marginTop: spacing(2),
    },
}))

export type LoginPromptProps = {
    open: boolean
    onLogin?: () => void
    onClose?: () => void
}

const LoginPrompt: FC<LoginPromptProps> = ({ open, onLogin, onClose }) => {
    const classes = useStyles()

    return (
        <Prompt open={open} title="Login" description="Login to get started!" onClose={onClose}>
            <Box py={4} display="flex" flexDirection="column">
                <InputField className={classes.field} placeholder="Username" />
                <InputField className={classes.field} placeholder="Password" type="password" />
                <Button className={cx(classes.field, classes.button)} variant="contained" fullWidth onClick={onLogin}>
                    Log In
                </Button>
            </Box>
        </Prompt>
    )
}

export default LoginPrompt
