import {makeStyles} from "@material-ui/core"

const BlogDrawerStyles = makeStyles(theme =>({
    root: {
        backgroundColor: "#FFF3B0",
        width: "150px"
    },
    header: {
        fontFamily: "din-condensed-web",
        color: "#7E1014",
        borderBottom: "2px solid #7E1014",
        margin: "4px 0px"
    },
    appbar: {
        height: "15px",
    },
    button: {
        borderRadius: "0px",
        fontFamily: "din-condensed-web",
        backgroundColor: "#7E1014",
        color: "#FFF9D6",
        margin: "4px 0px",
        width: "100%"
    },
    buttonHover: {
        "&:hover": {
            backgroundColor: "#7E1014"
        }
    },
    cardTitle: {
        fontFamily: "adobe-garamond-pro",
        fontWeight: "bold",
        color: "#7E1014"
    },
    snackBarSuccess: {
        backgroundColor: "#388050"
    },
    snackBarFail: {
        backgroundColor: "#7E1014"
    },
    snackBarInformation: {
        backgroundColor: "#335C67"
    },
    snackBarWarning: {
        backgroundColor: "#E09F3E"
    }
}));

export default BlogDrawerStyles;