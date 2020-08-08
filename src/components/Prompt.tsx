import React, { FC, ReactNode } from "react"
import { makeStyles, Modal, Paper, Box, Container, IconButton, Typography } from "@material-ui/core"
import { CloseRounded, FavoriteRounded, ChatBubbleRounded, LiveHelpRounded, BeenhereRounded } from "@material-ui/icons"
import cx from "classnames"

import { usePrompt } from "providers/PromptProvider"

import Button from "components/Button"
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

interface PromptProps {
    open: boolean
    header?: ReactNode
    title?: string
    description?: string
    onClose?: () => void
}

export const PromptBase: FC<PromptProps> = ({ open, header, title, description, children, onClose }) => {
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

const useAuthStyles = makeStyles(({ spacing }) => ({
    loginButton: {
        marginBottom: spacing(2),
    },
}))

type AuthPromptReason = "like" | "comment"

export interface AuthPromptProps {
    reason: AuthPromptReason
    user: string
    onClose?: () => void
}

export const AuthPrompt: FC<AuthPromptProps> = ({ reason, user, onClose }) => {
    const classes = useAuthStyles()

    return (
        <PromptBase
            open={true}
            header={
                <Box py={3} display="flex" justifyContent="center" alignItems="center">
                    {reason === "like" ? (
                        <>
                            <FavoriteRounded color="secondary" />
                            <FavoriteRounded fontSize="large" color="secondary" />
                            <FavoriteRounded color="secondary" />
                        </>
                    ) : (
                        <>
                            <ChatBubbleRounded color="primary" />
                            <ChatBubbleRounded fontSize="large" color="primary" />
                            <ChatBubbleRounded color="primary" />
                        </>
                    )}
                </Box>
            }
            title={reason === "like" ? "Like a design to show you care!" : "Reply to join the conversation!"}
            description={
                reason === "like"
                    ? `Join now to let ${user} know you like their design.`
                    : `Join now to respond to ${user}'s design.`
            }
            onClose={onClose}
        >
            <Box py={4} display="flex" flexDirection="column">
                <Button className={classes.loginButton} variant="contained" fullWidth>
                    Log in
                </Button>
                <Button variant="outlined" fullWidth>
                    Sign up
                </Button>
            </Box>
        </PromptBase>
    )
}

const useConfirmationStyles = makeStyles(({ spacing }) => ({
    cancelButton: {
        marginTop: spacing(2),
    },
}))

export interface ConfirmationPromptProps {
    title?: string
    description?: string
    onConfirm: () => void
    onClose?: () => void
}

export const ConfirmationPrompt: FC<ConfirmationPromptProps> = ({
    title = "Are you sure?",
    description,
    onConfirm,
    onClose,
}) => {
    const classes = useConfirmationStyles()

    return (
        <PromptBase
            open={true}
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
        </PromptBase>
    )
}

const useLoginStyles = makeStyles(({ spacing }) => ({
    field: {
        "&:not(:last-child)": {
            marginBottom: spacing(),
        },
    },
    loginButton: {
        marginTop: spacing(2),
    },
}))

export interface LoginPromptProps {
    open?: boolean
    onLogin?: () => void
    onClose?: () => void
}

export const LoginPrompt: FC<LoginPromptProps> = ({ open = false, onLogin, onClose }) => {
    const classes = useLoginStyles()

    return (
        <PromptBase open={open} title="Login" description="Login to get started!" onClose={onClose}>
            <Box py={4} display="flex" flexDirection="column">
                <InputField className={classes.field} placeholder="Username" />
                <InputField className={classes.field} placeholder="Password" type="password" />
                <Button
                    className={cx(classes.field, classes.loginButton)}
                    variant="contained"
                    fullWidth
                    onClick={onLogin}
                >
                    Log In
                </Button>
            </Box>
        </PromptBase>
    )
}

const useSignupStyles = makeStyles(({ spacing }) => ({
    field: {
        "&:not(:last-child)": {
            marginBottom: spacing(),
        },
    },
    loginButton: {
        marginTop: spacing(2),
    },
}))

export interface SignupPromptProps {
    open?: boolean
    onLogin?: () => void
    onClose?: () => void
}

export const SignupPrompt: FC<SignupPromptProps> = ({ open = false, onLogin, onClose }) => {
    const classes = useSignupStyles()

    return (
        <PromptBase open={open} title="Signup" description="Signup to get started!" onClose={onClose}>
            <Box py={4} display="flex" flexDirection="column">
                <InputField className={classes.field} placeholder="Username" />
                <InputField className={classes.field} placeholder="Password" type="password" />
                <InputField className={classes.field} placeholder="Password" type="password" />
                <Button
                    className={cx(classes.field, classes.loginButton)}
                    variant="contained"
                    fullWidth
                    onClick={onLogin}
                >
                    Log In
                </Button>
            </Box>
        </PromptBase>
    )
}

const Prompt = () => {
    const { open, current } = usePrompt()

    if (!open) return null

    switch (current?.type) {
        case "login":
            return <AuthPrompt {...current} />
        case "confirm":
            return <ConfirmationPrompt {...current} />
        default:
            return null
    }
}

export default Prompt
