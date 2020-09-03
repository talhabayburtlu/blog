import * as actionTypes from "./actionTypes";
import axios from "axios";


export const loginStart = () => {
    return {
        type: actionTypes.LOGIN_START,
        error: false,
        loading: true
    }
}

export const loginSuccess = (token) => {
    return {
        type: actionTypes.LOGIN_SUCCESS,
        token: token,
        error: false,
        loading: false
    }
}

export const loginFail = () => {
    return {
        type: actionTypes.LOGIN_FAIL,
        error: true,
        loading: false
    }
}

export const login = (username,password) => {
    return dispatch => {
        dispatch(loginStart())

        axios({method: "post" , url: "/blog/admin/login" , data: {username,password}})
        .then((response) => {
            localStorage.setItem("id" , response.data._id)
            localStorage.setItem("token" , response.data.Token);
            dispatch(loginSuccess(response.data.token))
        })
        .catch((e) => {
            dispatch(loginFail(e))
        })   
    }
}