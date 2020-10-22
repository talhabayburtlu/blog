import React from "react";
import { connect } from "react-redux";
import {Snackbar, SnackbarContent} from "@material-ui/core";

import BlogSnackbarStyles from "./BlogSnackbarStyles";
import * as actions from "../../store/actions/index";

const BlogSnackbar = (props) => {
    const BlogSnackbarClasses = BlogSnackbarStyles();

    return (
        <React.Fragment>
           <Snackbar 
                className={BlogSnackbarClasses.snackbar}
                open={props.snackbarOpen}
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                autoHideDuration={3000} 
                onClose={props.onSnackbarClose}
            >
                <SnackbarContent 
                    className={props.snackbarSeverity === "success" ? BlogSnackbarClasses.snackBarSuccess :
                    props.snackbarSeverity === "error" ? BlogSnackbarClasses.snackBarFail : 
                    props.snackbarSeverity === "warning" ? BlogSnackbarClasses.snackBarWarning : null} 
                    message={props.snackbarMessage} 
                    style={{borderRadius: "10px" }}/>
            </Snackbar>
        </React.Fragment>
        
    );
}

const mapStateToProps = state => {
    return {
        snackbarOpen : state.snackbar.open,
        snackbarMessage : state.snackbar.message,
        snackbarSeverity : state.snackbar.severity
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onSnackbarOpen : (message,severity) => dispatch((actions.openSnackbar(message,severity))),
        onSnackbarClose : () => dispatch(actions.closeSnackbar())
    };
};


export default connect(mapStateToProps,mapDispatchToProps)(BlogSnackbar);