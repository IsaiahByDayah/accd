import { storiesOf } from "@storybook/react"
import React from "react"
import { boolean } from "@storybook/addon-knobs"
import { makeStyles, Grid } from "@material-ui/core"
import cx from "classnames"

import LeftPanel from "components/LeftPanel"
import MiddlePanel from "components/MiddlePanel"
import RightPanel from "components/RightPanel"

const useStyles = makeStyles({
    panel: {
        height: 200,
        color: "#fff",
    },
    left: {
        backgroundColor: "#ef476f",
    },
    middle: {
        backgroundColor: "#06d6a0",
    },
    right: {
        backgroundColor: "#118ab2",
    },
})

storiesOf("Components", module).add("Panels", () => <Wrapper />)

const Wrapper = () => {
    const classes = useStyles()
    const simulateUser = boolean("Simulated User Logged In?", false)

    return (
        <Grid container>
            <LeftPanel className={cx(classes.panel, classes.left)} simulateUser={simulateUser}>
                Left Panel
            </LeftPanel>
            <MiddlePanel className={cx(classes.panel, classes.middle)} simulateUser={simulateUser}>
                Middle Panel
            </MiddlePanel>
            <RightPanel className={cx(classes.panel, classes.right)} simulateUser={simulateUser}>
                Right Panel
            </RightPanel>
        </Grid>
    )
}
