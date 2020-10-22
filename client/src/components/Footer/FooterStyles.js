import { makeStyles } from "@material-ui/core";

const FooterStyles = makeStyles(theme => ({
    container: {
        marginTop: "100px",
        backgroundColor: "#7E1014",
        position: "relative",
        bottom: "0",
        [theme.breakpoints.up("xm")] : {
            height: "300px",
        },
        [theme.breakpoints.up("md")] : {
            height: "225px",
        },
    },
    paragraph: {
        fontFamily: "proxima-nova",
        color: "#FFF3B0"
    },
    icon: {
        color: "#FFF3B0"
    }
}));

export default FooterStyles;