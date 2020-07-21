import "bootstrap"

import React, { FC } from "react"
import { Container, Grid, useMediaQuery, Theme, Box } from "@material-ui/core"

import Base from "components/Base"
import TopContainer from "components/TopContainer"
import TopBar from "components/TopBar"
import LeftPanel from "components/LeftPanel"
import MiddlePanel from "components/MiddlePanel"
import RightPanel from "components/RightPanel"
import BottomBar from "components/BottomBar"
import Prompt from "components/Prompt"

const App: FC = () => (
    <Base>
        <Box display="flex" flexDirection="column" height="100vh">
            <TopBar />

            <Box flexGrow={1} overflow="auto">
                <TopContainer>
                    <Grid container>
                        <LeftPanel />
                        <MiddlePanel />
                        <RightPanel />
                    </Grid>
                </TopContainer>
            </Box>

            <BottomBar />
        </Box>
        <Prompt />
    </Base>
)

export default App
