import React, { FC, ReactNode } from "react"
import { makeStyles, Modal, Paper, Container, IconButton, Typography } from "@material-ui/core"
import { CloseRounded } from "@material-ui/icons"

const useStyles = makeStyles(({ spacing }) => ({
    root: {
        display: "flex",
        placeItems: "center",
    },
    paper: {
        position: "relative",
    },
    title: {},
    description: {},
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
        <Modal className={classes.root} open={open}>
            <Paper className={classes.paper}>
                <Container>
                    {header}
                    {title && <Typography className={classes.title}>{title}</Typography>}
                    {description && <Typography className={classes.description}>{description}</Typography>}
                    {children}
                </Container>
                {onClose && (
                    <IconButton className={classes.closeButton} onClick={onClose}>
                        <CloseRounded className={classes.closeIcon} />
                    </IconButton>
                )}
            </Paper>
        </Modal>
    )
}

const Prompt = () => {
    const classes = useStyles()
    return <PromptBase open={false} />
}

export default Prompt
