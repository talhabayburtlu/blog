import { makeStyles } from "@material-ui/core";
import shadows from "@material-ui/core/styles/shadows";

const HeaderStyles = makeStyles({
    appbar: {
        height:"20px"
    }, 
    navButton: {
        borderTop: "2px solid #7E1014",
        borderBottom: "2px solid #7E1014",
        borderRadius: "0px",
        minWidth: "120px",
        height: "100%",
        fontFamily: "din-condensed-web",
    },
    name: {
        color: "#7E1014",
        fontFamily: "din-condensed-web",
        fontSize: "2.85rem"
    }
});

export default HeaderStyles;