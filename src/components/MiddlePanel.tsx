import React from "react"
import { Switch, Route } from "react-router-dom"
import { makeStyles, Grid, Box, GridProps } from "@material-ui/core"

import { useAuth } from "providers/AuthProvider"

import RouteHeader from "components/RouteHeader"
import BottomNav from "components/BottomNav"
import Homepage from "components/Homepage"

const useStyles = makeStyles(({ breakpoints, palette }) => ({
    root: {
        // background: palette.background.default,
        // [breakpoints.up("sm")]: {
        //     borderLeft: `1px solid ${palette.primary.light}`,
        //     borderRight: `1px solid ${palette.primary.light}`,
        // },
    },
}))

const MiddlePanel = () => {
    const classes = useStyles()
    const { user } = useAuth()

    let gridProps: GridProps
    if (user) {
        gridProps = {
            xs: 12,
            sm: 10,
            md: 8,
            lg: 6,
        }
    } else {
        gridProps = {
            xs: 12,
            sm: 10,
            md: 8,
        }
    }

    return (
        <Grid className={classes.root} item {...gridProps}>
            <Box display="flex" flexDirection="column" height="100vh">
                <RouteHeader />

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
