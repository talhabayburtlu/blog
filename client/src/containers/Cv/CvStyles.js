import { makeStyles } from "@material-ui/core";

const CvStyles = makeStyles(theme => ({
    appbar: {
        backgroundColor: "#7E1014",
    },
    container: {
        padding: "0px 15px",
        [theme.breakpoints.up("sm")] : {padding: "0px 40px"},
        [theme.breakpoints.up("md")] : {padding: "0px 60px", },
        [theme.breakpoints.up("lg")] : {padding: "0px 85px", },
    },
    button: {
        borderRadius: "0px",
        fontFamily: "din-condensed-web",
        backgroundColor: "#7E1014",
        color: "#FFF9D6",
        [theme.breakpoints.up("xs")] : {height: "%80" , minWidth: "90px"},
        [theme.breakpoints.up("md")] : {height: "%100", minWidth: "120px"},
    },
    cvbody: {
        //padding: "50px 0px 100px 0px",
        backgroundColor: "#335C67",
        [theme.breakpoints.up("xs")] : {padding: "25px 0px 50px 0px"},
        [theme.breakpoints.up("md")] : {padding: "50px 0px 100px 0px"},
    },
    document: {
        width: "90%",
        [theme.breakpoints.up("xs")] : {height: "600px",},
        [theme.breakpoints.up("sm")] : {height: "700px",},
        [theme.breakpoints.up("md")] : {height: "800px",},
    }

}));

export default CvStyles;    