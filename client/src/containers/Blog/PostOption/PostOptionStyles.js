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
    
    
}));

export default BlogStyles;