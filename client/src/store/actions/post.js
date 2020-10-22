import * as actionTypes from "./actionTypes";

export const updateSearch = (search) => {
    return {
        type: actionTypes.UPDATE_SEARCH,
        search: search
    }
}