import React, { FC } from "react"
import { useMediaQuery, Theme, Container } from "@material-ui/core"

const TopContainer: FC = ({ children }) => {
    const mediumDown = useMediaQuery<Theme>(({ breakpoints }) => breakpoints.down("xs"))

    return (
        <Container disableGutters={mediumDown}>
            <>{children}</>
        </Container>
    )
}

export default TopContainer
