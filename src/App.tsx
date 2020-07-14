import React, { FunctionComponent } from "react"

import Base from "./lib/Base"

import HelloWorld from "./components/HelloWorld"

const App: FunctionComponent = () => (
    <Base>
        <HelloWorld />
    </Base>
)

export default App
