import { makeStyles } from "@material-ui/core"

export const useAdditionalGlobalStyles = makeStyles(() => ({
    /**
     * MARK: Add any global styles you might want on the page here...
     * Example:
     */
    "@global": {
        // a: {
        //     textDecoration: "none",
        //     color: "inherit",
        //     transition: "text-decoration 0.5s ease",
        // },
        // "a:visited": {
        //     color: "inherit",
        // },
        // "a:hover": {
        //     textDecoration: "underline",
        // },
    },
}))
