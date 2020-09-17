import * as actionTypes from "./actionTypes";

export const openSnackbar = (message,severity) => {
    return {
        type: actionTypes.OPEN_SNACKBAR,
        message: message,
        severity: severity
    }
}

export const closeSnackbar = () => {
    return {
        type: actionTypes.CLOSE_SNACKBAR
    }
}