import { makeStyles } from "@material-ui/core";

const HesaplarımStyles = makeStyles({
    generalContainer: {
        marginTop: "100px",
        padding: "0px 10%"
    },
    card: {
        margin: "25px 10px",
        width: "100%",
        backgroundColor: "#7E1014",
        borderRadius: "25px",
    },
    header: {
        backgroundColor: "#7E1014",
        padding: "25px",
        height: "35%"
    },
    content: {
        backgroundColor: "#335C67",
        padding: "10px 25px",
        borderRadius: "25px"
    },
    iconButton: {
        backgroundColor: "#FFF9D6",
        borderRadius: "5px",
        width: "80%",
        borderRadius: "15px",
        "&:hover": {
            backgroundColor: "#FFF3AD",
        }
    },
    mediaName: {
        fontFamily: "adobe-garamond-pro",
    },
    icon: {
        marginRight: "5%",
    },
    title: {
        padding: "0px 25px",
        fontFamily: "adobe-garamond-pro",
        backgroundColor: "#FFF9D6",
        border: "2px solid #7E1014",
        borderRadius: "10px",
    }
});

export default HesaplarımStyles;