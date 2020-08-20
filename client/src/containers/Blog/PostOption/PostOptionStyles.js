import {withStyles} from "@material-ui/core/styles"

const BlogStyles = withStyles((theme) => ({
    button: {
        margin: "5px 10px",
        height: "100%",
        fontFamily: "adobe-garamond-pro", 
        backgroundColor: "#7E1014",
        color: "#FFF9D6",
        "&:hover": {
            backgroundColor: "#7E1014"
        }
    },
    successButton: {
        backgroundColor: "#43A047"
    },
    failButton: {
        backgroundColor: "#E53935"
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
        backgroundColor: "#FFF3B0"
    }
    
}));

export default BlogStyles;