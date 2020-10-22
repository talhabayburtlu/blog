import {makeStyles} from "@material-ui/core"

const TabStyles = makeStyles(theme =>({
    button: {
        borderRadius: "0px",
        fontFamily: "din-condensed-web",
        backgroundColor: "#7E1014",
        color: "#FFF9D6",
        height: "35px",
    },
    buttonHover: {
        "&:hover": {
            backgroundColor: "#7E1014"
        }
    },
    header: {
        fontFamily: "din-condensed-web",
        color: "#FFF9D6",
    },    
    nested: {
        backgroundColor: "#7E1014",
        paddingLeft: theme.spacing(5),
    },
    root: {
        padding: 0
    }
}));

export default TabStyles;