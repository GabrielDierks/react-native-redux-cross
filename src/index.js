import React from 'react'
import ReactDOM from 'react-dom'
import { connect, Provider } from 'react-redux'
import {
    ConnectedRouter,
    routerReducer,
    routerMiddleware,
    push
} from 'react-router-redux'

import { createStore, applyMiddleware, combineReducers } from 'redux'
import createHistory from 'history/createBrowserHistory'

import { Route, Switch } from 'react-router'
import LoginScreen from './web/components/LoginScreen'
import MainScreen from './web/components/MainScreen'
import StartScreen from './web/components/StartScreen'

const history = createHistory()

const authSuccess = () => ({
    type: 'AUTH_SUCCESS'
})

const authFail = () => ({
    type: 'AUTH_FAIL'
})

const initialState = {
    isAuthenticated: false
}

const authReducer = (state = initialState , action) => {
    switch (action.type) {
        case 'AUTH_SUCCESS':
            return {
                ...state,
                isAuthenticated: true
            }
        case 'AUTH_FAIL':
            return {
                ...state,
                isAuthenticated: false
            }
        default:
            return state
    }
}

const store = createStore(
    combineReducers({ routerReducer, authReducer }),
    applyMiddleware(routerMiddleware(history)),
)

const PrivateRoute = connect(state => ({
    isAuthenticated: state.authReducer.isAuthenticated
}))(StartScreen)

const Login = connect(null, dispatch => ({
    login: () => {
        dispatch(authSuccess())
        dispatch(push('/'))
    }
}))(LoginScreen)

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
