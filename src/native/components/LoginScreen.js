import React, { Component } from 'react';
import { StyleSheet, ImageBackground } from 'react-native';
import { Container, Content, Item, Input, Button, Icon, View, Text, Toast} from "native-base";
import { Field, reduxForm } from "redux-form";
import { PropTypes } from "prop-types";

import styles from "./styles";
import { checkAuth } from '../../actions/actions';
import { checkAuthSuccess } from '../../actions/actions';

const required = value => (value ? undefined : "Required");
const maxLength = max => value =>
    value && value.length > max ? `Must be ${max} characters or less` : undefined;
const maxLength15 = maxLength(15);
const minLength = min => value =>
    value && value.length < min ? `Must be ${min} characters or more` : undefined;
const minLength8 = minLength(8);
const email = value =>
    value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
        ? "Invalid email address"
        : undefined;
const alphaNumeric = value =>
    value && /[^a-zA-Z0-9 ]/i.test(value)
        ? "Only alphanumeric characters"
        : undefined;

export interface Props {
    navigation: any;
}
export interface State {}
class Login extends React.Component<Props, State> {
    textInput: any;

    renderInput({ input, label, type, meta: { touched, error, warning } }) {
        return (
            <Item error={error && touched}>
                <Input
                    ref={c => (this.textInput = c)}
                    placeholder={input.name === "email" ? "E-Mail Adresse" : "Passwort"}
                    secureTextEntry={input.name === "password" ? true : false}
                    {...input}
                />
            </Item>
        );
    }



    login() {
        if (this.props.valid) {
            this.props.dispatch(checkAuth());
            this.props.dispatch(checkAuthSuccess());
        } else {
            Toast.show({
                text: "Enter Valid Username & password!",
                duration: 2000,
                position: "top",
                textStyle: { textAlign: "center" }
            });
        }
    }

    render() {
        return (
            <Container>
                <View style={styles.container}>
                    <Content>
                            <View style={styles.bg}>
                                <View style={styles.input}>
                                    <View style={styles.inputtxt}>
                                    <Field
                                        name="email"
                                        component={this.renderInput}
                                        validate={[email,required]}
                                    />
                                    </View>
                                    <View style={styles.inputtxt}>
                                    <Field
                                        name="password"
                                        component={this.renderInput}
                                        validate={[alphaNumeric, minLength8, maxLength15,required]}
                                    />
                                    </View>
                                </View>
                                <Button
                                    style={styles.btn}
                                    onPress={() => this.login()}
                                >
                                    <Text style={styles.btntxt}>
                                        ANMELDEN</Text>
                                </Button>
                            </View>
                    </Content>
                </View>
            </Container>
        );
    }
}
/**
const LoginScreen = ({ navigation }) => (
  <View style={styles.container}>
    <Text style={styles.welcome}>
      Screen A
    </Text>
      <Field name="email" component={this.renderInput} />
      <Field name="password" component={this.renderInput} />
      <Button
      onPress={() => navigation.dispatch(checkAuth())}
      title="Log in"
    />
  </View>
);
**/
const LoginScreen = reduxForm(
    {
        form: "login",
    }
)(Login);

LoginScreen.navigationOptions = {
    header: null
};

export default LoginScreen;
