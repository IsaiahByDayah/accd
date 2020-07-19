import React, { FC } from "react"
import { Typography, makeStyles, Theme, TypographyProps } from "@material-ui/core"
import cx from "classnames"

const useStyles = makeStyles<Theme, { backgroundColor?: string; textColor?: string }>(
    ({ spacing, shape, palette }) => ({
        root: ({ backgroundColor, textColor }) => ({
            backgroundColor: backgroundColor ?? palette.primary.main,
            color: textColor ?? palette.common.white,
            borderRadius: shape.borderRadius,
            padding: spacing(0.25, 1),
        }),
    })
)

interface TagProps extends TypographyProps {
    backgroundColor?: string
    textColor?: string
}

const Tag: FC<TagProps> = ({ children, className, backgroundColor, textColor, ...rest }) => {
    const classes = useStyles({ backgroundColor })

    return (
        <Typography variant="caption" className={cx(classes.root, className)} {...rest}>
            {children}
        </Typography>
    )
}

export default Tag
