import React, { FC } from "react"
import { Paper, Box, Typography, Avatar, IconButton, Icon } from "@material-ui/core"
import { FavoriteOutlined } from "@material-ui/icons"

import { placeholderImage } from "../lib/utils/image"

type DesignCardProps = {
    title: string
    tags?: string[]
    creatorName: string
}

const DesignCard: FC<DesignCardProps> = ({ title, tags = [], creatorName }) => (
    <Paper>
        <Box p={2}>
            <Box display="flex" alignItems="center">
                <Typography style={{ fontWeight: 700 }}>{title}</Typography>
                <Typography style={{ color: "rgba(0,0,0,0.4)", marginLeft: 5 }}>#0000-0000-0000</Typography>
            </Box>
            {/* <CardMedia image={placeholderImage({ h: 500, w: 1000 })}  /> */}
            <Box
                mt={1}
                style={{
                    maxWidth: "100%",
                    backgroundImage: `url(${placeholderImage({ h: 100, w: 1000 })})`,
                    height: 200,
                    width: "100%",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    borderRadius: 10,
                }}
            />

            <Box pt={1} display="flex" alignItems="center">
                <Avatar alt={`${creatorName}'s Profile Picture`} />
                <Typography style={{ marginLeft: 5 }}>{creatorName}</Typography>
                <Box display="flex" mx={2} flexGrow={1}>
                    {tags.map(tag => (
                        <Typography
                            variant="caption"
                            style={{
                                backgroundColor: "#2EC4B6",
                                color: "white",
                                // fontWeight: 600,
                                borderRadius: 10,
                                padding: 5,
                                marginRight: 5,
                                "&:last-child": {
                                    marginRight: 0,
                                },
                            }}
                        >
                            {tag}
                        </Typography>
                    ))}
                </Box>
                <IconButton>
                    <Icon>
                        <FavoriteOutlined />
                    </Icon>
                </IconButton>
            </Box>
        </Box>
    </Paper>
)

export default DesignCard
