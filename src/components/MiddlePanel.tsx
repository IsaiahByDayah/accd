import React from "react"
import { Switch, Route } from "react-router-dom"
import { makeStyles, Grid, Box } from "@material-ui/core"

import Header from "components/Header"
import BottomNav from "components/BottomNav"
import Homepage from "components/Homepage"

const useStyles = makeStyles(({ breakpoints, palette }) => ({
    root: {
        // background: palette.background.default,

        [breakpoints.up("sm")]: {
            borderLeft: `1px solid ${palette.primary.light}`,
            borderRight: `1px solid ${palette.primary.light}`,
        },
    },
}))

const MiddlePanel = () => {
    const classes = useStyles()
    return (
        <Grid className={classes.root} item xs={12} sm={10} md={8} lg={6}>
            <Box display="flex" flexDirection="column" height="100vh">
                <Header />

                <Box py={2} flexGrow={1} overflow="auto">
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
                </Box>

                <BottomNav />
            </Box>
        </Grid>
    )
}

export default MiddlePanel
