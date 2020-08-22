import React, { FC } from "react"
import { makeStyles, Box } from "@material-ui/core"
import { BeenhereRounded } from "@material-ui/icons"

import Button from "components/common/Button"
import Prompt from "components/common/dialogs/Prompt"

const useStyles = makeStyles(({ spacing }) => ({
    cancelButton: {
        marginTop: spacing(2),
    },
}))

export type ConfirmationPromptProps = {
    open: boolean
    title?: string
    description?: string
    onConfirm: () => void
    onClose?: () => void
}

const ConfirmationPrompt: FC<ConfirmationPromptProps> = ({
    open,
    title = "Are you sure?",
    description,
    onConfirm,
    onClose,
}) => {
    const classes = useStyles()

    return (
        <Prompt
            open={open}
            title={title}
            description={description}
            header={
                <Box py={3} display="flex" justifyContent="center" alignItems="center">
                    <BeenhereRounded color="secondary" />
                    <BeenhereRounded fontSize="large" color="primary" />
                    <BeenhereRounded htmlColor="#FF9F1C" />
                </Box>
            }
            onClose={onClose}
        >
            <Box py={4} display="flex" flexDirection="column">
                <Button variant="contained" fullWidth onClick={onConfirm}>
                    Confirm
                </Button>
                {onClose && (
                    <Button className={classes.cancelButton} variant="outlined" fullWidth onClick={onClose}>
                        Cancel
                    </Button>
                )}
            </Box>
        </Prompt>
    )
}

export default ConfirmationPrompt

// const useLoginStyles = makeStyles(({ spacing }) => ({
//     field: {
//         "&:not(:last-child)": {
//             marginBottom: spacing(),
//         },
//     },
//     loginButton: {
//         marginTop: spacing(2),
//     },
// }))

// export interface LoginPromptProps {
//     open?: boolean
//     onLogin?: () => void
//     onClose?: () => void
// }

// export const LoginPrompt: FC<LoginPromptProps> = ({ open = false, onLogin, onClose }) => {
//     const classes = useLoginStyles()

//     return (
//         <PromptBase open={open} title="Login" description="Login to get started!" onClose={onClose}>
//             <Box py={4} display="flex" flexDirection="column">
//                 <InputField className={classes.field} placeholder="Username" />
//                 <InputField className={classes.field} placeholder="Password" type="password" />
//                 <Button
//                     className={cx(classes.field, classes.loginButton)}
//                     variant="contained"
//                     fullWidth
//                     onClick={onLogin}
//                 >
//                     Log In
//                 </Button>
//             </Box>
//         </PromptBase>
//     )
// }

// const useSignupStyles = makeStyles(({ spacing }) => ({
//     field: {
//         "&:not(:last-child)": {
//             marginBottom: spacing(),
//         },
//     },
//     loginButton: {
//         marginTop: spacing(2),
//     },
// }))

// export interface SignupPromptProps {
//     open?: boolean
//     onLogin?: () => void
//     onClose?: () => void
// }

// export const SignupPrompt: FC<SignupPromptProps> = ({ open = false, onLogin, onClose }) => {
//     const classes = useSignupStyles()

//     return (
//         <PromptBase open={open} title="Signup" description="Signup to get started!" onClose={onClose}>
//             <Box py={4} display="flex" flexDirection="column">
//                 <InputField className={classes.field} placeholder="Username" />
//                 <InputField className={classes.field} placeholder="Password" type="password" />
//                 <InputField className={classes.field} placeholder="Password" type="password" />
//                 <Button
//                     className={cx(classes.field, classes.loginButton)}
//                     variant="contained"
//                     fullWidth
//                     onClick={onLogin}
//                 >
//                     Log In
//                 </Button>
//             </Box>
//         </PromptBase>
//     )
// }

// const Prompt = () => {
//     const { open, current } = usePrompt()

//     if (!open) return null

//     switch (current?.type) {
//         case "login":
//             return <AuthPrompt {...current} />
//         case "confirm":
//             return <ConfirmationPrompt {...current} />
//         default:
//             return null
//     }
// }
