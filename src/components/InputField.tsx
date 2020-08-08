import React, { FC, ReactNode } from "react"
import { Box, TextField, InputAdornment, makeStyles, StandardTextFieldProps, Theme } from "@material-ui/core"
import { fade } from "@material-ui/core/styles/colorManipulator"
import cx from "classnames"

const useStyles = makeStyles<Theme, { tint: string; opacity: number }>(({ spacing, palette, typography }) => ({
    root: ({ tint, opacity }) => ({
        padding: spacing(0, 2),
        background: fade(tint, opacity),
        borderRadius: `${typography.body1.fontSize}/50%`,
    }),
    input: ({ tint }) => ({
        "&::placeholder": {
            color: fade(palette.getContrastText(tint), 0.75),
        },
    }),
    icon: ({ tint }) => ({
        color: fade(palette.getContrastText(tint), 0.25),
    }),
}))

export interface InputFieldProps extends StandardTextFieldProps {
    tint?: string
    opacity?: number
    end?: ReactNode
    start?: ReactNode
}

const InputField: FC<InputFieldProps> = ({
    className,
    tint = "#ffffff",
    opacity = 0.5,
    InputProps,
    inputProps,
    end,
    start,
    ...rest
}) => {
    const classes = useStyles({ tint, opacity })
    return (
        <Box className={cx(classes.root, className)}>
            <TextField
                fullWidth
                InputProps={{
                    ...InputProps,
                    disableUnderline: true,
                    endAdornment: end && <InputAdornment position="end">{end}</InputAdornment>,
                    startAdornment: start && <InputAdornment position="start">{start}</InputAdornment>,
                    classes: {
                        input: classes.input,
                    },
                }}
                inputProps={{
                    "aria-label": "input-field-textfield",
                    ...inputProps,
                }}
                {...rest}
            />
        </Box>
    )
}

export default InputField
