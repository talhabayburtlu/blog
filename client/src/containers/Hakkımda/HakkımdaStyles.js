import { makeStyles } from "@material-ui/core";

const HakkımdaStyles = makeStyles(theme => ({
    container: {
        margin: "50px 0px" ,
        [theme.breakpoints.up("xs")] : {padding: "0px 10px"},
        [theme.breakpoints.up("sm")] : {padding: "0px 40px"},
        [theme.breakpoints.up("md")] : {padding: "0px 60px", },
        [theme.breakpoints.up("lg")] : {padding: "0px 85px", },
    },
    paragraph: {
        fontFamily: "proxima-nova",
        [theme.breakpoints.up("xs")] : {fontSize: "15px"},
        [theme.breakpoints.up("sm")] : {fontSize: "15px"},
        [theme.breakpoints.up("md")] : {fontSize: "16px"},
        [theme.breakpoints.up("lg")] : {fontSize: "18px"},
    },
    title: {
        fontFamily: "adobe-garamond-pro",
        [theme.breakpoints.up("xs")] : {fontSize: "1.50rem"},
        [theme.breakpoints.up("sm")] : {fontSize: "2.50rem"},
        [theme.breakpoints.up("md")] : {fontSize: "3.25rem"},
        [theme.breakpoints.up("lg")] : {fontSize: "3.75rem"},
    },
    avatar: {
        height: "100%",
        width: "100%",
        border: "3px solid #7E1014"
    },
    avatarLine: {
        width: "100%",
        border: "1px solid #7E1014"
    }
}));

export default HakkımdaStyles;