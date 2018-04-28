import { combineReducers } from 'redux';
import { reducer as formReducer } from "redux-form";
import {routerReducer} from "react-router-redux";


import {
    AUTH_SUCCESS,
    AUTH_FAIL
} from '../../web/actions/constants';

const initialState = {
    isAuthenticated: false
}

const auth = (state = initialState , action) => {
    switch (action.type) {
        case AUTH_SUCCESS:
            return {
                ...state,
                isAuthenticated: true
            }
        case AUTH_FAIL:
            return {
                ...state,
                isAuthenticated: false
            }
        default:
            return state
    }
}


const AppReducer = combineReducers({
    auth,routerReducer, form: formReducer,
})


export default AppReducer;


