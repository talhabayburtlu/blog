import {makeStyles} from "@material-ui/core"

const BlogSnackbarStyles = makeStyles(theme => ({
    snackbar: {
        [theme.breakpoints.down("sm")] : {width: "auto"},
        [theme.breakpoints.up("sm")] : {width: "150px"},
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

export default BlogSnackbarStyles;