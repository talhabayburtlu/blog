import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
    search: ""
}

const updateSearch = (state,action) => {
    return updateObject(state , {search: action.search})
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.UPDATE_SEARCH: return updateSearch(state,action);
        default: return state;
    }
}

export default reducer;
