import {withStyles} from "@material-ui/core/styles"

const BlogStyles = withStyles({
    grid: {
        margin: "100px 0px",
        padding: "0px 85px",
    },
    appbar: {
        color: "#7E1014",
    },
    button: {
        borderRadius: "0px",
        margin: "0px 10px",
        height: "100%",
        fontFamily: "din-condensed-web",
        backgroundColor: "#7E1014",
        color: "#FFF9D6"
    },
    card: {
        margin: "25px 0px",
        border: "1px solid #335C67",
        borderRadius: "25px"
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
    }
});

export default BlogStyles;