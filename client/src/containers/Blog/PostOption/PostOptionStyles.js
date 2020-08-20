import {withStyles} from "@material-ui/core/styles"

const BlogStyles = withStyles((theme) => ({
    button: {
        borderRadius: "0px",
        margin: "0px 10px",
        height: "100%",
        fontFamily: "din-condensed-web",
        backgroundColor: "#7E1014",
        color: "#FFF9D6",
    },
    title: {
        fontFamily: "adobe-garamond-pro",
        fontWeight: "bold",
        color: "#7E1014"
    },
    successButton: {
        backgroundColor: "#43A047"
    },
    failButton: {
        backgroundColor: "#E53935"
    }
}));

export default BlogStyles;