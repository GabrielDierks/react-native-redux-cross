import React from 'react';
import { Provider } from 'react-redux';
import { createStore, compose} from 'redux';
import devTools from "remote-redux-devtools";
import ReactDOM from 'react-dom';
import AppReducer from './web/reducers';
import App from "./web/components/App.js";


const enhancer = compose(
    devTools({
        name: "fraport-grow-native",
        realtime: true
    })
);

const store = createStore(AppReducer, enhancer);

const app = document.getElementById('root');

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    app);


