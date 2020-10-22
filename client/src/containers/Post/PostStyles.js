import {withStyles} from "@material-ui/core"

const PostStyles = withStyles(theme => ({
    grid: {
        [theme.breakpoints.up("xs")] : {margin: "20px 0px",padding: "0px 10px", },
        [theme.breakpoints.up("sm")] : {margin: "40px 0px",padding: "0px 40px", },
        [theme.breakpoints.up("md")] : {margin: "80px 0px", padding: "0px 60px", },
        [theme.breakpoints.up("lg")] : {margin: "100px 0px",padding: "0px 85px", },
    },
    card: {
        margin: "25px 0px",
        border: "1px solid #335C67",
        borderRadius: "15px"
    },
    cardTitle: {
        fontFamily: "adobe-garamond-pro",
        fontWeight: "bold",
        color: "#7E1014"
    },
    cardSubtitle: {
        fontFamily: "adobe-garamond-pro",
        color: "#335C67"
    },
    cardContent: {
        borderTop: "1px solid #335C67",
    },
    cardBody: {
        paddingTop: "10px",
        fontFamily: "adobe-garamond-pro"
    },
    cardButton: {
        fontFamily: "adobe-garamond-pro", 
        "&:hover": {
            backgroundColor: "#7E1014"
        }
    },
}))

export default PostStyles;