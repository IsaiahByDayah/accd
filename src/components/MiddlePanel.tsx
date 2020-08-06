import React, { FC } from "react"
import { Grid, GridProps } from "@material-ui/core"

import { useAuth } from "providers/AuthProvider"

type MiddlePanelProps = {
    className?: string
    simulateUser?: boolean
}

const MiddlePanel: FC<MiddlePanelProps> = ({ className, children, simulateUser }) => {
    const { user } = useAuth()

    let gridProps: GridProps
    if (user || simulateUser) {
        gridProps = {
            xs: 12,
            sm: 10,
            md: 7,
            lg: 5,
        }
    } else {
        gridProps = {
            xs: 12,
            md: 8,
        }
    }

    return (
        <Grid className={className} item {...gridProps}>
            {children}
        </Grid>
    )
}

export default MiddlePanel
