import React, { FC } from "react"
import { Box, TextField, InputAdornment, makeStyles, StandardTextFieldProps } from "@material-ui/core"
import { SearchRounded } from "@material-ui/icons"
import cx from "classnames"

const useStyles = makeStyles(({ spacing, palette, typography }) => ({
    root: {
        padding: spacing(0, 2),
        background: "rgba(255,255,255,0.5)",
        borderRadius: `${typography.body1.fontSize}/50%`,
    },
    icon: {
        color: palette.text.hint,
    },
}))

const SearchBar: FC<StandardTextFieldProps> = ({ className, InputProps, inputProps, ...rest }) => {
    const classes = useStyles()
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
