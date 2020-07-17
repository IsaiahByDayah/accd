import "bootstrap"

import React, { FunctionComponent } from "react"
import { Box, Container, Grid } from "@material-ui/core"
import { BrowserRouter } from "react-router-dom"

import Base from "components/Base"
import Header from "components/Header"
import LeftPanel from "components/LeftPanel"
import MiddlePanel from "components/MiddlePanel"
import RightPanel from "components/RightPanel"
import BottomNav from "components/BottomNav"

const App: FunctionComponent = () => (
    <Base>
        <BrowserRouter>
            <Box display="flex" flexDirection="column" height="100vh">
                <Header />

                <Box py={2} flexGrow={1} overflow="auto">
                    <Container>
                        <Grid container spacing={2}>
                            <LeftPanel />
                            <MiddlePanel />
                            <RightPanel />
                        </Grid>
                    </Container>
                </Box>

                <BottomNav />
            </Box>
        </BrowserRouter>
    </Base>
)

export default App
