import {withStyles} from "@material-ui/core"

const PostShareStyles = withStyles((theme) => ({
    grid: {
        margin: "100px 0px",
        padding: "0px 85px"
    },
    gridContainerItem: {
        border: "3px dashed #335C67",
        padding: "0px 20%"
    },
    breadCrumb: {
        fontFamily: "adobe-garamond-pro",
        fontSize: "20px",
        fontWeight: 600
    },
    snackBarSuccess: {
        backgroundColor: "#388050"
    },
    snackBarFail: {
        backgroundColor: "#7E1014"
    },
    snackBarInformation: {
        backgroundColor: "#335C67"
    },
    snackBarWarning: {
        backgroundColor: "#E09F3E"
    }
}));

export default PostShareStyles;