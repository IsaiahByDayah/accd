import React from "react"
import { Switch, Route } from "react-router-dom"
import { Grid } from "@material-ui/core"

import Homepage from "components/Homepage"

const MiddlePanel = () => {
    return (
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
    )
}

export default MiddlePanel
