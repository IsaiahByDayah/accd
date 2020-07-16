import "bootstrap"

import React, { FunctionComponent } from "react"
import { Box, Container, Grid } from "@material-ui/core"
import { BrowserRouter, Switch, Route } from "react-router-dom"

import Base from "components/Base"
import Header from "components/Header"
import { RoutedBottomNav } from "components/BottomNav"
import Homepage from "components/Homepage"

const App: FunctionComponent = () => (
    <Base>
        <BrowserRouter>
            <Box display="flex" flexDirection="column" height="100vh">
                <Header />

                <Box py={2} flexGrow={1} overflow="auto">
                    <Container>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={2} md={3}>
                                <Box bgcolor="red">Left Panel</Box>
                            </Grid>
                            <Grid item xs={12} sm={10} md={6}>
                                <Switch>
                                    <Route path="/favorites">
                                        <Homepage />
                                    </Route>
                                    <Route path="/search">
                                        <Homepage />
                                    </Route>
                                    <Route path="/dashboard">
                                        <Homepage />
                                    </Route>
                                    <Route exact path="/">
                                        <Homepage />
                                    </Route>
                                </Switch>
                            </Grid>
                            <Grid item xs={12} sm={2} md={3}>
                                <Box bgcolor="blue">Right Panel</Box>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>
                <RoutedBottomNav />
            </Box>
        </BrowserRouter>
        {/* <DesignCard
            title={"Some Title"}
            code={"0000-0000-0000"}
            images={new Array(4).fill(placeholderImage({ h: 900, w: 1600 }))}
            tags={new Array(3).fill("Tag")}
            creatorName={"John Doe"}
        /> */}
    </Base>
)

export default App
