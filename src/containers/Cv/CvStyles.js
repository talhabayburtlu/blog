import { makeStyles } from "@material-ui/core";

const CvStyles = makeStyles({
    appbar: {
        backgroundColor: "#7E1014",
    },
    button: {
        //border: "2px solid #7E1014",
        borderRadius: "0px",
        minWidth: "120px",
        height: "100%",
        fontFamily: "din-condensed-web",
        backgroundColor: "#7E1014",
        color: "#FFF9D6",
    },
    cvbody: {
        padding: "50px 0px 100px 0px",
        backgroundColor: "#335C67",
        //overflow: "scroll"
    },
    document: {
        height: "800px",
        width: "90%"
    }

});

export default CvStyles;    