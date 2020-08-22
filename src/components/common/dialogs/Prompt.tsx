import React, { FC, ReactNode } from "react"
import { makeStyles, Modal, Paper, Box, Container, IconButton, Typography } from "@material-ui/core"
import { CloseRounded, FavoriteRounded, ChatBubbleRounded, LiveHelpRounded, BeenhereRounded } from "@material-ui/icons"
import cx from "classnames"

import { usePrompt } from "providers/PromptProvider"

import Button from "components/common/Button"
import InputField from "components/InputField"

const useStyles = makeStyles(({ spacing, breakpoints }) => ({
    root: {
        display: "flex",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
    },
    paper: {
        outline: 0,
        position: "relative",

        [breakpoints.down("xs")]: {
            height: "100vh",
            width: "100vw",
        },
    },
    container: {
        height: "100%",
        width: "100%",
        display: "flex",
        placeItems: "center",
    },
    title: {
        fontWeight: "bold",
        marginBottom: spacing(2),
    },
    description: {
        marginBottom: spacing(2),
    },
    closeButton: {
        position: "absolute",
        top: spacing(),
        left: spacing(),
    },
    closeIcon: {},
}))

export type PromptProps = {
    open: boolean
    header?: ReactNode
    title?: string
    description?: string
    onClose?: () => void
}

const Prompt: FC<PromptProps> = ({ open, header, title, description, children, onClose }) => {
    const classes = useStyles()
    return (
        <Modal className={classes.root} open={open} onClose={onClose}>
            <Paper className={classes.paper}>
                <Box className={classes.container} px={2} py={6}>
                    <Container>
                        {header}
                        {title && (
                            <Typography className={classes.title} variant="h5" align="center">
                                {title}
                            </Typography>
                        )}
                        {description && (
                            <Typography className={classes.description} align="center" variant="body2">
                                {description}
                            </Typography>
                        )}
                        {children}
                    </Container>
                </Box>
                {onClose && (
                    <IconButton className={classes.closeButton} onClick={onClose}>
                        <CloseRounded className={classes.closeIcon} />
                    </IconButton>
                )}
            </Paper>
        </Modal>
    )
}

export default Prompt

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
