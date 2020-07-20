import "bootstrap"

import React, { FC } from "react"
import { Container, Grid, useMediaQuery, Theme, Box } from "@material-ui/core"

import Base from "components/Base"
import LeftPanel from "components/LeftPanel"
import MiddlePanel from "components/MiddlePanel"
import RightPanel from "components/RightPanel"
import BottomLogin from "components/BottomLogin"
import Prompt from "components/Prompt"

const App: FC = () => (
    <Base>
        <Box display="flex" flexDirection="column" height="100vh">
            <AppContainer>
                <Grid container>
                    <LeftPanel />
                    <MiddlePanel />
                    <RightPanel />
                </Grid>
            </AppContainer>
            <BottomLogin />
        </Box>
        <Prompt />
    </Base>
)

const AppContainer: FC = ({ children }) => {
    const mediumDown = useMediaQuery<Theme>(({ breakpoints }) => breakpoints.down("xs"))

    return (
        <Box flexGrow={1} overflow="auto">
            <Container disableGutters={mediumDown}>
                <>{children}</>
            </Container>
        </Box>
    )
}

export default App
