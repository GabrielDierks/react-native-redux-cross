import React from 'react'
import ReactDOM from 'react-dom'
import { connect, Provider } from 'react-redux'
import {
    ConnectedRouter,
    routerMiddleware,
    push
} from 'react-router-redux'
import { createStore, applyMiddleware } from 'redux'
import createHistory from 'history/createBrowserHistory'

import { Route, Switch } from 'react-router'
import Login from './web/components/LoginScreen'
import MainScreen from './web/components/MainScreen'
import StartScreen from './web/components/StartScreen'

import {authFail} from "./web/actions/actions";

import AppReducer from "./web/reducers"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ;

const history = createHistory()


const store = createStore(
    AppReducer,
    composeEnhancers(applyMiddleware(routerMiddleware(history)))

);
const PrivateRoute = connect(state => ({
    isAuthenticated: state.auth.isAuthenticated
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
