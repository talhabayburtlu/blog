import {withStyles} from "@material-ui/core"

const PostShareStyles = withStyles((theme) => ({
    grid: {
        [theme.breakpoints.up("xs")] : {margin: "20px 0px",padding: "0px 10px", },
        [theme.breakpoints.up("sm")] : {margin: "40px 0px",padding: "0px 40px", },
        [theme.breakpoints.up("md")] : {margin: "80px 0px", padding: "0px 60px", },
        [theme.breakpoints.up("lg")] : {margin: "100px 0px",padding: "0px 85px", },
    },
    gridContainerItem: {
        border: "3px dashed #335C67",
        [theme.breakpoints.up("xs")] : {padding: "0px 10px", },
        [theme.breakpoints.up("sm")] : {padding: "0px 40px", },
        [theme.breakpoints.up("md")] : {padding: "0px 60px", },
        [theme.breakpoints.up("lg")] : {padding: "0px 85px", },
    },
    breadCrumb: {
        fontFamily: "adobe-garamond-pro",
        fontWeight: 600,
        [theme.breakpoints.up("xs")] : {fontSize: "15px"},
        [theme.breakpoints.up("sm")] : {fontSize: "18px"},
        [theme.breakpoints.up("md")] : {fontSize: "20px"},
    },
}));

export default PostShareStyles;