import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
    token: localStorage.getItem("token"),
    error: null,
    loading: false,
}

const loginStart = (state,action) =>  {
    return updateObject(state, {error: false , loading: true})
}

const loginSuccess = (state,action) =>  {
    action.closeLoginPopover()
    return updateObject(state , {
        token: action.token,
        error: false,
        loading: false
    })
}

const loginFail = (state,action) =>  {
    return updateObject(state , {
        error: action.error,
        loading: false
    })
}

const logout = (state,action) => {
    return updateObject(state , {
        token: null,
    })
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOGIN_START: return loginStart(state,action);
        case actionTypes.LOGIN_SUCCESS: return loginSuccess(state,action);
        case actionTypes.LOGIN_FAIL: return loginFail(state,action);
        case actionTypes.LOGOUT: return logout(state,action);
        default: return state;
    }
}

export default reducer;