import React, { FC } from "react"
import { Box, TextField, InputAdornment, makeStyles, StandardTextFieldProps, Theme } from "@material-ui/core"
import { fade } from "@material-ui/core/styles/colorManipulator"
import { SearchRounded } from "@material-ui/icons"
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

interface SearchBarProps extends StandardTextFieldProps {
    tint?: string
    opacity?: number
}

const SearchBar: FC<SearchBarProps> = ({
    className,
    tint = "#ffffff",
    opacity = 0.5,
    InputProps,
    inputProps,
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
                    endAdornment: (
                        <InputAdornment position="end">
                            <SearchRounded className={classes.icon} />
                        </InputAdornment>
                    ),
                    classes: {
                        input: classes.input,
                    },
                }}
                inputProps={{
                    "aria-label": "search-bar-textfield",
                    ...inputProps,
                }}
                placeholder="Search..."
                {...rest}
            />
        </Box>
    )
}

export default SearchBar
