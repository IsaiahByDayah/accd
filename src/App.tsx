import "bootstrap"

import React, { FunctionComponent } from "react"
import { Box, Container, Grid } from "@material-ui/core"
// import { BrowserRouter } from "react-router-dom"

// import PromptProvider from "providers/PromptProvider"

import Base from "components/Base"
import Header from "components/Header"
import LeftPanel from "components/LeftPanel"
import MiddlePanel from "components/MiddlePanel"
import RightPanel from "components/RightPanel"
import BottomNav from "components/BottomNav"
import Prompt from "components/Prompt"

const App: FunctionComponent = () => (
    <Base>
        {/* <Box display="flex" flexDirection="column" height="100vh"> */}
        {/* <Header /> */}

        {/* <Box py={2} flexGrow={1} overflow="auto"> */}
        <Container disableGutters>
            {/* <Grid container spacing={2}> */}
            <Grid container>
                <LeftPanel />
                <MiddlePanel />
                <RightPanel />
            </Grid>
        </Container>
        {/* </Box> */}

        {/* <BottomNav /> */}
        {/* </Box> */}
        <Prompt />
    </Base>
)

export default App
