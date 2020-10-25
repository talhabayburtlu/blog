import { makeStyles } from "@material-ui/core";

const HesaplarımStyles = makeStyles(theme => ({
    container: {
        
        [theme.breakpoints.up("xs")] : {marginTop: "10px",padding: "0px 10px", },
        [theme.breakpoints.up("sm")] : {padding: "0px 40px", },
        [theme.breakpoints.up("md")] : {marginTop: "25px", padding: "0px 60px", },
        [theme.breakpoints.up("lg")] : {padding: "0px 85px", },
    },
    innerContainer: {
        padding: "15px 0px",
        [theme.breakpoints.up("xs")] : {height: "175px"},
        [theme.breakpoints.up("sm")] : {height: "250px"},
        [theme.breakpoints.up("md")] : {height: "275px"},
        [theme.breakpoints.up("lg")] : {height: "300px"},
    },
    line: {
        margin: "auto 0px",
        height: "2px",
        backgroundColor: "#7E1014",
    },
    header: {
        fontFamily: "adobe-garamond-pro",
        [theme.breakpoints.up("xs")] : {fontSize: "14px"},
        [theme.breakpoints.up("sm")] : {fontSize: "16px"},
        [theme.breakpoints.up("md")] : {fontSize: "24px"},
        [theme.breakpoints.up("lg")] : {fontSize: "32px"},
    },
    iconButton: {
        backgroundColor: "#FFF9D6",
        // width: "75%",
        borderRadius: "15px",
        "&:hover": {
            backgroundColor: "#FFF3AD",
        }
    },
    icon: {
        marginRight: "5%",
        [theme.breakpoints.up("xs")] : {width: "24px",height: "24px"},
        [theme.breakpoints.up("sm")] : {width: "36px",height: "36px"},
        [theme.breakpoints.up("md")] : {width: "48px",height: "48px"},
    },
    mediaName: {
        fontFamily: "adobe-garamond-pro",
        [theme.breakpoints.up("xs")] : {fontSize: "14px"},
        [theme.breakpoints.up("sm")] : {fontSize: "24px"},
        [theme.breakpoints.up("md")] : {fontSize: "32px"},
    },
}));

export default HesaplarımStyles;