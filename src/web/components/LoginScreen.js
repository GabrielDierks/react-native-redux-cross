import React from 'react'
import { Field, reduxForm } from 'redux-form'

import {authSuccess} from "../actions/actions";
import {authFail} from "../actions/actions";
import {push} from "react-router-redux";


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

class LoginScreen extends React.Component {


    renderField({ input, label, type, meta: { touched, error }}) {
        return (
            <div>
                <label>{label}</label>
                <div>
                    <input
                        placeholder={input.name === "email" ? "E-Mail Adresse" : "Passwort"}
                        type={type} {...input} />
                    {touched && error && <span>{error}</span>}
                </div>
            </div>
        );
    }

    login() {
        if (this.props.valid) {
            this.props.dispatch(authSuccess())
            this.props.dispatch(push('/'))
        } else {
            this.props.dispatch(authFail())
            this.props.dispatch(push('/login'))
        }
    }

    render() {

        return (
            <form>
                <Field
                    name="email"
                    type="text"
                    component={this.renderField}
                    validate={[email,required]}
                />
                <Field
                    name="password"
                    type="password"
                    component={this.renderField}
                    validate={[alphaNumeric, minLength8, maxLength15,required]}
                />

                <div>
                    <button onClick={() => this.login()}>
                        Log In
                    </button>
                </div>
            </form>
        );
    }
}

const Login = reduxForm(
    {
        form: 'submitValidation',
    }
)(LoginScreen);



export default Login;


