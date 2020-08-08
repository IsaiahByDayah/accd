import React, { FC } from "react"
import { makeStyles, Theme } from "@material-ui/core"
import { fade } from "@material-ui/core/styles/colorManipulator"
import { SearchRounded } from "@material-ui/icons"

import InputField, { InputFieldProps } from "components/InputField"

const useStyles = makeStyles<Theme, { tint: string }>(({ palette }) => ({
    icon: ({ tint }) => ({
        color: fade(palette.getContrastText(tint), 0.25),
    }),
}))

const SearchBar: FC<InputFieldProps> = props => {
    const { tint = "#ffffff", inputProps } = props
    const classes = useStyles({ tint })
    return (
        <InputField
            start={<SearchRounded className={classes.icon} />}
            inputProps={{
                "aria-label": "search-bar-input-field-textfield",
                ...inputProps,
            }}
            placeholder="Search..."
        />
    )
}

export default SearchBar
