import * as actionTypes from "./actionTypes";
import axios from "axios";


export const loginStart = () => {
    return {
        type: actionTypes.LOGIN_START,
        error: null,
        loading: true
    }
}

export const loginSuccess = (token,closeLoginPopover) => {
    return {
        type: actionTypes.LOGIN_SUCCESS,
        token: token,
        error: null,
        loading: false,
        closeLoginPopover: closeLoginPopover
    }
}

export const loginFail = (error) => {
    return {
        type: actionTypes.LOGIN_FAIL,
        error: error,
        loading: false
    }
}

export const login = (username,password,closeLoginPopover) => {
    return dispatch => {
        dispatch(loginStart())

        axios({method: "post" , url: "/blog/admin/login" , data: {username,password}})
        .then((response) => {
            localStorage.setItem("id" , response.data._id)
            localStorage.setItem("token" , response.data.token);
            dispatch(loginSuccess(response.data.token, closeLoginPopover))
        })
        .catch((e) => {
            dispatch(loginFail(e))
        })   
    }
}

export const logout = () => {
    localStorage.removeItem("id");
    localStorage.removeItem("token");

    return {
        type: actionTypes.LOGOUT
    }
}