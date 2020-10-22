import {makeStyles} from "@material-ui/core"

const BlogNavbarStyles = makeStyles(theme => ({
    appbar: {
        color: "#7E1014",
    },
    button: {
        borderRadius: "7px",
        margin: "0px 10px",
        height: "100%",
        fontFamily: "din-condensed-web",
        backgroundColor: "#7E1014",
        color: "#FFF9D6",
        [theme.breakpoints.up("sm")] : {fontSize: "12px" },
        [theme.breakpoints.up("md")] : {fontSize: "15px"},
    },
    buttonHover: {
        "&:hover": {
            backgroundColor: "#7E1014",
            boxShadow: "3px 3px 3px 0px rgba(0,0,0,0.75);",
        }
    },
    cardTitle: {
        fontFamily: "adobe-garamond-pro",
        fontWeight: "bold",
        color: "#7E1014",
        margin: "5px 0px"
    },
    popover: {
        backgroundColor: "#FFF9D6",
        padding: "30px",
        width: "250px",
        height: "250px",
    },
    link: {
        textDecoration: "none"
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

export default BlogNavbarStyles;