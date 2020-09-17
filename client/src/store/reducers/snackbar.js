import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
    open: false,
    message: "",
    severity: ""
}

const openSnackbar = (state,action) =>  {
    return updateObject(state, {open: true , message: action.message, severity: action.severity})
}

const closeSnackbar = (state,action) =>  {
    return updateObject(state, {open: false , message: "", severity: ""})
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.OPEN_SNACKBAR: return openSnackbar(state,action);
        case actionTypes.CLOSE_SNACKBAR: return closeSnackbar(state,action);
        default: return state;
    }
}

export default reducer;
