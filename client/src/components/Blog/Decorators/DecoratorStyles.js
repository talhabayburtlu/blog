import {makeStyles} from "@material-ui/core"

const DecoratorStyles = makeStyles(theme =>({
    youtube: {
        [theme.breakpoints.up("xs")] : {width:"210px" , height:"158px"},
        [theme.breakpoints.up("sm")] : {width:"315px" , height:"236px"},
        [theme.breakpoints.up("md")] : {width:"420px" , height:"315px"},
    },
    spotify: {
        [theme.breakpoints.up("xs")] : {width:"225px" , height:"80px"},
        [theme.breakpoints.up("sm")] : {width:"500px" , height:"80px"},
    },
    twitter: {
        [theme.breakpoints.up("xs")] : {width:"250px" , height:"250px"},
        [theme.breakpoints.up("sm")] : {width:"400px" , height:"400px"},
        [theme.breakpoints.up("md")] : {width:"500px" , height:"500px"},
    }
}));

export default DecoratorStyles;