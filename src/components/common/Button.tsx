import React, { FC } from "react"
import { makeStyles, Button as MUIButton, ButtonProps as MUIButtonProps, Theme } from "@material-ui/core"
import cx from "classnames"

const useStyles = makeStyles<Theme, { tint?: string; textContrastTint?: string }>(({ palette, typography }) => ({
    root: {
        fontWeight: "bold",
        borderRadius: `${typography.body1.fontSize}/50%`,
        letterSpacing: "2px",
    },
    text: ({ tint }) => ({
        color: tint ?? palette.primary.main,
    }),
    contained: ({ tint, textContrastTint }) => ({
        backgroundColor: tint ?? palette.primary.main,
        color: textContrastTint ?? ((tint && palette.getContrastText(tint)) || palette.common.white),

        "&:hover": {
            backgroundColor: palette.augmentColor({ main: tint ?? palette.primary.main }).light,
        },
    }),
    outlined: ({ tint }) => ({
        padding: "2px 12px",
        borderWidth: "4px",
        borderColor: palette.augmentColor({ main: tint ?? palette.primary.main }).main,
        color: palette.augmentColor({ main: tint ?? palette.primary.main }).main,

        "&:hover": {
            borderWidth: "4px",
            color: palette.augmentColor({ main: tint ?? palette.primary.main }).main,
        },
    }),
}))

export interface ButtonProps extends MUIButtonProps {
    tint?: string
    textContrastTint?: string
}

const Button: FC<ButtonProps> = ({ className, disableElevation, color, tint, textContrastTint, ...rest }) => {
    const classes = useStyles({ tint, textContrastTint })
    return (
        <MUIButton
            className={cx(classes.root, className)}
            disableElevation
            classes={{
                text: classes.text,
                contained: classes.contained,
                outlined: classes.outlined,
            }}
            {...rest}
        />
    )
}

export default Button
