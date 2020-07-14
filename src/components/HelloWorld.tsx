import React, { FC } from "react"
import { Typography } from "@material-ui/core"

interface HelloWorldProps {
    name?: string
}
const HelloWorld: FC<HelloWorldProps> = ({ name }) => (
    <Typography>Hello, {name && name.length > 0 ? name : "World"}!</Typography>
)

export default HelloWorld
