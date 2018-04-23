import React from 'react'

export default class LoginContainer extends React.Component {
    render() {
        return <button onClick={this.props.login}>Login Here!</button>
    }
}