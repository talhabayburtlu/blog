import {makeStyles} from "@material-ui/core"

const PostStyles = makeStyles({
    grid: {
        margin: "100px 0px",
        padding: "0px 85px",
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
    image: {
        scale: "0.2"
    }
})

export default PostStyles;