import React, { FC } from "react"
import { makeStyles, Button as MUIButton, ButtonProps } from "@material-ui/core"
import cx from "classnames"

const useStyles = makeStyles(({ palette, typography }) => ({
    root: {
        fontWeight: "bold",
        borderRadius: `${typography.body1.fontSize}/50%`,
        letterSpacing: "2px",
    },
    contained: {
        color: palette.common.white,
    },
    outlined: {
        padding: "2px 12px",
        borderWidth: "4px",
        color: palette.primary.light,

        "&:hover": {
            borderWidth: "4px",
            color: palette.primary.main,
        },
    },
}))

const Button: FC<ButtonProps> = ({ className, disableElevation, color, ...rest }) => {
    const classes = useStyles()
    return (
        <MUIButton
            className={cx(classes.root, className)}
            disableElevation
            color="primary"
            classes={{
                contained: classes.contained,
                outlined: classes.outlined,
            }}
            {...rest}
        />
    )
}

export default Button
