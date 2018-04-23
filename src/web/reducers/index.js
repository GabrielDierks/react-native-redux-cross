import { combineReducers } from 'redux';
import { reducer as formReducer } from "redux-form";

import {

    CHECK_AUTH_SUCCESS,
    LOGOUT,
} from '../../actions/constants';

/** Start with two routes: The Main screen, with the Login screen on top.
 const firstAction = AppNavigator.router.getActionForPathAndParams('Main');
 const tempNavState = AppNavigator.router.getStateForAction(firstAction);
 const secondAction = AppNavigator.router.getActionForPathAndParams('Login');
 const initialNavState = AppNavigator.router.getStateForAction(
 secondAction,
 tempNavState
 );
 **/


const initialAuthState = { isLoggedIn: false };

function auth(state = initialAuthState, action) {
    switch (action.type) {
        case CHECK_AUTH_SUCCESS:
            return { ...state, isLoggedIn: true };
        case LOGOUT:
            return { ...state, isLoggedIn: false };
        default:
            return state;
    }
}


const AppReducer = combineReducers({
    form: formReducer,
    auth,
});

export default AppReducer;


