import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
    token: null,
    error: null,
    loading: false,
}

const loginStart = (state,action) =>  {
    return updateObject(state, {error: false , loading: true})
}

const loginSuccess = (state,action) =>  {
    return updateObject(state , {
        token: action.token,
        error: false,
        loading: false
    })
}

const loginFail = (state,action) =>  {
    return updateObject(state , {
        error: true,
        loading: false
    })
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOGIN_START: return loginStart(state,action);
        case actionTypes.LOGIN_SUCCESS: return loginSuccess(state,action);
        case actionTypes.LOGIN_FAIL: return loginFail(state,action);
        default: return state;
    }
}

export default reducer;