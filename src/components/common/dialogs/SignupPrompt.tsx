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
    loginButton: {
        marginTop: spacing(2),
    },
}))

export type SignupPromptProps = {
    open: boolean
    onSignup?: () => void
    onClose?: () => void
}

const SignupPrompt: FC<SignupPromptProps> = ({ open, onSignup, onClose }) => {
    const classes = useStyles()

    return (
        <Prompt open={open} title="Signup" description="Signup to get started!" onClose={onClose}>
            <Box py={4} display="flex" flexDirection="column">
                <InputField className={classes.field} placeholder="Username" />
                <InputField className={classes.field} placeholder="Password" type="password" />
                <InputField className={classes.field} placeholder="Password" type="password" />
                <Button
                    className={cx(classes.field, classes.loginButton)}
                    variant="contained"
                    fullWidth
                    onClick={onSignup}
                >
                    Log In
                </Button>
            </Box>
        </Prompt>
    )
}

export default SignupPrompt
