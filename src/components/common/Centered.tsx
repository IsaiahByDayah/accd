import React, { FC } from "react"
import { Box, BoxProps } from "@material-ui/core"

export type CenteredProps = BoxProps

const Centered: FC<CenteredProps> = ({ children, ...rest }) => (
  <Box height="100%" width="100%" display="flex" justifyContent="center" alignItems="center" {...rest}>
    {children}
  </Box>
)

export default Centered
