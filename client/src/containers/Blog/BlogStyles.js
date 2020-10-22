import {withStyles} from "@material-ui/core/styles"

const BlogStyles = withStyles((theme) => ({
    grid: {
        [theme.breakpoints.up("xs")] : {margin: "20px 0px",padding: "0px 10px", },
        [theme.breakpoints.up("sm")] : {margin: "40px 0px",padding: "0px 40px", },
        [theme.breakpoints.up("md")] : {margin: "80px 0px", padding: "0px 60px", },
        [theme.breakpoints.up("lg")] : {margin: "100px 0px",padding: "0px 85px", },
    },
    appbar: {
        color: "#7E1014",
    },
    title: {
        fontFamily: "adobe-garamond-pro",
        fontWeight: "bold",
    },
    button: {
        borderRadius: "10px",
        margin: "0px 10px",
        height: "100%",
        fontFamily: "din-condensed-web",
        backgroundColor: "#7E1014",
        color: "#FFF9D6",
        "&:hover": {
            boxShadow: "3px 3px 3px 0px rgba(0,0,0,0.75);",
        }
    },
    link: {
        textDecoration: "none"
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
    cardBody: {
        paddingTop: "10px",
        borderTop: "1px solid #335C67",
        fontFamily: "adobe-garamond-pro"
    },
    cardButton: {
        fontFamily: "adobe-garamond-pro", 
        "&:hover": {
            backgroundColor: "#7E1014"
        }
    },
    image:{
        //margin: "20px 15px",
        width: "75px",
        height: "75px",
        border: "1px solid #335C67", 
        borderRadius: "10px"
    },
    popover: {
        backgroundColor: "#FFF9D6",
        padding: "30px",
        width: "250px",
        height: "250px"   
    },
    dialog: {
        backgroundColor: "#FFF3B0"
    },
    successButton: {
        backgroundColor: "#43A047"
    },
    failButton: {
        backgroundColor: "#E53935"
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
}), {withTheme: true});

export default BlogStyles;