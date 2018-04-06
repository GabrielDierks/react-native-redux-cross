import { combineReducers } from 'redux';
import { NavigationActions } from 'react-navigation';
import { reducer as formReducer } from "redux-form";

import { AppNavigator } from '../navigators/AppNavigator';


import {
    LOGIN,
    CHECK_AUTH,
    CHECK_AUTH_SUCCESS,
    LOGOUT,
    SET_USER
} from '../actions/constants';

/** Start with two routes: The Main screen, with the Login screen on top.
const firstAction = AppNavigator.router.getActionForPathAndParams('Main');
const tempNavState = AppNavigator.router.getStateForAction(firstAction);
const secondAction = AppNavigator.router.getActionForPathAndParams('Login');
const initialNavState = AppNavigator.router.getStateForAction(
  secondAction,
  tempNavState
);
**/

const initialNavState = AppNavigator.router.getStateForAction('Start');
const firstAction = AppNavigator.router.getActionForPathAndParams('Main');
const secondAction = AppNavigator.router.getActionForPathAndParams('Login');

function nav(state = initialNavState, action) {
  let nextState;
  switch (action.type) {
    case LOGIN:
      nextState = AppNavigator.router.getStateForAction(
        secondAction
      );
      break;
      case CHECK_AUTH:
      nextState = AppNavigator.router.getStateForAction(
        firstAction
      );
      break;
    case LOGOUT:
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'Start' })
      );
      break;
    default:
      nextState = AppNavigator.router.getStateForAction(action, state);
      break;
  }

  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
}

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
    nav,
  auth,
});

export default AppReducer;
