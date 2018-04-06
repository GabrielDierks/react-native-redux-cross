import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/actions';
import { loginScreen } from '../../actions/actions';
import { Text, View, Button} from "native-base";

import styles from "./styles";

//import { NavigationActions } from 'react-navigation';

const AuthButton = ({ logout, loginScreen, isLoggedIn }) => (
  <View>

  <Button style={styles.btn}
    onPress={isLoggedIn ? logout : loginScreen}
  >
    <Text style={styles.btntxt}>
        {isLoggedIn ? 'Log Out' : 'ANMELDEN'}
    </Text>
  </Button>

  </View>
);

AuthButton.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired,
  loginScreen: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  isLoggedIn: state.auth.isLoggedIn,
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logoutUser()),
  loginScreen: () => dispatch(loginScreen()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthButton);
