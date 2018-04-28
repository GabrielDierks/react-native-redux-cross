import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import {
    ConnectedRouter,
    routerMiddleware
} from 'react-router-redux'
import { createStore, applyMiddleware } from 'redux'
import createHistory from 'history/createBrowserHistory'

import { Route, Switch } from 'react-router'
import Login from './web/components/LoginScreen'

import {PrivateRoute} from "./web/navigators/WebNavigator";
import {Home} from "./web/navigators/WebNavigator";

import AppReducer from "./web/reducers"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ;

const history = createHistory()


const store = createStore(
    AppReducer,
    composeEnhancers(applyMiddleware(routerMiddleware(history)))

);


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
