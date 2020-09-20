import {makeStyles} from "@material-ui/core"

const TabStyles = makeStyles({
    button: {
        borderRadius: "0px",
        margin: "0px 10px",
        height: "100%",
        fontFamily: "din-condensed-web",
        backgroundColor: "#7E1014",
        color: "#FFF9D6",
    },
    buttonHover: {
        "&:hover": {
            backgroundColor: "#7E1014"
        }
    },
});

export default TabStyles;