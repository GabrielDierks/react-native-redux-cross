import React from 'react';
import { View, StatusBar, AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware , compose} from 'redux';
import devTools from "remote-redux-devtools";
import { Root } from "native-base";
import Expo from 'expo';

import AppReducer from './src/reducers';
import AppWithNavigationState from './src/navigators/AppNavigator';
import { middlewares } from './src/utils/redux';


const enhancer = compose(
    applyMiddleware(middlewares),
    devTools({
        name: "fraport-grow-native",
        realtime: true
    })
);

const store = createStore(AppReducer, enhancer);

class ReactNativeReduxCross extends React.Component {
    constructor(props) {
        super(props);
        this.state = { loading: true };
    }

    async componentWillMount() {
        await Expo.Font.loadAsync({
            Roboto: require("native-base/Fonts/Roboto.ttf"),
            Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
            Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
        });
        this.setState({ loading: false });
    }


    render() {
        if (this.state.loading) {
            return <Expo.AppLoading />;
        }
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

AppRegistry.registerComponent('ReactNativeReduxCross', () => ReactNativeReduxCross);


export default ReactNativeReduxCross;
