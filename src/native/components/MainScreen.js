import React from 'react';
import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';

import LoginStatusMessage from './LoginStatusMessage';
import AuthButton from './AuthButton';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

const MainScreen = () => (
  <View style={styles.container}>
    <LoginStatusMessage />
    <AuthButton />
  </View>
);

MainScreen.propTypes = {
    navigation: PropTypes.object.isRequired,
};

MainScreen.navigationOptions = {
  title: 'Home Screen',
};

export default MainScreen;
