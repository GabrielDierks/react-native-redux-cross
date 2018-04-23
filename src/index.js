import React from 'react'
import ReactDOM from 'react-dom'
import { connect, Provider } from 'react-redux'
import {
    ConnectedRouter,
    routerReducer,
    routerMiddleware,
    push
} from 'react-router-redux'
import {reducer as formReducer} from 'redux-form'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import createHistory from 'history/createBrowserHistory'

import { Route, Switch } from 'react-router'
import Login from './web/components/LoginScreen'
import MainScreen from './web/components/MainScreen'
import StartScreen from './web/components/StartScreen'

import {authFail} from "./web/actions/actions";

import {
    AUTH_SUCCESS,
    AUTH_FAIL
} from './web/actions/constants';

const history = createHistory()



const initialState = {
    isAuthenticated: false
}

const authReducer = (state = initialState , action) => {
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

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ;

const reducer = combineReducers({
    authReducer,routerReducer, form: formReducer,
})

const store = createStore(
    reducer,
    composeEnhancers(applyMiddleware(routerMiddleware(history)))

);
const PrivateRoute = connect(state => ({
    isAuthenticated: state.authReducer.isAuthenticated
}))(StartScreen)



const Home = connect(null, dispatch => ({
    logout: () => {
        dispatch(authFail())
        dispatch(push('/login'))
    }
}))(MainScreen)

const app = document.getElementById('root');

    ReactDOM.render(
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <Switch>
                    <Route path="/login" component={Login}/>
                    <PrivateRoute exact path="/" component={Home}/>
                </Switch>
            </ConnectedRouter>
        </Provider>,
        app);
