import { makeStyles } from "@material-ui/core"

const ratioToPadding = (ratio: string) => {
    const [width, height] = ratio.split(":")
    const parsedWidth = parseInt(width, 10)
    const parsedHeight = parseInt(height, 10)

    const w = isNaN(parsedWidth) ? 1 : parsedWidth
    const h = isNaN(parsedHeight) ? 1 : parsedHeight

    return (h / w) * 100
}

interface StyleProps {
    ratio: string
}

/**
 * MARK: Material-UI generated style classes for displaying a component at a specific aspect ratio
 */
export const useAspectRatioStyles = makeStyles(() => {
    return {
        wrapper: ({ ratio }: StyleProps) => ({
            height: 0,
            overflow: "hidden",
            paddingTop: `${ratioToPadding(ratio)}%`,
            position: "relative",
        }),
        content: {
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
        },
    }
})
