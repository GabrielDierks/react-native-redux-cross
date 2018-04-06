import React from 'react';
import { View, StatusBar, AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware , compose} from 'redux';
import devTools from "remote-redux-devtools";
import { Root } from "native-base";
import ReactDOM from 'react-dom';

import AppReducer from './src/reducers';
import AppWithNavigationState from './navigators/AppNavigator';
import { middlewares } from './utils/redux';
import registerServiceWorker from '../registerServiceWorker';

const enhancer = compose(
    applyMiddleware(middlewares),
    devTools({
        name: "fraport-grow-native",
        realtime: true
    })
);

const store = createStore(AppReducer, enhancer);

class ReduxExampleApp extends React.Component {
    

    render() {
    return (
      <Provider store={store}>
          <Root>
        <AppWithNavigationState />
        <StatusBar hidden={true}/>
          </Root>
      </Provider>
    );
  }
}

//AppRegistry.registerComponent('ReduxExample', () => ReduxExampleApp);

ReactDOM.render(<Provider />, document.getElementById('root'));
registerServiceWorker();


export default ReduxExampleApp;
