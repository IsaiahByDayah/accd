import React, { FC } from "react"
import { Paper, Box, Typography, Avatar, IconButton, Icon, Grid, colors, Color, makeStyles } from "@material-ui/core"
import { FavoriteRounded, FavoriteBorderRounded } from "@material-ui/icons"
import cx from "classnames"

import Tag from "components/Tag"

const useStyles = makeStyles(({ spacing, shape, typography, palette }) => ({
    root: {
        maxWidth: spacing(100),
    },
    title: {
        fontWeight: "bold",
    },
    code: {
        color: palette.secondary.dark,
        marginLeft: spacing(),
    },
    image: {
        maxWidth: "100%",
        width: "100%",
        backgroundPosition: "center",
        backgroundSize: "cover",
        borderRadius: shape.borderRadius,
        flexShrink: 0,
        flexGrow: 0,
    },
    topImage: {
        height: spacing(20),
    },
    bottomImage: {
        height: spacing(10),
    },
    avatar: {
        height: spacing(3),
        width: spacing(3),
    },
    creatorName: {
        marginLeft: spacing(),
        flexShrink: 0,
        fontSize: typography.body2.fontSize,
    },
    tags: {
        display: "flex",
        flexGrow: 1,
        overflow: "hidden",
    },
    tag: {
        marginRight: spacing(),
    },
    favorited: {
        color: palette.secondary.main,
    },
}))

type DesignCardProps = {
    title: string
    code: string
    images: string[]
    tags: string[]
    creatorImage?: string
    creatorName: string
    favorited?: boolean
    onFavoriteClick?: () => void
}

const DesignCard: FC<DesignCardProps> = ({
    title,
    code,
    images,
    tags,
    creatorImage,
    creatorName,
    favorited,
    onFavoriteClick,
}) => {
    const classes = useStyles()

    return (
        <Paper className={classes.root}>
            <Box px={3} py={2}>
                <Box display="flex" alignItems="center">
                    <Typography className={classes.title}>{title}</Typography>
                    <Typography className={classes.code}>#{code}</Typography>
                </Box>

                {images.length > 0 && (
                    <Box pt={1}>
                        <Grid container spacing={2}>
                            {images.slice(0, 4).map((image, index) => (
                                <Grid key={`${index}-${image}`} item xs={index === 0 ? 12 : 4}>
                                    <Box
                                        className={cx(classes.image, {
                                            [classes.topImage]: index === 0,
                                            [classes.bottomImage]: index > 0,
                                        })}
                                        style={{
                                            backgroundImage: `url(${image})`,
                                        }}
                                    />
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                )}

                <Box pt={1} display="flex" alignItems="center">
                    <Avatar className={classes.avatar} alt={`${creatorName}'s Profile Picture`} src={creatorImage} />
                    <Typography className={classes.creatorName}>{creatorName}</Typography>
                    <Box className={classes.tags} mx={2}>
                        {tags.map((tag, index) => (
                            <Box key={`${index}-${tag}`} className={classes.tag}>
                                <Tag>{tag}</Tag>
                            </Box>
                        ))}
                    </Box>
                    <IconButton onClick={onFavoriteClick}>
                        <Icon>
                            {favorited ? <FavoriteRounded className={classes.favorited} /> : <FavoriteBorderRounded />}
                        </Icon>
                    </IconButton>
                </Box>
            </Box>
        </Paper>
    )
}

export default DesignCard
