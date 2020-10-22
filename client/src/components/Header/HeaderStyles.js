import { makeStyles } from "@material-ui/core";

const HeaderStyles = makeStyles(theme => ({
    appbar: {
        [theme.breakpoints.up("xs")] : {height: "15px"},
        [theme.breakpoints.up("md")] : {height: "20px"},
    },
    gridItem: {
        [theme.breakpoints.up("xs")] : {padding: "0px 10px", },
        [theme.breakpoints.up("sm")] : {padding: "0px 40px", },
        [theme.breakpoints.up("md")] : {padding: "0px 60px", },
        [theme.breakpoints.up("lg")] : {padding: "0px 85px", },
    }, 
    navButton: {
        borderTop: "2px solid #7E1014",
        borderBottom: "2px solid #7E1014",
        borderRadius: "0px",
        fontFamily: "din-condensed-web",
        [theme.breakpoints.down("sm")] : {
            maxWidth: "40px",
            margin: "2px 0px"
        },
        [theme.breakpoints.up("sm")] : {
            width: "40px",
            height: "100%",
        },
        [theme.breakpoints.up("md")] : {
            width: "80px",
            height: "100%",
        },
        [theme.breakpoints.up("lg")] : {
            width: "120px",
            height: "100%",
        },
    },
    name: {
        color: "#7E1014",
        fontFamily: "din-condensed-web",
        [theme.breakpoints.up("xs")] : {fontSize: "1.80rem", },
        [theme.breakpoints.up("sm")] : {fontSize: "2.25rem", },
        [theme.breakpoints.up("md")] : {fontSize: "3.10rem", },
        [theme.breakpoints.up("lg")] : {fontSize: "3.25rem", },
    }
}));

export default HeaderStyles;