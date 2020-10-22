import {withStyles} from "@material-ui/core/styles"

const BlogStyles = withStyles((theme) => ({
    button: {
        borderRadius: "10px",
        margin: "5px",
        height: "100%",
        fontFamily: "adobe-garamond-pro", 
        backgroundColor: "#7E1014",
        color: "#FFF9D6",
        "&:hover": {
            boxShadow: "3px 3px 3px 0px rgba(0,0,0,0.75);",
            backgroundColor: "#7E1014"
        }
    },
    successButton: {
        backgroundColor: "#20BF6B",
        "&:hover": {
            backgroundColor: "#26DE81"
        }
    },
    failButton: {
        backgroundColor: "#7E1014",
        "&:hover": {
            backgroundColor: "#A2151A"
        }
    },
    link: {
        textDecoration: "none"
    },
    title: {
        fontFamily: "adobe-garamond-pro",
        fontWeight: "bold",
        color: "#7E1014"
    },
    dialog: {
        backgroundColor: "#FFF3B0",
        border: "2px solid #7E1014"
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

export default BlogStyles;