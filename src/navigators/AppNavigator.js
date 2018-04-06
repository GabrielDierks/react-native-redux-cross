import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';

import StartScreen from '../native/components/StartScreen';
import LoginScreen from '../native/components/LoginScreen';
import MainScreen from '../native/components/MainScreen';
import ProfileScreen from '../native/components/ProfileScreen';
import { addListener } from '../utils/redux';

export const AppNavigator = StackNavigator({
    Start: { screen: StartScreen },
    Main: { screen: MainScreen },
    Login: { screen: LoginScreen },
    Profile: { screen: ProfileScreen },

});

class AppWithNavigationState extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    nav: PropTypes.object.isRequired,
  };

  render() {
    const { dispatch, nav } = this.props;
    return (
      <AppNavigator
        navigation={addNavigationHelpers({
          dispatch,
          state: nav,
          addListener,
        })

      }
      />
  );
  }
}

const mapStateToProps = state => ({
  nav: state.nav,
});

export default connect(mapStateToProps)(AppWithNavigationState);
