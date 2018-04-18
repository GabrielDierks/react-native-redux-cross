import React from 'react'
import { Field, reduxForm, SubmissionError } from 'redux-form'

import { authSuccess } from '../actions/actions';


const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

function submit(values) {
    return sleep(1000).then(() => {
        // simulate server latency
        if (!['test'].includes(values.username)) {
            throw new SubmissionError({
                username: 'User does not exist',
                _error: 'Login failed!'
            })
        } else if (values.password !== '123') {
            throw new SubmissionError({
                password: 'Wrong password',
                _error: 'Login failed!'
            })
        } else {
            window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`);
            this.props.dispatch(authSuccess());
        }
    })
}

const renderField = ({ input, label, type, meta: { touched, error } }) => (
    <div>
        <label>{label}</label>
        <div>
            <input {...input} placeholder={label} type={type} />
            {touched && error && <span>{error}</span>}
        </div>
    </div>
)

const LoginScreen = props => {
    const { error, handleSubmit, pristine, reset, submitting } = props
    return (
        <form onSubmit={handleSubmit(submit)}>
            <Field
                name="username"
                type="text"
                component={renderField}
                label="Username"
            />
            <Field
                name="password"
                type="password"
                component={renderField}
                label="Password"
            />
            {error && <strong>{error}</strong>}
            <div>
                <button type="submit" disabled={submitting} >
                    Log In
                </button>
                {/*<button type="button" disabled={pristine || submitting} onClick={reset}>
                    Clear Values
                </button>*/}
            </div>
        </form>
    )
}

export default reduxForm({
    form: 'LoginScreen' // a unique identifier for this form
})(LoginScreen)