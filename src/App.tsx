import "./lib/bootstrap"

import React, { FunctionComponent } from "react"
import { AppBar, Toolbar, Typography, Box, TextField, InputAdornment } from "@material-ui/core"
import { SearchRounded } from "@material-ui/icons"

import Base from "components/Base"
import HelloWorld from "components/HelloWorld"

const App: FunctionComponent = () => (
    <Base>
        <AppBar elevation={0}>
            <Toolbar>
                <Typography variant="h6" style={{ fontWeight: 900, width: "100%" }}>
                    Animal Crossing Custom Designs
                </Typography>

                <Box>
                    <Box
                        style={{
                            borderRadius: "1em/50%",
                            background: "rgba(255,255,255,0.5)",
                            padding: "0px 1em ",
                        }}
                    >
                        <TextField
                            InputProps={{
                                disableUnderline: true,
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <SearchRounded />
                                    </InputAdornment>
                                ),
                            }}
                            placeholder="Search..."
                        />
                    </Box>
                </Box>
            </Toolbar>
        </AppBar>
        <HelloWorld />
    </Base>
)

export default App
